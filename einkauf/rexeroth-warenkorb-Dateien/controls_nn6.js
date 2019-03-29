var HTMLB_SECTION508 = false;
var htmlb_formid;
var htmlb_radiobuttonmodifier = "rbgcjlm";
var htmlb_submissionByRet = false;

function removeBusyDiv()
{
	if (document.readyState == "interactive" || document.readyState == "complete" ){
	var bodytag  = document.getElementsByTagName("body")[0];
	var olddiv = document.getElementById("BusyDiv");
	
	if (olddiv)
		bodytag.removeChild(olddiv);
	}
}

function createBusyDiv ()
      {
        var bodytag  = document.getElementsByTagName("body")[0];
        var stopdiv  = document.createElement("div");
        var innerdiv = document.createElement("div");

        stopdiv.appendChild( innerdiv);
        stopdiv.setAttribute( "id", "BusyDiv");

        bodytag.insertBefore( stopdiv, bodytag.firstChild);
      }
 
function htmlbLoadingMessage(formID) {
  var obj;
//  obj = document.getElementById( "htmlb_wait" );
  obj = document.getElementById( "htmlb_wait" ).innerHTML;
/*
  var nSystemWidth = document.body.clientWidth;
  var nSystemHeight = document.body.clientHeight;
  var nWidth = 250;
  var nHeight = 150;

  var nBoxLeft = ((nSystemWidth / 2) - (nWidth / 2));
		
  if( nBoxLeft < 10 ) nBoxLeft = 10;

  var nBoxTop = ((nSystemHeight / 2) - (nHeight / 2));
  if( nBoxTop < 10 ) nBoxTop = 10;
  nBoxLeft += document.body.scrollLeft;
  nBoxTop += document.body.scrollTop;
  obj.style.visibility = "visible";
  obj.style.overflow = "visible";
  obj.style.display = "inline";
  obj.style.left = nBoxLeft + "px";
  obj.style.top = nBoxTop + "px";
  obj.style.width = nWidth + "px";
  obj.style.height = nHeight + "px";
*/
  var x = '<table border="0" width="100%" height="75%" cellpadding="0" cellspacing="0">' +
                                                 '<tr><td align="center">' +
                                                 obj +
                                                 '</td></tr></table>';

  document.getElementById(formID).innerHTML = x;
}

function htmlbCheckSubmit(formId,eventName,eventType)
{
  var form = document.getElementById(formId);   
  var eid = document.getElementById("htmlbevt_id");
  if (eid.value=="") {
    var db = document.getElementById(formId + "_dflt");
    if (db){
      var but = document.getElementById(db.name);
      if (but){
        htmlb_submissionByRet = true;
        ur_focus(but);
	   // but.doclick();// Don't remove events for below code !!      
	   htmlbDoEvent(but,'X','onclick',eventType,formId,but.id.substring(but.id.lastIndexOf('_')+1,but.id.length),eventName,'',0);         
       // return true;  
      }
    }
    return false;
  }
}

function htmlbSetfocus()
{			
}

function htmlbGetDocumentByID(htmldocument,documentID)
{
	var func;
	var htmlbdocument;

	func = htmldocument["_"+documentID+"_Initialize"];
	if ( func ) {
		func();

		htmlbdocument = _htmlbCreateDocument(htmldocument,documentID);
	}
	return htmlbdocument;	
}

