function opener(tId) {
	var openerElem = $(tId);

	// show hidden info
	if(openerElem.hasClassName("i-opener")) {
		openerElem.removeClassName("i-opener");
		openerElem.addClassName("i-open");
		showFreeTextBox(tId);
		
		$$('.dependent.' + tId.replace(/\./g,"\\.")).each(function(node) {
			opener(node.id)
		})
	} else {
		openerElem.removeClassName("i-open");
		openerElem.addClassName("i-opener");
		hideFreeTextBox(tId);
		
		$$('.dependent.' + tId.replace(/\./g,"\\.")).each(function(node) {
			opener(node.id)
		})
	}
	
	return true;
}

function showFreeTextBox(openerId) {
	var infoTr = $(openerId + '_tr');
	var parentTr = $(openerId + '_parent');
	var errorTr = $(openerId + '_error');
	var permanentInfoTr = $(openerId + "_info");
	
	if (permanentInfoTr == null) {
		var additionTr = errorTr;
	} else {
		if (errorTr == null) {
			var additionTr = permanentInfoTr;
		} else {
			var additionTr = errorTr;
		}
	}
	
	
	if (infoTr != null) {	
		var previousTr = infoTr.previous('tr');
		var dependentClass = $(openerId).classNames().find(function(className) {
			return className.startsWith('dependent');
		});
		
		if (dependentClass) {
			previousTr.addClassName("no-border");
		} else {
			if (previousTr.hasClassName('table-loop-error')) {
				previousTr.addClassName("no-border-bot");
			} else {
				previousTr.addClassName("no-border");
			}
		}
		
		if (Prototype.Browser.IE) {
			infoTr.addClassName("table-loop");
			infoTr.style.display = 'block';
		} else {
			infoTr.setStyle({ 'display': 'table-row' });
		}
	}
}

function hideFreeTextBox(openerId) {
	var infoTr = $(openerId + '_tr');
	var parentTr = $(openerId + '_parent');
	var errorTr = $(openerId + '_error');
	var permanentInfoTr = $(openerId + "_info");
	
	if (permanentInfoTr == null) {
		var additionTr = errorTr;
	} else {
		if (errorTr == null) {
			var additionTr = permanentInfoTr;
		} else {
			var additionTr = errorTr;
		}
	}
	
	if (infoTr != null) {
		if (Prototype.Browser.IE) {
			infoTr.removeClassName("table-loop");
		}
		
		var dependentClass = $(openerId).classNames().find(function(className) {
			return className.startsWith('dependent');
		});
		
		var previousTr = infoTr.previous('tr');
		var dependentTrs = $$('.dependent.' + openerId.replace(/\./g,"\\."))
		var isParent = (dependentTrs.length > 0);
		
		if (dependentClass) {
			previousTr.removeClassName("no-border");

			var firstVisibleSibling = firstVisiblePreviousSibling(previousTr);
			var firstTd = firstVisibleSibling.down();
			var secondTd = firstTd.next('td');
			
			firstTd.addClassName("no-border-anyway");
			secondTd.addClassName("no-border-anyway");
			
			if (firstTd.colspan == 1) {
				secondTd.next('td').addClassName("no-border-anyway");
				secondTd.next('td').next('td').addClassName("no-border-anyway");
			}
		} else {
			if (previousTr.hasClassName('table-loop-error')) {
				previousTr.removeClassName("no-border-bot");
			} else {
				previousTr.removeClassName("no-border");
			}
		}
		
		infoTr.setStyle({ 'display': 'none' });
	}
}

function firstVisiblePreviousSibling(elem) {
	var sibling = elem.previous();
	if (sibling == null) {
		return null;
	}
	do {
		sibling = sibling.previous();
	} while (sibling != null && (sibling.getStyle('display') == 'none'));
	
	return sibling;
}

function openAll(source) {
	source = $(source);
	var requisitionClass = source.classNames().find(function(className) {
		return className.startsWith('req_');
	});
	
	if (source.hasClassName('i-opener')) {
		$$('.i-opener.' + requisitionClass).each(function(elem) {
			opener(elem.id);
		});
	} else {
		$$('.i-open.' + requisitionClass).each(function(elem) {
			opener(elem.id);
		});
	}
	
	return false;
}

