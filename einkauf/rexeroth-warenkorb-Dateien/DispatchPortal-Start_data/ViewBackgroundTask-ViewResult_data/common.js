/**
 * Checks or unchecks all checkboxes with class 'autocheck_<postfix>', based
 * on the events source checked-status.
 */
function autocheck(source, classPostfix) {
	if (source.checked) {
		checkAll(source, classPostfix);
	} else {
		uncheckAll(source, classPostfix);
	}
}

/**
 * Checks all checkboxes with class 'autocheck_<postfix>'
 */
function checkAll(source, classPostfix) {
	var classname = 'autocheck_' + classPostfix;
	
	$$('input[class~="' + classname + '"]').each(function(checkbox) {
		checkbox.stopObserving('click');
		checkbox.observe('click', uncheckSourceBox.bind(source));
		checkbox.checked = 'checked';
	});
}

/**
 *  Unchecks all checkboxes with class 'autocheck_<postfix>'
 */
function uncheckAll(source, classPostfix) {
	var classname = 'autocheck_' + classPostfix;

	$$('input[class~="' + classname + '"]').each(function(checkbox) {
		checkbox.checked = null;
	});
}

/**
 * The event handler to ensure the 'select all' checkbox is unchecked if 
 * a autochecked checkbox is unchecked. To be bound on the 'Select all'-
 * checkbox.
 */
function uncheckSourceBox(evt) {
	if (!this.checked) {
		return;
	} else {
		var eventSource = Event.element(evt);
		if (eventSource.checked == false) {
			this.checked = null;
		}
	}
}

/**
 * Helper to open a popup
 * @param url The url of the popup contents
 * @param wname The name of the window
 * @param width The width of the popup
 * @param height The height of the popup
 */
function openWindow(url, wname, width, height, params) {
	var popup = window.open(url, wname, "height=" + height + ",width=" + width + ",left=100,top=100,scrollbars=yes,status=no,toolbar=no,location=no,resizable=yes");
	if(popup!==null){//ieTester returns null
	  popup.focus();
	}
	return popup;	
}


/**
 * Parses a date in the specified (Java-)format.
 */
Date.parseWithFormat = function(input, dateFormat) {
	// Usual delimiters for different date formats
	var formatChars = $w('/ . -');
	formatChars.push(' ');
	
	// Usual tokens for the different date parts
	var dayTokens = $w('d dd');
	var monthTokens = $w('M MM mm m');
	var yearTokens = $w('yy yyyy');
	
	var aFormatChar = null;
	var aFormat = null;
	
	formatChars.each(function(formatChar) {
		var aTmpFormat = dateFormat.split(formatChar);
		if (aTmpFormat.length == 3) {
			aFormat = aTmpFormat;
			aFormatChar = formatChar;
		}
	});
	
	if (aFormat == null) {
		return null;
	}
	
	var aInputDate = input.split(aFormatChar);
	if (aInputDate.length != 3) {
		return null;
	}
	
	var parsedDay, parsedMonth, parsedYear;
	
	for (var i=0; i<3; i++) {
		var currentDateToken = aInputDate[i];
		var currentFormatToken = aFormat[i];
		
		if (dayTokens.indexOf(currentFormatToken) != -1) {
			parsedDay = parseInt(currentDateToken, 10);
		} else if (monthTokens.indexOf(currentFormatToken) != -1) {
			parsedMonth = parseInt(currentDateToken, 10) - 1;
		} else if (yearTokens.indexOf(currentFormatToken) != -1) {
			parsedYear = parseInt(currentDateToken, 10);
			if (currentDateToken.length == 2) {
				if (parsedYear < 50) {
					parsedYear += 2000;
				} else {
					parsedYear += 1900;
				}
			}
		}
	}
	
	if (isNaN(parsedDay) || isNaN(parsedMonth) || isNaN(parsedYear)) {
		return null;
	}
	
	var constructedDate = new Date(parsedYear, parsedMonth, parsedDay);
	
	return constructedDate;
}

/**
 * Formats a date in the specified (Java-)format.
 */
Date.prototype.format = function(pattern) {
	// Usual delimiters for different date formats
	var formatChars = $w('/ . -');
	formatChars.push(' ');
	
	// Usual tokens for the different date parts
	var dayTokens = $w('d dd');
	var monthTokens = $w('M MM mm m');
	var yearTokens = $w('yy yyyy');
	
	formatChars.each(function(formatChar) {
		var aTmpFormat = pattern.split(formatChar);
		if (aTmpFormat.length == 3) {
			aFormat = aTmpFormat;
			aFormatChar = formatChar;
		}
	});
	
	if (aFormat == null) {
		return null;
	}
	
	var dateString = "";
	aFormat.each(function(token) {
		if (dayTokens.indexOf(token) != -1) {
			dateString = dateString + this.getDate().toPaddedString(token.length);
		} else if (monthTokens.indexOf(token) != -1) {
			dateString = dateString + (this.getMonth()+1).toPaddedString(token.length);
		} else if (yearTokens.indexOf(token) != -1) {
			if (token.length == 2) {
				dateString = dateString + this.getFullYear().toString().substring(2);
			} else {
				dateString = dateString + this.getFullYear();
			}
		}
		
		dateString += aFormatChar;
	}.bind(this));
	
	return dateString.substring(0, dateString.length-1);
}

function showShipToAddress(href, selectId){
	try{
		 var select = $P(selectId);
		 var UUID = select.options[select.selectedIndex].value;
		 
		 if((typeof UUID != "undefined") && (UUID !=null) && (UUID!="")){
			 openWindow(href+'?AddressID=' + escape(UUID), 'ShipToAddress', 600, 360);
		 }else{
			 //TODO Error message in case of an empty list
		 }
	}catch(e){
		 //TODO Error message in case of an empty list
	}
	return false;
}

function reloadFragment(targetWindow, href, parameters, id, mark){
	new Ajax.Request(href, 
	 {
	  method: "post",
	  parameters: parameters,
	  onComplete: function(REQ){
		try{
		  	if ((mark == "") || (REQ.responseText.indexOf(mark) != -1))
			  {
		  		targetWindow.document.getElementById(id).innerHTML = REQ.responseText;
			  }
		}catch(e){
			//Nothing to do here. Just supressing the exception.
		}
	  }
	 });
 }

function setParentFormValue(id, value) {
	var target = window.opener.$(id);
	target.value = value;
	if( !$P(target).hasClassName("add-done") && $F(target).length >= 1) {
		$P(target).addClassName("add-done");
		window.opener.addRow();
	}
}
 
function initTooltips() {
	$$('.tooltip').compact().each(function (elem) {
		var triggerElem = $P(elem.id + '_trigger');

		if (triggerElem) {
			new Tooltip(triggerElem, elem);
		}
	});

	// For all elements of class 'with-tooltip' the tite attribute
	// shall be shown as styled tooltip.
	$$('.with-tooltip').compact().each(function (elem) {
		if (elem.title) {
			new Tooltip(elem, elem.title);
			elem.removeAttribute('title');
		}
	});
}


//Extend DOM element functionality
Element.addMethods({
	// A simple DOM element builder methods.
	// Parameters:
	// - element: The container element where the new DOM element shall be inserted (must not be null)
	// - type: The tag name of the new element (must not be blank)
	// - options: Optional attributes to be set on the new DOM element 
	// - style: Optional CSS style to be used
	build: function(element, type, options, style) {
		var ret = $P(document.createElement(type));

		$H(options).each(function(pair) {
			ret[pair.key] = pair.value;
		});

		if (style) {
			ret.setStyle(style);
		}

		element.appendChild(ret);
		return ret;
	}
});