function htmlbEvent(event,controlClass,formID,objectID,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
{
	var func;
	var htmlbdocument;
	var htmlbevent;
	var htmlbcontrol;
	var prefix = _htmlbGetDocumentPrefix(formID);
	var htmldocument;
	if (event.target.ownerDocument==null) { htmldocument = document; }else{ htmldocument = event.target.ownerDocument; }; // NN

	func = htmldocument["_"+prefix+"_Initialize"];
	func();

	htmlbdocument = _htmlbCreateDocument(htmldocument,prefix);
	htmlbcontrol = _htmlbCreateControl(htmlbdocument,event.target,controlClass,formID+"_"+objectID);
	htmlbevent = _htmlbCreateEvent(event,formID+"_"+objectID,eventName);

	htmlbevent.control = htmlbcontrol;
	htmlbevent.document = htmlbdocument;

	if ( htmlbcontrol.fillEventData != null ) 
		htmlbcontrol.fillEventData(htmlbevent,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9);

	if ( controlClass == "Form" ) {
		// get the original event object parked in the document
		htmlbevent.originalEvent = _htmlbGetEventFromDocument(htmldocument,formID);
	}

	func = window[formID+"_"+objectID+"_"+eventName];
	if ( func != null) func(htmlbevent);

	if ( htmlbevent.cancelSubmit ) {
// this will cancel the submit event
		htmlbevent.returnValue = false; 
		_htmlbParkEventInDocument(htmldocument,formID,null);
	}else{
		if ( controlClass != "Form" ) {
			// park the event object in the document
			_htmlbParkEventInDocument(htmldocument,formID,htmlbevent);
		}else{
			// clear parked event
			_htmlbParkEventInDocument(htmldocument,formID,null);
		}
	}

	return htmlbevent.returnValue; 
}

var oldElement ;

function htmlbSubmit(nullvar, event,formID,objectID,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
{
	var form;
		form = document.getElementById(formID);

//	if ( !htmlbEvent(event,"Form",formID,0,"Submit",0) ) {
//		return;
//	}



	form.htmlbevt_ty.value = event;//"0"; // normal event
	form.htmlbevt_oid.value = objectID;
	form.htmlbevt_id.value = eventName;
	form.htmlbevt_cnt.value = paramCount;
	if ( paramCount > 0 ) {
		form.htmlbevt_par1.value = param1;
	}else{
		form.htmlbevt_par1.value = "";
	};
	if ( paramCount > 1 ) {
		form.htmlbevt_par2.value = param2;
	}else{
		form.htmlbevt_par2.value = "";
	};
	if ( paramCount > 2 ) {
		form.htmlbevt_par3.value = param3;
	}else{
		form.htmlbevt_par3.value = "";
	};
	if ( paramCount > 3 ) {
		form.htmlbevt_par4.value = param4;
	}else{
		form.htmlbevt_par4.value = "";
	};
	if ( paramCount > 4 ) {
		form.htmlbevt_par5.value = param5;
	}else{
		form.htmlbevt_par5.value = "";
	};
	if ( paramCount > 5 ) {
		form.htmlbevt_par6.value = param6;
	}else{
		form.htmlbevt_par6.value = "";
	};
	if ( paramCount > 6 ) {
		form.htmlbevt_par7.value = param7;
	}else{
		form.htmlbevt_par7.value = "";
	};
	if ( paramCount > 7 ) {
		form.htmlbevt_par8.value = param8;
	}else{
		form.htmlbevt_par8.value = "";
	};
	if ( paramCount > 8 ) {
		form.htmlbevt_par9.value = param9;
	}else{
		form.htmlbevt_par9.value = "";
	};
	if (event != null)
		event.returnValue = false;

	// this will call form.onsubmit as well
	// form.htmlb_submit.click();
	form.htmlbScrollX.value = document.body.scrollLeft;
	form.htmlbScrollY.value = document.body.scrollTop;                        
	//htmlbCalScPos(formID, form);
	htmlb_submitted=true;

	try  {
		document.getElementById("htmlb_submit").focus();
	} catch (ex) {
	}

    createBusyDiv();    
	//Added to remove loading.gif in case document.readyState == "interactive"
	//document.attachEvent("onreadystatechange", removeBusyDiv);
	document.addEventListener("onreadystatechange", removeBusyDiv);
	
	if(document.readyState){
		if(document.readyState != "loading" ||(oldElement != nullvar) ){
			form.submit();
		}
	}
	else// by any chance readystate nt thr ??? 
	{
	form.submit();
	}
	
	// No use of RemoveBusyDiv in FF, Chrome, Safari. Debugged with Thorsten. His suggestion.
	removeBusyDiv();
	
	
	// in some cases multiple submit happens at same time from diff elemnts 
	//stop only those multiple req from same ele while form is loading. check above cond. before form submit .
	oldElement = nullvar;
	// clear event data
	form.htmlbevt_ty.value = ""; 
	form.htmlbevt_oid.value = "";
	form.htmlbevt_id.value = "";
	form.htmlbevt_cnt.value = 0;
	form.htmlbevt_par1.value = "";
	form.htmlbevt_par2.value = "";
	form.htmlbevt_par3.value = "";
	form.htmlbevt_par4.value = "";
	form.htmlbevt_par5.value = "";
	form.htmlbevt_par6.value = "";
	form.htmlbevt_par7.value = "";
	form.htmlbevt_par8.value = "";
	form.htmlbevt_par9.value = "";
	var wait = document.getElementById( "htmlb_wait" );
	if(wait!=null) {
		timer = "htmlbLoadingMessage('"+formID+"')"; 	
		window.setTimeout(timer,500);
	}
}

function htmlbSubmit2(event,formID,controlClass,controlID,eventHandler,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
{
	var form;

	if (event.target.ownerDocument==null)
		form = event.target.document.getElementById(formID);
	else
	    form = event.target.ownerDocument.getElementById(formID);

	if ( !htmlbEvent(event,"Form",formID,0,"Submit",0) ) {
		return;
	}

	form.htmlbevt_ty.value = "1"; // controlless event
	form.htmlbevt_cls.value = controlClass;
	form.htmlbevt_cid.value = controlID;
	form.htmlbevt_hdl.value = eventHandler;
	form.htmlbevt_id.value = eventName;
	form.htmlbevt_cnt.value = paramCount;
	if ( paramCount > 0 ) {
		form.htmlbevt_par1.value = param1;
	}else{
		form.htmlbevt_par1.value = "";
	};
	if ( paramCount > 1 ) {
		form.htmlbevt_par2.value = param2;
	}else{
		form.htmlbevt_par2.value = "";
	};
	if ( paramCount > 2 ) {
		form.htmlbevt_par3.value = param3;
	}else{
		form.htmlbevt_par3.value = "";
	};
	if ( paramCount > 3 ) {
		form.htmlbevt_par4.value = param4;
	}else{
		form.htmlbevt_par4.value = "";
	};
	if ( paramCount > 4 ) {
		form.htmlbevt_par5.value = param5;
	}else{
		form.htmlbevt_par5.value = "";
	};
	if ( paramCount > 5 ) {
		form.htmlbevt_par6.value = param6;
	}else{
		form.htmlbevt_par6.value = "";
	};
	if ( paramCount > 6 ) {
		form.htmlbevt_par7.value = param7;
	}else{
		form.htmlbevt_par7.value = "";
	};
	if ( paramCount > 7 ) {
		form.htmlbevt_par8.value = param8;
	}else{
		form.htmlbevt_par8.value = "";
	};
	if ( paramCount > 8 ) {
		form.htmlbevt_par9.value = param9;
	}else{
		form.htmlbevt_par9.value = "";
	};
	form.submit();

	// clear event data
	form.htmlbevt_ty.value = ""; // controlless event
	form.htmlbevt_cls.value = "";
	form.htmlbevt_cid.value = "";
	form.htmlbevt_hdl.value = "";
	form.htmlbevt_id.value = "";
	form.htmlbevt_cnt.value = 0;
	form.htmlbevt_par1.value = "";
	form.htmlbevt_par2.value = "";
	form.htmlbevt_par3.value = "";
	form.htmlbevt_par4.value = "";
	form.htmlbevt_par5.value = "";
	form.htmlbevt_par6.value = "";
	form.htmlbevt_par7.value = "";
	form.htmlbevt_par8.value = "";
	form.htmlbevt_par9.value = "";
}

function htmlbSubmit3(event,className,formID,objectID,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
{
	if ( htmlbEvent(event,className,formID,objectID,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9) ) {
		htmlbSubmit(event,formID,objectID,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9);
	}
}

function htmlbSubmit4(event,formID,objectID,controlClass,controlID,eventHandler,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
{
	if ( htmlbEvent(event,controlClass,formID,objectID,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9) ) {
		htmlbSubmit2(event,formID,controlClass,controlID,eventHandler,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
	}
}


/*
 * this function gets its actions from Java:
 * C client event
 * V control validation
 * S server event (running all validators of form)
 * X cancel button server event (not running validators other than control specific ones)
 */

var clientEvent ;
function updateClientEvent(e)
{
clientEvent = e;
}

function getClientEvent()
{
	return clientEvent;
}

function htmlbDoEvent(elem,actions,eventClass,eventType,formID,objectID,eventName,modifierId,
	paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
{
	if(modifierId =="") {
	  htmlbevent = htmlbCreateEvent(window.event,formID+"_"+objectID,eventName);
	} else {
	  htmlbevent = htmlbCreateEvent(window.event,formID+"_"+objectID+modifierId,eventName);
	}

	htmlbevent.returnValue = (actions.indexOf("T") >= 0);
	if (actions.indexOf("C") >= 0) { // do client event
		if (modifierId =="")
		func = window[formID+"_"+objectID+"_"+eventClass];
		else
			func = window[formID+"_"+objectID+modifierId+"_"+eventClass];			
		if (!func) func = window[elem.id+"_"+eventClass];
		if (func != null) ret = func(htmlbevent,getClientEvent());
		if (ret) htmlbevent.returnValue = ret;
	}
	if (actions.indexOf("V") >= 0) { // do control specific validation first
		if (document.getElementById(elem.id).tagName == "INPUT" && document.getElementById(elem.id).readOnly == true){
		}else{
		func = window[formID+"_"+objectID+"_validation"];
		if (!func) func = window[elem.id+"_validation"]; // controls within modifiers 
		if ((func != null) && (!func(htmlbevent))) return htmlbevent.returnValue; // control validation failed
	}
	}
	if (actions.indexOf("S") >= 0) { // submit, do form validation first
		if (!checkOKForm(formID)) htmlbevent.cancelSubmit = true;
	}
	else if (actions.indexOf("X") < 0) // X is cancel. neither S nor X, no submit
		htmlbevent.cancelSubmit = true;
	if (!htmlbevent.cancelSubmit )
		htmlbSubmit(elem,eventType,formID,objectID,eventName,
			paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9);
	return htmlbevent.returnValue;
}

/* ------- Javascript interface : simple controls ---------------------------------*/

function _htmlbjsgetValue()
{
	return this.formelement.value;
}

function _htmlbjssetValue(newvalue)
{
	this.formelement.value=newvalue;
}

function _htmlbjsgetChecked()
{
	return this.formelement.checked;
}

function _htmlbjsgetEnable ()
{
	return this.formelement.style.enable;
}

function _htmlbjssetEnable (enable)
{
	this.formelement.style.enable=enable;
}

function _htmlbjsseterrortext (errortext)
{
	if (errortext != null){
	  sapUrMapi_InputField_setInvalid(this.id,true, errortext);
	  document.getElementById(this.id).title = errortext;
	}else{
	  sapUrMapi_InputField_setInvalid(this.id,false, "");
	  document.getElementById(this.id).title = "";
	}	
/*	if (errortext != null) {
		document.getElementById(this.id).title = errortext;
		document.getElementById(this.id).style.borderColor="#FF0000";
	}
	else {
		document.getElementById(this.id).title = this.savedTooltip;
		document.getElementById(this.id).style.borderColor="";
	} */
}

function _htmlbisvalid()
{
	return true;
}

function _htmlbjsselectfocus()
{
	input = document[this.formid][this.id];
	if (input.select) input.select(); 
	if (input.focus) 
	try{input.focus();}catch(ex){}
}

function _htmlbaddvalidator (obj, formid, id)
{
	func = window[id+"_validation"];
	if (!func) obj.isValid = _htmlbisvalid;
	else {
		obj.isValid = func;
		form = window[formid];
		if (!form) {
			form = new Object; window[formid]=form;
		}
		va = form.Validators;
		if (!va) {
			va = new Array; form.Validators = va;
			va[0] = 0; // count additions
		}
		va[++va[0]]=obj;
	}
}

function _htmlbsimplecontrol (formid,id)
{
	var obj = new Object;
	obj.id = id;
	obj.formid = formid;
	obj.formelement = document[formid][id];
	obj.getValue = _htmlbjsgetValue;
	obj.setValue = _htmlbjssetValue;
	obj.getChecked = _htmlbjsgetChecked;
	//obj.setChecked = _htmlbjssetChecked;
	obj.getEnable = _htmlbjsgetEnable;
	obj.setEnable = _htmlbjssetEnable;
	obj.selectFocus = _htmlbjsselectfocus;
	obj.setErrorText = _htmlbjsseterrortext;	// default, overridden by InputField
	try{
		obj.savedTooltip = document.getElementById(id).title;
		obj.savedClassName = document.getElementById(id).className;
	}catch(exception){};
	_htmlbaddvalidator(obj, formid, id);
	return obj;
}


//check box manipulation on the client side
function _htmlbCheckbox(formid, id) { 	
	var obj = new Object;	
	obj.id = id;
	obj.formid = formid;
	obj.formelement = document[formid][id];	
	var check = document.getElementById(id); 
	if ((check.className.indexOf("dsbl"))>0)
		obj.isEnabled = false;
	else
		obj.isEnabled = true;			
	obj.getChecked = _htmlbjsgetChecked;	
	obj.setChecked = _htmlbcheckboxsetChecked;	
	obj.setDisabled = _htmlbcheckboxsetdisabled;	
	obj.setEnabled = _htmlbcheckboxsetenabled;
	return obj;	
}

function _htmlbcheckboxsetenabled(){	
	this.idEnabled = true;	
	sapUrMapi_CheckBox_setEnabled(this.id);	
}

function _htmlbcheckboxsetdisabled(){	
	this.isEnabled = false;
	sapUrMapi_CheckBox_setDisabled(this.id);	
}

function _htmlbcheckboxsetChecked(newchecked, e)
{
	var oldchecked = this.formelement.checked;
	this.formelement.checked=newchecked;
	if (oldchecked!=newchecked)	
		sapUrMapi_CheckBox_toggle(this.formelement.id, e);		
}

function _htmlbLabel(formid, id) { 	
	var obj = new Object;	
	obj.id = id;
	obj.formid = formid;
	obj.formelement = document.getElementById(id);	
	//obj.formelement = document[formid][id];	
	if (obj.formelement.className.indexOf("dsbl")>0)
		obj.isEnabled = false;
	else
		obj.isEnabled = true;
	obj.setDisabled = htmlbLabelSetDisabled;
	obj.setEnabled = htmlbLabelSetEnabled;
	return obj;	
}

function _htmlbLabelSetDisabled(){
	this.isEnabled = false;
	sapUrMapi_Label_setDisabled(this.formelement, e);
}

function _htmlbLabelSetEnabled(){
	this.isEnabled = true;
	sapUrMapi_Label_setEnabled(this.formelement, e);
}

function _htmlbRadioButton(formid, id) { 	
	var obj = _htmlbsimplecontrol (formid,id); 
	var obj = new _htmlbsimplecontrol(formid, id);	
	if (obj.formelement.disabled)
		obj.isEnabled = false;
	else
		obj.isEnabled = true;
	obj.setEnabled = _htmlbRadioButtonSetEnabled;
	obj.setDisabled = _htmlbRadioButtonSetDisabled;
	obj.isChecked = _htmlbRadioButtonIsChecked;
	return obj;
}

function _htmlbRadioButtonSetEnabled(){	
	this.enabled = true;
	sapUrMapi_RadioButton_setEnabled(this.id);
}

function _htmlbRadioButtonSetDisabled(){
	this.enabled = false;	
	sapUrMapi_RadioButton_setDisabled(this.id);
}

function _htmlbRadioButtonIsChecked(){
	var oInput = document.getElementById(this.id);
	return oInput.checked;
}

function _htmlbLink(formid, id) { 
  var obj = _htmlbsimplecontrol (formid,id);
  obj.setErrorText = _htmlbisvalid;		
  return obj;
}

function _htmlbTableView(formid, id) { 
	var obj = new Object;
	obj.id = id;
	obj.formid = formid;
	//obj.selectedRow = null;
	//obj.formelement = document[formid][id];
	obj.getClickedRow = _htmlbTableViewGetClickedRow;
  obj.getClickedRowKey = _htmlbTableViewGetClickedRowKey;	
	obj.setClickedRow = _htmlbTableViewSetClickedRow;
	obj.getClickedColumn = _htmlbTableViewGetClickedColumn;
	obj.setClickedColumn = _htmlbTableViewSetClickedColumn;	
	obj.getSelectedRows = _htmlbTableViewGetSelectedRows;
	obj.getSelectedRow = _htmlbTableViewGetSelectedRow;
	obj.getSelectedRowKeys = _htmlbTableViewGetSelectedRowKeys;
	obj.getSelectedRowKey = _htmlbTableViewGetSelectedRowKey;	
	obj.setClickedRow(5);
	return obj;
}

function _htmlbTableViewGetClickedRow() {
	return this.clickedRow;
}

function _htmlbTableViewGetClickedRowKey() {
	try {
	  return (eval(this.id+"_keys"))[this.clickedRow-1];
	} catch(e) {
		return null;
	}
}

function _htmlbTableViewSetClickedRow(clickedRow) {
	this.clickedRow = clickedRow;
}

function _htmlbTableViewGetClickedColumn() {
	return this.clickedColumn;
}

function _htmlbTableViewSetClickedColumn(clickedColumn) {
	this.clickedColumn = clickedColumn;
}

function _htmlbTableViewGetSelectedRows() {
	var i = 1;
	var j = 0;
	selectedRows = new Array();
	while(document.getElementById(this.id+"-chk"+i)) {
		if (document.getElementById(this.id+"-chk"+i).value == "true") {
		  selectedRows[j] = i;
		  j++
		}
		i++
	}	
	return selectedRows;
}

function _htmlbTableViewGetSelectedRowKeys() {
	try {
		var i = 1;
		var j = 0;
		var keyArr =(eval(this.id+"_keys"));
		selectedRows = new Array();
		while(document.getElementById(this.id+"-chk"+i)) {
			if (document.getElementById(this.id+"-chk"+i).value == "true") {
			  selectedRows[j] = keyArr[i-1];
			  j++
			}
			i++
		}	
		return selectedRows;
	} catch(e) {
	  return null;
	}
}

function _htmlbTableViewGetSelectedRow() {
	if (document.getElementById(this.id+"-chk"))
	  return document.getElementById(this.id+"-chk").value;
	else
	  return null;
}

function _htmlbTableViewGetSelectedRowKey() {
	try {
		var keyArr =(eval(this.id+"_keys"));
		if (document.getElementById(this.id+"-chk"))
		  return keyArr[document.getElementById(this.id+"-chk").value-1];
		else
		  return null;
	} catch(e) {
		return null;
	}
}

function _htmlbInputFieldSetErrorText (errortext)
{
	if (errortext != null){
	  sapUrMapi_InputField_setInvalid(this.id,true, errortext);
	  this.formelement.title = errortext;
	}
	else{
	  sapUrMapi_InputField_setInvalid(this.id,false, "");
	  this.formelement.title = "";
	}
}

function _htmlbInputFieldSetDisabled (){	
	this.formelement.readOnly=true;	
	this.isEnabled = false;
	sapUrMapi_InputField_setReadonly(this.id, true);
	
}

function _htmlbInputFieldSetEnabled(){
	this.formelement.readOnly = false;	
	this.isEnabled = true;
	sapUrMapi_InputField_setReadonly(this.id, false);
}

function _htmlbInputFieldSetValue(value){
	sapUrMapi_InputField_setValue(this.id, value);
}

function _htmlbInputFieldGetDatePattern(){
  return this.datePattern;
}

function _htmlbInputFieldSetDatePattern(pattern){
  this.datePattern = pattern;
}

function _htmlbInputFieldGetDate(){
  return _dateObject(this.getValue(), this.getDatePattern());
}

function _htmlbInputField(formid, id)
{
	var obj = _htmlbsimplecontrol (formid,id);
	if (obj.formelement.readOnly)
		obj.isEnabled = false;
	else
		obj.isEnabled = true;
        obj.setDisabled = _htmlbInputFieldSetDisabled;
	obj.setEnabled = _htmlbInputFieldSetEnabled;
	obj.setErrorText = _htmlbInputFieldSetErrorText;
	obj.setValue = _htmlbInputFieldSetValue;
	obj.savedValue = "XXX" + obj.getValue(); // invalidate cached validations	
	var inpField = document.getElementById(id);	
	if (inpField.getAttribute("datep") != null) 
	  obj.datePattern = inpField.getAttribute("datep");
	else
	  obj.datePattern = null;
	obj.getDatePattern = _htmlbInputFieldGetDatePattern;
	obj.setDatePattern = _htmlbInputFieldSetDatePattern;
	obj.getDate = _htmlbInputFieldGetDate;	
	return obj;
}

function _htmlbTextEdit(formid, id)
{
	var obj = _htmlbsimplecontrol(formid, id);
	return obj;
}

function _dateObject(value, pattern) {
	var obj = new Object;
	if (value != null && pattern != null) {
    var seperator = "/";
    // get seperator
	  var i = 0;
		while (i <= pattern.length) {
			if (pattern.charAt(i) != "d" &&
			    pattern.charAt(i) != "M" &&
			    pattern.charAt(i) != "y") {
			  seperator = pattern.charAt(i);
			  i = pattern.length;
			}
			i++;
		}
    var patternArray = pattern.split(seperator);
    var dateArray = value.split(seperator);
	  for (var j=0; j < patternArray.length; j++) {
	  	if (patternArray[j].indexOf("d") >= 0)
	  	  if (dateArray.length >= (j+1))
	  	    obj.day = dateArray[j];
		  if (patternArray[j].indexOf("M") >= 0)
		   if (dateArray.length >= (j+1))
		     obj.month=dateArray[j];
			if (patternArray[j].indexOf("y") >= 0)
			  if (dateArray.length >= (j+1))
		 	    obj.year= dateArray[j];		  	
	  }
	} else {
		obj.year=null;
		obj.month=null;
		obj.day=null;
	}	
	if (!obj.year || !obj.month || !obj.day) {
		obj.year=null;
		obj.month=null;
		obj.day=null;
	}
	return obj;
}

function _htmlbButton(formid, id) 
{
	var obj = new Object;
	obj.id = id;
	obj.formid = formid;
	obj.documentelement = document.getElementById(id);
	obj.selectFocus = _htmlbisvalid;
	obj.setErrorText = _htmlbisvalid;		// no visual feedback on button
//	_htmlbaddvalidator(obj, formid, id);		-- special case buttons for form validation
	var bt = document.getElementById(id);	
	if (bt.getAttribute("dsbl")=="true")
		obj.isEnabled = false;
	else
		obj.isEnabled = true;		
	//methods
	obj.selectFocus = _htmlbisvalid;
	obj.setErrorText = _htmlbisvalid;		
	obj.setEnabled = _htmlbButtonSetEnabled;
	obj.setDisabled = _htmlbButtonSetDisabled;	
	return obj;
}

function _htmlbButtonSetEnabled(){
	this.isEnabled = true;
	mf_Button_setEnabled(this.id);    
}

function _htmlbButtonSetDisabled(){
	this.isEnabled = false;
	mf_Button_setDisabled(this.id); 
       
}


/* ------- Javascript interface : DropdownListBox & ListBox ---------------------------------*/

function _htmlbListSetValue(value)
{
	if (this.isEnabled){
	for (var i = 0; i < this.formelement.options.length; ++i)
		if (this.formelement.options[i].value==value) {
			this.formelement.selectedIndex = i;
			return;
		}
}
}

function _htmlbListGetValue(value)
{
	if (this.formelement.selectedIndex >= 0)
		return this.formelement.options[this.formelement.selectedIndex].value;
	return null;
}

function _htmlbListGetIndex ()
{
	return this.formelement.selectedIndex;
}

function _htmlbListSetIndex (index)
{
	if (this.isEnabled)
	this.formelement.selectedIndex = index;
}

function _htmlbListGetText()
{
	if (this.formelement.selectedIndex >= 0)
		return this.formelement.options[this.formelement.selectedIndex].text;
	return null;
}

function _htmlbListRemoveOption(index){
	if (this.isEnabled){
	var l = document.getElementById(this.id);
	l.remove(index);
}
}

function _htmlbListAddOption(index, value){
	if (this.isEnabled){
	var l = document.getElementById(this.id);
	var oOption = document.createElement("OPTION");		
	l.add(oOption, l.options[l.length]);
	oOption.text = value;
	oOption.value = index;
}
}

function _htmlbListSetEnabled(){
	this.isEnabled = true;
	var l = document.getElementById(this.id);
	l.disabled = false;
}

function _htmlbListSetDisabled(){
	this.isEnabled = false;
	var l = document.getElementById(this.id);
	l.disabled = true;
}

function _htmlbListBox(formid, id) 
{
	var obj = _htmlbsimplecontrol(formid,id);
		if(	obj.formelement != null)
	{
	if (obj.formelement.getAttribute("disabled")=="true"){
		obj.isEnabled = false;
	}else
		obj.isEnabled = true;	
	} 
	obj.getIndex = _htmlbListGetIndex;
	obj.getSelectedIndex = _htmlbListGetIndex;
	obj.setIndex = _htmlbListSetIndex;
	obj.setSelectedIndex = _htmlbListSetIndex;
	obj.getValue = _htmlbListGetValue;
	obj.setValue = _htmlbListSetValue;
	obj.setSelectedValue = _htmlbListSetValue;
	obj.getSelectedValue = _htmlbListGetValue;
	obj.getText = _htmlbListGetText;
	obj.removeOption = _htmlbListRemoveOption;
	obj.addOption = _htmlbListAddOption;
	obj.setDisabled = _htmlbListSetDisabled;
	obj.setEnabled = _htmlbListSetEnabled;
	return obj;
}

function _htmlbDropdownListBox (formid,id)
{
	return _htmlbListBox (formid, id);
}

function _htmlbToolbarDropDownListBox (formid,id)
{
	return _htmlbListBox (formid, id);
}

function _htmlbTray(formid, id) 
{
	var obj = _htmlbsimplecontrol(formid,id);
}

/* ------- Javascript interface : Status Bar ---------------------------------*/

// could use more intelligend list of error fields and messages, not just clearing the 
// message

function _htmlbStatusBarSetErrorMsg (errfield, errmsg)
{
//	errfield.setErrorMode();
	this.documentelement.innerHTML = errmsg;
	this.errorfield = errfield;
	errfield.formelement.select(); errfield.formelement.focus();	
}

function _htmlbStatusBarClearErrorMsg (errfield)
{
//	errfield.clearErrorMode();
	if (errfield == this.errorfield) {
		this.documentelement.innerHTML = "";
		this.errorfield = null;
	}
}

function _htmlbMessageBarSet(type, text, onclick)
{
	if (text != ''){
		sapUrMapi_MessageBar_setType(this.div.id, type);
    		sapUrMapi_MessageBar_setText(this.div.id, text);		
    		this.div.onClick = onclick;
    	}
}

function _htmlbMessageBarClear()
{
	this.set("None","",null);
}

function _htmlbMessageBar (formid, id, docid)
{
	var obj = new Object;
	obj.id = id;
	obj.formid = formid;
	obj.div = document.getElementById(htmlb_messageBarId);
	//obj.div = document.getElementById(docid+"_messagebar");
	obj.set = _htmlbMessageBarSet;
	obj.clear = _htmlbMessageBarClear;
	_htmlb_messagebar = obj;
	return obj;
}

function showMessageBar (obj)
{
	//_htmlb_messagebar.set("Validation",document.getElementById(obj.id).title, null);
	_htmlb_messagebar.set("Error",document.getElementById(obj.id).title, null);
}

function clearMessageBar ()
{
	_htmlb_messagebar.clear();
}

/* ------- validation functions ------------------------------------*/

function checkError(errorcontrol, obj, ok, errortext)
{
    if (ok) obj.clearErrorMode();
    else obj.setErrorMode(errortext);

// repeat state setting, might be invalidated by other validation stuff when using shared resources like a StatusBar
//    if (ok) errorcontrol.clearErrorMsg(obj);
//    else errorcontrol.setErrorMsg(obj, errortext);
    return ok;
}

function checkRegExp(value, pattern)
{
	re = new RegExp (pattern);
	return (value == re.exec(value));
}

function checkMinMax (value, min, max)
{
	return (   ((min == '') || (parseFloat(min) <= value))
		&& ((max == '') || (value <= parseFloat(max)))  );
}

function checkRequired(obj)
{
	var value = obj.getValue();
	return value && (value != "");
}

function checkPattern(obj, pattern)
{
	var value = obj.getValue();
	return ((value == "") || checkRegExp (value, pattern));
}

function checkLength(obj, maxlen)
{
	var value = obj.getValue();
	return (((maxlen == 0) || (value.length <= maxlen)));
}

function checkMinMaxLength(obj, minlen, maxlen)
{
	var value = obj.getValue();
	if (value != null)
		return ((((maxlen == 0) || (value.length <= maxlen))) && (((minlen == 0) || (value.length >= minlen))));
	else
		return true;	
}

function checkString(obj, pattern, uppercaseOnly)
{
	var value = obj.getValue();
	if (uppercaseOnly) value = value.toUpperCase();
	var ok = ((value == "") || (pattern == "") || checkRegExp (value, pattern));
	if (ok) obj.setValue(value);
	return (ok);
}

// numberchars: PMTC: plus, minus, thousandsep, comma

function replace(value, s, t)
{
	var i; // local declaration in order to avoid changing variable in callers context!!!
	if (s == "") return value;
	parts = value.split (s); s = parts[0];
	for (i = 1; i < parts.length; ++i) s = s + t + parts[i];
	return s;
}

function checkFloat(obj, numberchars, min, max)
{
 	var ok = true;
	var value = obj.getValue();	
	if (value == obj.savedValue) ok = obj.savedValResult; // cache for performance
	else if (value == "") ok = true;
	else if (value.search(/[A-Z]/) >= 0) ok = false;
	else {
		value = replace(value, numberchars.substr(0,1), "P"); // plus
		value = replace(value, numberchars.substr(1,1), "M"); // minus
		value = replace(value, numberchars.substr(2,1), "T"); // thousands
		value = replace(value, numberchars.substr(3,1), "D"); // decimal point or comma (not with integers)
		value = value.replace (/T\d\d\d/g, "X");
		value = value.replace (/D\d*/, "Y");
		ok = checkRegExp(value, "[PM]?\\d{1,}X*Y?");
		if (ok) {
// once we know the value is OK, normalize it to Javascript (so it can be used in other javascript code) and back
			value = obj.getValue();
			value = replace (value, numberchars.substr(0,1), "+"); // remove plus
			value = replace(value, numberchars.substr(1,1), "-"); // minus
			value = replace(value, numberchars.substr(2,1), ""); // thousands
			value = replace(value, numberchars.substr(3,1), "."); // decimal point or comma
			obj.savedNumber = parseFloat (value);
			value = replace(value, ".", "D"); // decimal point or comma
			value = value.replace (/^([^D]*)(\d)(\d\d\d)(D\d*)?/, "$1$2T$3$4");
			s = "";
			while (s != value) {
				s = value;
				value = value.replace(/^([^T]*\d)(\d\d\dT)/g, "$1T$2");
			}
			if (value.indexOf("D") >= 0)
				value = value.replace(/(\d)0*$/, "$1"); // kill trailing 0s (all but first in ,00..) in mantissa
			value = replace (value, "+", numberchars.substr(0,1)); // remove plus
			value = replace(value, "-", numberchars.substr(1,1)); // minus
			value = replace(value, "T", numberchars.substr(2,1)); // thousands
			value = replace(value, "D", numberchars.substr(3,1)); // decimal point or comma
			obj.setValue(value);
		}
	}
// repeat range check, min & max might be dynamic therefore the cached result may not
// reflect the range check.
	if (ok) ok = checkMinMax (obj.savedNumber, min, max); // program error if default not within range
	obj.savedValue = value;    // cache value and result
	obj.savedValResult = ok;
	return ok;
}

function checkInteger(obj, numberchars, min, max)
{
	var ok = true;
	var value = obj.getValue();	
	if (value == obj.savedValue) ok = obj.savedValResult; // cache for performance
	else if (value == "") ok = true;
	else if (value.search(/[A-Z]/) >= 0) ok = false;
	else {
		value = replace(value, numberchars.substr(0,1), "P"); // plus
		value = replace(value, numberchars.substr(1,1), "M"); // minus
		value = replace(value, numberchars.substr(2,1), "T"); // thousands
		value = replace(value, numberchars.substr(3,1), "D"); // decimal point or comma (not with integers)
		value = value.replace (/T\d\d\d/g, "X");
		value = value.replace (/D\d*/, "Y");
		ok = checkRegExp(value, "[PM]?\\d{1,}X*Y?");
		if (ok) {
// once we know the value is OK, normalize it to Javascript (so it can be used in other javascript code) and back
			value = obj.getValue();
			value = replace (value, numberchars.substr(0,1), "+"); // remove plus
			value = replace(value, numberchars.substr(1,1), "-"); // minus
			value = replace(value, numberchars.substr(2,1), ""); // thousands
			value = replace(value, numberchars.substr(3,1), "."); // decimal point or comma
//remove the 0's at the beginning
			while (value!=0 && value.indexOf('0')==0)
				value = value.substr(1, value.length);
			obj.savedNumber = parseInt (value);			
			//if (value.indexOf("D") >= 0)
			//	value = value.replace(/(\d)0*$/, "$1"); // kill trailing 0s (all but first in ,00..) in mantissa
			value = replace (value, "+", numberchars.substr(0,1)); // remove plus
			value = replace(value, "-", numberchars.substr(1,1)); // minus
			obj.setValue(value);
		}
	}
//range check
	if (ok && min!='')
		ok = (parseInt(min)<=value);
	if (ok && max!='')
		ok = (parseInt(max)>=value);
		// This is added because there is no need to check empty value here.  CheckRequired is there has to be called for this .
	//I-0120061532 0006317141 2007
	if (min!='' && max !='' && value == '')
	{
		ok = true;
	}

	obj.savedValue = value;    // cache value and result
	obj.savedValResult = ok;
	return ok;
	
}

function checkDateTime(obj, dateFormat, minTimestamp, maxTimestamp)
{
    var ok = false;
    value = obj.getValue();
    if (value == obj.savedValue) ok = obj.savedValResult; // cache for performance
    else if (value == "") { obj.savedValue = ""; obj.savedTimestamp="00000000000000"; ok = true; }
    else {
	value = value.replace(/\s/, ""); // kill any white spaces
	dateFormat= dateFormat.replace(/mm/,"NN").toUpperCase(); // make this more readable: MM/DD/YYYY HH:NN:SS
        strPattern = dateFormat
	    .replace("MM","(\\d{1,2})")
	    .replace("M","(\\d{1,2})")
   	  .replace("DD","(\\d{1,2})")
   	  .replace("D","(\\d{1,2})")
	    .replace(/(.)YYYY/,"($1\\d{4,4}|$1\\d{2,2}|$1)?")	// 0, 2, or 4 digits, but never 1 or 3
  	    .replace("YYYY","(\\d{4,4}|\\d{2,2})") 		// 2, or 4 digits, but never 0, 1 or 3
	    .replace("HH","(\\d{1,2})")
	    .replace("NN","(\\d{1,2})")
   	    .replace(/(.)SS/,"($1\\d{1,2})?")
//   	    .replace("SS","(\\d{1,2})")
	    .replace(/\s+/,"\\s+")
	    .replace(/\./g,"\\."); // or anything will be accepted instead of .

        re = new RegExp ("^\\s*"+strPattern+"\\s*$");
        if (!re.exec(value)) ok = false;
        else {

            tmp = new Array;
            tmp["1"]=RegExp.$1;
            tmp["2"]=RegExp.$2;
            tmp["3"]=RegExp.$3;
            tmp["4"]=RegExp.$4;
            tmp["5"]=RegExp.$5;
            tmp["6"]=RegExp.$6;
            strPattern = dateFormat.replace (/([DMYHNS])[DMYHNS]*[^DMYHNS]?/g, "$1"); 

            tmp[strPattern.substr(0,1)]=eval(tmp["1"].replace(/[^0-9]/g, ""));
            tmp[strPattern.substr(1,1)]=eval(tmp["2"].replace(/[^0-9]/g, ""));
            tmp[strPattern.substr(2,1)]=eval(tmp["3"].replace(/[^0-9]/g, ""));
            tmp[strPattern.substr(3,1)]=eval(tmp["4"].replace(/[^0-9]/g, ""));
            tmp[strPattern.substr(4,1)]=eval(tmp["5"].replace(/[^0-9]/g, ""));
            tmp[strPattern.substr(5,1)]=eval(tmp["6"].replace(/[^0-9]/g, ""));

            date = new Date();date.setSeconds(0);

			//this temporary array saves the value of the actual date
			tmp2 = new Array;						
			tmp2["M"] = date.getMonth();
			tmp2["D"] = date.getDate();
			tmp2["Y"] = date.getFullYear();
			tmp2["H"] = date.getHours();
			tmp2["N"] = date.getMinutes();
			tmp2["S"] = date.getSeconds();
			date.setMonth(0);
			date.setDate(1);
			date.setYear(2000);
			date.setHours(0);
			date.setMinutes(0);

            if (typeof(tmp["D"])=="undefined"){ 
				tmp["D"]=tmp2["D"];
				date.setDate(tmp2["D"]);
			} else date.setDate(tmp["D"]);            
			if (typeof(tmp["M"])=="undefined"){ 
				tmp["M"]=tmp2["M"];
				date.setMonth(tmp2["M"]);
			} else {
        	tmp["M"]=tmp["M"]-1; // Date object counts monthes starting with 0
            	date.setMonth(tmp["M"]);
            }
            if (typeof(tmp["Y"])=="undefined"){
				tmp["Y"]=tmp2["Y"];
				date.setYear(tmp2["Y"]);
			} else {
	        if (tmp["Y"] < 100) { 
	            	c = date.getFullYear(); c = (c - c % 100); // start of century, four digits
	            tmp["Y"]= c + tmp["Y"];
            	}
	        date.setYear(tmp["Y"]);
            }
			
            if (typeof(tmp["H"])=="undefined"){ 
				tmp["H"]=tmp2["H"];
				date.setHours(tmp2["H"]);
			} else date.setHours(tmp["H"]);
            if (typeof(tmp["N"])=="undefined"){
				tmp["N"]=tmp2["N"];
				date.setMinutes(tmp2["N"]);
			} else date.setMinutes(tmp["N"]);
            if (typeof(tmp["S"])=="undefined") tmp["S"]=date.getSeconds();
            else date.setSeconds(tmp["S"]);

            ok = ( ((date.getFullYear()==tmp["Y"]) || ((1900+date.getFullYear())==tmp["Y"]))
        	&&(date.getMonth()==tmp["M"])
	        &&(date.getDate()==tmp["D"])
	        &&(date.getHours()==tmp["H"])
	        &&(date.getMinutes()==tmp["N"])
	        &&(date.getSeconds()==tmp["S"]));

            if (ok) {
	        tmp["M"]=tmp["M"]+1;
	        if (tmp["M"]<10) tmp["M"]="0"+tmp["M"];
	        if (tmp["D"]<10) tmp["D"]="0"+tmp["D"];
	        if (tmp["H"]<10) tmp["H"]="0"+tmp["H"];
	        if (tmp["N"]<10) tmp["N"]="0"+tmp["N"];
	        if (tmp["S"]<10) tmp["S"]="0"+tmp["S"];

                value=dateFormat.replace(/M+/,tmp["M"]).replace(/D+/,tmp["D"])
	                .replace(/Y+/i,tmp["Y"]).replace(/H+/,tmp["H"])
	                .replace(/N+/,tmp["N"]).replace(/S+/i,tmp["S"]);
    	        obj.setValue(value);
	        obj.savedTimestamp=tmp["Y"]+tmp["M"]+tmp["D"]+tmp["H"]+tmp["N"]+tmp["S"];
            }
        }
    }

// repeat range check, min & max might be dynamic therefore the cached result may not
// reflect the range check.
    if (ok && (minTimestamp != "") && (obj.savedTimestamp < minTimestamp)) ok = false;
    if (ok && (maxTimestamp != "") && (obj.savedTimestamp > maxTimestamp)) ok = false;

    obj.savedValue = value;    // cache value and result
    obj.savedValResult = ok;
    return ok;
}

function checkDate(obj, dateFormat, min, max)
{
    var ok = checkDateTime (obj, dateFormat, "", "");
    if (!ok) return false;
    var date = obj.savedTimestamp.substr(0,8);
    if (ok && (min != "") && (date < min)) ok = false;
    if (ok && (max != "") && (date > max)) ok = false;
    return ok;    
}

function checkTime(obj, timeFormat, min, max)
{
    var ok = checkDateTime (obj, timeFormat, "", "");
    if (!ok) return false;
    var time = obj.savedTimestamp.substr(8,6);
    if (ok && (min != "") && (time < min)) ok = false;
    if (ok && (max != "") && (time > max)) ok = false;
    return ok;    
}

function checkChanges (obj)
{
	var i; // local declaration in order to avoid changing variable in callers context!!!
	var form = window[obj.formid];
	var formelem;
	for (i = 0; i < form.elements.length; ++i) {
		formelem = form.elements[i];
		if (formelem.value && (formelem.value != formelem.defaultValue)
			&& (formelem.name != "htmlb_submit")) return true;
		if (formelem.checked && (formelem.checked != formelem.defaultChecked))  return true;
	}
	return false;
}

function checkCancelButton (obj, prompt)
{
	if (checkChanges(obj)) return confirm (prompt);
	else return true;
}

function checkOKButton (obj)
{
	var i; // local declaration in order to avoid changing variable in callers context!!!
	var va = document.getElementById(obj.formid).Validators; // as checkOKButton is a validator itself, this is ok
	if (!va){
		clearMessageBar();
		return true;
	}
	var firstfail = null;
	for (i = 0; i < va[0];) {
		vobj = va[++i];
		if (vobj == obj) continue;
		if (document.getElementById(vobj.id).tagName == "INPUT" && document.getElementById(vobj.id).readOnly == true) continue;
		if (!vobj.isValid() && !firstfail) firstfail = vobj;
	}
	if (firstfail) {
		if (firstfail.selectFocus) firstfail.selectFocus();
		showMessageBar(firstfail);
		return false;
	}
	clearMessageBar();
	return true;
}

function checkOKForm (formid)
{
	var i; // local declaration in order to avoid changing variable in callers context!!!
        var wf = window[formid]; if (!wf) return true;
        var va = window[formid].Validators; if (!va) return true;
	if (!va) return true;
	firstfail = null; ok = true;
	for (i = 0; i < va[0];) {
		vobj = va[++i];
		if (document.getElementById(vobj.id).tagName == "INPUT" && document.getElementById(vobj.id).readOnly == true) continue;
		if (!vobj.isValid() && !firstfail) firstfail = vobj;
	}
	if (firstfail) {
		if (firstfail.selectFocus) firstfail.selectFocus();
		showMessageBar(firstfail);
		return false;
	}
	clearMessageBar();
	return true;
}


/* ------- creator functions ------------------------------------*/
function _htmlbCreateEvent(event,objectID,eventName)
{
	var htmlbevent = new Object;
	htmlbevent.htmlEvent		= event;
	htmlbevent.srcElement		= event.target;
	htmlbevent.eventName		= eventName;
	htmlbevent._objectID		= objectID;
	htmlbevent.cancelSubmit	= false;
	htmlbevent.returnValue	= true;
	htmlbevent.clientX		= event.pageX;
	htmlbevent.clientY		= event.pageY;
	htmlbevent.screenX		= event.screenX;
	htmlbevent.screenY		= event.screenY;
	alert(objectID);
  alert(obj.formid);
	return htmlbevent;
}

function _htmlbCreateDocument(doc,docID)
{
	var htmlbdocument = new Object;

	htmlbdocument.documentID = docID;
	htmlbdocument._portableScripting = false; //doc["_"+htmlbdocument.documentID+"_portableScripting"];

	htmlbdocument.htmlDocument = doc;

	htmlbdocument.getControlByID	= _htmlb_Document_getControlByID;
	htmlbdocument.getControls		= _htmlb_Document_getControls;
	htmlbdocument.showDialogAt	= _htmlb_Document_showDialogAt;
	htmlbdocument.showDialog		= _htmlb_Document_showDialog;
	htmlbdocument.getDialogByID	= _htmlb_Document_getDialogByID;
	htmlbdocument.closeAllDialogs = _htmlb_Document_closeAllDialogs;
	htmlbdocument._getFormElementByID = _htmlb_Document_getFormElementByID;
	htmlbdocument._getHTMLElementByID = _htmlb_Document_getHTMLElementByID;

	return htmlbdocument;
}

function _htmlbCreateControl(doc,elem,controlClass,objectID)
{
	var htmlbcontrol = new htmlbControl(doc,objectID);
	var func;

	htmlbcontrol.controlClass		= controlClass;
	htmlbcontrol._eventSrcElement	= elem;

	func = window["htmlb_"+controlClass+"_Constructor"];
	func(htmlbcontrol);

	return htmlbcontrol;
}

/* ------- helper functions ------------------------------------*/
function _htmlbGetFormIDFromObjectID(objectID)
{
	var prefix = objectID.substr(4);
	var formIDStr;

	formIDStr = prefix.substr(prefix.indexOf("_")+1); 
	formIDStr = formIDStr.substr(0,formIDStr.indexOf("_"));
	prefix = prefix.substr(0,prefix.indexOf("_"));

	return objectID.substr(0,4) + prefix + "_" + formIDStr;
}

function _htmlbGetDocumentPrefix(id)
{
	var prefix = id.substr(4);

	prefix = prefix.substr(0,prefix.indexOf("_"));

	return id.substr(0,4)+prefix;
}

function _htmlbParkEventInDocument(doc,formID,htmlbevent)
{
	doc["_"+_htmlbGetDocumentPrefix(formID)+"_htmlbEvent"] = htmlbevent;
}

function _htmlbGetEventFromDocument(doc,formID)
{
	return doc["_"+_htmlbGetDocumentPrefix(formID)+"_htmlbEvent"];
}

function _htmlbCloseDialogs(event)
{
	var htmlbDoc = arguments.caller.callee.htmlbDocument;

	if ( htmlbDoc != null ) {
		var dlgList = htmlbDoc.htmlDocument["_"+htmlbDoc.documentID+"_OpenDialogList"];

		if ( dlgList != null ) {
			for ( var i = 0; i < dlgList.length; i++ ) {
				dlgList[i].close();
			}
		}		
	}

	if ( arguments.caller.callee.oldOnUnload != null ) {
		arguments.caller.callee.oldOnUnload(event);
	}
}

function _htmlbRegisterDialog(htmlbdocument,dialogID,dlg)
{
	var dlgList = htmlbdocument.htmlDocument["_"+htmlbdocument.documentID+"_DialogByIdList"];

	if ( dlgList == null ) {
		dlgList = new Array();

		htmlbdocument.htmlDocument["_"+htmlbdocument.documentID+"_DialogByIdList"] = dlgList;
	}

	dlgList[dialogID] = dlg;
}

function _htmlbRegisterDialogForClose(htmlbdocument,dlg)
{
	var dlgList = htmlbdocument.htmlDocument["_"+htmlbdocument.documentID+"_OpenDialogList"];

	if ( dlgList != null ) {
		dlgList[dlgList.length] = dlg;
	}else{
		dlgList = new Array();
		dlgList[0] = dlg;

		htmlbdocument.htmlDocument["_"+htmlbdocument.documentID+"_OpenDialogList"] = dlgList;

		var newFunc = new Function("event","_htmlbCloseDialogs(event);");

		newFunc.htmlbDocument = htmlbdocument;

		if ( window.onunload != null ) {
			newFunc.oldOnUnload = window.onunload;
		};

		window.onunload = newFunc;
	}
}

/* ------- document methods ------------------------------------*/
function _htmlb_Document_closeAllDialogs()
{
	var dlgList = this.htmlDocument["_"+this.documentID+"_OpenDialogList"];

	if ( dlgList != null ) {
		if ( dlgList != null ) {
			for ( var i = 0; i < dlgList.length; i++ ) {
				dlgList[i].close();
			}
		}		
	}
}

function _htmlb_Document_showDialogAt(dialogId,url,screenX,screenY,width,height,autoclose)
{
	var dlg = window.open(url,"_blank","status=yes,resizable=yes,left="+screenX+",top="+screenY+",width="+width+",height="+height);

	if ( dialogId != null && dialogId.length > 0 ) {
		_htmlbRegisterDialog(this,dialogId,dlg);
	}
	if ( autoclose == true ) {
		_htmlbRegisterDialogForClose(this,dlg);
	}
	return dlg;
}

function _htmlb_Document_showDialog(dialogId,url,width,height,centered,autoclose)
{
	var dlg;

	if ( centered == true ) {
		var screenX, screenY;

		screenX = (screen.availWidth - width)/2;
		screenY = (screen.availHeight - height)/2;

		dlg = window.open(url,"_blank","status=yes,resizable=yes,left="+screenX+",top="+screenY+",width="+width+",height="+height);
	}else{
		dlg = window.open(url,"_blank","status=yes,resizable=yes,width="+width+",height="+height);
	}

	if ( dialogId != null && dialogId.length > 0 ) {
		_htmlbRegisterDialog(this,dialogId,dlg);
	}
	if ( autoclose == true ) {
		_htmlbRegisterDialogForClose(this,dlg);
	}
	return dlg;
}

function _htmlb_Document_getDialogByID(dialogId)
{
	var dlgList = this.htmlDocument["_"+this.documentID+"_DialogByIdList"];
	var dlg;

	if ( dlgList != null ) {
		dlg = dlgList[dialogId];
	}
	return dlg;
}

function _htmlb_Document_getFormElementByID(id)
{ // NN6 specific
	var form = this.htmlDocument.getElementById(_htmlbGetFormIDFromObjectID(id));
	if ( form ) {
		return form[id]; 
	}else{
		return null;
	}
}

function _htmlb_Document_getHTMLElementByID(id)
{
	return this.htmlDocument.getElementById(id); // NN6 specific
}

function _htmlb_Document_getControlByID(controlID)
{
	var htmlbcontrol, controlClass, formID, objectID;
	var controlsByID;
	var controlInfo, controlInfoString;

	controlsByID = this.htmlDocument["_"+this.documentID+"_ControlsByID"];
	controlInfoString = controlsByID[controlID];
	
	if ( controlInfoString != null ) {
		controlInfo = controlInfoString.split("/");

		if ( controlInfo != null ) {
			htmlbcontrol = _htmlbCreateControl(this,null,controlInfo[1],controlInfo[0]);
		}
	}

	return htmlbcontrol;
}

function _htmlb_Document_getControls()
{
	if ( this._children == null ) {
		var i = 0;
		var objectID;
		var controlsByObjectID;
		var controlsByID;
		var htmlbcontrol;

		this._children = new Array();

		controlsByObjectID = this.htmlDocument["_"+this.documentID+"_ControlsByObjectID"];
		controlsByID = this.htmlDocument["_"+this.documentID+"_ControlsByID"];

		for ( objectID in controlsByObjectID ) {
			htmlbcontrol = this.getControlByID(controlsByObjectID[objectID]);
			if ( htmlbcontrol ) {
				this._children[i] = htmlbcontrol;
				i++;
			}
		}
	}
	return this._children;
}

/* ------- generic control methods ------------------------------------*/
function htmlbControl(doc,objectID)
{
	this._objectID		= objectID;
	this._formID		= _htmlbGetFormIDFromObjectID(objectID);
	
	this.document	= doc;

	this.getForm = htmlb_Control_getForm;
}

function htmlb_Control_getForm()
{
	if ( this._htmlbform == null ) {
		this._htmlbform = _htmlbCreateControl(this.document,null,"Form",this._formID + "_0");
	}
	return this._htmlbform;
}

/* ------- control methods ------------------------------------*/
function htmlb_Form_Constructor(htmlbcontrol)
{
	htmlbcontrol._htmlelement = htmlbcontrol.document.htmlDocument.getElementById(htmlbcontrol._formID); // NN6 specific

	htmlbcontrol.getControls = htmlb_Form_getControls;
	htmlbcontrol.getTarget = htmlb_Form_getTarget;
	htmlbcontrol.setTarget = htmlb_Form_setTarget;
}

function htmlb_Form_getTarget()
{
	if ( this._htmlelement != null ) {
		return this._htmlelement.target;
	}else{
		return "";
	}
}

function htmlb_Form_setTarget(value)
{
	if ( this._htmlelement != null ) {
		this._htmlelement.target = value;
	}
}

function htmlb_Form_getControls()
{
	if ( this._children == null ) {
		var i = 0;
		var objectID;
		var controlsByObjectID;
		var controlsByID;
		var htmlbcontrol;

		this._children = new Array();

		controlsByObjectID = this.document.htmlDocument["_"+this.document.documentID+"_ControlsByObjectID"];
		controlsByID = this.document.htmlDocument["_"+this.document.documentID+"_ControlsByID"];

		for ( objectID in controlsByObjectID ) {
			if ( objectID != this._formID ) { // exclude self
				var formID;
				formID = _htmlbGetFormIDFromObjectID(objectID);
				if ( formID == this._formID ) {
					htmlbcontrol = this.document.getControlByID(controlsByObjectID[objectID]);
					if ( htmlbcontrol ) {
						this._children[i] = htmlbcontrol;
						i++;
					}
				}
			}
		}
	}
	return this._children;
}

function htmlb_Button_Constructor(htmlbcontrol)
{
	htmlbcontrol.doClick = htmlb_Button_doClick;
}

function htmlb_Button_doClick()
{
	if ( this._htmlelement == null ) {
		this._htmlelement = this.document._getHTMLElementByID(this._objectID);
	}
	// unfortunately, this only works sometimes due to a NN6 bug
	if ( this._htmlelement != null && this._htmlelement.onclick != null ) {
		var evt = new Object();
		evt.target = this._htmlelement;
		this._htmlelement.onclick(evt);
	}
}

function htmlb_InputField_Constructor(htmlbcontrol)
{
	htmlbcontrol._htmlelement = htmlbcontrol.document._getFormElementByID(htmlbcontrol._objectID+"-value");

	htmlbcontrol.getValue = htmlb_InputField_getValue;
	htmlbcontrol.setValue = htmlb_InputField_setValue;

	if ( !htmlbcontrol.document._portableScripting ) {
		htmlbcontrol.getDisabled = htmlb_InputField_getDisabled;
		htmlbcontrol.setDisabled = htmlb_InputField_setDisabled;
		htmlbcontrol.getVisible = htmlb_InputField_getVisible;
		htmlbcontrol.setVisible = htmlb_InputField_setVisible;
	}
}

function htmlb_InputField_getValue()
{
	if ( this._htmlelement != null ) {
		return this._htmlelement.value;
	}else{
		return "";
	}
}

function htmlb_InputField_setValue(value)
{
	if ( this._htmlelement != null ) {
		this._htmlelement.value = value;
	}
}

function htmlb_InputField_getDisabled()
{
	if ( this._htmlelement != null ) {
		return this._htmlelement.disabled;
	}else{
		return false;
	}
}

function htmlb_InputField_setDisabled(value)
{
	if ( this._htmlelement != null ) {
		this._htmlelement.disabled = value;

		var str = this._htmlelement.className;
		var pos;

		if ( value ) {
			pos = str.indexOf("Enbl");
		}else{
			pos = str.indexOf("Dsbl");
		}
		if ( pos > 0 ) {	
			if ( value ) {
				str = str.substr(0,pos) + "Dsbl" + str.substr(pos+4);
			}else{
				str = str.substr(0,pos) + "Enbl" + str.substr(pos+4);
			}
		}

		this._htmlelement.className = str;
	}
}

function htmlb_InputField_getVisible()
{
	var elem = this.document._getHTMLElementByID(this._objectID);

	if ( elem != null ) {
		return elem.style.display != "none";
	}else{
		return "";
	}
}

function htmlb_InputField_setVisible(value)
{
	var elem = this.document._getHTMLElementByID(this._objectID);

	if ( elem != null ) {
		if ( value ) {
			if ( elem._oldDisplay != null ) {
				elem.style.display = elem._oldDisplay;
			}else{
				elem.style.display = "";
			}
		}else{
			elem._oldDisplay = elem.style.display;
			elem.style.display = "none";
		}
	}
}

function htmlb_Checkbox_Constructor(htmlbcontrol)
{
	htmlbcontrol._htmlelement = htmlbcontrol.document._getFormElementByID(htmlbcontrol._objectID+"-value");
	if ( htmlbcontrol._htmlelement == null ) {
		htmlbcontrol._htmlelement = htmlbcontrol.document._getHTMLElementByID(htmlbcontrol._objectID+"-value");
	}

	htmlbcontrol.getValue = htmlb_Checkbox_getValue;
	htmlbcontrol.setValue = htmlb_Checkbox_setValue;
	if ( !htmlbcontrol.document._portableScripting ) {
		htmlbcontrol.getDisabled = htmlb_Checkbox_getDisabled;
		htmlbcontrol.setDisabled = htmlb_Checkbox_setDisabled;
	}
}

function htmlb_Checkbox_getValue()
{
	if ( this._htmlelement != null ) {
		return this._htmlelement.checked;
	}else{
		return false;
	}
}

function htmlb_Checkbox_setValue(value)
{
	if ( this._htmlelement != null ) {
		this._htmlelement.checked = value;
	}
}

function htmlb_Checkbox_getDisabled()
{
	if ( this._htmlelement != null ) {
		return this._htmlelement.disabled;
	}else{
		return false;
	}
}

function htmlb_Checkbox_setDisabled(value)
{
	if ( this._htmlelement != null ) {
		this._htmlelement.disabled = value;
	}
}

function htmlb_DateNavigator_Constructor(htmlbcontrol)
{
	htmlbcontrol.fillEventData = htmlb_DateNavigator_FillEventData;
}

function htmlb_DateNavigator_FillEventData(htmlbevent,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
{
	if ( htmlbevent.eventName == "DateClick" ) {
		htmlbevent.year = param1.substr(0,4);
		htmlbevent.month = param1.substr(4,2);
		htmlbevent.day = param1.substr(6,2);
	}else if ( htmlbevent.eventName == "WeekClick" ) {
		htmlbevent.week = param1;
		htmlbevent.year = param2;
	}else if ( htmlbevent.eventName == "MonthClick" ) {
		htmlbevent.month = param1;
		htmlbevent.year = param2;
	};
}

/* ------- special functions ------------------------------------*/

/* Date help for input field*/

function sapCal_setZero(numb){
	if (numb < 10){
		dString="0" + numb;
	} else {
		dString="" + numb;
	}
	return(dString); 
}

function sapCal_makeDateString(pattern,vYear,vMonth,vDay){
  	var dateString = "";
  	var seperator;
  	var i = 0;
  	while (i <= pattern.length) {
  		if (pattern.charAt(i) != "d" &&
  		    pattern.charAt(i) != "M" &&
  		    pattern.charAt(i) != "y") {
  		  seperator = pattern.charAt(i);
  		  i = pattern.length;
  		}
  		i++;
  	}
  	var patternArray = pattern.split(seperator);
    for (var j=0; j < patternArray.length; j++) {
    	if (patternArray[j].indexOf("dd") >= 0)
    	  dateString+=sapCal_setZero(parseInt(vDay));
    	else if (patternArray[j].indexOf("d") >= 0)
    	  dateString+=parseInt(vDay);
    	if (patternArray[j].indexOf("MM") >= 0)
    	  dateString+=sapCal_setZero(parseInt(vMonth));
    	else if (patternArray[j].indexOf("M") >= 0)
    	  dateString+=parseInt(vMonth);
    	if (patternArray[j].indexOf("yy") >= 0)
    	  dateString+=vYear;
    	if (j < 2)	
    	  dateString+=seperator;  	
    }
  		return dateString;

}

function htmlb_showDateHelp(e,id, pattern, firstDay) {
  var value = sapUrMapi_InputField_getValue(id);
  var day;
  var month;
  var year;
    var seperator = "/";
    // get seperator
    var i = 0;
    //alert("Pattern: " + pattern);
  	while (i <= pattern.length) {
  		if (pattern.charAt(i) != "d" &&
  		    pattern.charAt(i) != "M" &&
  		    pattern.charAt(i) != "y") {
  		  seperator = pattern.charAt(i);
  		  i = pattern.length;
  		}
  		i++;
  	}
    var patternArray = pattern.split(seperator);
    var dateArray = value.split(seperator);
    for (var j=0; j < patternArray.length; j++) {
    	// get day
    	if (patternArray[j].indexOf("d") >= 0)
    	  if (dateArray.length >= (j+1))
    	    day = dateArray[j];
  	  // get month
  	  if (patternArray[j].indexOf("M") >= 0)
  	   if (dateArray.length >= (j+1))
  	     month = dateArray[j];
  		// get year
  		if (patternArray[j].indexOf("y") >= 0)
  		  if (dateArray.length >= (j+1))
  	 	    year = dateArray[j];		  	
  	}
  	//alert("day: " + day + " month: " + month + " year: " + year);
  var today =new Date(year,month-1,day);
  if(isNaN(today)) {
    var today = new Date();
    day = today.getDate();
    month = today.getMonth()+1;
    year = today.getFullYear();
  }                                    
   else { // make all runtime time number...   
    day = today.getDate();                      
    month = today.getMonth()+1;                 
    year = today.getFullYear();                 
  }                                             

    gDateformat = pattern;
	//to set the "df" attribute in sapUrMapi
	sapUrMapi_InputField_focusWithFormat(id,pattern,e);
    sapUrMapi_InputField_showDatePicker(id,year,month-1,day,firstDay-1, e);  	
}

function UR_InputFieldDateSelect(id,year,month,day) {
  var value = sapCal_makeDateString(gDateformat,day,month,year); 
  var inf = document.getElementById(id);
  var oValue = inf.value;
  sapUrMapi_InputField_setValue(id,value);
  if (oValue != value)
  	document.getElementById(id).onchange();
  sapUrMapi_hideDatePicker();
}
// end of Date help for input field 

//* ------------------------------------------------------------------------
//* function    : htmlb_showValueHelp
//* parameter   : event - the event which triggers to show the value help
//*		: fieldId - the generated id of the input field for which the value help should be launched
//*             : targetUrl - the application which should be launched to show the value help
//*    		: width - the width of the window 
//*		: height - the height of the window
//*		: isResizable - if the window is resizable
//*             : isTransferingData - determines if there should be data transfer after launching the value help window 
//*		: submitButtonId - the id of the button whose function which should be triggered automatically
//* description	: this function opens a non-modal window which contains the value help
//* ------------------------------------------------------------------------


function htmlb_showValueHelp(event,fieldId, targetUrl, width, height, isResizable, isTransferingData, submitButtonId){
//calculate the position of the input field of the main window
	xPos=window.screenX;
        yPos=window.screenY;
        if (isResizable)
        	tempResizable= "Yes";
        else
        	tempResizable= "No";        	        
	props = "width=" + width + ", height=" + height + ", top=" + yPos + ", left=" + xPos + ",resizable="+tempResizable;	   		
    	//how could I find out if there is already a window opened with the same URL and the same id 
	var oWindow = window.open(targetUrl, null, props);    	        	
	var inputField = eval(fieldId);
	inputField.isTransferingData = isTransferingData;
	inputField.submitButtonId = submitButtonId;
	inputField.valueHelpWindow = oWindow;
	htmlb_checkWindowReadyStatus(fieldId);
	oWindow.focus();
}

function htmlb_checkWindowReadyStatus(fieldId){
	var ready;	
	var inputField = eval(fieldId);
	var valueHelpWindow = inputField.valueHelpWindow;	
		try{
		if (valueHelpWindow.document == null) return;
		ready= valueHelpWindow.document.getElementById('readyState').value;					
		if (ready!="true"){			
			setTimeout("htmlb_checkWindowReadyStatus('"+fieldId+"')", 100);									
		}else{			
			htmlb_transferingDataIntoPopup(fieldId);					
		}				
	}catch(ex){
		setTimeout("htmlb_checkWindowReadyStatus('"+fieldId+"')", 100);			
	}	
}

function htmlb_transferingDataIntoPopup(fieldId){		        
//the target formid etc.
        var inputField = eval(fieldId);
	var valueHelpWindow = inputField.valueHelpWindow;	
	var submitButtonId = inputField.submitButtonId;
        var targetFormId = valueHelpWindow.document.forms[0].id;    			
	var position = fieldId.lastIndexOf('_');
	htmlb_formid = fieldId.substr(0, position);		
/*the array whose name stars with the generated id of the inputfield stores the mapping data*/
    	var obj = eval(fieldId+"_valueHelpMapping");  
    	if (obj!=null){
		for(var srcField in obj){
	    		var inputName = eval(htmlb_formid+"_htmlbElements['"+srcField+"']");  	    		
	    		var input = eval(inputName);
	    		var targetInf = obj[srcField];    	
	    		var targetInputField = valueHelpWindow.eval(valueHelpWindow.eval(targetFormId+"_htmlbElements['"+targetInf+"']"));    	
	    		targetInputField.setValue(input.getValue());    	
	    	}//end for
		//set the id to which field the selected value should be transferred                    		    	    	        	
	    	valueHelpWindow.document.getElementById('htmlbValueHelpFieldId').value=fieldId;    	    	    	
		//submit the form in the second window    	
	    	var submitButton;	    	
	    	var submitBtObj = valueHelpWindow.eval(targetFormId+"_htmlbElements['"+submitButtonId+"']");    	
	    	if (submitButtonId) {
	    		submitButton = valueHelpWindow.document.getElementById(submitBtObj);            	
	    		submitButton.onclick();
                                }
    	}
}

//* ------------------------------------------------------------------------
//* function    : htmlb_closeValueHelpWindow
//* parameter   : transferingData - boolean, tranfer data or not into the window launching the popup
//*		: id - the id of the field from which the data should be tranfered into the window launching the popup
//* description	: this function close the popup window and transfers the data back to the window launching the popup
//* ------------------------------------------------------------------------
function htmlb_closeValueHelpWindow(transferingData, id){	
	if(transferingData){
		var hiddenInputName = document.getElementById('htmlbValueHelpFieldId').value;				
		var windowOpener = window.opener;
		windowOpener.eval(hiddenInputName).setValue(document.getElementById(id).value);
	}
	window.close();
}

function onNavigatePath(controlId, offset, visibleCount, direction) {
	var i = 0;
	var start = 0;
	var stop = 0;
	var tempVisible = 0;
	var tempOffset = 0;



	tempVisible = parseInt(visibleCount);
	tempOffset = parseInt(offset);

	var pathItems = this[controlId + "_pathItems"];
	var container = document.getElementById(controlId + "_path");
	var prev = false;
	var follow = false;
	
	
	if (direction == "back") {	

		if ((tempOffset - tempVisible) < 0) {
			start = 0;
			stop = tempVisible;
		} else {
			start = tempOffset - tempVisible + 1;
			stop = tempOffset + 1;
		}
	} else {
		if (tempOffset + 2*tempVisible - 2 > pathItems.length - 1) {
			start = pathItems.length - tempVisible;
			stop = pathItems.length;
		} else {
			start = tempOffset + tempVisible - 1;
			stop = tempOffset + 2*tempVisible - 1;
		}
	}
	
	var buffer = "";

	if (start > 0) {
		buffer += "<a href=\"#\" class=\"sapHbrNspIn\" onclick=\"onNavigatePath('" + controlId + "', '" + start + "', '" + visibleCount + "', 'back');\">...</a>";
		buffer += this[controlId + "_dividerPath"];
	}

	for (i = start; i < stop; i++) {
		buffer += pathItems[i];
		if (i < stop - 1)
			buffer += this[controlId + "_dividerPath"];
	}

	if (stop < pathItems.length) {
		buffer += this[controlId + "_dividerPath"];
		buffer += "<a href=\"#\" class=\"sapHbrNspIn\" onclick=\"onNavigatePath('" + controlId + "', '" + start + "', '" + visibleCount + "', 'forward');\">...</a>";
	}

	container.innerHTML = buffer;

}

function htmlbEventCO(elem,eventClass,eventType,formID,objectID,eventName,paramCount,param1,param2,param3,param4,param5,param6,param7,param8,param9)
{
	htmlbevent = htmlbCreateEvent(elem,formID+"_"+objectID,eventName);

	func = window[formID+"_"+objectID+"_"+eventClass];
	if ( func != null) func(htmlbevent);
	return htmlbevent.returnValue;
}
function htmlbCreateEvent(elem,objectID,eventName)
{
	var htmlbevent = new Object;

//	htmlbevent.htmlEvent		= event;
	htmlbevent.srcElement		= elem;
	htmlbevent.eventName		= eventName;
	htmlbevent._objectID		= objectID;
	try{
	htmlbevent.obj          = eval(objectID);	
	}catch(e){
	}
	htmlbevent.returnValue	= true;
	htmlbevent.cancelSubmit	= false;
	return htmlbevent;
}

// Start Drag & Drop functions
var htmlbSrcObj = null;

function htmlbDragMouseOver(e) {
  // window.setCursor("grabbing");      
  document.body.style.cursor='pointer';  
}	

function htmlbDragMouseOut(e) {
  // window.setCursor("auto");     
    document.body.style.cursor='auto';  
}	

function htmlbStartDrag(e) {
   var helpObj = e.target;
   while ((!helpObj.getAttribute) || (helpObj.getAttribute('DragContainer') != "X") && (helpObj.parentNode != null)) {
      helpObj = helpObj.parentNode;
   }     
   if (helpObj.parentNode != null) {
     htmlbSrcObj=helpObj;
     document.onmousemove = htmlbDrag;
     document.onmouseup = htmlbCancelDrag;     
     e.preventDefault();     
     selectDropContainer(htmlbSrcObj.getAttribute("flavour"), htmlbSrcObj.getAttribute("targetClass"));
     // window.setCursor("spinning");        
	  document.body.style.cursor='move';   
   }
   else {
     htmlbSrcObj=null;
   }
   return false;
}

function htmlbDrag(e) {
  if (htmlbSrcObj != null) {
    var helpObj = e.target;
    var found = false;
    while (!found && helpObj.parentNode != null) {
      if (helpObj.tagName=='SPAN') {
      	if (helpObj.getAttribute('DropContainer') == "X") {
      	  if (checkFlavour(helpObj.getAttribute("flavour"),htmlbSrcObj.getAttribute("flavour")))	
      	    found = true;
      	}
      }
      if(!found)
        helpObj = helpObj.parentNode; 
    }     
    if (found)
      // window.setCursor("copy");      
	document.body.style.cursor='copy';   

    else
      // window.setCursor("hand");   
	  document.body.style.cursor='move';
  }
  return true;
}
	
function htmlbEndDrag(e) {
   if (htmlbSrcObj != null) {
     var helpObj = e.target;
     var found = false;
     while (!found && helpObj.parentNode != null) {
       if (helpObj.tagName=='SPAN') {
       	 if (helpObj.getAttribute('DropContainer') == "X") {
       	   if (checkFlavour(helpObj.getAttribute("flavour"),htmlbSrcObj.getAttribute("flavour")))
      	     found = true;
      	 }
       }
       if (!found)
         helpObj = helpObj.parentNode; 
     }     
     if (found) {
       eventType = helpObj.getAttribute('eventType');
       formId = helpObj.getAttribute('formId');
       controlId = helpObj.getAttribute('controlId');     
       eventId = helpObj.getAttribute('eventId');     
       targetValue = helpObj.getAttribute('targetValue');
       if (htmlbSrcObj.getAttribute("columnKey") && htmlbSrcObj.getAttribute("sourceContainerName")) {
         htmlbSubmit(this,eventType,formId,controlId,eventId,5,htmlbSrcObj.getAttribute("componentName"), htmlbSrcObj.getAttribute("SourceValue"), targetValue, htmlbSrcObj.getAttribute("sourceContainerName"), htmlbSrcObj.getAttribute("columnKey"));	     
       } else {
       	if (htmlbSrcObj.getAttribute("sourceContainerName"))
       	  htmlbSubmit(this,eventType,formId,controlId,eventId,4,htmlbSrcObj.getAttribute("componentName"), htmlbSrcObj.getAttribute("SourceValue"), targetValue, htmlbSrcObj.getAttribute("sourceContainerName"));	     
        else
       	  htmlbSubmit(this,eventType,formId,controlId,eventId,3,htmlbSrcObj.getAttribute("componentName"), htmlbSrcObj.getAttribute("SourceValue"), targetValue);	     
       }
     }
   }
   htmlbCancelDrag;
}

function htmlbCancelDrag(e) {
   // window.setCursor("auto");     
   document.body.style.cursor='auto'; 
   document.onmousemove = null;
   document.onmouseup = null;   
   htmlbSrcObj = null;
   unselectDropContainer();
   return false;
}	

function selectDropContainer(flavour, style) {   
  var dropContainer = new Array;
  dropContainer = document.getElementsByTagName("td");
  var i;
  for (i=0; i < dropContainer.length; i++) {
    if (dropContainer[i].getAttribute('id')=='htmlbDropContainer') {
      var chld = dropContainer[i].childNodes.item(0);
      if ( chld!=null && checkFlavour(chld.getAttribute("flavour"),flavour)) {        
        dropContainer[i].className=style;               
      }
    }
  }
} 

function unselectDropContainer() {   
  var dropContainer = new Array;
  dropContainer = document.getElementsByTagName("td");
  var i;
  for (i=0; i < dropContainer.length; i++) {
    if (dropContainer[i].getAttribute('id')=='htmlbDropContainer') {
      dropContainer[i].className="urDDUnselectDropTargets";            
    }
  }
} 

function checkFlavour(sFlavour,tFlavour ) {
 // check if flavour exists in Source 
 if (htmlbSrcObj != null) {
   var targetFlavours = tFlavour.split(',');      
   var sourceFlavours = sFlavour.split(',');

   for (var i=0;i < sourceFlavours.length; i++) {
     for (var j=0;j < targetFlavours.length; j++) {
       if (sourceFlavours[i] == targetFlavours[j]) {      
            return true;
        }
      }
   }
 }
 return false
}

// End Drag & Drop functions

var ButtonDesign_SMALL = "Sml";
var ButtonDesign_EMPHASIZED = "Emph";
var ButtonDesign_STANDARD = "Std";

function htmlb_button(htmlbid, id,text,enabled,design,tooltip, onclick)  {
  this.text      = "";
  this.design    = ButtonDesign_STANDARD;
  if (enabled) {
    this.enabled=true;
  } else {
    this.enabled=false;
  }
  this.onclick   = unescape(onclick);
  this.text = text;
  this.elementid = id;
  this.htmlbid   = htmlbid;
  this.element   = null;
  this.setAttribute = htmlb_button_setAttribute;
  this.setDesign = htmlb_button_setDesign;
  this.setText   = htmlb_button_setText;
  this.render    = htmlb_button_render;  
  this.getAttribute = htmlb_button_getAttribute;
  
}

function htmlb_button_setAttribute (strAttributeName, varAttributeValue) {
  switch (strAttributeName) {
    case "design"   : this.setDesign ( varAttributeValue ); break;
    case "enabled" :  this.enabled=varAttributeValue; this.render(); break;
    case "text"     : this.setText (varAttributeValue); break;
  }
}

function htmlb_button_getAttribute (strAttributeName){
  switch (strAttributeName) {
    case "design"   : return this.design;
    case "enabled" :  return this.enabled;
    case "text"     : return this.text;
  }	
}

function htmlb_button_setDesign( enumDesign ) { 
  this.design=enumDesign;  
  this.element = document.getElementById(this.htmlbid);  
  this.element.className="sapBtn"+enumDesign;  
}

function htmlb_button_setText ( text ){  
  this.text = text;	
  this.element = document.getElementById(this.htmlbid);
  this.element.innerHTML="<nobr>"+text+"</nobr>"
}

function htmlb_button_render() {  
  this.element = document.getElementById(this.htmlbid);
  if (this.enabled && !this.onclick =="") {
    this.element.className = "sapBtn"+this.design;    
    this.element.outerHTML = "<td id='"+this.htmlbid+"' class='"+this.element.className+"' onclick='"+this.onclick+"'><nobr>"+this.text+"</nobr></td>";   	
    //alert(this.element.outerHTML);
  } else {
    this.element.className = "sapBtn"+this.design+"Dsbl";        
    this.element.outerHTML = "<td id='"+this.htmlbid+"' class='"+this.element.className+"'><nobr>"+this.text+"</nobr></td>";   	    
  }   
  
}

var InputFieldDesign_SMALL = "Sml";
var InputFieldDesign_STANDARD = "";

function htmlb_inputfield(htmlbid, id, value, enabled, design, tooltip)  {
  this.value      = "";
  this.design    = InputFieldDesign_STANDARD;
  if (enabled) {
    this.enabled=true;
  } else {
    this.enabled=false;
  }
  this.elementid = id;
  this.htmlbid   = htmlbid;
  this.element = document.getElementById(this.htmlbid);
  this.setAttribute = htmlb_inputfield_setAttribute;
  this.getAttribute = htmlb_inputfield_getAttribute;
  this.setDesign = htmlb_inputfield_setDesign;
  this.setValue   = htmlb_inputfield_setValue;
  this.render    = htmlb_inputfield_render;    
}

function htmlb_inputfield_setDesign( enumDesign ) { 
  this.design=enumDesign;  
  this.element = document.getElementById(this.htmlbid);
  if (this.enabled) {    
    this.element.readOnly = false;
    this.element.className = "sapEdfTxt"+"Enbl"+this.design;        
  } else {
    this.element.readOnly = true;
    this.element.className = "sapEdfTxt"+"Dsbl"+this.design;    
  } 
}

function htmlb_inputfield_setAttribute (strAttributeName, varAttributeValue) {
  switch (strAttributeName) {
    case "design"   : this.setDesign ( varAttributeValue ); break;
    case "enabled" :  this.enabled=varAttributeValue; this.setDesign( this.design); break;
    case "value"     : this.setValue (varAttributeValue); break;
  }
}

function htmlb_inputfield_getAttribute (strAttributeName) {
  switch (strAttributeName) {
    case "design"   : return this.design;
    case "enabled"  : return this.enabled;
    case "value"    : return this.element.value;
  }
}

function htmlb_inputfield_setValue ( value ){  
  this.value = value;	  
  this.element = document.getElementById(this.htmlbid);
  this.element.value = value;   	
}

function htmlb_inputfield_render() {  
}
//functions for client side object for select object

function htmlb_dropdownlistbox(htmlbid, id)  {      
  this.elementid = id;
  this.htmlbid   = htmlbid;
  this.element = document.getElementById(this.htmlbid);  
  //methods
  this.getSelectedIndex = htmlb_dropdownlistbox_getSelectedIndex;
  this.setSelectedIndex = htmlb_dropdownlistbox_setSelectedIndex;
  this.getValue = htmlb_dropdownlistbox_getValue;
  this.setValue = htmlb_dropdownlistbox_setValue;
  this.getSelectedValue = htmlb_dropdownlistbox_getSelectedValue;
}

function htmlb_dropdownlistbox_getSelectedIndex(){
  this.element = document.getElementById(this.htmlbid);
  return this.element.selectedIndex;
}

function htmlb_dropdownlistbox_setSelectedIndex(index){
  this.element = document.getElementById(this.htmlbid);    
  this.element.selectedIndex = index;  
}

function htmlb_dropdownlistbox_getValue(index){
  return document.getElementById(this.htmlbid).options[index].text;
}

function htmlb_dropdownlistbox_setValue(index, value){
 this.element = document.getElementById(this.htmlbid);	 
 this.element.options[index].text = value; 
}

function htmlb_dropdownlistbox_getSelectedValue(){
  this.element = document.getElementById(this.htmlbid);
  var index = this.element.selectedIndex;
  return this.element.options[index].text;  	
}

// ********************************
// new with Unified rendering
// ********************************
function htmlb_TblSelectRow(id, index, e) {
  if (document.getElementById(id+"-chk"+index).value == "true")
    document.getElementById(id+"-chk"+index).value = "false";
  else
    document.getElementById(id+"-chk"+index).value = "true";
  sapUrMapi_Table_selectRow(id, index-1, e);

  // set clicked row in TableView object
	try {
    tv = eval(id);
	  tv.setClickedRow(index);	
	}
	catch(ex) {
  }
  
}

function htmlb_TblSingleSelectRow(id, index, e) {
	try {
    tv = eval(id);
	  tv.setClickedRow(index);	
	}
	catch(ex) {
  }
  document.getElementById(id+"-chk").value = index;
  sapUrMapi_Table_selectRow(id, index-1, e);
}

function htmlb_TbvCellClick(table, eventType, formId, controlId, eventId, colEventIds, colEventIdsC, e)
{
   var rowIndex = sapUrMapi_Table_getClickedRowIndex(controlId, e)+1;
   var colIndex = sapUrMapi_Table_getClickedColIndex(controlId, e)+1;
   var colEventIdsArr = colEventIds.split(',');
   
	 // set clicked row and column in TableView object
   try {
	   tv = eval(formId+"_"+controlId);
		 tv.setClickedRow(rowIndex);	
		 tv.setClickedColumn(colIndex);	
	 }
		 catch(ex) {
	 }
   
   var colEventIdsArr = colEventIds.split(',');
   var colEventIdsArrClient = colEventIdsC.split(',');
   
   if (rowIndex && colIndex)
   {
     var action = "";
     if (colEventIdsArr[colIndex-1] && colEventIdsArrClient[colIndex-1])
       action = "S,T,C";
     else if (colEventIdsArr[colIndex-1])
       action = "S";
     else if (colEventIdsArrClient[colIndex-1])
       action = "T,C";      
     if (action.length > 0) {
       htmlbDoEvent(this, action, eventType, eventId, formId, controlId, colEventIdsArr[colIndex-1], "_"+colIndex, 2, rowIndex, colIndex);
      }
     return;
   }   
}

function htmlb_TrcToggle( idTray, nCancelState, event) {
  if (document.getElementById(idTray+"_es").value == "true")
    document.getElementById(idTray+"_es").value = "false";
  else
    document.getElementById(idTray+"_es").value = "true";
  return sapUrMapi_Tray_toggle(idTray,event);
}

function htmlb_MnuToggle(mywindow,id,bIn,e) {
  sapUrMapi_PopupMenu_hoverItem(mywindow,id,e,true);
}

function htmlb_MnuItemSelect(Event, eventType, formId, indexOfElement, eventId, paramLength, itemId, checked){		
	var paramLength = 2;
	if (htmlb_nodeKey != null) {
	  paramLength = 4;
	}
	else {
	  if (htmlb_rootComponent != null)
	    paramLength = 3;
	}
	htmlbSubmit(window, eventType, formId, indexOfElement, eventId, paramLength, itemId, checked, htmlb_rootComponent, htmlb_nodeKey);	
}


var htmlb_rootComponent;
var htmlb_nodeKey;

function htmlb_TrayShowOptionMenu( idTray, optionMenuId, rootComponent, e) {
  	htmlb_rootComponent = rootComponent;
  	htmlb_rootNodeKey = null;
    sapUrMapi_Tray_showOptionMenu(idTray, e.target.id, optionMenuId, sapPopupPositionBehavior.MENURIGHT,e); 
    return true;
}

function htmlb_ShowPopupMenu(id, optionMenuId, rootComponent,e) {
  	htmlb_rootComponent = rootComponent;
  	htmlb_nodeKey = null;
  	if ((e==null) || (e.type=="mouseover") || (e.type=="click")||(e.type=="contextmenu")||(sapUrMapi_checkKey(e,"keydown",new Array("32")))||(e.shiftKey&&sapUrMapi_checkKey(e,"keydown",new Array("121")))){    
    		sapUrMapi_PopupMenu_showMenu(id, optionMenuId, sapPopupPositionBehavior.MENULEFT,e); 
    		return true;
    	}
}

function htmlb_ShowPopupMenuOnNode(id, optionMenuId, rootComponent, treeNode,e) {
  	htmlb_rootComponent = rootComponent;
  	htmlb_nodeKey = treeNode;
    sapUrMapi_PopupMenu_showMenu(id, optionMenuId, sapPopupPositionBehavior.MENULEFT,e); 
    return true;
}

function htmlb_MnuItemToggleChecked(id, index) {
  var checkedItems = document.getElementById(id+'_chkitm');
	var s = checkedItems.value;
	if (s.indexOf("+"+index+"+") >= 0){
		p = s.indexOf("+"+index+"+")
		checkedItems.value = s.substring(0,p)+s.substring(p+("+"+index+"+").length-1,s.length);
  } else {
  	checkedItems.value += (index+"+");
	}
}


function htmlb_TreeToggle(treeId, nodeId, e) {
  var nodeDiv = document.getElementById(nodeId);
  var expandListField = document.getElementById( nodeId.split("-")[0] + "Eln" );  
  if(expandListField) {
    if(ur_isSt(nodeDiv,ur_st.COLLAPSED)) {
      var nodeIndex = nodeId.split("-")[1];
      var rex = new RegExp("(:"+nodeIndex+":.)","");
      var index = expandListField.value.search(rex);
      if (index < 0) 
        expandListField.value += ":" +nodeIndex+":+";
      else
        expandListField.value = expandListField.value.replace(rex,":"+nodeIndex+":+");
    }
    else {
      var nodeIndex = nodeId.split("-")[1];
      var rex = new RegExp("(:"+nodeIndex+":.)","");
      var index = expandListField.value.search(rex);
      if (index < 0) 
        expandListField.value += nodeIndex+"-";
      else
        expandListField.value = expandListField.value.replace(rex,":"+nodeIndex+":-");
    }
  }
  sapUrMapi_Tree_toggle(treeId, nodeId, false, false)	
}

function htmlb_TreeDragEnter(nodeId) {	
  var nodeDiv = document.getElementById( nodeId);	
  if( nodeDiv.status == "closed" )
    sapUrMapi_Tree_InvokeNodeClick(nodeId);
}

function htmlb_TabKeySelect(strId, intTabCount, intSelectedIdx, htmlbIdx, e) {
	if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))){
		sapUrMapi_TabStrip_focusItem(strId,intSelectedIdx,intTabCount,e.keyCode==39,e.keyCode==37);
		return;
  }
  if (sapUrMapi_checkKey(e,"keydown",new Array("32"))){
  	document.getElementById(id + '_idx').value=htmlbIdx;	
  	sapUrMapi_TabStrip_setActiveItem(strId,intSelectedIdx);
  	return;
  }	
}

function htmlbSwitchTabOnClient (id, htmlbIdx, urIdx) {
  document.getElementById(id + '_idx').value=htmlbIdx;	
  sapUrMapi_TabStrip_setActiveItem(id,urIdx);
}

function htmlbPopupTriggerOver(id, event){
  if (event.type == "mouseover"){
  	sapUrMapi_PopupTrigger_hover(id ,true ,event);
  }else if (event.type == "mouseout"){
  	sapUrMapi_PopupTrigger_hover(id ,false ,event);		
  }		
}

function htmlbButton_checkClick(id, e) {
   // var o=eval(id);
 var o =document.getElementById(id); 
  if(o!=null) {
    if(o.isEnabled==undefined || o.isEnabled) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}

function htmlb_addTexts(lang, texts) {
  if(ur_txt[lang]) {
    for ( var i in texts) {
      if(!ur_txt[lang][i]) {
		ur_txt[lang][i] = texts[i];
      }
    }
  } else {
    ur_txt[lang] = texts;
  }
}

function htmlb_treenodeaction(event,collapse) {
  var r = false;
  if(event!=null) {
    if(collapse==false) {
      if(event.keyCode=='39' && ur_system.direction!="rtl") {
        r=true;
      } else if(event.keyCode=='37' && ur_system.direction=="rtl") {
        r=true;
      }
    } else {
      if(event.keyCode=='39' && ur_system.direction=="rtl") {
        r=true;
      } else if(event.keyCode=='37' && ur_system.direction!="rtl") {
        r=true;
      }
    }
  } 
  return r;
}

function _htmlbTimer(formid, id){return _htmlbsimplecontrol(formid, id);}
function htmlb_ItemListBoxSetSelection(sId,oDoc,event) {
	document.getElementById(sId+"_es").value = event.target.textContent;     
}

function _htmlbComboBox (formid,id)
{
        var obj = _htmlbListBox (formid, id);
        return obj;
}

function _htmlbItemListBox (formid,id) 
{
        var obj = _htmlbListBox (formid, id);
        return obj;
}