function openCal(elem) {
	var target_input = $(elem).previousSiblings().first();
		
	window.open(window.calendarPopupUrl + '?formname=' + target_input.id , "_blank", "width=270,height=300,left=580,top=280");
	
	return false;
}

function openGlobalCal(elem, postfix) {
	var target_input = $(elem).previousSiblings().first();

	var win = window.open(window.calendarPopupUrl + '?formname=' + target_input.id , "_blank", "width=270,height=300,left=580,top=280");
	
	Event.observe(win, 'beforeunload', function() {
		setHeaderDate(postfix, target_input.value);
	});

}

function setHeaderDate(postfix, value) {
	if (!window.changedHeaderDates) {
		window.changedHeaderDates = {};
	}
	
	window.changedHeaderDates[postfix] = value;
}

function setAllDates(postfix, date) {
	if (date == null || date == "") {
		return;
	}
	postfix = postfix.replace(/\./g, "\\.");
	
	$$('.deliverydate_' + postfix).each(function(input) {
		input.value = date;	
	});
}

function addNext(evt) {
	var element = evt.element();
	
	if (evt.keyCode == Event.KEY_RETURN) {
		reloadBasket();
	}
	
	if( !$(element).hasClassName("add-done") && $F(element).length >= 1) {
		$(element).addClassName("add-done");
		addRow();
	}
}

function updateOnEnter(evt) {
	var element = evt.element();
	
	if (evt.keyCode == Event.KEY_RETURN) {
		reloadBasket();
	}
}

function reloadBasket() {
	dispatch("Update");
}

function linkClicked() {
	if (!window.busy) {
		window.busy = true;
		return true;
	} else {
		return false;
	}
}

function updateOnEnter(evt){
	var element = Event.element(evt);
	Event.extend(evt);
	
	if (evt.keyCode == Event.KEY_RETURN) {
		reloadBasket();
	}
}

var rowcounter = 0;

function addRow() {
	window.rowcounter++;
	// Get localized values
	var addColumn1 = document.getElementsByName('addColumn1')[0].value;
	var addColumn2 = document.getElementsByName('addColumn2')[0].value;
	var hideBasketSearchButton = document.getElementById('hideBasketSearchButton').value;
	var addLabel = $('addLabel').innerHTML;
	var freetextLabel = $('freetextLabel').innerHTML;
	var newRowTemplate = new Template('');
	
	if(hideBasketSearchButton!='true'){
		newRowTemplate = new Template(' 											\
				<tr id="openAdd#{rowcounter}_parent" class="table-loop add-item"> 		\
				<td class="no-pad-r">													\
					<input type="hidden" name="NewMaterialPos_#{rowcounter}"			\
						   value="NewMaterial_#{rowcounter}" />  						\
					<a href="#" id="openAdd#{rowcounter}" title="" 						\
					   class="g-btn i-opener" 	 										\
					   onclick="opener(this.id);return false;"></a>						\
				</td>																	\
				<td colspan="3">														\
					<div class="nl">#{addLabel}</div>									\
				</td>																	\
				<td class="no-pad-lr">													\
					<div class="nl">													\
						<input id="matId#{rowcounter}" 									\
						 type="text" 													\
						 name="NewMaterial_#{rowcounter}_SKU" size="14" maxlength="22" 	\
						 class="first-add g-input" />									\
					</div>																\
				</td>																	\
				<td class="no-pad-lr">													\
					<a href="#" id="lookupAdd#{rowcounter}" title="" 					\
					   class="g-btn i-lookup left b-right" 								\
					   onclick="openSearchWindow(\'matId#{rowcounter}\'); 				\
					   		   return false;"></a>										\
				</td>																	\
				<td class="unit">														\
					<div class="nl">													\
						<input type="text" 												\
							   name="NewMaterial_#{rowcounter}_Quantity" size="3" 		\
							   id="ID_NewMaterial_#{rowcounter}_Quantity"				\
						       maxlength="4" value="1" class="g-input i-count" />		\
					</div>																\
				</td>																	\
				<td class="no-break-unit">												\
					<div class="nl f-bold">&nbsp;</div>         						\
				</td>																	\
				<td class="no-break-date">												\
					<div class="nl">													\
						<input type="text" 												\
							   name="NewMaterial_#{rowcounter}_Deliverydate"			\
							   id="ID_NewMaterial_#{rowcounter}_Deliverydate"			\
							   value="#{deliveryDate}"									\
							   size="10" maxlength="10" 								\
						       class="g-input i-date left" />							\
						<a href="#" id="calAdd1" title="" 								\
						   class="g-btn i-cal right b-right" 							\
						   onclick="openCal(this);return false;"></a>					\
						<div class="clear"></div>										\
					</div>																\
				</td>																	\
				<td colspan="#{addColumn1}">&nbsp;										\
			</tr>																		\
			<!--- S.INFO for ADD item 0 --->											\
			<tr id="openAdd#{rowcounter}_tr" class="table-loop info-tr add-item">		\
				<td class="bgCol-e-d" colspan="3"></td>									\
			    <td></td>																\
				<td class="bgCol-info-textarea" colspan="5">							\
					<span class="f-bold">#{noteLabel}</span><br />						\
					<textarea cols="110" rows="2" class="g-textarea info-input" name="NewMaterial_#{rowcounter}_Freetext"></textarea> \
				</td>																	\
				<td class="bgCol-info-textarea" colspan="#{addColumn2}">				\
					&nbsp;																\
				</td>																	\
			</tr>																		\
		');
	}
	else
	{
		newRowTemplate = new Template(' 											\
				<tr id="openAdd#{rowcounter}_parent" class="table-loop add-item"> 		\
				<td class="no-pad-r">													\
					<input type="hidden" name="NewMaterialPos_#{rowcounter}"			\
						   value="NewMaterial_#{rowcounter}" />  						\
					<a href="#" id="openAdd#{rowcounter}" title="" 						\
					   class="g-btn i-opener" 	 										\
					   onclick="opener(this.id);return false;"></a>						\
				</td>																	\
				<td colspan="3">														\
					<div class="nl">#{addLabel}</div>									\
				</td>																	\
				<td class="no-pad-lr">													\
					<div class="nl">													\
						<input id="matId#{rowcounter}" 									\
						 type="text" 													\
						 name="NewMaterial_#{rowcounter}_SKU" size="14" maxlength="22" 	\
						 class="first-add g-input" />									\
					</div>																\
				</td>																	\
				<td class="no-pad-lr">													\
				</td>																	\
				<td class="unit">														\
					<div class="nl">													\
						<input type="text" 												\
							   name="NewMaterial_#{rowcounter}_Quantity" size="3" 		\
							   id="ID_NewMaterial_#{rowcounter}_Quantity"				\
						       maxlength="4" value="1" class="g-input i-count" />		\
					</div>																\
				</td>																	\
				<td class="no-break-unit">												\
					<div class="nl f-bold">&nbsp;</div>         						\
				</td>																	\
				<td class="no-break-date">												\
					<div class="nl">													\
						<input type="text" 												\
							   name="NewMaterial_#{rowcounter}_Deliverydate"			\
							   id="ID_NewMaterial_#{rowcounter}_Deliverydate"			\
							   value="#{deliveryDate}"									\
							   size="10" maxlength="10" 								\
						       class="g-input i-date left" />							\
						<a href="#" id="calAdd1" title="" 								\
						   class="g-btn i-cal right b-right" 							\
						   onclick="openCal(this);return false;"></a>					\
						<div class="clear"></div>										\
					</div>																\
				</td>																	\
				<td colspan="#{addColumn1}">&nbsp;										\
			</tr>																		\
			<!--- S.INFO for ADD item 0 --->											\
			<tr id="openAdd#{rowcounter}_tr" class="table-loop info-tr add-item">		\
				<td class="bgCol-e-d" colspan="3"></td>									\
			    <td></td>																\
				<td class="bgCol-info-textarea" colspan="5">							\
					<span class="f-bold">#{noteLabel}</span><br />						\
					<textarea cols="110" rows="2" class="g-textarea info-input" name="NewMaterial_#{rowcounter}_Freetext"></textarea> \
				</td>																	\
				<td class="bgCol-info-textarea" colspan="#{addColumn2}">				\
					&nbsp;																\
				</td>																	\
			</tr>																		\
		');
	}
	var deliveryDate = null;
	var deliveryDateClass = $('addRowDate').classNames().find(function(className) {
			return className.startsWith('deliverydate_');
	});
	var postfix = deliveryDateClass.replace("deliverydate_", "");
	
	if (window.changedHeaderDates && window.changedHeaderDates[postfix]) {
		deliveryDate = window.changedHeaderDates[postfix];
	  // dmc gest2 REQ: 367 JIRA: BOSCHDC-25 
	  // Format the date only if its set	
	} else if (window.defaultDeliveryDate) {
		deliveryDate = window.defaultDeliveryDate.toFormattedString();
	}
	
	var newHTML = newRowTemplate.evaluate({
		'rowcounter': rowcounter,
		'addLabel': addLabel,
		'noteLabel': freetextLabel,
		'deliveryDate': deliveryDate,
		'addColumn1': addColumn1,
		'addColumn2': addColumn2
	});
		

	
	$('MarkerRow').insert({
		'before': newHTML
	});
	
	if ($('openAdd0') == null) {
		$("openAdd" + rowcounter).hide();
	}
	
	$('ID_NewMaterial_' + rowcounter + '_Deliverydate').addClassName(deliveryDateClass);
	
	Event.observe('matId' + rowcounter, 'keyup', addNext);

	Event.observe('ID_NewMaterial_' + rowcounter + '_Quantity', 'keyup', updateOnEnter);
	Event.observe('ID_NewMaterial_' + rowcounter + '_Deliverydate', 'keyup', updateOnEnter);
}

function openSearchWindow(skuInputId) {
	var url = "";
	if ($F(skuInputId) != "") {
		url = window.searchPopupUrl + "?WFBRXSearch_ProductSearchTerm=" + $F(skuInputId) + "&SKUInputID=" + skuInputId + "&webform_id=WFBRXSearch";
	} else {
		url = window.searchPopupUrl + "?SKUInputID=" + skuInputId;
	}
	
	var win = openWindow(url, 'popup', 687, 670);
	
	return false;
}

function dispatch(action) {
	if (!window.busy) {
		window.busy = true;
		if (action == 'Update') {
			if (window.changedHeaderDates) {
				for (var key in window.changedHeaderDates) {
					setAllDates(key, window.changedHeaderDates[key]);
				}
			}
		}
		
		$('dispatchFormAction').name = action;
		$('BasketForm').submit();
		return false;
	} else {
		return false;
	}
}


function updateDefaultTypePlateAndDispatch() {

	var lightboxInput = $('zoom_content').down('input');
	var formInput = $('BasketForm').down('input[name='+lightboxInput.name+']');

	$(formInput).value= "DEFAULT";

	dispatch("Update");
}

function updateTypePlateAndDispatch() {

	var lightboxInput = $('zoom_content').down('input');
	var lightboxValEntry = $('zoom_content').down('div[class=ligtboxcontent-entry]');

	
	if($(lightboxInput).value.length > 0) {
		var pass_parameters = {}; 
		pass_parameters["TypePlate"] = $(lightboxInput).value;
		pass_parameters["SKU"] = $(lightboxInput).readAttribute('sku');
		pass_parameters["PLIUUID"] = $(lightboxInput).readAttribute('uuid');
		
		new Ajax.Request(window.typePlateValidationUrl, {
			method: 'post', 
			parameters:pass_parameters,
			onSuccess: function(transport){
				var responseObj = transport.responseText.evalJSON() || {};
				
				if(responseObj.StatusMessage == 'true') {
					var formInput = $('BasketForm').down('input[name='+lightboxInput.name+']');

					$(formInput).value= $(lightboxInput).value;

					dispatch("Update");
				} else {
					if(!lightboxValEntry.hasClassName("error-validation")) {
						lightboxValEntry.addClassName("error-validation");
					}
				}
			},
			onFailure: function(){
				alert("Error, please try again");
			}
		});
	}
}

function keypressHandler (event){
    var key = event.which || event.keyCode;
    switch (key) {
        default:
        break;
        case Event.KEY_RETURN:
        	updateTypePlateAndDispatch();
        break;   
    }
}

function typePlateValueHandler(element) {
	var ctnBtn = $('zoom_content').down('button[typesubmit=true]');
	
	if(element.value.length > 0) {
		ctnBtn.removeClassName('disabled');
	} else {
		if(!ctnBtn.hasClassName("disabled")) {
			ctnBtn.addClassName("disabled");
		}
	}
}