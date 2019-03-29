
//** GlobalVariables.nn7 **

var sapUrDomainRelaxing = {NONE:"NONE",MINIMAL:"MINIMAL",MAXIMAL:"MAXIMAL"};
var sapUrGlobalStorage = null;
try {ur_system==null;} catch(e) {ur_system = {doc : window.document , stylepath : document.location.pathname.substring(0,document.location.pathname.substring(1).indexOf("/")+1)+"/resources/style/", is508 : true, domainrelaxing:sapUrDomainRelaxing.MINIMAL, dateformat:1, firstdayofweek:0, createTimeFrameworkControlled:false};}
try {ur_language==null;} catch(e) {ur_language=""};
ur_txt=new Array();
ur_system.browser_abbrev = "nn7";
if (ur_system.stylepath.lastIndexOf("/ur/")==ur_system.stylepath.length-4) ur_system.stylepath=ur_system.stylepath.substring(0,ur_system.stylepath.length-3);
if (ur_system.mimepath == null) ur_system.mimepath = ur_system.stylepath.substring(0,ur_system.stylepath.indexOf("/ur"))+"/common/";
if(ur_system.emptyhoverurl==null) ur_system.emptyhoverurl = ur_system.mimepath+"emptyhover.html";
ur_KEYS = {TAB:9,ESCAPE:27,
           UP:38,DOWN:40,LEFT:37,RIGHT:39,
           BEGIN:36,END:35,PAGE_UP:33,PAGE_DOWN:34,POS1:36,
           BACKSPACE:8,DELETE:46,ENTER:13,SPACE:32,INSERT:45,
           F4:115}

//** Abbrev.ie5 **

ur_ctmap={AX:"ActiveXContainer",AP:"AppletContainer",BRC:"BreadCrumb",B:"Button",BR:"ButtonRow",CP:"Caption",C:"CheckBox",CG:"CheckBoxGroup",CB:"ComboBox",CXP:"ContextualPanel",DT:"DataTip",DN:"DateNavigator",DRS:"DragSource",DDL:"DropDownListBox",DRT:"DropTarget",FU:"FileUpload",FL:"FlowLayout",FOC:"FocusRect",FRA:"FreeArea",GTBV:"GenericTableView",GM:"GeoMap",GL:"GridLayout",G:"Group",HD:"HorizontalDivider",IF:"Iframe",IMG:"Image",I:"InputField",IT:"InputTokenizer",ITL:"InputTokenList",INV:"Invisible",IL:"ItemList",ILB:"ItemListBox",	L:"Label",LEG:"Legend",LEGDI:"LegendDateNavigatorItem",LEGTI:"LegendTableItem",LN:"Link",LB:"ListBox",LA:"LoadingAnimation",ML:"MatrixLayout",MNB:"MenuBar",MB:"MessageBar",NL:"NavigationList",PH:"ViewSwitch",PG:"Paginator",PC:"PatternContainerContentItem",PCI:"PatternContainerIconButton",PCSEQ:"PatternContainerSequence",PCTAB:"PatternContainerTab",PCTIT:"PatternContainerTitle",PHI:"PhaseIndicator",PI:"PopIn",POMN:"PopupMenu",POTRG:"PopupTrigger",PRI:"ProgressIndicator",R:"RadioButton",RG:"RadioButtonGroup",RL:"RasterLayout",RI:"RatingIndicator",RM:"RoadMap",ST:"SapTable",STC:"SapTableCell",STDB:"SapTableDefaultBody",STHC:"SapTableHeaderCell",STHIC:"SapTableHierarchicalCell",STR:"SapTableRow",STSB:"SapTableScrollingBody",STSC:"SapTableSelectionCell",SC:"ScrollContainer",SLB:"SelectableLinkBar",SL:"SingleColumnLayout",TBV:"TableView",TS:"TabStrip",TSITM:"Tabstrip Item",TXB:"TextBar",TE:"TextEdit",TV:"TextView",TGL:"ToggleLink",T:"Toolbar",TB:"ToolbarButton",TCB:"ToolbarComboBox",TDDL:"ToolbarDropDownListBox",TI:"ToolbarInputField",TLN:"ToolbarLink",TSEP:"ToolbarSeparator",TY:"Tray",TR:"Tree",TRI:"TriStateCheckBox",BS:"UrBase",VC:"ValueComparison",VS:"ViewSwitch"};
ur_st={SUCCESS:"a",ERROR:"b",COMPLETED:"c",DESELECTABLE:"D",DISABLED:"d",END:"e",INVALID:"i",REQUIRED:"m",NOTSELECTED:"n",UNCOMPLETED:"o",READONLY:"r",SELECTABLE:"6",SELECTED:"s",UNDEFINED:"u",WARNING:"w",MINIMIZED:"z",START:"1",EXPANDED:"+",COLLAPSED:"-",SORTEDASC:"2",SORTEDDESC:"3",NOTSORTED:"4",DYNAMIC:"y"};

//** StringUtil.ie5 **

ERROR = 0, WARNING = 1, INFO = 2, DEBUG = 3;
function _trace(iLevel, sText, sLocation) {
	
};
function _assert(bResult, sStatement, sLocation) {
};
function UCF_StringUtil() {
};
UCF_StringUtil.fillChars = function (sBaseString, sFillChar, iTotalLength, bAddInFront) {
	_assert( typeof(sBaseString) == "string");
	_assert( typeof(sFillChar) == "string");
	_assert( typeof(iTotalLength) == "number");
	_assert( Math.floor(iTotalLength) == iTotalLength );
	_assert( sFillChar.length <= 1);
	var sNewString = sBaseString;
	
	while (sNewString.length < iTotalLength) {
		if (bAddInFront) {
			sNewString = sFillChar + sNewString;
		}
		else {
			sNewString += sFillChar;
		}
	}
	return sNewString;
};
UCF_StringUtil.sGetCSSNotation = function (sJSNotation) {
	return sJSNotation.replace(/([A-Z])/g, "-$1").toLowerCase();
};
UCF_StringUtil.sGetJsNotation = function (sCSSNotation) {
	var iIndex = sCSSNotation.indexOf("-");
	while (iIndex>-1) {
		sCSSNotation = sCSSNotation.substring(0,iIndex) + sCSSNotation.substring(iIndex+1,iIndex+2).toUpperCase() +  sCSSNotation.substring(iIndex+2);
		iIndex = sCSSNotation.indexOf("-");
	}
	return sCSSNotation;
};
UCF_StringUtil.bStartsWith = function (sString, sSubString, bIgnoreCase) {
	if (bIgnoreCase) {
		sString = sString.toUpperCase();
		sSubString = sSubString.toUpperCase();
	}
	return sString.indexOf(sSubString) == 0;
};
UCF_StringUtil.bEndsWith = function (sString, sSubString, bIgnoreCase) {
	if (bIgnoreCase) {
		sString = sString.toUpperCase();
		sSubString = sSubString.toUpperCase();
	}
	var iPos = sString.indexOf(sSubString);
	return iPos >= 0 && iPos == sString.length - sSubString.length;
};
UCF_StringUtil.bContains = function (sString, sSubString, bIgnoreCase) {
	
	if(sString && sSubString) {
		if (bIgnoreCase) {
			sString = sString.toUpperCase();
			sSubString = sSubString.toUpperCase();
		}
		return sString.indexOf(sSubString) >= 0;
	}
	
	return false;
};
UCF_StringUtil.sStripWhiteSpace = function(sValue) {
	return sValue.replace(/\s/g, "");
	
	
};
UCF_StringUtil.sTrim = function(sValue) {
	
	return sValue.replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "");
};
UCF_StringUtil.bIsEmpty = function(sValue) {
	return /^\s*$/.test(sValue);
};
UCF_StringUtil.iParseInt = function(oObj) {
	var i = parseInt(oObj);
	return isNaN(i) ? 0 : i;
};

//** UserAgent.ie5 **

function UCF_UserAgent() {
};
UCF_UserAgent.TRIDENT = "TRIDENT";
UCF_UserAgent.GECKO = "GECKO";
UCF_UserAgent.WEBKIT = "WEBKIT";
UCF_UserAgent.MSIE = "MSIE";
UCF_UserAgent.FIREFOX = "Firefox";
UCF_UserAgent.SAFARI = "Safari";
UCF_UserAgent.CHROME = "Chrome";
UCF_UserAgent.OPERA = "Opera";
UCF_UserAgent.WINDOWS = "WINDOWS";
UCF_UserAgent.MACOS = "MACINTOSH";
UCF_UserAgent.LINUX = "X11";
UCF_UserAgent.IOS = "IOS";
UCF_UserAgent.ANDROID = "ANDROID";
UCF_UserAgent.init = function() {
	var sUserAgent = window.navigator.userAgent,
		sSearchUA = /Trident\/(\d+\.\d+)/,
		sSearchB  = [/MSIE (\d+\.\d+)/];
	
	this.sUA = UCF_UserAgent.TRIDENT;
	this.sB = UCF_UserAgent.MSIE;
	this.fUAVersion = 0;
	this.fBVersion = 0;
	this.bPhone = false;
	this.bTablet = false;
	this.bDesktop = true;
	
	if (sUserAgent.indexOf("Gecko/")>-1) {
		this.sUA = UCF_UserAgent.GECKO;
		sSearchUA = /rv:(\d+\.\d+)/;
		
	 	if (sUserAgent.indexOf("Firefox/")>-1) {
	 		this.sB = UCF_UserAgent.FIREFOX;
	 		sSearchB.push(/Firefox\/(\d+\.\d+)/);
	 	}
	}
	
	else if (sUserAgent.indexOf("WebKit/")>-1) {
		this.sUA = UCF_UserAgent.WEBKIT;
		sSearchUA = /WebKit\/(\d+).(\d+)/;
		
		if (sUserAgent.indexOf("Chrome/")>-1) {
			this.sB = UCF_UserAgent.CHROME;
			sSearchB.push(/Chrome\/(\d+\.\d+)/);
		}
		
		else if (sUserAgent.indexOf("Safari/")>-1) {
			this.sB = UCF_UserAgent.SAFARI;
			sSearchB.push(/Version\/(\d+\.\d+)/);
		}
	}
	
	else if (sUserAgent.indexOf("Opera/")>-1) {
		this.sUA = UCF_UserAgent.OPERA;
		this.sB = UCF_UserAgent.OPERA;
		sSearchUA = /Opera\/(\d+\.\d+)/;
		sSearchB.push(/Opera\/(\d+\.\d+)/);
	}
	
	
	
	if (sSearchUA.test(sUserAgent)) {
		this.fUAVersion = parseFloat(RegExp.$1);
	}
	
	
	
	
	if(this.sUA == UCF_UserAgent.TRIDENT && this.fUAVersion >= 7.0) {
		sSearchB.push(/rv:(\d+\.\d+)/);
	}
	for (var i=0; i < sSearchB.length; i++) {
		if (sSearchB[i].test(sUserAgent)) {
			this.fBVersion = parseFloat(RegExp.$1);
		}
	}
	
	
	if (sUserAgent.indexOf("Windows ")>-1) this.sOs = UCF_UserAgent.WINDOWS;
	else if (sUserAgent.indexOf("Android")>-1) this.sOs = UCF_UserAgent.ANDROID;
	else if (sUserAgent.indexOf("Linux")>-1) this.sOs = UCF_UserAgent.LINUX;
	else if (sUserAgent.indexOf("iPad")>-1) this.sOs = UCF_UserAgent.IOS;
	else if (sUserAgent.indexOf("iPhone")>-1) this.sOs = UCF_UserAgent.IOS;
	else if (sUserAgent.indexOf("iPod")>-1) this.sOs = UCF_UserAgent.IOS;
	else if (sUserAgent.indexOf("Mac OS")>-1) this.sOs = UCF_UserAgent.MACOS;
	
	try {
		this.bPhone = /iphone/i.test(sUserAgent) || (/(?=android)(?=.*mobile)/i.test(sUserAgent) && (Math.max(window.screen.width / window.devicePixelRatio, window.screen.height / window.devicePixelRatio) < 600)) && "ontouchend" in document;
		this.bTablet = sUserAgent.indexOf("iPad")>-1 || (/(?=android)(?=.*mobile)/i.test(sUserAgent) && (Math.max(window.screen.width / window.devicePixelRatio, window.screen.height / window.devicePixelRatio) >= 600)) && "ontouchend" in document;
	} catch (ex) {
		
	}
	this.bDesktop = !this.bIsPhone() && !this.bIsTablet(); 
	
	
	
	
	
	this.bIECompatibilityMode = false;
	if(this.sB == UCF_UserAgent.MSIE){
		
		
		
		
		
		
		if(!this.fUAVersion) this.fUAVersion = 3.0; 
		this.bIECompatibilityMode = (this.fUAVersion >= 4.0) && (this.fBVersion - this.fUAVersion < 4.0);
	}
	
};
UCF_UserAgent.bVersionCheck = function(fVersion, fCheckVersion) {
	if (typeof(fVersion)=="number") { 
		return fVersion <= fCheckVersion;
	}	
	return false;
};
UCF_UserAgent.bIsUserAgent = function(sUserAgent, fVersion) {
	if (this.sUA == sUserAgent && typeof(fVersion)!="number") return true;
	return this.sUA == sUserAgent && this.bVersionCheck(fVersion,this.fUAVersion);
};
UCF_UserAgent.bIsBrowser = function(sBrowser, fVersion) {
	if (this.sB == sBrowser && typeof(fVersion)!="number") return true;
	return this.sB == sBrowser && this.bVersionCheck(fVersion,this.fBVersion);
};
UCF_UserAgent.bIsTrident = function(fVersion) {
	return this.bIsUserAgent(this.TRIDENT,fVersion);
};
UCF_UserAgent.bIsGecko = function(fVersion) {
	return this.bIsUserAgent(this.GECKO,fVersion);
};
UCF_UserAgent.bIsWebKit = function(fVersion) {
	return this.bIsUserAgent(this.WEBKIT,fVersion);
};
UCF_UserAgent.bIsIE = function(fVersion) {
	return this.bIsBrowser(this.MSIE,fVersion);
};
UCF_UserAgent.bIsFirefox = function(fVersion) {
	return this.bIsBrowser(this.FIREFOX,fVersion);
};
UCF_UserAgent.bIsSafari = function(fVersion) {
	return UCF_UserAgent.bIsBrowser(this.SAFARI,fVersion);
};
UCF_UserAgent.bIsChrome = function(fVersion) {
	return this.bIsBrowser(this.CHROME,fVersion);
};
UCF_UserAgent.bIsWindows = function() {
	return this.sOs == this.WINDOWS;
};
UCF_UserAgent.bIsLinux = function() {
	return this.sOs == this.LINUX;
};
UCF_UserAgent.bIsMacOs = function() {
	return this.sOs == this.MACOS;
};
UCF_UserAgent.bIsIOS = function() {
	return this.sOs == this.IOS;
};
UCF_UserAgent.sGetPlatform = function() {
	return this.sOs;
};
UCF_UserAgent.sGetUserAgentName = function() {
	return this.sUA;
};
UCF_UserAgent.bIsIECompatibilityMode = function() {
    return this.bIsIE() && this.bIECompatibilityMode;
};
UCF_UserAgent.bIsStandardsMode = function() {
    return document.compatMode == "CSS1Compat";
};
UCF_UserAgent.bIsQME = function() {
    return this.bIsIE() && parseInt(document.documentMode) >= 9 &&  document.compatMode.indexOf("BackCompat") != -1;
};
UCF_UserAgent.bIsTablet = function() {
	return this.bTablet;
};
UCF_UserAgent.bIsPhone = function() {
	return this.bPhone;
	
};
UCF_UserAgent.bIsDesktop = function() {
	return this.bDesktop;
};
UCF_UserAgent.init();

//** JsUtil.ie5 **

function UCF_JsUtil() {
};
UCF_JsUtil.mDelayedCalls = {};
UCF_JsUtil.mIntervalCalls = {};
UCF_JsUtil.iIdCounter = 0;
UCF_JsUtil.MODIFIER = {
		NONE: 0,
		SHIFT: 1,
		CTRL: 2,
		ALT: 4,
		ALL: 100,
		NONE_OR_SHIFT: 101,
		NONE_OR_CTRL: 102,
		NONE_OR_SHIFT_XOR_CTRL: 103
	};
UCF_JsUtil.sSerialize = function(oObject) {
	
	if (!oObject) return "";
	_assert(oObject != null);
	_assert(typeof(oObject) == "object");
	
	
	var aBuffer = [];
	this.serializeToBuffer(oObject, aBuffer);
	return aBuffer.join("");
};
UCF_JsUtil.serializeToBuffer = function(oObject, aBuffer) {
	
	_assert(typeof(aBuffer) == "object");
	if (oObject == null ) return null;
	switch (typeof(oObject)) {
		case "object":
			if (oObject instanceof Array) {
				aBuffer.push("[");
				for (var i = 0; i < oObject.length; i++) {
					if (i > 0) aBuffer.push(", ");
					this.serializeToBuffer(oObject[i], aBuffer);
				}
				aBuffer.push("]");
			}
			else {
				aBuffer.push("{");
				var bFirst = true;
				for (var i in oObject) {
					
					
					if (typeof(oObject[i]) == "undefined")
						continue;
					
					if (!bFirst) aBuffer.push(", ");
					else bFirst = false;
					this.serializeToBuffer(i, aBuffer);
					aBuffer.push(": ");
					this.serializeToBuffer(oObject[i], aBuffer);
				}
				aBuffer.push("}");
			}
			break;
		case "string":
			aBuffer.push("\"");
			aBuffer.push(oObject.replace(/\\/g, "\\\\").replace(/"/g, "\\\""));
			aBuffer.push("\"");
			break;
		default:
			aBuffer.push(oObject);
	}
};
UCF_JsUtil.oDeserialize = function(sObject) {
	_assert(typeof(sObject) == "string");
	var oObject;
	try {
		eval("oObject = " + sObject);
	} catch (e) {
		oObject = null;
	}
	return oObject;	
};
UCF_JsUtil.delayedCall = function(iDelay, oObject, sMethodName, aParameters) {
	
	_assert(typeof(iDelay) == "number");
	
	_assert(typeof(oObject) == "object" || typeof(oObject) == "function");
	_assert(oObject != null);
	_assert(typeof(sMethodName) == "string");
	var sInfo = "";
	
	if (!aParameters) aParameters = [];
	var sDelayedCallId = sMethodName +  this.sGetUID();
	var sTimeoutId = setTimeout('UCF_JsUtil.callDelayedCallRedirect("' + sDelayedCallId + '")', iDelay);
	this.mDelayedCalls[sDelayedCallId]= {
		oObject: oObject, 
		sMethodName: sMethodName, 
		aParameters: aParameters, 
		sTimeoutId: sTimeoutId,
		sInfo: sInfo
	};
	return sDelayedCallId;
	
};
UCF_JsUtil.clearDelayedCall = function(sDelayedCallId) {
	var oDelayedCall = this.mDelayedCalls[sDelayedCallId];
	if (oDelayedCall) {
		clearTimeout(oDelayedCall.sTimeoutId);
		delete this.mDelayedCalls[sDelayedCallId];
	}
};
UCF_JsUtil.clearDelayedCallsOfObject = function(oObject) {
	var mDelayedCalls = this.mDelayedCalls;
	
	for(var sDelayedCallId in mDelayedCalls) {
		if(mDelayedCalls[sDelayedCallId].oObject == oObject) 
			this.clearDelayedCall(sDelayedCallId);
	}
};
UCF_JsUtil.callDelayedCallRedirect = function(sDelayedCallId) {
	var oDelayedCall = this.mDelayedCalls[sDelayedCallId];
	if (oDelayedCall) {
		_trace(DEBUG, oDelayedCall.sInfo);
		oDelayedCall.oObject[oDelayedCall.sMethodName].apply(oDelayedCall.oObject, oDelayedCall.aParameters);
		UCF_JsUtil.clearDelayedCall(sDelayedCallId);
	}
};
UCF_JsUtil.intervalCall = function(iInterval, oObject, sMethodName, aParameters) {
	
	_assert(typeof(iInterval) == "number");
	_assert(typeof(oObject) == "object");
	_assert(oObject != null);
	_assert(typeof(sMethodName) == "string");
	
	if (!aParameters) aParameters = [];
	
	var sIntervalCallId = sMethodName +  this.sGetUID();
	var sIntervalId = setInterval('UCF_JsUtil.callIntervalCallRedirect("' + sIntervalCallId + '")', iInterval);
	this.mIntervalCalls[sIntervalCallId]= {
		oObject: oObject, 
		sMethodName: sMethodName, 
		aParameters: aParameters, 
		sIntervalId: sIntervalId
	};
	return sIntervalCallId;
};
UCF_JsUtil.clearIntervalCall = function(sIntervalCallId) {
	var oIntervalCall = this.mIntervalCalls[sIntervalCallId];
	if (oIntervalCall) {
		clearInterval(oIntervalCall.sIntervalId);
		delete this.mIntervalCalls[sIntervalCallId];
	}
};
UCF_JsUtil.callIntervalCallRedirect = function(sIntervalCallId) {
	var oIntervalCall = this.mIntervalCalls[sIntervalCallId];
	if (oIntervalCall) {
		oIntervalCall.oObject[oIntervalCall.sMethodName].apply(oIntervalCall.oObject, oIntervalCall.aParameters);
		
	}
};
UCF_JsUtil.feedMassNotificationFilter = function(iDelay, oCommon, oCallInstance, sCallMethod, aCallParameters){
	
	_assert(typeof(iDelay) == "number");
	_assert(typeof(oCommon) == "object" || typeof(oCommon) == "function");
	_assert(typeof(oCallInstance) == "object");
	_assert(typeof(sCallMethod) == "string");
	
	if(oCommon.sMassNotificationFilterTimerId) UCF_JsUtil.clearDelayedCall(oCommon.sMassNotificationFilterTimerId);
	oCommon.sMassNotificationFilterTimerId = UCF_JsUtil.delayedCall(iDelay, UCF_JsUtil, "timedMassNotificationFilter", [oCommon, oCallInstance, sCallMethod, aCallParameters]);
};
UCF_JsUtil.resetMassNotificationFilter = function(oCommon){
	if(oCommon) {
		if(oCommon.sMassNotificationFilterTimerId) UCF_JsUtil.clearDelayedCall(oCommon.sMassNotificationFilterTimerId);
		if("sMassNotificationFilterTimerId" in oCommon) delete oCommon.sMassNotificationFilterTimerId;
	}
};
UCF_JsUtil.timedMassNotificationFilter = function(oCommon, oCallInstance, sCallMethod, aCallParameters){
	UCF_JsUtil.resetMassNotificationFilter(oCommon);
	oCallInstance[sCallMethod].apply(oCallInstance, aCallParameters? aCallParameters: []);
};
UCF_JsUtil.iGetTimeStamp = function() { 
	return new Date().getTime(); 
};
UCF_JsUtil.sGetUID = function() { 
	return "id" + this.iGetTimeStamp() + this.iIdCounter++; 
};
UCF_JsUtil.sGetResolvedUrl = function(sUrl, sBaseUrl) { 
	
	var rHttpUrl = /^(https?:\/\/[a-zA-Z0-9.-]+(:[0-9]+)?)(\/([^\/?]+\/)*)?([^\/?]*)?(\?.*)?$/;
	
	
	if (rHttpUrl.test(sUrl)) return sUrl;
	
	var bIsAbsolute = rHttpUrl.test(sBaseUrl);
	_assert(bIsAbsolute);
	var sBaseHost = RegExp.$1,
		sBasePath = RegExp.$3;
		
	
	if (sUrl.charAt(0) == "/") return sBaseHost + sUrl;
	
	var sResolvedUrl = sBaseHost + sBasePath + sUrl,
		rSelfRef = /(\/\.\/)/,
		rParentRef = /(\/[^\/]+\/\.\.\/)/;
	while (rSelfRef.test(sResolvedUrl)) sResolvedUrl = sResolvedUrl.replace(RegExp.$1, "/");
	while (rParentRef.test(sResolvedUrl)) sResolvedUrl = sResolvedUrl.replace(RegExp.$1, "/");
		
	return sResolvedUrl;	
};
UCF_JsUtil.bInstanceOf = function(oObject, sClassName) { 
    
    
    
	var oClass = window[sClassName];
	if (!oClass) return false;
	return oObject instanceof oClass;
};
UCF_JsUtil.downloadFile = function(sUrl) { 
	var oFrameRef = document.createElement("iframe");
	oFrameRef.src = sUrl;
	oFrameRef.style.display = "none";
	document.body.appendChild(oFrameRef);
	
	var removeFunction = function() {
		try {
			document.body.removeChild(oFrameRef);
		} catch (e) {
			
		}
	};
	if (oFrameRef.readyState) {
		oFrameRef.onreadystatechange = function() {
			if (oFrameRef.readyState == "interactive") {
				oFrameRef.onreadystatechange = null;
				setTimeout(removeFunction, 200);
			}
		};
	} else {
		oFrameRef.onload = function() {
			oFrameRef.onload = null;
			setTimeout(removeFunction, 200);
		};
	}
};
UCF_JsUtil.sendUnloadRequest = function(url) {
	if (this.bIsSameHost(url)) {
		if (window.XMLHttpRequest) {
			req = new XMLHttpRequest();
			
			try {
				req.open("GET", url, false);
				req.send(null);
				return;
			} catch (ex){} 
		}
		var xml = document.createElement("xml");
		document.body.appendChild(xml);
		if (xml.XMLDocument) {
			xml.XMLDocument.async = false;
			xml.XMLDocument.load(url);
			return;
		}
	
	}
	
	var termHtml, termUrl, windowName,
		windowOptions = "width=100,height=100,left=2000,top=2000,status=no,toolbar=no";
	
	termHtml = "<iframe src=\"";
	termHtml += url.replace(/&/g, "&amp;").replace(/\"/g, "&quot;");
	termHtml += "\" onload=\"window.close()\"></iframe>";
	
	termUrl = "javascript:\"" + termHtml.replace(/\\/g, "\\\\").replace(/\"/g, "\\\"") + "\"";
	
	windowName = "terminator" + new Date().valueOf();
	
	window.open(termUrl, windowName, windowOptions);
};
UCF_JsUtil.bIsSameHost = function(url) {
	
	
	
	
};
UCF_JsUtil.oClone = function(obj, bRecursive) { 
	if(obj == null || typeof(obj) != 'object')
        return obj;
	var oClone = new Object();
	
	try
	{
		if (obj.constructor)
   			oClone = new obj.constructor();
	}
	catch(e)
    	{};
   		
    for(var key in obj)
    {
    	try
    	{
    		var oCopy = null;
    		if (bRecursive) 
    			oCopy = this.oClone(obj[key],bRecursive);
    		else
    			oCopy = obj[key];
    		
    		oClone[key] = oCopy;
    	}
    	catch(e)
    	{};
    }
    return oClone;
};
 
UCF_JsUtil.bCanActiveX = function() {
	
	
	if(UCF_UserAgent.bIsIE() && UCF_UserAgent.bIsStandardsMode() && parseInt(document.documentMode) >= 11) {
		
		
		
		return true;
		
		
		
		try {
			new ActiveXObject("Microsoft.XMLDOM");
			return true;
		} catch (e) {
			return false;
		}
		
	} else {
		return window.ActiveXObject? true: false;
	}
};
 
UCF_JsUtil.oParseXMLDocument = function(sXMLText) {
	var oXMLDocument = null;
	
	if (window.DOMParser) {
		var oParser=new DOMParser();
		oXMLDocument=oParser.parseFromString(sXMLText, "text/xml");	
	} else if (UCF_JsUtil.bCanActiveX()) {
		
		var oXMLRef = document.getElementById("UCF_XML");
		if (oXMLRef) {
			oXMLDocument = oXMLRef.XMLDocument;
		} else {
			oXMLDocument = new ActiveXObject("Microsoft.XMLDOM");
		}
		oXMLDocument.async = false;
		oXMLDocument.loadXML(sXMLText);
	}	
	return oXMLDocument;
};
 
UCF_JsUtil.sSerializeXMLDocument = function(oXMLDocument) {
	var sXMLString = "";
	
	if (window.XMLSerializer) {
		var serializer = new XMLSerializer();
		sXMLString = serializer.serializeToString(oXMLDocument);
	} else if (UCF_JsUtil.bCanActiveX()) {
		sXMLString = oXMLDocument.xml;
	}
	return sXMLString;
};
 
UCF_JsUtil.removeComments = function(oElement) {
	var aChildNodes = oElement.childNodes,
		oChildNode;
	for (var i = 0; i < aChildNodes.length; i++) {
		oChildNode = aChildNodes[i];
		switch (oChildNode.nodeType) {
			case 1: 
				this.removeComments(oChildNode);
				break;
			case 8: 
				oElement.removeChild(oChildNode);
				i--;
				break;
		}
	} 	
};
 
UCF_JsUtil.sXmlEscape = function(sText) {
	sText = sText.replace(/\&/g, "&amp;");
	sText = sText.replace(/\</g, "&lt;");
	sText = sText.replace(/\"/g, "&quot;");
	return sText;
};
 
UCF_JsUtil.mDecodeURIParameters = function(sParameters) {
	var aParameters = sParameters.split("&"),
		mParameters = {},
		aParameter,
		sName = "",
		sValue = "";
	for (var i = 0; i < aParameters.length; i++) {
		aParameter = aParameters[i].split("=");
		sName = decodeURIComponent(aParameter[0]);
		sValue = (aParameter.length == 2 ? decodeURIComponent(aParameter[1]) : "");
		if (mParameters[sName] == null) {
			mParameters[sName] = sValue;
		} else {
			if (typeof mParameters[sName] == "string") {
				mParameters[sName] = [mParameters[sName]];
			}
			mParameters[sName].push(sValue);
		}
	}
	return mParameters;	
};
 
UCF_JsUtil.sExtractFunctionName = function(oFunction) {
	_assert(typeof(oFunction) == "function");
	
	var sText = oFunction.toString(),
		sName = sText.substr(9, sText.indexOf("(") - 9);
	
	return sName;
};
UCF_JsUtil.sTrim = function (str, chars) {
	return UCF_JsUtil.ltrim(UCF_JsUtil.rtrim(str, chars), chars);
};
UCF_JsUtil.ltrim = function(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
};
UCF_JsUtil.rtrim = function(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
};
UCF_JsUtil.bIsEmpty = function (oObject) {		
	if (typeof(oObject) == "object") {
		for (var oP in oObject) {
			return false;
		}
		return true;
	}
	_trace(ERROR,"The type " + typeof(oObject) + " is not supported.");
};
UCF_JsUtil.aIntersection = function(aArray1, aArray2){
	var aIntersection = [];
	for (var x = 0, len1 = aArray1.length; x < len1; x++){
		var oItem1 = aArray1[x];
		for (var y = 0, len2 = aArray2.length; y < len2; y++){
			var oItem2 = aArray2[y];
			if (oItem1 === oItem2) aIntersection.push(oItem1);
		}
	}
	return aIntersection;
};
UCF_JsUtil.bIsArray = function(a) {
	return a != null && ((typeof(a) == "object" && typeof(a.length) == "number") || typeof(a) == "array");
};
UCF_JsUtil.bEqual = function(a, b, maxDepth, depth) {
	if (!depth) depth = 0;
	if (!maxDepth) maxDepth = 10;
	if (depth > maxDepth) return false;
	if (a === b) return true;
	if (UCF_JsUtil.bIsArray(a) && UCF_JsUtil.bIsArray(b)) {
		if (a.length != b.length) { return false; }
		for (var i = 0; i < a.length; i++) {
			if (!UCF_JsUtil.bEqual(a[i], b[i], maxDepth, depth + 1)) { 
					return false;
			}
		}
		return true;
	}
	if (typeof a == "object" && typeof b == "object") {
		if (!a || !b) {
			return false;
		}
		if (a.constructor != b.constructor) {
			return false;
		}
		if (a instanceof Date) {
			return a.valueOf() == b.valueOf();
		}
		for (var i in a) {
			if (!UCF_JsUtil.bEqual(a[i], b[i], maxDepth, depth + 1)) { 
				return false;
			}
		}
		for (var i in b) {
			if (a[i] === undefined) { 
				return false;
			}
		}
		return true;
	}
	return false;
};
UCF_JsUtil.bIsPlainObject = function(o) {
	
	
	
	
	var getType = function( o ) {
		return o == null ?
			String( o ) :  "object";
	};
	
	if ( !o || getType(o) !== "object" ) {
		return false;
	}
	try {
		
		if ( o.constructor &&
			!Object.prototype.hasOwnProperty.call(o, "constructor") &&
			!Object.prototype.hasOwnProperty.call(o.constructor.prototype, "isPrototypeOf") ) {
			return false;
		}
	} catch ( e ) {
		
		return false;
	}
	
	
	var key;
	for ( key in o ) {}
	return key === undefined || Object.prototype.hasOwnProperty.call( o, key );
};
UCF_JsUtil.oMergeObjects = function(oOriginal, oMerge) {
	if (UCF_JsUtil.bIsPlainObject(oMerge)) {
		for (var n in oMerge) {
			if (!oOriginal[n] || (!UCF_JsUtil.bIsPlainObject(oMerge[n]) && !UCF_JsUtil.bIsArray(oMerge[n]))) {
				if (oMerge[n] === null) {
					delete oOriginal[n];
				} else {
					oOriginal[n] = oMerge[n];
				}
			} else {
				if (!UCF_JsUtil.bIsPlainObject(oMerge[n]) && !UCF_JsUtil.bIsArray(oMerge[n])) {
					if (oMerge[n] === null) {
						delete oOriginal[n];
					} else {
						oOriginal[n] = oMerge[n];
					}
				} else {
					oOriginal[n] = UCF_JsUtil.oMergeObjects(oOriginal[n],oMerge[n]);
				}
			}
		}
	} else if (UCF_JsUtil.bIsArray(oMerge)) {
		
		var i;
		for (i=0;i<oOriginal.length;i++) {
			if (oMerge[i]) {
				oOriginal[i] = UCF_JsUtil.oMergeObjects(oOriginal[i],oMerge[i]);
			} else if (oMerge[i] === null) {
				
				oOriginal[i] = null; 
			}
		}
		for (;i<oMerge.length;i++) {
			oOriginal[i] = oMerge[i];
		}
		i=0;
		while (true) {
			if (oOriginal[i]===null) {
				oOriginal.splice(i,1);
				if (i==oOriginal.length) break;
				continue;
			} 
			i++;
			if (i==oOriginal.length) break;
		}
	} 
	return oOriginal;
};
UCF_JsUtil.cloneJSON = function (oData) {
	return UCF_JsUtil.oParseJSON(  UCF_JsUtil.sStringfyJSON(oData) ) 
};
UCF_JsUtil.oParseJSON = function( sData ) {
	if ( typeof sData !== "string" || !sData ) {
		return null;
	}
	
	sData = UCF_StringUtil.sTrim( sData );
	
	if ( window.JSON && window.JSON.parse ) {
		return window.JSON.parse( sData );
	}
	var rvalidchars = /^[\],:{}\s]*$/,
		rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
		rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
		rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	if ( rvalidchars.test( sData.replace( rvalidescape, "@" )
		.replace( rvalidtokens, "]" )
		.replace( rvalidbraces, "")) ) {
		return ( new Function( "return " + sData ) )();
	}
	_trace(ERROR,"No valid JSON " + sData );
	return null
};
UCF_JsUtil.sStringifyJSON = function( oData, sFormat ) {
	
	if ( typeof oData !== "object" || !oData ) {
		return "";
	}
	var format = null;
	if (sFormat)
		format = function(sJsonString,bHTML) {
			    var aResult = [],
			    	s = sJsonString,
			    	iPos = 0,
			    	iLength = s.length,
			    	sTab = bHTML ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "\t",
			    	sNewLine = bHTML ? "<br>" : "\n",
			    	bInString = false;
			    for (var i=0; i<iLength; i++) {
			        var sChar = s.charAt(i);
			        if (sChar == "\"" && s.charAt(i-1) != "\\") {
			        	bInString =!bInString;
			        	aResult.push(sChar);
			        	continue;
				    }
			        if (bInString) {
			        	aResult.push(sChar);
				        continue;
			        }
			        if (sChar == "}" || sChar == "]") {
			        	aResult.push(sNewLine);
			            iPos = iPos - 1;
			            aResult.push((new Array(iPos)).join(sTab));
			        }
			        aResult.push(sChar);
			        if (sChar == "{" || sChar == "[" || sChar == ",") {
			        	aResult.push(sNewLine);
			            if (sChar == "{" || sChar == "[") {
			            	iPos = iPos + 1;
			            }
			            aResult.push((new Array(iPos)).join(sTab));
			        }
			    }
			    return aResult.join("");
	};
	
	if ( window.JSON && window.JSON.stringify ) {
		var sString = window.JSON.stringify( oData, null);
		if (sFormat) {
			sString = format(sString,sFormat === "HTML");
		}
		return sString;
	}
	
	var serialize = function (oObject,aBuffer) {
		if (oObject == null ) return null;
		switch (typeof(oObject)) {
			case "object":
				if (oObject instanceof Array) {
					aBuffer.push("[");
					for (var i = 0; i < oObject.length; i++) {
						if (i > 0) aBuffer.push(", ");
						serialize(oObject[i], aBuffer);
					}
					aBuffer.push("]");
				}
				else {
					aBuffer.push("{");
					var bFirst = true;
					for (var i in oObject) {
						
						if (typeof(oObject[i]) == "undefined" || typeof(oObject[i]) == "function")
							continue;
						if (!bFirst) aBuffer.push(",");
						else bFirst = false;
						serialize(i, aBuffer);
						aBuffer.push(":");
						serialize(oObject[i], aBuffer);
					}
					aBuffer.push("}");
				}
				break;
			case "string":
				aBuffer.push("\"");
				aBuffer.push(oObject.replace(/\\/g, "\\\\").replace(/"/g, "\\\""));
				aBuffer.push("\"");
				break;
			default:
				aBuffer.push(oObject);
		}
	},
	aBuffer = [];
	serialize(oData,aBuffer);
	var sString = aBuffer.join("");
	if (format) {
		sString = format(sString,sFormat);
	}
	return sString;
};
UCF_JsUtil.iObjectIndexInArray = function(o, a) {
	var len;
	var i=0;
	if ( a ) {
		if ( Array.prototype.indexOf ) {
			return Array.prototype.indexOf.call( a, o, i );
		}
		len = a.length;
		i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
		for ( ; i < len; i++ ) {
			
			if ( i in a && a[ i ] === o ) {
				return i;
			}
		}
	}
	return -1;
};
UCF_JsUtil.each = function(object, callback, args ) {
		if (!object) return;
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || typeof(object) == "function";
		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}
		
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}
		return object;
};
UCF_JsUtil.bIsEmptyObject = function(o) {
	for ( var name in o ) {
		return false;
	}
	return true;
};
UCF_JsUtil.map = function ( elems, callback ) {
	var value, key, ret = [],
		i = 0,
		length = elems.length,
		isArray = length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || UCF_JsUtil.bIsArray( elems ) ) ;
		
	if ( isArray ) {
		for ( ; i < length; i++ ) {
			value = callback( elems[ i ], i, arg );
		
			if ( value != null ) {
				ret[ ret.length ] = value;
			}
		}
	} else {
		for ( key in elems ) {
			value = callback( elems[ key ], key, arg );
		
			if ( value != null ) {
				ret[ ret.length ] = value;
			}
		}
	}
	return ret.concat.apply( [], ret );
};
UCF_JsUtil.bIsFunction = function (oFunc) {
	return (oFunc && (typeof (oFunc) == "function" || (typeof (oFunc) == "object" && oFunc.toString && oFunc.toString().indexOf("function") == 0)));
};
UCF_JsUtil.arrayFromObject = function (oObject) {
	var aArray = [];
	for (var n in oObject) {
		var i = parseInt(n);
		if (!isNaN(i)) {
			aArray[i] = oObject[n];
		}
	}
	return aArray;
};
UCF_JsUtil.eActiveComponents = {
	WORD: "word",
	EXCEL: "excel",
	FLASH: "flash",
	ACROBAT: "acrobat",
	SILVERLIGHT: "silverlight",
	JAVA: "java(tm)"
};
UCF_JsUtil.mActiveComponentToActiveXMap = {
	"word": "Word.Application",
	"excel": "Excel.Application",
	"flash": "ShockwaveFlash.ShockwaveFlash.1",
	"acrobat": "AcroPDF.PDF",
	"silverlight": "AgControl.AgControl",
	"java(tm)": "JavaWebStart.isInstalled"
};
UCF_JsUtil.bIsActiveComponentEnabled = function(eActiveComponentKey) {	 
	if (UCF_JsUtil.bCanActiveX()) {
		try {
			new ActiveXObject(this.mActiveComponentToActiveXMap[eActiveComponentKey]);
			return true;
		} catch(e) {};
	} else {
		for (var i = 0; navigator.plugins[i]; i++) {
			if (navigator.plugins[i].name.toLowerCase().indexOf(eActiveComponentKey) > -1) return true;
		}
	}
	
	return false;
};
UCF_JsUtil.sGetInstalledJavaVersion = function() {	 
	if (UCF_JsUtil.bCanActiveX()) {
		try {
			new ActiveXObject("JavaWebStart.isInstalled");
		} catch(e) {
			return "NOT_INSTALLED";
		};
		
		for(var iVersion=9; iVersion>=4; iVersion--) {
			try {
				new ActiveXObject("JavaWebStart.isInstalled.1." + iVersion + ".0.0");
				return "1." + iVersion;
			} catch(e) {};
		}
		return "UNKNOWN";
	} else {
		for (var i = 0; navigator.plugins[i]; i++) {
			var sName = navigator.plugins[i].name.toLowerCase();
			if(/java\(tm\)/.test(sName)) {
				var aMatch = sName.match(/.*\s(\d)\s/); 
				if(aMatch && aMatch.length > 1) return "1." + aMatch[1];
				aMatch = sName.match(/.*\s(\d\.\d+)/); 
				if(aMatch && aMatch.length > 1) return aMatch[1];
				return "UNKNOWN";
			}
		}
		
		return "NOT_INSTALLED";
	}
};

//** DomUtil.ie5 **

function UCF_DomUtil() {
	
	this.oTopWindow = null;
};
UCF_DomUtil.bIsRTL = document.documentElement.dir == "rtl";
UCF_DomUtil.oActiveElement = null;
UCF_DomUtil.$ = function(sId,oWindow) {
	if (!oWindow) oWindow = window;
	var o = oWindow.document.getElementById(sId);
	
	if(o){
	   if (o.id == sId) return o;
	   if (o.name == sId && oWindow.document.all) return oWindow.document.all[sId];
	}
    return null;
};
UCF_DomUtil.attachEvent = function(oDomRef, sName, fHandler, bUseCapture) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(sName != null);
	_assert(typeof(sName) == "string");
	_assert(fHandler != null);
	_assert(typeof(fHandler) == "function");
	if (sName == "dragover" || sName == "dragend" || sName == "drop") {
		if (oDomRef.addEventListener) {
			oDomRef.addEventListener(sName, fHandler, bUseCapture);
		}
		else if (oDomRef.attachEvent) {
			oDomRef.attachEvent("on" + sName, fHandler);
		}
		return;
	}
	if (oDomRef.attachEvent) {
		oDomRef.attachEvent("on" + sName, fHandler);
	}
	else if (oDomRef.addEventListener) {
		oDomRef.addEventListener(sName, fHandler, bUseCapture);
	}
	
};
UCF_DomUtil.detachEvent = function(oDomRef, sName, fHandler, bUseCapture) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(sName != null);
	_assert(typeof(sName) == "string");
	_assert(fHandler != null);
	_assert(typeof(fHandler) == "function");
	
	if (sName == "dragover" || sName == "dragend" || sName == "drop") {
		if (oDomRef.removeEventListener) {
			oDomRef.removeEventListener(sName, fHandler, bUseCapture);
		}
		else if (oDomRef.detachEvent) {
			oDomRef.detachEvent("on" + sName, fHandler);
		}
		return;
	}
	
	if (oDomRef.detachEvent) {
		oDomRef.detachEvent("on" + sName, fHandler);
	}
	else if (oDomRef.removeEventListener) {
		oDomRef.removeEventListener(sName, fHandler, bUseCapture);
	}
	
};
UCF_DomUtil.oGetParentByTagName = function(oDomRef,sTagName) {
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sTagName) == "string");
	while (oDomRef && oDomRef.tagName!="BODY") {
		if (oDomRef.tagName == sTagName) {
			return oDomRef;
		}
		oDomRef = oDomRef.parentNode;
	}
	return null;
};
UCF_DomUtil.oGetParentByAttribute = function(oDomRef, sAttribute, sValue) {
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sAttribute) == "string");
	
	while (oDomRef && oDomRef.tagName!="BODY") {
		
		if (!oDomRef.getAttribute)
			return null;
		
		if ((oDomRef.getAttribute(sAttribute) && 
				!sValue) ||
				(oDomRef.getAttribute(sAttribute) && 
				oDomRef.getAttribute(sAttribute) == sValue)) {
			return oDomRef;
		}
		oDomRef = oDomRef.parentNode;
	}
	return null;
};
UCF_DomUtil.setClass = function(oDomRef, sClassName) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sClassName) == "string");
	
	oDomRef.className = sClassName;
};
UCF_DomUtil.sGetClass = function(oDomRef) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	
	return oDomRef.className;
};
UCF_DomUtil.addClass = function(oDomRef, sClassName) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sClassName) == "string");
	
	var sCurrentClass = oDomRef.className;
	if (sCurrentClass) {
		sClassName = sCurrentClass + " " + sClassName;
	}
	oDomRef.className = sClassName;
};
UCF_DomUtil.removeClass = function(oDomRef, sRemoveClassName) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sRemoveClassName) == "string");
	
	if (sRemoveClassName == "" || sRemoveClassName == " ") return;
	var sClassName = oDomRef.className;
	if (!sClassName)
		return;
	
	var aClassNames = oDomRef.className.split(" ");
	
	for (var x = 0; x < aClassNames.length; x++){
		var sName = aClassNames[x];
		if (sName == sRemoveClassName || sName == ""){
			aClassNames.splice(x,1);
			x--;
		}
	}
	
	oDomRef.className = aClassNames.join(" ");
};
UCF_DomUtil.bHasClass = function(oDomRef, sClassName) {
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sClassName) == "string");
	
	var oReg = new RegExp("(^| )" + sClassName + "( |$)"),
		sClass = UCF_DomUtil.sGetClass(oDomRef);
	return sClass.match(oReg);
};
UCF_DomUtil.replaceClass = function(oDomRef, sReplaceClassName, sClassName) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sReplaceClassName) == "string");
	_assert(typeof(sClassName) == "string");
	
	if (sReplaceClassName == "" || sReplaceClassName == " ") return;
	var sCurrentClass = oDomRef.className;
	if (sCurrentClass) {
		var oRegExp = new RegExp("(^| )" + sReplaceClassName + "( |$)","g");
		while (oRegExp.test(sCurrentClass)) {
			sCurrentClass = sCurrentClass.replace(oRegExp, "$1" + sClassName + "$2");
			oRegExp.test("");
		}
		oDomRef.className = sCurrentClass;
	}
};
UCF_DomUtil.setBackgroundColor = function(oDomRef, sClassName, oCache){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sClassName) == "string");
	
	var bCanRuntimeStyles = oDomRef.runtimeStyle? true: false;
	
	if(oDomRef.sFastBgAppliedBy == sClassName || oDomRef.sStdBgAppliedBy == sClassName)
		return;
		
	
	if(oDomRef.sFastBgAppliedBy || oDomRef.sStdBgAppliedBy)
		UCF_DomUtil.resetBackgroundColor(oDomRef, oDomRef.sFastBgAppliedBy? oDomRef.sFastBgAppliedBy: oDomRef.sStdBgAppliedBy, oCache);
	
	
	if(bCanRuntimeStyles && oCache && oCache[sClassName]) {
				
		oDomRef.sFastBgAppliedBy = sClassName;
		
		oDomRef.sFastBgMode="STYLE"; 
		oDomRef.sFastBgTextCache = oDomRef.style.backgroundColor;
		oDomRef.style.backgroundColor = oCache[sClassName];
	
		if(oDomRef.currentStyle.backgroundColor != oCache[sClassName]) {
			
			oDomRef.style.backgroundColor = oDomRef.sFastBgTextCache;
			
			oDomRef.sFastBgMode="STYLETEXT"; 
			oDomRef.sFastBgTextCache = oDomRef.runtimeStyle.cssText;
			oDomRef.runtimeStyle.cssText = "background-color:"+ oCache[sClassName] + " !important;" + oDomRef.runtimeStyle.cssText;
		}
	}	else {
		var sBgBefore = (bCanRuntimeStyles && oCache)? oDomRef.currentStyle.backgroundColor: null;
		
		UCF_DomUtil.addClass(oDomRef, sClassName);
		oDomRef.sStdBgAppliedBy = sClassName;
		if(bCanRuntimeStyles && oCache && oDomRef.currentStyle.backgroundColor !== sBgBefore) {
			oCache[sClassName] = oDomRef.currentStyle.backgroundColor;
		}
	}
};
UCF_DomUtil.resetBackgroundColor = function(oDomRef, sClassName, oCache){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sClassName) == "string");
	if(oDomRef.sFastBgAppliedBy && sClassName == oDomRef.sFastBgAppliedBy) {
		if(oDomRef.sFastBgMode=="STYLE") {
			oDomRef.style.backgroundColor = oDomRef.sFastBgTextCache;
		} else if(oDomRef.sFastBgMode=="STYLETEXT") {
			oDomRef.runtimeStyle.cssText = oDomRef.sFastBgTextCache;
		}
		
		oDomRef.sFastBgAppliedBy = "";
		oDomRef.sFastBgTextCache = "";
		oDomRef.sFastBgMode = "";
	} else if(oDomRef.sStdBgAppliedBy && oDomRef.className.indexOf(sClassName) != -1){
		UCF_DomUtil.removeClass(oDomRef, sClassName);
		oDomRef.sStdBgAppliedBy = "";
	}
};
UCF_DomUtil.oGetDocument = function(oDomRef) {
	if (oDomRef) {
		return oDomRef.ownerDocument;
	}
	else {
		return window.document;
	}
};
UCF_DomUtil.oGetElementFromPoint = function(iX, iY) {
	_assert(typeof(iX) == "number");
	_assert(typeof(iY) == "number");
	
	if (this.oGetDocument().elementFromPoint) {
		return this.oGetDocument().elementFromPoint(iX,iY);
	}
	else {
		return null;
	}
};
UCF_DomUtil.oGetScrollOffset = function(oWindow){
	if (!oWindow) oWindow = window;
	var x,y;
	var doc = oWindow.document;
	if (oWindow.pageYOffset) 
	{
		x = oWindow.pageXOffset;
		y = oWindow.pageYOffset;
	}
	else if (doc.documentElement && (doc.documentElement.scrollTop || doc.documentElement.scrollLeft) )
		
	{
		x = doc.documentElement.scrollLeft;
		y = doc.documentElement.scrollTop;
	}
	else if (doc.body) 
	{
		x = doc.body.scrollLeft;
		y = doc.body.scrollTop;
	}
	
	return {x:x,y:y};
	
};
UCF_DomUtil.oGetInnerSize = function(oWindow){
	return {width:UCF_DomUtil.iClientWidth(oWindow),
		height:UCF_DomUtil.iClientHeight(oWindow)};
};
UCF_DomUtil.setTabIndex = function(oDomRef, iValue){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
 	oDomRef.tabIndex = iValue;
 	oDomRef.setAttribute("ti", iValue);
};
UCF_DomUtil.resetTabIndex = function(oDomRef){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
 	this.setTabIndex(oDomRef, -1);
};
UCF_DomUtil.bHasTabIndex = function(oDomRef){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	var iTabIndex = this.iGetTabIndex(oDomRef);
 	return !isNaN(iTabIndex) && iTabIndex >= 0;
};
UCF_DomUtil.iGetTabIndex = function(oDomRef){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
 	return parseInt(oDomRef.getAttribute("ti"));
};
UCF_DomUtil.setAccessKey = function(oDomRef, sValue){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	if (sValue != "d" && sValue != "D")
 		oDomRef.setAttribute("accessKey", sValue);
};
UCF_DomUtil.focusDomElement = function(oDomRef){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
 	try {
		oDomRef.focus();
	} catch (oException) {
		_trace( ERROR, oException + " ");
	}
};
UCF_DomUtil.moveFocusDomElement = function(oDomRef, bDirect){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	if(bDirect) {
		try {
			oDomRef.focus();
		} catch (oException) {
			_trace( ERROR, oException + " ");
		}		
	} else UCF_JsUtil.delayedCall(0,this,"moveFocusDomElement", [oDomRef, true]);	
};
UCF_DomUtil.bDomElementFocused = function(oDomRef){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	
 
 
 
 
 
 
 
 
 
 	try {
		oDomRef.focus();
		return true;
	} catch (oException) {
		_trace( ERROR, oException + " ");
		return false;
	}
};
UCF_DomUtil.bFocusDomElement = function(oDomRef){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	 
 	try {
		oDomRef.focus();
	} catch (oException) {
		_trace( ERROR, oException + " ");
		return false;
	}
	if (document.activeElement && document.activeElement != oDomRef) return false;
	
	return true;
};
UCF_DomUtil.refocusDomElement = function(oDomRef){
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
 
 	try {
 		oDomRef.blur();
		oDomRef.focus();
	} catch (oException) {
		_trace( ERROR, oException + " ");
	}
};
UCF_DomUtil.oGetActiveElement = function() {
	var o = null;
	try  { 
		if( document.activeElement || document.activeElement === null)
			o = document.activeElement;
		else
			o = UCF_DomUtil.oActiveElement;
			
	} catch (exception) {
	  o = UCF_DomUtil.oActiveElement;
	}
	
	if(UCF_UserAgent.bIsFirefox()) {
		 
		 
		 
		try  {
			if(o && (o == document || o.tagName)) return o;
			else return null;
		} catch(ex) {
			return null;
		}
	}
	
	return o;
};
UCF_DomUtil.setActiveElement = function(oDomRef) {
	_assert(oDomRef != null);
	UCF_DomUtil.oActiveElement = oDomRef;
};
UCF_DomUtil.purgeActiveElement = function() {
	if(UCF_DomUtil.oActiveElement) {
		
		try  { 
			if( document.activeElement) {
				UCF_DomUtil.oActiveElement = document.activeElement;
				return;
			}
		} catch (exception) {}
		
		
		
		if(!this.bIsInActiveDom(UCF_DomUtil.oActiveElement)) {
			if(UCF_DomUtil.oActiveElement.getAttribute("id")) {
				
				UCF_DomUtil.oActiveElement = this.$(UCF_DomUtil.oActiveElement.getAttribute("id"));
			}	else {
				
				UCF_DomUtil.oActiveElement = null;
			}
		}
	}
};
UCF_DomUtil.bIsInActiveDom = function(oDomRef) {
	_assert(oDomRef != null);
	var oCurrDomRef = oDomRef;
	while(oCurrDomRef) {
		if(oCurrDomRef == document) return true;
		oCurrDomRef = oCurrDomRef.parentNode;
	}
	return false;
};
UCF_DomUtil.bContains = function(oDomRefContainer, oDomRefChild) {
	
	if (!oDomRefChild || !oDomRefContainer) return false;
	
	
	if (oDomRefContainer.contains) {
		return oDomRefContainer.contains(oDomRefChild);
	}
	
	if(oDomRefContainer == oDomRefChild) return true;
	
	while(oDomRefChild != null) {
		if(oDomRefChild == oDomRefContainer) return true;
		oDomRefChild = oDomRefChild.parentNode;
	}
	
	return false;
};
UCF_DomUtil.oGetFirstElement = function( oDomRefNode ) {
	
	_assert(typeof(oDomRefNode) == "object");
	_assert(oDomRefNode != null);
	
	
	var ELEMENT_NODE = 1;
	if ( oDomRefNode.firstChild && oDomRefNode.firstChild.nodeType == ELEMENT_NODE ) {
		return oDomRefNode.firstChild;
	} else {
		if (!oDomRefNode.childNodes) return null;
		for(var i = 0; i < oDomRefNode.childNodes.length; i++) {
			if(oDomRefNode.childNodes[i].nodeType == ELEMENT_NODE) {
				return oDomRefNode.childNodes[i];
			}
		}
	}
	return null;
};
UCF_DomUtil.oGetFirstChild = function(oDomRefNode) {
	
	_assert(typeof(oDomRefNode) == "object");
	_assert(oDomRefNode != null);
	
	var oChildren = oDomRefNode.childNodes; 
	for (var i = 0; i < oDomRefNode.childNodes.length; i++) {
		var c = oChildren[i];
		if (c.tagName != "!" && c.nodeName != "#comment") return c;
	}
	return null;
};
UCF_DomUtil.oGetLastChild = function(oDomRefNode) {
	
	_assert(typeof(oDomRefNode) == "object");
	_assert(oDomRefNode != null);
	
	var oChildren = oDomRefNode.childNodes; 
	for (var i = oChildren.length-1; i >=0 ; i--) {
		var c = oChildren[i];
		if (c.tagName != "!" && c.nodeName != "#comment") return c;
	}
	return null;
};
UCF_DomUtil.oGetFirstChildByAttribute = function(oDomRefNode, sAttribute, sValue) {
	
	_assert(typeof(oDomRefNode) == "object");
	_assert(oDomRefNode != null);
	_assert(typeof(sAttribute) == "string");
	
	if (!oDomRefNode) return null;
	var oChildren = oDomRefNode.childNodes; 
	for (var i = 0; i < oChildren.length; i++) {
		var c = oChildren[i];
		if (c.nodeType == 1) {
			if ((!sValue && c.getAttribute(sAttribute)) ||  (c.getAttribute(sAttribute) === sValue)) {
				return c;
			} else {
				return this.oGetFirstChildByAttribute(c, sAttribute, sValue);
			} 
		}
	}
	
	return null;
};
UCF_DomUtil.oGetLastChildByAttribute = function(oDomRefNode, sAttribute, sValue) {
	
	_assert(typeof(oDomRefNode) == "object");
	_assert(oDomRefNode != null);
	_assert(typeof(sAttribute) != "string");
	if (!oDomRefNode) return null;
	var oChildren = oDomRefNode.childNodes; 
	for (var i = oChildren.length-1; i >= 0; i--) {
		var c = oChildren[i];
		if (c.nodeType == 1) {
			if ((!sValue && c.getAttribute(sAttribute)) ||  (c.getAttribute(sAttribute) === sValue)) {
				return c;
			} else {
				return UCF_DomUtil.oGetLastChildByAttribute(c, sAttribute, sValue);
			} 
		}
	}
	
	return null;
};
UCF_DomUtil.oGetObjectRect = function(oDomRef, oContainerRef) {
	_assert(typeof(oDomRef) == "object");
	_assert(oDomRef != null);
	
	var oOffsetParent = oDomRef.offsetParent,
		bAbort = oOffsetParent? false: true,
		oRect = {
				top: oDomRef.offsetTop, 
				left: oDomRef.offsetLeft, 
				width:oDomRef.offsetWidth, 
				height:oDomRef.offsetHeight
			};
	
	
	
	if(oContainerRef) {
		
		
		if (oOffsetParent) {
			
			if(oOffsetParent == oContainerRef) {
				
				bAbort = true;
			} else if(oOffsetParent.firstChild == oContainerRef) { 
				
				
				oRect.top = oDomRef.offsetTop - oContainerRef.offsetTop;
				oRect.left = oDomRef.offsetLeft - oContainerRef.offsetLeft; 
				bAbort = true;
			};
			
			
			if(bAbort && UCF_DomUtil.bIsRTL && this.bCanScroll(oContainerRef, false) ) {
				oRect.left = this.iCalculateRtlOffsetLeft(oDomRef, oContainerRef) + this.iGetScrollLeft(oContainerRef) - this.iGetVerticalScollbarOffset(oContainerRef);
			}
		}
			
		
		
		if(oDomRef.tagName == "BODY" && oContainerRef.tagName != "BODY") {
			
			var oContainerRect = this.oGetObjectRect(oContainerRef);
			oRect.top = -oContainerRect.top + oContainerRef.scrollTop;
			oRect.left = -oContainerRect.left + this.iGetScrollLeft(oContainerRef); 
			
			
			if(UCF_DomUtil.bIsRTL && this.bCanScroll(oContainerRef, false)) {
				
				oRect.left -= this.iGetVerticalScollbarOffset(oContainerRef);
				
				
				if(UCF_UserAgent.bIsIE() && UCF_UserAgent.bIsStandardsMode()) {
					oRect.left += oContainerRef.scrollLeft;
				}
			}
			
			
			bAbort = true;
		}
	}
	
	
	if( !bAbort ) {
		
		
		var oParentRect = this.oGetObjectRect(oOffsetParent, oContainerRef),
			bHandled = false, oCurDomRef = null;
		
		oRect.top = oParentRect.top + oDomRef.offsetTop;
		oRect.left = oParentRect.left + oDomRef.offsetLeft; 
		
		
		if( (oDomRef.clientTop || oDomRef.clientLeft) && (oDomRef.tagName == "DIV" || oDomRef.tagName == "TD")) {
			if(oDomRef.clientTop) oRect.top += oDomRef.clientTop;
			if(!UCF_DomUtil.bIsRTL && oDomRef.clientLeft) oRect.left += oDomRef.clientLeft;
		}
		
		
		oCurDomRef = oDomRef;
		do {
			oCurDomRef = oCurDomRef.parentNode;
			if (oCurDomRef == document.body) continue;
			oRect.top -= oCurDomRef.scrollTop;
			oRect.left -= this.iGetScrollLeft(oCurDomRef);
		} while (oCurDomRef != oOffsetParent);
		
		if(UCF_DomUtil.bIsRTL) {
			oRect.left = oParentRect.left + this.iCalculateRtlOffsetLeft(oDomRef, oOffsetParent);
		}
	}
	
	return oRect;
};
UCF_DomUtil.bCanScroll = function(oDomRef, bVertical) {
	if(bVertical)	return oDomRef.scrollTop || this.sGetCurrentStyle(oDomRef, "overflowY") != "visible";
	else return oDomRef.scrollLeft || this.sGetCurrentStyle(oDomRef, "overflowX") != "visible";
};
UCF_DomUtil.iGetScrollLeft = function(oDomRef) {
	if(UCF_DomUtil.bIsRTL && UCF_UserAgent.bIsIE() && UCF_UserAgent.bIsStandardsMode()) {
		return oDomRef.scrollWidth - oDomRef.clientWidth - oDomRef.scrollLeft;
	} else {
		return oDomRef.scrollLeft;
	}
};
UCF_DomUtil.iCalculateRtlOffsetLeft = function(oDomRef, oOffsetParent) {
	
	
	
	
	var iOffsetLeft = oDomRef.offsetLeft;
	
	if(oOffsetParent != document.body) {
		
		
		
		
		if(oDomRef.offsetLeft <= 0 && this.sGetCurrentStyle(oDomRef, "position") != "relative" && this.sGetCurrentStyle(oDomRef, "position") != "absolute") {
			
			var sTextAlign = this.sGetCurrentStyle(oOffsetParent, "textAlign"),
				iCalculationMode = 0, 
				iPaddingCorrection = 0;
			if (UCF_UserAgent.bIsWebKit()) {
				sTextAlign = sTextAlign.replace("-webkit-","");
			}
			if(!sTextAlign || sTextAlign == "right") {
				iCalculationMode = 0; 
			} else if(sTextAlign == "center") {
				iCalculationMode = 1; 
			} else if(sTextAlign == "left") {
				iCalculationMode = 2; 
			}
			
			if(this.bCanScroll(oOffsetParent, false)) {
				
				iOffsetLeft = -this.iGetScrollLeft(oOffsetParent); 
			} else {
				
				
				var iSiblingsWidth = 0;
				
				
				if(this.sGetCurrentStyle(oDomRef,"display") == "inline" || oDomRef.tagName == "TD" || oDomRef.tagName == "TH") {
					
					oCurDomRef = oDomRef;
					
					
					while(oCurDomRef) {
						if(iCalculationMode == 2) oCurDomRef = UCF_DomUtil.nextSibling(oCurDomRef);
						else oCurDomRef = UCF_DomUtil.previousSibling(oCurDomRef);
						if(oCurDomRef) iSiblingsWidth += oCurDomRef.offsetWidth;
					}
				}
				
				{
					var sPadding = this.sGetCurrentStyle(oOffsetParent, "padding" + (iCalculationMode == 2? "Left": "Right"));
					if(sPadding && sPadding.indexOf("px") != -1) iPaddingCorrection = parseInt(sPadding);
				}
				
				
				if(iCalculationMode == 0) {
					iOffsetLeft = oOffsetParent.offsetWidth - (iSiblingsWidth + oDomRef.offsetWidth + iPaddingCorrection);
				} else if(iCalculationMode == 1) {
					iOffsetLeft = (oOffsetParent.offsetWidth/2) - ((iSiblingsWidth + oDomRef.offsetWidth)/2);
				} else if(iCalculationMode == 2) {
					iOffsetLeft = iSiblingsWidth + iPaddingCorrection;
				}
			}
			
			
			if(iPaddingCorrection == 0 
				&& oDomRef.offsetWidth < oOffsetParent.offsetWidth 
				&& oDomRef.offsetLeft == oDomRef.offsetWidth - oOffsetParent.offsetWidth
			) {
				iPaddingCorrection = oOffsetParent.offsetWidth - oDomRef.offsetWidth;
				
				iOffsetLeft -= iPaddingCorrection;
			}
			
			
			
			
			
		} 
		
		
		iOffsetLeft += this.iGetVerticalScollbarOffset(oOffsetParent);
	}
	return iOffsetLeft;
};
UCF_DomUtil.oGetViewPort = function(oDomRef) {
	if (this.oGetParentScrollContainer(oDomRef) == document.body) {
		return this.oGetObjectRect(oDomRef);
	} else {
		var oRect = this.oGetObjectRect(oDomRef),
			oScrollRef = this.oGetParentScrollContainer(oDomRef.parentNode);
		while (oScrollRef) {
	        var oScrollRect = this.oGetObjectRect(oScrollRef);
			
			oScrollRect.height = UCF_DomUtil.iClientHeight ( oScrollRef ) ;
			oScrollRect.width = UCF_DomUtil.iClientWidth ( oScrollRef ) ;
						
	        var dtop = oScrollRect.top - oRect.top,
	            dbottom = (oRect.top + oRect.height) - (oScrollRect.top + oScrollRect.height),
	            dleft = oScrollRect.left - oRect.left;
	            dright = (oRect.left + oRect.width) - (oScrollRect.left + oScrollRect.width);
	   
	        if (dtop > 0) {
	            oRect.height -= dtop;
	            oRect.top += dtop;
	        }
	        if (dbottom > 0) {
	            oRect.height -= dbottom;
	        }
	        
	        if (dleft > 0) {
	            oRect.width -= dleft;
	            oRect.left += dleft;
	        }	            
	        if (dright > 0) {
	            oRect.width -= dright;
	        }
			oScrollRef = this.oGetParentScrollContainer(oScrollRef.parentNode);
			if (oScrollRef == document.body) oScrollRef = null;
		}
		
		if (oRect.height <= 0) oRect.height = 0;
		if (oRect.width <= 0) oRect.width = 0;
		
		return oRect;
	}
};
UCF_DomUtil.oGetVisibleRect = function(oDomRef) {
	var oRect = this.oGetObjectRect(oDomRef),
		oScrollRef = this.oGetParentScrollContainer(oDomRef.parentNode);
	
	if (oScrollRef) {
        var oScrollRect = this.oGetObjectRect(oScrollRef);
        oScrollRect.height = oScrollRef.clientHeight;   
		oScrollRect.width = oScrollRef.clientWidth;
        var dtop = oScrollRect.top - oRect.top,
            dbottom = (oRect.top + oRect.height) - (oScrollRect.top + oScrollRect.height),
            dleft = oScrollRect.left - oRect.left;
            dright = (oRect.left + oRect.width) - (oScrollRect.left + oScrollRect.width);
   
        if (dtop > 0) {
            oRect.height -= dtop;
            oRect.top += dtop;
        }
        if (dbottom > 0) {
            oRect.height -= dbottom;
        }
        
        if (dleft > 0) {
            oRect.width -= dleft;
            oRect.left += dleft;
        }	            
        if (dright > 0) {
            oRect.width -= dright;
        }
	}
	
	if (oRect.height <= 0) oRect.height = 0;
	if (oRect.width <= 0) oRect.width = 0;
	
	return oRect;
};
 
UCF_DomUtil.iGetVerticalScollbarOffset = function(oDomRef) {
	_assert(typeof(oDomRef) == "object");
	_assert(oDomRef != null);
	
	if(oDomRef.offsetWidth == oDomRef.clientWidth) return 0;
	else if(UCF_UserAgent.bIsIE() && !UCF_UserAgent.bIsStandardsMode()) {
		var sBorderLeft = this.sGetCurrentStyle(oDomRef, "borderLeftWidth"),
		sBorderRight = this.sGetCurrentStyle(oDomRef, "borderRightWidth"), iBorders = 0;
		
		if(sBorderLeft.indexOf("px") != 0) iBorders += parseInt(sBorderLeft);
		if(sBorderRight.indexOf("px") != 0) iBorders += parseInt(sBorderRight);
		
		if(!iBorders) iBorders = 0;
		
		return oDomRef.offsetWidth - oDomRef.clientWidth - iBorders;
	} else {
		return oDomRef.offsetWidth - oDomRef.clientWidth;
	}
};
 
UCF_DomUtil.oGetObjectSize = function(oDomRef) {
	_assert(typeof(oDomRef) == "object");
	_assert(oDomRef != null);
	
	return new UCF_Size(oDomRef.offsetWidth, oDomRef.offsetHeight);
};
 
UCF_DomUtil.bIsInRect = function(oRect, iPosX, iPosY) {
	_assert(oRect != null);
	_assert(!isNaN(iPosX));
	_assert(!isNaN(iPosY));
	
	return iPosX >= oRect.left 
		&& iPosX <= oRect.left + oRect.width
		&& iPosY >= oRect.top 
		&& iPosY <= oRect.top + oRect.height;
};
UCF_DomUtil.oGetParentScrollContainer = function(oDomRef, bIgnoreBody) {
	_assert(oDomRef != null);
	
	while(oDomRef != null) {
		if(oDomRef == document.body ) {
			return bIgnoreBody? null: oDomRef;
		} else {
			var sOverflow = this.sGetCurrentStyle(oDomRef, "overflow");
			
			if(sOverflow != "visible" && sOverflow != "hidden")
				return oDomRef;
		}
		oDomRef = oDomRef.parentNode;
	}
	
	return null;
};
UCF_DomUtil.oGetParentAbsolutePositionContainer = function(oDomRef, oStopAtDomRef) {
	_assert(oDomRef != null);
	
	while(oDomRef != null && oDomRef != document.body ) {
		if(oStopAtDomRef && oDomRef == oStopAtDomRef) return null;
		
		if(this.sGetCurrentStyle(oDomRef, "position") == "absolute") {
			return oDomRef;
		}
		oDomRef = oDomRef.parentNode;
	}
	
	return null;
};
UCF_DomUtil.oGetParentPositionReferenceContainer = function(oDomRef, bIgnoreBody, oStopAtDomRef) {
	_assert(oDomRef != null);
	var bHiddenHasEffect = UCF_UserAgent.bIsIE();
	
	while(oDomRef != null) {
		if(oStopAtDomRef && oDomRef == oStopAtDomRef) return null;
		
		if(oDomRef == document.body ) {
			return bIgnoreBody? null: oDomRef;
		} else {
			var sOverflow = this.sGetCurrentStyle(oDomRef, "overflow");
			
			
			if (oDomRef.getAttribute("bNoPosRefContainer") == null &&
				(sOverflow != "visible" && !(!bHiddenHasEffect && sOverflow == "hidden")) || oDomRef.getAttribute("bUseAsPosRefContainer")) {
				return oDomRef;
			}
			else {
				var sPosition = this.sGetCurrentStyle(oDomRef, "position");
				if(sPosition == "absolute" || sPosition == "relative") {
					return oDomRef;
				}
			}
		}
		oDomRef = oDomRef.parentNode;
	}
	
	return null;
};
UCF_DomUtil.firstChild = function(oDomRef, sTagName) {				
	if (oDomRef != null) {
		var oFirstChild = oDomRef.firstChild;
		while (oFirstChild) {
			
			if (sTagName == null && oFirstChild.nodeType == 1) break;
			if (sTagName && oFirstChild.nodeName == sTagName) break;
			oFirstChild = oFirstChild.nextSibling;
		}
		return oFirstChild;
	}	
	return null;
};
UCF_DomUtil.lastChild = function(oDomRef, sTagName) {				
	if (oDomRef != null) {
		var oLastChild = oDomRef.lastChild;
		while (oLastChild) {
			
			
			if (sTagName == null && oLastChild.nodeType == 1) break;
			if (sTagName && oLastChild.nodeName == sTagName) break;
			oLastChild = oLastChild.previousSibling;
		}
		return oLastChild;
	}	
	return null;
};
UCF_DomUtil.nextSibling = function(oDomRef, sTagName) {				
	if (oDomRef != null) {
		
		
		var	oUntestedNode = oDomRef.nextSibling;
		while (oUntestedNode != null) {
			if ((sTagName != null && oUntestedNode.nodeName == sTagName) || (sTagName == null && oUntestedNode.nodeType == 1)) {
				return oUntestedNode;
			}
			oUntestedNode = oUntestedNode.nextSibling;
		}
	}	
	return null;
};
UCF_DomUtil.previousSibling = function(oDomRef, sTagName) {				
	if (oDomRef != null) {
		
		
		var	oUntestedNode = oDomRef.previousSibling;
		while (oUntestedNode != null) {
			if ((sTagName != null && oUntestedNode.nodeName == sTagName) || (sTagName == null && oUntestedNode.nodeType == 1)) {
				return oUntestedNode;
			}
			oUntestedNode = oUntestedNode.previousSibling;
		}
	}	
	return null;
};
UCF_DomUtil.oGetTPElement = function(oDomRef) {	
	var element = oDomRef;
	while( element != null && element.nodeType == 1 && ! (element.getAttribute("tp") || element.getAttribute("ct"))){
		element = element.parentNode;
	} 	
	if (element == null || element.nodeType != 1  || element.getAttribute("ct")) {
		
		return null;
	}
	return element;
}; 
UCF_DomUtil.bIsTPInstanceOf = function(oDomRef, sType) {
	var element = this.oGetTPElement(oDomRef);
	if( element != null && element.nodeType == 1 && element.getAttribute("tp")){
		var tp = element.getAttribute("tp");
		if (tp == sType){
			return true;
		}		
	} 
	return false;
}; 
UCF_DomUtil.oGetCTElement = function(oDomRef) {	
	var element = oDomRef;
	while( element != null && element.nodeType == 1 && ! (element.getAttribute("ct"))){
		element = element.parentNode;
	} 	
	if (element == null || element.nodeType != 1){
		
		return null;
	}
	return element;
};
UCF_DomUtil.bIsCTInstanceOf = function(oDomRef, sType) {	
	var element = this.oGetCTElement(oDomRef);
	if( element != null && element.nodeType == 1 && element.getAttribute("ct")){
		var tp = element.getAttribute("ct");
		if (tp == sType){
			return true;
		}		
	} 
	return false;
};
UCF_DomUtil.childNodes = function(oDomRef, sTagName) {
	var aChildren = new Array();
	if (oDomRef != null){
		var oUntestedNode = oDomRef.childNodes,
			iLen = oUntestedNode.length;
		for(var i = iLen; i--;){
			var oArrayItem = oUntestedNode[i];
			if ((sTagName != null && oArrayItem.nodeName == sTagName) || (sTagName == null && oArrayItem.nodeType == 1)){
				aChildren.unshift(oArrayItem);
			} 
		}
	}	
	return aChildren;
};
UCF_DomUtil.setCursorPos = function(oDomRef, iPos) {
	_assert(oDomRef != null);
	_assert(!isNaN(iPos));
	
 	try { 
	
		if( (oDomRef && oDomRef.tagName == "INPUT" && (oDomRef.type && (oDomRef.type.toLowerCase() == "text" || oDomRef.type.toLowerCase() == "password")))
			|| oDomRef && oDomRef.tagName == "TEXTAREA"
		) {
			if (oDomRef.createTextRange) {
				var oTextRange = oDomRef.createTextRange(),
					iMaxLength = oDomRef.value.length;
					
				if(iPos < 0 || iPos > iMaxLength) iPos = iMaxLength;
				if(oTextRange) {
					oTextRange.collapse();
					oTextRange.moveStart("character",iPos);
					oTextRange.select();
				}
			} else if (typeof(oDomRef.selectionStart) == "number") {
				oDomRef.focus();
				oDomRef.selectionStart = iPos;
				oDomRef.selectionEnd = iPos;
			}
		}
		
	} catch (oException) {
		_trace( ERROR, oException + " ");
	}
	
};
UCF_DomUtil.iGetCursorPos = function(oDomRef) {
	_assert(oDomRef != null);
	
	if( (oDomRef && oDomRef.tagName == "INPUT" && (oDomRef.type && (oDomRef.type.toLowerCase() == "text" || oDomRef.type.toLowerCase() == "password")))
		|| oDomRef && oDomRef.tagName == "TEXTAREA"
	) {
		var curPos = -1;
		try {
			if (oDomRef.curPos) {
				return oDomRef.curPos;
			}
							
			if (document.selection)
			{
				
				if (UCF_DomUtil.oGetActiveElement() != this.oDomRef){
					oDomRef.focus();
				}
				var oSel = document.selection.createRange();
				if (oSel) {
					oSel.moveStart ('character', -oDomRef.value.length);
					curPos = oSel.text.length;
				}
			} else if (typeof(oDomRef.selectionStart) == "number") {
				return oDomRef.selectionStart;
			}
		} catch(e) {}
		_trace(INFO, "curPos="+curPos);
		return curPos;
		
	}
	return -1;
};
UCF_DomUtil.sGetSelectionText = function(oDomRef) {
	_assert(oDomRef != null);
	
	var sSelectionText = null;
	if (oDomRef.createTextRange && document.selection){ 
		try {
			var oSelectionRange = document.selection.createRange().duplicate();
			sSelectionText = oSelectionRange.text;
		} catch(e) {}
	} else if(typeof(oDomRef.selectionStart) == "number"){
		sSelectionText = oDomRef.selectedText;
	} else if(window.getSelection && window.getSelection()){
		sSelectionText = window.getSelection().toString();
	}
	return sSelectionText;
};
UCF_DomUtil.iGetSelectionStart = function(oDomRef) {
	_assert(oDomRef != null);
	
	if (oDomRef.selStart) {
		return oDomRef.selStart;
	}
	var iSelectionStart = -1;
	if(oDomRef.createTextRange && document.selection){ 
		try {
			var oSelectionRange = document.selection.createRange().duplicate();
			var iSelectionLength = oSelectionRange.text.length;
			var iLength = oDomRef.value.length;
			
			if(iSelectionLength > 0){
				for(var i = 0; i < iLength; i++){
			    oSelectionRange.moveStart('character', -1);
			    if(oSelectionRange.htmlText != oSelectionRange.text) break;
				}
				iSelectionStart = oSelectionRange.text.length - iSelectionLength;
			}
		} catch(e) {}
	}
	else if(typeof(oDomRef.selectionStart) == "number"){
		iSelectionStart = oDomRef.selectionStart;
	}	
	return iSelectionStart;
};
UCF_DomUtil.iGetSelectionEnd = function(oDomRef) {
	_assert(oDomRef != null);
	
	if (oDomRef.selEnd) {
		return oDomRef.selEnd;
	}
	var iSelectionEnd = -1;
	if(oDomRef.createTextRange && document.selection){ 
    try {
			var oSelectionRange = document.selection.createRange().duplicate();
			var iSelectionLength = oSelectionRange.text.length;
			var iLength = oDomRef.value.length;
			
			if(iSelectionLength > 0){
				for(var i = 0; i < iLength; i++){
			    oSelectionRange.moveStart('character', -1);
			    if(oSelectionRange.htmlText != oSelectionRange.text) break;
				}
				iSelectionEnd = oSelectionRange.text.length;
			}
		} catch(e) {}
	}
	else if(typeof(oDomRef.selectionEnd) == "number"){
		iSelectionEnd = oDomRef.selectionEnd;
	}	
	return iSelectionEnd;
};
UCF_DomUtil.setSelection = function(oDomRef, iStart, iEnd) {
	_assert(oDomRef != null);
	
	if(oDomRef.createTextRange){
		var oTextEditRange = oDomRef.createTextRange();
		oTextEditRange.collapse();
		oTextEditRange.moveStart('character', iStart);
		oTextEditRange.moveEnd('character', iEnd - iStart);
		oTextEditRange.select();
	}
	else if(typeof(oDomRef.selectionStart) == "number"){
		oDomRef.selectionStart = iStart;
		oDomRef.selectionEnd = iEnd;
	}	
};
UCF_DomUtil.removeSelection = function(oDomRef) {
	
	
	if (document.selection) {
		try{
			document.selection.empty();
		} catch(e){
			
		}
	} else if(window.getSelection) {
		window.getSelection().removeAllRanges();
	}
};
UCF_DomUtil.sGetCurrentStyle = function(oDomRef, sStyleAttribute) {
	
	_assert(oDomRef != null);
	_assert(typeof(sStyleAttribute) == "string");
	_assert(sStyleAttribute != "");
	if (oDomRef.currentStyle) {
		return oDomRef.currentStyle[sStyleAttribute];
	} else {
		return window.getComputedStyle(oDomRef,"").getPropertyValue(UCF_StringUtil.sGetCSSNotation(sStyleAttribute));;
	}
};
UCF_DomUtil.setOpacityStyle = function(oDomRef, iOpacity) {
	_assert(oDomRef != null);
	_assert(typeof(iOpacity) == "number");
	
	if (UCF_UserAgent.bIsIE() && !UCF_UserAgent.bIsStandardsMode()) {
		oDomRef.style.filter = (iOpacity == 100 ? "": "alpha(opacity=" + (iOpacity<10? "0": "") + iOpacity + ")");
	} else {
		oDomRef.style.opacity = (iOpacity/100);
	}
};
UCF_DomUtil.removeOpacityStyle = function(oDomRef) {
	_assert(oDomRef != null);
	if (UCF_UserAgent.bIsIE()) {
		oDomRef.style.filter = "";
	}
	else {
		oDomRef.style.opacity = "";
	}
};
UCF_DomUtil.sGetInnerText = function(oDomRef) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	var sText = oDomRef.innerText || oDomRef.textContent;
	if (typeof(sText) != "string") sText = "";
	return sText;
};
UCF_DomUtil.setInnerText = function(oDomRef, sText) {
	
	_assert(oDomRef != null);
	_assert(typeof(oDomRef) == "object");
	_assert(typeof(sText) == "string");
	
	var oTextNode = document.createTextNode(sText);
	oDomRef.innerHTML = "";
	oDomRef.appendChild(oTextNode);
};
UCF_DomUtil.bIsVisible = function(oDomRef, bIncludeParents) {
	
	_assert(oDomRef != null);
	
	if (this.bIsInActiveDom(oDomRef) && oDomRef.nodeType == 1) {
		var bVisible = this.sGetCurrentStyle(oDomRef,"visibility") != "hidden" && this.sGetCurrentStyle(oDomRef,"display") != "none";
		
		if (!bVisible) return false;
		
		if (bIncludeParents && oDomRef.tagName && oDomRef.tagName != "BODY" && oDomRef.parentNode) { 
			return UCF_DomUtil.bIsVisible(oDomRef.parentNode,true);
		} else { 
			return true;
		}
	} 
	return false;
};
UCF_DomUtil.setVisibility = function(oDomRef, sVisibility) {
	_assert(oDomRef != null);
		
	var oStyle = oDomRef.style;
	switch (sVisibility) {
		
		case "NONE":
			oStyle.display = "none";
			oStyle.visibility = "";
			break;
		
		case "VISIBLE":
			oStyle.display = "";
			oStyle.visibility = "";
			break;	
		case "BLANK":			
			oStyle.display = "";
			oStyle.visibility = "hidden";
			break;
		default:
			var sId = oDomRef.id; 
			_trace(ERROR,"The value " + sVisibility + " cannot applied to the DomRef " + sId);
	}	
};
UCF_DomUtil.oGetTopWindow = function(){
	if (this.oTopWindow)
	    return this.oTopWindow;
	
	var aWindows = new Array();
	var oWindow = window;
	var oParentWindow = null;
	var bFirstParentAccess = true;
	aWindows[0] = oWindow;
	
	
	try	{
		oParentWindow = oWindow.parent;
	}
	catch (e) {
		bFirstParentAccess = false;
	}
	
	if (bFirstParentAccess) {
		while (oWindow != oParentWindow) {
			oWindow = oParentWindow;
			aWindows[aWindows.length] = oWindow;
			
			
			try	{
				oParentWindow = oWindow.parent;
			}
			catch (e) {
				break;
			}
		}
	}
		
	for (var x = aWindows.length-1; x >= 0; x--) {
		var oTopWindow = aWindows[x]; 
		
		
		try {
			oTopWindow.document.domain;
			
			if (UCF_UserAgent.bIsFirefox()) oTopWindow.location.href;
		}
		catch (e) {
			continue;
		}
		
		
		var iBs = oTopWindow.document.getElementsByTagName("frameset").length;
		if (iBs > 0)
			continue;
		
		return this.oTopWindow = oTopWindow;		
	}
};
UCF_DomUtil.applyRuntimeStyle = function( oDomRef ) {
		if (oDomRef.nodeType != 1) return;
		 
		var aProperties = ["backgroundColor","fontSize","fontFamily","borderStyle","borderColor","borderWidth","padding"];
		
		if (oDomRef.currentStyle) {
			for (var i = 0;i < aProperties.length;i++)
				oDomRef.style[aProperties[i]] = oDomRef.currentStyle[aProperties[i]];
		} else {
			oDomRef.style.backgroundColor = window.getComputedStyle(oDomRef,"").getPropertyValue("background-color");
			for (var i = 0;i < aProperties.length;i++)
				oDomRef.style[aProperties[i]] = window.getComputedStyle(oDomRef,"").getPropertyValue(aProperties[i]);
		}
		
		var aChildNodes = oDomRef.childNodes;
		for (var i = 0; i < aChildNodes.length; i++) UCF_DomUtil.applyRuntimeStyle(aChildNodes[i]);
};
UCF_DomUtil.oGetFirstFocusableDomRef = function(oContainerDomRef, bIncludeInvisible) {
	_assert(oContainerDomRef != null);
	if (!oContainerDomRef || !(bIncludeInvisible || UCF_DomUtil.bIsVisible(oContainerDomRef))) return null;
	
	
	var oCurrDomRef = oContainerDomRef.firstChild,
		oDomRefFound = null;
	
	while (oCurrDomRef) {
		if(oCurrDomRef.nodeType == 1 && (bIncludeInvisible || UCF_DomUtil.bIsVisible(oCurrDomRef))) {
			if (UCF_DomUtil.bHasTabIndex(oCurrDomRef) ) {
				return oCurrDomRef;
			}
	
			if(oCurrDomRef.childNodes) {
				oDomRefFound = UCF_DomUtil.oGetFirstFocusableDomRef(oCurrDomRef, bIncludeInvisible);
				if(oDomRefFound) return oDomRefFound;
			}
		}
		oCurrDomRef = oCurrDomRef.nextSibling;
	}
	
	return null;
};
UCF_DomUtil.oGetLastFocusableDomRef = function(oContainerDomRef, bIncludeInvisible) {
	_assert(oContainerDomRef != null);
	if (!oContainerDomRef || !(bIncludeInvisible || UCF_DomUtil.bIsVisible(oContainerDomRef))) return null;
	
	
	var oCurrDomRef = oContainerDomRef.lastChild,
		oDomRefFound = null;
	
	while (oCurrDomRef) {
		if(oCurrDomRef.nodeType == 1 && (bIncludeInvisible || UCF_DomUtil.bIsVisible(oCurrDomRef)) ) {
			if(oCurrDomRef.childNodes) {
				oDomRefFound = UCF_DomUtil.oGetLastFocusableDomRef(oCurrDomRef, bIncludeInvisible);
				if(oDomRefFound) return oDomRefFound;
			}
			
			if (UCF_DomUtil.bHasTabIndex(oCurrDomRef)) {
				return oCurrDomRef;
			}
		}
		
		
		oCurrDomRef = oCurrDomRef.previousSibling;
	}
	
	return null;
};
UCF_DomUtil.removeFromDom = function(oDomRef) {
	
	if (oDomRef && oDomRef.parentNode)
		oDomRef.parentNode.removeChild(oDomRef);
	
};
UCF_DomUtil.removePreviousIdDuplicates = function(oDomRef) {
	_assert(oDomRef != null);
	
	var sDomRefId = oDomRef.getAttribute("id");
	
	if(sDomRefId) {
		var oFoundDomRef = UCF_DomUtil.$(sDomRefId),
			oLastFoundDomRef = null;
	
		while(oFoundDomRef 
			&& oFoundDomRef != oDomRef
			&& oFoundDomRef != oLastFoundDomRef 
		) {
			if(oFoundDomRef.parentNode) oFoundDomRef.parentNode.removeChild(oFoundDomRef);
			oLastFoundDomRef = oFoundDomRef;
			oFoundDomRef = UCF_DomUtil.$(sDomRefId);
		}
	}
};
UCF_DomUtil.oGetTabbableElementForward = function(oDomRef, bAscending) {
	_assert(oDomRef != null);
	var oResult = null, ELEMENT_NODE = 1;
	while( oDomRef != null ) {
		if(oDomRef.nodeType == ELEMENT_NODE) {
			
			if(UCF_DomUtil.bHasTabIndex(oDomRef)) return oDomRef;
			
			
			if(oDomRef.firstChild) 
				oResult = UCF_DomUtil.oGetTabbableElementForward(oDomRef.firstChild, false);
			
			if(oResult) return oResult;
		}
		oDomRef = UCF_DomUtil.oGetNextSibling(oDomRef, bAscending);
	}
	return null;
};
UCF_DomUtil.oGetTabbableElementBackward = function(oDomRef, bAscending) {
	_assert(oDomRef != null);
	var oResult = null, ELEMENT_NODE = 1;
	
	while( oDomRef != null ) {
		if(oDomRef.nodeType == ELEMENT_NODE) {
			if(oDomRef.lastChild) 
				oResult = UCF_DomUtil.oGetTabbableElementBackward(oDomRef.lastChild, false);
			if(oResult) return oResult;
			
			if(UCF_DomUtil.bHasTabIndex(oDomRef)) return oDomRef;
		}
		oDomRef = UCF_DomUtil.oGetPreviousSibling(oDomRef, bAscending);
	}
	return null;
};
UCF_DomUtil.oGetNextSibling = function(oDomRef, bAscending) {
	_assert(oDomRef != null);
	
	if(!bAscending) return oDomRef.nextSibling;
	
	while(oDomRef != null) {
		if(oDomRef.nextSibling) return oDomRef.nextSibling;
		oDomRef = oDomRef.parentNode;
	}
	
	return null;
};
UCF_DomUtil.oGetPreviousSibling = function(oDomRef, bAscending) {
	_assert(oDomRef != null);
	
	if(!bAscending) return oDomRef.previousSibling;
	
	while(oDomRef != null) {
		if(oDomRef.previousSibling) return oDomRef.previousSibling;
		oDomRef = oDomRef.parentNode;
	}
	
	return null;
};
UCF_DomUtil.removeCaret = function(oDomRef) {
	if (!oDomRef) return;
	_assert(oDomRef != null);
	try {
		if (document.selection) {
			if (oDomRef){
				if (oDomRef.tagName == "INPUT"){
					try{
						document.selection.empty();
					}catch(e){
						
					}
				}
			}
		}
	} catch (ex) {
		
	}
};
UCF_DomUtil.sGetValueForClassAndProperty = function(sClassName, sPropertyName){
	for(var j=0; j<document.styleSheets.length; j++) {
		try{
			var oStyleSheet = document.styleSheets[j],
				
				oRules = oStyleSheet.rules || oStyleSheet.cssRules,
				oRule = null;
				
			for(var i=0; i<oRules.length; i++) {
				oRule = oRules[i];
				
				if(oRule.selectorText.toLowerCase() == sClassName.toLowerCase()) {
					return oRule.style[sPropertyName];
					
				}
			}
		} catch(e){
			
		}
	}
	return null;
};
UCF_DomUtil.iConvertAnySizeToPixel = function(sSize){
	
	if (typeof(sSize) == "string" && sSize.indexOf("%") > 0)
	{
		return UCF_DomUtil.oGetInnerSize(window).width * parseInt(sSize) / 100;
	}	
		
	var oDiv = document.createElement("div");
	document.body.appendChild(oDiv);
	
	var oStyle = oDiv.style;
	oStyle.position = "absolute";
	oStyle.left = "0px";
	oStyle.top = "-5000px";
	
	
	oStyle.width = sSize;
	var iPixelWidth = oDiv.scrollWidth;
	
	UCF_DomUtil.removeFromDom(oDiv);
	
	return 	parseInt(iPixelWidth);
};
UCF_DomUtil.oCreateDebugRect = function(oRect, sText, sColor){
	var oDomRefResult = document.createElement("DIV");
	
	oDomRefResult.style.position = "absolute";
	oDomRefResult.style.width = oRect.width + "px";
	oDomRefResult.style.height = oRect.height + "px";
	oDomRefResult.style.top = oRect.top + "px";
	oDomRefResult.style.left = oRect.left + "px";
	oDomRefResult.style.border = "1px solid " + sColor;
	oDomRefResult.setAttribute("title", sText);
	oDomRefResult.style.overflow= "hidden";
	oDomRefResult.style.fontSize= "1px";
	
	oDomRefResult.onclick = function () {event.srcElement.parentNode.removeChild(event.srcElement);};
		
	return oDomRefResult;
};
UCF_DomUtil.bNotEmpty = function (oRef, sAttributeName) {		
	try {	
		if (oRef.nodeType == 1) {	
			if (typeof(oRef.getAttribute(sAttributeName)) != 'undefined' 
				&& oRef.getAttribute(sAttributeName) != ""
				&& oRef.getAttribute(sAttributeName) != null
			) {
				return true;
			} else {
				return false;
			}
		}
	} 
	catch(e) {} 
};
UCF_DomUtil.sGetARIAInfo = function (oDomRef) {	
    var sStatic = "";
    var SEP = " - ";          
	
	_assert(oDomRef != null);	
	
	if (oDomRef && oDomRef.nodeType == 1){            			
		var el = oDomRef;
				
	    
	    if  (el.attributes && el.attributes.length > 0) { 
		    for (var i = 0; i < el.attributes.length; i++) {    
				if (el.attributes[i].name.indexOf("role") != -1) {	
					sStatic = el.attributes[i].value.toUpperCase();
					break;
				}
		    }	    	  	      
	    }
	    
	    
	    if (sStatic == "") sStatic = "[" + el.nodeName + "]";    	
	      		    	    	    	    	    	           
		
		if  (el.attributes && el.attributes.length > 0) { 
			for (var j = 0; j < el.attributes.length; j++) {    
				
				if (el.attributes[j].name.indexOf("aria") != -1) {							
					if ( this.bNotEmpty(el, el.attributes[j].name) ) {																								
						if (el.attributes[j].name.indexOf("labelledby") != -1) {
							var labelled_ids = new Array();
							var txt1 = "";
							labelled_ids = (el.getAttribute(el.attributes[j].name)).toString().split(' ');												
							for (var k = 0; k < labelled_ids.length; k++) {
								
								var obj1 = this.$(labelled_ids[k]);
								if (obj1 != null && obj1.innerHTML!="") txt1 += obj1.innerHTML + " ";							
							}
							if (txt1 != "" && txt1 != " ") sStatic += SEP + "|" + UCF_JsUtil.sTrim(txt1) + "|";						
						}					
						else if (el.attributes[j].name.indexOf("describedby") != -1) {
							var described_ids = new Array();
							var txt2 = "";
							described_ids = (el.getAttribute(el.attributes[j].name)).toString().split(' ');
							for (var l = 0; l < described_ids.length; l++) {
								var obj2 = this.$(described_ids[l]);
								if (obj2 != null && obj2.innerHTML!="") txt2 +=  obj2.innerHTML + " ";
							}						
							if (txt2 != "" && txt2 != " " ) sStatic += SEP + "{" + UCF_JsUtil.sTrim(txt2) + "}";
						}					
						else {
							sStatic += SEP + el.attributes[j].name.substr(5) + "=" + el.attributes[j].value;					
						}				
					}									
				}
		    }    
		}
	    
	    
	    if (this.bNotEmpty(el, "title")) sStatic += SEP + el.getAttribute("title");
	                    
    }
    return sStatic;    
};
UCF_DomUtil.oAddLayeredElement = function(oDomRefLayered, oDomRefTopLayerArea, oDomRefReferenceContainer, bInitialSize) {
	var oAddTo = null;
	if(oDomRefReferenceContainer) {
		var oInsertAfter = null;
		
		oAddTo = this.oGetFirstElement(oDomRefReferenceContainer);
		
		
		
		
		
		
		
		
		
		
		while(oAddTo && this.sGetCurrentStyle(oAddTo, "position") == "absolute") {
			oInsertAfter = oAddTo;
			oAddTo = UCF_DomUtil.nextSibling(oAddTo);
		}
		
		if(!oAddTo || !oAddTo.bIsCollectorContainer) {
						
			oAddTo = document.createElement("div");
			oAddTo.style.height = "0px";
			oAddTo.style.width = UCF_DomUtil.bIsRTL? "100%": "0px";
			oAddTo.style.position = "relative";
			
			oAddTo.bIsCollectorContainer = true;
			
			
			if(UCF_UserAgent.bIsIE()) {
				var oDummyContent = document.createElement("div");
				
				oDummyContent.style.height = "0px";
				oDummyContent.style.width = "0px";
				oDummyContent.style.overflow = "hidden";
				oDummyContent.style.fontSize = "0.1pt";
				oDummyContent.style.position = "absolute";
				
				oAddTo.appendChild(oDummyContent);
			}
			
			if(!oDomRefReferenceContainer.firstChild) {
				
				oDomRefReferenceContainer.appendChild(oAddTo);
			} else {
				if(oInsertAfter) {
					if(oDomRefReferenceContainer.lastChild == oInsertAfter) oDomRefReferenceContainer.appendChild(oAddTo);
					else oDomRefReferenceContainer.insertBefore(oAddTo, oInsertAfter.nextSibling);
				} else {
					
					oDomRefReferenceContainer.insertBefore(oAddTo, oDomRefReferenceContainer.firstChild);
				}	
			}
		}
		
		
		
		
		if(UCF_System.bIsRTL && UCF_UserAgent.bIsIE() && (oDomRefReferenceContainer.scrollLeft || this.sGetCurrentStyle(oDomRefReferenceContainer, "overflowX") != "visible")) {
			if(!oAddTo.iLsLastWidth ||  oAddTo.iLsLastWidth != oDomRefReferenceContainer.offsetWidth) {
				oAddTo.iLsLastWidth = oDomRefReferenceContainer.offsetWidth;
				oAddTo.style.left = 0;
				oAddTo.style.left = -(oDomRefReferenceContainer.scrollWidth - oDomRefReferenceContainer.clientWidth) + "px";
			}
		}
		
	} else if(oDomRefTopLayerArea) {
		oAddTo = oDomRefTopLayerArea;
	}
	
	if(oDomRefLayered && oAddTo) {
		oDomRefLayered.style.top = "-10000px";
		oDomRefLayered.style.position = "absolute";
		if (bInitialSize) {
			oDomRefLayered.style.height = "1px";
			oDomRefLayered.style.width = "1px";
		}
		
		oAddTo.appendChild(oDomRefLayered);
	}
		
	return oAddTo;
};
UCF_DomUtil.iScreenWidth = function() {
	return screen.width;
};
UCF_DomUtil.iScreenHeight = function() {
	return screen.height;
};
UCF_DomUtil.sScreenOrientation = function() {
	if("orientation" in window) {
		switch (window.orientation) {
			case 0: return "portrait";
	  }
	};
	
	return "landscape"
};
 
UCF_DomUtil.iClientWidth = function(oWindow) {
	if (!oWindow)	oWindow = window;
	return oWindow.innerWidth ||
	  (oWindow.document.documentElement.clientWidth ||
	   oWindow.document.body.clientWidth);
};
UCF_DomUtil.iClientHeight = function(oWindow) {
	if (!oWindow)	oWindow = window;
	return oWindow.innerHeight ||
	  (oWindow.document.documentElement.clientHeight || 
	   oWindow.document.body.clientHeight);
};
UCF_DomUtil.oScrollSize = function(oWindow) {
	if (!oWindow)
		oWindow = window;
	if ( oWindow.document.body.scrollHeight > oWindow.document.body.offsetHeight )
		return {width:oWindow.document.body.scrollWidth,
			height:oWindow.document.body.scrollHeight};
	else
		return {width:oWindow.document.body.offsetWidth,
			height:oWindow.document.body.offsetHeight};
};
UCF_DomUtil.bCheckStandardsCorrection = function(oTable) {
	return document.documentMode && parseInt(document.documentMode) >= 8 && parseInt(document.documentMode) <= 10
		&& UCF_UserAgent.bIsStandardsMode();
};
UCF_DomUtil.initHtmlTableCorrection = function(oTable) {
	if(oTable && UCF_DomUtil.bCheckStandardsCorrection()) {
		
		
		
		var sCorrProcedure = "", bNeedsResizeHandling = false, bForceCorrection = false, sTableHeight = oTable.currentStyle.height, 
			iTableAdd = 0, iRelatedParentAdd = 0,
			oRelatedParent = this.oGetHtmlTableCorrectionRelatedParent(oTable), iRelatedParentHeight = 0, sRelatedParentHeight = null;
		
		oTable.removeAttribute("lsTableCorrProcedure");
		oTable.removeAttribute("lsTableCorrAdd");
		oTable.removeAttribute("lsTableCorrParentAdd");
		if(oRelatedParent) { 
			iRelatedParentHeight = oRelatedParent.clientHeight;
			sRelatedParentHeight = oRelatedParent.currentStyle.height;
		}
		
		
		if(sTableHeight) {
			var bRelatedParentHeightFixed = sRelatedParentHeight.indexOf("%") == -1, bTableHeightFixed = sTableHeight.indexOf("%") == -1;
			
			
			bNeedsResizeHandling = !bTableHeightFixed;
			
			bForceCorrection = bTableHeightFixed || (!bTableHeightFixed && bRelatedParentHeightFixed);
			
			if(bTableHeightFixed) {
				sCorrProcedure = "P2"; 
			} else if(sRelatedParentHeight) { 
				sCorrProcedure = "P1"; 
			}
		} 
		
		if(sCorrProcedure) { 
			var	aRows = oTable.rows, oRow = null, aCells = null, oReferenceCell = null, bHasFixedRows = false, iROF = 0 ,
				bHasPercentContent = false, sCellSpacing = oTable.getAttribute("cellspacing");
			if(sCellSpacing) iTableAdd += parseInt(sCellSpacing) * (aRows.length + 1);
			
			if(oRelatedParent) {
				var oDomRef = oTable.parentNode;
				
				
				
				while(oDomRef) {
					iRelatedParentAdd -= this.iGetHtmlTableCorrectionHeightOffset(oDomRef);
					
					if(oDomRef == oRelatedParent) break;
					oDomRef = oDomRef.parentNode;
				}
			}
			
			for(var iRowIndex =0 ; iRowIndex < aRows.length; iRowIndex++) {
				oRow = aRows[iRowIndex];
				aCells = oRow.cells;
				
				for(var iCellIndex = 0; iCellIndex < aCells.length;  iCellIndex++) {
					oReferenceCell = aCells[iCellIndex];
					if(oReferenceCell.firstChild) break;
				}
				oRow.removeAttribute("lsTableCorrROF");
				oRow.removeAttribute("lsTableCorrAdd");
				
				if(oRow.currentStyle.height.indexOf("%") != -1) iROF = parseInt(oRow.currentStyle.height);
				else if(oReferenceCell.currentStyle.height.indexOf("%") != -1) iROF = parseInt(oReferenceCell.currentStyle.height);
				else iROF = 0;
				
				if(iROF) {
					var oContent = UCF_DomUtil.oGetFirstElement(oReferenceCell);
					
					if(oContent && oContent.currentStyle.height == "100%") { 
						var iAdd = (iRelatedParentHeight>500)? 4: 0;
						
						bHasPercentContent = true;
						
						
						if(oContent.currentStyle.display != "inline") iAdd += this.iGetHtmlTableCorrectionHeightOffset(oReferenceCell);
												
						oRow.setAttribute("lsTableCorrROF", iROF);
						oRow.setAttribute("lsTableCorrAdd", iAdd);
					}
				} else bHasFixedRows = true;
			}
			
			
			if(!bHasFixedRows || !bHasPercentContent) sCorrProcedure = "";
		}
		
		oTable.setAttribute("lsTableCorrProcedure", sCorrProcedure);
		oTable.setAttribute("lsTableCorrAdd", iTableAdd);
		oTable.setAttribute("lsTableCorrParentAdd", iRelatedParentAdd);
		if(sCorrProcedure) { 
			UCF_DomUtil.updateHtmlTableCorrection(oTable, bForceCorrection);
			
			if(bNeedsResizeHandling) {
				
				
				this.attachEvent(oTable, "resize", this.fGetHtmlTableCorrectionHandler(oTable));
				
				if(oRelatedParent) {
					this.attachEvent(oRelatedParent, "resize", this.fGetHtmlTableCorrectionHandler(oTable));
					
					
				}
	
			}
		}
	}
};
UCF_DomUtil.iGetHtmlTableCorrectionHeightOffset = function(oDomRef) {
	var iOffset = 0, oStyle = oDomRef.currentStyle;
	
	if(oStyle.paddingTop) iOffset += parseInt(oStyle.paddingTop);
	if(oStyle.paddingBottom) iOffset += parseInt(oStyle.paddingBottom);
	
	return iOffset;
};
UCF_DomUtil.oGetHtmlTableCorrectionRelatedParent = function(oTable) {
	var oRelatedParent = oTable.parentNode;
	while(oRelatedParent
		&& oRelatedParent != document.body 
		&& oRelatedParent.tagName.charAt(0) == "T" 
	) {
		oRelatedParent = oRelatedParent.parentNode;
	}
	
	return oRelatedParent;
};
UCF_DomUtil.fGetHtmlTableCorrectionHandler = function(oTarget) {
	var fHandler = function() {
		if(UCF_DomUtil.bIsInActiveDom(oTarget)) {
			UCF_DomUtil.updateHtmlTableCorrection(oTarget, false);
		} else { 
			
			this.detachEvent(event.srcElement, "resize", fHandler);
			fHandler = null;
			oTarget = null;
		}
	};
	
	return fHandler;
};
UCF_DomUtil.updateHtmlTableCorrection = function(oTable, bForceCorrection) {
	var iTableHeight = oTable.offsetHeight, iRelatedParentHeight = iTableHeight, oRelatedParent = this.oGetHtmlTableCorrectionRelatedParent(oTable),
	sCorrProcedure = oTable.getAttribute("lsTableCorrProcedure");
		
	if(!iTableHeight && !UCF_DomUtil.bIsVisible(oTable, true)) {
		_trace( WARNING, "HTML table correction algorithm for IE bug does not support \"display=none\" content. Skipping correction.");
		return;
	}
	if(oRelatedParent) {
		iRelatedParentHeight = oRelatedParent.clientHeight + parseInt(oTable.getAttribute("lsTableCorrParentAdd"));
	}
	if(bForceCorrection || Math.abs(iTableHeight - iRelatedParentHeight) > 5 || iTableHeight > iRelatedParentHeight) { 
		var aRows = oTable.rows, oRow = null, iFixHeight = parseInt(oTable.getAttribute("lsTableCorrAdd"));
		
		for(var i=0; i < aRows.length; i++) {
			oRow = aRows[i];
			iFixHeight += (oRow.getAttribute("lsTableCorrROF")? 
				parseInt(oRow.getAttribute("lsTableCorrAdd")):
				oRow.offsetHeight);
		}
		
		if(sCorrProcedure == "P1") { 
			oTable.style.height = Math.max(2, Math.floor( ((iRelatedParentHeight - iFixHeight) * 100 / iRelatedParentHeight) )) + "%";
		} else if(sCorrProcedure == "P2") { 
			var sCssTableHeight = oTable.currentStyle.height,
				sUnit = sCssTableHeight.substring(sCssTableHeight.length - 2),
				fCorrectedValue = parseFloat(sCssTableHeight) * (1.0 - ((iTableHeight / (iTableHeight - iFixHeight)) - 1.0));
			
			if(sUnit == "px") {
				oTable.style.height = Math.max(10, Math.floor(fCorrectedValue)) + sUnit;
			} else {
				oTable.style.height = fCorrectedValue + sUnit;
			}
		}
	}
};
UCF_DomUtil.initPercentageToStaticHeight = function(oTargetDomRef, oSourceDomRef) {
	if(oTargetDomRef) {
		if(!oSourceDomRef) oSourceDomRef = oTargetDomRef;
		
		if(oSourceDomRef != oTargetDomRef) {
			var sTargetId = oTargetDomRef.getAttribute("id");
			
			if(!sTargetId) { 
				sTargetId = UCF_JsUtil.sGetUID();
				oTargetDomRef.setAttribute("id", sTargetId);
			}
			oSourceDomRef.setAttribute("lsStaticHeightTargetId", sTargetId);
		}
		
		UCF_DomUtil.updatePercentageToStaticHeight(oTargetDomRef, oSourceDomRef);
		if(oSourceDomRef != oTargetDomRef)
			this.attachEvent(oSourceDomRef, "resize", UCF_DomUtil.updatePercentageToStaticHeightHandler);
	}
};
UCF_DomUtil.updatePercentageToStaticHeight = function(oTargetDomRef, oSourceDomRef) {
	
	if(oTargetDomRef === null && oSourceDomRef) { 
		oTargetDomRef = oSourceDomRef.getAttribute("lsStaticHeightTargetId")?
				UCF_DomUtil.$(oSourceDomRef.getAttribute("lsStaticHeightTargetId")):
				oSourceDomRef;
		
		if(!oTargetDomRef) {
			_trace( WARNING, "Updating static height failed. Did not find target");
			return;
		}
	}
	
	
	oTargetDomRef.style.height = (document.documentMode == 8 && oSourceDomRef.clientHeight? oSourceDomRef.clientHeight: oSourceDomRef.offsetHeight) + "px";
};
UCF_DomUtil.updatePercentageToStaticHeightHandler = function() {
	UCF_JsUtil.feedMassNotificationFilter(50, this, UCF_DomUtil, "updatePercentageToStaticHeight", [null, this]);
};
UCF_DomUtil.iGetTextHeight = function(sText,sClassName){
	var oSpan = document.createElement("span");
	oSpan.className = sClassName;
	oSpan.style.border="none";
	oSpan.style.padding="0px";
	oSpan.innerHTML = sText;
	oSpan.style.position = "absolute";
	oSpan.style.top = "-1000";
	document.body.appendChild(oSpan);
	var iHeight = oSpan.clientHeight;
	document.body.removeChild(oSpan);
	oSpan = null;
	return iHeight;
};
UCF_DomUtil.oGetTextSize = function(sText,sClassName){
	var oSpan = document.createElement("span");
	oSpan.className = sClassName;
	oSpan.style.border="none";
	oSpan.style.padding="0px";
	oSpan.style.width="auto";
	oSpan.innerHTML = sText;
	oSpan.style.position = "absolute";
	oSpan.style.top = "-1000";
	document.body.appendChild(oSpan);
	var iHeight = oSpan.clientHeight;
	var iWidth = oSpan.clientWidth;
	document.body.removeChild(oSpan);
	oSpan = null;
	return {width:iWidth,height:iHeight};
};
UCF_DomUtil.checkTooltip = function(oDomRef, sTooltip, oDomRefOvfl) {
	if (!sTooltip) sTooltip = "";
	var sSepator = (sTooltip != "")? " - " :"";
	if (oDomRef) {
		if (oDomRefOvfl) {
			
			
			if (oDomRefOvfl.offsetWidth > oDomRef.offsetWidth || oDomRef.scrollWidth > oDomRef.offsetWidth) {
				var sText = this.removeColon(UCF_DomUtil.sGetInnerText(oDomRefOvfl));
				
				
				if (sText != "" && sText != UCF_StringUtil.sTrim(sTooltip)) {
					this.setTooltip(oDomRef, sText + sSepator + sTooltip);
					this.setTooltip(oDomRefOvfl, sText + sSepator + sTooltip);				
				}	
			}
			else {
				this.setTooltip(oDomRef, sTooltip);
				this.setTooltip(oDomRefOvfl, sTooltip);
			}
		}
		else {
			
			var oParentDomRef =this.oGetParentByAttribute(oDomRef, "ctv", "C");
			if (oParentDomRef) {
				
				
				if (oParentDomRef.scrollWidth > oParentDomRef.clientWidth || oDomRef.offsetWidth > oParentDomRef.offsetWidth) {
					var sText = this.removeColon(UCF_DomUtil.sGetInnerText(oDomRef));
					if (sText != UCF_StringUtil.sTrim(sTooltip)) {
						this.setTooltip(oDomRef, sText + sSepator + sTooltip);
					}
				}
				else {
					this.setTooltip(oDomRef, sTooltip);
				}
			}
		} 
	}
};
UCF_DomUtil.removeColon = function(sString) {
	var sStringValue = sString;
	if (sStringValue != null && sStringValue != "") {
		if (UCF_StringUtil.bEndsWith(sStringValue, ":")) {
			return UCF_StringUtil.sTrim(sStringValue.substring(0, sStringValue.length - 1));
		}
	}
	return UCF_StringUtil.sTrim(sStringValue);		
};
UCF_DomUtil.setTooltip = function(oDomRef, sTooltip) {
		oDomRef.title= sTooltip;		
};
UCF_DomUtil.setTextAlign = function(oDomRef, sTextAlign, sTextDirection) {
    var mSystemDirection = {
    		"LTR": 0,
    		"RTL": 1
    		
       },
	   mTextAlignStates = {
			"FORCEDLEFT" :	[{"LTR":"", "RTL":"left", "INHERIT":""}, {"LTR":"left", "RTL":"left", "INHERIT":"left"}],
			"LEFT" : 		[{"LTR":"", "RTL":"", "INHERIT":""}, {"LTR":"", "RTL":"", "INHERIT":""}],
			"CENTER" : 		[{"LTR":"center", "RTL":"center", "INHERIT":"center"}, {"LTR":"center", "RTL":"center", "INHERIT":"center"}],
			"RIGHT" : 		[{"LTR":"right", "RTL":"right", "INHERIT":"right"}, {"LTR":"right", "RTL":"", "INHERIT":""}],
			"ENDOFLINE" : 	[{"LTR":"right", "RTL":"left", "INHERIT":"right"}, {"LTR":"right", "RTL":"left", "INHERIT":"left"}],
			"FORCEDRIGHT" : [{"LTR":"right", "RTL":"right", "INHERIT":"right"}, {"LTR":"right", "RTL":"", "INHERIT":""}],
			"BEGINOFLINE" : [{"LTR":"left", "RTL":"right", "INHERIT":"left"}, {"LTR":"left", "RTL":"right", "INHERIT":"right"}]
		},
		oTextAlignState = mTextAlignStates[sTextAlign],
		iLayoutDirection = UCF_DomUtil.bIsRTL? mSystemDirection.RTL : mSystemDirection.LTR,
		oTextAlignStateSD = oTextAlignState[iLayoutDirection],	
		sTextAlignStyle = oTextAlignStateSD[sTextDirection];
	
	oDomRef.style.textAlign = sTextAlignStyle;
	
};
UCF_DomUtil.applyIECssCursorRule = function(sRuleName) {
	
	if(sRuleName && UCF_UserAgent.bIsIE() && !UCF_DomUtil.mAppliedIECursorRules[sRuleName]) {
		var oStyleSheet = null, sCssRuleText = null, sStyleSheetLocation = null, bRuleSeach = true,
			sTargetRuleName = sRuleName, aMatch = sTargetRuleName.match(/^([\.\w_]+)_(ie6)_$/);
		
		_measure(START,"ApplyIECssCursorRule");
		
		if(aMatch && aMatch.length) sTargetRuleName = aMatch[1];
		try{
			for(var i=0; i<document.styleSheets.length; i++) {
				var aRules = null;
				oStyleSheet = document.styleSheets[i];
				aRules = oStyleSheet.cssRules || oStyleSheet.rules;
				
				for(var j=0; j<aRules.length; j++) { 
					var oRule = aRules[j];
					
					if(oRule.selectorText == sRuleName) {
						sCssRuleText = " " + oRule.selectorText + "{" + oRule.style.cssText + "}";
						break;
					}
				}
				
				if(sCssRuleText) {
					sStyleSheetLocation = oStyleSheet.href.substring(0, oStyleSheet.href.lastIndexOf("/") + 1) ;
					break;
				}
			}
			if(sCssRuleText && sStyleSheetLocation) {
				var sStyleId = "AppliedIECursorRules", oDomRefLink = oStyleSheet.ownerNode,	oDocument = null,	oDomRefStyle = null;
				
				if(!oDomRefLink) { 
					var aDomRefLinks = document.getElementsByTagName("link");
					for(var i=0; i<aDomRefLinks.length; i++) {
						oDomRefLink = aDomRefLinks[i];
						if(oDomRefLink.styleSheet == oStyleSheet) break;
					}
				}
				
				oDocument = oDomRefLink.ownerDocument,
				oDomRefStyle = oDocument.getElementById(sStyleId);
				
				if(!oDomRefStyle) {
					oDomRefStyle = oDocument.createElement("style");
					oDomRefStyle.setAttribute("id", sStyleId);
					
					if(oDomRefLink.nextSibling) oDomRefLink.parentNode.insertBefore(oDomRefStyle, oDomRefLink.nextSibling);
					else oDomRefLink.parentNode.appendChild(oDomRefStyle);
				}
				
				if(sTargetRuleName != sRuleName) sCssRuleText = sCssRuleText.replace(sRuleName, sTargetRuleName);
				
								
				oDomRefStyle.styleSheet.cssText += sCssRuleText.replace("url(", "url(" + sStyleSheetLocation);
			} else {
				_trace( WARNING, "Applying IECursorRule failed. Did not find CSS rule: " + sRuleName);
			}
			
		} catch(oException) {
			_trace( WARNING, "Applying IECursorRule failed. " + oException);
		}
		UCF_DomUtil.mAppliedIECursorRules[sRuleName] = true;
		
		_measure(STOP,"ApplyIECssCursorRule", sRuleName + " applied ");
	}
};
UCF_DomUtil.mAppliedIECursorRules = {};

//** GlobalFunctions.nn6 **
ur_type={ActiveXContainer:"AX",ActiveXContainer_End:"AX_END",AppletContainer:"AP",AppletContainer_End:"AP_END",Button:"B",Button_Menu:"B_MNU",Button_MenuSection:"B_MNUSEC",Button_Toggle:"B_TG",BreadCrumb:"BRC",BreadCrumb_Item:"BRC_I",BreadCrumb_SingleLink:"BRC_SL",Calendar_Entry:"CAL_ENTRY",Calendar_Entry_Fullday:"CAL_ENTRY_FULLDAY",Calendar_DayColumn:"CAL_DCOL",Calendar_MultipleDayView:"CAL_MD",Calendar_DayView:"CAL_D",Calendar_MonthView:"CAL_M",Calendar_MonthCell:"CAL_MCELL",Calendar_YearView:"CAL_Y",Calendar_HierarchicalMonthView:"CAL_HM",Calendar_RowHeader:"CAL_RH",CheckBox:"C",ComboBox:"CB",ComboBox_DropDownListBox:"CB_DD",CheckBoxGroup:"CG",CheckBoxGroup_End:"CG_END",Caption:"CP",ContextualPanel:"CXP",ContextualPanel_Help:"CXP_H",ContextualPanel_Personalize:"CXP_P",ContextualPanel_End:"CXP_END",DateNavigator:"DN",DateNavigator_Month:"DN_MONTH",DateNavigator_Day:"DN_DAY",DateNavigator_Week:"DN_WEEK",DateNavigator_End:"DN_END",FileUpload:"FU",FreeArea:"FRA",FreeArea_Personalize:"FRA_P",FreeArea_End:"FRA_END",FormattedTextView:"FTV",GeoMap:"GM",GeoMap_Button:"GM_BTN",GeoMap_Image:"GM_IMG",GeoMap_End:"GM_END",GeoMap_ZoomIn:"GM_ZIN",GeoMap_ZoomOut:"GM_ZOUT",Group:"G",Group_End:"G_END",HorizontalContextualPanel:"HCNP",HorizontalContextualPanel_MenuItem:"HCNP_LNK",InputField:"I",Iframe:"IF",Iframe_End:"IF_END",ItemList:"IL",ItemListBoxSingle:"ILBS",ItemListBoxSingle_Item:"ILBS_I",ItemListBoxMultiple:"ILBM",ItemListBoxMultiple_Item:"ILBM_I",Image:"IMG",Invisible:"INV",InputTokenizer:"IT",InputTokenList:"ITL",Label:"L",Legend:"LEG",LegendDateNavigatorItem:"LEGDI",LegendTableItem:"LEGTI",Link:"LN",ListBox:"LB",LoadingAnimation:"LA",MatrixLayout:"ML",MenuBar:"MNB",MenuBar_Item:"MNB_I",MenuBar_End:"MNB_END",MessageBar:"MB",MessageBar_Link:"MB_LNK",MeltingGroup:"MG",MeltingGroup_End:"MG_END",NavigationList:"NL",NavigationList_Item:"NL_I",NavigationList_Group:"NL_G",NavigationList_Personalize:"NL_P",NavigationList_End:"NL_END",PageHeader:"PH",PageHeaderEnd:"PH_END",Paginator:"PG",Paginator_Button:"PG_B",Paginator_InputField:"PG_I",Paginator_Menu:"PG_MNU",PatternContainerContentItem:"PC",PatternContainerIconButton:"PCI",PatternContainerIconButton_Collapse:"PCI_C",PatternContainerIconButton_Expand:"PCI_E",PatternContainerIconButton_Min:"PCI_M",PatternContainerTab:"PCTAB",PatternContainerTab_Item:"PCTAB_I",PatternContainerTab_End:"PCTAB_END",PatternContainerTab_Menu:"PCTAB_MNU",PatternContainerTitle:"PCTIT",PatternContainerTitle_End:"PCTIT_END",PatternContainerTitle_Menu:"PCTIT_MNU",PatternContainerSequence:"PCSEQ",PatternContainerSequence_Item:"PCSEQ_I",PatternContainerSequence_End:"PCSEQ_END",PatternContainerSequence_Menu:"PCSEQ_MNU",PhaseIndicator:"PHI",PhaseIndicator_Step:"PHI_STN",PopIn:"PI",PopIn_CloseButton:"PI_CLB",PopIn_End:"PI_END",PopupMenu_Item:"POMN_I",PopupMenu_SubMenu:"POMN_ISMNU",PopupTrigger:"POTRG",ProgressIndicator:"PRI",RadioButton:"R",RadioButtonGroup:"RG",RadioButtonGroup_End:"RG_END",RasterLayout:"RL",RatingIndicator:"RI",RoadMap:"RM",RoadMap_RoundTripStep:"RM_SUB",RoadMap_Step:"RM_STN",RoadMap_RoundtripClosed:"RM_RTCLO",RoadMap_RoundtripStart:"RM_RTSTR",RoadMap_RoundtripEnd:"RM_RTEND",ScrollContainer:"SC",ScrollContainer_End:"SC_END",SapTable:"ST",SapTable_Header1:"ST_HDR1",SapTable_Header2:"ST_HDR2",SapTable_Header3:"ST_HDR3",SapTable_SortButtonAsc:"ST_SRTBTNA",SapTable_SortButtonDesc:"ST_SRTBTND",SapTable_SelectionCell:"ST_SC",SapTable_SelectionColumn:"ST_SCOL",SapTable_SelectionMenu:"ST_SMNU",SapTable_FilterButton:"ST_FBTN",SapTable_End:"ST_END",SapTable_Cell:"ST_C",SapTable_EmptyRowCell:"ST_ER",SectionHeader:"SH",SelectableLinkBar:"SLB",SingleColumnLayout:"SL",TableView:"TBV",TabStrip:"TS",TabstripItem:"TSITM",TextBar:"TXB",TextEdit:"TE",TextView:"TV",ToggleLink:"TGL",Toolbar:"T",Toolbar_ToggleButton:"T_BTN",Toolbar_End:"T_END",ToolbarInputField:"TI",ToolbarLink:"TLN",Tray:"TY",Tray_Button:"TY_BTN",Tray_Menu:"TY_MNU",Tray_End:"TY_END",Tree:"TR",Tree_Folder:"TR_F",Tree_Leaf:"TR_L",TriStateCheckBox:"TRI",ValueComparison:"VC",ViewSwitch:"VS"};
function sapUrMapi_checkKey(e,eType,arrKeys) {
	if (e.type==eType) {
		for (var i=0;i<arrKeys.length;i++) {
			if (e.which==parseInt(arrKeys[i])) {
				e.returnValue=false;
				return true;
			}
		}
	}
	return false;
}
var ur_context={suppressFocus:false};
function sapUrMapi_suppressFocus(){
	ur_context.suppressFocus=true;
}
function sapUrMapi_triggerFocus(sId) {
  ur_callDelayed("sapUrMapi_focusElement('" + sId.replace(/\\/g, "\\\\").replace(/\'/g, "\\'") + "', true)", 0);
}
function sapUrMapi_findFirstFocus(o,bLast) {
  if (o && o.style && (o.style.display == "none" || o.style.visibility == "hidden")) return null;
  var oChild=o;
  if (o==null) return null;
  if (sapUrMapi_Focus_canFocus(o)) {
		return o;
  }
  
  if (ur_system.direction=="rtl" || bLast) {
   	for (var i=oChild.childNodes.length-1;i>=0;i--) {
      var oTmp=oChild.childNodes.item(i);
      if (oTmp && oTmp.style && (oTmp.style.display=="none" || oTmp.style.visibility=="hidden")) continue;
	  if (sapUrMapi_Focus_canFocus(oTmp)) {
	    return oTmp;
      }
      var oTmp=sapUrMapi_findFirstFocus(oTmp,bLast);
      if (oTmp!=null) {
        return oTmp;
      }
    }  
  } else {    
    for (var i=0;i<oChild.childNodes.length;i++) {
      var oTmp=oChild.childNodes.item(i);
      if (oTmp && oTmp.style && (oTmp.style.display=="none" || oTmp.style.visibility=="hidden")) continue;
	  if (sapUrMapi_Focus_canFocus(oTmp)) {
	    return oTmp;
      }
      var oTmp=sapUrMapi_findFirstFocus(oTmp);
      if (oTmp!=null) {
        return oTmp;
      }
    }  
  }
  return null;
}
function ur_focus(o) {
	if (!ur_context.suppressFocus) {
		try {
				o.focus();
		} 
		catch (ex){
			}
	} else {
		ur_context.suppressFocus=false;
	}
}
function sapUrMapi_focusElement(sId, bTriggered) {
  var bErr=false;
  if (ur_context.suppressFocus) {
    window.addEventListener("onfocus",sapUrMapi_focusElement,true);
    ur_context.setfocusto = sId;
    ur_context.triggered = bTriggered;
    ur_context.suppressFocus = false;
    return;
  } 
  if (ur_context.setfocusto != null) {
    sId = ur_context.setfocusto;
    bTriggered = ur_context.triggered;
    window.removeEventListener("onfocus",sapUrMapi_focusElement,true);
    ur_context.setfocusto = null;
    ur_context.triggered = false;
  }
  
  
  if(ur_context.setfocusto == null && typeof(sId)=="object" && sId.type=="focus"){
      window.removeEventListener("focus",sapUrMapi_focusElement);
      return;
  }
	if(sId == "") return;
	
		if( typeof(sId)=="string" && sapUrMapi_SapTable_bIsMatrixId(sId)){
			sapUrMapi_SapTable_focusMatrixItem(sId);
			return;
		}
	
	  var o;
	  if (typeof(sId)=="string") {
	    o=ur_get(sId);
	  } else {
	    o=sId;
	  }
	  if(o == null) return;
	     var sType=sapUrMapi_getControlTypeFromObject(o);
	  
		if (sType=="I" && o.tagName=="INPUT" && bTriggered && ( o.getAttribute('type') == "text" || o.getAttribute('type') == "password" )) {
			if(_ur_cursorInfo && _ur_cursorInfo.id == sId ) {
				var htmlRef = document.getElementById(_ur_cursorInfo.id);
				if(htmlRef) ur_setCursorPos(htmlRef, _ur_cursorInfo.pos);
				  else {
				  	ur_focus(o);
					o.select();
					}
				
			 }
			 else{
			o.select(); ur_focus(o); 
			_ur_cursorInfo = null; 
			}
		}
		if (sType=="TE" && bTriggered) {
			if(_ur_cursorInfo && _ur_cursorInfo.id == sId ) {
				var htmlRef = document.getElementById(_ur_cursorInfo.id);
				if(htmlRef) ur_setCursorPos(htmlRef, _ur_cursorInfo.pos);
			  else ur_setCursorPos(htmlRef,o.value.length);
			 }
			 else{
			   ur_setCursorPos(o,o.value.length); 
			  _ur_cursorInfo = null; 
			}
		}
		if ((sType=="TR")&&((o.className.indexOf("urTreN")>-1)||(o.className.indexOf("urTreExp")>-1))) {
		  sapUrMapi_Tree_focusNode(sapUrMapi_getRootControl(o).id,o.id.split("-")[0],true);
		} else if ((sType=="TS")&&
	            (((o.className.indexOf("urTbsTxt")>-1) || ((o.firstChild!=null)&&(o.firstChild.className.indexOf("urTbsTxt")>-1))))){
		  	sapUrMapi_TabStrip_focusItem(sapUrMapi_getRootControl(o).id,parseInt(o.id.split("-")[2]));
		} else if (sType=="I" || sType=="TE") { 
		   
		} else if (sType=="SLB") {
		    if (o.id.indexOf("-itm-")>-1) {
			    sapUrMapi_SelectableLinkBar_scroll(sapUrMapi_getRootControl(o).id,o.id);
			    sapUrMapi_setTabIndex(o,0);
			  }
			  try {
			   ur_focus(o);
			  } catch (ex){bErr=true};
		} else if ((sType=="PHI")&&(o.id.indexOf("-itm-")>-1)) {
		    sapUrMapi_PhaseIndicator_focusItem(sapUrMapi_getRootControl(o).id,"-itm-0",o.id.substring(o.id.indexOf("-")));
		} else if ((sType=="RM")&&(o.id.indexOf("-itm-")>-1)) {
		    sapUrMapi_RoadMap_setFocus(sapUrMapi_getRootControl(o).id,"-itm-0",o.id.substring(o.id.indexOf("-itm-")+5));
		} else if (sType=="ST") {
		  var oOrgFocusObj = o;
		  
		  if ((o.firstChild!=null) && (o.firstChild.tagName=="BUTTON") && (o.firstChild.className.indexOf("Ico")>-1)) {
		    o=o.firstChild;
		  }
		  o=sapUrMapi_findFirstFocus(o);
		  
		  if(!o && oOrgFocusObj) {
		  	var oElemToFocus = null;
		  	
		  	
		  	if(!oElemToFocus && oOrgFocusObj.getAttribute("tp") == "HIC" || oOrgFocusObj.getAttribute("tp") == "C") {
		  		oElemToFocus = oOrgFocusObj.firstChild;
		  	}
		  	
		  	
		  	if(!oElemToFocus && oOrgFocusObj.tagName == "TH" && oOrgFocusObj.id ) {
		  		var oContentContainer = document.getElementById(oOrgFocusObj.id + "-content");
		  		if(oContentContainer && oContentContainer.getAttribute("tp") &&  oContentContainer.getAttribute("tp").indexOf("HDR") == 0) {
		  			oElemToFocus = oContentContainer;
		  		}
		  		
		  	}
		  	
		  	if(oElemToFocus) {
					sapUrMapi_setTabIndex(oElemToFocus,"0");
					sapUrMapi_setTabIndexAutoReset(oElemToFocus);
					ur_focus(oElemToFocus);
					return;
		  	}
		  }
		    
		  try {
		   ur_focus(o);
		  } catch (ex){bErr=true};
		  
		} else if (sType=="CB") {
		  o=ur_get(sapUrMapi_getRootControl(o).id);
			if (o.disabled==true) { o.disabled=false;ur_focus(o);o.disabled=true;}
			else ur_focus(o);
		} else if (sType=="C") {
			o=ur_get(o.id.split("-")[0]);
			if (o.disabled==true) {o=ur_get(o.id.split("-")[0]+"-img");}
			ur_focus(o);
		} else if (sType=="R") {
			o=ur_get(o.id.split("-")[0]);
		  if (!o.checked) {
				var oInputGrp  = document.getElementsByName(o.name);
				for (var i=0;i<oInputGrp.length;i++){
				  if (oInputGrp[i].checked) {
				    o=oInputGrp[i];
						break;
				  } 
				}
		  }
		  try {
			 if (o.disabled==true) {o=ur_get(o.id.split("-")[0]+"-img");}
		   ur_focus(o);
		  } catch (ex){bErr=true};
		} else if (sType=="RG" && o.id.indexOf("skipend")<-1) {
		  o=sapUrMapi_findFirstFocus(o);
			if (o!=null && !o.checked) {
				var oInputGrp  = document.getElementsByName(o.name);
				for (var i=0;i<oInputGrp.length;i++){
				  if (oInputGrp[i].checked) {
				    o=oInputGrp[i];
				  } 
				}
		  }
		  o=ur_get(o.id.split("-")[0]);
		  try {
		   ur_focus(o);
		  } catch (ex){bErr=true};
		} else {
			if (typeof(sId)=="string") {
				if (ur_get(sId+"-r")!=null) {
					sapUrMapi_focusElement(sId+"-r");
				}
			}
			o=sapUrMapi_findFirstFocus(o);
			if (o==null) return;
		  try {
		   ur_focus(o);
		  } catch (ex){bErr=true};
	  }
	  if (!b508Refocus) {
	   if (bErr) {
	     sapUrMapi_Focus_hideFocusRect();
	   } else {
	     sapUrMapi_Focus_showFocusRect(o);
	   }
	  }
	  return true;
	
}
var b508Refocus=false;
function sapUrMapi_refocusElement(sId){
if (ur_system.is508) {
	  oSpan=ur_get("ur-accfocus");
	  if (oSpan==null) {
	    oSpan=document.createElement("span");
	    oSpan.setAttribute("id","ur-accfocus");
	    oSpan.style.position="absolute";
	    document.getElementsByTagName("BODY").item(0).appendChild(oSpan);
	    oSpan=ur_get("ur-accfocus");
	  }
	  oSpan.tabIndex="2";
	  b508Refocus=true;
	  oSpan.focus();
	  if(typeof(sId)=="object") sId.focus();
	  else ur_get(sId).focus();
	  b508Refocus=false;
	  oSpan.tabIndex="-1";
	}
};
function sapUrMapi_getAbsolutePosition (obj) {
  var position = { top: 0, left: 0, right: 0};  
	var obj2=obj;
	while (obj && obj.tagName!="BODY") {
	  try { 
	    var s=document.defaultView.getComputedStyle(obj,"");
			if (s.getPropertyValue("overflow")!="visible") {
				position.left-=obj.scrollLeft;
				position.top-=obj.scrollTop;
			}
	  } catch(ex) {}
	  if (obj==obj2) {
	    position.left += obj.offsetLeft;
	    position.top  += obj.offsetTop;
		  obj2=obj.offsetParent;
	  }
	  obj = obj.parentNode;
	}
  return position;
}
function sapUrMapi_getRootControl(o) {
	var oR=o;
	try {
		
	  if (oR.id.indexOf("-")>-1) {
	    oR=ur_get(o.id.split("-")[0]);
	  }
	  if(oR.getAttribute("ct")!=null) return oR;
	  
	  oR=o;
	  while (oR.getAttribute("ct")==null) {
	    if (oR.tagName=="BODY") return "";
	    oR=oR.parentNode;
	  }
	  return oR;
	} catch (ex) {return ""};
}
function sapUrMapi_isChildOfControl(oObj,sControlType) {
  while (oObj.tagName!="BODY") {
    if (sapUrMapi_getControlTypeFromObject(oObj)==sControlType) return oObj;
    oObj=oObj.parentNode;
  }
  return null;
}
function sapUrMapi_getControlTypeFromObject(o) {
	try {
	  var sControlType="";
	  while (o.getAttribute("ct")==null) {
	    if (o.tagName=="BODY") return "";
	    o=o.parentNode;
	  }
	  return o.getAttribute("ct");
	} catch (ex) {return ""};
}
function sapUrMapi_getControlType(sId) {
	try {
	  aId=sId.split("-");
	  var sCt=ur_get(aId[0]).getAttribute("ct");
	  if(sCt==null) sCt=ur_get(aId[0]+"-r").getAttribute("ct");
	  return sCt;
	} catch (ex) {return ""};
}
function sapUrMapi_triggerClick(e,arrKeys, o)
{
  if(sapUrMapi_checkKey(e,"keydown",arrKeys) || sapUrMapi_checkKey(e,"keypress",arrKeys)){
    try{
      if (o) {
      	o.click(e); 
      } else {
      	e.target.click(); 
      }
    }
    catch(ex){};
  }
}
function ur_cancelBubble(oEvt){
	oEvt.stopPropagation();
}
function getLanguageText(sMain,arrChildTxt) {
	 var s;
	 try {
	 	s= ur_txt[ur_language][sMain];
	 	if (!arrChildTxt) return s;
	 	for (var i=0;i<arrChildTxt.length;i++) {
	 		 if (ur_txt[ur_language][arrChildTxt[i]]) {
	 	  	 s= s.replace("{"+i+"}",ur_txt[ur_language][arrChildTxt[i]]);
	 	 	} else {
	 	  	 s= s.replace("{"+i+"}",arrChildTxt[i]);
	 	 	}
	 	}
	} catch(e) {
		s="";
	}
	 return s;
}
function ur_get(sId) {
  return document.getElementById(sId);
}
function ur_getAttD(o,sAtt,def) {
  if (!o) return def;
  var s=o.getAttribute(sAtt);
  if (s!=null && s!="") return s;
  else return def;
}
var ur_arr_FrameCollector = new Array();
function sapUrMapi_toggleIframes(inElement,bShow) {
  var arr = sapUrMapi_collectIFrames(inElement);
  for (var i=0;i<arr.length;i++) {
  	if (!bShow) {
  		if ((arr[i].getAttribute("oldheight")=="")||(!arr[i].getAttribute("oldheight"))) {
  			arr[i].setAttribute("oldheight",arr[i].offsetHeight);
  		}
  		if ((arr[i].getAttribute("hidelevel")=="")||(!arr[i].getAttribute("hidelevel"))) {
  		  arr[i].setAttribute("hidelevel",0);
  		}
  		arr[i].setAttribute("hidelevel",parseInt(arr[i].getAttribute("hidelevel"))+1);
 		  arr[i].style.height="0px";
    } else {
  		if ((arr[i].getAttribute("hidelevel")=="")||(!arr[i].getAttribute("hidelevel"))) {
  		  arr[i].setAttribute("hidelevel",1);
  		}
  		arr[i].setAttribute("hidelevel",parseInt(arr[i].getAttribute("hidelevel"))-1);
  		if (arr[i].getAttribute("hidelevel")==0) {
	  		if ((arr[i].getAttribute("oldheight")!="")||(arr[i].getAttribute("oldheight"))) {
	  		  arr[i].style.height=sapUrMapi_sAddUnit( arr[i].getAttribute("oldheight") , "px" );
	  		}
	  	}
    }
  }
}
function sapUrMapi_collectIFrames(el) {
  ur_arr_FrameCollector = new Array();
  if (el.innerHTML.indexOf("iframe")>-1) {
    sapUrMapi_collectIFramesRec(el);
  }
  return ur_arr_FrameCollector;
}
function sapUrMapi_collectIFramesRec(el) {
	  if (el.childNodes) {
	    var i=0;
	    while ( i<el.childNodes.length ) {
	      var o=el.childNodes.item(i)
	      if (o.childNodes) sapUrMapi_collectIFramesRec(o);
	      if (o.tagName=="IFRAME") ur_arr_FrameCollector[ur_arr_FrameCollector.length]=o;
	      i++;
	    }
	  }
}
function sapUrMapi_scrollRight(elem)
{
  return 0;
}
function sapUrMapi_clientRight(elem)
{
  return 0;
}
function sapUrMapi_scrollBarWidth(elem)
{
  return 0;
}
function sapUrMapi_offsetRight(elem)
{
  return 0;
}
function sapUrMapi_clientXtoRight(docBody, e)
{
  return 0;
}
function sapUrMapi_posLeftCorrectionForRTL(elem)
{
  return 0;
}
function sapUr_Scroll_scrollToPosition(sId,x,y) {
	var ct = sapUrMapi_getControlType(sId);
	try{
	if(ct!="")
	{
		if(ct=="G" || ct=="TY")
			sapUrMapi_scrollToPosition(ur_get(sId+"-bd"),x,y);
		else
		if(ct =="TS")
		{
			var iSelIdx = ur_get(sId).getAttribute('sidx'); 
			var oCont = ur_get(sId+"-tbar-cnt-"+iSelIdx); 
			if(!oCont) 
			{
				oCont = ur_get(sId+"-bd-"+iSelIdx); 
			}
			sapUrMapi_scrollToPosition(oCont,x,y);
		}
		else
		{
		    sapUrMapi_scrollToPosition(ur_get(sId),x,y);
		}
	}
	}catch(ex) {};
	
}
function sapUrMapi_scrollToPosition(o,x,y) {
	o.scrollTop=y;
    o.scrollLeft=x;
}
function sapUrMapi_getScrollLeft(o) {
  return o.scrollLeft;
}
function sapUrMapi_getScrollTop(o) {
  return o.scrollTop;
}
function sapUr_Scroll_scrollLeft(sId) {
	
	var ct = sapUrMapi_getControlType(sId);
	try{
	if(ct!="")
	{
		if(ct=="G" || ct=="TY")
			return ur_get(sId+"-bd").scrollLeft;
		else
		if(ct =="TS")
		{
			var iSelIdx = ur_get(sId).getAttribute('sidx'); 
			var oCont = ur_get(sId+"-tbar-cnt-"+iSelIdx); 
			if(!oCont) 
			{
				oCont = ur_get(sId+"-bd-"+iSelIdx); 
			}
			return oCont.scrollLeft;
		}
		else
		{
		  return ur_get(sId).scrollLeft;
		}
	}
	}catch(ex) {};
	
 
}
function sapUr_Scroll_scrollRight(sId) {
	var o = ur_get(sId);
	return sapUrMapi_scrollRight(o);
}
function sapUr_Scroll_scrollTop(sId) {
	
	var ct = sapUrMapi_getControlType(sId);
	try{
	if(ct!="")
	{
		if(ct=="G" || ct=="TY")
			return ur_get(sId+"-bd").scrollTop;
		else
		if(ct =="TS")
		{
			var iSelIdx = ur_get(sId).getAttribute('sidx'); 
			var oCont = ur_get(sId+"-tbar-cnt-"+iSelIdx); 
			if(!oCont) 
			{
				oCont = ur_get(sId+"-bd-"+iSelIdx); 
			}
			return oCont.scrollTop;
		}
		else
		{
		  return ur_get(sId).scrollTop;
		}
	}
	}catch(ex) {};
}
function ur_Scrl_setScrlPosById(sId,oPos)
{
	sapUr_Scroll_scrollToPosition(sId,oPos.x,oPos.y);
}
function ur_Scrl_getScrlPosById(sId)
{
	var oPos = new Object();
	oPos.x = sapUr_Scroll_scrollLeft(sId);
	oPos.y = sapUr_Scroll_scrollTop(sId);
	return oPos;
}
function sapUrMapi_initLinkStatus() {
  var oNodes = document.getElementsByTagName("A");
  for (var n=0;n<oNodes.length;n++) {
    if (oNodes[n].href.indexOf("javascript:void")>-1) {
      oNodes[n].onmouseover=sapUrMapi_resetStatus;
      oNodes[n].onfocus=sapUrMapi_resetStatus;
    }
  }
}
function sapUrMapi_resetStatus() {
  window.status="";
  
}
function sapUrMapi_Resize_Handler(sId, sHandler) {
	this.sId = sId;
	this.sHandler = sHandler;
}
var sapUrMapi_Resize_Registry = new Array();
var sapUrMapi_Resize_Width = null;
var sapUrMapi_Resize_Timeout = null;
var sapUrMapi_Resize_Set = false;
function sapUrMapi_Resize_Capture() {
	if (sapUrMapi_Resize_Set == false) {
		window.addEventListener("resize", sapUrMapi_Resize_CheckSize, false);
		sapUrMapi_Resize_Set = true;
	}
}
function sapUrMapi_Resize_AddItem(sId, sHandler) {
	
	sapUrMapi_Resize_Capture();
	
	if (!sapUrMapi_Resize_Registry[sId] || sapUrMapi_Resize_Registry[sId]) {
		sapUrMapi_Resize_Registry[sId] = new sapUrMapi_Resize_Handler(sId, sHandler);
	}
}
function sapUrMapi_Resize_CheckSize() {
	
	if(typeof(sapUrMapi_Resize_Timeout)=="undefined")  return; 
	
	if (sapUrMapi_Resize_Timeout == null && sapUrMapi_Resize_Width == null) {
		sapUrMapi_Resize_Width = document.body.offsetWidth;
		sapUrMapi_Resize_Timeout = window.ur_callDelayed("sapUrMapi_Resize_CheckSize()", 50);
		return;
	}
	if (sapUrMapi_Resize_Width != document.body.offsetWidth) {
		sapUrMapi_Resize_Width = document.body.offsetWidth;
		sapUrMapi_Resize_Timeout = window.ur_callDelayed("sapUrMapi_Resize_CheckSize()", 50);
	}
	else {
	    window.clearTimeout(sapUrMapi_Resize_Timeout);
		sapUrMapi_Resize_Timeout = null;
		sapUrMapi_Resize_Resize();
		sapUrMapi_Resize_Width = null;
	}
}
function sapUrMapi_Resize_Resize() {
	for (var ctl in sapUrMapi_Resize_Registry) {
		if (ctl.indexOf("_") == 0) {continue;}
		if (sapUrMapi_Resize_Registry[ctl] != null) {
			eval(sapUrMapi_Resize_Registry[ctl].sHandler);
		}
	}
}
function sapUrMapi_Create_Handler(sId, sHandler) {
	this.sId = sId;
	this.sHandler = sHandler;
}
var sapUrMapi_Create_Registry = new Array();
var sapUrMapi_Create_Apply = new Array();
var sapUrMapi_Create_Set = false;
var sapUrMapi_Create_Timeout = null;
var sapUrMapi_Create_Doc = "";
function sapUrMapi_Create_Capture() {
	if (!ur_system.createTimeFrameworkControlled && !sapUrMapi_Create_Set) {
		
		sapUrMapi_Create_Doc = document.body.innerHTML;
		sapUrMapi_Create_Timeout = window.ur_callDelayed("sapUrMapi_Create_CreateItems()", 150);
		sapUrMapi_Create_Set = true;
	}
}
function sapUrMapi_Create_AddItem(sId, sHandler,bApply) {
	
	sapUrMapi_Create_Capture();
	
	if(bApply)
		sapUrMapi_Create_Apply[sId] = new sapUrMapi_Create_Handler(sId, sHandler);
	else	
		sapUrMapi_Create_Registry[sId] = new sapUrMapi_Create_Handler(sId, sHandler);
}
function sapUrMapi_Create_CreateItems() {
	
	var doc = document.body.innerHTML;
	if (!ur_system.createTimeFrameworkControlled && doc != sapUrMapi_Create_Doc) {
		sapUrMapi_Create_Doc = doc;
		sapUrMapi_Create_Timeout = window.ur_callDelayed("sapUrMapi_Create_CreateItems()", 150);
	}
	else {
		window.clearTimeout(sapUrMapi_Create_Timeout);
		sapUrMapi_Create_Timeout = null;
		for (var ctl in sapUrMapi_Create_Registry) {
			if (ctl.indexOf("_") == 0) {continue;}
			if (sapUrMapi_Create_Registry[ctl] != null) {
				eval(sapUrMapi_Create_Registry[ctl].sHandler);
			}
		}
		sapUrMapi_Create_Registry = new Array();
		
		for (var ctl in sapUrMapi_Create_Apply) {
			if (ctl.indexOf("_") == 0) {continue;}
			if (sapUrMapi_Create_Apply[ctl] != null) {
				eval(sapUrMapi_Create_Apply[ctl].sHandler);
			}
		}
		sapUrMapi_Create_Apply = new Array();				
	}
}
function sapUrMapi_init() {
	if (ur_system.mimepath == null) ur_system.mimepath = ur_system.stylepath+"common/";
	if (ur_system.emptyhoverurl == null || ur_system.emptyhoverurl == "") ur_system.emptyhoverurl = ur_system.mimepath+"emptyhover.html";
	if (ur_language==null || ur_language=="") {
		var oScript=ur_get("ur_lang_js");
		if (!oScript) {
			var scripts=document.getElementsByTagName("SCRIPT");
			for (var i=0;i<scripts.length;i++) 
				if (scripts[i].src.indexOf("urMessageBundle_")>-1) {
					oScript=scripts[i];
					break;
				}
		}
		if (oScript) {
			var url = oScript.src,
			    beginPos = url.indexOf("urMessageBundle_"),
			    endPos = url.indexOf(".js", beginPos);
			var oParent = oScript.parentNode;
			oParent.removeChild(oScript);
			oScript = document.createElement("script"); 
			oScript.src = url.substring(0,beginPos) + "urMessageBundle" + url.substring(endPos);
			oParent.appendChild(oScript);
      }
	}
  oPopup=null;
  oDatePicker=null;
  sapUrMapi_Resize_Registry=new Array();
  sapUrMapi_PcTabSeq_Registry = new Array();
  _ur_POMN = {all:new Array(),menus:new Array(),level:0};
  _ur_tables=new Array();
  _ur_CAL=new Array();
  ur_SCB_arr = new Array();
}
function ur_evtSrc(e){return e.target;}
function sapUrMapi_cleanUp() {
  
}
function sapUrMapi_getCurrentStyle(o,sStAt){
	var s=document.defaultView.getComputedStyle(o,"").getPropertyValue(sStAt);
	return s;
}
	
function ur_checkFocussedUiElement(htmlRef, browserEvent) {
}
var _ur_tableInputFoc;
function ur_setEditCellColor(o) {
  ur_removeEditCellColor();
  var sCt=sapUrMapi_getControlTypeFromObject(o);
  if (sCt=="I" || sCt=="CB") { 
		if (ur_getAttD(o,"st","").indexOf("r")==-1 && 
		    ur_getAttD(o,"st","").indexOf("d")==-1 && 
				sapUrMapi_isChildOfControl(o,"ST")) {
			var oCell=o;
			while (oCell.tagName!="TD" || oCell.className.indexOf("urST3TD")==-1) {
				oCell=oCell.parentNode;
				
				if (oCell.tagName=="TR" && oCell.firstChild.firstChild!=o) { oCell=null;break;}
			}
			if (oCell!=null && oCell!=o) {
				oCell.className=oCell.className+" urSTFoc";
				_ur_tableInputFoc=oCell;
			}
		}
	}
}
function ur_removeEditCellColor() {
	if (_ur_tableInputFoc!=null) {
	  try {
	    _ur_tableInputFoc.className=_ur_tableInputFoc.className.replace(" urSTFoc","");
	  } catch (ex) {}
	  _ur_tableInputFoc=null;
	}  
}
function ur_callDelayed(sFunc,ms) {
  return setTimeout("try{"+sFunc+"}catch(ex){}",ms);
}
function ur_getPrevItm(o,sAt){
		if(!o || !sAt) return null;
		while(ur_getAttD(o,sAt,"")==""){ 
			o=o.previousSibling;
			if (!o) return null;
		}
	return o;
}
function ur_getNxtItm(o,sAt){
	if(!o || !sAt) return null;
	while(ur_getAttD(o,sAt,"")==""){ 
			o=o.nextSibling;
			if (!o ) return null;
		}
	return o;
}
function ur_focus_Itm(oNew,oOld){
		sapUrMapi_setTabIndex(oOld,-1);
		sapUrMapi_setTabIndex(oNew,0);
		ur_focus(oNew);
}
function sapUrMapi_relaxDomain(integrated, standalone, maxrelax) {
  var hostname = location.hostname,
      nameparts = hostname.split("."),
      partslength = nameparts.length,
      reference = "parent";
  
  
  if (/^(\d|\.)+$/.test(hostname)) return true;
  
  if (partslength == 1) return true;
  
  
  if (standalone == null) standalone = "minimal";
  if (integrated == null) integrated = "auto";
  if (maxrelax == null) {
    
    if (nameparts[partslength - 1].length == 2 &&
        nameparts[partslength - 2].length == 2) {
      maxrelax = 3;
    } else {
      maxrelax = 2;
    }
  }
  
  if (partslength <= maxrelax) return true;
  
  if (standalone == "auto") standalone = "minimal";
  if (window[reference] == window) reference = "opener";
  if (window[reference] == null) method = standalone;
  else method = integrated;
  
  switch (method) {
    case "none": 
      return true;
      break;
    
    case "auto": 
      try {
        window[reference].location.href;
        return true;
      }
      catch (e) {};
      var testdomain;
      for (var i = 0; i <= partslength - maxrelax; i++) {
        testdomain = nameparts.slice(i).join(".");
        try {
          document.domain = testdomain;
          window[reference].location.href;
          return true;
        }
        catch (e) {};
      }
      return false;
      break;
    case "minimal": 
      try {
        document.domain = nameparts.slice(1).join(".");
        return true;
      }
      catch (e) {
        return false;
      }
      break;
    case "maximal": 
      try {
        document.domain = nameparts.slice(partslength - maxrelax).join(".");
        return true;
      }
      catch (e) {
        return false;
      }
      break;
    default:
      alert("Unknown relaxation method: " + method);
  }
  return false;
}
ur_onITSDynproFocus = null;
function ur_handle_onITSDynproFocus(oEvt) {
	
	if (ur_onITSDynproFocus) {
		var sId = sapUrMapi_getRootControl(oEvt.target).id;
		if (sId) {
			ur_onITSDynproFocus(sId.split("-")[0]);
		}
	}
}
function ur_removeDynproFocus() {
		document.removeEventListener("focus",ur_handle_onITSDynproFocus);
}
function ur_attachDynproFocus(pFunction) {
	ur_onITSDynproFocus = pFunction;
	document.addEventListener("focus",ur_handle_onITSDynproFocus,false);
}
function ur_getNextHtmlParentByAttribute(oDomRef, sAttributeName){
	if (oDomRef) {
		var oCurDomRef = oDomRef;
		for(var i=10; i>0; i--) {
			if(oCurDomRef.tagName == "BODY") return null;
			
			if(oCurDomRef.getAttribute(sAttributeName)) return oCurDomRef;
		
			if(oCurDomRef.parentNode) oCurDomRef=oCurDomRef.parentNode;
			else return null;
		}
	}
	return null;
};
function ur_getNextHtmlParentByTagName(oDomRef, sTagName){
	if (oDomRef) {
		var oCurDomRef = oDomRef;
		for(var i=10; i>0; i--) {
			if(oCurDomRef.tagName == "BODY") return null;
			
			if(oCurDomRef.tagName == sTagName) return oCurDomRef;
		
			if(oCurDomRef.parentNode) oCurDomRef=oCurDomRef.parentNode;
			else return null;
		}
	}
	return null;
};
function ur_attachEvent(oDomRef, sEventName, fEventHandler) {
	if (oDomRef.attachEvent) {
		oDomRef.attachEvent("on" + sEventName, fEventHandler);
	}
	else if (oDomRef.addEventListener) {
		oDomRef.addEventListener(sEventName, fEventHandler);
	}
}
function ur_detachEvent(oDomRef, sEventName, fEventHandler) {
	if (oDomRef.detachEvent) {
		oDomRef.detachEvent("on" + sEventName, fEventHandler);
	}
	else if (oDomRef.removeEventListener) {
		oDomRef.removeEventListener(sEventName, fEventHandler);
	}
}
function sapUrMapi_setTabIndex(oElem,sVal) {
	if(oElem.getAttribute("ti")) {
		oElem.setAttribute("orgTi",oElem.getAttribute("ti"));
	}	
  oElem.tabIndex=sVal;
  oElem.setAttribute("ti",sVal);
}
function sapUrMapi_resetTabIndex(oElem) {
	if (oElem.type == "blur") oElem = this;
	if(!oElem) oElem=this;
	
	if(oElem.getAttribute("orgTi")) {
		var sVal = oElem.getAttribute("orgTi");
		oElem.tabIndex=sVal;
		oElem.setAttribute("ti",sVal);
		if(oElem.onblur == sapUrMapi_resetTabIndex)
			oElem.onblur = null;
		oElem.setAttribute("orgTi",null);
	}	else {
  	oElem.tabIndex="-1";
  	oElem.setAttribute("ti",null);
	}
}
function sapUrMapi_setTabIndexAutoReset(oElem) {
	if(!oElem.onblur)
		oElem.onblur = sapUrMapi_resetTabIndex;
}
function sapUrMapi_DOM_bContains(oDomRefContainer, oDomRefChild) {
	var oDomRef = oDomRefChild;
	
	if(oDomRefContainer == oDomRefChild) return true;
	
	while(oDomRef != null) {
		if(oDomRef == oDomRefContainer) return true;
		oDomRef = oDomRef.parentNode;
	}
	
	return false;
};
function sapUrMapi_triggerDefaultButton(sId,oEvt)
{
	var oR=ur_get(sId);
	var dbId = oR.getAttribute("dbid");
	var dbtn = ur_get(dbId);
	if(dbId!=null && ur_get(dbId).parentNode!=null)
	{
		
		var currentFocus = ur_EVT_src(oEvt)
		var sCt=sapUrMapi_getControlTypeFromObject(currentFocus);
		switch (sCt) 
		{
			case "": 
			case "B":
			case "TB":
			case "TE":
			case "TGL":
			case "LN":
			    sapUrMapi_DBTN_hideDBtn(); 
				break;
			case "TY":
				var sTp = currentFocus.getAttribute("tp");
			    if (sTp != null)
			    {
					if(sTp=="BTN" || sTp=="MNU")
					sapUrMapi_DBTN_hideDBtn(); 
			    }
				else
			    {
					sapUrMapi_defaultButtonClick(dbtn);
				}
				break;
			case "T":
				var sTp = currentFocus.getAttribute("tp");
			    if (sTp != null)
			    {
					if(sTp=="BTN")
					sapUrMapi_DBTN_hideDBtn(); 
			    }
				else
				{
					sapUrMapi_defaultButtonClick(dbtn);
				}
				break;
			case "I":
			case "TI":
				if(currentFocus.onkeypress!=null)
					sapUrMapi_DBTN_hideDBtn(); 
				else
				{
					sapUrMapi_defaultButtonClick(dbtn);
				}
				break;
			default :
			{
				sapUrMapi_defaultButtonClick(dbtn);
			}
				
		}
	}
	else 
	{
		sapUrMapi_DBTN_hideDBtn();
	}
		
}
function sapUrMapi_defaultButtonClick(dbtn)
{
	ur_EVT_fire(dbtn,"ocl",{type:"click",target:dbtn});
}
var ur_logIdx = 0;
function ur_logEvent(a,b,c) {
	var oLog = ur_get("ur-log");
	if (!oLog) {
		var oLog = document.createElement("DIV");
		oLog.id="ur-log";
		document.body.appendChild(oLog);
		oLog.style.position="absolute";
		oLog.style.top="0px";
		oLog.style.left="0px";
		oLog.style.backgroundColor="#fff";
		oLog.style.padding="5px";
	} 
	var o = document.createElement("DIV");
	o.innerHTML = (ur_logIdx++) + "  -  (" + a + "," + b + "," + c + ")";
	oLog.appendChild(o);
}
function ur_findPreviousFocusableElement(o) {
	var oR=o;
	var oN=null;
	var oF=null;
	while(oR!=null && oF==null){
		while(oR!=null && oR.previousSibling==null)
			oR=oR.parentNode;
		if(oR==null)
			break;
		oN=oR.previousSibling;
		while(oN!=null && oF==null){
			oF=sapUrMapi_findFirstFocus(oN,true);
			if(oF==null)
				oN=oN.previousSibling;
		}
		if(oF==null)
			oR=oR.parentNode;
		else
			break;
	}
	return oF;
}
function ur_findNextFocusableElement(o) {
	var oR=o;
	var oN=null;
	var oF=null;
	while(oR!=null && oF==null){
		while(oR!=null && oR.nextSibling==null)
			oR=oR.parentNode;
		if(oR==null)
			break;				
		oN=oR.nextSibling;
		while(oN!=null && oF==null){
			oF=sapUrMapi_findFirstFocus(oN);
			if(oF==null)
				oN=oN.nextSibling;
		}
		if(oF==null)
			oR=oR.parentNode;
		else
			break;
	}
	return oF;
}
function sapUrMapi_bCtrl( oEvent ) {
	if (oEvent==null) return false;
	return sapUrMapi_bIsMacOs() ? oEvent.metaKey : oEvent.ctrlKey;
}
function sapUrMapi_bIsMacOs( ) {
	
	try {
		return window.navigator.userAgent.indexOf("Mac OS")>-1;
	} catch( e ) { 
		return false; 
	}
}
function sapUrMapi_sAddUnit(value, unit ) {
	
	value = value.toString();
	if (!unit) unit = "px";  
		
	if (  (value.lastIndexOf('px') >= value.length-2) ||
				(value.lastIndexOf('em') >= value.length-2) ||  
				(value.lastIndexOf('ex') >= value.length-2) ||
				(value.lastIndexOf('pt') >= value.length-2) ||
				(value.lastIndexOf('%')  >= value.length-1) ) {
		return value;	
	}
	
	if (unit == "px") {
		value = parseInt(value);
	}
	return value + unit;
    
}
function UCF_XSSEncoder() {UCF_XSSEncoder._.UCF_XSSEncoder++;
};UCF_XSSEncoder._={UCF_XSSEncoder:0};
function UCF_XSSEncoder_static_hex(iChar, iLength) {UCF_XSSEncoder._.hex++;
	var sHex = iChar.toString(16);
	if (iLength) {
		while (iLength > sHex.length) {
			sHex = "0" + sHex;
		}
	}
	return sHex;
};UCF_XSSEncoder._.hex=0;UCF_XSSEncoder.hex = UCF_XSSEncoder_static_hex;
UCF_XSSEncoder.rHtml = /[\x00-\x08\x11\x12\x14-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g;
UCF_XSSEncoder.rHtmlReplace = /[\x00-\x08\x11\x12\x14-\x1f\x7f-\x9f]/;
UCF_XSSEncoder.mHtmlLookup = {
	"<": "&lt;",
	">": "&gt;",
	"&": "&amp;",
	"\"": "&quot;"
};
function UCF_XSSEncoder_static_fHtml(sChar) {UCF_XSSEncoder._.fHtml++;
	var sEscaped = UCF_XSSEncoder.mHtmlLookup[sChar];
	if (!sEscaped) {
		if (UCF_XSSEncoder.rHtmlReplace.test(sChar)) {
			sEscaped = "&#xfffd;";
		}
		else {
			sEscaped = "&#x" + UCF_XSSEncoder.hex(sChar.charCodeAt(0)) + ";";
		}
		UCF_XSSEncoder.mHtmlLookup[sChar] = sEscaped;
	}
	return sEscaped;
};UCF_XSSEncoder._.fHtml=0;UCF_XSSEncoder.fHtml = UCF_XSSEncoder_static_fHtml;
function UCF_XSSEncoder_static_encodeHTML(sString) {UCF_XSSEncoder._.encodeHTML++;
	return sString.replace(this.rHtml, this.fHtml); 
};UCF_XSSEncoder._.encodeHTML=0;UCF_XSSEncoder.encodeHTML = UCF_XSSEncoder_static_encodeHTML;
function UCF_XSSEncoder_static_encodeXML(sString) {UCF_XSSEncoder._.encodeXML++;
	return sString.replace(this.rHtml, this.fHtml); 
};UCF_XSSEncoder._.encodeXML=0;UCF_XSSEncoder.encodeXML = UCF_XSSEncoder_static_encodeXML;
UCF_XSSEncoder.rJS = /[\x00-\x2b\x2d\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g;
UCF_XSSEncoder.mJSLookup = {};
function UCF_XSSEncoder_static_fJS(sChar) {UCF_XSSEncoder._.fJS++;
	var sEscaped = UCF_XSSEncoder.mJSLookup[sChar];
	if (!sEscaped) {
		var iChar = sChar.charCodeAt(0);
		if (iChar < 256) {
			sEscaped = "\\x" + UCF_XSSEncoder.hex(iChar, 2);
		} 
		else {
			sEscaped = "\\u" + UCF_XSSEncoder.hex(iChar, 4);
		}
		UCF_XSSEncoder.mJSLookup[sChar] = sEscaped;
	}
	return sEscaped;
};UCF_XSSEncoder._.fJS=0;UCF_XSSEncoder.fJS = UCF_XSSEncoder_static_fJS;
function UCF_XSSEncoder_static_encodeJS(sString) {UCF_XSSEncoder._.encodeJS++;
	return sString.replace(this.rJS, this.fJS); 
};UCF_XSSEncoder._.encodeJS=0;UCF_XSSEncoder.encodeJS = UCF_XSSEncoder_static_encodeJS;
UCF_XSSEncoder.rURL = /[\x00-\x29\x2b\x2c\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g;
UCF_XSSEncoder.mURLLookup = {};
function UCF_XSSEncoder_static_fURL(sChar) {UCF_XSSEncoder._.fURL++;
	var sEscaped = UCF_XSSEncoder.mURLLookup[sChar];
	if (!sEscaped) {
		var iChar = sChar.charCodeAt(0);
		if (iChar < 128) {
			sEscaped = "%" + UCF_XSSEncoder.hex(iChar, 2);
		}
		else if (iChar < 2048) {
			sEscaped = "%" + UCF_XSSEncoder.hex((iChar >> 6) | 192, 2) +
					   "%" + UCF_XSSEncoder.hex((iChar & 63) | 128, 2);
		}
		else {
			sEscaped = "%" + UCF_XSSEncoder.hex((iChar >> 12) | 224, 2) +
					   "%" + UCF_XSSEncoder.hex(((iChar >> 6) & 63) | 128, 2) +
					   "%" + UCF_XSSEncoder.hex((iChar & 63) | 128, 2);
		}
		UCF_XSSEncoder.mURLLookup[sChar] = sEscaped;
	}
	return sEscaped;
};UCF_XSSEncoder._.fURL=0;UCF_XSSEncoder.fURL = UCF_XSSEncoder_static_fURL;
function UCF_XSSEncoder_static_encodeURL(sString) {UCF_XSSEncoder._.encodeURL++;
	return sString.replace(this.rURL, this.fURL); 
};UCF_XSSEncoder._.encodeURL=0;UCF_XSSEncoder.encodeURL = UCF_XSSEncoder_static_encodeURL;
UCF_XSSEncoder.rCSS = /[\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xff\u2028\u2029][0-9A-Fa-f]?/g;
function UCF_XSSEncoder_static_fCSS(sChar) {UCF_XSSEncoder._.fCSS++;
	var iChar = sChar.charCodeAt(0);
	if (sChar.length == 1) {
		return "\\" + UCF_XSSEncoder.hex(iChar);
	}
	else {
		return "\\" + UCF_XSSEncoder.hex(iChar) + " " + sChar.substr(1);
	}
};UCF_XSSEncoder._.fCSS=0;UCF_XSSEncoder.fCSS = UCF_XSSEncoder_static_fCSS;
function UCF_XSSEncoder_static_encodeCSS(sString) {UCF_XSSEncoder._.encodeCSS++;
	return sString.replace(this.rCSS, this.fCSS); 
};UCF_XSSEncoder._.encodeCSS=0;UCF_XSSEncoder.encodeCSS = UCF_XSSEncoder_static_encodeCSS;

//** Context.ie5 **
																																							
var ur_ctx=new Array();
ur_ctx._i=new Array();
ur_ctx.get = function(sId,sKey) { return ur_ctx._i[sId][sKey]; }
ur_ctx.set = function(sId,sKey,sValue) { 
  if (ur_ctx._i[sId]==null) ur_ctx._i[sId]=new Array();
  ur_ctx._i[sId][sKey]=sValue;
}
ur_ctx.write = function() { 
  var s1="";
  for (var x in ur_ctx._i) {
    if (s1!="") s1+=",";
    s1+=x+":{";
    var s2="";
    for (var y in ur_ctx._i[x]) {
      var val=ur_ctx._i[x][y];
      if (s2!="") s2+=",";
      if (typeof(ur_ctx._i[x][y])=="string") val="'"+val+"'";
      s2+=y+":"+val;
    }
    s1+=s2+"}";
  }
  return "{"+s1+"}";
}
ur_ctx.read = function(s) { 
  ur_ctx._i=new Array();
  eval("ur_ctx._i="+s);
  ur_ctx.clear();
}
ur_ctx.push = function(sId,sKey,sValue) {
  if (ur_ctx._i[sId]==null) ur_ctx._i[sId]=new Array();
  ur_ctx._i[sId][sKey]=sValue;
}
ur_ctx.pop = function(sId) {
	ur_ctx._i[sId]=null;
  ur_ctx.clear();
}
ur_ctx.clear = function() {
  var a=new Array();
  for (var x in ur_ctx._i) 
    if (document.getElementById(x)!=null && ur_ctx._i[x]!=null) a[x]=ur_ctx._i[x];
  ur_ctx._i=a;
}

//** ScrollableItems.ie5 **
	var ur_IScr = {};
	
	function ur_IScr_visFirst(o,x){
		var oItm = o.items[x];
		var iWidth = oItm.width;
		if (o.availwidth > o.newwidth + iWidth) {
			oItm.visible = true;
			o.first = x;
		} else {
			oItm.visible = false;
			o.tmpwidth = o.newwidth + iWidth;
			return true;
		}
		o.newwidth += iWidth;
		return false;
	}
	
	function ur_IScr_visLast(o,x){
		var oItm = o.items[x];
		var iWidth = oItm.width;
		if (o.availwidth > o.newwidth + iWidth) {
			oItm.visible = true;
			o.last = x;
		} else {
			oItm.visible = false;
			o.tmpwidth = o.newwidth + iWidth;
			return true;
		}
		o.newwidth += iWidth;
		return false;
	}
	
	function ur_IScr_getObj(sId) {
		
		if ( ur_IScr[sId] != null && (ur_IScr[sId].ref == ur_get(sId)) ) {
			return;
		}
		
		ur_IScr[sId] = new Array();	
		ur_IScr[sId].availwidth = 0;
		ur_IScr[sId].ref = ur_get(sId);
		ur_IScr[sId].scrl = ur_get(sId + "-scrl");
		ur_IScr[sId].items = new Array();
					
		oCntItms=ur_IScr[sId].scrl.getElementsByTagName("TD");
		
		for (var i = 0; i < oCntItms.length; i++) {
			var oItm = oCntItms[i];
			if (oItm && oItm.getAttribute("idx")!= null && oItm.getAttribute("idx")!= "") {
				var iIdx = parseInt(oItm.getAttribute("idx"));
				
				if (ur_IScr[sId].items[iIdx] != null) {
					ur_IScr[sId].items[iIdx][ur_IScr[sId].items[iIdx].length] = oItm;
				}else {
					ur_IScr[sId].items[iIdx] = new Array();
					ur_IScr[sId].items[iIdx].width = 0;
					ur_IScr[sId].items[iIdx][0] = oItm;
					sT = oItm.getAttribute("st");
					
					if (sT != null && sT.indexOf("s") > -1) ur_IScr[sId].items[iIdx]["forcevisible"] = true;
				}
				
				ur_IScr[sId].items[iIdx].width += oItm.offsetWidth;
			}
		}
		ur_IScr[sId].first=parseInt(ur_IScr[sId].scrl.getAttribute("fsrl"));
		ur_IScr[sId].last=parseInt(ur_IScr[sId].scrl.parentNode.getAttribute("lsrl"));
	}
	function ur_IScr_fireEvent(sEvtName,o,idx) {
		if (o.scrl.getAttribute(sEvtName)) {
			var tmpFunc=new Function("event",o.scrl.getAttribute(sEvtName));
			if (sEvtName=="ohi" || sEvtName=="osi")
				ur_EVT_fire(o.scrl,"osi");
		   if (sEvtName=="oadi") {
				ur_EVT_fire(o.scrl,"oadi");
		   }
	   }
		return true;
	}
	
	function ur_IScr_draw(sId) {
	
		var o = ur_IScr[sId];
		
		o.scrl.style.width = "1px";
		
		
		if(o.ref.getAttribute("scrl") != "1"){
			var noScrlWdth = 0;
			for( var i = 0 ; i < o.items.length ; i++) {
				noScrlWdth = noScrlWdth + o.items[i].width;
			}
			noScrlWdth = noScrlWdth + o.items[o.items.length -1].width;
			o.availwidth =noScrlWdth ;
		}
		else
			o.availwidth = o.scrl.offsetWidth + ur_get(sId+'-lscrl').offsetWidth - 1;
		o.newwidth=0;
		o.tmpwidth=0;
		
		for (var i = 0; i < o.items.length; i++) {
			o.items[i].visible = false;
		}
		
		if (o.last == -1) { 
		
			for (var i = o.first; i < o.items.length; i++) {
				
				if ( ur_IScr_visLast(o, i) ) break; 
			}
			if (o.availwidth > o.tmpwidth) { 
			
				for (var i = o.first - 1; i >= 0; i--) 
					if (ur_IScr_visFirst(o,i)) break;
			}
		} else {
		
		for (var i = o.last; i >= 0; i--) 
			
			if (ur_IScr_visFirst(o, i)) break; 
			
			if (o.availwidth > o.tmpwidth) { 
			
				for (var x = o.last + 1; x <o.items.length; x++) 
					if (ur_IScr_visLast(o,x)) break;
			}
		}
		
		
		for (var x = 0; x < o.items.length; x++) {
			o.items[x].idx = x;
			if (o.items[x].visible){
				if (ur_IScr_fireEvent("osi",o,x)) {
						for (var n = 0; n <o.items[x].length; n++) {
							o.items[x][n].style.display = "";
						}
					}
			} else {
					if (ur_IScr_fireEvent("ohi",o,x)) {
						for (var n = 0; n < o.items[x].length; n++) {
							o.items[x][n].style.display = "none";
						}
					}
			}
		}
		if(o.ref.getAttribute("scrl") != "1") {
			o.first = 0;
			o.last = o.items.length -1;
		}
		
		if (o.ref.getAttribute("ct") == "TS") {
			ur_TS_oadi(sId);
		}else{
			ur_IScr_fireEvent("oadi",o);
		}
		
		o.scrl.style.width = sapUrMapi_sAddUnit( o.newwidth , "px" ); 
	}
	function ur_IScr_toBegin(sId) {
		ur_IScr[sId].first = 0;
		ur_IScr[sId].last = -1;
		ur_IScr_draw(sId);
	}
	function ur_IScr_toEnd(sId) {
		ur_IScr[sId].first = -1;
		ur_IScr[sId].last = ur_IScr[sId].items.length-1;
		ur_IScr_draw(sId);
	}
	function ur_IScr_toPrevPage(sId) {
		if (ur_IScr[sId].first > 0) {
			ur_IScr[sId].last = ur_IScr[sId].first - 1;
			ur_IScr[sId].first = -1;
		ur_IScr_draw(sId);
		}
	}
	function ur_IScr_toPrevItem(sId) {
		
		
		if ( ur_IScr[sId].first > 0) {
			ur_IScr[sId].first--;
			
			ur_IScr[sId].last = -1;
			ur_IScr_draw(sId);
		}
	}
	function ur_IScr_toNextPage(sId) {
		if (ur_IScr[sId].last < ur_IScr[sId].items.length - 1) {
			ur_IScr[sId].first = ur_IScr[sId].last + 1;
			ur_IScr[sId].last = - 1;
			ur_IScr_draw(sId);
		}
	}
	function ur_IScr_toNextItem(sId) {
		
		
		if (ur_IScr[sId].first < ur_IScr[sId].items.length - 1) {
			ur_IScr[sId].first ++;
			ur_IScr[sId].last = -1;
			ur_IScr_draw(sId);
		}
	}
	function ur_IScr_resize(sId) {
		ur_IScr[sId].last=-1;
		ur_IScr_draw(sId);
	}
	
	function ur_IScr_create(sId){
		ur_IScr_resize(sId);			
	}
	
	function ur_IScr_getFirstVisibleIndex(sId){
		if (ur_IScr[sId].first > 0) {
			return parseInt(ur_IScr[sId].first);
		}
		return 0;
	}

//** Event.ie5 **

function ur_EVT_fire(o,sName,oEvt,hWnd,submitType) {
	var sFunc = o.getAttribute(sName); 
  
	if(submitType) oEvt.ur_submitType=submitType;
  
	if (sFunc && sFunc!="") {
		if (typeof(hWnd)=="undefined") hWnd=window; 
		if (typeof(oEvt)=="undefined") oEvt=hWnd.event;
		o.func=new hWnd.Function("event",sFunc); 
		return o.func(oEvt); 
	}
	return null;
}
function ur_EVT_src(oEvt) {
	return ur_EVT(oEvt).srcElement;
}
function ur_EVT_cancel(oEvt,oPrimeEvt){
	if (oPrimeEvt) oEvt = oPrimeEvt;
	if (oEvt==null) return false;
	
	oEvt.cancelBubble=true;
	
	if ( oEvt.keyCode != 0 ) {
      try { 
         oEvt.keyCode = 0;
      } catch(e) {}
    }
	
	oEvt.returnValue = false;
	
	if (oEvt.preventDefault) {
		oEvt.preventDefault();
	}
	
	if (oEvt.stopPropagation) {
		oEvt.stopPropagation();
	}
	return true;
}
function ur_EVT_cancelBubble(oEvt){
     if (oEvt.stopPropagation) {
        oEvt.stopPropagation();
     }
	 
	oEvt.cancelBubble=true;
}
function ur_EVT(oEvt) {
        if (!UCF_UserAgent.bIsIE()) {
	  oEvt["srcElement"]=oEvt.target.tagName?oEvt.target:oEvt.target.parentNode;
	  oEvt["fromElement"]=oEvt.relatedTarget;
	  oEvt["toElement"]=oEvt.currentTarget;
        } else {
         
         
        }
	return oEvt;
}
function ur_EVT_addParam(oEvt,sParName, sParValue)
{
	if(oEvt.ur_param)
	{
		var oTemp = oEvt.ur_param;
		oTemp[sParName] = sParValue;
		oEvt.ur_param = oTemp;  
	}
	else
	{
		var oTemp = new Array();
		oTemp[sParName] = sParValue;
		oEvt.ur_param = oTemp;  
	}
}
//** KeyBoard.ie5 **

ur_KY={RETURN:13,LEAVE:9,SPACE:32,DOWN:40,UP:38,PREV:(ur_system.direction=="rtl")?39:37,NEXT:(ur_system.direction=="rtl")?37:39,PGUP:33,PGDOWN:34,END:35,HOME:36}
function ur_KY_nav(oEvt,o) {
  
  var sMode=o.ref.kb; 
	if (!sMode) return false;
	
	
	if (!o.items) o.items=o.ref.childNodes;
	
	
	var iKc=oEvt.keyCode;
	
	
	
	
	var iFOIdx=parseInt(ur_getAttD(o.ref,"fidx","0")); 
	
	var iFNIdx=iFOIdx;
	if (iKc==ur_KY.PGUP   || iKc==ur_KY.HOME ) iFNIdx=0;
	else if (iKc==ur_KY.PGDOWN || iKc==ur_KY.END) iFNIdx=o.items.length-1;
	else if (((iKc==ur_KY.PREV && sMode.indexOf("h")>-1) || (iKc==ur_KY.UP && sMode.indexOf("v")>-1))){
	
		 if(o.items.rfl==true && iFOIdx==0)
		  iFNIdx=o.items.length-1;
		 else if(iFOIdx>0)
		  iFNIdx--;
	}
	else if (((iKc==ur_KY.NEXT && sMode.indexOf("h")>-1) || (iKc==ur_KY.DOWN && sMode.indexOf("v")>-1))){
	
		 if(o.items.rfl==true && iFOIdx==o.items.length-1)
			iFNIdx=0;
		 else if(iFOIdx<o.items.length-1)
	 		iFNIdx++;
	}
	else if(iKc==ur_KY.LEAVE){
		if(o.selected!=null && o.selected!= -1)
		   iFNIdx=o.selected;
		else
			iFNIdx=0;
	}
	
	if (iFNIdx!=iFOIdx) { 
	  
      var oItm=o.items[iFOIdx];
	if(!(ur_system.is508) && ur_isSt(o.items[iFNIdx],ur_st.DISABLED))
	  	iFNIdx = ur_KY_checkDsbl(o,iFNIdx,iKc)["idx"];
	if(iFNIdx==null)return;
		  
		  sapUrMapi_setTabIndex(oItm,-1); 
		  var oItm=o.items[iFNIdx];
		  
	      o.ref.setAttribute("fidx",iFNIdx);
		  
	      sapUrMapi_setTabIndex(oItm,0);
		  
	      ur_focus(oItm);
	}
	if(iKc == ur_KY.LEAVE)oEvt.returnValue=true;
	return true;
}
function ur_KY_checkDsbl(o,idx,iKc) {
	var aIdx= new Array();
	    aIdx["from"]="none";
	    aIdx["idx"]=idx;
	    
	if(idx < 0) idx = o.items.length - 1;
	else if (idx >= o.items.length) idx = 0;
		
 		while(ur_isSt(o.items[idx],ur_st.DISABLED) && o.items[idx]!=null){
 				
 			if(iKc==ur_KY.DOWN || iKc==ur_KY.NEXT )idx+=1;
 			else idx-=1;
 			
 			if(idx>=o.items.length-1){
 				if(o.items.rfl==true){
 				   aIdx["from"]="last";
 				   idx=0;
 				}else{
 					aIdx["idx"]=null;
 					break;
 				}
 			}
 			else if(idx<0){
 				if(o.items.rfl==true){
	 			  aIdx["from"]="first";
	 			  idx=o.items.length-1;
	 			}
	 			else{
	 			  aIdx["idx"]=null;
	 			  break;
	 			}
 			}
 			if(!ur_isSt(o.items[idx],ur_st.DISABLED)){
 			  aIdx["idx"]=idx;
 			  return aIdx;
 			}
		}
	return aIdx;
}
function ur_KY_getObj(sId,sContId,sTag,sFilter,sKb,bRfl){
	var oR=ur_get(sId);
	var oContainer=ur_get(sId+ sContId);
	var o={ref:oR,
		   items:new Array()
	}
	
	if(sTag!=null)
	   var aItems=oContainer.getElementsByTagName(sTag);
	else
		var aItems=oContainer.getChildNodes;
		
	if(sFilter!=null){
		for(i=0;i<aItems.length;++i){
			if(aItems[i].getAttribute(sFilter)!=null)
			o.items.push(aItems[i]);
		}
	}
	o["selected"]=o.ref.getAttribute("sidx");
	o.ref["kb"]=sKb;
	o.items["rfl"]=bRfl;
	return o;
}
//** Button.ie5 **

function ur_Button_keypress(e) { 
	var o=ur_EVT_src(e);
	o=sapUrMapi_getRootControl(o);
	if (sapUrMapi_getControlTypeFromObject(o)!="B") return;
	if (ur_Button_isDsbl(o)) return;
	if ((o.getAttribute("tp")=="MNUSEC" || o.getAttribute("tp")=="MNU") && e.altKey && e.keyCode==40 || e.keyCode==115 ) {
		sapUrMapi_Button_openMenu(o.id,e);
		return ur_EVT_cancel(e);
	}
  if (e.keyCode==32) {
	  ur_EVT_cancel(e);
	  if(o.getAttribute("tp")=="MNU") {
			  sapUrMapi_Button_openMenu(o.id,e);
				return ur_EVT_cancel(e);
	  }
	  return ur_EVT_fire(o,"ocl",e);
  }
}
function ur_Button_click(e) { 
	var o=ur_EVT_src(e);
	o=sapUrMapi_getRootControl(o);
	if (sapUrMapi_getControlTypeFromObject(o)!="B") return;
	
	if (ur_Button_isDsbl(o)) return;
  if (o.getAttribute("tp")=="MNU") {
		  sapUrMapi_Button_openMenu(o.id,e);
			return ur_EVT_cancel(e);
  }
  return ur_EVT_fire(o,"ocl",e);
}
function ur_Button_isDsbl(o) {
  	return ur_getAttD(o,"st","").indexOf("d")>-1;
}
function ur_Button_setStatus(sId,bEnabled) {
	var o=ur_get(sId),
		bStD=ur_Button_isDsbl(o);
	if (bStD!=bEnabled) return; 
	var arrCls=o.className.split(" ");
	if (bEnabled) {
	  o.setAttribute("st","");
	  arrCls[0]=arrCls[0].replace("Dsbl","");
	} else {
	  o.setAttribute("st","d");
	  arrCls[0]=arrCls[0]+"Dsbl";
	}
	o.className=arrCls.join(" ");
}
function mf_Button_setEnabled(sId){
	ur_Button_setStatus(sId,true);
}
function mf_Button_setDisabled(sId){
	ur_Button_setStatus(sId,false);
}
function sapUrMapi_Button_openMenu( sButtonId, e){
	var o = document.getElementById(sButtonId);
	if (!o) return;
	var sPopupId = o.getAttribute("popup");
	if (!sPopupId) return;
	if (ur_system.direction=="rtl") {
 		sapUrMapi_PopupMenu_showMenu(sButtonId,sPopupId,sapPopupPositionBehavior.MENURIGHT,e);
	} else {
 		sapUrMapi_PopupMenu_showMenu(sButtonId,sPopupId,sapPopupPositionBehavior.MENULEFT,e);
	}
  e.cancelBubble=false;
	if (e.type=="contextmenu") {
    e.returnValue=false;
  } else {
    e.returnValue=true;
  }
}
function sapUrMapi_Button_setIconSrc(sId,sIconSrc){
	var o=ur_get(sId);
	if(!o) return;
	var oImg=o.getElementsByTagName("IMG")[0];
	if(!oImg) return;
	oImg.src=sIconSrc;
}
//** BreadCrumb.ie5 **

function sapUrMapi_BreadCrumb_keydown(sId,oEvt){
	var o=ur_Brc_getObj(sId);
	var iKey=oEvt.keyCode;
	ur_KY_nav(oEvt,o);
	
	if(iKey==32 && ur_EVT_src(oEvt).onclick!=null){
	   oEvt.srcElement.click();
	}
	else if(iKey==13)
		ur_EVT_cancel(oEvt);
}
function ur_Brc_getObj(sId){
	var oBrd=ur_get(sId);
	var o={ref:oBrd,
		   items:new Array()
	}
	
	aItems=oBrd.childNodes;
	
	for(i=0;i<aItems.length;++i){
		if(aItems[i].getAttribute("idx")!=null)
		o.items.push(aItems[i]);
	}
	o["selected"]=o.items.length-1;
	o.ref["kb"]="h";
	o.items["rfl"]=false;
	return o;
}
function sapUrMapi_BreadCrumb_activate(sId,oEvt){
}
function sapUrMapi_BreadCrumb_deactivate(sId,oEvt){
	if(oEvt.toElement!=null&&oEvt.toElement.parentNode.className.indexOf("Brc")>=0) return;
	var o=ur_get(sId);
	var oSel=o.lastChild;
	
	sapUrMapi_setTabIndex(oSel,0);
	o.setAttribute("nav","false");
}

//** CalendarView.ie5 **

var _ur_CAL = new Array();
function ur_CAL_create(sId) {
  
	sapUrMapi_Create_AddItem(sId, "ur_CAL_init('"+sId+"')");
}
function ur_CAL_init(sId) {
  
  ur_CAL_draw(sId);
  var obj=ur_CAL_getObj(sId);
  
  ur_attachEvent(obj.ref, "activate", ur_CAL_activate);
  
  
  if (obj.type == "Y" || obj.type == "HM") {
     sapUrMapi_Resize_AddItem(sId, "ur_CAL_drawYear('"+sId+"')");
  } else if (obj.type=="D" || obj.type=="MD") { 
     sapUrMapi_Resize_AddItem(sId, "ur_CAL_drawDay('"+sId+"')");
    
    var scrlTop=parseFloat(ur_get(sId).getAttribute("sctop"));
    var oStartCell=ur_get(sId+"-start");
    var iRowHeight=oStartCell.offsetHeight;
    if (!isNaN(scrlTop))
      ur_get(sId+"-scrl").scrollTop=Math.floor(iRowHeight*scrlTop);
  } else if (obj.type=="M") { 
     sapUrMapi_Resize_AddItem(sId, "ur_CAL_drawMonth('"+sId+"')");
  }
}
function ur_CAL_createEntryObj(oHTMLEntry) {
	var fEntry = new Function( "return {" + oHTMLEntry.getAttribute("data") + "}" ); 
	var oEntry = fEntry(); 
	if (oEntry.dur <= 0) return null;
	oEntry.ref = oHTMLEntry; 
	oEntry.ecol = oEntry.scol + oEntry.dur;  
	oEntry.erow = oEntry.srow + oEntry.dur;  
	return oEntry; 
}
function ur_CAL_getObj(sId) {
  if (_ur_CAL[sId]) return _ur_CAL[sId];
  var o=ur_get(sId);
  var obj={id:sId,type:o.getAttribute("tp"),entries:new Array(),fullday:new Array(),ref:o};
  var oEntries=ur_get(sId+"-entries");
  var aDOMEntries=oEntries.childNodes;
  for (var n=0;n<aDOMEntries.length;n++) {
    if (aDOMEntries[n].nodeType!=1) continue; 
    var oE = ur_CAL_createEntryObj(aDOMEntries[n]);
    if (oE) obj.entries.push(oE);
  }
  
  var oEntries=ur_get(sId+"-entries-fullday"); 
  if (oEntries) { 
		var aDOMEntries=oEntries.childNodes;
		for (var n=0;n<aDOMEntries.length;n++) {
			if (aDOMEntries[n].nodeType!=1) continue; 
      var oE = ur_CAL_createEntryObj(aDOMEntries[n]);
      if (oE) obj.fullday.push(oE);
		}
  }
  _ur_CAL[sId]=obj;
  return _ur_CAL[sId];
}
function ur_CAL_createContinueEntry(oBaseEntry,sId,fStartRow,fStartCol,fDuration,bSelectable,bSelected,bFullDay) {
	var oExistingContinousEntry = ur_get(sId);
	if (oExistingContinousEntry) return oExistingContinousEntry;
	var oNewEntry  = oBaseEntry.cloneNode(true);
	oNewEntry.id   = sId;
	oNewEntry.setAttribute("data","srow:" + fStartRow + ",scol:" + fStartCol + ",dur:" + fDuration + ",selb:" + bSelectable + ",sel:" + bSelected + ",fd:" + bFullDay);
	
	oNewEntry.tabIndex = "-1";
	oNewEntry.setAttribute("ti","-1");
	oNewEntry.onactivate = new Function ("event","sapUrMapi_focusElement('"+oBaseEntry.id+"');");
	return oNewEntry;
} 
function ur_CAL_calcYearEntries(sId) {
  var obj = ur_CAL_getObj(sId);
  
  var oStartCell = ur_get(sId+"-start");
  var oRows = oStartCell.parentNode.parentNode.childNodes;
  var oEntries=obj.entries;
  
  
  if (!obj.rows) {
		obj.rows=new Array();
		for (var i=0;i<oRows.length;i++) {
			var daycount=oRows[i].cells.length-2;
			while (oRows[i].cells[daycount+1].getAttribute("disabled")) daycount--;
			obj.rows.push(daycount);
		}
	  
		for (var n=0;n<oEntries.length;n++) {
			while (oEntries[n].ecol > obj.rows[oEntries[n].srow]+1 ) { 
				var iEntryCount = 0;
				if (obj.rows.length > oEntries[n].srow+1) {
					var sEntryId = oEntries[n].ref.id+"-cont-"+(iEntryCount+1);
					if (!ur_get(sEntryId)) {
						var oNewEntry=ur_CAL_createContinueEntry(oEntries[n].ref,sEntryId,(oEntries[n].srow+1),0,(oEntries[n].dur-obj.rows[oEntries[n].srow]+oEntries[n].scol-1),(oEntries[n].selb==true),(oEntries[n].sel==true),(oEntries[n].fd==true));
						oEntries[n].ref.parentNode.appendChild( oNewEntry );
						var oE = ur_CAL_createEntryObj(oNewEntry);
						if (oE) obj.entries.push( oE );
					}
					oEntries[n].dur = obj.rows[oEntries[n].srow] - oEntries[n].scol+1;
					oEntries[n].ecol = oEntries[n].scol + oEntries[n].dur;
					iEntryCount++;
				} else {
					break; 
				}
			}
		}
	}
	
  
  oEntries.sort(ur_CAL_sortColEntries);
	
	
	var aRows = new Array();
	for (var n=0;n<obj.rows.length;n++) aRows[n] = new Array();
	for (var n=0;n<oEntries.length;n++) aRows[oEntries[n].srow].push(oEntries[n]);
	var iLevelCount=0;
	
	for (var i=0;i<aRows.length;i++) {
		var iEndCol=0;
		var aParallelRows=new Array();
		var aEndCols=new Array();
		aEndCols[0]=0;
		aParallelRows[0]=new Array();
		for (var n=0;n<aRows[i].length;n++) {
			var iLevelCount=0;
			while (aEndCols[iLevelCount] > aRows[i][n].scol && iLevelCount<aEndCols.length) {
				iLevelCount++;
        if (!aParallelRows[iLevelCount]) aParallelRows[iLevelCount] = new Array();
			}
			aEndCols[iLevelCount]=aRows[i][n].ecol;
			aParallelRows[iLevelCount].push(aRows[i][n]);
			aRows[i][n].level=iLevelCount;
			if (iEndCol< aRows[i][n].ecol) iEndCol=aRows[i][n].ecol;
			for (var x=0;x<aParallelRows.length;x++) {
				for (var y=0;y<aParallelRows[x].length;y++) {
					aParallelRows[x][y].level=x;
					aParallelRows[x][y].max=aEndCols.length;
			    aParallelRows[x][y].span=aEndCols.length-x;
					bFound=false;
					for (iNextRow = x+1; iNextRow < aParallelRows.length;iNextRow++) {
						for (iNextEntryCount = 0; iNextEntryCount < aParallelRows[iNextRow].length;iNextEntryCount++) {
							if (!(aParallelRows[x][y].ecol<aParallelRows[iNextRow][iNextEntryCount].scol ||
										aParallelRows[x][y].scol>aParallelRows[iNextRow][iNextEntryCount].ecol )
									) {
								bFound=true;
								break;
							}
						}
						if (bFound) break;
					}   
					if (bFound) aParallelRows[x][y].span=1;
				}
			}
		}
	}
	var iEntryCnt=0;
	var focusEntries=new Array();
	var iOldRow = 0;
	var oRows = obj.ref.getElementsByTagName("TR");
	for (var n=0;n<oEntries.length;n++) {
		if (obj.type == "HM") {
			while (iOldRow <= oEntries[n].srow) {
			  focusEntries.push({ref:oRows[iOldRow+1].firstChild,row:true});
			  oRows[iOldRow+1].firstChild.setAttribute("ic",(oRows.length-1)+"");
			  oRows[iOldRow+1].firstChild.setAttribute("idx",(iOldRow+1)+"");
			  oRows[iOldRow+1].firstChild.setAttribute("tp","RH");
			  oRows[iOldRow+1].firstChild.setAttribute("t",oRows[iOldRow+1].firstChild.innerText);
			  iOldRow++;
			}
		}
		if (oEntries[n].ref.id.indexOf("-cont-")==-1) {
			iEntryCnt++;
			focusEntries.push(oEntries[n]);
		}
	}
	obj.focusEntries=focusEntries;
}
function ur_CAL_drawYear(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oCal    = ur_get(sId);
  var oTbl    = ur_get(sId+"-tbl");
  var oTHs    = oTbl.getElementsByTagName("TH");
  var oCols   = oTbl.getElementsByTagName("COL");
  var iTotalWidth = oTbl.offsetWidth;
  var iMonthWidth = oTbl.getElementsByTagName("TH")[0].offsetWidth; 
  var sOldOverflow = oCal.style.overflowX;
  oCal.style.overflowX = "";
	obj.iTodaysDay = parseInt(obj.ref.getAttribute("tday"));
	if (obj.iTodaysDay > 0 && obj.iTodaysDay < 31 ) {
		oTbl.rows[0].cells[obj.iTodaysDay].style.padding="0px";
		oTbl.rows[0].cells[obj.iTodaysDay].innerHTML = "<div class=\"urToday\" style=\"padding-top:1px;padding-bottom:2px\">" + obj.iTodaysDay + "</div>";
	}
  if (iTotalWidth < 200) iTotalWidth = 200; 
  var iDayWidth = Math.floor((iTotalWidth-iMonthWidth)/31); 
  
  if (iDayWidth < 21 || oCal.offsetWidth < iTotalWidth) {
    oCal.style.overflowX="auto"; 
    oCal.style.height=sapUrMapi_sAddUnit( oTbl.offsetHeight+16 , "px" ); 
    iDayWidth=21;
    oCols[0].style.width = sapUrMapi_sAddUnit( iMonthWidth , "px" );
  } else {
    oCal.style.height=sapUrMapi_sAddUnit( oTbl.offsetHeight , "px" ); 
    
  }   
  for (var i=1;i<32;i++)  oCols[i].width = iDayWidth; 
  if (sOldOverflow!=oCal.style.overflowX || oCal.style.overflowX!="auto")
	  ur_CAL_drawYearEntries(sId);
}
function ur_CAL_drawYearEntries(sId) {
	var iFixedHeight=16;
	var obj=ur_CAL_getObj(sId);
	var oEntries = obj.entries;
	var oStartCell = ur_get(sId+"-start");
	var oRows = oStartCell.parentNode.parentNode.childNodes;
	for (var n=0;n<oEntries.length;n++) {
		oStartCell = oRows[oEntries[n].srow].cells[Math.floor(oEntries[n].scol) + 1];
		var iColWidth = oStartCell.offsetWidth;
		var oPos = ur_CAL_getPos(oStartCell);
		oPos.x+=(oEntries[n].scol-Math.floor(oEntries[n].scol))*iColWidth;
		var iWidth = Math.floor(iColWidth*oEntries[n].dur);
		oEntries[n].ref.style.top = sapUrMapi_sAddUnit( oPos.y + (iFixedHeight / oEntries[n].max * oEntries[n].level ) + 1 , "px" );
		oEntries[n].ref.style.height = sapUrMapi_sAddUnit( Math.floor(iFixedHeight / oEntries[n].max * oEntries[n].span) , "px" );
		oEntries[n].ref.style.width = sapUrMapi_sAddUnit( iWidth , "px" );
		if (ur_system.direction == "rtl")
			oEntries[n].ref.style.right = sapUrMapi_sAddUnit( oPos.x+1 , "px" ); 
		else
			oEntries[n].ref.style.left=sapUrMapi_sAddUnit( oPos.x+1 , "px" );
	}
}  
function ur_CAL_calcDayEntries(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oTbl=ur_get(sId+"-tbl");
  var oRows=oTbl.getElementsByTagName("TBODY")[0].getElementsByTagName("TBODY")[0].childNodes;
  var oStartCell=ur_get(sId+"-start");
  
  var oEntries=obj.entries;
  oEntries.sort(ur_CAL_sortRowEntries);
  
  var oFullDayEntries=obj.fullday;
  oFullDayEntries.sort(ur_CAL_sortColEntries);
  
  
  var oColumns = oStartCell.parentNode.childNodes;
  var iColCount=oColumns.length-1;
  obj.cols = [];
  for (var n=1; n < oColumns.length;n++) {
		obj.cols.push(oRows.length);
  }
  
  var aEntryCols=new Array();
  for (var i=0;i<iColCount;i++) aEntryCols.push(new Array());
  
  for (var n=0;n<oEntries.length;n++) {
		var iEntryCount = 0;
		while (oEntries[n].erow > obj.cols[oEntries[n].scol]+1 ) { 
			if (obj.cols.length > oEntries[n].scol+1) {
				var sEntryId = oEntries[n].ref.id+"-cont-"+(iEntryCount+1);
				if (!ur_get(sEntryId)) {
					var oNewEntry=ur_CAL_createContinueEntry(oEntries[n].ref,sEntryId,0,(oEntries[n].scol+1),(oEntries[n].dur-obj.cols[oEntries[n].scol]+oEntries[n].srow-1),(oEntries[n].selb==true),(oEntries[n].sel==true),(oEntries[n].fd==true));
					oEntries[n].ref.parentNode.appendChild( oNewEntry );
					var oE = ur_CAL_createEntryObj(oNewEntry);
					if (oE) obj.entries.push( oE );
				}
				oEntries[n].dur = obj.cols[oEntries[n].scol] - oEntries[n].srow+1;
				oEntries[n].erow = oEntries[n].srow + oEntries[n].dur;
				iEntryCount++;
			} else {
				break; 
			}
		}
  }
  for (var n=0;n<oEntries.length;n++) aEntryCols[oEntries[n].scol].push(oEntries[n]);
  for (var i=0;i<iColCount;i++) {
    var iEndRow=0;
    var aParallelCols=new Array();
    var aEndRows=new Array();
		aEndRows[0]=0;
		aParallelCols[0]=new Array();
    for (var n=0;n<aEntryCols[i].length;n++) {
      var iLevelCount=0;
      while (aEndRows[iLevelCount] > aEntryCols[i][n].srow && iLevelCount<aEndRows.length) {
        iLevelCount++;
      	if (!aParallelCols[iLevelCount]) aParallelCols[iLevelCount] = new Array();
      }
      aEndRows[iLevelCount]=aEntryCols[i][n].erow;
      aParallelCols[iLevelCount].push(aEntryCols[i][n]);
      
      aEntryCols[i][n].level=iLevelCount;
      if (iEndRow < aEntryCols[i][n].erow) iEndRow=aEntryCols[i][n].erow;
    }
    for (var x=0;x<aParallelCols.length;x++) {
      for (var y=0;y<aParallelCols[x].length;y++) {
         aParallelCols[x][y].level=x;
         aParallelCols[x][y].max=aEndRows.length;
         
         aParallelCols[x][y].span=aEndRows.length-x;
         
         bFound=false;
         for (iNextCol = x+1; iNextCol < aParallelCols.length;iNextCol++) {
           for (iNextColEntryCount = 0; iNextColEntryCount < aParallelCols[iNextCol].length;iNextColEntryCount++) {
             
             if (!(aParallelCols[x][y].erow<aParallelCols[iNextCol][iNextColEntryCount].srow ||
                   aParallelCols[x][y].srow>aParallelCols[iNextCol][iNextColEntryCount].erow )
                 ) {
               bFound=true;
               break;
             }
           }
           if (bFound) break;
         }   
         if (bFound) aParallelCols[x][y].span=1;
      }
    }
  }
  
  var iEndCol=0;
  var aParallelRows=new Array();
  var aEndCols=new Array();
	aEndCols[0]=0;
	aParallelRows[0]=new Array();
  for (var n=0;n<oFullDayEntries.length;n++) {
    var iLevelCount=0;
    while (aEndCols[iLevelCount] > oFullDayEntries[n].scol && iLevelCount<aEndCols.length) {
      iLevelCount++;
      if (!aParallelRows[iLevelCount]) aParallelRows[iLevelCount] = new Array();
    }
    aEndCols[iLevelCount]=oFullDayEntries[n].ecol;
    aParallelRows[iLevelCount].push(oFullDayEntries[n]);
    
    oFullDayEntries[n].level=iLevelCount;
    if (iEndCol < oFullDayEntries[n].ecol) iEndCol=oFullDayEntries[n].ecol;
  }
  for (var x=0;x<aParallelRows.length;x++) {
    for (var y=0;y<aParallelRows[x].length;y++) {
        aParallelRows[x][y].level=x;
        aParallelRows[x][y].max=aEndCols.length;
        
        aParallelRows[x][y].span=1;
    }
  }
  obj.endcols=aEndCols;
}
function ur_CAL_drawDay(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oTbl=ur_get(sId+"-tbl");
  var oFixedRows=oTbl.getElementsByTagName("THEAD")[0].childNodes;
  var oScrl=ur_get(sId+"-scrl");
  if (ur_system.direction=="rtl") {
		if (oScrl.scrollHeight>oScrl.offsetHeight) oScrl.style.overflowY="scroll";
		else oScrl.style.overflowY="none";
  }
  ur_CAL_drawDayEntries(sId) 
}
function ur_CAL_drawDayEntries(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oTbl=ur_get(sId+"-tbl");
  var oStartCell=ur_get(sId+"-start");
  var oRows=oTbl.getElementsByTagName("TBODY")[0].getElementsByTagName("TBODY")[0].childNodes;
  var oFullDayCell=ur_get(sId+"-fixed");
	var iFixedHeight=16;
	var aEndCols=obj.endcols;
	var oFullDayEntries=obj.fullday;
	var oEntries=obj.entries;
	
  var iRowHeight=oStartCell.offsetHeight;
  for (var n=0;n<oEntries.length;n++) {
    
    var iColWidth=oStartCell.parentNode.childNodes[oEntries[n].scol+1].offsetWidth;
    var oPos=ur_CAL_getPos(oStartCell.parentNode.childNodes[oEntries[n].scol+1]);
    if (oRows.length-oEntries[n].srow-oEntries[n].dur<0) {
      oEntries[n].dur=oRows.length-oEntries[n].srow;
    }
    var iSpace=8; 
    iColWidth = iColWidth - iSpace;
    var iTop=Math.floor(iRowHeight*(oEntries[n].srow));
    var iHeight=Math.floor(iRowHeight*oEntries[n].dur);
    var iMinWidth=Math.floor(iColWidth/oEntries[n].max);
    oEntries[n].ref.style.top=sapUrMapi_sAddUnit( oPos.y+iTop+1 , "px" );
    oEntries[n].ref.style.height=sapUrMapi_sAddUnit( iHeight , "px" );
    oEntries[n].ref.style.width=sapUrMapi_sAddUnit( iMinWidth*oEntries[n].span , "px" );
		if (ur_system.direction=="rtl")
      oEntries[n].ref.style.right=sapUrMapi_sAddUnit( oPos.x+(oEntries[n].level*iMinWidth)+1-16 , "px" );
    else
      oEntries[n].ref.style.left=sapUrMapi_sAddUnit( oPos.x+(oEntries[n].level*iMinWidth)+1 , "px" );
    
    
  }
  iFixedHeight=16;
  oFullDayCell.style.height=sapUrMapi_sAddUnit( 5+(aEndCols.length*(iFixedHeight)) , "px" );
  for (var n=0;n<oFullDayEntries.length;n++) {
		var oPos=ur_CAL_getPos(oFullDayCell.parentNode.childNodes[Math.floor(oFullDayEntries[n].scol)+1]);
		var iColWidth=oFullDayCell.parentNode.childNodes[Math.floor(oFullDayEntries[n].scol)+1].offsetWidth;
		var iLeft=oPos.x+Math.floor(iColWidth*(oFullDayEntries[n].scol-Math.floor(oFullDayEntries[n].scol)));
    var iWidth=Math.floor(iColWidth*oFullDayEntries[n].dur);
    if (iWidth+iLeft>oTbl.offsetWidth) {
      iWidth=oTbl.offsetWidth-iLeft-1;
    }
		if (ur_system.direction=="rtl")
			oFullDayEntries[n].ref.style.right=sapUrMapi_sAddUnit( iLeft+1 , "px" );
		else
			oFullDayEntries[n].ref.style.left=sapUrMapi_sAddUnit( iLeft+1 , "px" );
    oFullDayEntries[n].ref.style.top=sapUrMapi_sAddUnit( oPos.y+(iFixedHeight*(oFullDayEntries[n].level)+1) , "px" );
    oFullDayEntries[n].ref.style.width=sapUrMapi_sAddUnit( iWidth-1 , "px" );
    oFullDayEntries[n].ref.style.height=iFixedHeight+"px";
  }  
}
function ur_CAL_calcMonthEntries(sId) {
  var obj = ur_CAL_getObj(sId);
  
  var oStartCell = ur_get(sId+"-start");
  var oRows = oStartCell.parentNode.parentNode.childNodes;
  var oEntries=obj.entries;
  
  
  if (!obj.rows) {
		obj.rows=new Array();
		for (var i=0;i<oRows.length;i++) {
			var daycount=oRows[i].cells.length-2;
			while (oRows[i].cells[daycount+1].getAttribute("disabled")) daycount--;
			obj.rows.push(daycount);
		}
	  
		for (var n=0;n<oEntries.length;n++) {
			while (oEntries[n].ecol > obj.rows[oEntries[n].srow]+1 ) { 
				var iEntryCount = 0;
				if (obj.rows.length > oEntries[n].srow+1) {
					var oNewEntry=ur_CAL_createContinueEntry(oEntries[n].ref,oEntries[n].ref.id+"-cont-"+(iEntryCount+1),(oEntries[n].srow+1),0,oEntries[n].dur-obj.rows[oEntries[n].srow]+oEntries[n].scol-1,(oEntries[n].selb==true),(oEntries[n].sel==true),(oEntries[n].fd==true));
					oEntries[n].ref.parentNode.appendChild( oNewEntry );
					oEntries[n].dur = obj.rows[oEntries[n].srow] - oEntries[n].scol+1;
					oEntries[n].ecol = oEntries[n].scol + oEntries[n].dur;
					iEntryCount++;
					var oE = ur_CAL_createEntryObj(oNewEntry);
					if ( oE ) obj.entries.push( oE );
				} else {
					break; 
				}
			}
		}
	}
  
  
  oEntries.sort(ur_CAL_sortColEntries);
	
	
	var aRows = new Array();
	for (var n =0;n<obj.rows.length;n++) aRows[n] = new Array();
	for (var n=0;n<oEntries.length;n++) aRows[ oEntries[n].srow ].push( oEntries[n] );
	var iLevelCount=0;
	
	for (var i=0;i<aRows.length;i++) {
		var iEndCol=0;
		var aParallelRows=new Array();
		var aEndCols=new Array();
		aEndCols[0]=0;
		aParallelRows[0]=new Array();
		for (var n=0;n<aRows[i].length;n++) {
			var iLevelCount=0;
			while (aEndCols[iLevelCount] > aRows[i][n].scol && iLevelCount<aEndCols.length) {
				iLevelCount++;
        if (!aParallelRows[iLevelCount]) aParallelRows[iLevelCount] = new Array();
			}
			aEndCols[iLevelCount]=aRows[i][n].ecol;
			aParallelRows[iLevelCount].push(aRows[i][n]);
			aRows[i][n].level=iLevelCount;
			if (iEndCol< aRows[i][n].ecol) iEndCol=aRows[i][n].ecol;
			for (var x=0;x<aParallelRows.length;x++) {
				for (var y=0;y<aParallelRows[x].length;y++) {
					aParallelRows[x][y].level=x;
					aParallelRows[x][y].max=aEndCols.length;
			    aParallelRows[x][y].span=aEndCols.length-x;
					bFound=false;
					for (iNextRow = x+1; iNextRow < aParallelRows.length;iNextRow++) {
						for (iNextEntryCount = 0; iNextEntryCount < aParallelRows[iNextRow].length;iNextEntryCount++) {
							if (!(aParallelRows[x][y].ecol<aParallelRows[iNextRow][iNextEntryCount].scol ||
										aParallelRows[x][y].scol>aParallelRows[iNextRow][iNextEntryCount].ecol )
									) {
								bFound=true;
								break;
							}
						}
						if (bFound) break;
					}   
					if (bFound) aParallelRows[x][y].span=1;
				}
			}
		}
	}
	var iEntryCnt=0;
  var focusEntries=new Array();
	for (var n=0;n<oEntries.length;n++) {
		if (oEntries[n].ref.id.indexOf("-cont-")==-1) {
			iEntryCnt++;
			focusEntries.push(oEntries[n]);
		}
	}
	obj.focusEntries=focusEntries;
}
function ur_CAL_drawMonth(sId) {
  var obj     = ur_CAL_getObj(sId);
  var oTbl=ur_get(sId+"-tbl");
  ur_CAL_drawMonthEntries(sId) 
}
function ur_CAL_drawMonthEntries(sId) {
	var iFixedHeight=16*6;
	var iMaxHeight = 16*6;
	var obj=ur_CAL_getObj(sId);
	var oEntries = obj.entries;
	var oStartCell = ur_get(sId+"-start");
	var oRows = oStartCell.parentNode.parentNode.childNodes;
  var iHeight = 16; 
	for (var n=0;n<oEntries.length;n++) {
		oStartCell = oRows[oEntries[n].srow].cells[Math.floor(oEntries[n].scol) + 1];
		if (oEntries[n].level>5) continue; 
		if (oEntries[n].level>3) {
		  
		  oRows[oEntries[n].srow].style.height = (1.5*(oEntries[n].level+2))+"em";
		}
		var iColWidth = oStartCell.offsetWidth;
		var oPos = ur_CAL_getPos(oStartCell);
		oPos.x +=(oEntries[n].scol - Math.floor(oEntries[n].scol)) * iColWidth;
    if (oEntries[n].fd) {
		  var iWidth = Math.floor(iColWidth*oEntries[n].dur)-1;
		  oEntries[n].ref.style.top = sapUrMapi_sAddUnit( oPos.y + (iHeight * oEntries[n].level ) + 1 , "px" );
		  oEntries[n].ref.style.height = sapUrMapi_sAddUnit( iHeight , "px" );
		  oEntries[n].ref.style.width = sapUrMapi_sAddUnit( iWidth , "px" );
		  if (ur_system.direction == "rtl")
			  oEntries[n].ref.style.right = sapUrMapi_sAddUnit( oPos.x+1 , "px" ); 
		  else
			  oEntries[n].ref.style.left=sapUrMapi_sAddUnit( oPos.x+1 , "px" );
	  } else {
		  var iWidth = iColWidth-1;
		  oEntries[n].ref.style.top = sapUrMapi_sAddUnit( oPos.y + (iHeight * oEntries[n].level ) + 1 , "px" );
		  oEntries[n].ref.style.height = sapUrMapi_sAddUnit( iHeight , "px" );
		  oEntries[n].ref.style.width = sapUrMapi_sAddUnit( iWidth , "px" );
		  if (ur_system.direction == "rtl")
			  oEntries[n].ref.style.right = sapUrMapi_sAddUnit( oPos.x+1 , "px" ); 
		  else
			  oEntries[n].ref.style.left=sapUrMapi_sAddUnit( oPos.x+1 , "px" );
	  }
	}
}
function ur_CAL_draw(sId) {
  var obj=ur_CAL_getObj(sId);
  if (obj.type=="Y" || obj.type == "HM" ) {
    ur_CAL_calcYearEntries(sId);
    ur_CAL_drawYear(sId);
  } else if (obj.type=="D" || obj.type=="MD") {
    ur_CAL_calcDayEntries(sId);
    ur_CAL_drawDay(sId);
  } else if (obj.type=="M") {
    ur_CAL_calcMonthEntries(sId);
    ur_CAL_drawMonth(sId);
  }
  return true;
}
function ur_CAL_activate(oEvt) {
  var oSrc = ur_EVT_src(oEvt);
  var sId = ur_getRootObj(oSrc).id;
  var obj=ur_CAL_getObj(sId);
  if (obj.type == "MD" || obj.type == "D") {
    if ( obj.ref.contains(oEvt.fromElement)) {
      if (obj.focusedCol) {
        var oEntries = ur_CAL_Day_getEntriesOfColumn(obj,obj.focusedCol-1);
      }
      return;
    }
    if ( oEvt.shiftKey ) {
      
      
      var iColCount = obj.ref.getElementsByTagName("TH").length-1;
      var oEntries = ur_CAL_Day_getEntriesOfColumn(obj,iColCount);
      if (oEntries.length > 0) {
        ur_CAL_setFocus(obj,oEntries[oEntries.length-1].ref);
      } else {
        ur_CAL_setFocus(obj,obj.ref.getElementsByTagName("TH")[iColCount]);
      }
    } else {
      ur_CAL_setFocus(obj,obj.ref.getElementsByTagName("TH")[1])
    }
  } else if (obj.type == "M") {
    ur_CAL_Month_activate(obj,oEvt);  
  }
  ur_SCR_activate(oEvt);
}
function ur_CAL_keydown(sId,oEvt) {
  
  var obj=ur_CAL_getObj(sId);
  
  if (sapUrMapi_skip(obj.ref.id,oEvt)) {
    return;
  } else if (oEvt.keyCode=="32" || oEvt.keyCode=="13") {
    ur_CAL_click(sId,oEvt);
  } else if (obj.type == "D" || obj.type == "MD") {
    ur_CAL_Day_keydown( obj , oEvt);
  } else if (obj.type == "M") {
    ur_CAL_Month_keydown( obj , oEvt);
  } else if (obj.type == "Y" || obj.type == "HM")  {
    ur_CAL_Year_keydown(obj,oEvt);
  } else {
		sapUrMapi_skip(sId,oEvt);
  }
}
function ur_CAL_click(sId, oEvt) {
  var o=ur_get(sId);
  var obj = ur_CAL_getObj(sId);
  var oSrc=ur_EVT_src(oEvt);
  var oMainSource = oSrc;
  
  var sType = ur_getAttD( oMainSource,"cal","");
  if (sType == "") sType = ur_getAttD( oMainSource,"tp","")
  while (sType == "" && oMainSource.tagName != "TABLE") {
    oMainSource = oMainSource.parentNode;
    sType = ur_getAttD( oMainSource,"cal","");
    if (sType == "") sType = ur_getAttD( oMainSource,"tp","")
  }
  if (sType=="COL" || sType=="ENTRY") {
    if (sType=="ENTRY") {
      oEntry = eval("result={" + oMainSource.data +"};");
      obj.focusedCol = oEntry.scol+1;  
    }
    ur_CAL_setFocus(obj,oMainSource);
    sapUrMapi_Focus_showFocusRect();
  }
  
  if (oSrc.tagName=="DIV" && oSrc.parentNode.tagName=="TD") oSrc=oSrc.parentNode;
  if (oSrc.tagName=="DIV" && oSrc.parentNode.tagName=="TH") oSrc=oSrc.parentNode;
  oEvt["ur_param"]=new Array();
  if (oSrc.tagName=="TH" && ur_getAttD(oSrc,"cidx","")!="") {
    oEvt.ur_param["col"]=ur_getAttD(oSrc,"cidx","");
    
    ur_EVT_fire(o,"och",oEvt);
  } else if (oSrc.tagName=="TD" && (ur_getAttD(oSrc,"cidx","")!="" || ur_getAttD(oSrc,"ridx","")!="")) {
    var iCol=ur_getAttD(oSrc,"cidx","");
    var iRow=ur_getAttD(oSrc,"ridx","");
    if (iCol!="" && iRow!="") {
      oEvt.ur_param["col"]=iCol;
      oEvt.ur_param["row"]=iRow;
			if (ur_getAttD(oSrc,"fr","")=="1") {
				
				oEvt.ur_param["fullday"]=true;
    
      }
      
      ur_EVT_fire(o,"ocl",oEvt);
    } else {
      oEvt.ur_param["row"]=iRow;
      
      ur_EVT_fire(o,"orh",oEvt);
    }
  } else if (ur_getAttD(oSrc,"data","")!="") {
    if (ur_getAttD(oSrc,"data","").indexOf("selb:true")>-1) {
      
      oEvt.ur_param["entryid"]=oSrc.id.split("-")[0];
      ur_EVT_fire(o,"oes",oEvt);
    }
  } else if (oSrc.tagName=="IMG" && ur_getAttD(oSrc,"class","")!="urCVMore") {
    
    var oTd=oSrc;
    while (oTd && oTd.tagName!="TD") {
      oTd=oTd.parentNode;
    }
    if (!oTd) return;
    var iCol=ur_getAttD(oTd,"cidx","");
    var iRow=ur_getAttD(oTd,"ridx","");
    if (iCol!="" && iRow!="") {
      oEvt.ur_param["col"]=iCol;
      oEvt.ur_param["row"]=iRow;
			if (ur_getAttD(oTd,"fr","")=="1") {
				
				oEvt.ur_param["fullday"]=true;
    
      }
    }
    ur_EVT_fire(o,"omcl",oEvt);
  }
  if (obj.type == "M") {
		ur_CAL_Month_click(obj,oEvt);
  }
}
function ur_CAL_getPos(o) {
  var pos={x:0,y:0};
  var orig=o;
  while (o.tagName!="BODY") {
    if (o.tagName=="DIV" && o.currentStyle.overflow!="none") break;
    pos.x+=o.offsetLeft;
    pos.y+=o.offsetTop;
    o=o.offsetParent;
  }
  if (ur_system.direction=="rtl") {
    pos.x=o.offsetWidth-pos.x-orig.offsetWidth;
  }
  return pos;
}
function sapUrMapi_CAL_getScrollTop(sId) {
  var oStartCell=ur_get(sId+"-start");
  var oScrl=ur_get(sId+"-scrl");
  var pos=oScrl.scrollTop;
  return pos/oStartCell.offsetHeight;
}
function ur_CAL_sortRowEntries(a,b) {
  if (a.scol-b.scol!=0) return a.scol-b.scol
  return a.srow-b.srow;
}
function ur_CAL_sortColEntries(a,b) {
  if (a.srow-b.srow!=0) return a.srow-b.srow
  return a.scol-b.scol;
}
function ur_CAL_setFocus( obj, oNewElem) {
  if (obj.focusedElement) {
    sapUrMapi_setTabIndex ( obj.focusedElement, "-1");       
  }
  sapUrMapi_setTabIndex ( oNewElem, "0");
  obj.focusedElement = oNewElem;
  if (obj.focusedElement.tagName=="TD") {
    obj.focusedCol = obj.focusedElement.cellIndex;
	  obj.focusedRow = obj.focusedElement.parentNode.rowIndex;
  }
  if ( ur_getAttD( obj.focusedElement,"cal","") == "COL") {
    var iColIdx = parseInt( ur_getAttD( obj.focusedElement,"idx","-1") );
    if ( iColIdx > -1 ) { 
      obj.focusedCol = iColIdx;
    }
    ur_CAL_Day_getEntriesOfColumn(obj,iColIdx-1);
    obj.focusedElement.setAttribute("ici",obj.colEntries[iColIdx-1].length);
  }
  ur_focus( oNewElem );
}
function ur_CAL_Day_focusNextDay( obj, oEvt ) {
  var iColIdx = obj.focusedCol;
  if (obj.focusedElement) {
    sapUrMapi_setTabIndex ( obj.focusedElement, "-1");       
  }
  obj.focusedElement = obj.ref.getElementsByTagName("TH")[obj.focusedCol];
  var iColCount = parseInt( ur_getAttD( obj.focusedElement,"ic","-1") );
  if ( !isNaN(iColIdx) ) { 
    if (iColIdx < iColCount) { 
      obj.focusedCol++;
      ur_CAL_setFocus( obj, obj.focusedElement.nextSibling)
      ur_EVT_cancel(oEvt);
    }
  }
}
function ur_CAL_Day_focusPrevDay( obj, oEvt ) {
  var iColIdx = obj.focusedCol;
  if (obj.focusedElement) {
    sapUrMapi_setTabIndex ( obj.focusedElement, "-1");       
  }
  obj.focusedElement = obj.ref.getElementsByTagName("TH")[obj.focusedCol];
  var iColCount = parseInt( ur_getAttD( obj.focusedElement,"ic","-1") );
  if ( !isNaN(iColIdx) ) { 
    if (iColIdx > 1) { 
      obj.focusedCol--;
      ur_CAL_setFocus( obj, obj.focusedElement.previousSibling)
      ur_EVT_cancel(oEvt);
    }
  }
}
function ur_CAL_Day_getEntriesOfColumn(obj,iCol) {
 
    obj.colEntries = new Array();  
 
 
    var oEntries = new Array();
    var iFullDayEntryCount = 0;
    var iEntryCount = 0;
    for (var i = 0;i < obj.fullday.length; i++) { 
      if (obj.fullday[i].scol == iCol || (iCol > obj.fullday[i].scol && iCol < obj.fullday[i].scol + obj.fullday[i].dur )) {
         oEntries.push(obj.fullday[i]);
         iFullDayEntryCount++;
         obj.fullday[i].ref.setAttribute("idx",iFullDayEntryCount); 
      }
    }
    
    for (var i = 0;i < oEntries.length; i++) {
      oEntries[i].ref.setAttribute("ic",iFullDayEntryCount); 
    }
    for (var i = 0;i < obj.entries.length; i++) {
      if (obj.entries[i].scol == iCol) {
        oEntries.push(obj.entries[i]);
        iEntryCount++;
        obj.entries[i].ref.setAttribute("idx",iEntryCount); 
      }
    }
    
    for (var i = iFullDayEntryCount;i < oEntries.length; i++) {
      oEntries[i].ref.setAttribute("ic",iEntryCount); 
    }
    obj.colEntries[iCol] = oEntries; 
  return obj.colEntries[iCol];
}
function ur_CAL_Day_keydown( obj, oEvt) {
  
  
  var oDomRef = ur_EVT_src (oEvt);
  var sType = ur_getAttD( oDomRef,"cal","");
  if (sType == "") sType = ur_getAttD( oDomRef,"tp","")
  while (sType == "" && oDomRef.tagName != "TABLE") {
    oDomRef = oDomRef.parentNode;
    sType = ur_getAttD( oDomRef,"cal","");
    if (sType == "") sType = ur_getAttD( oDomRef,"tp","")
  }
  if ( oDomRef == obj.ref ) {
     sapUrMapi_setTabIndex (obj.ref.getElementsByTagName("TH")[1],"0");
     return;
  }
  if ( !obj.focusedElement ) obj.focusedElement = oEvt.srcElement;
  if ( !obj.focusedCol )   obj.focusedCol = 1;
  
  var oEntriesThis = ur_CAL_Day_getEntriesOfColumn(obj,obj.focusedCol-1);
  
  var oEntriesPrev = ur_CAL_Day_getEntriesOfColumn(obj,obj.focusedCol-2);
  
  
  
  if (oEvt.keyCode == ur_KEYS.TAB && !oEvt.shiftKey ) {
    if ( sType == "COL" ) {
      
      if (oEntriesThis.length > 0) {
        ur_CAL_setFocus(obj, oEntriesThis[0].ref);
        ur_EVT_cancel(oEvt);
        return;
      }
      ur_CAL_Day_focusNextDay(obj, oEvt);
    } else if ( sType == "ENTRY" ) {
      
      for (var i = 0;i < oEntriesThis.length; i++) {
        if (oEntriesThis[i].ref == oDomRef && i < oEntriesThis.length-1) {
          ur_CAL_setFocus(obj, oEntriesThis[i+1].ref);
          ur_EVT_cancel(oEvt);
          return;
        }
      }
      ur_CAL_Day_focusNextDay(obj, oEvt);
      return;
    }
    
  
  } else if (oEvt.keyCode == ur_KEYS.TAB && oEvt.shiftKey ) {
    if ( sType == "COL" ) {
      
      if (oEntriesPrev.length > 0) {
        ur_EVT_cancel(oEvt);
        ur_CAL_setFocus(obj, oEntriesPrev[oEntriesPrev.length-1].ref);
        obj.focusedCol--;
        return;
      }
      
      ur_CAL_Day_focusPrevDay(obj, oEvt);
      return;
    } else if ( sType == "ENTRY" ) {
      
      for (var i = oEntriesThis.length -1 ;i >= 0; i--) {
        if (oEntriesThis[i].ref == oDomRef && i > 0) {
          ur_EVT_cancel(oEvt);
          ur_CAL_setFocus(obj, oEntriesThis[i-1].ref);
          return;
        }
      }
      var oNewElem = obj.ref.getElementsByTagName("TH")[obj.focusedCol];
      ur_EVT_cancel(oEvt);
      ur_CAL_setFocus( obj, oNewElem)
      return;
    }
  } else if (oEvt.keyCode == ur_KEYS.LEFT) {
    ur_CAL_Day_focusPrevDay(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.RIGHT) {
    ur_CAL_Day_focusNextDay(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.BEGIN) {
    
    var oNewElem = obj.ref.getElementsByTagName("TH")[obj.focusedCol].parentNode.firstChild.nextSibling;
    ur_CAL_setFocus( obj, oNewElem)
  } else if (oEvt.keyCode == ur_KEYS.END) {
    
    var oNewElem = obj.ref.getElementsByTagName("TH")[obj.focusedCol].parentNode.lastChild;
    ur_CAL_setFocus( obj, oNewElem)
  }
}
function ur_CAL_Month_keydown( obj, oEvt) {
  
  
  var oDomRef = ur_EVT_src (oEvt);
	
  
  var oDomRef = ur_EVT_src (oEvt);
  var sType = ur_getAttD( oDomRef,"cal","");
  if (sType == "") sType = ur_getAttD( oDomRef,"tp","")
  while (sType == "" && oDomRef.tagName != "TABLE") {
    oDomRef = oDomRef.parentNode;
    sType = ur_getAttD( oDomRef,"cal","");
    if (sType == "") sType = ur_getAttD( oDomRef,"tp","")
  }
  
  if (oEvt.keyCode == ur_KEYS.TAB && !oEvt.shiftKey ) {
  
  } else if (oEvt.keyCode == ur_KEYS.TAB && oEvt.shiftKey ) {
  } else if ((oEvt.keyCode == ur_KEYS.LEFT && ur_system.direction=="ltr") || (oEvt.keyCode == ur_KEYS.RIGHT && ur_system.direction=="rtl")) {
    ur_CAL_Month_focusCellPrev(obj, oEvt);
  } else if ((oEvt.keyCode == ur_KEYS.RIGHT && ur_system.direction=="ltr") || (oEvt.keyCode == ur_KEYS.LEFT && ur_system.direction=="rtl")) {
    ur_CAL_Month_focusCellNext(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.UP) {
    ur_CAL_Month_focusCellUp(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.DOWN) {
    ur_CAL_Month_focusCellDown(obj, oEvt);
  } else if (oEvt.keyCode == ur_KEYS.BEGIN && sapUrMapi_bCtrl(oEvt)) {
    
    var oNewElem = obj.ref.getElementsByTagName("TD")[1];
    ur_CAL_Month_focus( obj, oNewElem)
  } else if (oEvt.keyCode == ur_KEYS.END && sapUrMapi_bCtrl(oEvt)) {
    
    var oElements = obj.ref.getElementsByTagName("TD");
    var oNewElem = oElements[oElements.length-1];
    ur_CAL_Month_focus( obj, oNewElem)
  } else if (oEvt.keyCode == ur_KEYS.BEGIN && !sapUrMapi_bCtrl(oEvt)) {
    
    var oElements = obj.ref.getElementsByTagName("TR")[obj.focusedRow].childNodes;
    var oNewElem = oElements[1];
    ur_CAL_Month_focus( obj, oNewElem)
  } else if (oEvt.keyCode == ur_KEYS.END && !sapUrMapi_bCtrl(oEvt)) {
    
    var oElements = obj.ref.getElementsByTagName("TR")[obj.focusedRow].childNodes;
    var oNewElem = oElements[oElements.length-1];
    ur_CAL_Month_focus( obj, oNewElem)
  }  
}
function ur_CAL_Month_activate(obj,oEvt) {
  
  
  
  
  
  
  
  
  ur_CAL_Month_initNavigation(obj);
  
  var oDomRef = ur_EVT_src(oEvt);
  if (obj.ref==oDomRef || (!obj.ref.contains(oDomRef)) ) {
    
    if (oEvt.shiftKey) {
      var x=obj.tabChain.length-1;
      while(x>=0) {
        if (obj.tabChain[x].type!="CELLNOENTRY") {
					obj.focusedElement = obj.tabChain[x].navObj.ref;
					ur_CAL_Month_focusElement(obj);
					ur_EVT_cancel(oEvt);
					return;
				}
				x--;
			}
    } else {
      var x=0;
      while(x<obj.tabChain.length) {
        if (obj.tabChain[x].type!="CELLNOENTRY") {
					obj.focusedElement = obj.tabChain[x].navObj.ref;
					ur_CAL_Month_focusElement(obj);
					return;
				}
				x++;
			}
    }
    obj.focusedElement = null;   
  } 
}
function ur_CAL_Month_focusElement(obj) {
	sapUrMapi_setTabIndex(obj.focusedElement,"0");
  ur_focus(obj.focusedElement);
}
function ur_CAL_Month_focusNextTabElement(obj) {
  for (var i=0;i<obj.tabChain.length;i++) {
    if (obj.tabChain[i].navObj.ref == obj.focusedElement) {
      var x=i;
      while (x<obj.tabChain.length-1) {
        if ( obj.tabChain[x+1].type!="CELLNOENTRY") {
					sapUrMapi_setTabIndex(obj.focusedElement,"-1");
					obj.focusedElement = obj.tabChain[x+1].navObj.ref
		      ur_CAL_Month_focusElement(obj);
		      return obj;
				}
				x++;
      } 
      return null;
    }
  }
}
function ur_CAL_Month_focusPrevTabElement(obj) {
  for (var i=obj.tabChain.length-1;i>=0;i--) {
    if (obj.tabChain[i].navObj.ref == obj.focusedElement) {
      var x=i;
      while (x>0) {
        if ( obj.tabChain[x-1].type!="CELLNOENTRY") {
					sapUrMapi_setTabIndex(obj.focusedElement,"-1");
					obj.focusedElement = obj.tabChain[x-1].navObj.ref
					ur_CAL_Month_focusElement(obj);
		      return obj;
				}
				x--;
      } 
      ur_focus(ur_findPreviousFocusableElement(obj.ref));
      return obj.ref;
    } 
  }
}
function ur_CAL_Month_initNavigation(obj) {
  if (!obj.monthInit) {
		var oEntries = obj.entries;
		obj.navigationGrid = new Array();
		obj.navigationGrid.rows = new Array();
		obj.tabChain = new Array();
		var oRows = obj.ref.getElementsByTagName("TR");
		for (var i=1;i<oRows.length;i++) {
			obj.navigationGrid.rows.push({ref:oRows[i],cells:new Array()});
			for (var j=1;j<oRows[i].cells.length;j++) {
			  
				obj.navigationGrid.rows[i-1].cells.push({ref:oRows[i].cells[j]});
				obj.navigationGrid.rows[i-1].cells[j-1].entries = ur_CAL_Month_getEntriesOfCell(obj,i-1,j-1);
				ur_CAL_Month_setFocusAttributes(obj,obj.navigationGrid.rows[i-1].cells[j-1])
				if (obj.navigationGrid.rows[i-1].cells[j-1].entries.length>0) {
					obj.tabChain.push({navObj:obj.navigationGrid.rows[i-1].cells[j-1],type:"CELL"});
				} else {
					obj.tabChain.push({navObj:obj.navigationGrid.rows[i-1].cells[j-1],type:"CELLNOENTRY"});
				}
				for (var x=0;x<obj.navigationGrid.rows[i-1].cells[j-1].entries.length;x++) {
				  var oEntry =obj.navigationGrid.rows[i-1].cells[j-1].entries[x];
					if (!oEntry.referenceCount) {
					  obj.navigationGrid.rows[i-1].cells[j-1].entries[x].referenceCount = 1;
						obj.tabChain.push({navObj:oEntry,type:"ENTRY"});
					}
					sapUrMapi_setTabIndex(oEntry.ref,"-1");
				}
			}
		}
		for (var i=0;i<obj.tabChain.length;i++) {
		  
		  if (obj.tabChain[i].navObj.type=="CELL")
				obj.tabChain[i].navObj.ref.setAttribute("ic",obj.tabChain[i].navObj.entries.length);
		  ur_attachEvent(obj.tabChain[i].navObj.ref, "keydown", ur_CAL_Month_itemKeyDown);
		}
		obj.monthInit=true;
	}
}
function ur_CAL_Month_itemKeyDown(oEvt) {
  var oDomRef = ur_EVT_src (oEvt);
	
  
  var oSrc = ur_EVT_src(oEvt);
  var sId = ur_getRootObj(oSrc).id;
  var obj=ur_CAL_getObj(sId);
  
  if (oEvt.keyCode == ur_KEYS.TAB && !oEvt.shiftKey ) {
    if (ur_CAL_Month_focusNextTabElement(obj))
	    ur_EVT_cancel(oEvt);
  
  } else if (oEvt.keyCode == ur_KEYS.TAB && oEvt.shiftKey ) {
    if (ur_CAL_Month_focusPrevTabElement(obj))
	    ur_EVT_cancel(oEvt);
  } else if(oEvt.keyCode==32 && sapUrMapi_bCtrl(oEvt)==true && oSrc.getAttribute("more")) {
    oSrc.getElementsByTagName("IMG")[0].click();
  }
}
function ur_CAL_Month_click(obj,oEvt) {
  var oDomRef = ur_EVT_src (oEvt);
	
  
  var oSrc = ur_EVT_src(oEvt);
  var oTd = oSrc;
  while (oTd && oTd.tagName!="TD") {
    oTd=oTd.parentNode;
  }
  var sId = ur_getRootObj(oSrc).id;
  var obj=ur_CAL_getObj(sId);
	for (var i=0;i<obj.tabChain.length;i++) {
	  
	  if (obj.tabChain[i].navObj.ref==oTd) {
			if (obj.focusedElement)
				sapUrMapi_setTabIndex(obj.focusedElement,"-1");
			obj.focusedElement =obj.tabChain[i].navObj.ref
			ur_CAL_Month_focusElement(obj);		
		}
	}
  
  
}
function ur_CAL_Month_getEntriesOfCell (obj,iRow, iCol){
  var oEntries = new Array();
	var iEntryCount=0;
  for (var i = 0;i < obj.entries.length; i++) {
	  var oEntry = obj.entries[i];
    if (((oEntry.scol == iCol && oEntry.ecol > iCol) ||
         (oEntry.scol < iCol && oEntry.ecol > iCol))&& oEntry.srow == iRow) {
      oEntries.push(oEntry);
      iEntryCount++;
      obj.entries[i].ref.setAttribute("idx",iEntryCount); 
    }
  }
  
  for (var i = 0;i < oEntries.length; i++) {
    oEntries[i].ref.setAttribute("ic",iEntryCount); 
  }
  return oEntries;
}
function ur_CAL_Month_setFocusAttributes(obj,oCellObj) {
	
	var oEntries = oCellObj.entries;
	var oElem = oCellObj.ref;
	if (oEntries.length>0) {
	  oCellObj.ref.setAttribute("ic",new String(oEntries.length));
	}
	
	oCellObj.ref.setAttribute("week",oCellObj.ref.parentNode.firstChild.innerText);
	
	oElem.setAttribute("dayname",obj.ref.getElementsByTagName("TH")[oCellObj.ref.cellIndex].innerText);
	if (oElem.childNodes[0].className.indexOf("TOD")>-1) oElem.setAttribute("st","t");
	if (oElem.getElementsByTagName("IMG").length>0) oElem.setAttribute("more","1");
}
function ur_CAL_Month_getFocusedCell(obj) {
  var oLastCell  = null;
  if (obj.focusedElement && obj.focusedElement.tagName=="TD") {
    oLastCell = obj.focusedElement;
  } else {
		for (var i=0;i<obj.tabChain.length;i++) {
			if (obj.tabChain[i].navObj.ref==obj.focusedElement) {
			  break;
			}
			if (obj.tabChain[i].type=="CELL") {
			  oLastCell = obj.tabChain[i].navObj.ref;
			}
		}
	}
	return oLastCell;
}
function ur_CAL_Month_focusCellUp(obj, oEvt) {
  var oLastCell=ur_CAL_Month_getFocusedCell(obj);
	if (oLastCell) {
	  var iRow = oLastCell.parentNode.rowIndex;
	  var iCol = oLastCell.cellIndex;
	  if (iRow>1) {
			obj.focusedElement = obj.ref.getElementsByTagName("TR")[iRow-1].cells[iCol];
      ur_CAL_Month_focusElement( obj );
      ur_EVT_cancel(oEvt);
	  }
	}
}
function ur_CAL_Month_focusCellDown(obj, oEvt) {
  var oLastCell=ur_CAL_Month_getFocusedCell(obj);
	if (oLastCell) {
	  var iRow = oLastCell.parentNode.rowIndex;
	  var iCol = oLastCell.cellIndex;
	  if (iRow<oLastCell.parentNode.parentNode.rows.length) {
			obj.focusedElement = obj.ref.getElementsByTagName("TR")[iRow+1].cells[iCol];
      ur_CAL_Month_focusElement( obj );
      ur_EVT_cancel(oEvt);
	  }
	}
}
function ur_CAL_Month_focusCellNext(obj, oEvt) {
  var oLastCell=ur_CAL_Month_getFocusedCell(obj);
	if (oLastCell && oLastCell.nextSibling) {
		obj.focusedElement = oLastCell.nextSibling;
		ur_CAL_Month_focusElement( obj );
		ur_EVT_cancel(oEvt);
	}
}
function ur_CAL_Month_focusCellPrev(obj, oEvt) {
  var oLastCell=ur_CAL_Month_getFocusedCell(obj);
	if (oLastCell && oLastCell.previousSibling.previousSibling) {
		obj.focusedElement = oLastCell.previousSibling;
		ur_CAL_Month_focusElement( obj );
		ur_EVT_cancel(oEvt);
	}
}
function ur_CAL_Month_getTutorText(o,sTut) {
   var count = o.getAttribute("ic");
   if (!count) { 
     count="0";
     sTut="";
   }
   var sKey="SAPUR_CAL_MCELL";
   if (count=="1") {
     sKey+="_ONE";
     sTut = getLanguageText("SAPUR_CAL_MCELL_TUT");
   }
   if (o.getAttribute("more")) {
	   sTut += " " + getLanguageText("SAPUR_SEPARATOR") + " " + getLanguageText("SAPUR_CAL_MORE_TUT");
   }
   return sTut;
	   
}
function ur_CAL_Month_getCtText(o) {
   var sKey="SAPUR_CAL_MCELL";
   var count = o.getAttribute("ic");
   if (!count) { 
     count="0";
   }
   if (count=="1") {
     sKey+="_ONE";
   }
	 return "" +
	    o.getAttribute("dayname") + " " +
	    o.innerText + " " + 
			o.getAttribute("desc") + 
			" " + getLanguageText("SAPUR_SEPARATOR") +
			" " + getLanguageText(sKey, new Array(count)) +
			" " + getLanguageText("SAPUR_SEPARATOR") +
			" " +getLanguageText("SAPUR_DN_WEEK",new Array(o.getAttribute("week")));	
}
	  
function ur_CAL_Year_keydown(obj,oEvt) {
	var focusEntries=obj.focusEntries;
  if (!focusEntries) return;
	var o = document.activeElement;
	if (oEvt.keyCode==ur_KEYS.SPACE) {
	  
	} else if (oEvt.keyCode==ur_KEYS.UP) {
    var oPrevRow = null;
    for (var n=0;n<focusEntries.length;n++) {
      if (o==focusEntries[n].ref) {
				if (oPrevRow) {
				  sapUrMapi_focusElement(oPrevRow);
				}
				ur_EVT_cancel(oEvt);
				return;
      }
      if (focusEntries[n].row) {
        oPrevRow = focusEntries[n].ref;
      }
    }
  } else if (oEvt.keyCode==ur_KEYS.DOWN) {
    var oNextRow = null;
    for (var n=focusEntries.length-1;n>=0;n--) {
      if (o==focusEntries[n].ref) {
				if (oNextRow) {
				  sapUrMapi_focusElement(oNextRow);
				}
				ur_EVT_cancel(oEvt);
				return;
      }
      if (focusEntries[n].row) {
        oNextRow = focusEntries[n].ref;
      }
    }
  } else if (oEvt.keyCode==9 && !sapUrMapi_bCtrl(oEvt)) {
		if (o==obj.ref && (!oEvt.shiftKey)) {
			ur_EVT_cancel(oEvt);
			sapUrMapi_focusElement(focusEntries[0].ref);
		} else {
  		for (var n=0;n<focusEntries.length;n++) {
				if (o==focusEntries[n].ref && n<focusEntries.length-1 && (!oEvt.shiftKey)) {
					ur_EVT_cancel(oEvt);
					sapUrMapi_focusElement(focusEntries[n+1].ref);
				} else if (o==focusEntries[n].ref && n>0 && oEvt.shiftKey) {
					ur_EVT_cancel(oEvt);
					sapUrMapi_focusElement(focusEntries[n-1].ref);
				} else if (o!=obj.ref && n==0 && oEvt.shiftKey) {
					ur_EVT_cancel(oEvt);
					sapUrMapi_focusElement(obj.ref);
				} else if (o==focusEntries[focusEntries.length-1].ref && !oEvt.shiftKey){
					var oR=ur_get(obj.ref.id);
					var oN=null;
					var oF=null;
					while(oR!=null && oF==null){
						while(oR!=null && oR.nextSibling==null)
							oR=oR.parentNode;
						if(oR==null)
							break;				
						oN=oR.nextSibling;
						while(oN!=null && oF==null){
							oF=sapUrMapi_findFirstFocus(oN);
							if(oF==null)
								oN=oN.nextSibling;
						}
						if(oF==null)
							oR=oR.parentNode;
						else
							break;
					}
					if (oF) {
						ur_EVT_cancel(oEvt);
						sapUrMapi_focusElement(oF);
					}
				}
			}
		}
	}
}

//** CheckBox.ie5 **

function sapUrMapi_CheckBox_toggle(sId,e) {
	var oIn = ur_get(sId),
		oRoot = ur_get(sId + "-r");
	if ( ur_isSt(oRoot,ur_st.READONLY) || ur_isSt(oRoot,ur_st.DISABLED) ) return false;  
	var oLbl=ur_get(sId+"-lbl"),
		oImg=ur_get(sId+"-img");
	var newClass = "";
  
	if (ur_isSt(oRoot,ur_st.SELECTED)){
		oIn.checked=false;
		ur_setSt(oRoot,ur_st.SELECTED,false);
		ur_setSt(oRoot,ur_st.NOTSELECTED,true);
		oImg.className=oImg.className.replace("On","Off");
	} else { 
		oIn.checked=true;
		ur_setSt(oRoot,ur_st.NOTSELECTED,false);
		ur_setSt(oRoot,ur_st.SELECTED,true);
		oImg.className=oImg.className.replace("Off","On");
	}
	
	newClass=oImg.className;
	oImg.className="";
	oImg.className=newClass;
	sapUrMapi_refocusElement(oRoot);
	if (ur_system.is508) oIn.fireEvent("onactivate");
	return true;
}
function sapUrMapi_CheckBox_setDisabled(sId) {
	var oIn=ur_get(sId),
		oRoot = ur_get(sId + "-r"),
		oLbl=ur_get(sId+"-lbl"),
		oImg=ur_get(sId+"-img"),
		sClass = "",
		newClass = "";
	if (ur_isSt(oRoot,ur_st.DISABLED)) return;
	if (ur_isSt(oRoot,ur_st.INVALID)){
		sClass = "Inv";
	}
	oLbl.className=oLbl.className.replace("Lbl" + sClass,"LblDsbl");
	if (ur_isSt(oRoot,ur_st.READONLY)){
		sClass += "Ro";
	}
	if (ur_isSt(oRoot,ur_st.SELECTED))
		oImg.className=oImg.className.replace("On" + sClass,"OnDsbl");
	else if(ur_isSt(oRoot,ur_st.UNDEFINED))
		oImg.className=oImg.className.replace("Ind" + sClass,"IndDsbl");
	else
		oImg.className=oImg.className.replace("Off" + sClass ,"OffDsbl");	
	
	
	newClass=oImg.className;
	oImg.className="";
	oImg.className=newClass;
	
	if (ur_system.is508) {
		sapUrMapi_setTabIndex(oRoot,"0");
	} else {
		sapUrMapi_setTabIndex(oRoot,"-1");
	}
  oIn.disabled=true;	
	ur_setSt(oRoot,ur_st.DISABLED,true);
	if (ur_isSt(oRoot,ur_st.INVALID)) {
		sapUrMapi_Label_setInvalid(sapUrMapi_Label_getInputLabel(sId),false);
		sapUrMapi_Label_setDisabled(sapUrMapi_Label_getInputLabel(sId));
	} else {
	sapUrMapi_Label_setDisabled(sapUrMapi_Label_getInputLabel(sId));
	}		
}
function sapUrMapi_CheckBox_setEnabled(sId) {
	var oIn=ur_get(sId),
		oRoot = ur_get(sId + "-r"),
		oLbl=ur_get(sId + "-lbl"),
		oImg=ur_get(sId + "-img");
	var newClass = "";
	oLbl.className=oLbl.className.replace("Dsbl","");
	oLbl.className=oLbl.className.replace("Ro","");
	oLbl.className=oLbl.className.replace("Inv","");
	oImg.className=oImg.className.replace("Dsbl","");
	oImg.className=oImg.className.replace("Ro","");
	oImg.className=oImg.className.replace("Inv","");
	
	
	newClass=oImg.className;
	oImg.className="";
	oImg.className=newClass;
	
	oIn.disabled=false;
	ur_setSt(oRoot,ur_st.DISABLED,false);
	ur_setSt(oRoot,ur_st.READONLY,false);
	ur_setSt(oRoot,ur_st.INVALID,false);
	sapUrMapi_setTabIndex(oRoot,"0");
	sapUrMapi_Label_setInvalid(sapUrMapi_Label_getInputLabel(sId),false);
	sapUrMapi_Label_setEnabled(sapUrMapi_Label_getInputLabel(sId));
}
function sapUrMapi_CheckBox_setReadonly(sId,bSet){
	var oIn=ur_get(sId),
		oRoot = ur_get(sId + "-r"),
		oLbl=ur_get(sId+"-lbl"),
		oImg=ur_get(sId+"-img"),
		sClass="",
		newClass = "";
	if(bSet){
		if (ur_isSt(oRoot,ur_st.READONLY)) return;
		if (ur_isSt(oRoot,ur_st.DISABLED)){
			return;
		}
		if (ur_isSt(oRoot,ur_st.INVALID)){
			sClass = "Inv";
		}
		if (ur_isSt(oRoot,ur_st.SELECTED))
			oImg.className=oImg.className.replace("On" +sClass,"On" + sClass +"Ro");
		else if (ur_isSt(oRoot,ur_st.UNDEFINED))
			oImg.className=oImg.className.replace("Ind"+sClass,"Ind" + sClass +"Ro");			
		else
			oImg.className=oImg.className.replace("Off"+sClass,"Off" + sClass +"Ro");	
			
		
		newClass=oImg.className;
		oImg.className="";
		oImg.className=newClass;
			
		oIn.disabled=true;	
		ur_setSt(oRoot,ur_st.READONLY,true);
		if (ur_system.is508) {
			sapUrMapi_setTabIndex(oRoot,"0");
		} else {
			sapUrMapi_setTabIndex(oRoot,"-1");
	}
		
	} else {
		if (!ur_isSt(oRoot,ur_st.DISABLED)) {
			if (ur_isSt(oRoot,ur_st.INVALID)){
				sapUrMapi_CheckBox_setEnabled(sId);
				sapUrMapi_CheckBox_setInvalid(sId);
			} else {
				sapUrMapi_CheckBox_setEnabled(sId);
			}
	
		}
		ur_setSt(oRoot,ur_st.READONLY,false);
	}
}
function sapUrMapi_CheckBox_setInvalid(sId) {
	var oIn=ur_get(sId),
		oRoot = ur_get(sId + "-r"),
		oLbl=ur_get(sId+"-lbl");
		oImg=ur_get(sId+"-img");
		var newClass = "";
	if (ur_isSt(oRoot,ur_st.INVALID) || ur_isSt(oRoot,ur_st.DISABLED)) return;
	oLbl.className=oLbl.className.replace("Lbl","LblInv");
	oImg.className=oImg.className.replace("Off","OffInv");
	oImg.className=oImg.className.replace("On","OnInv");
	oImg.className=oImg.className.replace("Ind","IndInv");
	
	
	newClass=oImg.className;
	oImg.className="";
	oImg.className=newClass;
	
	ur_setSt(oRoot,ur_st.INVALID,true);
	sapUrMapi_Label_setInvalid(sapUrMapi_Label_getInputLabel(sId),true);
}
function sapUrMapi_CheckBox_focus(sId,oEvt) {
	sapUrMapi_DataTip_show(sId,"focus");
}
function sapUrMapi_CheckBox_blur(sId,oEvt) {
	sapUrMapi_DataTip_hide(sId);
}
function sapUrMapi_CheckBox_keydown(sId,oEvt) {
	if(oEvt.keyCode==73 && oEvt.shiftKey && sapUrMapi_bCtrl(oEvt) ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
		return ur_EVT_cancel(oEvt);
	}
	
	else if(oEvt.keyCode==27){
		sapUrMapi_DataTip_hide(sId);
		return ur_EVT_cancel(oEvt);
	}
	
	else if(oEvt.keyCode==32 && !oEvt.altKey && !sapUrMapi_bCtrl(oEvt)){
		var o=ur_EVT_src(oEvt);
		if(o) {
			o.click();
			ur_EVT_cancel(oEvt);
		}
	}
}

//** ColumnLayout.ie5 **
_ur_columnLayouts=new Array();
_ur_columnLayout=null;
var _ur_columnLayout_group = "";
var _ur_columnLayout_tooltip = "";
function ur_ColumnLayout_focusCell(oCell,obj,last) {
}
function ur_ColumnLayout_deactivate(oEvt) {
 	var oSource = ur_EVT_src( oEvt ),
 		obj = ur_ColumnLayout_getColumnLayoutFromDomRef( oSource );
	obj.bActive=false;
}  
function ur_ColumnLayout_getColumnLayoutFromDomRef(oDomRef) {
  var oDomRef = sapUrMapi_isChildOfControl( oDomRef , "CL" );
	if (!oDomRef) return;
	if ( !oDomRef.id ) {
		oDomRef.setAttribute("id","ur-cl-"+_ur_columnLayouts.length);
	}
  return ur_ColumnLayout_getObj(oDomRef.id);
}
function ur_ColumnLayout_keydown(oEvt) {
   	var oSource = ur_EVT_src( oEvt ),
 		obj = ur_ColumnLayout_getColumnLayoutFromDomRef( oSource );
  
  obj.iActiveIndex = 0;
  while (oSource && oSource.getAttribute && oSource.getAttribute("ct")!="CLC") {
		oSource = oSource.parentNode;	
  }
	if (!oSource || !oSource.getAttribute) return;
	
	obj.iActiveIndex = parseInt(oSource.getAttribute("cltabindex"));
  if( (oEvt.shiftKey && sapUrMapi_bCtrl(oEvt) && oEvt.keyCode==9) || (oEvt.shiftKey && oEvt.altKey && oEvt.keyCode==90) ||(oEvt.shiftKey && oEvt.keyCode==117) ) {
		var oCell = null,
			oSection = obj.aTabOrderCells[obj.iActiveIndex].oSection,
			iStartIndex = obj.iActiveIndex;
		if (!oSection || !oSection.aCells || oSection.aCells.length == 0) {
			sapUrMapi_skip(obj.ref.id,oEvt);
			return;
		}
		oCell = oSection.aCells[0];
		
		for (var i = obj.iActiveIndex; i >= 0; i--) {
			if (obj.aTabOrderCells[i].oCell == oCell) {
				obj.iActiveIndex = i;
				if (ur_ColumnLayout_focusPreviousElement( obj )) {
					ur_EVT_cancel(oEvt);
					return;
				} 
			}
		}
		sapUrMapi_skip(obj.ref.id, oEvt);
	} 
	
	else if ((sapUrMapi_bCtrl(oEvt) && oEvt.keyCode==9) || (oEvt.altKey && oEvt.keyCode==90) || (oEvt.keyCode==117) ) {
		var oCell = null,
			oSection = obj.aTabOrderCells[obj.iActiveIndex].oSection,
			iStartIndex = obj.iActiveIndex;
		if (!oSection || !oSection.aCells || oSection.aCells.length == 0) {
			sapUrMapi_skip(obj.ref.id,oEvt);
			return;
		}
		oCell = oSection.aCells[oSection.aCells.length-1];
		
		for (var i = obj.iActiveIndex; i < obj.aTabOrderCells.length; i++) {
			if (obj.aTabOrderCells[i].oCell == oCell) {
				obj.iActiveIndex = i;
				if (ur_ColumnLayout_focusNextElement(obj)) {
					ur_EVT_cancel(oEvt);
					return;
				}	
				
			}
		}
		sapUrMapi_skip(obj.ref.id,oEvt);
	}
	
}
function ur_ColumnLayout_activate(oEvt) {
 	var oSource = ur_EVT_src( oEvt ),
 		obj = ur_ColumnLayout_getColumnLayoutFromDomRef( oSource );
	
	if (oSource.getAttribute("fr")=="CLKEYEXIT") {
		if (oEvt.fromElement && obj.ref.contains(oEvt.fromElement)) {
			obj.iActiveIndex = obj.aTabOrderCells.length;
			obj.bActive=false;
			var o = ur_getNextFocusableElement(obj.ref);
			if (o) ur_focus(o);
		} else {
			obj.iActiveIndex = obj.aTabOrderCells.length;
			ur_ColumnLayout_focusPreviousElement(obj,null)
		}
	}
	if (oSource.getAttribute("fr")=="CLKEYENTER") {
		if (oEvt.fromElement && obj.ref.contains(oEvt.fromElement)) {
			obj.iActiveIndex = 0;
			obj.bActive=false;
			var o = ur_getPreviousFocusableElement(obj.ref);
			if (o) ur_focus(o);
		} else {
			obj.iActiveIndex = -1;
			ur_ColumnLayout_focusNextElement(obj,null)
		}
	} 
	if (ur_system.is508) {
		if (oSource.getAttribute("fr")=="CLKEYENTER") return;
		if (oSource.getAttribute("fr")=="CLKEYEXIT") return;
		
		var oCurrentSection = null;
		while (oSource && oSource.getAttribute && !oSource.getAttribute("sid")) {
			if (oSource == obj.ref) return;
			oSource = oSource.parentNode;
		}
		if (!oSource || !oSource.getAttribute || !oSource.getAttribute("sid")) return;
		var sSectionId = oSource.getAttribute("sid"),
			oCurrentSection = obj.aSectionNames[sSectionId],
			oParentSection = oCurrentSection.oParentSection,
			oLastParentSection = null,
			sSectionText = "";
		if (obj.oLastFocusedSection != oCurrentSection) {
			var aSections = [],
				sSeparatorText = "-";
	
			aSections.push(oCurrentSection);
			_ur_columnLayout_group = "";
			_ur_columnLayout_tooltip = "";
			
			
			while (oParentSection && (oLastParentSection != oParentSection)) {
				aSections.push(oParentSection);
				oParentSection  = oParentSection.oParentSection;
				if (oLastParentSection) {
					oLastParentSection  = oLastParentSection.oParentSection;
				}
			}
			
			for (var i = aSections.length-1;i>=0;i--) {
				if (aSections[i].ad) {
					if (sSectionText) sSectionText += " " + sSeparatorText + " ";
					sSectionText += aSections[i].ad;
				}
				if (aSections[i].tt) {
					if (_ur_columnLayout_tooltip) _ur_columnLayout_tooltip+=" " + sSeparatorText+" ";
					_ur_columnLayout_tooltip = aSections[i].tt;
				}
			}
	
			
			obj.oLastFocusedSection	= oCurrentSection;
			_ur_columnLayout_group = sSectionText;
				
		} 
	}
}
function ur_ColumnLayout_getObj(sId) {
	var oDomRef = ur_get(sId);
  if (!_ur_columnLayouts[ sId ] || _ur_columnLayouts[ sId ].ref != oDomRef) {
		var obj = new Array();
		
		obj.ref = oDomRef;
		ur_attachEvent(oDomRef, "keydown", ur_ColumnLayout_keydown);
		obj.oNavigationList = [];
	  
    
    var oHTMLSections = oDomRef.tHead.getElementsByTagName("SPAN");
    
		
    var aSectionNames = new Array(), 
				aSectionsList = new Array();
			i = 0, 
			oPreviousSection = null,
			oNextSection = null;
			
    for (var i = 0; i < oHTMLSections.length; i++) {
      oSection = { 
					ref:oHTMLSections[i],
				  sid:oHTMLSections[i].getAttribute("sid"),
				  sId:oHTMLSections[i].getAttribute("sid"),
				  pid:oHTMLSections[i].getAttribute("pid"),
				  sParentSectionId:oHTMLSections[i].getAttribute("pid"),
				  idx:i,
				  nextSection:null,
				  ad:oHTMLSections[i].getAttribute("ad"),
				  tt:oHTMLSections[i].getAttribute("tt")};
			oSection.previousSection = oPreviousSection;
			if (oSection.previousSection) {
				oSection.previousSection.nextSection = oSection;
			}
			oPreviousSection = oSection;
			aSectionsList.push(oSection);
			aSectionNames[oSection.sid] = oSection;
    }
		if (aSectionsList.length == 0) {
			
			var aTableRows = oDomRef.rows;
			for (var iRows = 1; iRows < aTableRows.length; iRows++) {
				var aTableCells = aTableRows[iRows].cells;
				for (var iCells = 0; iCells < aTableCells.length; iCells++) {
					var oCell = aTableCells[iCells].setAttribute("sid","ur-pseudosection");
				}
			}
			aSectionNames["ur-pseudosection"] = {sId:"ur-pseudosection",sParentSectionId:""};
			aSectionsList.push(aSectionNames["ur-pseudosection"]);
		}
    obj.aSectionNames = aSectionNames;
    obj.aSectionsList = aSectionsList;
    
    
		for ( var iSections = 0; iSections < obj.aSectionsList.length; iSections++ ) {
			var oSection = obj.aSectionsList[ iSections ];
			if ( oSection.sParentSectionId ) {
				var oParentSection = obj.aSectionNames[oSection.sParentSectionId];
				oSection.oParentSection = oParentSection;
			}
		}
		var aTableRows = oDomRef.rows;
		
		for ( var iSections = 0; iSections < obj.aSectionsList.length; iSections++ ) {
			var iSectionsTabIndex = 0,
				oSection = obj.aSectionsList[ iSections ];
			
			for (var iRows = 1; iRows < aTableRows.length; iRows++) {
				var aTableCells = aTableRows[iRows].cells;
				for (var iCells = 0; iCells < aTableCells.length; iCells++) {
					var oTableCell = aTableCells[iCells],
						sCellSectionId = oTableCell.getAttribute("sid");
					 
					if (oSection.sId == sCellSectionId) {
						
						iSectionsTabIndex++;
						if ( !oSection.aCells ) oSection.aCells = [];
						oSection.aCells.push(oTableCell);
					} else {
						
						oTempSection = obj.aSectionNames[sCellSectionId];
						while (oTempSection && oTempSection.oParentSection && !oTempSection.bChecked) {
							if (oTempSection.oParentSection.sId == oSection.sId) {
								if ( !oSection.aCells ) oSection.aCells = [];
								oSection.aCells.push(oTempSection);
								
								oTempSection.bChecked = true;
							}
							oTempSection = oTempSection.oParentSection;
						}
					}
				}
			}
		}
		
		obj.iIndexCounter = 0;
		
		for ( var iSections = 0; iSections < obj.aSectionsList.length; iSections++ ) {
			var oSection = obj.aSectionsList[ iSections ];
			ur_ColumnLayout_buildCellTabIndex(obj,oSection);
		}
    _ur_columnLayouts[sId] = obj;
		
		var aTDs = oDomRef.cells;
		for (var i = 0; i < aTDs.length; i++) {
			var oTD = aTDs[i];
			
			
			if (oTD.getAttribute("ct") != "CLC") continue;
			var oStart = oTD.firstChild;
			var oEnd = oTD.lastChild;
			ur_attachEvent(oStart, "focus", ur_ColumnLayout_focus);
			sapUrMapi_setTabIndex(oStart,"0");
			ur_attachEvent(oEnd, "focus", ur_ColumnLayout_focusOut);
			sapUrMapi_setTabIndex(oEnd,"0");
		}
  } 
  return _ur_columnLayouts[sId];
}
function ur_ColumnLayout_buildCellTabIndex(obj, oSection) {
	
	
	if (oSection.bProcessed) return;
	
	
	oSection.bProcessed = true;
	
	
	if (!oSection.aCells) return;
	
	
	if (!obj.aTabOrderCells) obj.aTabOrderCells = [];
	
	
	for (var iCells = 0; iCells < oSection.aCells.length; iCells++) {
		var oCell = oSection.aCells[iCells];
		
		if (oCell.tagName) {
			
			
			
			oCell.setAttribute("cltabindex",obj.iIndexCounter);
			obj.aTabOrderCells.push({oCell:oCell,oSection:oSection});
			obj.iIndexCounter++;
		} else {
			
			var oSubSection = oCell;
			
			ur_ColumnLayout_buildCellTabIndex(obj,oSubSection);
		}
	}
}
function ur_ColumnLayout_focusPreviousElement(obj,oEvt) {
	if (oEvt) obj.iActiveIndex = parseInt(oEvt.srcElement.parentNode.getAttribute("cltabindex"));
	var iActiveIndex = obj.iActiveIndex;
	
	obj.iActiveIndex--;
	
	if (obj.iActiveIndex <0) {
		return false;
	}
	
	var	oCell = obj.aTabOrderCells[obj.iActiveIndex].oCell;
	obj.oActiveSection = obj.aTabOrderCells[obj.iActiveIndex].oSection;
	var oFirstFocus=ur_ColumnLayout_findFirstFocus(oCell,true);
	if (!oFirstFocus) {
		
		var bFoc = ur_ColumnLayout_focusPreviousElement(obj);
		if (!bFoc) {
			var o = ur_getPreviousFocusableElement(obj.ref);
			if (o) ur_focus(o);
			return true;
		}
	} else {
		ur_focus(oFirstFocus);
	}
	return true;
	
}
function ur_ColumnLayout_focusNextElement(obj, oEvt) {
	if (oEvt) obj.iActiveIndex = parseInt(oEvt.srcElement.parentNode.getAttribute("cltabindex"));
	var iActiveIndex = obj.iActiveIndex;
	obj.iActiveIndex++;
	
	if (obj.iActiveIndex >= obj.aTabOrderCells.length) {
		return false;
	}
	
	var	oCell = obj.aTabOrderCells[obj.iActiveIndex].oCell;
	obj.oActiveSection = obj.aTabOrderCells[obj.iActiveIndex].oSection;
	var oFirstFocus=ur_ColumnLayout_findFirstFocus(oCell);
	if (!oFirstFocus) {
		var bFoc = ur_ColumnLayout_focusNextElement(obj);
		if (!bFoc) {
			var o = ur_getNextFocusableElement(obj.ref);
			if (o) ur_focus(o);
			return true;
		}
	} else {
		ur_focus(oFirstFocus);
	}
	return true;
}
function ur_ColumnLayout_findFirstFocus(o,bLast) {
	var oChild=o;
  if (o==null) return null;
  
  
  if (ur_system.direction=="rtl" || bLast) {
   	for (var i=oChild.childNodes.length-1;i>=0;i--) {
      var oTmp=oChild.childNodes.item(i);
			if (sapUrMapi_Focus_canFocus(oTmp) && !(oTmp.getAttribute("fr")=="CLCS" || oTmp.getAttribute("fr")=="CLCE")) {
				return oTmp;
      }
      var oTmp=ur_ColumnLayout_findFirstFocus(oTmp,bLast);
      if (oTmp!=null) {
        return oTmp;
      }
    }  
  } else {    
    for (var i=0;i<oChild.childNodes.length;i++) {
      var oTmp=oChild.childNodes.item(i);
			if (sapUrMapi_Focus_canFocus(oTmp) && !(oTmp.getAttribute("fr")=="CLCS" || oTmp.getAttribute("fr")=="CLCE")) {
				return oTmp;
      }
      var oTmp=ur_ColumnLayout_findFirstFocus(oTmp);
      if (oTmp!=null) {
        return oTmp;
      }
    }  
  }
  return null;
}
function ur_ColumnLayout_focus(oEvt) {
		var oSource = oEvt.srcElement,
		obj = ur_ColumnLayout_getColumnLayoutFromDomRef(oSource),
		bFocused = false;
		bFocused = ur_ColumnLayout_focusPreviousElement(obj,oEvt);
		if (!bFocused) {
 			obj.bActive=false;
			var o = ur_getPreviousFocusableElement(obj.ref);
			if (o) ur_focus(o);
			return;
 		}
}
function ur_ColumnLayout_focusOut(oEvt) {
	var oSource = oEvt.srcElement,
		obj = ur_ColumnLayout_getColumnLayoutFromDomRef(oSource),
		bFocused = false;
	bFocused = ur_ColumnLayout_focusNextElement(obj,oEvt);
 	if (!bFocused) {
 			obj.bActive=false;
 			var o = ur_getNextFocusableElement(obj.ref);
			if (o) ur_focus(o);
			return;
 	}
}
//** ComboBox.nn6 **

var oComboBoxListLoadEvent=null;
function ur_ComboBox_fireBeforeListLoad(sId,sListId,oEvt){
	var o=sapUrMapi_ComboBox_getObject(sId);
  var sFunc=o.main.getAttribute("onbll");	
  if(sFunc && sFunc.indexOf("UR_NotHandled")<0){
  	
	  oComboBoxListLoadEvent= new Object();
	  oComboBoxListLoadEvent.type=oEvt.type;
	  oComboBoxListLoadEvent.keyCode=oEvt.keyCode;
	  oComboBoxListLoadEvent.altKey=oEvt.altKey;
	  oComboBoxListLoadEvent.ctrlKey=sapUrMapi_bCtrl(oEvt);	  
	  oComboBoxListLoadEvent.srcElement=oEvt.srcElement;
  	
		o.main.fBefListLoad = new Function("event",sFunc);
		o.main.fBefListLoad(oEvt);
  }
  else return false;
  return true;
}
function sapUrMapi_ComboBox_getObject(sId) {
	var o=new Object();
	var sLblFor="";
	o.main=ur_get(sId+"-r");
	o.txt=ur_get(sId);
	o.isdd=o.txt.getAttribute("tp")=="DD";
	o.isro=ur_isSt(sId,ur_st.READONLY);
	o.isdsbl=ur_isSt(sId,ur_st.DISABLED);
	o.isinv=ur_isSt(sId,ur_st.INVALID);
	o.isreq=ur_isSt(sId,ur_st.REQUIRED);	
	o.key=o.txt.getAttribute("k");
	o.vt=o.txt.getAttribute("vt")=="true";
	o.lid=o.txt.getAttribute("lid");
	o.open=o.txt.getAttribute("op")=="true";
	o.f4always=o.txt.getAttribute("f4always")=="true";		
	sLblFor=o.txt.getAttribute("f");
	if(sLblFor!=null && sLblFor!="")
		o.lblFor=ur_get(sLblFor);
	else
		o.lblFor=null;
	return o;
}
function sapUrMapi_ComboBox_registerCreate(sId,sListId,sWidth){
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_ComboBox_setWidth('"+sId+"','"+sListId+"','"+sWidth+"')");
}
var aCoB=new Array();
var aCoBWidth=new Array();
function sapUrMapi_ComboBox_setWidth(sId,sListId,sWidth){
	if(sWidth!="") return;
	var o=ur_get(sId);
	var oL=ur_get(sListId+"-r");
	if(oL==null) return;
	sapUrMapi_ItemListBox_setDim( sListId, "10px" );
	aCoB[aCoB.length]=o;
	oL=ur_get(sListId);
	aCoBWidth[aCoBWidth.length]=oL.firstChild.offsetWidth;
	sapUrMapi_Create_AddItem("CoB", "sapUrMapi_ComboBox_set()",true);
}
function sapUrMapi_ComboBox_set(){
	for(var i=0; i<aCoB.length; i++)
		if(aCoB[i]!=null && typeof(aCoB[i])=="object")
			aCoB[i].style.width=sapUrMapi_sAddUnit( parseInt(aCoBWidth[i]) , "px" );
}
function sapUrMapi_ComboBox_addClass(sId,sClass,bSetIt) {
  var o=sapUrMapi_ComboBox_getObject(sId);
  var bInTbl=o.main.parentNode.className.indexOf("STTD")>=0;
  
	if (o.txt.className.indexOf(sClass)==-1 && bSetIt){
		o.txt.className=o.txt.className+" "+sClass; 
		if(bInTbl) o.main.className=o.main.className+" "+sClass;
	}
	else if(o.txt.className.indexOf(sClass)>=0 && !bSetIt){
		o.txt.className=o.txt.className.replace(" "+sClass,"");
		if(bInTbl) o.main.className=o.main.className.replace(" "+sClass,"");
	}
	return o;
}
function sapUrMapi_ComboBox_mousedown(sId,e) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	if(e.button!=0 && o.open) return;
  o.txt.setAttribute("noblur","true");
}
function sapUrMapi_ComboBox_triggerClick(sId) {
	if(!oComboBoxListLoadEvent || oComboBoxListLoadEvent.type=="click" ||
	   (oComboBoxListLoadEvent.altKey && (oComboBoxListLoadEvent.keyCode==40||oComboBoxListLoadEvent.keyCode==38)) ||
	   oComboBoxListLoadEvent.keyCode==115){
	ur_callDelayed("sapUrMapi_ComboBox_click('"+sId+"')",0);
}
	else if(oComboBoxListLoadEvent.type=="keydown"){
		ur_callDelayed("sapUrMapi_ComboBox_keydown('"+sId+"')",0);		
	}
	else if(oComboBoxListLoadEvent.type=="keypress"){
		ur_callDelayed("sapUrMapi_ComboBox_keypress('"+sId+"')",0);		
	}	
}
function sapUrMapi_ComboBox_click(sId,e) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	
	if (o.isdsbl || (o.isro && !o.f4always)) return;
	
		
	if (e==null || o.isdd || e.type=="keydown" || ur_EVT_src(e).className.indexOf("urCoB2Btn")>=0) {
	  if (!o.open) 
			sapUrMapi_ComboBox_showList(sId,e);
		else{
			sapUrMapi_ComboBox_hideList(sId);
			if(o.isdd) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",true);			
		}
		if(e==null || ur_EVT_src(e).className.indexOf("urCoB2Btn")>=0) 
			ur_focus(o.txt);
  }
  o.txt.setAttribute("noblur","false");
  if(!e){
  	oComboBoxListLoadEvent=null;
  	return;
  }
  else{
  	return ur_EVT_cancel(e);
  }
 }
function sapUrMapi_ComboBox_focusDdlb(sId,e) { 
	var o=sapUrMapi_ComboBox_getObject(sId);
	if (!o.open) sapUrMapi_DataTip_show(sId,"focus");
	if (o.isdsbl) return;
	o.txt.setAttribute("noblur","false");
	if(!o.isdd) return;
	if (o.open) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",false);
	else sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",true);
	ur_setEditCellColor(o.txt);
	return ur_EVT_cancel(e);
}
var oComboBoxSCTimer=null;
var oComboBoxSCEvent=null;
function sapUrMapi_ComboBox_prepareFireSelectionChange(o, oEvt){
	
  if(o.txt.getAttribute("ks")==o.txt.getAttribute("k") && o.txt.getAttribute("vs")==o.txt.value) 
		return false;
  
  
   if((oEvt.type=="keydown" || oEvt.type=="keypress") && o.open)
		return true;
	
	if(o.txt.getAttribute("k") == o.txt.getAttribute("ks") && o.txt.getAttribute("vs")!=o.txt.value){
		o.txt.setAttribute("k", "");
	}
			
	
	oComboBoxSCEvent = oEvt;
	
	
	if(oComboBoxSCTimer) clearTimeout(oComboBoxSCTimer);  
  if(oEvt.type=="click" || oEvt.type=="blur" || oEvt.keyCode==ur_KEYS.ENTER) { 
		sapUrMapiComboBox_fireSelectionChange(o, oEvt);
	}
	
	else{	
			var sId=o.txt.id;
    	oComboBoxSCTimer=setTimeout("sapUrMapiComboBox_fireSelectionChange(\""+sId+"\")",500);  	                 
   }
   return true;
}
function sapUrMapiComboBox_fireSelectionChange(o, oEvt){
	
	if(typeof(o)=="string"){
		o=sapUrMapi_ComboBox_getObject(o);
	}
	
	if(o.lblFor!=null){
		o.lblFor.setAttribute("lbl",o.txt.value);	
  }
  
  
  o.txt.setAttribute("vs",o.txt.value);
  o.txt.setAttribute("ks",o.txt.getAttribute("k"));
    
  
  var sFunc=o.main.getAttribute("onsc");
  if(sFunc){
		o.main.fSelCh = new Function("event",sFunc);
		o.main.fSelCh(oComboBoxSCEvent);
  }
}
function sapUrMapi_ComboBox_blurDdlb(sId,e) { 
	var o=sapUrMapi_ComboBox_getObject(sId);
	ur_removeEditCellColor();
	
	if (o.isdsbl) {sapUrMapi_DataTip_hide(sId);return;}
	if(o.txt.getAttribute("noblur")=="true" || (oPopup!=null && oPopup.frame.window.mover && o.open)){
		o.txt.setAttribute("noblur","false");
		ur_focus(o.txt);
		return ur_EVT_cancel(e);
	}
	
	if (o.isdd) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",false);
	if (oPopup!=null && o.open) sapUrMapi_ComboBox_hideList(sId);
	if (oPopup!=null && !o.open) sapUrMapi_DataTip_hide(sId);
	sapUrMapi_ComboBox_prepareFireSelectionChange(o,e);
	return ur_EVT_cancel(e);
}
function sapUrMapi_ComboBox_setReadonly(sId,bReadonly) {
  var o=ur_get(sId);
  if(bReadonly && ur_isSt(o,ur_st.READONLY)) return;
  ur_setSt(o,ur_st.READONLY,bReadonly);
  if(bReadonly)
		o.className+=" urCoB2Ro";
	else
		o.className=o.className.replace(" urCoB2Ro","");
  o.readOnly=bReadonly;
}
function sapUrMapi_ComboBox_setDisabled(sId,bSet) {
  var o=ur_get(sId);
  var oBtn=o.nextSibling;
  if(bSet && ur_isSt(o,ur_st.DISABLED)) return;
  ur_setSt(o,ur_st.DISABLED,bSet);
  if(bSet){
		o.className+=" urCoB2Dsbl";
		oBtn.className="urCoB2BtnDsbl";
	}
	else{
		o.className=o.className.replace(" urCoB2Dsbl","");
		oBtn.className="urCoB2Btn";
	}
  o.readOnly=bSet;
}
function sapUrMapi_ComboBox_setInputState(sId,sInputState) {
  var o=ur_get(sId);
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
	sapUrMapi_Label_setInputState(oLbl,sInputState);
  if (sInputState == 'ERROR') {
    if (ur_isSt(o,ur_st.INVALID)) return;
    ur_setSt(o,ur_st.WARNING,false);
    ur_setSt(o,ur_st.INVALID,true);
		o.className=o.className.replace(" urCoB2Warn","");
		o.className+=" urCoB2Inv";
  } else if (sInputState == 'WARNING'){
    if (ur_isSt(o,ur_st.WARNING)) return;
    ur_setSt(o,ur_st.INVALID,false);
    ur_setSt(o,ur_st.WARNING,true);
		o.className=o.className.replace(" urCoB2Inv","");
		o.className+=" urCoB2Warn";
  } else {
    ur_setSt(o,ur_st.INVALID,false);
    ur_setSt(o,ur_st.ERROR,false);
		o.className=o.className.replace(" urCoB2Inv","");
		o.className=o.className.replace(" urCoB2Warn","");
  }
}
function sapUrMapi_ComboBox_setInvalid(sId,bInvalid) {
  if (bInvalid) sapUrMapi_ComboBox_setInputState(sId,"ERROR");
  else sapUrMapi_ComboBox_setInputState(sId,"NONE");
}
var sUrComboBox_virtualTyping="";
function sapUrMapi_ComboBox_keydown(sId,e) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	var bListLoaded=false;
	
	
	if(!e){
		e=oComboBoxListLoadEvent;
		bListLoaded=true;
	}
	
	if (o.isdsbl  || (o.isro && !o.f4always)) return;
	
	
	if (e.keyCode==9) {
		if(o.open) sapUrMapi_ItemListBox_selectHoveredItem(o.lid, oPopup.frame.window.document,e);
		if (o.isdd) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",false);
		if (oPopup!=null && o.open) sapUrMapi_ComboBox_hideList(sId);
		return;
	}
	
	
	if( (e.altKey && (e.keyCode==40||e.keyCode==38)) || e.keyCode==115 ){
		sapUrMapi_ComboBox_click(sId,e);
		if(bListLoaded){
			oComboBoxListLoadEvent=null;
			return;
		}
		else{
			return ur_EVT_cancel(e);
		}
	}
	
	
	if(e.keyCode==40 || e.keyCode==38 || e.keyCode==35 || e.keyCode==36){
		if(o.open) sapUrMapi_ItemListBox_keydown(o.lid, oPopup.frame.window.document, e );
		else{
			
			if(!bListLoaded){
			if(ur_ComboBox_fireBeforeListLoad(sId,o.lid,e))
				return ur_EVT_cancel(e);
			}
			sapUrMapi_ItemListBox_setParentId(o.lid, sId);
			sapUrMapi_ItemListBox_setSelectedKey(o.lid,o.key,document,false);
			sapUrMapi_ItemListBox_keydown(o.lid, document, e );
		}		
		if(bListLoaded){
			oComboBoxListLoadEvent=null;
			return;
		}
		else{
			return ur_EVT_cancel(e);
		}
	}
	
	
  if (e.keyCode==27 && o.open) { 
		o.txt.value=o.txt.getAttribute("vs");
		o.txt.setAttribute("k",o.txt.getAttribute("ks"));
  	sapUrMapi_ComboBox_hideList(sId);
  	sapUrMapi_ComboBox_focusDdlb(sId,e);
  	return ur_EVT_cancel(e);
  }
  else if (e.keyCode==27 && !o.open) 
		sapUrMapi_DataTip_hide(sId);
  
  
  if (e.keyCode==13 && o.open) { 
		sapUrMapi_ItemListBox_selectHoveredItem(o.lid, oPopup.frame.window.document,e);
  	sapUrMapi_ComboBox_hideList(sId);
  	o.open=false;
  	
  	if(!sapUrMapi_ComboBox_prepareFireSelectionChange(o, e)) return;
   	return ur_EVT_cancel(e);
  }
  else if (e.keyCode==13 && !o.isdd){
    	
    		sapUrMapi_ComboBox_prepareFireSelectionChange(o, e);
  }  
  
  	if ((e.keyCode>64 && e.keyCode<126)||(e.keyCode>127 && e.keyCode<192)) {
		if (o.isdd){
	  	if (o.vt) sapUrMapi_ComboBox_initVirtualTyping();
	  	var sSearch=String.fromCharCode(e.keyCode);
	  	if (!o.vt) sUrComboBox_virtualTyping=sSearch;
			else sUrComboBox_virtualTyping+=sSearch;
	  	sapUrMapi_ComboBox_findItem(sId,sUrComboBox_virtualTyping,true,e);
	  	if(o.open){
	  		o=sapUrMapi_ComboBox_getObject(sId);
	  		sapUrMapi_ItemListBox_setSelectedKey(o.lid,o.key,oPopup.frame.window.document,true);
	  	}	  	
	 	}
		else{
				o.txt.setAttribute("k","");
	  	}
		}
	}
function sapUrMapi_ComboBox_keypress(sId,e) {
 
}
var oVTTimer=null;
function sapUrMapi_ComboBox_initVirtualTyping() {
  if (oVTTimer!=null) clearTimeout(oVTTimer); 
 	oVTTimer=ur_callDelayed("sUrComboBox_virtualTyping='';clearTimeout(oVTTimer);oVTTimer=null;",250);
 }
function sapUrMapi_ComboBox_findItem(sId,sSearch,bSelect,oEvt) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	var sKey=o.txt.getAttribute("k");
	var sNewKey = sapUrMapi_ItemListBox_findItem(o.lid,sSearch,sKey,document);
  if (bSelect && sNewKey && sNewKey != "")
		sapUrMapi_ComboBox_setValue(sId,sNewKey,sVal,null,oEvt);	
	return true;
}
function sapUrMapi_ComboBox_showList(sId,oEvt) {
	var o=sapUrMapi_ComboBox_getObject(sId);
	var oIlb;
	var arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
	
	if(oEvt!=null){ 
		if(ur_ComboBox_fireBeforeListLoad(sId,o.lid,oEvt))
			return ur_EVT_cancel(oEvt);
	}
	o.open=o.txt.setAttribute("op","true");
  if (o.isdd) sapUrMapi_ComboBox_addClass(sId,"urCoB2Hv",false);
  	
	
	clearTimeout(_ur_DataTip_timer);
	
	
	sapUrMapi_ItemListBox_setParentId(o.lid, sId);	
	oIlb=sapUrMapi_ItemListBox_getObject(o.lid,document,null);
	sapUrMapi_ItemListBox_setDim(o.lid, o.main.offsetWidth);
	sapUrMapi_ItemListBox_setReadonly(oIlb,o.isro);	
	oPopup = new sapPopup(window,arrUrls,ur_get(o.lid+"-r"),ur_get(sId),oEvt,0);
	oPopup.size.height=oIlb.box.offsetHeight;
	oPopup.size.width=oIlb.box.offsetWidth;
	oPopup.sizebehaviour=sapPopupSizeBehavior.USER
	if (ur_system.direction=="rtl") oPopup.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
	else sapPopupPositionBehavior.MENULEFT;	
	oPopup.show(true,true);
	if(!o.isro) sapUrMapi_ItemListBox_setSelectedKey(o.lid,o.key,oPopup.frame.window.document,true);	
}
function sapUrMapi_ComboBox_hideList(sId) {
  var o=sapUrMapi_ComboBox_getObject(sId);
	o.txt.setAttribute("op","false");
	o.txt.setAttribute("noblur","false");
	if (oPopup) oPopup.hide();
}
function sapUrMapi_ComboBox_setValue(sId,sKey,sValue,sImgSrc,oEvt) {
  var o = sapUrMapi_ComboBox_getObject(sId);
  if(!o.isro && !o.isdsbl && sKey!=null && (o.txt.ks!=sKey || o.txt.k!=sKey)){
		
			o.txt.setAttribute("k",sKey);
			o.txt.value=sValue;
			if (sImgSrc!="" && sImgSrc!=null)
  			if (sImgSrc.indexOf("url(")!=0 && sImgSrc.length>0) o.txt.style.backgroundImage="url("+sImgSrc+")";
  			else o.txt.style.backgroundImage=sImgSrc;
		
		sapUrMapi_ComboBox_prepareFireSelectionChange(o,oEvt);
  }
  
  
  if (oEvt!=null && oEvt.type=="click"){
		sapUrMapi_ComboBox_hideList(sId);
		ur_focus(o.txt);
	}
}
function sapUrMapi_ComboBox_getSelectedKey(sId) {
  var o=sapUrMapi_ComboBox_getObject(sId);
  return o.txt.getAttribute("k");
}
function sapUrMapi_ComboBox_getSelectedValue(sId) {
  var o=sapUrMapi_ComboBox_getObject(sId);
	return o.txt.value;
}

//** ContextualPanel.ie5 **

function ur_CXP_cl(sId,oEvt){
}
function ur_CXP_kd(sId,oEvt)
{
	return sapUrMapi_skip(sId,oEvt)
}
function ur_CXP_expand(sId,oEvt)
{
	ur_EVT_cancelBubble(oEvt);
	var elBody = ur_get(sId); 
	if ( elBody != null && elExp != null )
	{
		if ( elBody.style.display == "none" )
		{
			elBody.style.display = "block";
			ur_setSt(elBody,ur_st.COLLAPSED,false);
			ur_setSt(elBody,ur_st.EXPANDED,true);
		} 
		else
		{
			elBody.style.display = "none";
			ur_setSt(oSkip,ur_st.COLLAPSED,true);
			ur_setSt(oSkip,ur_st.EXPANDED,false);
		}
	}
	return true;
}
function ur_CXP_collapse(sId,oEvt)
{
}

//** DataTip.ie5 **

var _ur_DataTip=new Object();
_ur_DataTip.hover=false;
_ur_DataTip.leave=false;
_ur_DataTip.label_leave=false;
_ur_DataTip.time_out=0;
function ur_Dt_mouseover(){
	clearTimeout(_ur_DataTip_timer);
	_ur_DataTip.hover=true;
}
function ur_Dt_mouseleave(){
	clearTimeout(_ur_DataTip_timer);
	_ur_DataTip.leave=true;
	if (!oPopup || !oPopup.source || !oPopup.source.object) return;
	var sId=oPopup.source.object.id.split("-")[0];
	sapUrMapi_DataTip_hide(sId);
}
var _ur_DataTip_timer;
function sapUrMapi_DataTip_getText(sId) {
	var oDTText = ur_get(sId+"-dtip");
         if (ur_system.browser_abbrev == "ie6") {
		sTxt = oDTText.firstChild.firstChild.innerText + " "+oDTText.firstChild.lastChild.innerText;
         } else {
                sTxt = oDTText.firstChild.lastChild.innerHTML;
         }
	return sTxt;
}
enumUrDataTipType = {ERROR:"Error",WARNING:"Warning",OK:"Ok",TEXT:"Text"};
function sapUrMapi_DataTip_getType(sId) { 
	var oDTTyp  = ur_get(sId+"-dtip");
        
        if (ur_system.browser_abbrev == "ie6") {
	   oDTTyp = oDTTyp.firstChild.firstChild.firstChild;
        } else {
           oDTTyp = oDTTyp.firstChild.firstChild;
        }
	if (typeof(oDTTyp.className)=="undefined" || (oDTTyp.className).indexOf("urDataTipTxt")>-1)return enumUrDataTipType.TEXT;
        else if ((oDTTyp.className).indexOf(enumUrDataTipType.ERROR)>-1) return enumUrDataTipType.ERROR;
        else if ((oDTTyp.className).indexOf(enumUrDataTipType.WARNING)>-1) return enumUrDataTipType.WARNING;
        else if ((oDTTyp.className).indexOf(enumUrDataTipType.OK)>-1) return enumUrDataTipType.OK;
  }
function sapUrMapi_DataTip_isOpen(sId){
	var oDT = ur_get(sId+"-dtip");
	if(oDT!=null)
	return (oDT.getAttribute("op")=="true");
}
function sapUrMapi_DataTip_show(sId,sEvtType) {
	var bShow=false;
	oDataTip = ur_get(sId+"-dtip");
	if (oDataTip==null) return;
	var bAf=((oDataTip.getAttribute("af")!=null) && (oDataTip.getAttribute("af")=="a"));
	var bAff=((oDataTip.getAttribute("af")!=null) && (oDataTip.getAttribute("af")=="f"));
	
	var iTo=0;
	if ((oDataTip.getAttribute("to")!=null) && (oDataTip.getAttribute("to")!="")) {
	  iTo=parseInt(oDataTip.getAttribute("to"));
	}
	
	
	if (typeof(sEvtType)=="undefined" || sEvtType=="") {
	  bShow=true;
	}
	else if (sEvtType=="keydown") {
	  bShow=true;
	  iTo=0;
	}
	else if (sEvtType=="focus") {
	  if (bAf) bShow=true;
	  if ((bAff) && (oDataTip.getAttribute("first")==null || oDataTip.getAttribute("first")=="")) {
	    bShow=true;
		oDataTip.setAttribute("first","true");
	  } else {
	    if (!bAf) iTo=0;
	  }
	}
	else if(sEvtType=="mousemove"){
		bShow=true;
		iTo=-1;
	}
	if (bShow) {
		var oDT = ur_get(sId+"-dtip");
		oDT.open = oDT.setAttribute("op", "true");
		var arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
		sTriggerId=sId;
		oTrg=ur_get(sId);
		sCt=sapUrMapi_getControlType(sId);
		if (sCt=="R" || sCt=="C" || sCt=="TRI") {
		  oTrg=oTrg.nextSibling;
		}
                var oEvent = (ur_system.browser_abbrev == "ie6") ? sEvtType : null;
		oPopup = new sapPopup(window,arrUrls,ur_get(sId+'-dtip'),oTrg,oEvent,0);
		if (ur_system.direction=="rtl") oPopup.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
		else sapPopupPositionBehavior.MENULEFT;	
		if (ur_system.browser_abbrev == "ie6") oPopup.show(true)
		else oPopup.show(true,true);
		if(iTo==-1 && ur_system.browser_abbrev == "ie6"){
			ur_attachEvent(oPopup.frame.window.document.body, "mouseover", ur_Dt_mouseover);
			ur_attachEvent(oPopup.frame.window.document.body, "mouseleave", ur_Dt_mouseleave);
		}
	}
	if (iTo>0) {
	 _ur_DataTip_timer = ur_callDelayed("sapUrMapi_DataTip_hide(\""+sId+"\")",iTo*1000);
	}
}
function sapUrMapi_DataTip_hide(sId) {
	var oDT = ur_get(sId+"-dtip");
	
	if(oDT==null) return;
	if(oDT.getAttribute("op")!="true") return; 
	clearTimeout(_ur_DataTip_timer);
	if ((oPopup!=null && _ur_DataTip.hover==false)||(oPopup!=null && _ur_DataTip.leave==true)){
              if (ur_system.browser_abbrev == "ie6") {
		   ur_detachEvent(oPopup.frame.window.document.body, "mouseover", ur_Dt_mouseover);
		   ur_detachEvent(oPopup.frame.window.document.body, "mouseleave", ur_Dt_mouseleave);
               }
		oPopup.hide();
		_ur_DataTip.hover=false;
		_ur_DataTip.leave=false;
		
	        var oInput = ur_get(sId+"-r");
		if(oInput!=null && ur_system.browser_abbrev == "ie6"){
		  if(oInput.getAttribute("evt")!=null){
			ur_detachEvent(oInput, "mouseover", ur_L_mm);
			ur_detachEvent(oInput, "mouseout", ur_L_ml);
			oInput.removeAttribute("evt");
		  }
		}
		oDT.setAttribute("op", "false");
	}
}

//** DateNavigator.ie5 **

function ur_DateNavigator_getMonthHdr(o){
  
  if (ur_system.browser_abbrev != "ie6") return;
  try {
	  return o.firstChild.firstChild.firstChild.cells[1].firstChild;
	} catch (ex) {
	  return null;
	}
} 
function ur_DateNavigator_getMonth(o){
	if (ur_system.browser_abbrev != "ie6") return;
	  
	while(o.tagName!="TABLE")
		o=o.parentNode;
	return o.parentNode;  
      }
function ur_DateNavigator_focusNextMonth(o){
    
	if (ur_system.browser_abbrev != "ie6") return;
	var oThis=ur_DateNavigator_getMonth(o);
	var oThisHdr=ur_DateNavigator_getMonthHdr(oThis);
	if (!oThisHdr) return false;
	var oPrev=null;
	var oPrevHdr=null;
	if(oThisHdr && oThisHdr.parentNode.nextSibling && oThisHdr.parentNode.nextSibling.className.indexOf("ArrNext")>-1 && oThisHdr.parentNode.nextSibling.className.indexOf("Dsbl")==-1) { 
		oThisHdr.parentNode.nextSibling.click();
  } else{		
		oNext=oThis.nextSibling; 
		if(oNext==null&&oThis.parentNode.nextSibling!=null)	
			oNext=oThis.parentNode.nextSibling.firstChild;
		if(oNext==null) return false;
		oNextHdr=ur_DateNavigator_getMonthHdr(oNext);
		if(oNextHdr!=null)
			ur_focus(oNextHdr);
			return true;
  }
}
function ur_DateNavigator_focusUpMonth(o){
	if (ur_system.browser_abbrev != "ie6") return;
	var oThis=ur_DateNavigator_getMonth(o);
	var oPrevRow=oThis.parentNode.previousSibling;
	if(oPrevRow==null) return;
	ur_DateNavigator_getMonthHdr(oPrevRow.childNodes[oThis.cellIndex]).focus();
  }
function ur_DateNavigator_focusDownMonth(o){
	if (ur_system.browser_abbrev != "ie6") return;
	var oThis=ur_DateNavigator_getMonth(o);
	var oNextRow=oThis.parentNode.nextSibling;
	if(oNextRow==null) return;
	ur_DateNavigator_getMonthHdr(oNextRow.childNodes[oThis.cellIndex]).focus();
			    }
function ur_DateNavigator_focusPrevMonth(o){
	if (ur_system.browser_abbrev != "ie6") return;
	var oThis=ur_DateNavigator_getMonth(o);
	var oThisHdr=ur_DateNavigator_getMonthHdr(oThis);
	var oPrev=null;
	var oPrevHdr=null;
  if(oThisHdr.parentNode.previousSibling.className.indexOf("urCalArrPrev")>-1) {
		oThisHdr.parentNode.previousSibling.click();
        }
  else{		
		oPrev=oThis.previousSibling;	
		if(oPrev==null&&oThis.parentNode.previousSibling!=null)	
			oPrev=oThis.parentNode.previousSibling.lastChild;
		if(oPrev==null) return;
		oPrevHdr=ur_DateNavigator_getMonthHdr(oPrev);
		if(oPrevHdr!=null)
			oPrevHdr.focus();
      }
    }
function ur_DateNavigator_focusThisMonth(o){
	if (ur_system.browser_abbrev != "ie6") return;
	var oThis=ur_DateNavigator_getMonth(o);
	var oThisHdr=ur_DateNavigator_getMonthHdr(oThis);
	if(oThisHdr!=null)
		oThisHdr.focus();
  } 
function ur_DateNavigator_focusNextDay(o){
	if (ur_system.browser_abbrev != "ie6") return;
	var oNext=o.nextSibling;
	while(oNext!=null && ur_isSt(oNext.id,ur_st.DISABLED)) 
			oNext=oNext.nextSibling;
	if(oNext!=null && o.className.indexOf("urCalNum")==-1) oNext.setAttribute("sameWeek","true");
	if(oNext==null&&o.parentNode.nextSibling!=null)
	{
		oNext=o.parentNode.nextSibling.firstChild;
		oNext.setAttribute("sameWeek","false");
	}
	if(oNext==null) return;
	if(oNext.getAttribute("ti")=="0")
		oNext.focus();
	else
		ur_DateNavigator_focusNextDay(oNext);
   }
function ur_DateNavigator_focusPrevDay(o){
	if (ur_system.browser_abbrev != "ie6") return;
	var oPrev=o.previousSibling;
	while(oPrev!=null && ur_isSt(oPrev.id,ur_st.DISABLED)) 
			oPrev=oPrev.previousSibling;
	if(oPrev!=null && o.className.indexOf("urCalNum")==-1) oPrev.setAttribute("sameWeek","true");
	if(oPrev==null&&o.parentNode.previousSibling!=null)
	{
		oPrev=o.parentNode.previousSibling.lastChild;
		oPrev.setAttribute("sameWeek","false");
	}
	if(oPrev==null||oPrev.className.indexOf("urCalName")>=0) return;
	if(oPrev.getAttribute("ti")=="0")
		oPrev.focus();
	else
		ur_DateNavigator_focusPrevDay(oPrev);
		 }
function ur_DateNavigator_focusNextWeek(o){
	if (ur_system.browser_abbrev != "ie6") return;
	var oNext=o.parentNode.nextSibling;
	if(oNext==null) return;
	oNext=oNext.cells[o.cellIndex];
	if(oNext.getAttribute("ti")=="0")
		oNext.focus();
	else
		ur_DateNavigator_focusNextWeek(oNext);
  }
function ur_DateNavigator_focusPrevWeek(o){
	if (ur_system.browser_abbrev != "ie6") return;
	var oPrev=o.parentNode.previousSibling;
	if(oPrev==null) return;
	oPrev=oPrev.cells[o.cellIndex];
	if(oPrev.className.indexOf("urCalName")>=0) return;
	if(oPrev.getAttribute("ti")=="0")
		oPrev.focus();
	else
		ur_DateNavigator_focusPrevWeek(oPrev);
}
function sapUrMapi_DateNavigator_keydown(sId,oEvt) {
  if (ur_system.browser_abbrev != "ie6") return;
  var o=ur_evtSrc(oEvt);
  var iKey=oEvt.keyCode;
	
  if(iKey==37)
		iKey=ur_system.direction!="rtl"?37:39;
	else if(iKey==39)
		iKey=ur_system.direction!="rtl"?39:37;
		
	
	if(iKey==117)
		return sapUrMapi_skip(sId,oEvt);
	
	
	if(iKey==32){
		o.click();
    return ur_EVT_cancel(oEvt);
  }
			
		
	if(iKey==39){
		if(o.className.indexOf("Whl")>=0) return;
		if (o.parentNode.className.indexOf("urCalHdr")>-1)
			ur_DateNavigator_focusNextMonth(o);
		else
			ur_DateNavigator_focusNextDay(o);
		return ur_EVT_cancel(oEvt);
				}
	
		
	if(iKey==37){
		if(o.className.indexOf("Whl")>=0) return;
		if (o.parentNode.className.indexOf("urCalHdr")>-1)
			ur_DateNavigator_focusPrevMonth(o);
		else
			ur_DateNavigator_focusPrevDay(o);
		return ur_EVT_cancel(oEvt);
			}
	
	
	if(iKey==38){
		if(o.className.indexOf("Whl")>=0) return;
		if(o.getAttribute("tp")=="DAY")
		{
			o.setAttribute("sameWeek","false");
		}
		
		if(o.parentNode.className.indexOf("urCalHdr")>=0)
			ur_DateNavigator_focusUpMonth(o);
		else
			ur_DateNavigator_focusPrevWeek(o);
		return ur_EVT_cancel(oEvt);
				}
	
	if(iKey==40){
		if(o.className.indexOf("Whl")>=0) return;
		if(o.getAttribute("tp")=="DAY")
		{
			o.setAttribute("sameWeek","false");
		}
		if(o.parentNode.className.indexOf("urCalHdr")>=0)
			ur_DateNavigator_focusDownMonth(o);
		else		
			ur_DateNavigator_focusNextWeek(o);
		return ur_EVT_cancel(oEvt);
			}
	
	
	if(iKey==9 && o.id!=sId && o.id!=sId+"-skipend"){
		if(o.className.indexOf("Whl")>=0||o.parentNode.className.indexOf("urCalHdr")>-1) return;
		if(oEvt.shiftKey)
			ur_DateNavigator_focusThisMonth(o);
		else{
			var oThis=ur_DateNavigator_getMonth(o);
			var oThisHdr=ur_DateNavigator_getMonthHdr(oThis);
      if (!ur_DateNavigator_focusNextMonth(oThisHdr)) {
			  if (ur_get(sId+"-skipend")) {
			    ur_get(sId+"-skipend").focus();
      		return ur_EVT_cancel(oEvt);
			  } else {
			    
			    var tds = o.parentNode.parentNode.parentNode.getElementsByTagName("TD");
			    var td = tds[tds.length-1];
			    ur_focus(td);
			  }
			} else {
      		return ur_EVT_cancel(oEvt);
			}
    }
  }
  
	
	if(iKey==9&&oEvt.shiftKey&&o.id==sId+"-skipend"){
		o.previousSibling.firstChild.firstChild.lastChild.lastChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.focus();
		return ur_EVT_cancel(oEvt);
	}	  
}
function sapUrMapi_DateNavigator_mousemove(sId,oEvt) {
  if (ur_system.browser_abbrev != "ie6") return;
  var oFrom = oEvt.fromElement;
	var oTo = oEvt.toElement;
	var o=ur_get(sId);
	var oRef=o.getAttribute("hovered");
	if ((oRef!=null)  && (oRef.className.indexOf(" urCalHov")>-1)) oRef.className=oRef.className.substring(0,oRef.className.indexOf(" urCalHov"));
  if ((oTo!=null) && (oTo.currentStyle)&&((oTo.currentStyle.cursor=="hand") || (oTo.currentStyle.cursor=="pointer"))){
    if (oTo.className=="") {
      oTo.className=" urCalHov";
    } else {
      oTo.className=oTo.className+" urCalHov";
    }
    o.setAttribute("hovered",oTo);
  } else {
    o.setAttribute("hovered",null	);
  }
}
function sapUrMapi_DateNavigator_activate(sId,oEvt){
	if (ur_system.browser_abbrev != "ie6") return;
	var o=ur_evtSrc(oEvt);
	var sDay=o.getAttribute("day");
	var sSep=" "+getLanguageText("SAPUR_SEPARATOR")+" ";	
	
	if(sDay!=null){
		var oRow=o.parentNode;
		var oWeekday=oRow.parentNode.rows[1].cells[o.cellIndex];
		var sDesign=o.getAttribute("ds");
		var sTt=o.getAttribute("tt");
		o.title=sDay+sSep+getLanguageText("SAPUR_CALWEEK")+" "+oRow.firstChild.innerText+sSep+oWeekday.title;
		if(sDesign!=null&&sDesign!="")
			o.title+=sSep+sDesign;
		if(sTt!=null&&sTt!="")
			o.title+=sSep+sTt;
		if(o.getAttribute("cl")=="true")
			o.title+=sSep+getLanguageText("SAPUR_CALSEL_TUTOR");
	}
	
	else if (o.parentNode!=null&&o.parentNode.className.indexOf("urCalHdr")>-1){
		o.title=o.innerText;
		var iIdx=o.getAttribute("idx");
		if(iIdx=="f"){
			o.title+=sSep+getLanguageText("SAPUR_CALFIRSTMONTH");
			if(ur_get(sId).getAttribute("nav")=="true")
				o.title+=sSep+getLanguageText("SAPUR_CALPREVMONTH_TUTOR");
			if(o.getAttribute("cl")=="true")
				o.title+=" "+getLanguageText("SAPUR_CALSEL_TUTOR");													
		}
		else if(iIdx=="l"){
			o.title+=sSep+getLanguageText("SAPUR_CALLASTMONTH");
			if(ur_get(sId).getAttribute("nav")=="true")
				o.title+=sSep+getLanguageText("SAPUR_CALNEXTMONTH_TUTOR");
			if(o.getAttribute("cl")=="true")
				o.title+=" "+getLanguageText("SAPUR_CALSEL_TUTOR");						
}
		else if(o.getAttribute("cl")=="true")
			o.title+=sSep+getLanguageText("SAPUR_CALSEL_TUTOR");
	}
}
function sapUrMapi_DateNavigator_getDateFromId(sId){}
function sapUrMapi_DateNavigator_getDefaultSelectionClass(){
	return "urSel5";
}

//** DefaultButton.ie5 **
function sapUrMapi_DBTN_RegisterCreate() {
	sapUrMapi_Create_AddItem("ur_dbtn", "sapUrMapi_DBTN_addDBtn()");
}
function sapUrMapi_DBTN_addDBtn()
{
  if (!ur_get("ur-topdefault")) {
		var oDefaultTop=document.createElement("DIV");
		var oDefaultBottom=document.createElement("DIV");
		var oDefaultLeft=document.createElement("DIV");
		var oDefaultRight=document.createElement("DIV");
		oDefaultTop.setAttribute("id","ur-topdefault");
		oDefaultBottom.setAttribute("id","ur-bottomdefault");
		oDefaultLeft.setAttribute("id","ur-leftdefault");
		oDefaultRight.setAttribute("id","ur-rightdefault");
		
		document.getElementsByTagName("BODY")[0].appendChild(oDefaultTop);
		document.getElementsByTagName("BODY")[0].appendChild(oDefaultBottom);
		document.getElementsByTagName("BODY")[0].appendChild(oDefaultLeft);
		document.getElementsByTagName("BODY")[0].appendChild(oDefaultRight);
  }
  sapUrMapi_Resize_AddItem("ur-DBtn-rect", "sapUrMapi_DBTN_showDBtn()");
}
function sapUrMapi_DBTN_showDBtn() 
{ 
	var dbId=null;
	try {
		var oNewActive=document.activeElement;
	}
	catch (ex) { 
		return; 
	}
	if( oNewActive != null)
	{
		while(dbId==null && oNewActive.tagName != null && oNewActive.tagName!="BODY") 
		{
		  dbId=oNewActive.getAttribute("dbId");
		  oNewActive=oNewActive.parentNode;
		}
	}
	
	if(dbId!=null && ur_get(dbId).parentNode!=null)
	{
		
		var currentFocusId = sapUrMapi_Focus_getCurrentId();
		var currentFocus = ur_get(currentFocusId);
		var sCt=sapUrMapi_getControlTypeFromObject(currentFocus);
		switch (sCt) 
		{	
			case "B":
			case "TB":
			case "LN":
			case "TE":
				    sapUrMapi_DBTN_hideDBtn(); 
				break;
			case "TY":
				var sTp = currentFocus.getAttribute("tp");
			    if (sTp != null)
			    {
					if(sTp=="BTN" || sTp=="MNU")
					sapUrMapi_DBTN_hideDBtn(); 
			    }
				else
			    {
					sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive);
				}
				break;
			case "T":
				var sTp = currentFocus.getAttribute("tp");
			    if (sTp != null)
			    {
					if(sTp=="BTN")
					sapUrMapi_DBTN_hideDBtn(); 
			    }
				else
				{
					sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive);
				}
				break;
			case "I":
			case "TI":
				if(currentFocus.onkeypress!=null)
					sapUrMapi_DBTN_hideDBtn(); 
				else
					sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive);
				break;
			case "IT":
				var oOnek = currentFocus.getAttribute("onek");
					if(oOnek){
					   sapUrMapi_DBTN_hideDBtn();
					   break;
					}
			default :
				sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive);
				
		}
	}
	else 
	{
		sapUrMapi_DBTN_hideDBtn();
	}
	
}
function sapUrMapi_DBTN_showDBtnRect(dbId,oNewActive)
{
	oNewActive=ur_get(dbId);  
	var activeoffsetonscreen; 
	if(ur_get("ur-topdefault")!=null && ur_get("ur-bottomdefault")!=null && ur_get("ur-leftdefault")!=null && ur_get("ur-rightdefault")!=null)
		activeoffsetonscreen = sapUrMapi_DBTN_getOffset(oNewActive);
	else
		return false;
	var oC={top:ur_get("ur-topdefault"),bottom:ur_get("ur-bottomdefault"),left:ur_get("ur-leftdefault"),right:ur_get("ur-rightdefault")};
	var oDefBtn;	
	if (oNewActive.offsetWidth>0)
	{
		oDefBtn=sapUrMapi_DBTN_calcRect(oNewActive,activeoffsetonscreen,oC.left,oC.right,oC.top,oC.bottom);
		if (oDefBtn==null) return;
		oCC={x1:"top",x2:"bottom",x3:"left",x4:"right"};
		for (xx in oCC) 
		{
			if (xx.charAt(0) == "_") {continue;}
			oC[oCC[xx]].style.top=sapUrMapi_sAddUnit( oDefBtn[oCC[xx]].top , "px" );
			oC[oCC[xx]].style.left=sapUrMapi_sAddUnit( oDefBtn[oCC[xx]].left , "px" );
		   if (oCC[xx]=="top" || oCC[xx]=="bottom") 
			oC[oCC[xx]].style.width=sapUrMapi_sAddUnit( oDefBtn[oCC[xx]].width , "px" );
			if (oCC[xx]=="left" || oCC[xx]=="right") 
			oC[oCC[xx]].style.height=sapUrMapi_sAddUnit( oDefBtn[oCC[xx]].height , "px" );
		}
	}
    var top = ur_get("ur-topdefault");
	top.style.borderTop="solid DarkSlateGray 1px";
	top.style.height="1px";
	top.style.position="absolute";
	top.style.zIndex="1000";
    var right = ur_get("ur-rightdefault");
	right.style.borderRight="solid DarkSlateGray 1px";
	right.style.height="1px";
	right.style.width="1px";
	right.style.position="absolute";
	right.style.zIndex="1000";
    var bottom = ur_get("ur-bottomdefault");
	bottom.style.borderTop="solid DarkSlateGray 1px";
	bottom.style.height="1px";
	bottom.style.position="absolute";
	bottom.style.zIndex="1000";
    var left = ur_get("ur-leftdefault");
	left.style.borderLeft="solid DarkSlateGray 1px";
	left.style.height="1px";
	left.style.width="1px";
	left.style.position="absolute";
	left.style.zIndex="1000";
	bottom.style.fontSize = "1px";
}
function sapUrMapi_DBTN_hideDBtn()
{
	sapUrMapi_Focus_DeflBtn_hideFocusRect(true);
 }
function sapUrMapi_DBTN_calcRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom) {    
	var obj=sapUrMapi_Focus_DflBtn_calcFocusRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom,true);
	return obj;
}
function sapUrMapi_DBTN_getOffset(object)
{	
	var pos=sapUrMapi_Focus_DflBtn_getFocusOffset(object,true);
	return pos;
}
function sapUr_DBTN_createFrame(sId) {
	var oButton = ur_get(sId),
		iWidth = oButton.offsetWidth,
		iHeight = oButton.offsetHeight,
		
		openingSPAN = "<SPAN ",
		closingTAG = ">",
		closingSPAN = "</SPAN>",
		
		sBorderColor = oButton.currentStyle.borderColor,
		sFontSize = oButton.currentStyle.fontSize,
		sDirection = (ur_system.direction == "rtl") ? "right" : "left",
		
	oFrame = openingSPAN + "style=\"border:2px solid " + sBorderColor + ";";
	oFrame += "width:" + iWidth + ";";
	oFrame += "margin-" + sDirection + ":-" + iWidth + ";";
	oFrame += "height:" + 10 + ";";
	oFrame += "font-size:" + 10 + "px;";
	oFrame += "margin-bottom:-4px;\"" ;
	
	oFrame += " id=\"ur-DbtnBrd\"";
	oFrame += closingTAG;
	oFrame += "&nbsp;";
	oFrame += closingSPAN;
	
	oButton.insertAdjacentHTML("afterEnd", oFrame);
}
function sapUr_DBTN_removeFrame() {
	var oFrame = ur_get("ur-DbtnBrd");
	
	if (oFrame == null) return;
	
	var oPrevious = oFrame.previousSibling;
	oFrame.removeNode();
	
	if (oPrevious.nextSibling.nodeType == 3) {
		oPrevious.nextSibling.removeNode();
	}
}

//** DragSource.ie5 **

var _ur_DragDrop=null;
function ur_Drag_hideCursor() {
	if (_ur_DragDrop) {
   if (_ur_DragDrop.cursor) {
     _ur_DragDrop.cursor.style.display="none";
   }
  }
}
function ur_Drag_showCursor() {
	if (_ur_DragDrop) {
   if (_ur_DragDrop.cursor) {
     _ur_DragDrop.cursor.style.display="block";
   }
  }
}
function ur_Drag_progress(e) {
  if (_ur_DragDrop && _ur_DragDrop.progress) {
    var o=ur_EVT_src(e);
    _ur_DragDrop.isddoperation=true;
    var oChildContainer=sapUrMapi_isChildOfControl(o,"DRT");
    if (oChildContainer) {
	    if (_ur_DragDrop.target!=oChildContainer) {
	      _ur_DragDrop.target=oChildContainer;
	      ur_Drag_enter(_ur_DragDrop.target.id,e);
	    } else {
	      ur_Drag_over(_ur_DragDrop.target.id,e);
	    }
	    if (_ur_DragDrop.cursor!=_ur_DragDrop.drag) {
	      ur_Drag_hideCursor();
	      _ur_DragDrop.cursor=_ur_DragDrop.drag;
	    };
	  } else {
	    if (_ur_DragDrop.target) ur_Drag_leave(_ur_DragDrop.target.id,e);
	    _ur_DragDrop.target=null;
	    if (_ur_DragDrop.cursor!=_ur_DragDrop.nodrag) {
	      ur_Drag_hideCursor();
	      _ur_DragDrop.cursor=_ur_DragDrop.nodrag;
	    };
	  }
	  var oBody=document.getElementsByTagName("BODY")[0];
	  if (e.x>oBody.offsetWidth-26 ||e.y>oBody.offsetHeight-26 || e.x<0 || e.y<0) {
	    ur_Drag_hideCursor();
	  } else {
	  	if (ur_system.direction=="rtl" && ur_system.browser_abbrev == "ie6") {
				iHorCorr = oBody.scrollLeft-sapUrMapi_posLeftCorrectionForRTL(oBody);
				_ur_DragDrop.cursor.style.top=sapUrMapi_sAddUnit( e.clientY+14 , "px" );
				_ur_DragDrop.cursor.style.left=sapUrMapi_sAddUnit( e.clientX-5 , "px" );
			} else {
				iHorCorr = oBody.scrollLeft;
				_ur_DragDrop.cursor.style.top=sapUrMapi_sAddUnit( e.clientY+14 , "px" );
				_ur_DragDrop.cursor.style.left=sapUrMapi_sAddUnit( e.clientX+10 , "px" );
			}
	    ur_Drag_showCursor();
	  }
    ur_EVT_fire(ur_get(_ur_DragDrop.source.id),"odrag",e);
  }
}
function ur_Drag_start(sId,e){
  if (!_ur_DragDrop) {
    _ur_DragDrop={cursor:null,drag:null,nodrag:null,progress:false,isddoperation:false};
    var o=document.createElement("IMG");
    o.src=ur_system.mimepath+"dragdrop/nodrop.gif";
		o.style.position="absolute";
	  o.style.display="none";
	  o.style.zIndex="1000";
	  _ur_DragDrop.nodrag=o;
	  document.body.appendChild(_ur_DragDrop.nodrag);
    var o=document.createElement("IMG");
    o.src=ur_system.mimepath+"dragdrop/drop.gif";
		o.style.position="absolute";
	  o.style.display="none";
	  o.style.zIndex="1000";
	  _ur_DragDrop.drag=o;
	  document.body.appendChild(_ur_DragDrop.drag);
	} 
	_ur_DragDrop.progress=true;
	_ur_DragDrop.source=sapUrMapi_isChildOfControl(ur_get(sId),"DRS");
        if (ur_system.browser_abbrev == "ie6") {
	   ur_get(sId).setCapture();
        } else {
           window.addEventListener("mousemove",ur_Drag_progress,true);
	   window.addEventListener("mouseup",ur_Drag_end,true);
        }
  ur_EVT_fire(ur_get(sId),"ods",e);
  if (ur_system.browser_abbrev != "ie6") ur_EVT_cancel(e);
}
function ur_Drag_end(e){
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
    ur_Drag_hideCursor();
    if (_ur_DragDrop.target) ur_Drop(_ur_DragDrop.target.id,e);
	  ur_EVT_fire(_ur_DragDrop.source,"ode",e);
          if (ur_system.browser_abbrev == "ie6") {
		_ur_DragDrop.source.releaseCapture();
          } else {
  	       window.removeEventListener("mousemove",ur_Drag_progress,true);
  	       window.removeEventListener("mouseup",ur_Drag_end,true);
          }
	ur_Drag_hideCursor();
	_ur_DragDrop.source=null;
	_ur_DragDrop.target=null;
	_ur_DragDrop.isddoperation=false;
	_ur_DragDrop.progress=false;
  }
}
function ur_Drop(sId,e) {
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
		ur_EVT_fire(ur_get(sId),"odrop",e);
	}
}
function ur_Drag_enter(sId,e) {
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
	  ur_EVT_fire(ur_get(sId),"odenter",e);
	}
}
function ur_Drag_over(sId,e) {
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
	  ur_EVT_fire(ur_get(sId),"odo",e);
	}
}
function ur_Drag_leave(sId,e) {
	if (_ur_DragDrop && _ur_DragDrop.progress && _ur_DragDrop.isddoperation) {
  	ur_EVT_fire(ur_get(sId),"odl",e);
  }
}

//** DropDownListBox.ie5 **

function sapUrMapi_DropDownListBox_getSelectedKey(sId) {
	oSelect = ur_get(sId);
	return oSelect.options[oSelect.selectedIndex].value;
}
function sapUrMapi_DropDownListBox_setSelectedKey(sId,sKey) {
	oSelect = ur_get(sId);
	for (var n=0;n<oSelect.options.length;n++) {
		if (oSelect.options[n].value==sKey) {
			oSelect.selectedIndex=n; return;
		}
	}
}
function sapUrMapi_DropDownListBox_getSelectedIndex(sId) {
	return ur_get(sId).selectedIndex;
}
function sapUrMapi_DropDownListBox_setSelectedIndex(sId,iIndex) {
	ur_get(sId).selectedIndex=iIndex;
}
function sapUrMapi_DropDownListBox_focus(sId) {
   sapUrMapi_focusElement(sId);
}
function sapUrMapi_DropDownListBox_addOptions(sId,oKeyValuePairs,sSelectedKey) {
  for(var elem in oKeyValuePairs)
    sapUrMapi_DropDownListBox_addOption(sId,elem,oKeyValuePairs[elem],elem==sSelectedKey);
}
function sapUrMapi_DropDownListBox_addOption(sId,sKey,sValue,bSelected) {
  var ddlb = ur_get(sId);
  ddlb.options[ddlb.options.length] = new Option(sValue,sKey);
  if (bSelected) ddlb.options[ddlb.options.length-1].selected=true;
}
function sapUrMapi_DropDownListBox_keydown(sId,oEvt){
	if(oEvt.keyCode==40 || oEvt.keyCode==38) ur_EVT_cancelBubble(oEvt);
}

//** FileUpload.ie5 **

function sapUrMapi_FileUpload_change(sId,oEvt){
	
}

//** FocusRect.ie6 **

function sapUrMapi_Focus_canFocus(o) {
	if (o==null) return;
	if (!o.tagName) return;
	var tag=","+o.tagName+",";
  
	if((tag==",INPUT,")&&(o.type=="hidden"||o.disabled)){ 
		return false;
	}
	var search=",A,BODY,BUTTON,FRAME,IFRAME,INPUT,ISINDEX,OBJECT,SELECT,TEXTAREA,";
  if (o && o.currentStyle && (o.currentStyle.visibility == "hidden" || o.currentStyle.display == "none")) return false;
 	
	if (search.indexOf(tag)>-1){
	   if (!ur_system.is508 && o.tabIndex<0)
	       return (o.ti>=0);
	   else
		  return (o.tabIndex>=0);
	}
	if (!o.getAttribute) return;
	if (o.getAttribute("ti")!=null) return (parseInt(o.getAttribute("ti"))>=0);
}
function sapUrMapi_Focus_getNextFocusableElement(o) {
	while (o!=null) {
		if (sapUrMapi_Focus_canFocus(o)) return o;
		o=o.parentNode;
	}
	return null;
}
var oOldFocus=null;
function sapUrMapi_Focus_showFocusRect(sId) {
	try
	{
		if ((document.activeElement!=null) && (document.activeElement.id=="ur-accfocus")) return;
	}
	catch(e)
	{
		return;
	}	
	var oTop = ur_get("ur-topfocus");
	if (oTop==null) return;
  var oNewActive=null;
	if (typeof(sId)!="undefined") {
		if (typeof(sId)=="string") {
    oNewActive=ur_get(sId);
	} else {
      oNewActive=sId;
		}
	} else {
    oNewActive=document.activeElement;
	}
	if (oOldFocus!=null) {
	  if (oOldFocus==oNewActive) return;
	}
	oNewActive=sapUrMapi_Focus_getNextFocusableElement(oNewActive);      
	if ((oNewActive==null)||(oNewActive.tagName=="BODY")) return;
	
	if (oNewActive.tagName =="IFRAME" && !oNewActive.getAttribute("ct")) {
		sapUrMapi_Focus_hideFocusRect();
		return;
	}
	if (ur_getAttD(oNewActive,"ct","")=="IF") {
	  ur_attachEvent(oNewActive.firstChild, "activate", sapUrMapi_Focus_hideFocusRect);
	  return;
	}
  var sType=sapUrMapi_getControlTypeFromObject(oNewActive);
	if(sType=="C"||sType=="R"||sType=="TRI"){ 
		oNewActive=ur_get(oNewActive.id.split("-")[0]+"-lbl");
	}
	if(oNewActive.getAttribute("urhf")=="true") return;
  
  var x=UCF_DomUtil.sGetCurrentStyle(oNewActive,'width');
  var y=oNewActive.offsetWidth;
  if (!oNewActive.hideFocus) oNewActive.hideFocus="true";
  if (y!=oNewActive.offsetWidth) oNewActive.style.width=sapUrMapi_sAddUnit( x , "px" );
  
  
	
	if (sType=="TS") {
	  if (oNewActive.id.indexOf("-itm-")>-1 && oNewActive.id.indexOf("-txt")==-1 && oNewActive.id.indexOf("-a")==-1) 
	    oNewActive=oNewActive.firstChild;
	}
	
	else  if (sType=="TBV") {
		  if (oNewActive.className=="urImgCbgCbx") {
		    oNewActive=oNewActive.nextSibling;
		  } else if (oNewActive.className=="urImgRbgCbx") {
		    oNewActive=oNewActive.nextSibling;
		  }
	}
	
  else if (sType=="SB") {
	  if (oNewActive.tagName=="TABLE") {
	    oNewActive=oNewActive.parentNode.parentNode.parentNode;
	  }	else {
	    oNewActive=oNewActive.parentNode;
	  }
	}
	
  
  else if (sType=="CB") {
		oNewActive=oNewActive.parentNode;
  	if(oNewActive.tagName=="TD")	
  		oNewActive=oNewActive.parentNode.parentNode;
  }
  else if (sType=="ILBM" || sType=="ILBS") {
  
  	if(oNewActive.tagName=="TD") {
  		oNewActive=oNewActive.parentNode.parentNode.parentNode.parentNode;
    }
  }
  
  
  else if (sType=="ST") {
		if (oNewActive.innerText=="") {
		  oNewActive=oNewActive.parentNode;
		}
  }
  var activeoffsetonscreen = sapUrMapi_Focus_getFocusOffset(oNewActive);
	var sccontrol = oNewActive.parentNode;
	var oC={top:ur_get("ur-topfocus"),bottom:ur_get("ur-bottomfocus"),left:ur_get("ur-leftfocus"),right:ur_get("ur-rightfocus")};
  if (oNewActive.offsetWidth>0) {
		oFocusRect=sapUrMapi_Focus_calcFocusRect(oNewActive,activeoffsetonscreen,oC.left,oC.right,oC.top,oC.bottom);
		if (oFocusRect==null) return;
		oCC={x1:"top",x2:"bottom",x3:"left",x4:"right"};
		for (xx in oCC) {
			if (xx.charAt(0) == "_") {continue;}
		  oC[oCC[xx]].style.top=sapUrMapi_sAddUnit( oFocusRect[oCC[xx]].top , "px" );
		  oC[oCC[xx]].style.left=sapUrMapi_sAddUnit( oFocusRect[oCC[xx]].left , "px" );
		  if (oCC[xx]=="top" || oCC[xx]=="bottom") 
		    oC[oCC[xx]].style.width=sapUrMapi_sAddUnit( oFocusRect[oCC[xx]].width , "px" );
		  if (oCC[xx]=="left" || oCC[xx]=="right") 
		    oC[oCC[xx]].style.height=sapUrMapi_sAddUnit( oFocusRect[oCC[xx]].height , "px" );
	}
}
}
function sapUrMapi_Focus_hideFocusRect() {
	sapUrMapi_Focus_DeflBtn_hideFocusRect(false);
 
}
function sapUrMapi_Focus_addFocusRect(sFocusElementId) {
	
	if (ur_get("ur-topfocus")==null) {
	  var oBody=document.getElementsByTagName("BODY")[0];
		
		var oFTop		 = document.createElement("DIV");
		var oFBottom = document.createElement("DIV");
		var oFLeft   = document.createElement("DIV");
		var oFRight  = document.createElement("DIV");
		
	  
		oFTop.setAttribute("id","ur-topfocus"); 
		oFTop.className="urFocTop";
		oFTop.style.top="-10000px";
		oFTop.appendChild(document.createTextNode(""));
		oBody.appendChild(oFTop);
	  
		oFBottom.setAttribute("id","ur-bottomfocus"); 
		oFBottom.className="urFocBtm";
		oFBottom.style.top="-10000px";
		oFBottom.appendChild(document.createTextNode(""));
		oBody.appendChild(oFBottom);
	  
		oFLeft.setAttribute("id","ur-leftfocus"); 
		oFLeft.className="urFocLft";
		oFLeft.style.top="-10000px";
		oFLeft.appendChild(document.createTextNode(""));
		oBody.appendChild(oFLeft);
	  
		oFRight.setAttribute("id","ur-rightfocus"); 
		oFRight.className="urFocRgt";
		oFRight.style.top="-10000px";
		oFRight.appendChild(document.createTextNode(""));
		oBody.appendChild(oFRight);
		
		ur_focus_activate_handler=function (){sapUrMapi_Focus_showFocusRect()};
		
		
		
		
		
  }
		
	
	if (ur_get("ur-topdefault")==null) {
	  var oBody=document.getElementsByTagName("BODY")[0];
		
		var oDefaultTop=document.createElement("DIV");
		var oDefaultBottom=document.createElement("DIV");
		var oDefaultLeft=document.createElement("DIV");
		var oDefaultRight=document.createElement("DIV");
		oDefaultTop.setAttribute("id","ur-topdefault");
		oDefaultBottom.setAttribute("id","ur-bottomdefault");
		oDefaultLeft.setAttribute("id","ur-leftdefault");
		oDefaultRight.setAttribute("id","ur-rightdefault");
		oBody.appendChild(oDefaultTop);
		oBody.appendChild(oDefaultBottom);
		oBody.appendChild(oDefaultLeft);
		oBody.appendChild(oDefaultRight);
		sapUrMapi_Resize_AddItem("ur-DBtn-rect", "sapUrMapi_DBTN_showDBtn()");
		ur_defaultbutton_activate_handler=function (){sapUrMapi_DBTN_showDBtn()};
		ur_attachEvent(document, "activate", ur_defaultbutton_activate_handler);
		ur_attachEvent(document, "deactivate", ur_defaultbutton_activate_handler);
		ur_attachEvent(document, "activate", ur_defaultbutton_activate_handler);
	}
	try {
  	sapUrMapi_focusElement(sFocusElementId);
	} catch(ex) {}
}
function sapUrMapi_Focus_RegisterCreate(sId) {
	
	
	
	ur_defaultbutton_activate_handler=function (){sapUrMapi_DBTN_showDBtn()};
	ur_defaultbutton_deactivate_handler = function () {sapUr_DBTN_removeFrame()};
	ur_attachEvent(document, "activate", ur_defaultbutton_activate_handler);
	ur_attachEvent(document, "deactivate", ur_defaultbutton_deactivate_handler);
}
function sapUrMapi_Focus_getCurrentId () {
	try{
	  var o = window.document.activeElement;
  } catch(ex) {return "";}
  if (o!=null) {
	  if (o.tagName=="LABEL") return o.htmlFor;
	  while (o.id=="") {
			if (o.tagName=="BODY") return "";
			o=o.parentNode;
	  }
	  return o.id;
  }
  return "";
}
function sapUrMapi_Focus_reset() {
	sapUrMapi_Focus_addFocusRect();
	var oTop = ur_get("ur-topfocus");
	var oBottom = ur_get("ur-bottomfocus");
	var oLeft = ur_get("ur-leftfocus");
	var oRight = ur_get("ur-rightfocus");
  if(oTop) {
	  var oParent=oTop.parentNode;
	  var oBody=document.getElementsByTagName("BODY")[0];
	  if (oParent!=oBody) {
			oParent.removeChild(oTop);
			oBody.appendChild(oTop);
			oParent.removeChild(oBottom);
			oBody.appendChild(oBottom);
			oParent.removeChild(oLeft);
			oBody.appendChild(oLeft);
			oParent.removeChild(oRight);
			oBody.appendChild(oRight);
		}
  }
}
function sapUrMapi_Focus_remove() {
	var oTop = ur_get("ur-topfocus");
	if(oTop==null) return;
	var oBottom = ur_get("ur-bottomfocus");
	var oLeft = ur_get("ur-leftfocus");
	var oRight = ur_get("ur-rightfocus");
  var oParent=oTop.parentNode;
	oParent.removeChild(oTop);
	oParent.removeChild(oBottom);
	oParent.removeChild(oLeft);
	oParent.removeChild(oRight);
	oParent.removeChild(oEdg1);
	oParent.removeChild(oEdg2);
	oParent.removeChild(oEdg3);
	oParent.removeChild(oEdg4);
}
function sapUrMapi_Focus_getFocusRectHeight() {
	var oTop = ur_get("ur-topfocus");
	if (oTop) return oTop.offsetHeight;
	return 0;
}
function sapUrMapi_Focus_calcFocusRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom)
{
	var oFcsRect = sapUrMapi_Focus_DflBtn_calcFocusRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom,false);
	return oFcsRect;
}
function sapUrMapi_Focus_getFocusOffset(oNewActive)
{
	var activeoffsetonscreen = sapUrMapi_Focus_DflBtn_getFocusOffset(oNewActive,false);
	return activeoffsetonscreen;
}
function sapUrMapi_Focus_DflBtn_getFocusOffset(object,IsDeflBtn) {
	var position= { top: 0, left: 0};
	position = sapUrMapi_getAbsolutePosition(object);
	var sccontrol = object.parentNode;
	var bFoundFirstScrollContainer=false;	
	if(IsDeflBtn)
		var oC={top:ur_get("ur-topdefault"),bottom:ur_get("ur-bottomdefault"),left:ur_get("ur-leftdefault"),right:ur_get("ur-rightdefault")};
	else
		var oC={top:ur_get("ur-topfocus"),bottom:ur_get("ur-bottomfocus"),left:ur_get("ur-leftfocus"),right:ur_get("ur-rightfocus")};	
	while ((sccontrol) && (!bFoundFirstScrollContainer)) {
	  if (sccontrol.tagName=="DIV" || sccontrol.tagName=="SPAN") {
			if (UCF_DomUtil.sGetCurrentStyle(sccontrol,'overflow') != "visible" && UCF_DomUtil.sGetCurrentStyle(sccontrol,'height')!="auto" ) {
				if (sccontrol!=oC.top.parentNode) {
				  oParent=oC.top.parentNode;
					for (var n in oC) {
						if (n.charAt(0) == "_") {continue;}
						oParent.removeChild(oC[n]);
					  sccontrol.appendChild(oC[n]);
				   }
				}
				bFoundFirstScrollContainer=true;
				var pos=sapUrMapi_getOffsetOnScreen(sccontrol);
        
	      position.top-=pos.top;
	      position.left-=pos.left;
				
				if (UCF_DomUtil.sGetCurrentStyle(sccontrol,'borderTopStyle')!="none") {
					if (!isNaN(parseInt(UCF_DomUtil.sGetCurrentStyle(sccontrol,'borderTopWidth'))))
				  position.top-=parseInt(UCF_DomUtil.sGetCurrentStyle(sccontrol,'borderTopWidth'));
	      }
	      if (UCF_DomUtil.sGetCurrentStyle(sccontrol,'borderLeftStyle')!="none") {
					if (!isNaN(parseInt(UCF_DomUtil.sGetCurrentStyle(sccontrol,'borderLeftWidth'))))
			    position.left-=parseInt(UCF_DomUtil.sGetCurrentStyle(sccontrol,'borderLeftWidth'));
        }	
	    } 
	  }
	  sccontrol = sccontrol.parentNode;
	}
	if (!bFoundFirstScrollContainer) {
			oBody=document.getElementsByTagName("BODY").item(0);
			if (oBody!=oC.top.parentNode) {
			  oParent=oC.top.parentNode;
				for (var n in oC) {
					if (n.charAt(0) == "_") {continue;}
					oParent.removeChild(oC[n]);
					oBody.appendChild(oC[n]);
			}
	}
	}
	return position;
}
function sapUrMapi_Focus_DflBtn_calcFocusRect(oElement,oOffsets,oLeft,oRight,oTop,oBottom,IsDeflBtn) {
	
	var o=new Array();
	o.top = {top:0,left:0,width:0};
	o.bottom = {top:0,left:0,width:0};
	o.left = {top:0,left:0,height:0};
	o.right = {top:0,left:0,height:0};
	sType=sapUrMapi_getControlTypeFromObject(oElement);
	sParentType=sapUrMapi_getControlTypeFromObject(oElement.parentNode);
	
	var oWidthCalc = oElement.parentNode;
	var iRealWidth = oElement.offsetWidth;
	var iLeftOffset = 0;
	
	
	
	while(oWidthCalc && oWidthCalc.tagName!="BODY" && oWidthCalc.offsetWidth >= iRealWidth){
		iLeftOffset+=oWidthCalc.offsetLeft;
		oWidthCalc = oWidthCalc.parentNode;
	}
	if (oWidthCalc && (oWidthCalc.tagName=="TD" ||oWidthCalc.tagName=="TH")) {
		iRealWidth = oWidthCalc.offsetWidth - iLeftOffset - 2;
	}
	
	if (sType=="PI") {
	  if (oElement.id.indexOf("-itm-")>-1){
	    o.top.top+=parseInt(UCF_DomUtil.sGetCurrentStyle(oTop,'height'));
	    o.bottom.top-=parseInt(UCF_DomUtil.sGetCurrentStyle(oBottom,'height'));
	    o.left.left+=parseInt(UCF_DomUtil.sGetCurrentStyle(oLeft,'width'));
	    o.right.left-=parseInt(UCF_DomUtil.sGetCurrentStyle(oRight,'width'));
	  } else {
	    o.top.top+=parseInt(UCF_DomUtil.sGetCurrentStyle(oTop,'height'));
	    o.bottom.top-=parseInt(UCF_DomUtil.sGetCurrentStyle(oBottom,'height'));
	    o.left.left+=(parseInt(UCF_DomUtil.sGetCurrentStyle(oLeft,'width'))+1);
	    o.right.left-=parseInt(UCF_DomUtil.sGetCurrentStyle(oRight,'width'));			
	  }
	} else if (oElement.className.indexOf("urTreN")>-1) {
	  if (!(oElement.childNodes.length>0 && oElement.childNodes[0].tagName=="TABLE")) {
	    o.bottom.top-=4;
	}
		}
	
	if(IsDeflBtn==true) 
		o.top.top+=oOffsets.top-1;
	else
		o.top.top+=oOffsets.top-parseInt(UCF_DomUtil.sGetCurrentStyle(oLeft,'width'));
	o.top.left+=oOffsets.left;
	o.top.width+=iRealWidth;
	o.bottom.top+=(oOffsets.top+oElement.offsetHeight);
	o.bottom.left=o.top.left;
	o.bottom.width=o.top.width;
	o.left.top=o.top.top;
	if(IsDeflBtn==true) 
		o.left.left+=oOffsets.left-1;
	else
		o.left.left+=(-1*parseInt(UCF_DomUtil.sGetCurrentStyle(oLeft,'width')))+oOffsets.left;
	o.right.top=o.top.top;
	if(IsDeflBtn==true) 
		o.right.left+=o.left.left+o.top.width +1;
	else
		o.right.left+=(o.left.left+o.top.width+parseInt(UCF_DomUtil.sGetCurrentStyle(oLeft,'width')));
	if (oElement.offsetHeight>0) {
		if(IsDeflBtn==true) 
			o.left.height+=o.bottom.top-o.top.top;
		else
			o.left.height+=o.bottom.top-o.top.top+parseInt(UCF_DomUtil.sGetCurrentStyle(oBottom,'height'));
		
		o.right.height+=o.left.height;
		
	}
  
  try {
    
    sExclude=",B,I,CB,C,R,TE,TS,TV,CP,RM,PG,";
    if (!IsDeflBtn && sExclude.indexOf(","+sType+",")==-1 && oElement.tagName!="A" && oElement.tagName!="INPUT"  ) {
      var w=ur_get("ur-leftfocus").offsetWidth;
  		o.top.top+=w; 
  		o.top.left+=w 
  		o.top.width-=w; 
	  	
			o.bottom.top-=w;
			o.bottom.left+=w;
			o.bottom.width-=w;
			
			o.left.top+=w;
			o.left.left+=w;
			o.left.height-=w*2;
			
			o.right.top+=w;
			o.right.left-=w;
			o.right.height-=w*2;
		}
  } catch (ex) {
  }
	
	for (var iter1 in o) {
		if ((IsDeflBtn==false) && (iter1.charAt(0) == "_")) {continue;}
	  for (var iter2 in o[iter1]) {
	  	if ((IsDeflBtn==false) && (iter2.charAt(0) == "_")) {continue;}
	    if (isNaN(o[iter1][iter2])) return null;
	    o[iter1][iter2]+="px";
	  }
	}
	return o;
}
function sapUrMapi_Focus_DeflBtn_hideFocusRect(IsDeflBtn) {
  var oNewActive=null;
  try {
    oNewActive=document.activeElement;
  } catch (ex) { return; }
  oOldFocus=null;
	if (IsDeflBtn)
	   var oC={top:ur_get("ur-topdefault"),bottom:ur_get("ur-bottomdefault"),left:ur_get("ur-leftdefault"),right:ur_get("ur-rightdefault")};
	else
		var oC={top:ur_get("ur-topfocus"),bottom:ur_get("ur-bottomfocus"),left:ur_get("ur-leftfocus"),right:ur_get("ur-rightfocus")};
  if (oC.top==null) return;
  for (var x in oC) {
  	if (x.charAt(0) == "_") {continue;}
  	oC[x].style.top="-10000px";
}
}

//** FreeContextualArea.ie5 **

function mf_FRA_exp(sId)
{
  var o=ur_get(sId);
  var oImg=o.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild;
  oImg.className="urFRAExpOp";
  var oCnt=o.firstChild.childNodes[1].firstChild.firstChild;
  oCnt.style.display="block";
  
  ur_setSt(o,ur_st.COLLAPSED,false);
  ur_setSt(o,ur_st.EXPANDED,true);
  sapUrMapi_DBTN_showDBtn();
  sapUrMapi_refocusElement(sId);
}
function mf_FRA_col(sId)
{
  var o=ur_get(sId);
  var oImg=o.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild.firstChild;
  oImg.className="urFRAExpClo";
  var oCnt=o.firstChild.childNodes[1].firstChild.firstChild;
  oCnt.style.display="none";
  ur_setSt(o,ur_st.COLLAPSED,true);
  ur_setSt(o,ur_st.EXPANDED,false);
  sapUrMapi_DBTN_hideDBtn(); 
  sapUrMapi_refocusElement(sId);
}
function ur_FRA_cl(oEvt)
{
  if (ur_FRA_tgl(oEvt)) return true;
  var oCl=ur_EVT_src(oEvt);
  var o=ur_getRootObj(oCl);
  if (oCl.className=="urFRAPers")
  {
    ur_EVT_fire(o,"opers",oEvt);
    return true;	
  }
}
function ur_FRA_kd(sId,oEvt)
{
	
	var o=ur_get(sId);
	if(oEvt.keyCode==107)
	{
		if (ur_isSt(o,ur_st.COLLAPSED))
		{
			mf_FRA_exp(sId);
			
			
		 
		}
		return true;
	 }
	 
	 else  if(oEvt.keyCode==109)
	 {
		 if (ur_isSt(o,ur_st.EXPANDED))
		 {
			 mf_FRA_col(sId);
			 sapUrMapi_DBTN_hideDBtn(); 
			
		 }
		 return true;
	 }
     else if(oEvt.keyCode== 13)
	 {
		sapUrMapi_triggerDefaultButton(sId,oEvt);
	 }	 
	 else
		return sapUrMapi_skip(sId,oEvt);
}
function ur_FRA_tgl(oEvt)
{
  var oCl=ur_EVT_src(oEvt);
  var o=ur_getRootObj(oCl);
  if (oCl.className=="urFRAExpOp") 
  {
    ur_EVT_fire(o,"ocol",o.id);
    return true;
  } else if (oCl.className=="urFRAExpClo")
  {
    ur_EVT_fire(o,"oexp",oEvt);
    return true;
  }
}
//** GeoMap.ie5 **

function sapUrMapi_GeoMap_keydown(sId, oEvt){
	var o=ur_get(sId);
	var oSrc = 	ur_EVT_src(oEvt);
	var oBtn=null;
 	var iKey=oEvt.keyCode;
	
	if(o==null) return;
	if(oSrc && oSrc.tagName && oSrc.tagName!="IMG") return;
	
 	if(ur_system.direction=="rtl" && iKey==37) iKey=39;
 	else if(ur_system.direction=="rtl" && iKey==39) iKey=37;
	if(iKey==107)
		oBtn=ur_GeoMap_getImage("ZIN",o);
	else if(iKey==109)
		oBtn=ur_GeoMap_getImage("ZOUT",o);
	else if(iKey==38)
		oBtn=ur_GeoMap_getImage("N",o);
	else if(iKey==39)
		oBtn=ur_GeoMap_getImage("E",o);
	else if(iKey==40)
		oBtn=ur_GeoMap_getImage("S",o);
	else if(iKey==37)
		oBtn=ur_GeoMap_getImage("W",o);
		
	if(oBtn!=null){
		ur_EVT_cancel(oEvt);
		oBtn.parentNode.click();
		return;
	}
	
	return sapUrMapi_skip(sId,oEvt);
}
function sapUrMapi_GeoMap_handleSpace(oEvt){
	var oSrc = ur_EVT_src(oEvt);
	if (oSrc.onclick && oEvt.keyCode==32) {
		oSrc.click(oEvt);
		ur_EVT_cancel(oEvt);
	}
}
function ur_GeoMap_getImage(sType,o){
	var a=o.getElementsByTagName("IMG");
	for(var i=0; i<a.length; i++){
		if(a[i].getAttribute("tp")==sType)
			return a[i];
	}
	a=o.getElementsByTagName("A");
	for(var i=0; i<a.length; i++){
		if(a[i].getAttribute("tp")==sType)
			return a[i];
	}
	return null;
}
//** GridLayout.ie5 **

function sapUrMapi_GridLayout_registerCreate(sId) {
	  sapUrMapi_Create_AddItem(sId, "ur_GridLayout_init('"+sId+"')");
}
function ur_GridLayout_init(sId) {
	if(ur_system.browser_abbrev == "standards" && UCF_UserAgent.bIsIE()) {
		UCF_DomUtil.initHtmlTableCorrection(ur_get(sId));
	}
  
}

//** Group.ie5 **

function sapUrMapi_Group_registerCreate(sId) {
	  sapUrMapi_Create_AddItem(sId, "ur_Group_init('"+sId+"')");
}
function ur_Group_init(sId) {
	if(ur_system.browser_abbrev == "standards" && UCF_UserAgent.bIsIE()) {
		UCF_DomUtil.initHtmlTableCorrection(ur_get(sId));
	}
  
}

//** HorizontalContextualPanel.ie5 **

function ur_Hcnp_RegisterCreate(sId,iCount,iSel,iMenuIdx)
{
	if(!sId || iCount==0 || iSel<0) return;
	sapUrMapi_Create_AddItem(sId, "ur_Hcnp_create('" + sId + "','" + iCount + "','" + iSel + "')");
}
function ur_Hcnp_create(sId,Count,SelIndex)
{
	var oHcnp = ur_get(sId);
	if(SelIndex >0 )
	{
		var iPrevSel = parseInt(SelIndex) -1;
		ur_get(sId+"-itm-"+iPrevSel+"-b").style.display="none";
	}
}
function ur_Hcnp_setActiveItem(sId,iSel,iPrevSel,evt)
{
	
	var oTbl = ur_get(sId);	
	var iOldSel = oTbl.getAttribute("sidx");
	
	if(iSel == iOldSel) return;
	
	if(iOldSel !=0)
	{
		var iPrevSel = parseInt(iOldSel) -1;
		ur_get(sId+"-itm-"+iPrevSel+"-b").style.display="";
	}
	
	
	var curTabBeg = ur_get(sId+"-itm-"+iSel+"-a");
	var curTabEnd = ur_get(sId+"-itm-"+iSel+"-b");
	var curTabTxt = ur_get(sId+"-itm-"+iSel);
	var oldTabBeg = ur_get(sId+"-itm-"+iOldSel+"-a");
	var oldTabEnd = ur_get(sId+"-itm-"+iOldSel+"-b");
	var oldTabTxt = ur_get(sId+"-itm-"+iOldSel);
	if(iOldSel ==0 )
	{
		oldTabBeg.className = "urHcnpfirstAngOff urHcnpTopUndBdr";
		oldTabEnd.className = "urHcnpUnSelTabEnd urHcnpTopUndBdr";
		oldTabTxt.className = "urHcnpUnSelTabText urHcnpTopUndBdr";
	}
	else
	{
		oldTabBeg.className = "urHcnpUnSelTabStart urHcnpTopUndBdr";
		oldTabEnd.className = "urHcnpUnSelTabEnd urHcnpTopUndBdr"; 
		oldTabTxt.className = "urHcnpUnSelTabText urHcnpTopUndBdr";
		oldTabBeg.childNodes[0].className = "urHcnpBetwAng";
	}
	if(iSel == 0)
	{
		curTabBeg.className = "urHcnpfirstAngOn";
		curTabEnd.className = "urHcnpSelTabEnd";
		curTabTxt.className = "urHcnpSelTabText";
	}
	else
	{
		curTabBeg.className = "urHcnpSelTabStart";
		curTabEnd.className = "urHcnpSelTabEnd";
		curTabTxt.className = "urHcnpSelTabText";
		curTabBeg.childNodes[0].className = "urHcnpBetSelAng";
	}
	oTbl.setAttribute("sidx",iSel);
	if (ur_system.is508) {
		ur_setSt(oldTabTxt,ur_st.NOTSELECTED,true);
		ur_setSt(oldTabTxt,ur_st.SELECTED,false);
		ur_setSt(curTabTxt,ur_st.NOTSELECTED,false);
		ur_setSt(curTabTxt,ur_st.SELECTED,true);
	
		sapUrMapi_refocusElement(curTabTxt.id);
	}
	if(iSel !=0)
	{
		var iPrevSel = parseInt(iSel) -1;
		ur_get(sId+"-itm-"+iPrevSel+"-b").style.display="none";		
	}
	
	
	var oOldCont = ur_get(sId+"-cnt-"+iOldSel);
	var oNewCont = ur_get(sId+"-cnt-"+iSel);
	oOldCont.style.display= "none";
	oNewCont.style.display ="block";
}
function ur_HcnpMnu_Select(sId,tabIdx,mnuIdx,oEvt)
{
	var iMenuSel = parseInt(ur_get(sId+"-cnt-"+tabIdx).getAttribute('sidx'));
	var oNewSelMenuItm = ur_get(sId+"-cnt-"+tabIdx+"-mnu-"+mnuIdx);
	
	var oPrevSelMenuItm =  ur_get(sId+"-cnt-"+tabIdx+"-mnu-"+iMenuSel);
	
	if(mnuIdx == iMenuSel) return;
	
	if(iMenuSel == -1)
	{
		oNewSelMenuItm.className = "urHcnpMenuSel";
		ur_get(sId+"-cnt-"+tabIdx).setAttribute('sidx',mnuIdx);
	}
	else if(iMenuSel >= 0)
	{
		oNewSelMenuItm.className = "urHcnpMenuSel";
		oPrevSelMenuItm.className = "urHcnpMenuUnSel";
		ur_get(sId+"-cnt-"+tabIdx).setAttribute('sidx',mnuIdx);
		if (ur_system.is508){
			ur_setSt(oPrevSelMenuItm,ur_st.NOTSELECTED,true);
			ur_setSt(oPrevSelMenuItm,ur_st.SELECTED,false);
			ur_setSt(oNewSelMenuItm,ur_st.NOTSELECTED,false);
			ur_setSt(oNewSelMenuItm,ur_st.SELECTED,true);
		
			sapUrMapi_refocusElement(oNewSelMenuItm.id);
		}
	}	
		
}
function ur_Hcnp_keySelect(sId,oEvt){
	var o = ur_get(sId);
	var oItm = ur_EVT_src(oEvt);
	var sItmId=oItm.id;
	var sItm="-itm-";
	if(sItmId.indexOf("mnu")>-1){
		var tabIdx=sItmId.split("-")[2];
		sItm="-cnt-"+tabIdx+"-mnu-";
		o=ur_EVT_src(oEvt).parentNode;
	}
	if(ur_system.direction!="rtl"){
		oPrev=ur_getPrevItm(oItm.previousSibling,"idx");
		oNext = ur_getNxtItm(oItm.nextSibling,"idx");
	}else{
		oNext=ur_getPrevItm(oItm.previousSibling,"idx");
		oPrev = ur_getNxtItm(oItm.nextSibling,"idx");
	}
	if((oEvt.keyCode == 39 || oEvt.keyCode == 40) && oNext!=null) {
		 ur_focus_Itm(oNext,oItm);
		 ur_EVT_cancel(oEvt);
	}
	else if((oEvt.keyCode == 37 || oEvt.keyCode == 38) && oPrev!=null){
		ur_focus_Itm(oPrev,oItm);
		ur_EVT_cancel(oEvt);
	}
	else if(oEvt.keyCode==9){
		var iSel=o.getAttribute("sidx");
		var oSel = ur_get(sId+sItm+iSel);
		ur_focus_Itm(oSel,oItm);
	}
	else if(oEvt.keyCode==32 || oEvt.keyCode==13){
		oItm.click();
		 ur_EVT_cancelBubble(oEvt);
	}else
		sapUrMapi_skip(sId,oEvt);
}
//** Iframe.ie5 **

function sapUrMapi_Iframe_adaptSize(sId, oEvt) {
  var oIf = ur_get(sId);
  if (!oIf) return;
  var iWidth = oIf.getAttribute("width"),
      iHeight = oIf.getAttribute("height");
    
    try {
      	var oIfBody = oIf.contentWindow.document.body;
		
      	if (iWidth == "" || iWidth == null) {
			
					if (ur_system.browser_abbrev == "ie6") {
		        		oIf.width = oIfBody.scrollWidth + oIfBody.offsetWidth - oIfBody.clientWidth;
					} else {
						oIf.setAttribute("width", oIfBody.scrollWidth + 16);
					}
	  	}
	  
      	if (iHeight == "" || iHeight == null) {
		
					if (ur_system.browser_abbrev == "ie6") {
		        		oIf.height = oIfBody.scrollHeight + oIfBody.offsetHeight - oIfBody.clientHeight;
					} else {
						oIf.setAttribute("height", oIfBody.scrollHeight + 16);
					}
			
			}
		
    } catch (e) {}
}

//** Image.ie5 **

function sapUrMapi_Image_menuActivate(sImageId,e) {
	oImage = ur_get(sImageId);
	if (sapUrMapi_checkKey(e,"keydown",new Array("32","40"))) {
		if (oImage.onclick) {oImage.onclick();return false;} 
		if (oImage.oncontextmenu) {oImage.oncontextmenu();return false;} 
		if (oImage.onmouseover) {oImage.onmouseover();return false;} 
	}
  return false;
}
function sapUrMapi_Image_checkClick(sId, e) {
	if (e.type=="click") return true;
	return sapUrMapi_checkKey(e,"keydown",new Array("32"));
}
function sapUrMapi_Image_registerCreate(sId,MaxWidth,MaxHeight){
	if( MaxWidth =="" && MaxHeight =="") {
		return;
	}
	else {
		ur_Image_Create(sId,MaxWidth,MaxHeight);
	}
}
function ur_Image_Create(sId, TargetWidth, TargetHeight) {
	
	TargetWidth = parseInt(TargetWidth);
	TargetHeight = parseInt(TargetHeight);
	
	if(isNaN(TargetWidth) || TargetWidth < 0) TargetWidth = 0;
	if(isNaN(TargetHeight) || TargetHeight < 0) TargetHeight = 0;
	
	var oLoadedImage = ur_get(sId);
	
	if (oLoadedImage == null) return;
	
	if (TargetWidth <= 0 && TargetHeight <= 0){ 
		ur_Image_showImg(oLoadedImage);
		  return;
		}		
	
	if (oLoadedImage.tagName == "SPAN") oLoadedImage = oLoadedImage.firstChild;
	
    var ActWidth = oLoadedImage.offsetWidth,
  		ActHeight = oLoadedImage.offsetHeight,
		PropHeight = ur_Image_getProportionlaSize(TargetWidth, ActWidth, ActHeight);
	
	
	if (PropHeight > TargetHeight) {
	  	oLoadedImage.style.height = sapUrMapi_sAddUnit( TargetHeight , "px" );
		}
	
	else {
		oLoadedImage.style.width = sapUrMapi_sAddUnit( TargetWidth , "px" );
		}
	
	ur_Image_showImg(oLoadedImage);
		}
function ur_Image_getProportionlaSize(TargetSize, ActualSizeA, ActualSizeB ){
	return Math.floor( ActualSizeB * ( TargetSize / ActualSizeA ) );
    }
function ur_Image_showImg(img) {
	var sVisibility = img.getAttribute("visibility");
	
	if (img == null || sVisibility == "BLANK") return;
	
	img.style.visibility ="visible";
	img.parentNode.style.overflow = "";
	img.parentNode.style.display = "inline-block"; 
	
	
	if (ur_system.browser_abbrev.indexOf("ie") > -1) {
		img.parentNode.style.height = "auto";
		img.parentNode.style.width = "auto";
	}
	
}

//** InputField.nn6 **

var aMonthNames=null;
var aDayNames=null;
var aDayNameAbbrevs=null;
var aDayCount=null;
function sapUrMapi_InputField_setInputState(sId,sInputState) {
  var o=ur_get(sId);
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
	sapUrMapi_Label_setInputState(oLbl,sInputState);
  if (sInputState == 'ERROR') {
    if (ur_isSt(o,ur_st.INVALID)) return;
    ur_setSt(o,ur_st.WARNING,false);
    ur_setSt(o,ur_st.INVALID,true);
		o.className=o.className.replace(" urEdf2TxtWarn","");
		o.className+=" urEdf2TxtInv";
  } else if (sInputState == 'WARNING'){
    if (ur_isSt(o,ur_st.WARNING)) return;
    ur_setSt(o,ur_st.INVALID,false);
    ur_setSt(o,ur_st.WARNING,true);
		o.className=o.className.replace(" urEdf2TxtInv","");
		o.className+=" urEdf2TxtWarn";
  } else {
    ur_setSt(o,ur_st.INVALID,false);
    ur_setSt(o,ur_st.ERROR,false);
		o.className=o.className.replace(" urEdf2TxtInv","");
		o.className=o.className.replace(" urEdf2TxtWarn","");
  }
}
function sapUrMapi_InputField_setInvalid(sId,bSet,sTooltip) {
	var oIn=ur_get(sId);
	if (oIn.disabled || oIn.readonly || (ur_isSt(sId,ur_st.INVALID)&&bSet) || (!ur_isSt(sId,ur_st.INVALID)&&!bSet)) return;
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
	sapUrMapi_Label_setInvalid(oLbl,bSet);
	if(sTooltip!="") oIn.setAttribute("tt",sTooltip);
	ur_setSt(sId,ur_st.INVALID,bSet);
	if(bSet)
		oIn.className=oIn.className+" urEdf2TxtInv";
	else
    oIn.className=oIn.className.replace(" urEdf2TxtInv","");
}
function sapUrMapi_InputField_setDisabled(sId,bSet) {
	var oIn=ur_get(sId);
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
  var oBtn=ur_get(sId+"-btn");
  
	if (bSet && !ur_isSt(sId,ur_st.DISABLED)) {
		sapUrMapi_Label_setDisabled(oLbl);
	  oIn.readOnly=true;
		oIn.className+=" urEdf2TxtDsbl";
		if(oBtn!=null) 
			oBtn.className=oBtn.className+"Dsbl";
		ur_setSt(sId,ur_st.DISABLED,bSet);	
	} 
	else if(!bSet && ur_isSt(sId,ur_st.DISABLED)){
		sapUrMapi_Label_setEnabled(oLbl);
	  oIn.readOnly=false;
    oIn.className=oIn.className.replace(" urEdf2TxtDsbl","");
		if(oBtn!=null)
			oBtn.className=oBtn.className.substring(0,oBtn.className.length-4);
		ur_setSt(sId,ur_st.DISABLED,bSet);
	}
}
function sapUrMapi_InputField_setReadonly(sId,bSet) {
	var oIn=ur_get(sId);
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
  var oBtn=ur_get(sId+"-btn");
  
	if (bSet && !ur_isSt(sId,ur_st.READONLY)) {
		sapUrMapi_Label_setDisabled(oLbl);
	  oIn.readOnly=true;
		oIn.className+=" urEdf2TxtRo";
		ur_setSt(sId,ur_st.READONLY,bSet);
	} 
	else if(!bSet && ur_isSt(sId,ur_st.READONLY)){
		sapUrMapi_Label_setEnabled(oLbl);
	  oIn.readOnly=false;
		oIn.className=oIn.className.replace(" urEdf2TxtRo","");
		ur_setSt(sId,ur_st.READONLY,bSet);
	}
}
function sapUrMapi_InputField_keydown(sId,e){
	var o=ur_get(sId);
	var iKeyCode=e.keyCode;
	
	if(e.keyCode==115){
	  if(ur_get(sId+"-btn"))
			ur_get(sId+"-btn").onclick();
		return ur_EVT_cancel(e);
	}
	
	if(e.which == 27){
		sapUrMapi_DataTip_hide(sId);
		return ur_EVT_cancel(e);
	}
	
	
	
	var sDefaultValue=o.getAttribute("defval");
	if(sDefaultValue && o.value == sDefaultValue){
		var sNavigationKeys="|"+ur_KEYS.UP+"|"+ur_KEYS.DOWN+"|"+ur_KEYS.LEFT+"|"+ur_KEYS.RIGHT+"|"+ur_KEYS.POS1+"|"+ur_KEYS.END+"|";
		if(sNavigationKeys.indexOf("|"+iKeyCode+"|") >=0){
			return ur_EVT_cancel(e);		}				
	}		
}
function sapUrMapi_InputField_changeLabel(sId,sNewLabel){
}
function sapUrMapi_InputField_focus(sId,oEvt) {
	var o=ur_get(sId);
	
  sapUrMapi_focusElement(sId);
  
	
  sapUrMapi_DataTip_show(sId,"focus");
  
  if (o.getAttribute("st").indexOf("d")>-1) o.disabled=true;
  
  
  ur_setEditCellColor(o);
  
  sapUrMapi_InputField_showButton(o,oEvt);
  
	
	var sDefaultValue=o.getAttribute("defval");
	if(sDefaultValue && o.value == sDefaultValue){
		o.select();
		o.onclick=ur_InputField_click;
	}  
	
	
	o.setAttribute("oldvalue",o.value);
	
}
function ur_InputField_click(oEvt) {
	var o=ur_evtSrc(oEvt);
	
	
	var sDefaultValue=o.getAttribute("defval");
	if(sDefaultValue && o.value == sDefaultValue){
		o.select();
	}
}
function sapUrMapi_InputField_focusWithFormat(sId,sFormat,oEvt) {
	var o=ur_get(sId);
	sapUrMapi_InputField_focus(sId,oEvt);
	if (ur_getAttD(o,"tp","")=="DATE") {
	   o.setAttribute("df",sFormat);
	}
}
function sapUrMapi_InputField_triggerOnChange(sId,sOldValue,sNewValue) {
  var oInp = ur_get(sId);
  if (sOldValue!=sNewValue) {
    if (oInp.onchange!=null) return oInp.onchange();
  }
}
function sapUrMapi_InputField_setValue(sId,sValue) {
  ur_get(sId).value=sValue;
}
function sapUrMapi_InputField_getValue(sId) {
  return ur_get(sId).value;
}
var oDatePicker;
var dActDate;
function sapUrMapi_Date_getArray(sFormat,sDate) {
  var q;
  if ( sFormat == 1 || sFormat == 4 )
    q=sDate.split(".");
  if ( sFormat == 2 || sFormat == 5 || sFormat == 7)
    q=sDate.split("/" );
  if ( sFormat == 3 || sFormat == 6 || sFormat == 8)
    q=sDate.split("-");
  for (var i=0;i<q.length;i++) {
  	var str=q[i];
		if(str.length==2 && str.charAt(0)=='0'){
		  str=str.charAt(1);
		}
		q[i]=parseInt(str);
  }
  return q;
}
function sapUrMapi_Date_normalize(sFormat,arrDate) {
  
	var Day=1;
	var Month=0;
	var Year=0;
	if(sFormat==1 || sFormat==7 || sFormat==8){
		Day=arrDate[0];
		Month=arrDate[1];
		Year=arrDate[2];
	}
	else if(sFormat==2 || sFormat==3){
		Day=arrDate[1];
		Month=arrDate[0];
		Year=arrDate[2];
        }
	else if(sFormat==4 || sFormat==5 || sFormat== 6){
		Day=arrDate[2];
		Month=arrDate[1];
		Year=arrDate[0];
	}
	var arrRet=new Array(3);
	arrRet[0]=Year;
	arrRet[1]=Month-1;
	arrRet[2]=Day;
	return arrRet;
}
function sapUrMapi_Date_make(sFormat,vYear,vMonth,vDay)
{
  var dateString;
  if ( sFormat == 1 )
    dateString=sapUrMapi_Date_setZero(parseInt(vDay)) + "." + sapUrMapi_Date_setZero(parseInt(vMonth)) + "." + vYear;
  if ( sFormat == 2 )
    dateString=sapUrMapi_Date_setZero(parseInt(vMonth)) + "/" + sapUrMapi_Date_setZero(parseInt(vDay)) + "/" + vYear;
  if ( sFormat == 3 )
    dateString=sapUrMapi_Date_setZero(parseInt(vMonth)) + "-" + sapUrMapi_Date_setZero(parseInt(vDay)) + "-" + vYear;
  if ( sFormat == 4 )
    dateString="" + vYear + "." + sapUrMapi_Date_setZero(parseInt(vMonth)) + "." + sapUrMapi_Date_setZero(parseInt(vDay));
  if ( sFormat == 5 )
    dateString="" + vYear + "/" + sapUrMapi_Date_setZero(parseInt(vMonth)) + "/" + sapUrMapi_Date_setZero(parseInt(vDay));
  if ( sFormat == 6 )
    dateString="" + vYear + "-" + sapUrMapi_Date_setZero(parseInt(vMonth)) + "-" + sapUrMapi_Date_setZero(parseInt(vDay));
  if ( sFormat == 7 )
    dateString=sapUrMapi_Date_setZero(parseInt(vDay)) + "/" + sapUrMapi_Date_setZero(parseInt(vMonth)) + "/" + vYear;
  if ( sFormat == 8 )
    dateString=sapUrMapi_Date_setZero(parseInt(vDay)) + "-" + sapUrMapi_Date_setZero(parseInt(vMonth)) + "-" + vYear;
  return dateString;
}
function sapUrMapi_InputField_showActualDatePicker(sId, oEvt) {
	  var dt=sapUrMapi_DateField_getDate(sId);
    sapUrMapi_InputField_showDatePicker(sId,dt.year,dt.month-1,dt.day,ur_system.firstdayofweek, oEvt);
}
function ur_DatePicker_keydown(oEvt) {
  if (oEvt.keyCode==27 || oEvt.keyCode==115) sapUrMapi_hideDatePicker();
}
function sapUrMapi_InputField_showDatePicker(sId,iYear,iMonth,iDay,iFirstDayOfWeek, oEvt) {
	oInput=ur_get(sId);
	if (ur_getAttD(oInput,"st","").indexOf("d")>-1) return;
	ur_focus(oInput);
  if (typeof(iFirstDayOfWeek)=="undefined") {
  	iFirstDayOfWeek=ur_system.firstdayofweek;
  }
  if (isNaN(iYear) || isNaN(iMonth) || isNaN(iDay)) {
	  var dt=sapUrMapi_DateField_getDate(sId);
	  iYear=dt.year;
	  iMonth=dt.month;
	  iDay=dt.day;
	  if (isNaN(iYear) || isNaN(iMonth) || isNaN(iDay)) {
			var dt=new Date();
			iYear  = dt.getFullYear();
			iMonth = dt.getMonth();
			iDay   = dt.getDate();
		} 
  }
	if (oInput.getAttribute("dsbl")=="true") return;
	var arrUrls;
	arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
  if (oDatePicker) {
    var oCal = sapUrMapi_DatePicker_make(sId,iYear,iMonth,iDay,iFirstDayOfWeek);
  	try {
  	  oDatePicker.frame.window.document.getElementsByTagName("BODY")[0].innerHTML=oCal.innerHTML;
  	} catch(ex) {}
  } else {
    dActDate  = new Date(iYear,iMonth,iDay);
    var oCal = sapUrMapi_DatePicker_make(sId,iYear,iMonth,iDay,iFirstDayOfWeek);
    oDatePicker = new sapPopup(window,arrUrls,oCal,ur_get(sId+"-btn"),oEvt,0);
		oDatePicker.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
		
		if (ur_system.direction=="rtl") {
		  oDatePicker.position.right=oDatePicker.position.right-1;
		} else {
		  oDatePicker.position.left=oDatePicker.position.left-1;
		}
		oDatePicker.inputId=sId;
		oDatePicker.position.top=oDatePicker.position.top-1;
  	oDatePicker.show();
  	oDatePicker.frame.window.focus();
  	oDatePicker.frame.window.onkeydown=ur_DatePicker_keydown;  	window.onfocus = sapUrMapi_hideDatePicker;
	
	
  }
}
function sapUrMapi_hideDatePicker() {
	if (oDatePicker) {
		oDatePicker.hide();
		oDatePicker.onblur=null;
    if (oDatePicker.inputId) document.getElementById(oDatePicker.inputId).focus();		
    oDatePicker=null;
		oPopup=null;
	}
}
function sapUrMapi_DatePicker_select(sId,e) {
  var o = e.target;
  if (e.target.id =="prev" || e.target.id=="next" || e.target.id=="nextyear" || e.target.id=="prevyear") return;
  var oInput=ur_get(sId);
  if(ur_isSt(sId,ur_st.READONLY))
	  return;
  while (o.tagName!="TD") {
  	o = o.parentNode;
  	if (o==null) return;
  }
	sDay = o.getAttribute("id");
	if (sDay==null || sDay=="") return;
  if (sDay) {
    var aDate = sDay.split("-");
    var arrValue=new Array();
    arrValue[0]=parseInt(aDate[2]);
    arrValue[1]=parseInt(aDate[1]);
    arrValue[2]=parseInt(aDate[0]);
 	  sapUrMapi_DateField_setDate(sId,arrValue[0],arrValue[1],arrValue[2]);
		sapUrMapi_hideDatePicker();
		ur_focus(oInput);
  }
}
function sapUrMapi_Date_setZero(iInt) {
	return iInt<10?"0"+iInt:iInt;
}
function sapUrMapi_DatePicker_make(sId,iYear,iMonth,iDay,iFirstDayOfWeek) {
	if (iYear < 0 ) {
		iYear = 0;
		iMonth = 0;
	}
  var arrTmp = ur_txt[ur_language];
  var hasValue = document.getElementById(sId).value==ur_InputField_getFormattedDateString(sId,iDay,iMonth+1,iYear);
  if (aMonthNames==null) aMonthNames = new Array (arrTmp["SAPUR_JANUARY"],arrTmp["SAPUR_FEBRUARY"],arrTmp["SAPUR_MARCH"],arrTmp["SAPUR_APRIL"],arrTmp["SAPUR_MAY"],arrTmp["SAPUR_JUNE"],arrTmp["SAPUR_JULY"],arrTmp["SAPUR_AUGUST"],arrTmp["SAPUR_SEPTEMBER"],arrTmp["SAPUR_OCTOBER"],arrTmp["SAPUR_NOVEMBER"],arrTmp["SAPUR_DECEMBER"]);
  if (aDayNameAbbrevs==null)   aDayNameAbbrevs   = new Array (arrTmp["SAPUR_SUNDAY_ABBREV"],arrTmp["SAPUR_MONDAY_ABBREV"],arrTmp["SAPUR_TUESDAY_ABBREV"],arrTmp["SAPUR_WEDNESDAY_ABBREV"],arrTmp["SAPUR_THURSDAY_ABBREV"],arrTmp["SAPUR_FRIDAY_ABBREV"],arrTmp["SAPUR_SATURDAY_ABBREV"]);
  if (aDayCount==null)  aDayCount = new Array (31,28,31,30,31,30,31,31,30,31,30,31);
  sapUrMapi_Date_setDayCount(iMonth,iYear);
  if (typeof(iFirstDayOfWeek)=="undefined") {
  	iFirstDayOfWeek=ur_system.firstdayofweek;
  }
  var oCal = ur_get("ur-date-picker");
  if (!oCal) {
	  var oBody = document.getElementsByTagName("BODY")[0];
	  var oCal = document.createElement("SPAN");
	  oCal.id="ur-date-picker";
	  oCal.style.position="absolute";
	  if (ur_system.direction=="rtl") {
	    oCal.style.right="0px";
	  } else {
	    oCal.style.left="0px";
	  }
	  oCal.style.top="-1999px";
	  oBody.appendChild(oCal);
  }
  var o=ur_get(sId);
  var bRO=o.readOnly;
  var sCalHtml = "<div onclick=\"me.sapUrMapi_DatePicker_select('"+sId+"',event);return false;\"><table class='urCalPicWhl' cellpaddding='0' cellspacing='0' border='0' viscnt='0'><tbody><tr>";
  var pm = iMonth-1;
  var nm = iMonth+1;
  var dy = iDay;
  var py = iYear;
  var ny = iYear;
  if (pm==-1) {pm = 11;py--;}
  if (nm==12) {nm = 0;ny++;}
  if (dy>28) {dy=25}
    if (ur_system.direction=="rtl") {
		if(iYear==0) {
		  sCalHtml    += "<td class=\"urCalArrPrevYearDsbl\">&nbsp;</td>";
		} else {
		sCalHtml    += "<td id=\"prevyear\" class=\"urCalArrPrevYear\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+(iYear-1)+","+iMonth+","+dy+","+iFirstDayOfWeek+",event,true);\">&nbsp;</td>";
		}
		if(iYear==0 && iMonth==0) {
		  sCalHtml    += "<td class=\"urCalArrPrevDsbl\">&nbsp;</td>";
		} else {
		sCalHtml    += "<td id=\"prev\" class=\"urCalArrPrev\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+py+","+pm+","+dy+","+iFirstDayOfWeek+",event,true);\">&nbsp;</td>";
		}
		sCalHtml    += "<td colspan=4 class=urCalHdr nowrap align=center>"+aMonthNames[iMonth]+" "+iYear+"</td>";
		if(iYear==9999) {
		  if (iMonth==11) 
  			sCalHtml  += "<td id=\"next\" class=\"urCalArrNextDsbl\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+9999+","+11+","+31+","+iFirstDayOfWeek+",event,true);\">";
			else
				sCalHtml  += "<td id=\"next\" class=\"urCalArrNext\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+ny+","+nm+","+dy+","+iFirstDayOfWeek+",event,true);\">";
			sCalHtml  += "<td id=\"nextyear\" class=\"urCalArrNextYearDsbl\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+9999+","+11+","+31+","+iFirstDayOfWeek+",event,true);\">";
		} else {
			sCalHtml  += "<td id=\"next\" class=\"urCalArrNext\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+ny+","+nm+","+dy+","+iFirstDayOfWeek+",event,true);\">";
			sCalHtml  += "<td id=\"nextyear\" class=\"urCalArrNextYear\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+(iYear+1)+","+iMonth+","+iDay+","+iFirstDayOfWeek+",event,true);\">";
		}
	} else {
		if(iYear==0) {
		  sCalHtml    += "<td class=\"urCalArrPrevYearDsbl\">&nbsp;</td>";
		} else {
		sCalHtml    += "<td id=\"prevyear\" class=\"urCalArrPrevYear\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+(iYear-1)+","+iMonth+","+dy+","+iFirstDayOfWeek+",event,true);\">&nbsp;</td>";
		}
		if(iYear==0 && iMonth==0) {
		  sCalHtml    += "<td class=\"urCalArrPrevDsbl\">&nbsp;</td>";
		} else {
		sCalHtml    += "<td id=\"prev\" class=\"urCalArrPrev\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+py+","+pm+","+dy+","+iFirstDayOfWeek+",event,true);\">&nbsp;</td>";
		}
		sCalHtml    += "<td colspan=4 class=urCalHdr nowrap align=center>"+aMonthNames[iMonth]+" "+iYear+"</td>";
		if(iYear==9999) {
		  if (iMonth==11) 
  			sCalHtml  += "<td id=\"next\" class=\"urCalArrNextDsbl\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+9999+","+11+","+31+","+iFirstDayOfWeek+",event,true);\">";
			else
				sCalHtml  += "<td id=\"next\" class=\"urCalArrNext\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+ny+","+nm+","+dy+","+iFirstDayOfWeek+",event,true);\">";
			sCalHtml  += "<td id=\"nextyear\" class=\"urCalArrNextYearDsbl\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+9999+","+11+","+31+","+iFirstDayOfWeek+",event,true);\">";
		} else {
			sCalHtml  += "<td id=\"next\" class=\"urCalArrNext\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+ny+","+nm+","+dy+","+iFirstDayOfWeek+",event,true);\">";
			sCalHtml  += "<td id=\"nextyear\" class=\"urCalArrNextYear\" onclick=\"me.sapUrMapi_InputField_showDatePicker('"+sId+"',"+(iYear+1)+","+iMonth+","+iDay+","+iFirstDayOfWeek+",event,true);\">";
		}
	}
	sCalHtml    += "&nbsp;";
  sCalHtml    += "</td>";
  sCalHtml    += "</tr>";
  sCalHtml    += "<tr>";
  iLastDayOfWeek = iFirstDayOfWeek-1;
  if (iLastDayOfWeek==-1) iLastDayOfWeek=6;
  
  if (ur_system.direction=="rtl") {
    sCalHtml    += "<td class=urCalName style=\"border-left:0px none\">&nbsp;</td>";
  } else {
    sCalHtml    += "<td class=urCalName style=\"border-right:0px none\">&nbsp;</td>";
  }
  for (var i=iFirstDayOfWeek;i<aDayNameAbbrevs.length;i++) {
    if (aDayNameAbbrevs.length>3) {
      aDayNameAbbrevs[i]=aDayNameAbbrevs[i].substring(0,3);
    }
    sCalHtml    += "<td class=urCalName>"+aDayNameAbbrevs[i]+"</td>";
  }
  for (var i=0;i<iFirstDayOfWeek;i++) {
    sCalHtml    += "<td class=urCalName>"+aDayNameAbbrevs[i]+"</td>";
  }
  var dDate  = new Date(iYear,iMonth,1,12);
  dDate.setFullYear(iYear);
  var dStart=dDate;
  dStart = new Date(dStart.getTime()-((dStart.getDay()-iFirstDayOfWeek)*1000*60*60*24));
  if (dStart.getDate() >= 1 && dStart.getDate() <= 7) dStart = new Date(dStart.getTime()-(7*1000*60*60*24));
  var iFirstWeekCode=30;                                                   
  
  
  var iMinimalDaysInFirstWeek=ur_system.minimalDaysInFirstWeek;
  if (!iMinimalDaysInFirstWeek) iMinimalDaysInFirstWeek=4;
		
	for (var i=0;i<6;i++) {
   
    var oDateObj=new Date();
    var weekNum=ur_getWeek(dStart,iMinimalDaysInFirstWeek);
		
    sCalHtml    += "<tr class=urCalRow";
    if (!bRO) sCalHtml    += " style=\"cursor:pointer;padding-bottom:1px;\"";
		sCalHtml    += ">";
		
    sCalHtml    +=                                                           
		"<th class=urCalName style='border-style:none" +                         
		((i<5)?" none solid none":"")+" !important;'>" +                         
		weekNum+"</th>";                                       
    for (var n=0;n<7;n++) {
				var sClass="";
            var sId="id="+dStart.getFullYear()+"-"+(dStart.getMonth()+1)+"-"+dStart.getDate();
            if (dStart.getFullYear()<0 || dStart.getFullYear()>9999) {
            	sId="";
            } 
	  		if (dStart.getMonth()!=iMonth) {
	  			sClass="urCalIna";
	  		} else {
	  			sClass="";
	  		}
	  		if ((dStart.getYear()==dActDate.getYear()) && (dStart.getMonth()==dActDate.getMonth()) && (dStart.getDate()==dActDate.getDate() && hasValue)) {
	  			sClass+=" urMnuRowOn";
	  		}
	  		sCalHtml+="<td";
				if (n==0) {
	  		  sCalHtml+=" style=\"border-left-style:solid\"";
	  		}
	  		if ((dStart.getYear()==new Date().getYear()) && (dStart.getMonth()==new Date().getMonth()) && (dStart.getDate()==new Date().getDate())) {
	        var sCursor = "cursor:pointer";
	        if (dStart.getFullYear()<0 || dStart.getFullYear()>9999) {
	        	sCursor = "cursor:default!important"
	        }
	        if (sClass!="") {
	          sCalHtml+=" class="+sClass+" "+sId+"><div style=\"margin:-1;"+sCursor+";background-color:transparent\" class=urCalTod>"+dStart.getDate()+"</div></td>";
	        } else {
	          sCalHtml+=" "+sId+"><div style=\"margin:-1;"+sCursor+";background-color:transparent;padding-bottom:1px;\" class=urCalTod>"+dStart.getDate()+"</div></td>";
	        }
	  		} else {
	  		  if (sClass!="") {
	          	sCalHtml+=" "+sId+" class="+sClass+">"+dStart.getDate()+"</td>";
	        } else {
	          sCalHtml+=" "+sId+">"+dStart.getDate()+"</td>";
	        }
	  		}
	  		var oldStart = dStart;
	  		dStart = new Date(dStart.getTime()+(1000*60*60*24));
	  		if (dStart.getDate()==oldStart.getDate()) {
	  		  
	  		  dStart = new Date(dStart.getTime()+(1000*60*60*1));
	  		}
	  		if (dStart.getHours()==1) {
	  		  dStart = new Date(dStart.getTime()-(1000*60*60*1));
	  		}
  	}
    sCalHtml    += "</tr>";
  }
  sCalHtml    += "</tr></tbody></table></div>";
  oCal.innerHTML=sCalHtml;
  return oCal;
}
function sapUrMapi_Date_setDayCount(iMonth, iYear) {
	if ((iMonth == 1) && ((iYear % 400 == 0)) || ((iYear % 4 == 0) && (iYear % 100 != 0))) aDayCount[1] = 29;
}
var urSizeDiv = null;
var urInpSizes = new Array();
var urInpWidths = new Array();
function sapUrMapi_InputField_KeyUp(id, event) {
	return false;
}
function sapUrMapi_InputField_Blur(id, event) {
	var o=ur_get(id);
	sapUrMapi_DataTip_hide(id);
	if (ur_getAttD(o,"tp","")=="DATE") {
	  sapUrMapi_DateField_checkDate(id);
	}
	ur_removeEditCellColor();
	sapUrMapi_InputField_hideButton(o,event);
	
	var sOldValue=o.getAttribute("oldvalue");
	if(sOldValue!=o.value){
		o.onchange();
	}	
}
function sapUrMapi_InputField_change(sId,oEvt) {
	var o=ur_get(sId);
	
	o.setAttribute("oldvalue",o.value);
}
function sapUrMapi_InputFieldHelpClick(sId,oEvt) {
	
	if (ur_getAttD(ur_get(sId),"st","").indexOf("d")>-1) return;
  sapUrMapi_InputField_showActualDatePicker(sId,oEvt);
}
function sapUrMapi_InputField_showButton(o,oEvt){
	var oBtn=ur_get(o.id+"-btn");
	
	if(oBtn==null || oBtn.offsetTop>=0) return;
	
	
	var iTop=o.offsetTop;
	var oParent=o.offsetParent;
	while(oParent!=document.body){
		if(oParent.style.position=="absolute") 
			break;	
		iTop+=oParent.offsetTop;
		iTop-=oParent.scrollTop;
		oParent=oParent.offsetParent;
	}
	
	oParent=o.parentNode;
	while(oParent!=document.body){
		iTop-=oParent.scrollTop;
		oParent=oParent.parentNode;
	}		
	oBtn.style.top=sapUrMapi_sAddUnit( iTop , "px" );
	oBtn.style.zIndex=101; 
}
function sapUrMapi_InputField_hideButton(o,oEvt){
	var oBtn=ur_get(o.id+"-btn");
	if(oBtn==null || oBtn.style.position!="absolute")return;
	ur_callDelayed("ur_get('"+oBtn.id+"').style.top='-900px'",150);
}
function sapUrMapi_DateField_checkDate(sId) {
  
  
  
}
function sapUrMapi_DateField_getDate(sId) {
  var dToday=new Date();
  var sValue=sapUrMapi_InputField_getValue(sId);
  if (sValue=="") return {day:iDay,month:iMonth,year:iYear};
  var sPattern=ur_DateField_getDatePattern(sId);
  var sLongPattern=sPattern;
  var dgtsYr=0;
  
  var sFindNumber="0123456789";
  var sFindPattern="dMy";
  var iDay,iMonth,iYear;
  var iErrors=0;
	while(sFindNumber.indexOf(sValue.charAt(0))==-1) {
		sValue=sValue.substring(1);
		iErrors++;
	}
	while(sFindNumber.indexOf(sValue.charAt(sValue.length-1))==-1) {
	  sValue=sValue.substring(0,sValue.length-1);
		iErrors++;
	}
  
  var sRegPattern="([^0-9])";
  var reg=new RegExp(sRegPattern,"ig");
  var arr=reg.exec(sValue);
  var xValue=sValue;
	var sCh=RegExp.$1;
	var sCh1;
	var twodelimiters=false;
	
	 try{
	xValue=sValue.split(sCh);
  if (xValue.length != 3)
  {
	var reg1=new RegExp(sRegPattern,"ig");
	var stempval=xValue[1];
	if(stempval!=null)
	while(reg1.exec(stempval))
	{
		var arr1= reg1.exec(stempval);
		sCh1=RegExp.$1;
		xValue=stempval.split(sCh1);
		stempval=xValue[1];
	}
	}
 
	
	if(sCh1!=null) {
	twodelimiters=true;
	if (sValue.indexOf(sCh) > sValue.indexOf(sCh1))
	{
		var tmp=sCh1;
		sCh1=sCh;
		sCh=tmp;
		
	}
	}
	}catch(Exp){}
    reg=new RegExp(sRegPattern,"ig");
    arr=reg.exec(sValue);
    
    if (reg.lastIndex>0) {
    if (sValue.indexOf(sCh)==4 || sValue.indexOf(sCh)==3) {
		  xValue=sPattern.replace("yyyy",sValue.substring(0,sValue.indexOf(sCh)));
				  if(twodelimiters)
			{
			  xValue=xValue.replace("MM",sValue.substring(sValue.indexOf(sCh)+1,sValue.lastIndexOf(sCh1)));
			  xValue=xValue.replace("M",sValue.substring(sValue.indexOf(sCh)+1,sValue.lastIndexOf(sCh1)));
			  xValue=xValue.replace("dd",sValue.substring(sValue.lastIndexOf(sCh1)+1));
			  xValue=xValue.replace("d",sValue.substring(sValue.lastIndexOf(sCh1)+1));
			}
	      else
			{
		  xValue=xValue.replace("MM",sValue.substring(sValue.indexOf(sCh)+1,sValue.lastIndexOf(sCh)));
		  xValue=xValue.replace("M",sValue.substring(sValue.indexOf(sCh)+1,sValue.lastIndexOf(sCh)));
		  xValue=xValue.replace("dd",sValue.substring(sValue.lastIndexOf(sCh)+1));
		  xValue=xValue.replace("d",sValue.substring(sValue.lastIndexOf(sCh)+1));
			}
		  sValue=xValue;
    }
  } 
	while(sFindPattern.indexOf(sPattern.charAt(sPattern.length-1))==-1) sPattern=sPattern.substring(0,sPattern.length-1);
  while (sPattern.indexOf(" ")>-1) sPattern=sPattern.replace(" ","");
  while (sValue.indexOf(" ")>-1) {
		
    sValue=sValue.replace(" ","");
  }
  if (iErrors>3) return {day:iDay,month:iMonth,year:iYear};
  
  
  var reg=ur_DateField_getRegExpTest(sValue,sPattern);
  if (reg.lastIndex>0) {
    
    
    var iDayPos=sPattern.indexOf("d");
    var iMonthPos=sPattern.indexOf("M");
    var iYearPos=sPattern.indexOf("y");
    var sDay,sMonth,sYear="";
    if(iDayPos != -1)
    {    
		if (iDayPos<iMonthPos && iDayPos<iYearPos) sDay=RegExp.$1;
    if (iDayPos>iMonthPos && iDayPos<iYearPos) sDay=RegExp.$2;
    if (iDayPos<iMonthPos && iDayPos>iYearPos) sDay=RegExp.$2;
    if (iDayPos>iMonthPos && iDayPos>iYearPos) sDay=RegExp.$3;
    if (iMonthPos==-1)
		{
		if( iDayPos<iYearPos) sDay=RegExp.$1;
		else
		if(iDayPos>iYearPos) sDay=RegExp.$2;
		}
	if (iYearPos==-1)
		{
		if( iDayPos<iMonthPos) sDay=RegExp.$1;
		else
		if(iDayPos>iMonthPos) sDay=RegExp.$2;
		}
    if(iMonthPos==-1 && iYearPos==-1)
		sDay=RegExp.$1;
		
		while (sDay.indexOf("0")==0 && sDay.length>1) sDay=sDay.substring(1);
		iDay=parseInt(sDay);
		if (iDay==0) iDay=1;
	}
	else
	{iDay=-1;}
	if (iMonthPos != -1	)
	{
    if (iMonthPos<iDayPos && iMonthPos<iYearPos) sMonth=RegExp.$1;
    if (iMonthPos>iDayPos && iMonthPos<iYearPos) sMonth=RegExp.$2;
    if (iMonthPos<iDayPos && iMonthPos>iYearPos) sMonth=RegExp.$2;
    if (iMonthPos>iDayPos && iMonthPos>iYearPos) sMonth=RegExp.$3;
    
    if (iDayPos==-1)
		{
		if( iMonthPos<iYearPos) sMonth=RegExp.$1;
		else
		if(iMonthPos>iYearPos) sMonth=RegExp.$2;
		}
	if (iYearPos==-1)
		{
		if( iMonthPos<iDayPos) sMonth=RegExp.$2;
		else
		if(iMonthPos>iDayPos) sMonth=RegExp.$1;
		}
	if(iDayPos==-1 && iYearPos==-1)
		sMonth=RegExp.$1;
		
   
    while (sMonth.indexOf("0")==0 && sMonth.length>1) sMonth=sMonth.substring(1);
		iMonth=parseInt(sMonth);
	}
	else
		iMonth=-1;
	if(iYearPos != -1)
	{
    if (iYearPos<iMonthPos && iYearPos<iDayPos) sYear=RegExp.$1;
    if (iYearPos>iMonthPos && iYearPos<iDayPos) sYear=RegExp.$2;
    if (iYearPos<iMonthPos && iYearPos>iDayPos) sYear=RegExp.$2;
    if (iYearPos>iMonthPos && iYearPos>iDayPos) sYear=RegExp.$3;
    
    if (iDayPos==-1)
		{
		if(iMonthPos<iYearPos) sYear=RegExp.$2;
		else
		if(iMonthPos>iYearPos) sYear=RegExp.$1;
		}
	if (iMonthPos==-1)
		{
		if(iYearPos<iDayPos) sYear=RegExp.$1;
		else
		if(iYearPos>iDayPos) sYear=RegExp.$2;
		}
	if(iDayPos==-1 && iMonthPos==-1)
		sYear=RegExp.$1;    
	dgtsYr=sYear.length;
    while (sYear.indexOf("0")==0 && sYear.length>1) sYear=sYear.substring(1);
		iYear=parseInt(sYear);
	}
	else
	iYear =-1;
		var arrMonth=new Array(0,31,29,31,30,31,30,31,31,30,31,30,31);
  	if (isNaN(iYear) && isNaN(iMonth) && isNaN(iDay)) return {day:iDay,month:iMonth,year:iYear};
		if (isNaN(iYear)) iYear=dToday.getFullYear();
		if (isNaN(iMonth)) iMonth=dToday.getMonth()+1;
		if (isNaN(iDay) && iMonth==dToday.getMonth()+1) iDay=dToday.getDate();
		if (isNaN(iDay) && iMonth!=dToday.getMonth()+1) iDay=1;
		if (isNaN(iYear) || isNaN(iMonth) || isNaN(iDay)) return {day:iDay,month:iMonth,year:iYear};
		if (iMonth>12) iMonth=12;
		if (iMonth<1) iMonth=1;
		if (iDay>arrMonth[iMonth]) iDay=arrMonth[iMonth];
		if ( dgtsYr != 4 && dgtsYr !=0)
		{
		if (iYear<=20) iYear+=	2000;
		else if (iYear>20 && iYear<=99) iYear+=1900;
		}
		if (iMonth==2 && iDay==29 && (!ur_DateField_isLeapYear(iYear))) iDay=28;
    return {day:iDay,month:iMonth,year:iYear};
  } else {
  	
    return {day:iDay,month:iMonth,year:iYear};
  }
  oEvt.returnValue=false;
  
}
function ur_DateField_getRegExpTest(sValue,sPattern) {
  var sPatternNew="";
  var sEscapeChars="()*$[]\/^{}|. -";
  var sFindNumberPattern="dMy";
  var bFoundNumber=false;
  for (var j=0;j<sPattern.length;j++) {
    if (!bFoundNumber && sFindNumberPattern.indexOf(sPattern.charAt(j))>-1) bFoundNumber=true;
    if (bFoundNumber) {
			if (sEscapeChars.indexOf(sPattern.charAt(j))>-1) sPatternNew=sPatternNew+"[^0-9]{0,1}";
			else sPatternNew+=sPattern.charAt(j);
		}
  }
  sRegPattern=sPatternNew.replace("dd","([0-9]{1,2})");
  sRegPattern=sRegPattern.replace("MM","([0-9]{1,2})");
  sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
  sRegPattern=sRegPattern.replace("M","([0-9]{1,2})");
  sRegPattern=sRegPattern.replace("yyyy","([0-9]{1,4})");
  sRegPattern=sRegPattern.replace("yy","([0-9]{1,4})");
  var reg=new RegExp(sRegPattern,"ig");
  var arr=reg.exec(sValue);
	if (reg.lastIndex==0) {
		sRegPattern=sPatternNew.replace("dd","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("MM","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("M","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("yyyy","([0-9]{1,4})");
		sRegPattern=sRegPattern.replace("yy","([0-9]{1,4})");
		var reg=new RegExp(sRegPattern,"ig");
		var arr=reg.exec(sValue);
  }
  if (reg.lastIndex==0 && sValue.length>2) {
		sRegPattern=sPatternNew.replace("dd","([0-9]{2,2})");
		sRegPattern=sRegPattern.replace("MM","([0-9]{2,2})");
		sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("M","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("yyyy","");
		sRegPattern=sRegPattern.replace("yy","");
		if (sRegPattern.indexOf("\\(")==-1 && sRegPattern.indexOf("\\)")==-1) {
		  sRegPattern=sRegPattern.substring(sRegPattern.indexOf("("),sRegPattern.lastIndexOf(")")+1);
		}
		var reg=new RegExp(sRegPattern,"ig");
	  var arr=reg.exec(sValue);
	}
  if (reg.lastIndex==0 && sValue.length>2) {
		sRegPattern=sPatternNew.replace("dd","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("MM","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("M","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("yyyy","");
		sRegPattern=sRegPattern.replace("yy","");
		if (sRegPattern.indexOf("\\(")==-1 && sRegPattern.indexOf("\\)")==-1) {
		  sRegPattern=sRegPattern.substring(sRegPattern.indexOf("("),sRegPattern.lastIndexOf(")")+1);
		}
		var reg=new RegExp(sRegPattern,"ig");
	  var arr=reg.exec(sValue);
	}
  if (reg.lastIndex==0) {
		sRegPattern=sPatternNew.replace("dd","([0-9]{2,2})");
		sRegPattern=sRegPattern.replace("MM","");
		sRegPattern=sRegPattern.replace("d","([0-9]{1,2})");
		sRegPattern=sRegPattern.replace("M","");
		sRegPattern=sRegPattern.replace("yyyy","");
		sRegPattern=sRegPattern.replace("yy","");
		if (sRegPattern.indexOf("\\(")==-1 && sRegPattern.indexOf("\\)")==-1) {
		  sRegPattern=sRegPattern.substring(sRegPattern.indexOf("("),sRegPattern.lastIndexOf(")")+1);
		}
		var reg=new RegExp(sRegPattern,"ig");
	  var arr=reg.exec(sValue);
	}
	return reg;
}
function ur_DateField_isLeapYear(iYear) {
  return ((iYear % 400 == 0) || ((iYear % 4 == 0) && (iYear % 100 != 0)));
}
function ur_InputField_getFormattedDateString(sId,iDay,iMonth,iYear) {
  var sPattern=ur_DateField_getDatePattern(sId);
  var sFormat=sPattern;
  var s=sPattern.replace("dd",ur_DateField_addZero(iDay));
  s=s.replace("MM",ur_DateField_addZero(iMonth));
  if (iYear<10)
  	s=s.replace("yyyy","000"+iYear);
  else if (iYear<100)
  	s=s.replace("yyyy","00"+iYear);
  else if (iYear<1000) {
  	s=s.replace("yyyy","0"+iYear);
  } else {
  	s=s.replace("yyyy",""+iYear);
  }
  if (iYear<1950) {
    s=s.replace("yy",iYear+"");
  } else {
    s=s.replace("yy",(iYear+"").substring(2));
  }
  s=s.replace("d",iDay+"");
  s=s.replace("M",iMonth+"");
  return s; 
}
function sapUrMapi_DateField_setDate(sId,iDay,iMonth,iYear) {
  var s=ur_InputField_getFormattedDateString(sId,iDay,iMonth,iYear);
	sapUrMapi_InputField_setInvalid(sId,false,"");
	var oldValue=sapUrMapi_InputField_getValue(sId);
	sapUrMapi_InputField_setValue(sId,s)
	sapUrMapi_InputField_triggerOnChange(sId,oldValue,s);
}
function ur_DateField_getDatePattern(sId) {
	var o=ur_get(sId);
	var sFormatString="";
	if (ur_getAttD(o,"tp","")=="DATE") {
	  sFormatString=ur_getAttD(o,"df","");
	}
	if (sFormatString=="") {
	  sFormatString=ur_system.dateformatstring;
	}
	if (sFormatString!=null && sFormatString!="") 
		{
		while(sFormatString.indexOf("'")>-1) {sFormatString=sFormatString.replace("'","");}
		return sFormatString;
		}
	var iFormat=ur_system.dateformat;
	if (iFormat==1) return "dd.MM.yyyy";
	else if (iFormat==2) return "MM/dd/yyyy";
	else if (iFormat==3) return "MM-dd-yyyy";
	else if (iFormat==4) return "yyyy.MM.dd";
	else if (iFormat==5) return "yyyy/MM/dd";
	else if (iFormat==6) return "yyyy-MM-dd";
	else if (iFormat==7) return "dd/MM/yyyy";
	else if (iFormat==8) return "dd-MM-yyyy";
	else return "MM/dd/yyyy";
}
function ur_DateField_addZero(i) {
  return i<10&&i>0?"0"+i:""+i;
}
function ur_getFirstDayOfFirstWeek(iFullYear, minDays) {
    var oFirstDay = new Date(iFullYear, 0, minDays, 12, 0, 0),
        iFirstDay = oFirstDay.getDay(),
        iDiff = iFirstDay - ur_system.firstdayofweek,
        DAY = 86400000;
    if (iDiff < 0)
        iDiff += 7;
    var ilFirstDayOfFirstWeek = oFirstDay.getTime() - (iDiff) * DAY;
    return ilFirstDayOfFirstWeek;
};
function ur_getWeek(oDate, minDays) {
    var iFirstDayOfFirstWeekYear = oDate.getFullYear(),
        iFirstDayOfFirstWeek = ur_getFirstDayOfFirstWeek(iFirstDayOfFirstWeekYear, minDays),
        WEEK = 86400000 * 7,
        iWeekNum = Math.floor((oDate.getTime() - iFirstDayOfFirstWeek) / WEEK + .5) + 1;
    if (iWeekNum >= 53) {
        var itFirstDayOfFirstYear = ur_getFirstDayOfFirstWeek(oDate.getFullYear() + 1, minDays);
        if (itFirstDayOfFirstYear - oDate.getTime() < WEEK)
            iWeekNum = 1;
    }
    return iWeekNum;
}

//** InputTokenizer.ie5 **

var oLastSelTextRange = null;
function sapUrMapi_InputTokenizer_MouseUp(oEvt) {
	var oClicked=oEvt.srcElement;
	
	if (oClicked.st=="v"){
		var oValid=ur_getValidTokenizerRange(sapUrMapi_getRootControl(oClicked).id,oEvt);
		if(oValid!=false)
		oValid.select();
	}
	if(oClicked.ct=="IT"){
		if(oClicked.delimiter=="" && oClicked.firstChild.st=="v")
		ur_EVT_cancel(oEvt);
	}
}
function sapUrMapi_InputTokenizer_Click(sId,oEvt) {
	var oInp = ur_getTokenizerObj(sId);
	if(oInp.ref.st=="d"){
		ur_focus(oInp);
		return;
	}
	
	var oTknt=oEvt.srcElement;
	if (oTknt.st=="v"){
		var oValid=ur_getValidTokenizerRange(sId,oEvt);
		if(oValid!=false)
		oValid.select();
	}
	if(oEvt.srcElement.getAttribute("ocl")==null)return;
	else ur_EVT_fire(oEvt.srcElement,"ocl",oEvt);
}
function ur_InpTkn_conTxt(sId,oEvt){
	var oClicked=oEvt.srcElement;
	
	if (oClicked.st=="v"){
		var oValid=ur_getValidTokenizerRange(sapUrMapi_getRootControl(oClicked).id,oEvt);
		if(oValid!=false)
		oValid.select();
	}
	if(oClicked.ct=="IT"){
		if(oClicked.delimiter=="" && oClicked.firstChild.st=="v")
		ur_EVT_cancel(oEvt);
	}
}
function sapUrMapi_InputTokenizer_KeyDown(sId,oEvt) {
	var o = ur_getTokenizerObj(sId);
	var iKey =oEvt.keyCode;
	
	if(o.ref.status=="d")
		return;
	if(iKey==13){
		if(o.bssv==false && sapUrMapi_bCtrl(oEvt)){
			sapUrMapi_InputTokenizer_markValidTokens(sId);
			oEvt.keyCode=35;
		}
		else if(!sapUrMapi_bCtrl(oEvt)){
			oEvt.ur_param = new Object();
			oEvt.ur_param.value=o.ref.text;
		  	ur_EVT_fire(o.ref,"onek",oEvt);
		  	ur_EVT_cancel(oEvt);
	  	}
		return;
	}
	if(iKey==115){
		if(o.f4!=null)
		  ur_EVT_fire(o.f4,"ocl",oEvt);
		return ur_EVT_cancel(oEvt);
	}
		if(o.items[0]==null){
		
		ur_EVT_cancelBubble(oEvt);
		return;	
	}
	var oSelection = document.selection.createRange();
	var sCharKey=",48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,96,97,98,99,100,101,102,103,104,105,106,107,109,110,111,186,187,188,189,190,191,192,219,220,221,222,";
	var sNavKey=",46,37,39,35,36,40,38,";
	var sFunctionKey=",8,46,37,39,35,36,9,40,38,115,13,";
	var sDelKey=",8,32,46,88,";
	if(sapUrMapi_bCtrl(oEvt) && o.single){
		if(iKey==65){
			var range = ur_getValidTokenizerRange(o.ref.id,oEvt,oSelection);
			if(range==false)return;
			   range.select();
			   return ur_EVT_cancel(oEvt);
		 }
	}else if(o.single==true && oSelection.text=="" && o.items[0].st=="v" && sFunctionKey.indexOf("," + iKey + ",") ==-1)
		return ur_EVT_cancel(oEvt);
	if(oSelection.text!="" && o.items[0].st=="v" && sCharKey.indexOf("," + iKey + ",") !=-1 && !sapUrMapi_bCtrl(oEvt) && !oEvt.altKey){
		o.items[0].className="urTknUnchecked";
		o.items[0].st="0";
	}
	
	if (sDelKey.indexOf("," + iKey + ",") != -1 || sCharKey.indexOf("," + iKey + ",") != -1 && !oEvt.altKey) {
		if(o.ref.text!=""){
			if(o.single){
				if(oSelection.htmlText.indexOf("nbsp;")>-1){
					oSelection.moveEnd("character",-1);
				}
			}
			var oTkn=oSelection.parentElement();
			if(oTkn.tagName=="DIV")oTkn=oSelection;
			if(o.single)oTkn=ur_get(sId).firstChild;
			if (oTkn.st=="i"){
			   oTkn.className = "urTknUnchecked";
			   oTkn.st="0";
			 }
			if(oTkn.st=="v" || oSelection.text==o.items[oTkn.idx]){
				o.ref.removeChild(oTkn);
			}
		}
	}
	if(o.single==false && o.ref.text!="")
		 ur_InputTokenizerIndexReset(sId);
		 
	if(sNavKey.indexOf("," + iKey + ",") >-1){
		ur_InpTkn_handleNav(o,iKey,oSelection,oEvt);
	}
	ur_callDelayed("sapUrMapi_Focus_showFocusRect()",0);
	if (iKey != 9 && iKey!=38 && iKey!=40 && iKey!=13)ur_EVT_cancelBubble(oEvt);
}
function ur_InpTkn_handleNav(o,iKey,oSelection,oEvt){
	if(o.ref.text=="")return;
	if(oEvt.shiftKey)
		var oSelTxt=oSelection.duplicate();
	else
		var oSelTxt=oSelection;
		
	
	if(iKey==39){
	   oSelection.move("character",1);
		}
	
	else if(iKey==37){
		oSelection.move("character",-1);
		}
	
	if(oSelection.parentElement().st=="v"){
		var range = ur_getValidTokenizerRange(o.ref.id,oEvt,oSelection);
		if(range==false)return;
		var iMove=o.items[0].innerText.length;
		
			if(oEvt.shiftKey && iKey==39){
			    if(oSelTxt.text!="")
			   		range.moveStart("character",iMove);
			   	else
			   		range.moveEnd("character",iMove);
			}else if(oEvt.shiftKey && iKey==37){
				range.moveEnd("character",iMove);
			}
		range.select();
	}
}
function sapUrMapi_InputTokenizer_markValidTokens(sId) {
	var oInput = ur_get(sId);
	var val = oInput.innerText;
	var delim = oInput.getAttribute("delimiter");
	if (val == "" || delim=="")return;
	var tokenlist = sapUrMapi_InputTokenizer_getTokenList(oInput);
	var keymap = sapUrMapi_InputTokenizer_getKeyMap(oInput);
	var usecase = oInput.getAttribute("casesensitive");
	var newValue = "";
	var msg = "";
	var evt = "";
	var inputtokens = sapUrMapi_InputTokenizer_splitTokens(oInput);
	for (i = 0; i < inputtokens.length; i++) {
	  if (sapUrMapi_InputTokenizer_matchToken(inputtokens[i], tokenlist, usecase)) {
			if (ur_system.is508) {
				tl = inputtokens[i]
				
			}
			evt = "ocl=\"sapUrMapi_InputToken_Click('" + keymap[inputtokens[i]] + "',event);\" ondoubleclick=\"sapUrMapi_InputToken_DblClick('" + keymap[inputtokens[i]] + "',event);\"";
	    	inputtokens[i] = "<span idx=\""+i+"\" st=\"v\" id=\""+keymap[inputtokens[i]]+"\" class='urTknValid' " + msg + " " + evt +">" + inputtokens[i] + delim + "&nbsp;</span>";
	  }
		else {
			if (ur_system.is508) {
				
			}
			evt = "ocl=\"sapUrMapi_InputToken_Click('" + keymap[inputtokens[i]] + "',event);\" ondoubleclick=\"sapUrMapi_InputToken_DblClick('" + keymap[inputtokens[i]] + "',event);\"";
		    inputtokens[i] = "<span idx=\""+i+"\" st=\"i\" id=\""+keymap[inputtokens[i]]+"\" class='urTknInvalid' "+ msg + " " + evt +">" + inputtokens[i] + delim + "&nbsp;</span>";
		}
		newValue += inputtokens[i];
	}
	
	oInput.innerHTML=newValue;
}
function sapUrMapi_InputTokenizer_getTokenList(oInput) {
	var listdiv = ur_get(oInput.getAttribute("listid"));
	if (listdiv != null) {
		var tokendelim = listdiv.getAttribute("tokendelim");
		var keydelim = listdiv.getAttribute("keydelim");
  	var list = listdiv.innerHTML.split(tokendelim);
		var retstr = "|-|";
		for (i = 0; i < list.length; i++) {
			var tkn = list[i].split(keydelim);
			retstr += tkn[0] +  "|-|" ;
		}
		return retstr;
	}
}
function sapUrMapi_InputTokenizer_getKeyMap(oInput) {
	var listdiv = ur_get(oInput.getAttribute("listid"));
	if (listdiv != null) {
		var tokendelim = listdiv.getAttribute("tokendelim");
		var keydelim = listdiv.getAttribute("keydelim");
  	var list = listdiv.innerHTML.split(tokendelim);
		var keyMap = new Array();
		for (i = 0; i < list.length; i++) {
			var tkn = list[i].split(keydelim);
			keyMap[tkn[0]] = tkn[1];
		}
		return keyMap;
	}
}
function sapUrMapi_InputTokenizer_ClipData(sId,sData){
	if(typeof(sData)=="string"){
		var oInput = ur_get(sId);
		var sdelim = oInput.getAttribute("delimiter");
		var sPasteTxt=sData.split("\r\n");
		var s="";
		for (var n=0;n<sPasteTxt.length;n++) {
		  if (s!="")s+=sdelim;
		  if (sPasteTxt[n].length>0) {
		    s+=sPasteTxt[n];
		  }
		}
		return s;
	}else{
		return false;
	}
}
function sapUrMapi_InputTokenizer_Drop(sId,oEvt){
	var sClipTxt = oEvt.dataTransfer.getData("Text");
	var oInput = ur_get(sId);
	var bSingle=oInput.delimiter;
	if(bSingle=="" && oInput.innerText!=""){
		var sSt=oInput.firstChild.st;
		if(sSt=="v")return oEvt.returnValue=false;
	}
	oEvt.returnValue=false;
	var s = sapUrMapi_InputTokenizer_ClipData(sId,sClipTxt);
	var oInpRange=document.body.createTextRange();
	oInpRange.moveToElementText(oInput);
	var range = document.selection.createRange();
	range.moveToPoint(oEvt.x,oEvt.y);
	var sTknStyle=range.parentElement().className;
	if(sTknStyle=="urTknInvalid"||sTknStyle=="urTknValid"){
		oInpRange.collapse(false);
		oInpRange.pasteHTML(s);
	}else{
		if(range!="undefined"){
		range.pasteHTML(s);
			if (range.parentElement() != null && range.parentElement().tagName.toLowerCase() == "span") {
			 range.parentElement().className = "";
			}
		}
	}
	if(oLastSelTextRange!=null){
		if(oLastSelTextRange.root.st!="d" && oLastSelTextRange.root.st!="r")
		   oLastSelTextRange.selection.text="";
		   oLastSelTextRange=null;
	}
}
function ur_InpTkn_drag(sId,oEvt){
	if(document.selection.createRange().text!=""){
		oLastSelTextRange={
						selection:document.selection.createRange(),
						root:ur_get(sId)
						  }
	}else
		return;
}
function sapUrMapi_InputTokenizer_Paste(sId,oEvt){
	var sClipTxt = clipboardData.getData("Text");
	var oInput = ur_get(sId);
	var bSingle=oInput.delimiter;
	var oSelection=document.selection.createRange();
	if(bSingle=="" && oInput.innerText!=""){
		if(oSelection.text==""){
			var sSt=oInput.firstChild.st;
			if(sSt=="v")return ur_EVT_cancel(oEvt);
		}
	}
	oEvt.returnValue=false;
	var s = sapUrMapi_InputTokenizer_ClipData(sId,sClipTxt);
	var range = document.selection.createRange();
	var oInpRange=document.body.createTextRange();
	oInpRange.moveToElementText(oInput);
	if(range!="undefined"){
		range.pasteHTML(s);
		if (range.parentElement() != null && range.parentElement().tagName.toLowerCase() == "span") {
		 range.parentElement().className = "";
		}
	}
}
function sapUrMapi_InputTokenizer_splitTokens(oInput) {
	var delim = oInput.getAttribute("delimiter");
	var txt = oInput.innerText;
	
	if(delim=="")
		return txt.split(" ");
		
	var re = new RegExp("\\s*" + delim + "\\s*", "gi");
	
	
	while (txt.substr(0,1) == " ") {
		txt = txt.substr(1,txt.length-1);
	}
	
	
	while (txt.substr(txt.length-1, 1) == " " || txt.substr(txt.length-1, 1) == delim) {
		txt = txt.substr(0, txt.length-1);
	}
	return txt.split(re);
}
function sapUrMapi_InputTokenizer_matchToken(sTkn, sTknList, bUseCase) {
	
	if (bUseCase=="true") {
	  if (sTknList.indexOf("|-|" + sTkn + "|-|") != -1) {
	    return true;
	  }
	}
	else {
	  if (sTknList.toLowerCase().indexOf("|-|" + sTkn.toLowerCase() + "|-|") != -1) {
	    return true;
	  }
	}
	
	return false;
}
function sapUrMapi_InputToken_Click(sId, oEvt) {
	
}
function sapUrMapi_InputToken_DblClick(sId, oEvt) {
	
}
function sapUrMapi_InputTokenizerHelpClick(sId,oEvt){}
var aInpTknTxt = new Array();
function ur_InpTkn_focus(sId){
	var oTkn=ur_get(sId);
	aInpTknTxt[sId]=oTkn.innerText;
  ur_setEditCellColor(oTkn); 
}
function ur_InpTkn_blur(sId,oEvt){
	var oTkn=ur_get(sId);
  ur_removeEditCellColor(); 
	if(aInpTknTxt[sId]!=oTkn.innerText)
		ur_EVT_fire(oTkn,"och",oEvt);
}
function sapUrMapi_InputTokenizer_change(sId,oEvt){
	var oTkn=ur_get(sId);
	oEvt.ur_param = new Object();
	oEvt.ur_param.value=oTkn.innerText;
}
function ur_getValidTokenizerRange(sId,oEvt,oSelection){
	if(oEvt.type=="click" || oEvt.type=="contextmenu" || oEvt.type=="mouseup"){
		var iIdx=oEvt.srcElement.idx;
	}
	else if(oEvt.type=="keydown" && oSelection!=null && oSelection.parentElement().tagName!="DIV"){
		var iIdx=oSelection.parentElement().idx;
	}else{
		return false;
	} 
	if(iIdx==null)
		return false;
		
	var o=ur_getTokenizerObj(sId);	
	var oRange = new Array();
	var i=0;
	var ii=0;
	
	oRange[i]=document.body.createTextRange();
	oRange[i].findText(o.items[iIdx].innerText);
	
	if(oRange[i].parentElement().id!=o.items[iIdx].id){
		while(oRange[i].parentElement().id!=o.items[iIdx].id){
			ii=i;
			i=i+1;
			oRange[i] = document.body.createTextRange();
			oRange[i].setEndPoint("StartToEnd", oRange[ii]);
			oRange[i].findText(o.items[iIdx].innerText);
		}
	}
	return oRange[i];
}
function ur_getTokenizerObj(sId){
	var oInput=ur_get(sId);
	var bModus=false;
	if(oInput.delimiter=="")bModus=true;
	var bCaseSensitive=false;
	if(oInput.casesensitive=="true")bCaseSensitive=true;
	var bValidation=true
	if(oInput.delimiter!="")bValidation=false;
	
	var o = {
			ref:oInput,
			items:oInput.getElementsByTagName("SPAN"),
			delimiter:oInput.delimiter,
			single:bModus,
			usecase:bCaseSensitive,
			bssv:bValidation,
			vbtn:null,
			f4:null
			};
			
	o.ref["status"]=o.ref.st;		
	o.ref["text"]=o.ref.innerText;
	
	if(bValidation==false)
		o["list"]=sapUrMapi_InputTokenizer_getTokenList(oInput);
	if(ur_get(oInput.vb))
		o.vbtn=ur_get(oInput.vb);
	if(ur_get(sId+"-btn"))
		o.f4=ur_get(sId+"-btn");
	return o;
}
function ur_InputTokenizerIndexReset(sId){
	var o=ur_getTokenizerObj(sId);
	var oInput=ur_get(sId);
	if(o.bssv=false)return;
	for(i=0; i<o.items.length; i++){
		o.items[i].idx=i;
	}
}

//** ItemListBox.nn6 **

function sapUrMapi_ItemListBox_registerCreate(sId,sWidth){
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_ItemListBox_setDim('"+sId+"','"+sWidth+"')");
}
 
function ur_ItemListBox_getIndex(sId,sKey){
	if(sId=="") return 0;
	var o=sapUrMapi_ItemListBox_getObject(sId,document);
	if(!o) return 0;
	var i=0;
	for(i=0; i<o.itms.length; i++)
		if(o.itms[i].k==sKey)	return i+1;
	return null;
}
function sapUrMapi_ItemListBox_getObject(sId,oDoc,oEvt){
	if(sId=="")return null;
	var o = new Object();
	
	var oR=oDoc.getElementById(sId+"-r");
	if (oR && oR.hasChildNodes() && oR.firstChild.tagName=="XMP") {
	  oR.innerHTML=oR.firstChild.innerHTML; 
	}	
	o.r=oDoc.getElementById(sId);
	if(!o.r) return null;
	
	aTbl=o.r.getElementsByTagName("TABLE");
	o.tbl=aTbl[aTbl.length-1];
	o.tbd=o.tbl.firstChild;
	
	o.box=o.tbl;
	
	o.scrl=o.tbd;	
	
	o.itms = o.tbl.getElementsByTagName("TR");
	
	var sFocus=o.tbl.getAttribute("focusitm");
	if(sFocus)
		o.focusedItm=o.itms[parseInt(sFocus)-1];
	else
		o.focusedItm=null;
	var sOldFocus=o.tbl.getAttribute("oldfocusitm");
	if(sOldFocus)
		o.oldFocusedItm=o.itms[parseInt(sOldFocus)-1];
	if(o.focusedItm==null)
		o.focusedItm=o.itm;
	
	o.selItms=new Array();
	o.prevItm=null;
	o.nextItm=null;
	var j=0;
	o.mItems={};
	for(var i=0;i<o.itms.length;i++){
		o.mItems[o.itms[i].getAttribute("k")] = o.itms[i];		
		if(o.itms[i].className=="urIlb2ISel"){
			o.selItms[j]=o.itms[i];
			j++;
		}
		if(o.focusedItm!=null&&o.focusedItm==o.itms[i]){
			if(i>0)
				if(o.itms[i-1].name=="HLine") o.prevItm=o.itms[i-2];
				else o.prevItm=o.itms[i-1];
			if(i<o.itms.length-1)
				if(o.itms[i+1].name=="HLine") o.nextItm=o.itms[i+2];
				else o.nextItm=o.itms[i+1];
		}
	}
	if(o.prevItm==null && o.nextItm==null) o.nextItm=o.itms[0];
	
	o.parId=o.r.getAttribute("parid");
	
	if(o.parId!=null&&o.parId!="") o.ro = ur_isSt(o.parId,ur_st.READONLY);
	else o.ro = ur_isSt(o.r.id,ur_st.READONLY);
	o.enbl = !ur_isSt(o.r.id,ur_st.DISABLED);
	o.inv = ur_isSt(o.r.id,ur_st.INVALID);
	o.popup = o.tbl.getAttribute("pop") == "true";
	o.multi = o.tbl.getAttribute("multi") == "true";
	o.size = parseInt(o.tbl.getAttribute("s"));
	o.vissize = parseInt(o.tbl.getAttribute("v"));
	o.userheight = o.tbl.getAttribute("h");
	o.userwidth = o.tbl.getAttribute("w");
	o.cols = o.tbl.getAttribute("cols");
	o.valcol=o.tbl.getAttribute( "vcol" );
	o.icocol=o.tbl.getAttribute( "icol" );
	return o;
}
function sapUrMapi_ItemListBox_getItem(o,sKey){
	for(var i=0; i<o.itms.length;i++){
		if(sKey==o.itms[i].getAttribute("k"))
			return o.itms[i];
	}
	return o.itms[0];
}
function sapUrMapi_ItemListBox_setParentId(sId, sParentId)  {
	if (!ur_get(sId)) sapUrMapi_ItemListBox_getObject(sId,document,null);
	ur_get(sId).setAttribute("parid",sParentId);
}
function sapUrMapi_ItemListBox_getSelectedKeys(sId,oDoc){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	var aKeys=new Array();
	var j=0;
	for(var i=0; i<o.itms.length;i++){
		if( o.itms[i].className == "urIlb2ISel" ){
			aKeys[j]=o.itms[i].getAttribute("k");
			j++;
		}
	}
	return aKeys;
}
function sapUrMapi_ItemListBox_setSelectedKeys(sId,aKeys,oDoc){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	var sKey=aKeys.toString();
	for(var i=0; i<o.itms.length;i++)
		if( sKey.indexOf(o.itms[i].getAttribute("k")) == 0 )
			sapUrMapi_ItemListBox_selectItem(o,o.itms[i],true,null);
}
function sapUrMapi_ItemListBox_setSelectedKey(sId,sKey,oDoc,bScroll){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	if(sKey=="") return;
	for(var i=0; i<o.itms.length;i++){
		if( sKey==o.itms[i].getAttribute("k") ){
			sapUrMapi_ItemListBox_deselectAllItems(o);
			sapUrMapi_ItemListBox_itemSetHighlight(o.itms[i], true);
			sapUrMapi_ItemListBox_focusItem(o,o.itms[i]);
			if(bScroll) sapUrMapi_ItemListBox_scrollIntoView(o,o.itms[i],true);			
			return;
		}
	}
}
function sapUrMapi_ItemListBox_selectHoveredItem(sId,oDoc,oEvt){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,null);
	for(var i=0; i<o.selItms.length;i++)
		sapUrMapi_ItemListBox_selectItem(o,o.selItms[i],true,oEvt);
}
function sapUrMapi_ItemListBox_getList(sId,doc){
	var o=sapUrMapi_ItemListBox_getObject(sId,doc,null);
	var oCols = new Array();
	var sItmKey = "";
	var sList = "";
	for( var i=0; i<o.itms.length; i++ ){
		sItmKey = o.itms[i].getAttribute("k");
		oCols =  o.itms[i].getElementsByTagName("TD");
		sList += "||";
		sList += oCols[parseInt(o.valcol)-1].innerHTML;
		sList += "|";
		sList += sItmKey;
	}
	if(sList!="") sList+="||";
	return sList;
}
function sapUrMapi_ItemListBox_setDim( sId, sWidth ){
	var o=sapUrMapi_ItemListBox_getObject(sId,document,null);
	
	if( parseInt(o.vissize) > 0 && !isNaN(parseInt(o.vissize)) )
		sapUrMapi_ItemListBox_setSize(o, parseInt(o.vissize));
	else if( (parseInt(o.userheight) > 0 && !isNaN(parseInt(o.userheight))) || o.popup )
		sapUrMapi_ItemListBox_setHeight(o, parseInt(o.userheight)); 
	else 
	  sapUrMapi_ItemListBox_setHeight(o,o.scrl.offsetHeight) 
	
	if( parseInt(sWidth) >= 0 && !isNaN(parseInt(sWidth)) ) 
		sapUrMapi_ItemListBox_setWidth(o, sWidth);
}
function sapUrMapi_ItemListBox_setSize(o,sSize){
	var iHeight = 0;
	var iBorder = 0;
	if(parseInt(sSize) <= 0) return;
	if(parseInt(sSize) >= o.itms.length) return;
	if(o.itms.length > 1)
		iHeight = parseInt(sSize) * parseInt(o.itms[1].offsetHeight) + iBorder + 2*(o.itms[1].offsetHeight-o.itms[0].offsetHeight);
	else
		iHeight = parseInt(sSize) * parseInt(o.itms[0].offsetHeight) + iBorder;
	sapUrMapi_ItemListBox_setHeight(o,iHeight);
}
function sapUrMapi_ItemListBox_setHeight(o,sHeight){
	var iHeight=o.scrl.offsetHeight; 
	var iNewHeight=0; 
	var iWindowHeight=window.innerHeight; 
	var iBorder = 0;
	
	
	
	if( (isNaN(parseInt(sHeight)) || parseInt(sHeight) <= 0 ) && !o.popup){
		return;
	}	
	
	if(!isNaN(parseInt(sHeight)) && parseInt(sHeight) > 0 ){
		o.scrl.style.display = "block";
		o.scrl.style.overflowY = "auto";
		o.scrl.style.overflowX = "hidden";	
		o.scrl.style.height = sapUrMapi_sAddUnit( sHeight , "px" );
		iNewHeight = o.scrl.offsetHeight;
		if(iWindowHeight<iNewHeight){
			iNewHeight=iWindowHeight;
			o.scrl.style.height = sapUrMapi_sAddUnit( iWindowHeight , "px" );					
		}	
	}
	else if(o.popup && iHeight>iWindowHeight){
		iNewHeight=iWindowHeight;
		o.scrl.style.display = "block";
		o.scrl.style.overflowY = "auto";
		o.scrl.style.overflowX = "hidden";
		o.scrl.style.height = sapUrMapi_sAddUnit( iWindowHeight , "px" );		
	}
	else{
		return; 
	}
	
	if(iHeight <= iNewHeight){
		o.scrl.style.height=sapUrMapi_sAddUnit( iHeight , "px" );
		return;
	}
	
	iNewHeight = 0;
	for( var i=0; i<o.itms.length; i++ ){
		if( (iNewHeight + parseInt(o.itms[i].offsetHeight)) > o.scrl.offsetHeight )
			break;
		iNewHeight += parseInt(o.itms[i].offsetHeight);
	}
	iNewHeight = iNewHeight + iBorder;
	
	o.scrl.style.height = sapUrMapi_sAddUnit( iNewHeight , "px" );
	o.tbl.setAttribute("s",i);
}
function sapUrMapi_ItemListBox_setWidth(o,sWidth){
	var iWidth = 0;
	var iNewWidth=0;
	
	if(typeof(sWidth)=="number" || sWidth.indexOf("px")>0){
		iNewWidth=parseInt(sWidth);
	}
	else{
		o.box.style.width = sapUrMapi_sAddUnit( sWidth , "px" );
		iNewWidth = o.r.offsetWidth;
	}	
	o.box.style.width = "10px";
	iWidth = o.r.offsetWidth;
	if (iNewWidth<iWidth) return;
	
	sWidth = sapUrMapi_sAddUnit( sWidth , "px" );
	
	o.box.style.width = sWidth;
	o.tbl.style.width = "100%";
	o.box.setAttribute("style","width:"+sWidth+";");
	
	oFirstTD = o.box.getElementsByTagName("TD")[0];
	oFirstTD.setAttribute("style","width:"+sWidth+";");
}
function sapUrMapi_ItemListBox_itemSelected(oItm){
	if( oItm.className == "urIlb2ISel" ) return true;
	return false;
}
function sapUrMapi_ItemListBox_itemSetHighlight(oItm,bOn){
	if( oItm == null || oItm.tagName != "TR" ) return;
	if( bOn && oItm.className != "urIlb2ISel") oItm.className = "urIlb2ISel";
	else if( oItm.className == "urIlb2ISel" ) oItm.className = "";
	else return;
}
function sapUrMapi_ItemListBox_deselectAllItems(o){
	if(o.selItms==null) return;
	for(var i=0; i<o.selItms.length; i++)
		sapUrMapi_ItemListBox_itemSetHighlight(o.selItms[i],false);
}
function sapUrMapi_ItemListBox_getVal(sId,sKey){
	var o=sId;
	if(typeof(o)!="object"){
		o=sapUrMapi_ItemListBox_getObject(sId,document,null);
	}
	if(!o) return null;
	var oItem=o.mItems[sKey];
	if(!oItem) return null;
	var oCol=sapUrMapi_ItemListBox_oGetItemValueColumn(oItem);
	if(!oCol) return null;
	return oCol.textContent;
}
function sapUrMapi_ItemListBox_oGetItemValueColumn(oItem) {
		var oCols=oItem.getElementsByTagName("TD");
		
		for(var i=0; i<oCols.length; i++){
			var oImg=oCols[i].getElementsByTagName("IMG");
			if(oCols[i].className!="urCob2IDscr" && oImg.length===0){
				return oCols[i];
			}
		}
		return null;
}
function sapUrMapi_ItemListBox_getIconSrc(o,oItm){
	if(o.icocol==null || o.icocol=="") return null;
	var oCols=oItm.getElementsByTagName("TD");
	var oIco;
	oIco = oCols[parseInt(o.icocol)-1].firstChild;
	return oIco.style.backgroundImage;
}
function sapUrMapi_ItemListBox_hoverItem(o,oItm){
	if(o.ro) return;
	sapUrMapi_ItemListBox_deselectAllItems(o);
	sapUrMapi_ItemListBox_itemSetHighlight(oItm, true);
	sapUrMapi_ItemListBox_focusItem(o,oItm);
}
function sapUrMapi_ItemListBox_scrollIntoView(o,oItm,bTop){
	if( (o.tbd.scrollTop > oItm.rowIndex*oItm.offsetHeight) || (o.tbd.scrollTop+o.tbd.clientHeight-5 <= oItm.rowIndex*oItm.offsetHeight) )
		if(!bTop) o.tbd.scrollTop=(oItm.rowIndex-o.size+1)*oItm.offsetHeight;
		else o.tbd.scrollTop= oItm.offsetTop;
}
function sapUrMapi_ItemListBox_selectItem(o,oItm,bTop,oEvt){
	if(!o.ro && o.enbl){
		if(!(o.multi&&(oEvt.shiftKey||sapUrMapi_bCtrl(oEvt)))) sapUrMapi_ItemListBox_deselectAllItems(o);
		sapUrMapi_ItemListBox_itemSetHighlight(oItm,true);
		if(o.popup){
			var sKey=oItm.getAttribute("k");
			sapUrMapi_ComboBox_setValue(o.parId,sKey, sapUrMapi_ItemListBox_getVal(o,sKey), sapUrMapi_ItemListBox_getIconSrc(o,oItm),oEvt);
		}
	}
	sapUrMapi_ItemListBox_focusItem(o,oItm);
	sapUrMapi_ItemListBox_scrollIntoView(o,oItm,bTop);
}
function sapUrMapi_ItemListBox_deselectItem(oItm){
	sapUrMapi_ItemListBox_itemSetHighlight(oItm,false);
}
function sapUrMapi_ItemListBox_focusItem(o,oItm){
	o.tbl.setAttribute("focusitm",oItm.rowIndex+1);
	if(o.popup) return;
	try{
		ur_focus(o.r);
	} catch(err){}
}
function sapUrMapi_ItemListBox_mouseover( sId,oDoc,oEvt) {
	var oFrom=oEvt.relatedTarget;
	var oTo=oEvt.target;
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,oEvt);
	
	if( oTo.tagName=="DIV" || oTo.tagName=="SPAN" || o.ro || !o.enbl || o.size==0) return;
	while( oFrom != null && oFrom.tagName != "TR" )
		oFrom = oFrom.parentNode;
	while( oTo != null && oTo.tagName != "TR" )
		oTo = oTo.parentNode;
	if( oTo==null || oTo.name=="HLine" || oFrom==oTo ) return;
	sapUrMapi_ItemListBox_hoverItem(o,oTo);
}
function sapUrMapi_ItemListBox_focus(sId,oDoc,oEvt){
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,oEvt);
	
	if(!o.enbl && !ur_system.is508) return;
	sapUrMapi_DataTip_show(sId,"focus");
	
	if(ur_evtSrc(oEvt).id!=sId) return;
	
	if(o.tbl.getAttribute("tabback")=="true"){
		o.tbl.setAttribute("tabback","false");
		var oNewEvt=oDoc.createEventObject();
		oNewEvt.keyCode="9";
		oNewEvt.shiftKey=true;
		o.r.fireEvent("onkeydown",oNewEvt);
		return;
	}
	
	if(o.selItms.length==0) oItm = o.itms[0];
	else oItm = o.selItms[0];
	
	sapUrMapi_ItemListBox_focusItem(o,oItm);
}
function sapUrMapi_ItemListBox_blur( sId, oEvt ){
	sapUrMapi_DataTip_hide();
}
function sapUrMapi_ItemListBox_click(sId,oDoc,oEvt) {
	
	var oItm=ur_evtSrc(oEvt);
	if(oItm.tagName!="TD") return; 
	while(oItm.tagName!="TR"){
		if(oItm.getAttribute("ct")=="ItemListBox") return;
		oItm=oItm.parentNode;
	}
	var o=sapUrMapi_ItemListBox_getObject(sId,oDoc,oEvt);
	var bSel = false;
	
	
	if( o.multi == true && sapUrMapi_bCtrl(oEvt) == false )
		sapUrMapi_ItemListBox_deselectAllItems(o);
	
	if(oEvt.shiftKey == true && o.multi == true  && (o.focusedItm != oItm) ){
		var oStart=o.oldFocusedItm;
		if(oStart.rowIndex < oItm.rowIndex)
			for(var i=oStart.rowIndex;i<=oItm.rowIndex;i++)
				sapUrMapi_ItemListBox_selectItem(o,o.itms[i],true, oEvt);
		else
			for(var i=oStart.rowIndex;i>=oItm.rowIndex;i--)
				sapUrMapi_ItemListBox_selectItem(o,o.itms[i],true, oEvt);
	}
	
	else{
		sapUrMapi_ItemListBox_selectItem(o, oItm, true,oEvt);
		o.tbl.setAttribute( "oldfocusitm", oItm.rowIndex+1 );
	}
	ur_focus(ur_get(sId).firstChild);
	return ur_EVT_cancel(oEvt);
}
function sapUrMapi_ItemListBox_keypress( sId, oEvt ){
	var o=sapUrMapi_ItemListBox_getObject(sId, document, oEvt);
	if (o.popup) return;
  
  if( oEvt.charCode > 0){
    var sSearchChar = String.fromCharCode(oEvt.charCode);
    var sSelectedKey = "";
    if (o.selItms.length > 0) {
      sSelectedKey = o.selItms[o.selItms.length-1].getAttribute("k");
    }
    var sNewKey = sapUrMapi_ItemListBox_findItem(sId,sSearchChar,sSelectedKey,document);
    if (sNewKey!="") sapUrMapi_ItemListBox_setSelectedKey(sId,sNewKey,document,true);
  }  
}
function sapUrMapi_ItemListBox_findItem(sId,sSearch,sStartKey,oDoc) {
	var sList=sapUrMapi_ItemListBox_getList(sId,oDoc);
	var sLIST=sList.toUpperCase();
	var sSEARCH="||"+sSearch.toUpperCase();
	var iStart=0;
	var iEnd=0;
	var sKey=sStartKey+"||";
	var sNewKey="";
	var sNewVal="";
	
	if(sKey!=null && sKey!="")
		iStart=sList.indexOf(sKey);
	iStart=sLIST.indexOf(sSEARCH,iStart);
	if(iStart<0)
		iStart=sLIST.indexOf(sSEARCH);
	if(iStart<0) return false;
	
	iStart+=2;
	iEnd=sList.indexOf("|",iStart);
	sVal=sList.slice(iStart,iEnd);
	iStart=iEnd+1;
	iEnd=sList.indexOf("||",iStart);
	sKey=sList.slice(iStart,iEnd);
  return sKey;
}
function sapUrMapi_ItemListBox_keydown( sId, doc, e ){
	var o=sapUrMapi_ItemListBox_getObject(sId, doc, e);
	var iItmIdx = 0;
	
	if(e.keyCode==73 && sapUrMapi_bCtrl(e) && e.shiftKey && !e.altKey ){
		sapUrMapi_DataTip_show(sId,"keydown");
	}
	
	
	else if(e.keyCode==27){
		sapUrMapi_DataTip_hide(sId);
	}
	
	
	else if(e.keyCode==9  && e.shiftKey){
		if(ur_evtSrc(e).tagName!="SPAN"){
			o.tbl.setAttribute("tabback","true");
			ur_focus(o.r);
		}
		return true;
	}
	
	
	else if( e.keyCode==38 && o.prevItm != null ){
		if( sapUrMapi_bCtrl(e) && o.multi )
			sapUrMapi_ItemListBox_focusItem(o,o.prevItm);
		else if( sapUrMapi_ItemListBox_itemSelected(o.prevItm) && o.multi){
			sapUrMapi_ItemListBox_deselectItem(o.focusedItm);
			sapUrMapi_ItemListBox_focusItem(o,o.prevItm);
		}
		else
			sapUrMapi_ItemListBox_selectItem(o, o.prevItm,true, e );
	}
	
	
	else if( e.keyCode==40 && o.nextItm != null ){
		if( sapUrMapi_bCtrl(e) && o.multi )
			sapUrMapi_ItemListBox_focusItem(o,o.nextItm);
		else if( sapUrMapi_ItemListBox_itemSelected(o.nextItm) && o.multi){
			sapUrMapi_ItemListBox_deselectItem(o.focusedItm);
			sapUrMapi_ItemListBox_focusItem(o,o.nextItm);
		}
		else
			sapUrMapi_ItemListBox_selectItem(o, o.nextItm,false, e );
	}
	
	
	else if( e.keyCode==32 ){
		if( sapUrMapi_ItemListBox_itemSelected(o.focusedItm) &&  sapUrMapi_bCtrl(e) && o.multi)
			sapUrMapi_ItemListBox_deselectItem(o.focusedItm);
		else
			sapUrMapi_ItemListBox_selectItem(o, o.focusedItm,true, e);
	}
	
	
	else if( e.keyCode==36 ){
		sapUrMapi_ItemListBox_selectItem(o, o.itms[0],true, e );
	}
		
	
	else if( e.keyCode==35 ){
		sapUrMapi_ItemListBox_selectItem(o, o.itms[o.itms.length-1],false, e );
	}
		
	
	else if( e.keyCode==33 && o.size!=null ){
		if(!o.focusedItm) {
			if(o.itms.length > 0) {
				sapUrMapi_ItemListBox_selectItem(o, o.itms[0], true, e );
			}
		}
		else {
		    iItmIdx = o.focusedItm.rowIndex - o.size + 1;
		    if( iItmIdx < 0 ) iItmIdx = 0;
		    sapUrMapi_ItemListBox_selectItem(o, o.itms[iItmIdx],true, e );
	    }
	}
	
	
	else if( e.keyCode==34 && o.size!=null ){
		if(!o.focusedItm) {
			if(o.itms.length > 0) {
				sapUrMapi_ItemListBox_selectItem(o, o.itms[o.itms.length-1], true, e );
			}
		}
		else {
		    iItmIdx = o.focusedItm.rowIndex + o.size - 1;
		    if( iItmIdx > o.tbd.lastChild.rowIndex ) iItmIdx = o.tbd.lastChild.rowIndex;
		    sapUrMapi_ItemListBox_selectItem(o, o.itms[iItmIdx],false, e);
        }
  }
  else return;
   
  return ur_EVT_cancel(e);
}
function sapUrMapi_ItemListBox_setInputState(sId,sInputState) {
	var o=sapUrMapi_ItemListBox_getObject(sId, document);
	if(o.popup) return;
	if(ur_isSt(o.r,ur_st.READONLY) || ur_isSt(o.r,ur_st.DISABLED)) return;
  var oLbl=sapUrMapi_Label_getInputLabel(sId);
  o = o.box;
	sapUrMapi_Label_setInputState(oLbl,sInputState);
  if (sInputState == 'ERROR') {
    if (ur_isSt(sId,ur_st.INVALID)) return;
    ur_setSt(sId,ur_st.WARNING,false);
    ur_setSt(sId,ur_st.INVALID,true);
		o.className=o.className.replace("Warn","");
		o.className=o.className.replace("Box","BoxInv");
  } else if (sInputState == 'WARNING'){
    if (ur_isSt(sId,ur_st.WARNING)) return;
    ur_setSt(sId,ur_st.INVALID,false);
    ur_setSt(sId,ur_st.WARNING,true);
		o.className=o.className.replace("Inv","");
		o.className=o.className.replace("Box","BoxWarn");
  } else {
    ur_setSt(sId,ur_st.INVALID,false);
    ur_setSt(sId,ur_st.ERROR,false);
		o.className=o.className.replace("Warn","");
		o.className=o.className.replace("Inv","");
  }
}
function sapUrMapi_ItemListBox_setInvalid(sId,bSet) {
  if (bSet) sapUrMapi_ItemListBox_setInputState(sId,"ERROR");
  else sapUrMapi_ItemListBox_setInputState(sId,"NONE");
}
function sapUrMapi_ItemListBox_setInvalid(sId,bSet){
	var o=sapUrMapi_ItemListBox_getObject(sId, document);
	if(o.popup) return;
	if(ur_isSt(o.r,ur_st.READONLY) || ur_isSt(o.r,ur_st.DISABLED)) return;
	if(bSet && ur_isSt(o.r,ur_st.INVALID)) return;
	if(!bSet && !ur_isSt(o.r,ur_st.INVALID)) return;
	if(bSet){
		o.box.className=o.box.className.replace("Box","BoxInv");
		ur_setSt(sId,ur_st.INVALID,true);
	}
	else{
		o.box.className=o.box.className.replace("BoxInv","Box");
		ur_setSt(sId,ur_st.INVALID,false);	
	}
}
function sapUrMapi_ItemListBox_setDisabled(sId,bSet){
	var o=sapUrMapi_ItemListBox_getObject(sId, document);
	if(o.popup) return;
	if(bSet && ur_isSt(o.r,ur_st.DISABLED)) return;
	if(!bSet && !ur_isSt(o.r,ur_st.DISABLED)) return;
	if(bSet){
		o.box.className=o.box.className.replace("Box","BoxDsbl");
		ur_setSt(sId,ur_st.DISABLED,true);
		for(var i=0; i<o.itms.length; i++){
			for(var j=0; j<o.itms[i].childNodes.length; j++){
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ilb2I","Ilb2IDsbl");
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Dscr","");				
			}
		}
	}
	else{
		o.box.className=o.box.className.replace("BoxDsbl","Box");
		ur_setSt(sId,ur_st.DISABLED,false);	
		for(var i=0; i<o.itms.length; i++){
			for(var j=0; j<o.itms[i].childNodes.length; j++){
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Dsbl","");
				if(j!=parseInt(o.valcol)-1)
					o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ilb2I","Ilb2IDscr");				
			}
		}		
	}
}
function sapUrMapi_ItemListBox_setReadonly(sId,bSet){
	var o=null;
	if(typeof(sId)=="object")
		o=sId;
	else
		o=sapUrMapi_ItemListBox_getObject(sId, document);
	if(bSet && ur_isSt(o.r,ur_st.READONLY)) return;
	if(!bSet && !ur_isSt(o.r,ur_st.READONLY)) return;
	if(bSet){
		o.box.className=o.box.className.replace("Box","BoxRo");
		ur_setSt(o.r,ur_st.READONLY,true);
		for(var i=0; i<o.itms.length; i++){
			for(var j=0; j<o.itms[i].childNodes.length; j++){
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ilb2I","Ilb2IRo");
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Dscr","");				
			}
		}
	}
	else{
		o.box.className=o.box.className.replace("BoxRo","Box");
		ur_setSt(o.r,ur_st.READONLY,false);	
		for(var i=0; i<o.itms.length; i++){
			for(var j=0; j<o.itms[i].childNodes.length; j++){
				o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ro","");
				if(j!=parseInt(o.valcol)-1)
					o.itms[i].childNodes[j].className=o.itms[i].childNodes[j].className.replace("Ilb2I","Ilb2IDscr");				
			}
		}		
	}
}

//** Label.ie5 **

function sapUrMapi_Label_setDisabled(oLbl) {
	if(oLbl==null || oLbl.className.indexOf("Dsbl")>-1) return;
	if(oLbl.className.indexOf("Bar")>-1)
		oLbl.className=oLbl.className.replace("LBar","LBarDsbl");
	else
		oLbl.className=oLbl.className.replace("L","LDsbl");
}
function sapUrMapi_Label_setEnabled(oLbl) {
	if (oLbl==null) return;
	oLbl.className=oLbl.className.replace("Dsbl","");
}
function sapUrMapi_Label_setInvalid(oLbl,bSet) {
	if (oLbl==null) return;
	
	if(!bSet){
		oLbl.className=oLbl.className.replace("Inv","");
		return;
	}
	
	if(oLbl.className.indexOf("Inv")>-1) return;
	if (oLbl.className.indexOf("Bar")>-1) 
		oLbl.className=oLbl.className.replace("Bar","BarInv");
	else
		oLbl.className+="Inv";
}
function sapUrMapi_Label_getInputLabel(sId) {
	var ur_arrLabels = document.getElementsByTagName("LABEL");
	for (var i=0;i<ur_arrLabels.length;i++) {
		if (ur_arrLabels.item(i).getAttribute("f")==sId) {
			return ur_arrLabels.item(i);
		}
	}
	for (var i=0;i<ur_arrLabels.length;i++) {
		if (ur_arrLabels.item(i).getAttribute("htmlFor")==sId) {
			return ur_arrLabels.item(i);
		}
	}
	return null;
}
function sapUrMapi_Label_FocusLabeledElement(sForId) {
  sapUrMapi_focusElement(sForId);
}
function sapUrMapi_Label_getLabelText(sId) {
	var oLbl=sapUrMapi_Label_getInputLabel(sId);
	if(oLbl==null) return null;
	var sTxt=oLbl.getAttribute("lbl");
	if(sTxt==null || sTxt=="")
		sTxt=oLbl.innerText;
	if(sTxt.lastIndexOf(" *")>-1 && sTxt.lastIndexOf(" *")==sTxt.length-2)
		sTxt=sTxt.substring(0,sTxt.lastIndexOf(" *"));	
	if(sTxt.lastIndexOf(":")>-1 && sTxt.lastIndexOf(":")==sTxt.length-1)
		sTxt=sTxt.substring(0,sTxt.lastIndexOf(":"));
	return sTxt;
}
function sapUrMapi_Label_clickLabeledElement(sForId) {
	var o=ur_get(sForId);
	try{
		if (ur_system.eventPrefix) ur_activateAllEvents(o);
		var sCt=o.getAttribute("ct");
		if(sCt=="C" || sCt=="R" || sCt=="TRI") o.click();
		else ur_focus(o);
	} catch(e){}
}
function ur_L_getF(sId){
  var sF=ur_get(sId).getAttribute("f");
  return sF;
}
function ur_L_mm(sId,oEvt){
	clearTimeout(_ur_DataTip_timer);
	if(typeof(sId)== "object"){
		oEvt = sId;
		sId = oEvt.srcElement.getAttribute("id");
	}
	var o=ur_get(sId);
	
	if(!o) return;
	
	var sCt=o.getAttribute("ct");
	if(ur_EVT_src(oEvt).className=="urHlpTHFont")
		_ur_DataTip.time_out=70;
	else
		_ur_DataTip.time_out=0;
	if(sCt=="L")sId=ur_L_getF(sId);
	if(sapUrMapi_DataTip_isOpen(sId)==false)
		_ur_DataTip_timer=ur_callDelayed("sapUrMapi_DataTip_show('"+sId+"','mousemove')",500);
}
function ur_L_ml(sId,oEvt){
	clearTimeout(_ur_DataTip_timer);
	if(typeof(sId)== "object"){
		oEvt = sId;
		sId = oEvt.srcElement.getAttribute("id");
	}
	var o=ur_get(sId);
	
	if(!o) return;
	
	var oInput = null;
	var sCt=o.getAttribute("ct");
	if(sCt=="L"){
		sId=ur_L_getF(sId);
		_ur_DataTip_timer = ur_callDelayed("sapUrMapi_DataTip_hide(\""+sId+"\")",_ur_DataTip.time_out);
	}
	
	if(oPopup){
		_ur_DataTip_timer = ur_callDelayed("sapUrMapi_DataTip_hide(\""+sId+"\")",_ur_DataTip.time_out);
	}
}

//** Link.ie5 **

function sapUrMapi_Link_activate(sLinkId,e) {
	var oLink = ur_get(sLinkId);
	var iKeyCode=e.keyCode;
	
	
	if(iKeyCode==32 && oLink.onclick){
		oLink.click(); 
		e.returnValue=false;
		return false;
	}
	
	else if (oLink.getAttribute("hasmenu")=="true" && iKeyCode==40 && oLink.oncontextmenu) {
		oLink.oncontextmenu();
		e.returnValue=false;
		return false;
	}
  e.returnValue=true;
  return true;
}

//** LinkChoice.ie5 **

function ur_LinkChoice_keydown(e) { 
	var o=ur_EVT_src(e);
	
	if(o.tagName == "SPAN") o = o.parentNode;
	   
  if (e.keyCode==32) {
	  ur_EVT_cancel(e);
		sapUrMapi_LinkChoice_openMenu(o.id,e);
		return ur_EVT_cancel(e);
  }
}
function ur_LinkChoice_click(e) { 
	var o=ur_EVT_src(e);
	
	if(o.tagName == "SPAN") o = o.parentNode;
	
	sapUrMapi_LinkChoice_openMenu(o.id,e);
	return ur_EVT_cancel(e);
}
function sapUrMapi_LinkChoice_openMenu( sId, e){
	var sPopupId=document.getElementById(sId).getAttribute("popup");
	
	if (!sPopupId) return;
	if (ur_system.direction=="rtl")
 	  sapUrMapi_PopupMenu_showMenu(sId,sPopupId,sapPopupPositionBehavior.MENURIGHT,e);
 	else
 	  sapUrMapi_PopupMenu_showMenu(sId,sPopupId,sapPopupPositionBehavior.MENULEFT,e);
  e.cancelBubble=false;
	if ((e.type=="contextmenu")) {
    e.returnValue=false;
  } else {
    e.returnValue=true;
  }
}

//** ListBox.ie5 **

function sapUrMapi_ListBox_focus(sId,e) {
    
	sapUrMapi_DataTip_show(sId,"focus");
}
function sapUrMapi_ListBox_blur(sId,event) {
	sapUrMapi_DataTip_hide(sId);
}
function sapUrMapi_ListBox_keydown(sId,oEvt) {
	
	if(oEvt.keyCode == "73" && sapUrMapi_bCtrl(oEvt) && oEvt.shiftKey && !oEvt.altKey ){
		ur_EVT_cancel(oEvt);
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
	}
	if(oEvt.keyCode == "27"){
		ur_EVT_cancel(oEvt);
		sapUrMapi_DataTip_hide(sId);
	}
}
//** LoadingAnimation.ie5 **

var _ur_LoadingAni_delay = 2000;
var _ur_LoadingAni_timerId = null;
var _ur_LoadingPopup = null;
function sapUrMapi_LoadingAnimation_getObject() {
	return ur_get("ur-loading");
}
function sapUrMapi_LoadingAnimation_getText() {
	var oLAText = ur_get("ur-loading");
	oLAText = oLAText.firstChild.lastChild;
	return oLAText.innerHTML;
}
function sapUrMapi_LoadingAnimation_trigger(loadingDelay) {
	if ( loadingDelay>=0 ) 
		_ur_LoadingAni_timerId = ur_callDelayed("sapUrMapi_LoadingAnimation_show('ur-loading')", loadingDelay);
	else 
		_ur_LoadingAni_timerId = ur_callDelayed("sapUrMapi_LoadingAnimation_show('ur-loading')", _ur_LoadingAni_delay);
}
function sapUrMapi_LoadingAnimation_show(sId) {
	if (_ur_LoadingAni_timerId) {
		var arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
                var oParameter = (ur_system.browser_abbrev == "ie6") ? null : ur_get("ur-loading");
                var oEvent = (ur_system.browser_abbrev == "ie6") ? e : null;
		_ur_LoadingPopup = new sapPopup(window,arrUrls,ur_get("ur-loading"),oParameter,oEvent,1);
		_ur_LoadingPopup.positionbehavior=sapPopupPositionBehavior.BROWSERCENTER;
		_ur_LoadingPopup.show(true);
		_ur_LoadingAni_timerId = null;
	}
}
function sapUrMapi_LoadingAnimation_cancel() {
	if (_ur_LoadingAni_timerId) {
		clearTimeout(_ur_LoadingAni_timerId);
	_ur_LoadingAni_timerId = null;
	} else {
		sapUrMapi_LoadingAnimation_hide();
}
}
function sapUrMapi_LoadingAnimation_hide() {
	if (_ur_LoadingPopup != null) {
	   _ur_LoadingPopup.hide();
	   _ur_LoadingPopup=null;
	}
}

//** MatrixLayout.ie5 **

function sapUrMapi_MatrixLayout_registerCreate(sId) {
	  sapUrMapi_Create_AddItem(sId, "ur_MatrixLayout_init('"+sId+"')");
}
function ur_MatrixLayout_init(sId) {
	if(ur_system.browser_abbrev == "standards" && UCF_UserAgent.bIsIE()) {
		UCF_DomUtil.initHtmlTableCorrection(ur_get(sId));
	}
  
}

//** MenuBar.ie5 **

function sapUrMapi_MenuBar_hover(sId,e){
	var oTxt=ur_get(sId+"-txt");
	var oBtn=ur_get(sId+"-btn");
	var oMnuBar=ur_get(sId).parentNode;
	var sAi=oMnuBar.getAttribute("ai");
	
	if(ur_isSt(sId,ur_st.DISABLED)) return;
	
	if (oTxt.className.indexOf("Hover")==-1){
		oTxt.className+="Hover";
		oBtn.className+="Hover";
	}
	if(e.type=="mouseout"){
		oTxt.className=oTxt.className.replace("Hover","");
		oBtn.className=oBtn.className.replace("Hover","");
	}
	if(oPopup!=null){
	  if (!oPopup.source.object) return; 
		var sSrcPopup = oPopup.source.object.parentNode.getAttribute("id");
		var sMenu = oMnuBar.getAttribute("id");
		if (sSrcPopup == sMenu && sAi!=sId){
 			oTxt.click();
			oMnuBar.setAttribute("ai",sId);
		}
	}
}
function sapUrMapi_MenuBar_keyDown(sMenuId,e) {
}
function sapUrMapi_MenuBarItem_keyDown(sItemId,iCurrentIndex,sPopupId,oEvt) {
 	if (!sapUrMapi_checkKey(oEvt,"keydown",new Array("35","36","37","39","9","40"))) 
 		return false;
	var sId= ur_EVT_src(oEvt).parentNode.parentNode.getAttribute("id");
 	var o = ur_MenuBar_getObj(sId,oEvt);
 	var oMenuItem=o.items[iCurrentIndex];
 	var iKey=oEvt.keyCode;
	
 	if (iKey==40 && !ur_isSt(oMenuItem,ur_st.DISABLED)) {
		if (oMenuItem.onclick) 
	 		oMenuItem.onclick();
	 	else if (oMenuItem.oncontextmenu)
			oMenuItem.oncontextmenu();
	}
	
	if (ur_system.browser_abbrev == "ie6") {
		if(ur_KY_nav(oEvt,o)&&oEvt.keyCode!=9) {
			return ur_EVT_cancel(oEvt);
		}
	}
}
var ur_pullDownMenu = false;
function sapUrMapi_MenuBarItem_click(sItemId,sPopupId,oEvt) {
  ur_pullDownMenu = true;
  sapUrMapi_PopupMenu_showMenu(sItemId,sPopupId,sapPopupPositionBehavior.MENULEFT,oEvt);
  ur_EVT_cancel(oEvt);
}
function sapUrMapi_MenuBar_focus(sMenuId,oEvt) {
	 	var oMenu = ur_get(sMenuId);
	 	var oMenuItem = oMenu.firstChild;
	 	if(!ur_system.is508)
	 		while(ur_isSt(oMenuItem,ur_st.DISABLED) && oMenuItem!=null)
	 			oMenuItem=oMenuItem.nextSibling;
	 	if(oMenuItem!=null){
	 		sapUrMapi_setTabIndex(oMenuItem,0);
	 		ur_focus(oMenuItem);
	 	sapUrMapi_setTabIndex(oMenu,-1);
	 }
}
function sapUrMapi_MenuBarItem_focus(oEvt){ur_EVT_cancel(oEvt);}
function ur_MenuBar_getObj(sMenuId,oEvt) {
	var o = {
			ref:ur_getRootObj(ur_EVT_src(oEvt)),
			items:new Array,
			fidx:0
			};
	o.ref["kb"]="h";
	o.items["rfl"]=true;
	
	var aItems=o.ref.childNodes;
	
	for (var i=0;i<aItems.length;i++){
		if(aItems[i].getAttribute("idx")!=null)
    		o.items.push(aItems[i]);
	}
	return o;
}
//** MessageBar.ie5 **
enumUrMessageBarType = {ERROR:"Error",WARNING:"Warning",OK:"Ok",STOP:"Stop",LOADING:"Loading",NONE:"None",TEXT:"Text",ALERT:"Alert",INFO:"Info",NOTIFICATION:"Notif",TASK:"Task"};
function sapUrMapi_MessageBar_setAccText(sId,vMessageBarType) {
	var oMBar = ur_get(sId);
	var oMTxt = ur_get(sId+"-txt");
	var sMTxt = oMTxt.innerText;
	if (oMTxt.getAttribute("tt")!=null && oMTxt.getAttribute("tt")!="") sMTxt=oMTxt.getAttribute("tt");
	var sType = vMessageBarType.toUpperCase(); 
	var bHasConId = oMBar.onclick!=null;
	var sTxt = "";
	if (bHasConId) sTxt="SAPUR_MSG_JUMPKEY"; 
	if (vMessageBarType!=enumUrMessageBarType.TEXT) {
		if (ur_system.is508) {
			oMBar.title=getLanguageText("SAPUR_MSG",new Array("SAPUR_MSG_"+sType,sMTxt,sTxt));
		} else {
		  oMBar.title=sMTxt;
		}
	} else {
		if (ur_system.is508) {
			oMBar.title=getLanguageText("SAPUR_MSG",new Array("",sMTxt,sTxt));
		} else {
		  oMBar.title=sMTxt;
		}
	}
}
function sapUrMapi_MessageBar_setType(sId,vMessageBarType) {
	var oMBar = ur_get(sId);
	sapUrMapi_MessageBar_setAccText(sId,vMessageBarType);
	if (vMessageBarType==enumUrMessageBarType.NONE) {
		oMBar.style.display = 'none';
		return;
	} else {
		if (vMessageBarType==enumUrMessageBarType.ERROR || vMessageBarType==enumUrMessageBarType.STOP) oMBar.className="urMsgBarErr";
		else oMBar.className="urMsgBarStd";
		oMBar.style.display = 'block';
    var oMBarImg  = ur_get(sId+"-img");
    if (vMessageBarType!=enumUrMessageBarType.TEXT) {
    	oMBarImg.style.display="inline";
      oMBarImg.className = "urMsgBarImg"+vMessageBarType;
    } else {
    	oMBarImg.style.display="none";
    }
	}
}
function sapUrMapi_MessageBar_getType(sId) {
	var oMBar = ur_get(sId);
  if (oMBar.style.display == 'none') {
  	return enumUrMessageBarType.NONE;
  } else {
    var oMBarImg  = ur_get(sId+"-img");
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.ERROR)>-1) return enumUrMessageBarType.ERROR;
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.WARNING)>-1) return enumUrMessageBarType.WARNING;
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.LOADING)>-1) return enumUrMessageBarType.LOADING;
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.STOP)>-1) return enumUrMessageBarType.STOP;
    if ((oMBarImg.className).indexOf(enumUrMessageBarType.OK)>-1) return enumUrMessageBarType.OK;
	if ((oMBarImg.className).indexOf(enumUrMessageBarType.ALERT)>-1) return enumUrMessageBarType.ALERT;
	if ((oMBarImg.className).indexOf(enumUrMessageBarType.INFO)>-1) return enumUrMessageBarType.INFO;
	if ((oMBarImg.className).indexOf(enumUrMessageBarType.NOTIFICATION)>-1) return enumUrMessageBarType.NOTIFICATION;
	if ((oMBarImg.className).indexOf(enumUrMessageBarType.TASK)>-1) return enumUrMessageBarType.TASK;
    if ((oMBarImg.style.display).indexOf("none")>-1) return enumUrMessageBarType.TEXT;
  }
}
function sapUrMapi_MessageBar_setText(sId,sText) {
	var oMBarText = ur_get(sId+"-txt");
	oMBarText.innerHTML = sText;
	sapUrMapi_MessageBar_setAccText(sId,sapUrMapi_MessageBar_getType(sId));
}
function sapUrMapi_MessageBar_getText(sId) {
	var oMBarText = ur_get(sId+"-txt");
	return oMBarText.innerHTML;
}
function sapUrMapi_MessageBar_navigateToField(sId,sConId,oEvt) {
  
  if ((oEvt.type=="click") || (sapUrMapi_checkKey(oEvt,"keydown",new Array("32")))) {
    
    ur_EVT_cancel(oEvt);
    sapUrMapi_triggerFocus(sConId);
  }
}
function ur_MB_click(sId,sConId,oEvt){
	if(oEvt.type!="click" && oEvt.keyCode!="32") return;
	var oSrc=ur_EVT_src(oEvt);
	if(oSrc.tp=="H")
		ur_EVT_fire(oSrc,"ocl",oEvt);
	else{
		var oMb=sapUrMapi_getRootControl(oSrc);
		ur_EVT_fire(oMb,"ocl",oEvt);
	}
}
function sapUrMapi_HelpLnk_click(sId,sConId,oEvt){}

//** NavigationList.ie5 **

function ur_NL_getItem(oEvt){
	var oItm=ur_EVT_src(oEvt);
	while(ur_getAttD(oItm,"idx","")==""){ 
		oItm=oItm.parentNode;
		if (!oItm || oItm.tagName=="BODY") return null;
	}
	return oItm;
}
function ur_NL_getGroup(oEvt){
	var oItm=ur_EVT_src(oEvt);
	while(ur_getAttD(oItm,"gidx","")==""){ 
		oItm=oItm.parentNode;
		if (!oItm || oItm.tagName=="BODY") return null;
	}
	return oItm;
}
function ur_NL_cl(oEvt){
	var oSrcElement = ur_EVT_src(oEvt);
	var oNL = sapUrMapi_getRootControl(oSrcElement);
	var sId = oNL.getAttribute("id");	
	var o = ur_NL_getObj(sId);
	
	for(i=0; i<o.items.length; i++){
		if(oSrcElement.id==o.items[i].id){
			o.ref.setAttribute("iFidx",i);
			break;
		}
	}
  	if (ur_FRA_cl(oEvt)) return;
	var oItm=ur_NL_getItem(oEvt);
	
	if (oItm==null) {
	  oItm=ur_NL_getGroup(oEvt);
	  if (oItm!=null) {
		  ur_EVT_fire(oItm,"ogc",oEvt);
	  } else {
	  	if (oSrcElement.className.indexOf("MnuIco") > -1) {
			
			if (oSrcElement.tagName == "IMG") {
				oItm = oSrcElement.parentNode.previousSibling;
			}
		}
	  }
	}
	if(oItm==null) return;
	if (ur_getAttD(oItm,"st","").indexOf("d")>-1) return;
	var sMenuId=oItm.parentNode.getAttribute("pop");
	var sChildId=oItm.getAttribute("id");
	
	if(sMenuId!=null && sMenuId!=""){
		if (ur_system.direction=="rtl")
		  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENULEFT,oEvt);
		else
	 	  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENURIGHT,oEvt);
	}
	else{
	  ur_EVT_fire(oItm,"oic",oEvt);
	}
}
function ur_NL_keyNav(oEvt){
	var oSrcElement = ur_EVT_src(oEvt);
	var oNL = sapUrMapi_getRootControl(oSrcElement);
	var sId = oNL.getAttribute("id");	
	var o = ur_NL_getObj(sId);
	var iKey = oEvt.keyCode;
	var oItem = null;
	var iFidx=o.ref.getAttribute("iFidx");
	if(iFidx==null)
		iFidx=o.items.selidx;
	if(iFidx==null)
		iFidx=0;
		
	if(iKey==40 && oSrcElement!=o.end){
		if(oSrcElement==o.ref && o.items.selected!=null || oSrcElement==o.ref.pers && o.items.selected!=null)
		   oItem=ur_get(o.items.selected);
		else if(oSrcElement==o.ref && o.items.selected==null || oSrcElement==o.ref.pers && o.items.selected==null)
			oItem=o.items[0];
		else{
			if(iFidx<=o.items.length ){
				iFidx=iFidx+1;
				oItem=o.items[iFidx];
			}else
				return;
		}
			
	}
	else if(iKey==38 && oSrcElement!=o.end && oSrcElement!=o.ref){
		iFidx=iFidx-1;
		if(iFidx>=0){
		   oItem=o.items[iFidx];
		}else
		   return;
	}
	else if(iKey==9){
		 if(oEvt.shiftKey){ 
		 	if(oSrcElement!=o.ref && oSrcElement!=o.end && o.ref.pers==null){
			   oItem=o.ref;
			   if(o.items.selected==null)
			   	  iFidx=0;
			   	else
			   	  iFidx=o.items.selidx;
			}
			else if(oSrcElement!=o.ref && oSrcElement!=o.end && o.ref.pers!=null && oSrcElement!=o.ref.pers ){
			   oItem=o.ref.pers;
			   iFidx=0;
			}
			else if(oSrcElement==o.end){
				if(o.items.selected==null){
					oItem=o.items[o.items.length-1];
					iFidx=o.items.length-1;
				}else{
				   oItem=o.items[o.items.selidx];
				   iFidx=o.items.selidx;
				}
			}
			else if(oSrcElement==o.ref.pers)
				oItem=o.ref;
		 }
		 if(!oEvt.shiftKey){
		 	if(oSrcElement!=o.ref && oSrcElement!=o.end && oSrcElement!=o.ref.pers){
	 			oItem=o.end;
	 			iFidx=o.items.length-1;
	 		}
			else if((oSrcElement==o.ref && o.ref.pers==null) || oSrcElement==o.ref.pers){
				if(o.items.selected==null){
					oItem=o.items[0];
					iFidx=0;
				}
				else{
					oItem=o.items[o.items.selidx];
					iFidx=o.items.selidx;
				}
			}
		 }
	}
	
	if(iFidx<o.items.length)
	    o.ref.setAttribute("iFidx",iFidx);
	
	if(oItem!=null){
		try{
			sapUrMapi_setTabIndex(oItem,0);
			ur_focus(oItem);
		} catch(err){}
		return ur_EVT_cancel(oEvt);
	}
}
function ur_NL_getObj(sId){
		var oNL=ur_get(sId);
		var oCnt=ur_get(sId+"-cnt");
		var o = {
			ref:oNL,
			items:new Array(),
			end:ur_get(sId+"-end")
			};
	o.ref["pers"]=ur_get(sId+"-pers");
	var oItems=oCnt.getElementsByTagName("TD");
	for(i=0; i<oItems.length; i++){
		if(oItems[i].getAttribute("idx")!=null || oItems[i].getAttribute("gidx")!=null){
			o.items.push(oItems[i]);
		}
				
	}
	for(i=0; i<o.items.length; i++){
		if(o.items[i].getAttribute("sel")!=null){
		   o.items["selected"]=o.items[i].getAttribute("sel");
		}
		if(o.items[i].id==o.items.selected){
		   o.items["selidx"]=i;
		   break; 
		}
	}
		return o;
}
function ur_NL_kd(oEvt){
	var o = ur_EVT_src(oEvt);
	 o = sapUrMapi_getRootControl(o);
	var sId = o.getAttribute("id");	
	var oSrcElement=ur_EVT_src(oEvt);
	
  if(oEvt.keyCode==9 || oEvt.keyCode==38 || oEvt.keyCode==40){
	ur_NL_keyNav(oEvt);
   }
   else if(oEvt.keyCode==107 && ur_isSt(o,ur_st.COLLAPSED) && oSrcElement.ct=="NL")
	 {
		if (ur_isSt(o,ur_st.COLLAPSED))
		{
			mf_FRA_exp(sId);
		}
		return ur_EVT_cancel(oEvt);
	 }
	 
	 else if(oEvt.keyCode==109 && oSrcElement.ct=="NL")
	 {
		 if (ur_isSt(o,ur_st.EXPANDED))
		 {
			 mf_FRA_col(sId);
		 }
		 return ur_EVT_cancel(oEvt);
	 }
	
	else if(oEvt.keyCode==32 || oEvt.keyCode==13){
		ur_EVT_src(oEvt).click();
		return ur_EVT_cancel(oEvt);
	}	
	
	else if(oEvt.keyCode==39 || oEvt.keyCode==115){
		var oMnuNode=ur_NL_getPrevObj(ur_NL_getItem(oEvt),"pop");
		var sSt = oSrcElement.getAttribute("st");
		
		if(oMnuNode==null || sSt=="d" || sSt==null)return ur_EVT_cancel(oEvt);
		else {
			sChildId=oSrcElement.getAttribute("id");
			sMenuId=oMnuNode.getAttribute("pop");
				if (ur_system.direction=="rtl")
				  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENULEFT,oEvt);
				else
			 	  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENURIGHT,oEvt);
			return ur_EVT_cancel(oEvt);
		}
	}
	else
		return sapUrMapi_skip(sId,oEvt);
}
function ur_NL_getPrevObj(o,sAt){
		if(!o || !sAt) return null;
		while(ur_getAttD(o,sAt,"")==""){ 
			o=o.parentNode;
			if (!o || o.getAttribute("ct")=="NL") return null;
		}
	return o;
}

//** Paginator.ie5 **

UR_PAGINATOR_BUTTON = {BEGIN:0, PREVIOUS_PAGE:1, PREVIOUS_ITEM:2,NEXT_ITEM:3,NEXT_PAGE:4,END:5};
function sapUrMapi_Paginator_setStates(sId, arrBtns, arrStates) {
	var oPaginator  = ur_get(sId);
	var oButton;
	var bHorizontal = oPaginator.getAttribute("ur_direction")=="horizontal";
	for (var n=0;n<arrBtns.length;n++) {
		try {
		  oButton= ur_get(sId+"-btn-"+arrBtns[n]);
		  if (oButton==null) continue;
		} catch (e) {
		  continue;
		}
		if (arrStates[n]) {
		  if (ur_isSt(oButton,ur_st.DISABLED)) {
		  	var arrClass=oButton.className.split(" ");
		  	arrClass[0]=arrClass[0].replace("Dsbl","");
		  	arrClass[2]=arrClass[2].replace("Dsbl","");
		  	oButton.className=arrClass.join(" ");
		  	ur_setSt(oButton,ur_st.DISABLED,false);
		  	oButton.setAttribute("href","javascript:void(0)");
		  }
		} else {
		  if (!ur_isSt(oButton,ur_st.DISABLED)) {
		  	var arrClass=oButton.className.split(" ");
		  	arrClass[0]=arrClass[0]+"Dsbl";
		  	arrClass[2]=arrClass[2]+"Dsbl";
		  	oButton.className=arrClass.join(" ");
		  	oButton.href=null;
		  	ur_setSt(oButton,ur_st.DISABLED,true);
		  	oButton.removeAttribute("href");
		  }
		}
	}
  sapUrMapi_Focus_showFocusRect();
}
function sapUrMapi_Paginator_buttonDisabled(o) {
  if (o.ct=="PG") return true;
  return ur_isSt(o,ur_st.DISABLED);
}
function sapUrMapi_Paginator_getInputValue(sId) {
  var oInp=ur_get(sId+"-inp");
  if (oInp!=null) return parseInt(oInp.value);
}
function sapUrMapi_Paginator_setInputValue(sId,iNewValue) {
  var oInp=ur_get(sId+"-inp");
  if (oInp!=null) oInp.value=iNewValue;
}
function sapUrMapi_Paginator_click(sId,sConId,oEvt) {
  var o=ur_EVT_src(oEvt);
  if (o.id.indexOf("-btn")==-1) return;
  if (!sapUrMapi_Paginator_buttonDisabled(o)) {
    ur_EVT_fire(o,"ocl",oEvt);
  }
}
function sapUrMapi_Paginator_keydown(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
  if (o.id.indexOf("-btn")==-1) return;
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
     sapUrMapi_triggerClick(oEvt,new Array("32"),o.parentNode); 
  }
  if ((o.id.indexOf("-menu")>-1) && ((oEvt.keyCode==40) || (oEvt.keyCode==13)|| (oEvt.keyCode==32))) {
    return ur_EVT_cancel(oEvt);
  }
  if (oEvt.keyCode>36 && oEvt.keyCode<41) {
	  return ur_EVT_cancel(oEvt);
  }
  if (oEvt.keyCode==32) {
	  return ur_EVT_cancel(oEvt);
  }
  if (oEvt.keyCode>=33 && oEvt.keyCode<=36) {
    var oBtn=null;
		if (oEvt.keyCode==33) { 
			oBtn=ur_get(sId+"-btn-1");
		}
		if (oEvt.keyCode==34) { 
			oBtn=ur_get(sId+"-btn-4");
		}
		if (oEvt.keyCode==36) { 
			oBtn=ur_get(sId+"-btn-0");
		}
		if (oEvt.keyCode==35) { 
			oBtn=ur_get(sId+"-btn-5");
		}
    if (oBtn!=null) { 
      sapUrMapi_focusElement(oBtn.id);
      if (!sapUrMapi_Paginator_buttonDisabled(oBtn)) {
        ur_EVT_fire(oBtn,"ocl",oEvt);
      }
    }
	}
}
function sapUrMapi_Paginator_navBegin(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		var arrButtonArray = new Array();
		arrButtonArray[0]=UR_PAGINATOR_BUTTON.PREVIOUS_PAGE;
		arrButtonArray[1]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
		arrButtonArray[2]=UR_PAGINATOR_BUTTON.BEGIN;
		arrButtonArray[3]=UR_PAGINATOR_BUTTON.NEXT_PAGE;
		arrButtonArray[4]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
		arrButtonArray[5]=UR_PAGINATOR_BUTTON.END;
		var arrStateArray = new Array();
		arrStateArray[0]=false;
		arrStateArray[1]=false;
		arrStateArray[2]=false;
		arrStateArray[3]=true;
		arrStateArray[4]=true;
		arrStateArray[5]=true;
		sapUrMapi_Paginator_setStates(sId,arrButtonArray,arrStateArray);
		try {
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      sapUrMapi_bounceItem(sConId,-1,"PCSEQ");
			if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_bounceItem(sConId,-1,"PCTAB");
	  } catch (ex) {}  
		return true;
  }
  return false
}
function sapUrMapi_Paginator_navEnd(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		var arrButtonArray = new Array();
		arrButtonArray[0]=UR_PAGINATOR_BUTTON.NEXT_PAGE;
		arrButtonArray[1]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
		arrButtonArray[2]=UR_PAGINATOR_BUTTON.END;
		arrButtonArray[3]=UR_PAGINATOR_BUTTON.PREVIOUS_PAGE;
		arrButtonArray[4]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
		arrButtonArray[5]=UR_PAGINATOR_BUTTON.BEGIN;
		var arrStateArray = new Array();
		arrStateArray[0]=false;
		arrStateArray[1]=false;
		arrStateArray[2]=false;
		arrStateArray[3]=true;
		arrStateArray[4]=true;
		arrStateArray[5]=true;
		sapUrMapi_Paginator_setStates(sId,arrButtonArray,arrStateArray);
		try {
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      sapUrMapi_bounceItem(sConId,1,"PCSEQ");
			if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_bounceItem(sConId,1,"PCTAB");
	  } catch (ex) {}  
		return true;
  }
  return false;
}
function sapUrMapi_Paginator_navPrevPage(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		try {
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      ur_PcSeq_pageItem(sConId,-1,"PCSEQ");
			if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_pageItem(sConId,-1,"PCTAB");				
	  } catch (ex) {}  
		return true;
  }
  return false;
}
function	sapUrMapi_Paginator_navNextPage(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		try {
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      ur_PcSeq_pageItem(sConId,1,"PCSEQ");
	        if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_pageItem(sConId,1,"PCTAB");
			
	  } catch (ex) {}  
		return true;
  }
  return false;
}
function sapUrMapi_Paginator_navPrev(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
		try {
	    if (sapUrMapi_getControlType(sConId)=="PHI") 
	        sapUrMapi_PhaseIndicator_paging(sConId,"BACK");
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      ur_PcSeq_scrollItem(sConId,-1,"PCSEQ");
			if (sapUrMapi_getControlType(sConId)=="PCTAB") 
				sapUrMapi_scrollItem(sConId,-1,"PCTAB");
			if(sapUrMapi_getControlType(sConId)=="TS")
			{
				ur_IScr_toPrevItem(sConId);
				var oCon = ur_get(sConId);
				var ifocIdx = parseInt(oCon.getAttribute('fidx'));
				if(ifocIdx > 0)
					ur_TS_setTabIdx(sConId,ifocIdx,-1);					
			    ur_EVT_addParam(oEvt,"FirstVisibleItemIdx",ur_IScr[sConId].first);
			}
	    } catch (ex) {}  
		return true;
  }
  return false;
}
function sapUrMapi_Paginator_navNext(sId,sConId,oEvt) {
  o=ur_evtSrc(oEvt);
	if (!sapUrMapi_Paginator_buttonDisabled(o)) {
    try {
	    if (sapUrMapi_getControlType(sConId)=="PHI") 
	      sapUrMapi_PhaseIndicator_paging(sConId,"FURTHER");
	    if (sapUrMapi_getControlType(sConId)=="PCSEQ") 
	      ur_PcSeq_scrollItem(sConId,1,"PCSEQ");
	    if (sapUrMapi_getControlType(sConId)=="PCTAB") 
	      sapUrMapi_scrollItem(sConId,1,"PCTAB");
		if(sapUrMapi_getControlType(sConId)=="TS")
		{
		  ur_IScr_toNextItem(sConId);	      	      
		  var oCon = ur_get(sConId);
		  var ifocIdx = parseInt(oCon.getAttribute('fidx'));
		  var iCount = parseInt(oCon.getAttribute('ic'));
		  if(ifocIdx < iCount )
			ur_TS_setTabIdx(sConId,ifocIdx,-1);
		  ur_EVT_addParam(oEvt,"FirstVisibleItemIdx",ur_IScr[sConId].first);
		}
	  } catch (ex) {}  
		return true;
  }
  return false;
}
function sapUrMapi_Paginator_showMenu(sId,sMenuId,sConId,oEvt) {
  if (oEvt.type=="click" || (oEvt.keyCode==40) || (oEvt.keyCode==13)|| (oEvt.keyCode==32)) {
    if (sapUrMapi_getControlType(sConId)=="TS") {
      sId=sConId+"-pg";
    }
    sapUrMapi_PopupMenu_showMenu(sId+"-menu",sMenuId,sapPopupPositionBehavior.MENURIGHT,oEvt);
  }
  return false;
}
function ur_Paginator_triggerClick(sId,enumButton) {
  var oBtn=null;
	oBtn=ur_get(sId+"-btn-"+enumButton);
  if (oBtn!=null) { 
    if (!sapUrMapi_Paginator_buttonDisabled(oBtn)) {
      oBtn.click();
      return true;
    }
  }
}
function sapUrMapi_Paginator_enrichParameters(sConId) {
	try {
		if (sapUrMapi_getControlType(sConId)=="PHI") {
	  	return sapUrMapi_PhaseIndicator_getFirstVisible(ur_get(sConId));
	   }
	} catch (ex) {}  
	return "";
}
function sapUrMapi_Paginator_removeFromTabChain(sId) {
  var o=ur_get(sId);
  if (!o.hasChildNodes) return;
  var oC=o.childNodes;
  for (var i=0;i<oC.length;i++) sapUrMapi_setTabIndex(oC[i],-1);
}

//** PatternContainerContentItem.nn6 **

function sapUrMapi_Pc_Resize(sId) {
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
}
function sapUrMapi_Pc_RegisterCreate(sId) {
	sapUrMapi_PcTabSeq_Create(sId);
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
}
function sapUrMapi_Pc_toggle(sId, sCtlType, e) {
	if ((e.type!="click") && (!sapUrMapi_checkKey(e,"keydown",new Array("32","30")))) return false;
	e.cancelBubble=true;
	var tbdy = ur_get(sId+"-tbd");
	var tbl = tbdy.parentNode;
	var tbar = ur_get(sId+"-tbar");
	var thead = ur_get(sId+"-hd");
	var ico = ur_get(sId+"-exp");
	if ( tbdy != null && ico != null ) {
		if ( tbdy.style.display == "none" ) {
			if (tbar) tbar.style.display = "";
			tbdy.style.display = "";
			
			if (tbl.getAttribute("sized") != "true"){
				sapUrMapi_Pc_Create(sId, tbl.getAttribute("scrolltype"), false );
			}
			if (ico.className.indexOf("urPcExpClosedIco") != -1){ ico.className = ico.className.replace("urPcExpClosedIco", "urPcExpOpenIco");}
			if (thead != null && thead.className == "urPcHdBgClosedIco" ){ thead.className = "urPcHdBgOpenIco";}
			if (ur_system.is508) {
				ico.title=getLanguageText(sCtlType + "_COLLAPSE",new Array(thead.innerText,sCtlType + "_COLLAPSE_KEY"));
			}
		} else {
			if (tbar){ tbar.style.display = "none";}
			var helper = tbdy.parentNode.offsetWidth;
			tbdy.style.display = "none";
			tbdy.parentNode.style.width=helper+"px";
			if (ico.className.indexOf("urPcExpOpenIco") != -1 ){ ico.className = ico.className.replace("urPcExpOpenIco", "urPcExpClosedIco");}
			if (thead != null && thead.className == "urPcHdBgOpenIco" ){ thead.className = "urPcHdBgClosedIco";}
			if (ur_system.is508) {
				ico.title=getLanguageText(sCtlType + "_EXPAND",new Array(thead.innerText, sCtlType + "_EXPAND_KEY"));
			}
	}
		
		sapUrMapi_focusElement(sId+"-exp")
}
	return true;
}
function sapUrMapi_Pc_showOptionMenu(sId,e) {
  var sTrayId=sId;
  var sTriggerId=sId+"-menu";
  var sMenuContentId=ur_get(sTriggerId).getAttribute("mid");
 	if (ur_system.direction=="rtl")
	  var enumPositionBehavior=sapPopupPositionBehavior.MENULEFT;
	else
	  var enumPositionBehavior=sapPopupPositionBehavior.MENURIGHT;
  var sControlType=sapUrMapi_getControlTypeFromObject(ur_get(sId));
	switch (sControlType) {
		case "PCTAB" :
			if (e.type!="click") {
				if (sapUrMapi_checkKey(e,"keydown",new Array("32","40","13"))){
					sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
				}
				else if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))) {
					var intTabCount = parseInt(ur_get(sTrayId + "-tbl").getAttribute("tabcount"));
					if (ur_system.direction=="rtl") {
					  sapUrMapi_PcTabs_focusItem(sTrayId,null,null,e.keyCode==37,e.keyCode==39);
					} else {
					  sapUrMapi_PcTabs_focusItem(sTrayId,null,null,e.keyCode==39,e.keyCode==37);
					}
					return;
				}
				else {
					return false;
				}
			}
			else {
				sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
			}
			break;
		case "PCSEQ" :
			if (e.type!="click") {
				if (sapUrMapi_checkKey(e,"keydown",new Array("32","40","13"))){
					sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
				}
				else if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))) {
					var intTabCount = parseInt(ur_get(sTrayId + "-tbl").getAttribute("tabcount"));
					if (ur_system.direction=="rtl") {
					  sapUrMapi_PcSeq_focusItem(sTrayId,null,null,e.keyCode==37,e.keyCode==39);
					} else {
					  sapUrMapi_PcSeq_focusItem(sTrayId,null,null,e.keyCode==39,e.keyCode==37);
					}
					return;
				}
				else {
					return false;
				}
			}
			else {
				sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
			}
			break;
		case "PCTIT" :
			if (e.type!="click") {
				if (sapUrMapi_checkKey(e,"keydown",new Array("32","40","13"))){
					sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
				}
			}
			else {
			  sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
			}
			break;
		default :
			return;
	}
}
function sapUrMapi_PcTab_Resize(sId) {
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
}
function sapUrMapi_PcTabSeq_RegisterCreate(sId) {
	sapUrMapi_PcTabSeq_Create(sId);
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
}
var sapUrMapi_PcTabSeq_Registry = new Array();
function sapUrMapi_PcTabSeq_Create(sId) {
	sapUrMapi_PcTabSeq_Registry[sId] = false;
	
	var bCollapsed = ur_get(sId).getAttribute("collapsed");
	var tbl = ur_get(sId + "-tbd").parentNode;
	if (bCollapsed == "true"){
		tbl.setAttribute("sized", "false");
	}
	else{
		tbl.setAttribute("sized", "true");
	}
	
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_PcTabSeq_Draw('" + sId + "')");
	sapUrMapi_PcTabSeq_Registry[sId] = true;
}
function sapUrMapi_PcTabSeq_Draw() {
	var divlist = new Array();
	var tbdylist = new Array();
	var iIdx = "null";
	for (var ctls in sapUrMapi_PcTabSeq_Registry) {
		if (ctls.indexOf("_") == 0) {continue;}
		var tbdy = ur_get(ctls + "-tbd");
		tbdylist[ctls] = tbdy;
		divlist[ctls] = null;
		if (tbdy.style.display == "none") {
			continue;
		}
		iIdx = ur_get(ctls + "-tbl").getAttribute("selectedtab");
		if (iIdx == -9999) {
			iIdx = "Title";
		}
		var div = ur_get(ctls + "-cnt-" + iIdx);
		if (div==null) return;
		divlist[ctls] = div;
		for (i = 0; i < div.childNodes.length; i++) {
			if (div.childNodes[i].nodeType == 1) {div.childNodes[i].style.display = "none";}
		}
	}
	for (var ctls in sapUrMapi_PcTabSeq_Registry) {
		if ((ctls.indexOf("_") == 0) || (tbdylist[ctls].style.display == "none")) {
			continue;
		}
		var div = divlist[ctls];
		var maxWidth = parseInt(div.offsetWidth);
		for (var i = 0; i < div.childNodes.length; i++) {
			if (div.childNodes[i].nodeType == 1) {div.childNodes[i].style.width = (maxWidth - 1) + "px";}
		}
	}
	for (var ctls in sapUrMapi_PcTabSeq_Registry) {
		if ((ctls.indexOf("_") == 0) || (tbdylist[ctls].style.display == "none")) {
			continue;
		}
		var div = divlist[ctls];
		for (var i = 0; i < div.childNodes.length; i++) {
			if (div.childNodes[i].nodeType == 1) {
			if (div.childNodes[i].style.display == "none") {
				div.childNodes[i].style.display = "";
				}
			}
		}
	}
}
function sapUrMapi_PcTabs_getSelectedItemId(sTabStripId) {
  var oTabTable 	= ur_get(sTabStripId+"-tbl");
	var iSelTab			=	parseInt(oTabTable.getAttribute("selectedtab"));
	return sTabStripId+"-itm-"+iSelTab;
}
function sapUrMapi_PcTabs_focusItem(sTabStripId,iFocusIdx,iTabCount,bNext,bPrev) {
	var oTabTable = ur_get(sTabStripId+"-tbl");
	if (isNaN(iFocusIdx)) {iFocusIdx = parseInt(oTabTable.getAttribute("selectedtab"));}
	if (isNaN(iTabCount)) {iTabCount = parseInt(oTabTable.getAttribute("tabcount"));}
	var ico = ur_get(sTabStripId + "-menu");
	var iNewIndex=iFocusIdx;
	if (ico != null && ico.getAttribute("hasfocus") == "true") {
		if (bNext) {
			iNewIndex = parseInt(oTabTable.getAttribute("starttab"));
		}
		if (bPrev) {
			iNewIndex = parseInt(oTabTable.getAttribute("starttab")) - 1 + parseInt(oTabTable.getAttribute("vistabs"));
		}
	}
	else {
		if (bNext) {
			if (iFocusIdx<iTabCount-1) iNewIndex=iFocusIdx+1;
			else iNewIndex=0;
		}
		if (bPrev) {
			if (iFocusIdx>0) iNewIndex=iFocusIdx-1;
			else iNewIndex=iTabCount-1;
		}
	}
	oFocusedTab = ur_get(sTabStripId+"-itm-"+iNewIndex);
	if (oFocusedTab.style.display != "none") {
		var iOldFoc     = parseInt(oTabTable.getAttribute("focusedtab"));
		if (!isNaN(iOldFoc)) {
			sapUrMapi_setTabIndex(ur_get(sTabStripId+"-itm-"+iOldFoc+"-txt"),-1);
		}
		var oFoc = ur_get(sTabStripId+"-itm-"+iNewIndex+"-txt");
		sapUrMapi_setTabIndex(oFoc,0);
		
		sapUrMapi_focusElement(oFoc.id);
		oTabTable.setAttribute("focusedtab",iNewIndex);
		if (ico != null) {
			ico.setAttribute("hasfocus", "false");
		}
		if ((oFocusedTab.getAttribute("dsbl")=="true")&&(!ur_system.is508)) {
			sapUrMapi_PcTabs_focusItem(sTabStripId,iNewIndex,iTabCount,bNext,bPrev);
			return;
		}
	}
	else {
	    if (ico != null) {
			sapUrMapi_setTabIndex(ico,0);
			ico.setAttribute("hasfocus", "true");
			sapUrMapi_focusElement(ico.id);
	    }
	}
}
function sapUrMapi_PcTabs_enter (sId,e) {
	if (e.target.id==sId+"-skipstart") {
		if (sapUrMapi_Skip(sId,true,e)) return;
    if (!e.shiftKey) { 
		  if (sapUrMapi_checkKey(e,"keydown",new Array("9","39","37"))){
	      sapUrMapi_PcTabs_focusItem(sId);
			  e.cancelBubble=false;
		  }
	  }
	}
}
function sapUrMapi_PcTabs_setActiveItem(sId,iIdx) {
	with (document) {
		var oTabTable 	= getElementById(sId+"-tbl");
		var tbdy = getElementById(sId+"-tbd");
		var iSelTab			=	parseInt(oTabTable.getAttribute("selectedtab"));
		var iTabLength	=	parseInt(oTabTable.getAttribute("tabcount"));
		var iCurIdx = parseInt(oTabTable.getAttribute("starttab"));
		var iVisTabs = parseInt(oTabTable.getAttribute("vistabs"));
		if (isNaN(iIdx)) return;
		if (getElementById(sId+"-itm-"+iIdx).getAttribute("dsbl")=="true") return false; 
		if ((iTabLength==1) || (iSelTab==iIdx)) return true; 
		var oCurrentTxt  = getElementById(sId+"-itm-"+iSelTab+"-txt");
		var oCurrentCell = getElementById(sId+"-itm-"+iSelTab);
		var oCurrentCon = getElementById(sId+"-itm-"+iSelTab+"-c");
		var oClickedTxt  = getElementById(sId+"-itm-"+iIdx+"-txt");
		var oClickedCell = getElementById(sId+"-itm-"+iIdx);
		var oClickedCon = getElementById(sId+"-itm-"+iIdx+"-c");
		var oFirstImage  = getElementById(sId+"-p");
		var oLastImage   = getElementById(sId+"-n");
		if (oCurrentCell != null){
			oCurrentCell.className="urPcTbsLabelOff"; 
			oCurrentTxt.className = "urPcTbsTxtOff";  
			if (oCurrentCon != null){
				oCurrentCon.className = "urPcConOff";	
			}
		}
		oClickedTxt.className = "urPcTbsTxtOn";   
		oClickedCell.className="urPcTbsLabelOn";  
		if (oClickedCon != null){
			oClickedCon.className = "urPcConOn";	
		}
		
		if (iCurIdx != 0){
			if (iIdx!=iCurIdx){oFirstImage.className="urPcTbsFirstAngOffPrevOn"; }
			else{oFirstImage.className="urPcTbsFirstAngOnPrevOn"; }
		}
		else{
			if (iIdx!=iCurIdx){oFirstImage.className="urPcTbsFirstAngOffPrevOff"; }
			else{oFirstImage.className="urPcTbsFirstAngOnPrevOff"; }
		}
		
		if (iCurIdx + iVisTabs >= iTabLength){
			if (iIdx == iTabLength - 1){
				oLastImage.className="urPcTbsLastOnNextOff"; 
			}
			else{
				if (iIdx != (iCurIdx + iVisTabs - 1)){oLastImage.className="urPcTbsLastOffNextOff"; }
				else{oLastImage.className="urPcTbsLastOnNextOff"; }
			}
		}
		else{  
			if (iIdx != (iCurIdx + iVisTabs - 1))oLastImage.className="urPcTbsLastOffNextOn"; 
			else{oLastImage.className="urPcTbsLastOnNextOn"; }
		}
		
		if (iSelTab == iCurIdx){
			getElementById(sId+"-itm-"+(iSelTab)+"-a").className="urPcTbsAngOffOff";
			getElementById(sId+"-itm-"+(iSelTab+1)+"-a").className="urPcTbsAngOffOff";
		} else  {
			getElementById(sId+"-itm-"+(iSelTab)+"-a").className="urPcTbsAngOffOff";
			if (iSelTab != iTabLength - 1){
				getElementById(sId+"-itm-"+(iSelTab+1)+"-a").className="urPcTbsAngOffOff";
			}
		}
		
		if (iIdx==iCurIdx){
			getElementById(sId+"-itm-"+(iIdx)+"-a").className="urPcTbsAngOffOn";
			getElementById(sId+"-itm-"+(iIdx+1)+"-a").className="urPcTbsAngOnOff";
		} else {
			getElementById(sId+"-itm-"+(iIdx)+"-a").className="urPcTbsAngOffOn";
			if (iIdx != iTabLength - 1) {
				getElementById(sId+"-itm-"+(iIdx+1)+"-a").className="urPcTbsAngOnOff";
			}
		}
		oTabTable.setAttribute("selectedtab",iIdx); 
		sapUrMapi_PcTabs_focusItem(sId,iIdx); 
		
		var oCurrentContent  = getElementById(sId+"-cnt-"+iSelTab);
		var oClickedContent  = getElementById(sId+"-cnt-"+iIdx);
		
		if (tbdy.style.display != "none") {
			var maxwidth = parseInt(oCurrentContent.clientWidth);
			for (var i = 0; i < oClickedContent.childNodes.length; i++){
				oClickedContent.childNodes[i].style.width = (maxwidth - 1) + "px";
				}
			}
		
		oClickedContent.className = "urPcTbsDspSel";
		oCurrentContent.className = "urPcTbsDsp";
	}
	if (ur_system.is508) {
		oClickedTxt.title = getLanguageText("SAPUR_PCTABS_ITEM",new Array(oClickedTxt.innerText,"SAPUR_PCTABS_ITEM_SELECTED"));
		oCurrentTxt.title = getLanguageText("SAPUR_PCTABS_ITEM",new Array(oCurrentTxt.innerText,"SAPUR_PCTABS_ITEM_ENABLED"));
	}
	return true
}
function sapUrMapi_PcTabs_keySelect(sId, iSelectedIdx, iTabCount,e) {
	if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))){
	  if (ur_system.direction=="rtl") {
	    sapUrMapi_PcTabs_focusItem(sId,iSelectedIdx,iTabCount,e.keyCode==37,e.keyCode==39);
		return;
	  } else {
		sapUrMapi_PcTabs_focusItem(sId,iSelectedIdx,iTabCount,e.keyCode==39,e.keyCode==37);
		return;
	  }
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("32"))){
		sapUrMapi_PcTabs_setActiveItem(sId,iSelectedIdx,0,false);
		return;
	}
}
function sapUrMapi_scrollItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != -1 && iDir != 1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	var diff = vistabs;
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs - 1;}
	}
	if (lasttab != firsttab + vistabs - 1){
		diff = lasttab - firsttab;
	}
	if (iDir == 1){
		
		if (lasttab == tabcount - 1){return false;}
		
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, false, true, false);
		
		firsttab += 1;
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, true, false);
		if (diff > 2) {
			
			SCROLL_FUNCTIONS[sCtlType](sId, lasttab, true, false, false);
		}
		if (diff != 1) {
		
		lasttab += 1;
		SCROLL_FUNCTIONS[sCtlType](sId, lasttab, true, false, true);
	}
	else{
		
		lasttab = firsttab;
		SCROLL_FUNCTIONS[sCtlType](sId, lasttab, true, true, true);
		}
	}
	else{
		
		if (firsttab == 0){return false;}
		
		
		if (diff >= vistabs - 1){
			
			SCROLL_FUNCTIONS[sCtlType](sId, lasttab, false, false, true);
			
			lasttab -= 1;
			SCROLL_FUNCTIONS[sCtlType](sId, lasttab, true, false, true);
		}
		if (diff > 1) {
		
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, false, false);
		
		firsttab -= 1;
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, true, false);
	}
		else {
		
    SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, false, true);
		firsttab -= 1;
		SCROLL_FUNCTIONS[sCtlType](sId, firsttab, true, true, true);
		}
	}
	
	ICON_FUNCTIONS[sCtlType]( sId, firsttab, lasttab, tabcount );
	
	var newtabpage = Math.floor(firsttab / vistabs);
	oTabs.setAttribute("starttab", firsttab);
	oTabs.setAttribute("lasttab", lasttab);
	sapUrMapi_Pc_togglePager(sId)
}
function sapUrMapi_pageItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != 1 && iDir != -1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if ((iDir == -1 && firsttab == 0) || ( iDir == 1 && lasttab == tabcount -1)){
		return false;
	}
	
	if (((iDir == 1) && ((tabpage + iDir) * vistabs) < (tabcount)) ||
		((iDir == -1) && (tabpage + iDir >= 0) )){
		tabpage = tabpage + iDir;
	}
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, true, false);
			}
			else if (i == lasttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, true);
			}
			else{
			   SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, true);
		   }
		   else{
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, false);
		   }
		}
	}
	
	ICON_FUNCTIONS[sCtlType]( sId, lbound, ubound, tabcount );
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	sapUrMapi_Pc_togglePager(sId)
}
function sapUrMapi_boundsItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != 1 && iDir != -1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if ((iDir == -1 && firsttab == 0) || ( iDir == 1 && lasttab == tabcount -1)){
		return false;
	}
	
	if (iDir == 1){
		tabpage = Math.ceil(tabcount / vistabs) - 1;
	}
	else{
		tabpage = 0;
	}
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, true, false);
			}
			else if (i == lasttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, true);
			}
			else{
			   SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, true);
		   }
		   else{
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, false);
		   }
		}
	}
	
	ICON_FUNCTIONS[sCtlType]( sId, lbound, ubound, tabcount );
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	sapUrMapi_Pc_togglePager(sId)
}
function sapUrMapi_jumpItem( sId, iTab, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	var seltab = parseInt(oTabs.getAttribute("selectedtab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if (iTab >= tabcount || iTab < 0){
		return false;
	}
	
	var tabpage = Math.floor(iTab / vistabs);
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, true, false);
			}
			else if (i == lasttab){
				SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, true);
			}
			else{
			   SCROLL_FUNCTIONS[sCtlType](sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, true);
		   }
		   else{
				SCROLL_FUNCTIONS[sCtlType](sId, i, true, false, false);
		   }
		}
	}
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	sapUrMapi_Pc_togglePager(sId)
	
	
	SELECT_FUNCTIONS[sCtlType](sId, iTab, seltab, false);
	
	ICON_FUNCTIONS[sCtlType]( sId, lbound, ubound, tabcount );
}
function showTab(sId, iIdx, bShow, bIsFirst, bIsLast ){
	
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var tabimg = ur_get(sId + "-itm-" + iIdx + "-a");
	var tabcell = ur_get(sId + "-itm-" + iIdx);
	
	var conimg = ur_get(sId + "-itm-" + iIdx + "-ca");
	var concell = ur_get(sId + "-itm-" + iIdx + "-c");
	if (bShow){
		
		if (!bIsFirst && !bIsLast){
			tabimg.style.display = "";
			tabcell.style.display = "";
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "";
			}
		}
		else if (bIsFirst){
			tabimg.style.display = "none";
			tabcell.style.display = "";
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "none";
			}
		}
		else if (bIsLast && !bIsFirst){
			tabimg.style.display = "";
			tabcell.style.display = "";
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "";
			}
		}
	}
	else{
		
		tabimg.style.display = "none";
		tabcell.style.display = "none";
		if (concell != null){
			concell.style.display = "none";
			conimg.style.display = "none";
		}
	}
}
function setTabIcons( sId, firsttab, lasttab, tabcount ){
	var prev = ur_get(sId + "-p");
	var next = ur_get(sId + "-n");
	var first = ur_get(sId + "-itm-" + firsttab);
	var last = ur_get(sId + "-itm-" + lasttab);
	var prevtmp = prev.className;
	var nexttmp = next.className
	
	if (firsttab == 0){
		if (first.className.indexOf("LabelOn") != -1){
			prev.className = "urPcTbsFirstAngOnPrevOff";
		}
		else{
			prev.className = "urPcTbsFirstAngOffPrevOff";
		}
	}
	else{
		if (first.className.indexOf("LabelOn") != -1){
			prev.className = "urPcTbsFirstAngOnPrevOn";
		}
		else{
			prev.className = "urPcTbsFirstAngOffPrevOn";
		}
	}
	
	if (lasttab == tabcount - 1){
		if (last.className.indexOf("LabelOn") != -1){
			next.className = "urPcTbsLastOnNextOff";
		}
		else{
			next.className = "urPcTbsLastOffNextOff";
		}
	}
	else{
		if (last.className.indexOf("LabelOn") != -1){
			next.className = "urPcTbsLastOnNextOn";
		}
		else{
			next.className = "urPcTbsLastOffNextOn";
		}
	}
	prev.childNodes.item(0).className = "urPcTbsPreFirstAng";
	next.childNodes.item(0).className = "urPcTbsAfterLastAng";
}
try{
SCROLL_FUNCTIONS = {PCTAB:showTab,PCSEQ:showItem};
ICON_FUNCTIONS = {PCTAB:setTabIcons,PCSEQ:setSeqIcons}
SELECT_FUNCTIONS = {PCTAB:sapUrMapi_PcTabs_setActiveItem,PCSEQ:sapUrMapi_PcSeq_setActiveItem}
}catch(ex){};
function debug_jumpItem(elm){
	for (var i = 0; i < elm.options.length; i++){
		if (elm.options[i].selected == true){
			sapUrMapi_jumpItem( elm.getAttribute("control"), i, elm.getAttribute('controltype'));
		}
	}
}
function sapUrMapi_Pc_togglePager(sId) {
  if (ur_get(sId+"-pag")!=null) {
    var sPagerId=ur_get(sId+"-pag").firstChild.id;
  } else {
    return;
  }
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
  var arrButtonArray = new Array();
	var arrStateArray = new Array();
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.BEGIN;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.PREVIOUS_PAGE;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
	if (firsttab!=0) {
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	} else {
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	}
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.END;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.NEXT_PAGE;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
	if (lasttab!=tabcount-1) {
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	} else {
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	}
  sapUrMapi_Paginator_setStates(sPagerId,arrButtonArray,arrStateArray);
}
//** PatternContainerSequence.nn6 **

function ur_PcSeq_Resize(sId) {
	sapUrMapi_Resize_AddItem(sId, "ur_PcSeq_Draw('" + sId + "')");
}
function ur_PcSeq_RegisterCreate(sId) {
	ur_PcSeq_Create(sId);
	sapUrMapi_Create_AddItem(sId, "ur_PcSeq_Draw('" + sId + "')");
}
var ur_PcSeq_Registry = new Array();
function ur_PcSeq_Create(sId) {
	ur_PcSeq_Registry[sId] = false;
	
	var bCollapsed = ur_get(sId).getAttribute("collapsed");
	var tbl = ur_get(sId + "-tbd").parentNode;
	if (bCollapsed == "true"){
		tbl.setAttribute("sized", "false");
	}
	else{
		tbl.setAttribute("sized", "true");
	}
	
	sapUrMapi_Resize_AddItem(sId, "ur_PcSeq_Draw('" + sId + "')");
	ur_PcSeq_Registry[sId] = true;
}
function ur_PcSeq_Draw() {
	var divlist = new Array();
	var tbdylist = new Array();
	var iIdx = "null";
	for (var ctls in ur_PcSeq_Registry) {
		if (ctls.indexOf("_") == 0) {continue;}
		var tbdy = ur_get(ctls + "-tbd");
		tbdylist[ctls] = tbdy;
		divlist[ctls] = null;
		if (tbdy.style.display == "none") {
			continue;
		}
		iIdx = ur_get(ctls + "-tbl").getAttribute("selectedtab");
		if (iIdx == -9999) {
			iIdx = "Title";
		}
		var div = ur_get(ctls + "-cnt-" + iIdx);
		if (div==null) return;
		divlist[ctls] = div;
		for (i = 0; i < div.childNodes.length; i++) {
			if (div.childNodes[i].nodeType == 1) {div.childNodes[i].style.display = "none";}
		}
	}
	for (var ctls in ur_PcSeq_Registry) {
		if ((ctls.indexOf("_") == 0) || (tbdylist[ctls].style.display == "none")) {
			continue;
		}
		var div = divlist[ctls];
		var maxWidth = parseInt(div.offsetWidth);
		for (var i = 0; i < div.childNodes.length; i++) {
			if (div.childNodes[i].nodeType == 1) {div.childNodes[i].style.width = (maxWidth - 1) + "px";}
		}
	}
	for (var ctls in ur_PcSeq_Registry) {
		if ((ctls.indexOf("_") == 0) || (tbdylist[ctls].style.display == "none")) {
			continue;
		}
		var div = divlist[ctls];
		for (var i = 0; i < div.childNodes.length; i++) {
			if (div.childNodes[i].nodeType == 1) {
			if (div.childNodes[i].style.display == "none") {
				div.childNodes[i].style.display = "";
				}
			}
		}
	}
}
function ur_PcSeq_toggle(sId, sCtlType, e) {
	if ((e.type!="click") && (!sapUrMapi_checkKey(e,"keydown",new Array("32","30")))) return false;
	e.cancelBubble=true;
	var tbdy = ur_get(sId+"-tbd");
	var tbl = tbdy.parentNode;
	var tbar = ur_get(sId+"-tbar");
	var thead = ur_get(sId+"-hd");
	var ico = ur_get(sId+"-exp");
	if ( tbdy != null && ico != null ) {
		if ( tbdy.style.display == "none" ) {
			if (tbar) tbar.style.display = "";
			tbdy.style.display = "";
			
			if (tbl.getAttribute("sized") != "true"){
				sapUrMapi_Pc_Create(sId, tbl.getAttribute("scrolltype"), false );
			}
			if (ico.className.indexOf("urPcExpClosedIco") != -1){ ico.className = ico.className.replace("urPcExpClosedIco", "urPcExpOpenIco");}
			if (thead != null && thead.className == "urPcHdBgClosedIco" ){ thead.className = "urPcHdBgOpenIco";}
			if (ur_system.is508) {
				ico.title=getLanguageText(sCtlType + "_COLLAPSE",new Array(thead.innerText,sCtlType + "_COLLAPSE_KEY"));
			}
		} else {
			if (tbar){ tbar.style.display = "none";}
			var helper = tbdy.parentNode.offsetWidth;
			tbdy.style.display = "none";
			tbdy.parentNode.style.width=helper+"px";
			if (ico.className.indexOf("urPcExpOpenIco") != -1 ){ ico.className = ico.className.replace("urPcExpOpenIco", "urPcExpClosedIco");}
			if (thead != null && thead.className == "urPcHdBgOpenIco" ){ thead.className = "urPcHdBgClosedIco";}
			if (ur_system.is508) {
				ico.title=getLanguageText(sCtlType + "_EXPAND",new Array(thead.innerText, sCtlType + "_EXPAND_KEY"));
			}
	}
		
		sapUrMapi_focusElement(sId+"-exp")
}
	return true;
}
function ur_PcSeq_showOptionMenu(sId,e) {
  var sTrayId=sId;
  var sTriggerId=sId+"-menu";
  var sMenuContentId=ur_get(sTriggerId).getAttribute("mid");
 	if (ur_system.direction=="rtl")
	  var enumPositionBehavior=sapPopupPositionBehavior.MENULEFT;
	else
	  var enumPositionBehavior=sapPopupPositionBehavior.MENURIGHT;
  var sControlType=sapUrMapi_getControlTypeFromObject(ur_get(sId));
	if(sControlType =="PCSEQ") 
	{
		if (e.type!="click") {
			if (sapUrMapi_checkKey(e,"keydown",new Array("32","40","13"))){
				sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
			}
			else if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))) {
				var intTabCount = parseInt(ur_get(sTrayId + "-tbl").getAttribute("tabcount"));
				if (ur_system.direction=="rtl") {
					sapUrMapi_PcSeq_focusItem(sTrayId,null,null,e.keyCode==37,e.keyCode==39);
				} else {
					sapUrMapi_PcSeq_focusItem(sTrayId,null,null,e.keyCode==39,e.keyCode==37);
				}
				return;
			}
			else {
				return false;
			}
		}
		else {
			sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
		}
	}
}
function sapUrMapi_PcSeq_setActiveItem(sId, iIdx, iOldIdx, bIsTitle) {
	with(document) {
		var maxwidth = 0;
		var oTbl = getElementById(sId+"-tbl");
		var tbdy = getElementById(sId+"-tbd");
		var iOldIdx = parseInt(oTbl.getAttribute("selectedtab"));
		var iTabLength = parseInt(oTbl.getAttribute("tabcount"));
		var iNewIdx = parseInt(oTbl.getAttribute("starttab"));
		var iVisTabs = parseInt(oTbl.getAttribute("vistabs"));
		
		
		if (isNaN(iIdx)){return;}
		if ((iTabLength==1) || (iOldIdx==iIdx)){ return true; }
		
		
		if (iIdx != -9999){
			
			var oClkCell = getElementById(sId + "-itm-" + iIdx);
			if (oClkCell.getAttribute("dsbl")=="true" || oClkCell.className.indexOf("Term") != -1){ return false; }
		}
		
		if (iOldIdx == -9999){
			
			
			var oCurTxt = getElementById(sId + "-tit-txt");
			var oCurCon = getElementById(sId + "-itm-tit-cn");
			var oCurContent  = getElementById(sId+"-cnt-tit");
			maxwidth = parseInt(oCurContent.clientWidth);
			
			if (oCurTxt != null){
				oCurTxt.className = "urPcTitTxt";
			}
			
			if (oCurCon != null){
				oCurCon.className = "urPcConOff";
			}
			
			oCurContent.className = "urPcSeqDsp";
		}
		else if (iOldIdx >=0 && iOldIdx < iTabLength){
			
			
			var oCurTxt = getElementById(sId + "-itm-" + iOldIdx + "-txt");
			var oCurCell = getElementById(sId + "-itm-" + iOldIdx);
			var oCurCon = getElementById(sId + "-itm-" + iOldIdx + "-c");
			var oCurStpCell = getElementById(sId + "-itm-" + iOldIdx + "-n");
			var oCurStpTxt = getElementById(sId + "-itm-" + iOldIdx + "-na");
			var oCurContent  = getElementById(sId+"-cnt-"+iOldIdx);
			maxwidth = parseInt(oCurContent.clientWidth);
			if (oCurCell != null){
				
				oCurCell.className="urPcSeqLabelOff";
				oCurTxt.className = "urPcSeqTxtOff";
				if (oCurStpCell != null){
					var re = /On/gi;
					var clsNm = oCurStpCell.className;
					
					oCurStpCell.className = clsNm.replace(re, "Off");
					oCurStpTxt.className = "urPcSeqStpTxtOff";
				}
				
				if (oCurCon != null){
					oCurCon.className = "urPcConOff";
				}
			}
			
			oCurContent.className = "urPcSeqDsp";
		}
		
		
		var newHt = 0;
		if (iIdx == -9999){
			
			
			var oClkTxt  = getElementById(sId + "-tit-txt");
			var oClkCon = getElementById(sId + "-itm-tit-cn");
			var oClkContent  = getElementById(sId+"-cnt-tit");
			
			if (oClkCon != null){
				oClkCon.className = "urPcConOn";
			}
			
			if (tbdy.style.display != "none") {
				for (var i = 0; i < oClkContent.childNodes.length; i++){
					oClkContent.childNodes[i].style.width = (maxwidth - 1) + "px";
					}
				}
			oClkContent.className = "urPcSeqDspSel";
		}
		else{
			
			
			var oClkCell = getElementById(sId + "-itm-" + iIdx);
			var oClkTxt  = getElementById(sId + "-itm-" + iIdx + "-txt");
			var oClkCon = getElementById(sId + "-itm-" + iIdx + "-c");
			var oClkStpCell = getElementById(sId + "-itm-" + iIdx + "-n");
			var oClkStpTxt = getElementById(sId + "-itm-" + iIdx + "-na");
			var oClkContent  = getElementById(sId+"-cnt-"+iIdx);
			if (oClkCell != null){
				
				oClkCell.className="urPcSeqLabelOn";
				oClkTxt.className = "urPcSeqTxtOn";
				if (oClkStpCell != null){
					var re = /Off/gi;
					var clsNm = oClkStpCell.className;
					
					oClkStpCell.className = clsNm.replace(re, "On");
					oClkStpTxt.className = "urPcSeqStpTxtOn";
				}
			}
			
			if (oClkCon != null){
				oClkCon.className = "urPcConOn";
			}
			
			if (tbdy.style.display != "none") {
				for (var i = 0; i < oClkContent.childNodes.length; i++){
					oClkContent.childNodes[i].style.width = (maxwidth - 1) + "px";
					}
				}
			oClkContent.className = "urPcSeqDspSel";
		}
		
		if (iOldIdx != -9999){
			if (iOldIdx == iNewIdx){
				var img = getElementById(sId+"-itm-"+(iOldIdx)+"-a");
				if ( img != null) {
					if (img.style.display == "none") {
					  img.className="urPcSeqAngOffOff";
						img.style.display = "none";
					}
					else {
					  img.className="urPcSeqAngOffOff";
					}
				}
				var td = getElementById(sId+"-itm-"+(iOldIdx+1)+"-a");
				if (td.className.indexOf("Term") == -1){
					td.className="urPcSeqAngOffOff";
				}
				else{
					 td.className="urPcSeqAngOffTerm";
				}
			}
			else if (iOldIdx >=0 && iOldIdx < iTabLength){
				getElementById(sId+"-itm-"+(iOldIdx)+"-a").className="urPcSeqAngOffOff";
				if (iOldIdx < iTabLength){
					var td = getElementById(sId+"-itm-"+(iOldIdx+1)+"-a");
					if (td != null) {
					        if (td.className.indexOf("Term") == -1){
						        td.className="urPcSeqAngOffOff";
					        }
					        else{
						        td.className="urPcSeqAngOffTerm";
						}
					}
				}
			}
		}
		
		if (iIdx==iNewIdx){
				var td = getElementById(sId+"-itm-"+(iIdx+1)+"-a");
				if (getElementById(sId+"-itm-"+(iIdx)+"-a") != null) {
				  getElementById(sId+"-itm-"+(iIdx)+"-a").className="urPcSeqAngOffOn";
				}
				if (td.className.indexOf("Term") == -1){
					td.className="urPcSeqAngOnOff";
				}
				else{
					td.className="urPcSeqAngOnTerm";
				}
		}
		else{
			if (iIdx != -9999){
				getElementById(sId+"-itm-"+(iIdx)+"-a").className="urPcSeqAngOffOn";
			}
			if (iIdx != -9999 && iIdx != iTabLength - 1) {
				var td = getElementById(sId+"-itm-"+(iIdx+1)+"-a");
				if (td.className.indexOf("Term") == -1){
					td.className="urPcSeqAngOnOff";
				}
				else{
					td.className="urPcSeqAngOnTerm";
				}
			}
		}
		
		var oFirstImage  = getElementById(sId+"-p");
		var oLastImage   = getElementById(sId+"-n");
		
		if (iNewIdx != 0){
			
			if (iIdx!=iNewIdx){oFirstImage.className="urPcSeqFirstAngOffPrevon";}
			
			else{oFirstImage.className="urPcSeqFirstAngOnPrevon";}
		}
		else{
			
			if (iIdx!=iNewIdx){oFirstImage.className="urPcSeqFirstAngOffPrevoff";}
			
			else{oFirstImage.className="urPcSeqFirstAngOnPrevoff";}
		}
		
		if (iNewIdx + iVisTabs >= iTabLength){
			
			if (iIdx != (iNewIdx + iVisTabs - 1) && iIdx != iTabLength - 1){
				if (oLastImage.className.indexOf("Branch") != -1){
					oLastImage.className="urPcSeqLastOffBranchOn";
				}
				else if (oLastImage.className.indexOf("Term") != -1){
					
				}
				else{
					oLastImage.className="urPcSeqLastOffNextOn";
				}
			}
			else{ 
				if (oLastImage.className.indexOf("Branch") != -1){
					oLastImage.className="urPcSeqLastOnBranchOn";
				}
				else if (oLastImage.className.indexOf("Term") != -1){
					
				}
				else{
					oLastImage.className="urPcSeqLastOnNextOn";
				}
			}
		}
		else{
			
			if (iIdx != (iNewIdx + iVisTabs - 1) && iIdx != iTabLength - 1){
				if (oLastImage.className.indexOf("Branch") != -1){
					oLastImage.className="urPcSeqLastOffBranchOn";
				}
				else if (oLastImage.className.indexOf("Term") != -1){
				}
				else{
					oLastImage.className="urPcSeqLastOffNextOn";
				}
			}
			else{
				if (oLastImage.className.indexOf("Branch") != -1){
					oLastImage.className="urPcSeqLastOnBranchOn";
				}
				else if (oLastImage.className.indexOf("Term") != -1){
				}
				else{
					oLastImage.className="urPcSeqLastOnNextOn";
				}
			}
		}
		
		oTbl.setAttribute("selectedtab",iIdx);
		
		if (iIdx != -1){
			sapUrMapi_PcSeq_focusItem(sId,iIdx);
		}
		if (ur_system.is508) {
			oClkTxt.title = getLanguageText("SAPUR_PCSEQ_ITEM",new Array(oClkTxt.innerText,"SAPUR_PCSEQ_ITEM_SELECTED"));
			if (oCurTxt != null) {
				oCurTxt.title = getLanguageText("SAPUR_PCSEQ_ITEM",new Array(oCurTxt.innerText,"SAPUR_PCSEQ_ITEM_ENABLED"));
			}
		}
	}
}
function sapUrMapi_PcSeq_focusItem(sSeqId, iIdx, iTabCount, bNext, bPrev) {
	var oTabTable 	= ur_get(sSeqId+"-tbl");
	if (isNaN(iIdx)) {iIdx = parseInt(oTabTable.getAttribute("selectedtab"));}
	if (isNaN(iTabCount)) {iTabCount = parseInt(oTabTable.getAttribute("tabcount"));}
	var ico = ur_get(sSeqId + "-menu");
	
	if (iIdx == -9999) {return false;}
	var iNewIndex=iIdx;
	if (ico != null && ico.getAttribute("hasfocus") == "true") {
		if (bNext) {
			iNewIndex = parseInt(oTabTable.getAttribute("starttab"));
		}
		if (bPrev) {
			iNewIndex = parseInt(oTabTable.getAttribute("starttab")) - 1 + parseInt(oTabTable.getAttribute("vistabs"));
			if (ur_get(sSeqId+"-itm-"+iNewIndex+"-txt").getAttribute("design") == "term") {
				iNewIndex--;
			}
		}
	}
	else {
		if (bNext) {
			
			if (iIdx<iTabCount-1){ iNewIndex=iIdx+1;}
			else {iNewIndex=0;}
		}
		if (bPrev) {
			if (iIdx>0) {iNewIndex=iIdx-1;}
			else {iNewIndex=iTabCount-1;}
		}
	}
	oFocusedTab = ur_get(sSeqId+"-itm-"+iNewIndex);
	if (oFocusedTab.style.display != "none") {
		var iOldFoc = parseInt(oTabTable.getAttribute("focusedtab"));
		if (!isNaN(iOldFoc)) {
			if (iOldFoc == -9999) {
			  sapUrMapi_setTabIndex(ur_get(sSeqId+"-tit-txt"),-1);
			}
			else {
			sapUrMapi_setTabIndex(ur_get(sSeqId+"-itm-"+iOldFoc+"-txt"),-1);
			}
		}
		var oFoc = ur_get(sSeqId+"-itm-"+iNewIndex+"-txt");
		if (oFoc.getAttribute("design") != "term") {
			sapUrMapi_setTabIndex(oFoc,0);
			
			sapUrMapi_focusElement(sSeqId+"-itm-"+iNewIndex+"-txt");
			oTabTable.setAttribute("focusedtab",iNewIndex);
			if (ico != null) {
				ico.setAttribute("hasfocus", "false");
			}
			if ((oFocusedTab.getAttribute("dsbl")=="true")&&(!ur_system.is508)) {
				sapUrMapi_PcSeq_focusItem(sSeqId,iNewIndex,iTabCount,bNext,bPrev);
				return;
			}
		}
		else {
			if (ico != null && ico.getAttribute("hasfocus") != "true") {
				sapUrMapi_setTabIndex(ico,0);
				ico.setAttribute("hasfocus", "true");
				
				sapUrMapi_focusElement(ur_get(sSeqId + "-menu"));
			}
			else {
				sapUrMapi_PcSeq_focusItem(sSeqId,iNewIndex,iTabCount,bNext,bPrev);
				return;
			}
		}
	}
	else {
	    if (ico != null) {
			sapUrMapi_setTabIndex(ico,0);
			ico.setAttribute("hasfocus", "true");
			
			sapUrMapi_focusElement(ur_get(sSeqId + "-menu"));
	    }
	}
}
function sapUrMapi_PcSeq_keySelect(sId, iSelectedIdx, iTabCount,e) {
	if (sapUrMapi_checkKey(e,"keydown",new Array("39","37"))){
	  if (ur_system.direction=="rtl") {
	    sapUrMapi_PcSeq_focusItem(sId,iSelectedIdx,iTabCount,e.keyCode==37,e.keyCode==39);
		return;
	  } else {
		sapUrMapi_PcSeq_focusItem(sId,iSelectedIdx,iTabCount,e.keyCode==39,e.keyCode==37);
		return;
	  }
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("32"))){
		sapUrMapi_PcSeq_setActiveItem(sId,iSelectedIdx,0,false);
		return;
	}
}
function ur_PcSeq_scrollItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != -1 && iDir != 1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	var diff = vistabs;
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs - 1;}
	}
	if (lasttab != firsttab + vistabs - 1){
		diff = lasttab - firsttab;
	}
	if (iDir == 1){
		
		if (lasttab == tabcount - 1){return false;}
		
		showItem(sId, firsttab, false, true, false);
		
		firsttab += 1;
		showItem(sId, firsttab, true, true, false);
		if (diff > 2) {
			
			showItem(sId, lasttab, true, false, false);
		}
		if (diff != 1) {
		
		lasttab += 1;
		showItem(sId, lasttab, true, false, true);
	}
	else{
		
		lasttab = firsttab;
		showItem(sId, lasttab, true, true, true);
		}
	}
	else{
		
		if (firsttab == 0){return false;}
		
		
		if (diff >= vistabs - 1){
			
			showItem(sId, lasttab, false, false, true);
			
			lasttab -= 1;
			showItem(sId, lasttab, true, false, true);
		}
		if (diff > 1) {
		
		showItem(sId, firsttab, true, false, false);
		
		firsttab -= 1;
		showItem(sId, firsttab, true, true, false);
	}
		else {
		
    showItem(sId, firsttab, true, false, true);
		firsttab -= 1;
		showItem(sId, firsttab, true, true, true);
		}
	}
	
	setSeqIcons( sId, firsttab, lasttab, tabcount );
	
	var newtabpage = Math.floor(firsttab / vistabs);
	oTabs.setAttribute("starttab", firsttab);
	oTabs.setAttribute("lasttab", lasttab);
	ur_PcSeq_togglePager(sId)
}
function ur_PcSeq_pageItem( sId, iDir, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	if (iDir != 1 && iDir != -1){
		return false;
	}
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if ((iDir == -1 && firsttab == 0) || ( iDir == 1 && lasttab == tabcount -1)){
		return false;
	}
	
	if (((iDir == 1) && ((tabpage + iDir) * vistabs) < (tabcount)) ||
		((iDir == -1) && (tabpage + iDir >= 0) )){
		tabpage = tabpage + iDir;
	}
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				showItem(sId, i, false, true, false);
			}
			else if (i == lasttab){
				showItem(sId, i, false, false, true);
			}
			else{
			   showItem(sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				showItem(sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				showItem(sId, i, true, false, true);
		   }
		   else{
				showItem(sId, i, true, false, false);
		   }
		}
	}
	
	setSeqIcons( sId, lbound, ubound, tabcount );
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	ur_PcSeq_togglePager(sId)
}
function ur_PcSeq_jumpItem( sId, iTab, sCtlType ){
	sCtlType=sCtlType.toUpperCase();
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
	var seltab = parseInt(oTabs.getAttribute("selectedtab"));
	if (isNaN(lasttab)){
		if (firsttab + vistabs >= tabcount){lasttab = tabcount - 1;}
		else{lasttab = firsttab + vistabs-1;}
	}
	
	if (iTab >= tabcount || iTab < 0){
		return false;
	}
	
	var tabpage = Math.floor(iTab / vistabs);
	
	var lbound = Math.floor(tabpage * vistabs);
	var ubound = lbound + vistabs - 1;
	
	if (ubound > tabcount - 1){
		ubound = tabcount -1;
	}
	
	for (var i = 0; i < tabcount; i++){
		
		if (i < lbound || i > ubound){
			if (i == firsttab){
				showItem(sId, i, false, true, false);
			}
			else if (i == lasttab){
				showItem(sId, i, false, false, true);
			}
			else{
			   showItem(sId, i, false, false, false);
			}
		}
		else{
		   if (i == lbound){
				showItem(sId, i, true, true, false);
		   }
		   else if (i == tabcount -1 || i == ubound){
				showItem(sId, i, true, false, true);
		   }
		   else{
				showItem(sId, i, true, false, false);
		   }
		}
	}
	
	oTabs.setAttribute("starttab", lbound);
	oTabs.setAttribute("lasttab", ubound);
	oTabs.setAttribute("tabpage", tabpage);
	ur_PcSeq_togglePager(sId)
	
	
	sapUrMapi_PcSeq_setActiveItem(sId, iTab, seltab, false);
	
	setSeqIcons( sId, lbound, ubound, tabcount );
}
function showItem( sId, iIdx, bShow, bIsFirst, bIsLast ){
	
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var tabimg = ur_get(sId + "-itm-" + iIdx + "-a");
	var tabstat = ur_get(sId + "-itm-" + iIdx + "-n");
	var tabcell = ur_get(sId + "-itm-" + iIdx);
	
	var conimg = ur_get(sId + "-itm-" + iIdx + "-ca");
	var constat = ur_get(sId + "-itm-" + iIdx + "-cn");
	var concell = ur_get(sId + "-itm-" + iIdx + "-c");
	if (bShow){
		
		var statdisp = "";
		if (tabstat.getAttribute("design") == "INT"){
			statdisp = "none";
		}
		if (!bIsFirst && !bIsLast){
			tabimg.style.display = "";
			tabcell.style.display = "";
			tabstat.style.display = statdisp;
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "";
				constat.style.display = statdisp;
			}
		}
		else if (bIsFirst){
			tabimg.style.display = "none";
			tabcell.style.display = "";
			tabstat.style.display = statdisp;
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "none";
				constat.style.display = statdisp;
			}
		}
		else if (bIsLast){
			tabimg.style.display = "";
			tabcell.style.display = "";
			tabstat.style.display = statdisp;
			if (concell != null){
				concell.style.display = "";
				conimg.style.display = "";
				constat.style.display = statdisp;
			}
		}
	}
	else{
		
		tabimg.style.display = "none";
		tabcell.style.display = "none";
		tabstat.style.display = "none";
		if (concell != null){
			concell.style.display = "none";
			conimg.style.display = "none";
			constat.style.display = "none";
		}
	}
}
function setSeqIcons( sId, firsttab, lasttab, tabcount ){
	var prev = ur_get(sId + "-p");
	var next = ur_get(sId + "-n");
	var first = ur_get(sId + "-itm-" + firsttab);
	var last = ur_get(sId + "-itm-" + lasttab);
	var prevtmp = prev.className;
	var nexttmp = next.className
	
	if (firsttab == 0){
		if (first.className == "urPcSeqLabelOn"){
			prev.className = "urPcSeqFirstAngOnPrevOff";
		}
		else{
			prev.className = "urPcSeqFirstAngOffPrevOff";
		}
	}
	else{
		if (first.className == "urPcSeqLabelOn"){
			prev.className = "urPcSeqFirstAngOnPrevOn";
		}
		else{
			prev.className = "urPcSeqFirstAngOffPrevOn";
		}
	}
	
	if (lasttab == tabcount - 1){
		var lastdesign = last.getAttribute("design").toUpperCase();
		
		
		if (lastdesign == "TERM") {
			next.className = "urPcSeqLastTerm";
		}
		
		else if (lastdesign == "BRANCH") {
			if (last.className == "urPcSeqLabelOn"){
				next.className = "urPcSeqLastOnBranchOn";
			}
			else{
				next.className = "urPcSeqLastOffBranchOn";
			}
		}
		else {
		    if (last.className == "urPcSeqLabelOn") {
				next.className = "urPcSeqLastOnNextOn";
			}
			else {
			    next.className = "urPcSeqLastOffNextOn";
			}
		}
	}
	else{
		if (last.className == "urPcSeqLabelOn"){
			next.className = "urPcSeqLastOnNextOn";
		}
		else{
			next.className = "urPcSeqLastOffNextOn";
		}
	}
	
	prev.childNodes[0].className = "urPcSeqPreFirstAng";
	
	if (next.className.indexOf("Term") != -1){
		next.childNodes[0].className = "urPcSeqAfterLastAng";
	}
	else if (next.className.indexOf("Branch") != -1){
		next.childNodes[0].className = "urPcSeqBranchAng";
	}
	else{
		next.childNodes[0].className = "urPcSeqAfterLastAng";
	}
}
function ur_PcSeq_togglePager(sId) {
  if (ur_get(sId+"-pag")!=null) {
    var sPagerId=ur_get(sId+"-pag").firstChild.id;
  } else {
    return;
  }
	var oTabs = ur_get(sId + "-tbl");
	var tabcount = parseInt(oTabs.getAttribute("tabcount"));
	var firsttab = parseInt(oTabs.getAttribute("starttab"));
	var tabpage = parseInt(oTabs.getAttribute("tabpage"));
	var vistabs = parseInt(oTabs.getAttribute("vistabs"));
	var lasttab = parseInt(oTabs.getAttribute("lasttab"));
  var arrButtonArray = new Array();
	var arrStateArray = new Array();
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.BEGIN;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.PREVIOUS_PAGE;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
	if (firsttab!=0) {
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	} else {
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	}
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.END;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.NEXT_PAGE;
  arrButtonArray[arrButtonArray.length]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
	if (lasttab!=tabcount-1) {
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	  arrStateArray[arrStateArray.length]=true;
	} else {
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	  arrStateArray[arrStateArray.length]=false;
	}
  sapUrMapi_Paginator_setStates(sPagerId,arrButtonArray,arrStateArray);
}
//** PhaseIndicator.ie5 **
function sapUrMapi_PhInPhaseSelect(sId,iIdx,bSelected,e){
	var oPhIn=ur_get(sId);
	var iFcIdx=oPhIn.getAttribute("fi");
	if(iFcIdx==" ")iFcIdx=ur_get(sId).getAttribute("sel");
	if(iFcIdx==null)iFcIdx=0;
	var oNew=ur_get(sId+"-itm-"+iIdx);
	var oOld=ur_get(sId+"-itm-"+iFcIdx);
	
	oPhIn.setAttribute("fi",iIdx);
}
var arrValuesOfPhases = new Array();
function sapUrMapi_PhaseIndicator_create(sId){
	var o = ur_get(sId);
	var iItemSel = parseInt(o.getAttribute('sel'));
	if(document.getElementById(sId+"-itm-0")==null)return;
	if(isNaN(iItemSel))document.getElementById(sId+"-itm-0").tabIndex=0;
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_PhaseIndicator_init('"+sId+"')");
}
function sapUrMapi_PhaseIndicator_init(sId){
	var oVisblPhases = ur_get(sId);
	var iWidth = oVisblPhases.offsetWidth;
	if (iWidth>0) {
	  sapUrMapi_PhaseIndicator_setAllValues(sId);
	} else {
	 	return;
  }
  sapUrMapi_PhaseIndicator_draw(sId);
	
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_PhaseIndicator_draw('" + sId + "')");
}
function sapUrMapi_PhaseIndicator_setAllValues(sId){
		arrValuesOfPhases[sId] = new Array();
        var iItemCount = parseInt(ur_get(sId).getAttribute('ai'));
		for(var i = 0; i <= iItemCount; i++){
			arrValuesOfPhases[sId][i] = new Array();
			arrValuesOfPhases[sId][i][0] = sId + '-itm-' + i;
			arrValuesOfPhases[sId][i][1] = ur_get(sId + '-itm-' + i).offsetWidth;
		}
		arrValuesOfPhases[sId][iItemCount + 1] = new Array();
		done = true;
}
function sapUrMapi_PhaseIndicator_draw(sId) {
  var o=ur_get(sId);
  	if (o == null) return;
	var iItemCount = parseInt(o.getAttribute('ai'));
	var iFirstIdxOld = parseInt(o.getAttribute('fv'));
	ur_get(sId + '-cnt-scrl').style.width = '1px';
	sapUrMapi_PhaseIndicator_make(sId,iFirstIdxOld,iItemCount);
}
function sapUrMapi_PhaseIndicator_make(sId,iStart,iEnd,sDir){
  var o=ur_get(sId);
	var iLastIdxOld = parseInt(o.getAttribute('lv'));
	var iFirstIdxOld = parseInt(o.getAttribute('fv'));
	var iAvailWdth = ur_get(sId + '-cnt').offsetWidth;
	var iItemCount = parseInt(o.getAttribute('ai'));
	var iVisblWdth = 0;
	var iFirstIdx = 0;
	var iLastIdx = 0;
	var ii=0;
	for(var i=0;i<=iItemCount;i++) {
	  arrValuesOfPhases[sId][i][2]=false;
	}
  
  
	if(sDir == 'FURTHER' || typeof(sDir)=="undefined"){
    for (i=iStart;i<=iEnd;i++) {
			if(iAvailWdth > 0 && iAvailWdth >= arrValuesOfPhases[sId][i][1]){
				arrValuesOfPhases[sId][i][2]=true;
				iAvailWdth = iAvailWdth - arrValuesOfPhases[sId][i][1];
				iVisblWdth = iVisblWdth + arrValuesOfPhases[sId][i][1];
			}else{
				break;
			}
		ii=i;
    }
	}
	if(sDir == 'BACK'){
    for (i=iStart;i>=iEnd;i--) {
			if(iAvailWdth > 0 && iAvailWdth >= arrValuesOfPhases[sId][i][1]){
				arrValuesOfPhases[sId][i][2]=true;
				iAvailWdth = iAvailWdth - arrValuesOfPhases[sId][i][1];
				iVisblWdth = iVisblWdth + arrValuesOfPhases[sId][i][1];
			}else{
				break;
			}
		  ii=i;
    }
  }
	if(ii == 0 && iAvailWdth > iVisblWdth && iAvailWdth >= arrValuesOfPhases[sId][iStart + 1][1]){
		iAvailWdth = ur_get(sId + '-cnt').offsetWidth;
		for(i = (iStart + 1); i<= iItemCount; i++){
				iVisblWdth = iVisblWdth + arrValuesOfPhases[sId][i][1];
			if(iAvailWdth >= iVisblWdth && iAvailWdth >= arrValuesOfPhases[sId][i][1]){
				arrValuesOfPhases[sId][i][2]=true;
				iStart = i;
			}else{
				break;
			}
		}
	}
	for(var i=0;i<=iItemCount;i++) {
	  if (arrValuesOfPhases[sId][i][2]==false) {
		  ur_get(arrValuesOfPhases[sId][i][0]).childNodes[0].style.display = "none";
	  } else {
		  ur_get(arrValuesOfPhases[sId][i][0]).childNodes[0].style.display = "block";
	  }
	}
	if(sDir == 'BACK'){
		ur_get(sId).setAttribute('fv',ii);
		ur_get(sId).setAttribute('lv',iStart);
		iFirstIdx = ii;
		iLastIdx = iStart;
	} else {
		ur_get(sId).setAttribute('fv',iStart);
		ur_get(sId).setAttribute('lv',ii);
		iFirstIdx = iStart;
		iLastIdx = ii;
	}
	var oLastIdx = ur_get(sId + '-itm-img-' + iLastIdx);
	if(iFirstIdx == 0 && iLastIdx != iItemCount && oLastIdx != null){
		ur_get(sId + '-cnt-scrl').style.width = sapUrMapi_sAddUnit( iVisblWdth , "px" );
		if(!isNaN(iLastIdxOld) && iLastIdxOld != iItemCount){
			ur_get(sId + '-itm-img-' + iLastIdxOld).className = 'urPhInFurtherArrow';
			}
		ur_get(sId + '-p').style.display = 'none';
		ur_get(sId + '-itm-img-' + iLastIdx).className = 'urPhInMoreAfter';
	}
	if(iFirstIdx != 0 && iLastIdx != iItemCount){
		ur_get(sId + '-p').style.display = 'block';
		ur_get(sId + '-cnt-scrl').style.width = sapUrMapi_sAddUnit( iVisblWdth , "px" );
		if(iLastIdxOld != iItemCount){
			if(!isNaN(iLastIdxOld)){
				ur_get(sId + '-itm-img-' + iLastIdxOld).className = 'urPhInFurtherArrow';
			}
		}
		if(iLastIdx!=null){
			ur_get(sId + '-itm-img-' + iLastIdx).className = 'urPhInMoreAfter';
		}
	}
	if(iFirstIdx != 0 && iLastIdx == iItemCount){
		ur_get(sId + '-p').style.display = 'block';
		ur_get(sId + '-cnt-scrl').style.width = sapUrMapi_sAddUnit( iVisblWdth , "px" );
		if(!isNaN(iLastIdxOld) && iLastIdxOld != iItemCount){
			ur_get(sId + '-itm-img-' + iLastIdxOld).className = 'urPhInFurtherArrow';
		}
	}
	if(iFirstIdx == 0 && iLastIdx == iItemCount){
		ur_get(sId + '-cnt-scrl').style.width = sapUrMapi_sAddUnit( iVisblWdth , "px" );
		ur_get(sId + '-p').style.display = 'none';
		if(!isNaN(iLastIdxOld) && iLastIdxOld != iItemCount){
			ur_get(sId + '-itm-img-' + iLastIdxOld).className = 'urPhInFurtherArrow';
		}
	}
	ur_get(sId + '-cnt-scrl').scrollLeft = 0;
	sapUrMapi_PhaseIndicator_setPagingButtons(sId);
}
function sapUrMapi_PhaseIndicator_paging(sId,sDir){
	var iItemCount = parseInt(ur_get(sId).getAttribute('ai'));
	var iFirstIdxOld = parseInt(ur_get(sId).getAttribute('fv'));
	var iLastIdxOld = parseInt(ur_get(sId).getAttribute('lv'));
		if(sDir == 'FURTHER'){
				iFirstIdxOld = iLastIdxOld + 1;
				sapUrMapi_PhaseIndicator_make(sId,iFirstIdxOld,iItemCount,sDir);
		} else if(sDir== 'BACK'){
			iLastIdxOld = iFirstIdxOld - 1;
			if(iLastIdxOld != 0){
				sapUrMapi_PhaseIndicator_make(sId,iLastIdxOld,0,sDir);
				}else{
					ur_get(sId).setAttribute('fv',0);
					sapUrMapi_PhaseIndicator_draw(sId);
				}
		} else {
		  	iLastIdxOld = parseInt(sDir.substring(sDir.lastIndexOf("-")+1));
				ur_get(sId).setAttribute('fv',iLastIdxOld);
				sapUrMapi_PhaseIndicator_draw(sId);
			}
	}
function sapUrMapi_PhaseIndicator_setPagingButtons(sId){
	var iItemCount = parseInt(ur_get(sId).getAttribute('ai'));
	if(ur_get(sId+"-pag").hasChildNodes()){
		sPagerId = ur_get(sId+"-pag").childNodes.item(0).id;
		var arrButtonArray = new Array();
		arrButtonArray[0]=UR_PAGINATOR_BUTTON.PREVIOUS_ITEM;
		arrButtonArray[1]=UR_PAGINATOR_BUTTON.NEXT_ITEM;
		var arrStateArray = new Array();
		arrStateArray[0]=true; 
		arrStateArray[1]=true; 
		var iFirstIdxOld = parseInt(ur_get(sId).getAttribute('fv'));
		var iLastIdxOld = parseInt(ur_get(sId).getAttribute('lv'));
		if(iFirstIdxOld == 0){
				arrStateArray[0]=false; 
		}
		if(iLastIdxOld == iItemCount || isNaN(iLastIdxOld)){
				arrStateArray[1]=false; 
		}
		sapUrMapi_Paginator_setStates(sPagerId,arrButtonArray,arrStateArray);
	} else {
	  return;
	}
}
function sapUrMapi_PhaseIndicator_keydownStep(sId,sItemIdx,bSel,e){
	var oItm=ur_get(sId+"-itm-"+sItemIdx);
	var oPrev=null;
	var oNext=null;
	
	if(ur_system.direction!="rtl"){
		oPrev=oItm.previousSibling;
		oNext = oItm.nextSibling;
	}else{
		oNext=oItm.previousSibling;
		oPrev = oItm.nextSibling;
	}
	
	if(e.keyCode == 39 && oNext!=null) {
		if (!ur_system.is508)
			oNext=ur_PhIn_checkDsbl(oNext,sItemIdx,e.keyCode);
		if(oNext.idx>ur_get(sId).getAttribute('lv'))
			sapUrMapi_PhaseIndicator_paging(sId,"FURTHER");
		 ur_focus_Itm(oNext,oItm);
	}
	else if(e.keyCode == 37 && oPrev!=null){
		if (!ur_system.is508)
			oPrev=ur_PhIn_checkDsbl(oPrev,sItemIdx,e.keyCode);
		if(oPrev.idx<ur_get(sId).getAttribute('fv'))
			sapUrMapi_PhaseIndicator_paging(sId,"BACK");
		ur_focus_Itm(oPrev,oItm);
	}
	else if(e.keyCode==9){
		var oPhIn = ur_get(sId);
		var iSel = oPhIn.getAttribute("sel");
		if(iSel==null)iSel=0;
		var oSel = ur_get(sId+"-itm-"+iSel);
		ur_focus_Itm(oSel,oItm);
	}
	else if(e.keyCode==32){
		oItm = oItm.getElementsByTagName("TD")[0];
		if (oItm.id.indexOf("start")>-1) oItm = oItm.nextSibling;
		oItm.click();
	}
		ur_EVT_cancelBubble(e);
}
function ur_PhIn_checkDsbl(oItem,iIdx,iKey){
	if(oItem==null)return;
 		while(ur_isSt(oItem,ur_st.DISABLED) && oItem!=null){
 			if(iKey==39)oItem=oItem.nextSibling;		
 			else oItem=oItem.previousSibling;
 			
 			if(oItem==null || !ur_isSt(oItem,ur_st.DISABLED))
 				break;
		} 
	return oItem;
}
function sapUrMapi_PhaseIndicator_getFirstVisible(o){
	return o.getAttribute("fv");
}

//** PopIn.ie5 **

function sapUrPopIn_close(sId, oEvt){
	if ( oEvt.keyCode == 32 || oEvt.type == "click" ) {
		ur_EVT_fire(ur_get(sId + "-cl"),"ocl");
	}
}
//** PopupMenu.nn6 **

var _ur_POMN = {all:new Array(),menus:new Array(),level:0};
var	_ur_POMN_triggerId="";
var mnu = new Object();
mnu.intv = null;
mnu.active = false;
mnu.delay = 250;
mnu.cancel = false;
mnu.mnuWin = null;
mnu.mnuE = null;
var sapPopupMenuLevel = 0;
var subMenus = new Array(null,null,null,null,null,null);
var subMenuItems = new Array(null,null,null,null,null,null);
var itemsArray = new Array(null,null,null,null,null,null,null,null);
var urOldFocus = window.onfocus;
var baseMenu = null;
var oPopup;
var initMenus=null;
me=window;
function sapUrMapi_PopupMenu_init(id,e) {
	if (me.menuObject) {
	  sapUrMapi_PopupMenu_exit(id,e);
	}
	if (!me.menuObject) {
	  
	  var items = window.document.getElementById(id+"-r").childNodes.item(1).childNodes;
	  var menu = new sapUrMapi_PopupMenu(items);
	  me.menuObject = menu;
    me.menuObject.standalone=true;
  }
}
function sapUrMapi_PopupMenu_exit(id,e) {
	if (e.target.id==id) {
		if (me.menuObject) {
			sapUrMapi_PopupMenu_hideAll();
			sapUrMapi_PopupMenu_setItemActive(me,-1, id);
		  me.menuObject = null;
		}
	} else {
		if (me.menuObject) {
			if (me.menuObject.out) {
		    sapUrMapi_PopupMenu_setItemActive(me,-1, id);
		  }
		}
	}
}
function sapUrMapi_PopupMenu_hoverItem(mywindow,id,e) {
	
	if(e==null) return;
	
	var o=e.target;
  if(o.parentNode.className=="urMnuDvdr"){
      iIdx = "dvdr"
      sapUrMapi_PopupMenu_setItemActive(mywindow,iIdx, id);
      if (mywindow.mylevel<=sapPopupMenuLevel) {
                  for (var n=mywindow.mylevel+1;n<=sapPopupMenuLevel;n++) {
                       subMenus[n].hide();
                  }
      }
      return;
  }
  if(typeof o.tagName=="undefined") o=o.parentNode;
  if (o.tagName=="IMG" || o.tagName=="NOBR" || o.tagName=="SPAN")o=o.parentNode;
  if (o.tagName=="TD") {
		iIdx = parseInt(o.parentNode.getAttribute("Idx"));
	  if (mywindow.menuObject==null) {
	    sapUrMapi_PopupMenu_init(id,e);
	  }
	
	  
	  var items = mywindow.document.getElementById(id+"-r").childNodes.item(1).childNodes;
	  mywindow.menuObject = sapUrMapi_PopupMenu(items);
	  if (mywindow.menuObject.activeItem==iIdx) return;
	
	if(o.getAttribute("isscroll")=="true") {
		e.stopPropagation();
		return false;
	}
	  sapUrMapi_PopupMenu_setItemActive(mywindow,iIdx, id);
	  if (mywindow.mylevel<=sapPopupMenuLevel) {
	  	for (var n=mywindow.mylevel+1;n<=sapPopupMenuLevel;n++) {
	      subMenus[n].hide();
      }
	  }
	  ur_focus(mywindow);
	  if (ur_getAttD(mywindow.menuObject.items[mywindow.menuObject.activeItem],"st","").indexOf("d")==-1) {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"opensub", id);
	  }
	}
	e.cancelBubble=true;
}
function sapUrMapi_PopupMenu_hideAll() {
  for (var n=0;n<sapPopupMenuLevel+1;n++) {
	 if (subMenus[n]!=null) {
    subMenus[n].hide();
   }
  }
  if (baseMenu!=null) {baseMenu.hide();}
  baseMenu=null;
  if(oPopup!=null){
	    try {
          
          
          var oSrc = oPopup.source.object;
          if (oSrc && oSrc.tagName=="TD") {
            if (oSrc.firstChild && oSrc.firstChild.nodeType == 1) 
                ur_focus(oSrc.firstChild);
          } else {
            ur_focus(oSrc);
          }
	    } catch(e) {}	
  }
  oPopup=null;
  sapPopupMenuLevel=0;
  
}
function sapUrMapi_PopupMenu_showMenu(idTrigger,idContent,enumAlignment,e,bRemoveOnClose) {
	var styles = document.getElementsByTagName("LINK");
	var arrUrls;
	_ur_POMN_triggerId=idTrigger;
	arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
  
  for (var i=0;i<subMenus.length;i++) {
  	if (subMenus[i]!=null) {
  		subMenus[i].hide();
  	}
  }
	var o = ur_get(idContent);
	if (!o) return;
	if (o.hasChildNodes() && o.firstChild.tagName=="XMP") {
	  o.innerHTML=o.firstChild.innerHTML; 
	}
	 o.style.width="";
	
  sapUrMapi_PopupMenu_drawInit(idContent);
	oPopup = new sapPopup(window,arrUrls,o,ur_get(idTrigger),e,0);
  oPopup.onblur=oPopup.hide;
  if (bRemoveOnClose) {
		oPopup.remove = sapUrMapi_PopupMenu_removeAll;
	}
  oPopup.idTrigger = idTrigger;
  
  if (!enumAlignment)
    if (ur_system.direction== "rtl")
      enumAlignment= sapPopupPositionBehavior.MENURIGHT;
    else
      enumAlignment= sapPopupPositionBehavior.MENULEFT;
  oPopup.positionbehavior = enumAlignment;
  oPopup.show();
  baseMenu=oPopup;
	window.onfocus=sapUrMapi_PopupMenu_hideAll;
}
function sapUrMapi_PopupMenu_setItemActive(win,newActive, sId) {
	if (sId=="blank") return;
	var remActive = newActive;
	if (!win.menuObject) {
	  var items=win.document.getElementsByTagName("BODY").item(0).childNodes.item(0).childNodes.item(0).childNodes.item(0).childNodes.item(1).childNodes;
	  win.menuObject = sapUrMapi_PopupMenu(items);
	}
	var menuObj=win.menuObject;
	if (newActive==menuObj.activeItem) return;
	menuObj.out=false;
	if ((newActive=="opensubkey")||(newActive=="opensub")) {
		if (!menuObj.items[menuObj.activeItem]) return;
		var sSubMenuId = menuObj.items[menuObj.activeItem].getAttribute("smnu");
		if ((sSubMenuId!="") && (sSubMenuId!=null)) {
		  if (!oPopup) {
		  	var iStartLevel=-1;
		  } else {
		  	var iStartLevel=win.mylevel;
		  }
		  if (iStartLevel<sapPopupMenuLevel) {
				for (var n=iStartLevel+1;n<sapPopupMenuLevel+1;n++) {
				  if (subMenus[n]!=null) {
  				  subMenus[n].hide();
  				}
				}
			  sapPopupMenuLevel=iStartLevel;
			}
			var arrUrls;
			arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
			if (!oPopup) {
			   subwindow = window;
  			 sapPopupMenuLevel = 0;
			} else {
			  subwindow = win;
			  sapPopupMenuLevel = win.mylevel+1;
			}
			var src = menuObj.items[menuObj.activeItem];
			var o = ur_get(sSubMenuId);
			if (o.hasChildNodes() && o.firstChild.tagName=="XMP") {
				o.innerHTML=o.firstChild.innerHTML; 
			}
			
			o.firstChild.style.width=sapUrMapi_sAddUnit( o.firstChild.firstChild.offsetWidth , "px" );
		  sapUrMapi_PopupMenu_drawInit(sSubMenuId);
		  subMenu = new sapPopup(window,arrUrls,o,src,null,sapPopupMenuLevel);
	    subMenu.onblur=subMenu.hide;
	    subMenu.positionbehavior = sapPopupPositionBehavior.SUBMENU;
	    subMenu.show();
	    subMenus[sapPopupMenuLevel] = subMenu;
		}
	  return;
	}
	if (newActive=="closesub") {
		if (win.mylevel) {
			subMenus[win.mylevel].hide();
			if (win.mylevel>1) {
  			ur_focus(subMenus[win.mylevel-1].frame.window);
				sapUrMapi_PopupMenu_setItemActive(subMenus[win.mylevel-1].frame.window,subMenus[win.mylevel-1].frame.window.menuObject.activeItem, sId)
				win.onkeydown=void(0);
			} else {
  			sapUrMapi_PopupMenu_setItemActive(oPopup.frame.window,itemsArray[0].activeItem, sId)
				ur_focus(oPopup.frame.window);
				win.onkeydown=void(0);
			}
			subMenus[win.mylevel].hide();
		}
	  return;
	}
	if (newActive=="first") {
	  newActive=menuObj.activeItem+1;
	  if (newActive>menuObj.items.length-1) newActive=0;
	}
	var bDown = "true";
	if (newActive=="next") {
	  newActive=menuObj.activeItem+1;
		if (newActive>menuObj.items.length-1){
			if (menuObj.items[0].style.display != "none"){
				newActive=0;
			}
			else{
			   newActive = menuObj.items.length-1;
			   return;
			}
		}
	}
	if (newActive=="prev") {
		newActive=menuObj.activeItem-1;
		if (newActive<0){
			if (menuObj.items[menuObj.items.length-1].style.display != "none"){
				newActive=menuObj.items.length-1;
			}
			else{
			   newActive = 0;
			   return;
			}
	}
		bDown = "false";
	}
  if (newActive=="dvdr") {
             if (menuObj.activeItem>-1) {
                  if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) {
                  menuObj.items[menuObj.activeItem].className="urMnuRowDsbl";
                  } else {
                          menuObj.items[menuObj.activeItem].className="urMnuRowOff";
                  }
             }
  }
	if (newActive>-1) {
		if (menuObj.activeItem>-1) {
			if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) {
			  menuObj.items[menuObj.activeItem].className="urMnuRowDsbl";
		  } else {
			  menuObj.items[menuObj.activeItem].className="urMnuRowOff";
		  }
		  if (ur_system.is508) {
		  	with(menuObj.items[menuObj.activeItem]) {
		  	  for (var i=0;i<childNodes.length;i++) {
		  	    if (childNodes.item(i).className=="urMnuTxt") {
		  	    	sapUrMapi_setTabIndex(childNodes.item(i),-1);
		  	    	break;
		  	    }
		  	  }
		  	}
		  }
		}
		menuObj.activeItem =  newActive;
		if (menuObj.activeItem>-1) {
		  if (ur_system.is508) {
				while (menuObj.items[menuObj.activeItem].style.display == "none"){
					sapUrMapi_PopupMenu_manualScroll(win, sId, bDown, true);
				}
		  	with(menuObj.items[menuObj.activeItem]) {
		  	  for (var i=0;i<childNodes.length;i++) {
		  	    if (childNodes.item(i).className=="urMnuTxt") {
		  	    	sapUrMapi_setTabIndex(childNodes.item(i),0);
		  	    	
		  	    	break;
		  	    }
		  	  }
		  	}
		  }
     if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) {
			  menuObj.items[menuObj.activeItem].className="urMnuRowDsblOn";
		  } else {
			  menuObj.items[menuObj.activeItem].className="urMnuRowOn";
		  }
		}
	} else {
		if (newActive==-1) {
			if (ur_system.is508) {
				if (menuObj) {
					if (menuObj.items) {
				  	for (var j=0;j<menuObj.items.length;j++) {
				 			if (menuObj.items[j]) {
					  		with(menuObj.items[j]) {
						  	  for (var i=0;i<childNodes.length;i++) {
						  	    if (childNodes.item(i).className=="urMnuTxt") {
						  	    	sapUrMapi_setTabIndex(childNodes.item(i),-1);
						  	    	break;
						  	    }
						  	  }
						  	}
					  	}
					  }
					}
				}
		  }
		  if (menuObj) {
			  if (menuObj.items.length>0) {
			  	if (menuObj.items[menuObj.activeItem]) {
						if (ur_getAttD(menuObj.items[menuObj.activeItem],"st","").indexOf("d")>-1) {
						  menuObj.items[menuObj.activeItem].className="urMnuRowDsbl";
					  } else {
						  menuObj.items[menuObj.activeItem].className="urMnuRow";
					  }
					}
				}
			}
		}
	}
}
function sapUrMapi_PopupMenu(items) {
	this.activeItem = -1;
	this.items = new Array();
	for (var i=0;i<items.length;i++) {
		if (items.item(i).childNodes.item(0).className!="urMnuDvdr") {
			this.items[this.items.length]=items.item(i);
			if (this.items[this.items.length-1].className.indexOf("On")>-1) {
				this.activeItem=this.items.length-1;
			}
			this.items[this.items.length-1].setAttribute("Idx",this.items.length-1);
		}
	}
	return this;
}
function sapUrMapi_PopupMenu_keyDown(mywindow,id,e) {
	if (e.keyCode==27) {
	  hidePopupMenu();
		return;
	}
	if (e.keyCode==40) { 
	  sapUrMapi_PopupMenu_setItemActive(mywindow,"next", id);
	}
	if (e.keyCode==38) { 
	  sapUrMapi_PopupMenu_setItemActive(mywindow,"prev", id);
	}
	if (e.keyCode==39) { 
	  if (ur_system.direction == "rtl") {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"closesub", id);
		e.cancelBubble=true;
		return;
	  } else {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"opensubkey", id);
	  }
    }
	if (e.keyCode==37) { 
	  if (ur_system.direction == "rtl") {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"opensubkey", id);
	  } else {
	    sapUrMapi_PopupMenu_setItemActive(mywindow,"closesub", id);
		e.cancelBubble=true;
		return;
	  }
	}
	if (e.keyCode==13) { 
	  ur_PopupMenu_click(mywindow,id,e);
	}
	if (e.keyCode!=9) {
	  e.cancelBubble=true;
	  e.returnValue=false;
	} else {
		if (mywindow.menuObject) {
			mywindow.menuObject.out=true;
		}
		if(oPopup.source.object!=null){
			try {
			    ur_focus(oPopup.source.object);
			} catch(e) {}	
		}	
		hidePopupMenu();
	  e.cancelBubble=false;
	  e.returnValue=true;
	}
	return false;
}
function sapUrMapi_PopupMenu_ExecuteLink(id) {
  oItem = window.document.getElementById(id);
  sTarget = oItem.getAttribute("target");
  sHref   = oItem.getAttribute("href");
  oTarget = top.frames[sTarget];
  if (oTarget) {
  	oTarget.location.href=sHref;
  } else {
    window.open(sHref,sTarget,"");
	}
  }
function sapUrMapi_PopupMenu_drawInit( sId,oSubWindow ){
    var tbl = window.document.getElementById(sId+"-r");
	var rows = tbl.childNodes.item(1).rows;
	var visIdx = tbl.getAttribute("visidx") - 0;
    var visCnt = tbl.getAttribute("viscnt") - 0;
	var maxVisCnt = rows.length - visIdx;
	
  tbl.style.width = tbl.offsetWidth + "px";
	
	var maxHt = window.document.body.offsetHeight;
	var mnuHt = tbl.offsetHeight;
	var visBtns = true;
	if (visCnt==0) return;
	var oHead,oFoot;
	oHead=tbl.getElementsByTagName("THEAD")[0];
	oFoot=tbl.getElementsByTagName("TFOOT")[0];
  oHead.style.display = "";		
	oFoot.style.display = "";		
		
	
	if ((visIdx == 0) && (visCnt >= rows.length)){
		oHead.style.display = "none";
		oFoot.style.display = "none";
		
		for (var i = 0; i < rows.length; i++){
			if (rows[i].cells[0].className == "urMnuDvdr"){
				rows[i].cells[0].style.fontSize="5px";
			}
		}
		}
	
	
	if (visCnt <= 0){
		
		return false;
	}
	if (visCnt > maxVisCnt) {
	    
		visCnt = maxVisCnt;
		
	}
	var resetVisCnt = false;
	var upOn = false;
	var dnOn = false;
    for (var n = 0; n < rows.length; n++){
		
    if (n < visIdx){
			rows[n].style.display = "none";
			upOn = true;
    }
		else if (n == visIdx){
				
		}
		
		else if (n > visIdx && n < (visIdx + visCnt)){
				
		}
		else if (n >= (visIdx + visCnt)){
			
			for (var i = 0; i < rows[n].cells.length; i++){
				rows[n].cells[i].style.display = "none";
			}
			dnOn = true;
	}
}
	
	if (visBtns) {
	  if (!oSubWindow) {
	    sapUrMapi_PopupMenu_setButtons( sId, false, upOn );
	    sapUrMapi_PopupMenu_setButtons( sId, true, dnOn );
	  } else {
		sapUrMapi_PopupMenu_setButtons( sId, false, upOn, oSubWindow );
		sapUrMapi_PopupMenu_setButtons( sId, true, dnOn, oSubWindow );
	  }
    }
	  }
function sapUrMapi_PopupMenu_timeScroll(oWindow, sId, bDown, bCancel, e) {
    
    mnu.mnuWin = oWindow;
	e.stopPropagation();
    if (bCancel & mnu.intv == null){
        mnu.active = false;
        return false;
    }
    else if (bCancel){
        mnu.cancel = true;
        mnu.mnuWin.parent.clearInterval(mnu.intv);
        mnu.intv = null;
        
        if (mnu.active == false){
            sapUrMapi_PopupMenu_scrollItem(sId, bDown);
        }
        mnu.active = false;
    }
    else{
        mnu.cancel = false;
		mnu.intv = mnu.mnuWin.parent.setInterval("sapUrMapi_PopupMenu_scrollItem('" + sId + "', '" + bDown + "')", mnu.delay);
    }
}
function sapUrMapi_PopupMenu_manualScroll(oWindow, sId, bDown, bCancel, e ){
    
    mnu.mnuWin = oWindow;
    
	if (bCancel){
        mnu.cancel = true;
        mnu.mnuWin.parent.clearInterval(mnu.intv);
        mnu.intv = null;
        
        if (mnu.active == false){
            sapUrMapi_PopupMenu_scrollItem(sId, bDown);
        }
        mnu.active = false;
	}
	else{
    return false;
}
}
function sapUrMapi_PopupMenu_scrollItem(sId, bDown) {
    mnu.active = true;
    
	var tbl = mnu.mnuWin.document.getElementById(sId+"-r");
    var tbody = tbl.childNodes.item(1);
    
    var rIdx = tbl.getAttribute("visidx") - 0;
    var visCnt = tbl.getAttribute("viscnt") - 0;
    
    if (bDown == "true"){
        if ((rIdx + visCnt) >= tbody.rows.length){
            mnu.cancel = true;
        }
        else{
			
			for (var i = 0; i < tbody.rows[rIdx].cells.length; i++){
				tbody.rows[rIdx].cells[i].style.display = "none";
			}
			
			for (var i = 0; i < tbody.rows[rIdx + visCnt].cells.length; i++){
				tbody.rows[rIdx + visCnt].cells[i].style.display = "";
			}
            ++rIdx;
            tbl.setAttribute("visidx", rIdx);
            mnu.cancel = false;
        }
    }
    else{
       if (rIdx <= 0){
           mnu.cancel = true;
       }
       else{
           
		   for (var i = 0; i < tbody.rows[rIdx + visCnt - 1].cells.length; i++){
				tbody.rows[rIdx + visCnt - 1].cells[i].style.display = "none";
		   }
           --rIdx;
		   
		   for (var i = 0; i < tbody.rows[rIdx].cells.length; i++){
				tbody.rows[rIdx].cells[i].style.display = "";
		   }
           tbl.setAttribute("visidx", rIdx);
           mnu.cancel = false;
       }
    }
    
    if(mnu.cancel){
        mnu.mnuWin.parent.clearInterval(mnu.intv);
        mnu.intv = null;
        return;
    }
    else{
       
       if ((rIdx + visCnt - 0) >= tbody.rows.length){
           sapUrMapi_PopupMenu_setButtons(sId, true, false);
       }
       else{
           sapUrMapi_PopupMenu_setButtons(sId, true, true);
      }
       if (rIdx - 0 <= 0){
          sapUrMapi_PopupMenu_setButtons(sId, false, false);
	  }
       else{
          sapUrMapi_PopupMenu_setButtons(sId, false, true);
	  }
	}
}
function sapUrMapi_PopupMenu_setButtons( sId, bUp, bOn, oMenuWin ){
    var x;
    var node;
    (bUp)? x = 2 : x = 0;
		try {
			if (oMenuWin) {
			  node = oMenuWin.document.getElementById(sId+"-r").childNodes.item(x).childNodes.item(0).childNodes.item(0);
			} else {
	        if (mnu.mnuWin != null){
	         node = mnu.mnuWin.document.getElementById(sId+"-r").childNodes.item(x).childNodes.item(0).childNodes.item(0);
	        } else {
	         node = window.document.getElementById(sId+"-r").childNodes.item(x).childNodes.item(0).childNodes.item(0);
	        }
			}
			if (!bOn){
			  node.className = node.className.split("Dsbl")[0] + "Dsbl";
			} else {
		      node.className = node.className.split("Dsbl")[0];
			}
		}
		catch(e){
		}
}
function sapUrMapi_PopupMenu_setEvents(o,bExit) {
	if (o) {
		var tbls = o.frame.window.document.getElementsByTagName("TABLE");
		for (var z = 0; z < tbls.length; z++){
			if (tbls[z].getAttribute("viscnt") != null){
				var tbl = tbls[z];
			}
		}
		if (tbl.childNodes.item(1) != null){
		var items=tbl.childNodes.item(1).childNodes;
		}
		else{
		   var items=tbl.childNodes.item(0).childNodes;
		}
		o.frame.window.menuObject = sapUrMapi_PopupMenu(items);
		try {
		  o.frame.window.onkeydown=o.frame.window.document.getElementsByTagName("BODY").item(0).childNodes.item(0).childNodes.item(0).childNodes.item(0).onkeydown;
		} catch(ex) {}
		ur_focus(o.frame.window);
		itemsArray[o.frame.window.mylevel]=o.frame.window.menuObject;
		if (o.frame.window.mylevel>1) {
			sapUrMapi_PopupMenu_setItemActive(o.frame.window,subMenus[o.frame.window.mylevel].frame.window.menuObject.activeItem, "blank")
		} else {
	  	if (bExit==2){
		  	
  } else {
			 if (oPopup == null && oDatePicker != null){
				sapUrMapi_PopupMenu_setItemActive(oDatePicker.frame.window,-1, "blank");
			 }
			 if (oPopup != null && oDatePicker == null){
				sapUrMapi_PopupMenu_setItemActive(oPopup.frame.window,-1, "blank");
			 }
		  }
		}
		if (bExit==1){
	    sapUrMapi_PopupMenu_setItemActive(o.frame.window,"first", "blank");
	  }
  }
}
function sapUrMapi_PopupMenuItem_setDisabled( sPopupMenuId, iIdx){
  var tbl = window.document.getElementById(sPopupMenuId+"-r");
	if (isNaN(iIdx)) { return; }
	var rows = tbl.childNodes.item(1).rows;
	rows(iIdx).className="urMnuRowDsbl";
	rows(iIdx).setAttribute("dsbl","true");
	rows(iIdx).cells(1).oldTitle=rows(iIdx).cells(1).title;
       
}
function sapUrMapi_PopupMenuItem_setEnabled( sPopupMenuId, iIdx){
  var tbl = window.document.getElementById(sPopupMenuId+"-r");
	if (isNaN(iIdx)) { return; }
	var rows = tbl.childNodes.item(1).rows;
	rows(iIdx).className="urMnuRowOff";
	rows(iIdx).setAttribute("dsbl","false");
	rows(iIdx).cells(1).title=rows(iIdx).cells(1).oldTitle;
}
function sapUrMapi_ToolbarButton_openMenu( sButtonId, e){
	var sPopupId=document.getElementById(sButtonId+"-r").getAttribute("popup");
	if ((e.type!="click")&&(e.type!="contextmenu")) {
		if (!sapUrMapi_checkKey(e,"keydown",new Array("32","40"))) {
	    e.cancelBubble=true;
	    e.returnValue=true;
		  return false;
		}
	}
	if (ur_system.direction=="rtl") {
	  sapUrMapi_PopupMenu_showMenu(sButtonId+"-r",sPopupId,sapPopupPositionBehavior.MENURIGHT,e);
	} else {
	  sapUrMapi_PopupMenu_showMenu(sButtonId+"-r",sPopupId,sapPopupPositionBehavior.MENULEFT,e);
	}
  e.cancelBubble=false;
	if ((e.type=="contextmenu")) {
    e.returnValue=false;
  } else {
    e.returnValue=true;
  }
}
function sapUrMapi_PopupMenu_selectItem(oWnd,sItemId,bChecked,oEvt) {
	
   if(oEvt && oPopup && oPopup.idTrigger && document.getElementById(oPopup.idTrigger)) {
     if(!oEvt.ur_param) oEvt.ur_param = {};
   	 oEvt.ur_param.TriggerId = oPopup.idTrigger;
   }
	
   oWnd.me.sapUrMapi_ToolbarButton_setFunctionFromMenuItem(sItemId);  
   oWnd.me.sapUrMapi_PopupMenu_hideAll();
   ur_EVT_cancel(oEvt);
}
function mf_PopupMenu_getObj(sId,hWnd) {
	
	if (typeof(hWnd)=="undefined") hWnd=window;
	var o=hWnd.document.getElementById(sId);
	if (o.hasChildNodes() && o.firstChild.tagName=="XMP") {
	  o.innerHTML=o.firstChild.innerHTML; 
	}
	
  if (o==null) return;
  if (hWnd._ur_POMN.all[sId]==null) {
    
		var oPMn={id:sId,
		          ref:o,
		          evtref:o.childNodes[0],
		          items:new Array(),
		          shown:false,
		          frame:null};
		var oRows=o.getElementsByTagName("TBODY")[0].getElementsByTagName("TR");
		var iIdx=0;
		for (var i=0;i<oRows.length;i++) {
			var bHasSep=false;
			var oSepRef=null;
			if (oRows[i].firstChild.className.indexOf("urMnuDvdr")>-1) {
				bHasSep=true; 
				oSepRef=oRows[i];
				i++;
			}
			var oRow=oRows[i];
			var sSt=ur_getAttD(oRow,"st","");
			var sAtt=ur_getAttD(oRow,"att","");
			var sSmnu=ur_getAttD(oRow,"smnu","");
			oPMn.items.push({ref:oRow,
			                 sepref:oSepRef,
			                 idx:iIdx,
			                 Id:oRow.id,
			                 Enabled:sSt.indexOf("d")==-1,
			                 HasSubMenu:sSmnu!="",
											 SubMenuId:sSmnu,
			                 HasSeparator:sAtt.indexOf("s")>-1,
			                 Text:ur_getAttD(oRow,"t",""),
			                 CanCheck:(sSt.indexOf("n")>-1 || sSt.indexOf("s")>-1),
			                 GroupId:ur_getAttD(oRow,"gid",""),
			                 Checked:sSt.indexOf("s")>-1,
			                 HasIcon:sAtt.indexOf("i")>-1,
			                 IsLink:sAtt.indexOf("l")>-1,
			                 EnabledIconSrc:ur_getAttD(oRow,"eis",""),
			                 DisabledIconSrc:ur_getAttD(oRow,"dis",""),
			                 HasEllipsis:sAtt.indexOf("e")>-1,
			                 POPUPMENUITEMSELECT:ur_getAttD(oRow,"ocl",""),
			                 POPUPMENUITEMLINKCLICK:ur_getAttD(oRow,"olc",""),
			                 Hovered:false,
			                 Hidden:false,
			                 Menu:oPMn});
			iIdx++;
		}
		hWnd._ur_POMN.all[sId]=oPMn;
	}
	return hWnd._ur_POMN.all[sId];
}
function mf_PopupMenu_getTriggerId() {
	return _ur_POMN_triggerId.split("-")[0];
}
function ur_PopupMenu_render(oPMn) {
  var oTBdy=oPMn.ref.getElementsByTagName("TBODY")[0];
  var oTable=oPMn.ref.getElementsByTagName("TABLE")[0];
  oTable.style.width="";
  while (oTBdy.childNodes.length>0) oTBdy.removeChild(oTBdy.lastChild);
  for (var i=0;i<oPMn.items.length;i++) {
    var oItm=oPMn.items[i];
    var oH=document.createElement("TR");
    var oHTxtTd=document.createElement("TD");
    var oHTxtSpan=document.createElement("SPAN");
 
    var oHIcoTd=document.createElement("TD");
    var oHChkTd=document.createElement("TD");
    var oHTd=document.createElement("TD");
    var oHSubTd=document.createElement("TD");
    
    
    if (oItm.Enabled) oH.className="urMnuRowOff";
    else oH.className="urMnuRowDsbl";
    
    
    if (oItm.CanCheck) {
      if(oItm.GroupId!='')
        if (oItm.Checked) oHChkTd.className="urMnuChkRbgOn";
        else oHChkTd.className="urMnuChkRbg";
      else if (oItm.Checked) oHChkTd.className="urMnuChkOn";
      else oHChkTd.className="urMnuChk";
    } else {
     oHTxtTd.className="urMnuTxt";
    } 
    if (oItm.CanCheck) oHChkTd.innerHTML="&nbsp;&nbsp;&nbsp;";
    else oHChkTd.innerHTML="&nbsp;";
    
    if (oItm.HasIcon) {
      oHIcoTd.className="urMnuTxt";
      if (ur_system.direction=="RTL") oHIcoTd.style.paddingLeft="3px";
      else oHIcoTd.style.paddingRight="3px";
      oImg=document.createElement("IMG");
      if (oItm.Enabled) oImg.src=oItm.EnabledIconSrc;
      else oImg.src=oItm.DisabledIconSrc;		
      oImg.border="0";
      oHIcoTd.appendChild(oImg);
    } else {
      oHIcoTd.innerHTML="&nbsp;";
    }
    
    
    var sEll="";
    if (oItm.HasEllipsis) sEll="\u2026";
    var oHTxt=document.createTextNode(oItm.Text+sEll);
    oHTxtTd.className="urMnuTxt";
    oHTxtTd.appendChild(oHTxtSpan);
    oHTxtSpan.style.whiteSpace="nowrap";
    
    
    
    if (oItm.HasSubMenu) { oHSubTd.className="urMnuSubOn";oHSubTd.innerHTML="&nbsp;&nbsp;&nbsp;";
    } else {oHSubTd.className="urMnuSub";oHSubTd.innerHTML="&nbsp;";}
       
    
    oH.appendChild(oHChkTd);
    oH.appendChild(oHIcoTd);
    oH.appendChild(oHTxtTd);
    oH.appendChild(oHSubTd);
    oHTxtSpan.appendChild(oHTxt);
    if (oItm.HasSeparator) {
      var oHSep=document.createElement("TR");
      oHSep.setAttribute("class","urMnuRowOff");
      var oHSepTd=document.createElement("TD");
      oHSepTd.className="urMnuDvdr";
      oHSepTd.colSpan="4";
      var oHSepTmp=document.createElement("DIV")
      oHSepTmp.innerHTML="&nbsp;";
      oHSepTd.appendChild(oHSepTmp);
      oHSep.appendChild(oHSepTd);
	    oTBdy.appendChild(oHSep);
    }
    
    oH.setAttribute("id",oItm.Id);
    
    var sAtt="";
    sAtt+=oItm.HasSeparator?"s":"";
    sAtt+=oItm.HasEllipsis?"e":"";
    sAtt+=oItm.HasIcon?"i":"";
    sAtt+=oItm.IsLink?"l":"";
    oH.setAttribute("att",sAtt);
    var sSt="";
    if (!oItm.Enabled) sSt+="d";
    if (oItm.CanCheck) {
      if (oItm.Checked) sSt+="s";
      else sSt+="n";
    } 
    oH.setAttribute("st",sSt);
    oH.setAttribute("ocl",oItm.POPUPMENUITEMSELECT);
    oH.setAttribute("olc",oItm.POPUPMENUITEMLINKCLICK);
    
    if (oItm.HasSubMenu && oItm.SubMenuId!='') oH.setAttribute("smnu",oItm.SubMenuId);
    oH.setAttribute("t",oItm.Text);
    if (oItm.HasIcon) {
      oH.setAttribute("eis",oItm.EnabledIconSrc);
      oH.setAttribute("dis",oItm.DisabledIconSrc);
    }
	  oTBdy.appendChild(oH);
  }
  
  var sId=oPMn.id;
  _ur_POMN.all[sId]=null;
  if (!initMenus) initMenus = new Array();
  if (initMenus[sId]) initMenus[sId] = null;
  mf_PopupMenu_getObj(sId);
}
function mf_PopupMenu_addItem (oPMn,oItm) {
  oPMn.items[oPMn.items.length]=oItm;
}
function mf_PopupMenu_removeItem (oPMn,oItm) {
  var j=0;
  var items=new Array();
  for (var i=0;i<oPMn.items.length;i++) 
    if (oItm.Id!=oPMn.items[i].Id) items.push(oPMn.items[i]);
  oPMn.items=items
}
function mf_PopupMenu_replaceItem (oPMn,oOldItm,oNewItm) {
  var j=0;
  var oNewItems=new Array();
  for (var i=0;i<oPMn.items.length;i++) 
    if (oOldItm.Id==oPMn.items[i].Id) oPMn.items[i].Id=oNewItm;
}
function mf_PopupMenu_removeAllItems (oPMn) {
  oPMn.items=new Array();
  return oPMn;
}
function mf_PopupMenu_apply (oPMn) {
  ur_PopupMenu_render(oPMn);
  oPMn.ref.firstChild.style.width="";
}
function mf_PopupMenu_getItemById (oPMn,sItemId) {
  for (var i=0;i<oPMn.items.length;i++) 
    if (sItemId==oPMn.items[i].Id) return oPMn.items[i];
  return null;
}
function mf_PopupMenu_getItemByIdx (oPMn,iIdx) {
  return oPMn.items[iIdx];
}
function mf_PopupMenu_createItem (sId) {
  return {Id:sId,Enabled:true,HasSubMenu:false,SubMenuId:"",HasSeparator:false,Text:"",CanCheck:false,GroupId:"",Checked:false,HasIcon:false,EnabledIconSrc:"",DisabledIconSrc:"",HasEllipsis:false,TextDirection:"ltr",POPUPMENUITEMSELECT:"",POPUPMENUITEMLINKCLICK:"",Menu:null};
}
function ur_PopupMenu_click(hWnd,sId,oEvt) {
  var oItm=ur_EVT_src(oEvt);
  while (ur_getAttD(oItm,"ocl","")=="" && ur_getAttD(oItm,"olc","")=="") {
    if (oItm.tagName=="BODY" || oItm.className=="urMnuDvdr") return;
		else oItm=oItm.parentNode;
  }
  ur_EVT_addParam(oEvt,"ItemId",oItm.id);
  if (ur_getAttD(oItm,"st","").indexOf("d")>-1) return
  if (ur_getAttD(oItm,"ocl","")!="")  ur_EVT_fire(oItm,"ocl",oEvt,hWnd);  
  if (ur_getAttD(oItm,"olc","")!="") ur_EVT_fire(oItm,"olc",oEvt,hWnd);	
  ur_EVT_cancel(oEvt);
}
function ur_PopupMenu_keydown(hWnd,sId,oEvt) {
	if (oEvt.keyCode==27) {
		if (hWnd.menuObject) {
			if (hWnd.mylevel>0) {
				for (var i=hWnd.mylevel+1;i<subMenus.length;i++) {
				  if (subMenus[i]!=null) subMenus[i].hide();
				}
				sapUrMapi_PopupMenu_setItemActive(hWnd,"closesub", sId);
			} else {
				oPopup.source.object.focus();
				hidePopupMenu();
			}
		}
		return;
	}
	if (oEvt.keyCode==40) { 
	  var iIdx=hWnd.menu.activeItem.idx;
	  if (iIdx==hWnd.menu.items.length-1) iIdx=0;
	  else iIdx++;
	  var oItm=mf_PopupMenu_getItemByIdx(hWnd.menu,iIdx);
	  mf_PopupMenu_setItemDisplay(hWnd,oItm,"overkey",oEvt);
	  ur_EVT_cancel(oEvt);
	} else if (oEvt.keyCode==38) { 
	  var iIdx=hWnd.menu.activeItem.idx;
	  if (iIdx==0) iIdx=hWnd.menu.items.length-1;
	  else iIdx--;
	  var oItm=mf_PopupMenu_getItemByIdx(hWnd.menu,iIdx);
	  mf_PopupMenu_setItemDisplay(hWnd,oItm,"overkey",oEvt);
	  ur_EVT_cancel(oEvt);
	} else if (oEvt.keyCode==39) { 
	  if (ur_system.direction == "rtl") {
		  mf_PopupMenu_setItemDisplay(hWnd,hWnd.menu.activeItem,"closekey",oEvt);
	  } else {
		  mf_PopupMenu_setItemDisplay(hWnd,hWnd.menu.activeItem,"openkey",oEvt);
	  }
  } else if (oEvt.keyCode==37) { 
	  if (ur_system.direction == "rtl") {
		  mf_PopupMenu_setItemDisplay(hWnd,hWnd.menu.activeItem,"closekey");
	  } else {
		  mf_PopupMenu_setItemDisplay(hWnd,hWnd.menu.activeItem,"closekey");
	  }
	} else if (oEvt.keyCode==13) { 
		var item=hWnd.menuObject.items[hWnd.menuObject.activeItem];
    if (item.getAttribute("ocl")!=null && item.getAttribute("ocl")!="") ur_EVT_fire(item,"ocl",oEvt,hWnd);
    if (item.getAttribute("olc")!=null && item.getAttribute("olc")!="") ur_EVT_fire(item,"olc",oEvt,hWnd);
	} else if (oEvt.keyCode!=9) {
	  oEvt.cancelBubble=true;
	  oEvt.returnValue=false;
	} else {
		if (hWnd.menuObject) {
			hWnd.menuObject.out=true;
		}
		if(oPopup.source.object!=null) ur_focus(oPopup.source.object);
		hidePopupMenu();
	  oEvt.cancelBubble=false;
	  oEvt.returnValue=true;
	}
	return false;
}
function mf_PopupMenu_setScrollSettings(iFirstVisibleItem,iMaxVisibleItems) {
  var o=ur_get(sId+"-r");
  o.setAttribute("viscnt",iMaxVisibleItems);
  o.setAttribute("visidx",iFirstVisibleItem);
}
function mf_PopupMenu_getTriggeredUserData() {
  var o=ur_get(_ur_POMN_triggerId);
  if (o && o.getAttribute && o.getAttribute("ud")) {
	  return ur_getAttD(o,"ud","");
  }
  return _ur_POMN_triggerId;
}
function mf_triggerMenu_AtPosition(popupMenuId,left,top,bRemoveOnClose){
	var evt=new Object();
	evt.pageX=left;
	evt.pageY=top;
	sapUrMapi_PopupMenu_showMenu("",popupMenuId,sapPopupPositionBehavior.EVENT,evt,bRemoveOnClose)
}
function sapUrMapi_PopupMenu_removeAll(){
	if (oPopup) {
		var obj = oPopup.content.obj;
		sapUrMapi_PopupMenu_remove(obj);
	}
}
function sapUrMapi_PopupMenu_remove(obj){
	var items = obj.getElementsByTagName("TR"); 
	for (var i=0;i<items.length;i++) {
		var sSubMenu = items[i].getAttribute("smnu");
		if (sSubMenu) {
			var oSubMenu = ur_get(sSubMenu);
			if (oSubMenu && oSubMenu!=obj) sapUrMapi_PopupMenu_remove(oSubMenu);
		}
	}
	obj.parentNode.removeChild(obj);
}
//** PopupTrigger.ie5 **

function sapUrMapi_PopupTrigger_hover(sId,oEv) {
	if (ur_get(sId).firstChild == null) return;
	
	var oBtn = ur_get(sId + "-btn"),
		o = ur_get(sId),
		bIsInteractive = o.getAttribute("ia") == "t";
	
	if (oEv.type=="mouseover") {
		o.className = "urPopUpTrgWhl urPopUpTrHover";
		oBtn.className =  oBtn.className + " urPopUpTrgIndHover";
	}
	else if (oEv.type=="mouseout") {
		o.className = "urPopUpTrgWhl";
		oBtn.className = oBtn.className.split("urPopUpTrgIndHover")[0];
	}
}
function mf_PopupTrigger_openOnRequest(sId){
	var o=ur_get(sId);
	var oBtn = ur_get(sId+"-btn");
	
	if(oBtn)oBtn.click();
	else o.click();
}
function sapUrMapi_PopupTrigger_openMenu(sId,sMenuId,e) {
	var o=ur_get(sId);
	var bOpen=false;
	var eConMenu=false;
	var eClick=false;
	
	if(ur_system.is508 ) var oChild=sapUrMapi_findFirstFocus(o);
	if(oChild) var sChildId=oChild.getAttribute("id");
	else var sChildId=sId;
	
	var oBtn=ur_get(sId+"-btn");
	if((o && o.oncontextmenu) || (oBtn && oBtn.oncontextmenu)) {
	  eConMenu=true;
	  eClick=true;
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("121")) && eConMenu==true){
		bOpen=true;
	} else if (e.altKey && sapUrMapi_checkKey(e,"keydown",new Array("40")) && eClick==true){
		bOpen=true;
	} else if(e.type=="contextmenu" ||e.type=="click") {
		bOpen=true;
	}else if(sapUrMapi_checkKey(e,"keydown",new Array("115"))) {
		bOpen=true;
	}else if(e.keyCode==32 && e.srcElement.getAttribute("ct")!="POTRG"){ 
		bOpen=true;
	}else if(e.keyCode==32 && e.srcElement.getAttribute("id").indexOf("_selmenu")>-1){ 
		bOpen=true;
		e.cancelBubble=true;
	}
	if (bOpen &&sMenuId=="" )return ur_EVT_fire(o,"oreq",e);
	if (bOpen) {
		if (ur_system.direction=="rtl")
		  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENULEFT,e);
		else
	 	  sapUrMapi_PopupMenu_showMenu(sChildId,sMenuId,sapPopupPositionBehavior.MENURIGHT,e);
		  if (sapUrMapi_checkKey(e,"keydown",new Array("115","121")))return ur_EVT_cancel(e);
		  if (e.type=="contextmenu") {
		      e.returnValue=false;
		    } else {
			  ur_EVT_cancelBubble(e);
		      e.returnValue=true;
		    }
		  
	}
    
}
function sapUrMapi_PopupTrigger_RegisterCreate(sId) {
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_PopupTrigger_init('" + sId + "')");
}
function sapUrMapi_PopupTrigger_init(sId){
	   if (ur_get(sId) == null || ur_get(sId).firstChild == null) return;
	   var value = ur_get(sId).firstChild.style.width;
	   var percent = value.lastIndexOf('%');
	   if(percent < 3 && percent > -1)
	   {
	     ur_get(sId).style.width = sapUrMapi_sAddUnit( value , "%" );
	     ur_get(sId).firstChild.style.width = '100%';
	   }
}

//** PopupWindow.ie5 **

var ptrPopup = new URPopupManager();
function URPopupManager()
{
  this.hostWindow = null;
  this.popups = null;	
  this.ptrActiveXArray = new Array();
  this.IE = !document.addEventListener;
  this.bEncHTML = false;
  
};
URPopupManager.prototype.isRTL = function()
{
  return this.IE && ur_system.direction == "rtl";
};
function ptrGetPopupWindow()
{
    return ptrPopup;
};
URPopupManager.prototype.ptrGetParentPopupWindow = function()
{
	
	
	
	var popupManager = ptrGetPopupWindow();
	if ( ptrGetPopupWindow() && ptrGetPopupWindow().ptrGetSourceWindow() ) 
		popupManager = ptrGetPopupWindow().ptrGetSourceWindow().ptrGetPopupWindow();
	return popupManager;
};
URPopupManager.prototype.getPopups = function()
{
  if (this.popups != null)
    return this.popups;
  if (typeof(this.getHostWindow().urclassic_popupwindows) == "undefined"  )
    this.getHostWindow().urclassic_popupwindows = new this.getHostWindow().Array();
  return this.popups = this.getHostWindow().urclassic_popupwindows;
};
URPopupManager.prototype.getHostWindow = function()
{
    
    
  if (this.hostWindow != null)
      return this.hostWindow;
  var windows = new Array();
	
	var oWindow = window; 
	windows[windows.length] = oWindow;
	
	while (oWindow != oWindow.parent)
	{
		windows[windows.length] = oWindow.parent;
		oWindow = oWindow.parent;
	}
		
	for (var x = windows.length-1; x >= 0; x--)
	{
		var upperMostWindow = windows[x];
		
		
		try
		{
			upperMostWindow.document.domain;
            
			
			
			if (ur_system.browser_abbrev=="sf3" && upperMostWindow.location.origin && upperMostWindow.location.origin != window.location.origin) continue;
		}
		catch(e)
		{
			continue;
		}
		
		
		
		var iBs = upperMostWindow.document.getElementsByTagName("frameset").length;
		if (iBs > 0)
			continue;
		
		return this.hostWindow = upperMostWindow;		
	}
}
var CONSTANTS = 
{
    borderSize: 2, 
    left: 2,
    top: 23,
    right: 2,
    bottom: 31,
    typeLeft: 72,
    typeRight: 72,
    modlessOffset: 10,
    modalOffset: 30,
    waveBottom: 22,
    waveMid: 40,
    waveTop: 15,
    waveResize: 22
};
function URPopupWindow(
        sourceWindow,
        index,
        title,
        hasCloseButton,
        isResizable,
        text,
        popupManager, 
	    	initLeft,
    		initRight,
    		initTop,
        desiredWidth,
        desiredHeight,
        buttonStyle,
        sourceFocusId, 
        type,
        dialogMode, 
        popupId,
        url )
{
	  this.sourceWindow = sourceWindow;
	  this.index = index;
	  this.title = title;
    this.popupManager = popupManager;
    this.left = "0px";
    this.right = "0px";
    this.top = "0px";
    this.text = text;
    this.initLeft = initLeft;
    this.initRight = initRight;
    this.initTop = initTop;
    this.hasCloseButton = hasCloseButton;
    this.isResizable = isResizable;
    this.isInitial = true;
    this.isResized = false;
    this.isMoved = false;
    this.isMaximized = false;
    this.frameIndex = 0;
    this.strDomainRelaxScript = "<s"+"cript>try{parent.document.domain;}catch(e){document.domain='" + this.popupManager.getHostWindow().document.domain + "';}</scri" + "pt>";
    this.sourceWindow = sourceWindow;
    this.desiredWidth = desiredWidth;
    this.desiredHeight = desiredHeight;
    this.buttonStyle = buttonStyle;
    this.sourceFocusId = sourceFocusId;
  
    this.messageType = type;
    this.dialogMode = dialogMode;
    this.popupId = popupId;
    this.url = url;
    
    var iframeIndex = this.iframeIndex = this.popupManager._getAvailableIFrameIndex();
    
    
    this.outerIFrame = this.createIFrame("urPopupOuter" + iframeIndex);
    this.outerIFrame.setAttribute("scrolling", "no");	
    
    var that = this;
    this.initOuterHandler = function(){that.createHTML();};
    helperAddEventListener(this.outerIFrame,"load",this.initOuterHandler);  
    
   if (url.length > 0)
   {
        this.innerIFrame = this.createIFrame("urPopupInner" + iframeIndex);
        this.initInnerHandler = function(){that.initializeInnerIFrame();};
        
        helperAddEventListener(this.innerIFrame,"load",this.initInnerHandler);
         	
   }
       
}
URPopupWindow.prototype.initializeInnerIFrame = function()
{
    if (!this.innerIFrame)
      return;
      
    helperRemoveEventListener(this.innerIFrame,"load",this.initInnerHandler);
    
    var html = "";
    if (this.popupManager.isRTL())
        html = "<html dir=\"rtl\"><head>";
    else
        html = "<html><head>";
    html += this.strDomainRelaxScript;
    
    var absoluteURL = this.relativeToAbsolutePath(this.url,this.sourceWindow.location.href);
    
    html += "</head>";
    html += "<body id=\"ptrBodyLoading\" unselectable=\"on\" oncontextmenu=\"return false;\" style=\"margin:0;\" scroll=\"no\">";
    html += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"height:100%;width:100%;\">";
    html += "<tbody><tr><td align=\"center\" style=\"font-family:Arial\"><span style=\"font-size:0.8em\">Loading...</span></table>";
    html += "<sc" + "ript>window.setTimeout(function(){location.href='" + absoluteURL + "';},0);" + "</sc" + "ript>";
    html += "</body></html>";
    
    var innerWindow = this.innerIFrame.contentWindow;
    innerWindow.document.write(html);
    innerWindow.document.close();
}
URPopupManager.prototype._getAvailableIFrameIndex = function()
{
    
    
    var index = 0;
    while(true)
    {
        var iframe = this.getHostWindow().document.getElementById("urPopupOuter" + index);
         
        
        if (!iframe)
           return index;
            
        
        
        if (iframe.style.top == "-5000px")
        {
           iframe.style.top = "-4000px";
           return index;
        } 
        index++;
    }
    
}
URPopupManager.prototype._ptrShowPopupWindow = function (
		sourceWindow,
		initLeft,initRight,initTop,
		width,height,
	 	url ,
	 	title,
	 	text,
	 	buttonStyle, 	
	 	type,		
	 	logout,
	 	isMaximized,
	 	isResizable,
	 	dialogMode,
	 	popupId,
	 	hasCloseButton,
    sourceFocusId,
    hasTimeout)
{
    
   this._createBlocklayer();
   
    if (typeof sourceFocusId == "undefined")
    {
      sourceFocusId = "";
      
      if (this.IE)
      {
        if(event && event.srcElement)
        {
            sourceFocusId=event.srcElement.id;
        }
      }
    }
    
    this._blockActiveXControls();
		
	
	
	
	 try
	 {
        var popups = this.getPopups();
        for (var x = 0; x < popups.length; x++)
            popups[x].innerIFrame.contentWindow.document.body.focus();
        
	    sourceWindow.document.body.focus();
	}
    catch (e)
    {}
	
		
	
	var index = this.getPopups().length;
	var newPopup = this.getPopups()[index] = new URPopupWindow(sourceWindow,index,title,hasCloseButton,isResizable,text,this,initLeft,initRight,initTop,width,height,buttonStyle,sourceFocusId,type,dialogMode,index,url);
   	
  this.focusPopup(null);
		
  if (popupId.length > 0)
    newPopup.popupId = popupId;
          
}
URPopupWindow.prototype.createHTML = function()
{
  if (!this.outerIFrame)
    return;
  
  helperRemoveEventListener(this.outerIFrame,"load",this.initOuterHandler);
  
  var html = "";
  if (this.popupManager.isRTL())
      html = "<html dir=\"rtl\"><head>";
  else
      html = "<html><head>";
  
  
  
  html += "<link rel=\"stylesheet\" href=\"" + this.getPopupStyles() + "\"/>";
  html += "<link rel=\"stylesheet\" href=\"" + this.getFoundationStyles() + "\"/>";
	
  
  html += this.strDomainRelaxScript;
  
  var outerIFrameWindow = this.outerIFrame.contentWindow;
  
  if (typeof(outerIFrameWindow.parent.popupRef) == "undefined"  )
    outerIFrameWindow.parent.popupRef = new (outerIFrameWindow.parent).Array()
  
  outerIFrameWindow.parent.popupRef[this.popupId] = this;
  html += "<script>var thisPopup = parent.popupRef['" + this.popupId + "'];</script>";
    
  
  
  html += this._getCSS();
  html += "</head>";
      
  html += "<body onkeydown='if (event.keyCode==8) return false;' id=\"iframePopupBody\" unselectable=\"on\" oncontextmenu=\"return false;\" class=\"urPopBdyStd urPopFont\">";
  		
  var width = 200;
  var height = 120;
     
  
  html += "<div tabindex=\"0\" id=\"ptrFocusReverse\" onfocus=\"thisPopup.focusLastElement()\"></div>";
  html += "<div id=\"iframePopupDivOuterFrame\" class=\"urPopFrame1\" style=\"width:" + width + ";height:" + height + ";\">";
  html += "<div class=\"urPopFrame2\" id=\"urPopFrame2\" style=\"width:100%;height:100%\">";
  html += "<div id=\"iframePopupDivHeader\" tabindex=\"0\" class=\"urPopTitleArea\">";
  html += "<table width='100%' class='urPopFont' cellspacing='0' cellpadding='0' border='0'><tr>";
  html += "<td id='urPopupWindowTitle' class='urPopTitleAreaHeader'";
  if (ur_system.is508 == false && this.isResizable == true)
  {
      html += " ondblclick='thisPopup.toggleMinMax();'";
  }
  html += ">";
  
  
  html += "<div id=\"iframePopupDivHeaderText\" class=\"urPopTitle\" style='height:100%;width:" + 150 + ";' onmousedown='return thisPopup.startDrag(event,false)' title='";
	var titleText = this.popupManager.bEncHTML ? toHTMLEntities(this.title) : this.title;
  if (ur_system.is508 == false)
  {
	  html += titleText;
  }
  else
  {
      var transText = ur_txt[ur_language].SAPUR_POPUP.replace("{0}", titleText);
      html += transText;
  }
  html += "'>";
  
   html += titleText;
          
   html += "</div></td>";
  
  
  if (this.isResizable)
  {
      html += "<td align='";
      if (this.popupManager.isRTL())
      		html += "left";
      else
          html += "right"; 
      
      html += "' class='urPopTitleAreaResize'>";
      html += "<div tabindex=\"0\" border='0' id='ptrPopupToggleIconId' onkeypress='if(event.keyCode==13){thisPopup.toggleMinMax();};'";
      html += " onClick='thisPopup.toggleMinMax()' class='urPopFrameMax'";
	  
     var sTitle = "Resize";
	 
      if (ur_system.is508)
      {
          sTitle += " - " + ur_txt[ur_language].SAPUR_B + " - " + ur_txt[ur_language].SAPUR_B_TUT;
      }
	  
	  html += " title='" + sTitle + "'>";
	  
	  html += "<img alt='' src='" + ur_system.mimepath + "1x1.gif' style='width:16px;height:16px'>";
      
 
      html += "</div></td>";
  }
  
  
  if (this.hasCloseButton == true)
  {
      html += "<td align='";
      if (this.popupManager.isRTL())
          html += "left";
      else
          html += "right";
      html += "' class='urPopTitleAreaClose'><div onkeypress='if(event.keyCode==13||event.keyCode==32){thisPopup.popupManager._closePopup(thisPopup,\"CANCEL\")};' id=\"headerCancel\" tabindex=\"0\" border='0' onClick='thisPopup.popupManager._closePopup(thisPopup,\"CANCEL\")' class='urPopFrameClose'";
      
      var sTitle = "Cancel";
      if (ur_system.is508)
      {
          sTitle += " - " + ur_txt[ur_language].SAPUR_B + " - " + ur_txt[ur_language].SAPUR_B_TUT;
      }
      html += " title='" + sTitle + "'>";
      html += "<img alt='' src='" + ur_system.mimepath + "1x1.gif' style='width:16px;height:16px'></div></td>";
  }
  html += "</tr></table>";
  html += "</div>";
	
  height -= CONSTANTS.top + CONSTANTS.bottom;
  width  -= CONSTANTS.left + CONSTANTS.right;
	
  var messageIconClass = "";
  var message508Text = "";
  if (this.messageType.length > 0)
  {
      if (this.messageType == "PTR_WARNING")
      {
          messageIconClass = "urPopIconWarning";
          message508Text = "Warning";
      }
      else if (this.messageType == "PTR_INFORMATION")
      {
          messageIconClass = "urPopIconInformation";
          message508Text = "Information";
      }
      else if (this.messageType == "PTR_QUESTION")
      {
          messageIconClass = "urPopIconQuestion";
          message508Text = "Question";
      }
      else if (this.messageType == "PTR_SUCCESS")
      {
          messageIconClass = "urPopIconSuccess";
          message508Text = "Success";
      }
      else if (this.messageType == "PTR_ERROR")
      {
          messageIconClass = "urPopIconError";
          message508Text = "Error";
      }
      else if (this.messageType == "PTR_STOP" || this.messageType == "PTR_STOPP")
      {
          messageIconClass = "urPopIconStopp";
          message508Text = "Stopp";
      }
  }
  if (messageIconClass.length > 0)
  {
      html += "<table width='100%' style=\"table-layout:fixed;\" cellspacing='0' cellpadding='0' border='0'><tr>";
      html += "<td valign='top' id='messageIcon' tabindex=\"0\"";
      if (ur_system.is508 == true)
      {
          html += " title='" + message508Text + " - " + ur_txt[ur_language].SAPUR_IMG + "'";
      }
      html += " class='urPopIconArea " + messageIconClass + "'><img alt='' src='" + ur_system.mimepath + "1x1.gif' style='width:32px;height:32px' alt=''></td>";
      if (this.url.length == 0)
      {
          var align = this.messageType.length > 0 ? this.popupManager.isRTL() ?  "right" : "left": "center";
          html += "<td style='text-align:" + align + ";vertical-align:middle;'>";
          html += "<div id='iframePopupDivInnerFrame' tabindex=\"0\" style='overflow:auto;position:relative;left:0;top:1px;height:" + height + ";'>";
          html += "<table class='urPopFont' style='height:100%;' cellspacing='0' cellpadding='0' border='0'><tr><td><div class='urPopTxtStd urPopFont'>" + this.text + "</div></td></tr></table>";
          html += "</div></td>";
      }
      else
      {
          html += "<td><div id=\"iframePopupDivInnerFrame\" tabindex=\"0\" onfocus=\"thisPopup.innerIFrame.contentWindow.document.getElementById('ptrFocusStart').focus();\">&nbsp;</div></td>";
      }
      html += "</tr></table>";
  }
  else 
  {
      html += "<div id=\"iframePopupDivInnerFrame\" tabindex=\"0\"";
      if (this.url.length > 0)
      {
          html += " onfocus=\"thisPopup.innerIFrame.contentWindow.document.getElementById('ptrFocusStart').focus();\"";
      }
      html += " style=\"overflow:auto;position:relative;top:1px;width:" + width + ";height:" + height + ";\">";
      if (this.url.length == 0)
      {
          html += "<table class='urPopFont' style='height:100%;' cellspacing='0' cellpadding='0' border='0'><tr>";
          html += "<td valign='top' style='padding:16px 22px 16px 22px'><div class='urPopTxtStd urPopFont'>" + this.text + "</div></td>";
          html += "</tr></table>";
      }
      html += "</div>";
  }
  
  if (typeof(this.buttonStyle) == "number" || (typeof(this.buttonStyle) == "string" && this.buttonStyle.length > 0 && this.buttonStyle!= "PTR_NONE"))
  {
      html += '<table id="ptrToolbarArea" style="height:' + (CONSTANTS.bottom - CONSTANTS.borderSize) + 'px;width:100%" cellpadding="0" border="0" cellspacing="0" class="urPopTbarWhl urPopFont" >';
      html += '<tr>';
      
      html += '<td valign="top" nowrap class="urPopWaveBottom"><img border = "0" style = "height:1px;width:' + CONSTANTS.waveBottom + 'px" src = "' + ur_system.mimepath + '1x1.gif" ></td>';
      html += '<td valign="top" nowrap class="urPopWaveMid"><img border="0" style = "height:1px;width:' + CONSTANTS.waveMid + 'px" src = "' + ur_system.mimepath + '1x1.gif" ></td>';
      html += '<td nowrap class="urPopWaveTop" style="width:' + CONSTANTS.waveTop + 'px;">  <img border = "0" style="height:1px;width:' + CONSTANTS.waveTop + 'px" src="' + ur_system.mimepath + '1x1.gif">';
      
      
      html += '<td valign="middle" align="right" nowrap class="urPopWaveTop">';
      html += '<table id="ptrToolbar" cellpadding="0" border="0" cellspacing="0" class="urPopFont"><tr><td valign="top" nowrap style="padding-top:4px" id="ptrToolbarContent" > ';
      
      html += _getButtonHTML(this.buttonStyle, this.index);
      
      
      html += '</tr></table></td>';
      
      if (ur_system.is508 == false && this.isResizable == true)
      {
          var align = "right";
          var padding = "left";
          if (this.popupManager.isRTL())
          {
              align = "left";
              padding = "right";
          }
          html += '<td nowrap style="width:' + CONSTANTS.waveResize + 'px;" class = "urPopWaveTop" valign = "bottom" align = "' + align + '" > ';
          html += '<div id="ptrPopupResizeIconId" class = "urPopFrameResize" onmousedown = "return thisPopup.startDrag(event,true);"><img src = "' + ur_system.mimepath + '1x1.gif" style = "width:17px;height: 17px "></div>';
      }
      else
      {
          html += '<td nowrap style="width:' + CONSTANTS.waveResize + 'px;" class = "urPopWaveTop"><img  border = "0" style = "height:1px;width:22px" src = "' + ur_system.mimepath + '1x1.gif" > ';
      }
      html += '</table>';
  }
  else
  {
      html += '<table id="ptrToolbarArea" style="height:' + (CONSTANTS.bottom - CONSTANTS.borderSize) + 'px;width:100%" cellpadding="0" border="0" cellspacing="0" class="urPopTbarWhl urPopFont" >';
      html += '<tr>';
      
      html += '<td valign="top" nowrap class=""><img border = "0" style = "height:1px;width:' + CONSTANTS.waveBottom + 'px" src = "' + ur_system.mimepath + '1x1.gif" ></td>';
      html += '<td valign="top" nowrap class=""><img border="0" style = "height:1px;width:' + CONSTANTS.waveMid + 'px" src = "' + ur_system.mimepath + '1x1.gif" ></td>';
      html += '<td nowrap class="" style="width:' + CONSTANTS.waveTop + 'px;">  <img border = "0" style="height:1px;width:' + CONSTANTS.waveTop + 'px" src="' + ur_system.mimepath + '1x1.gif">';
      
      
      html += '<td valign="middle" align="right" nowrap class="">';
      html += '<table id="ptrToolbar" cellpadding="0" border="0" cellspacing="0" class="urPopFont"><tr><td valign="top" nowrap style="padding-top:4px" id="ptrToolbarContent" > ';
      html += '</tr></table></td>';
      
      if (ur_system.is508 == false && this.isResizable == true)
      {
          var align = "right";
          var padding = "left";
          if (this.popupManager.isRTL())
          {
              align = "left";
              padding = "right";
          }
          html += '<td nowrap style="width:' + CONSTANTS.waveResize + 'px;" class = "" valign = "bottom" align = "' + align + '" > ';
          html += '<div id="ptrPopupResizeIconId" class = "urPopFrameResize" onmousedown = "return thisPopup.startDrag(event,true);"><img src = "' + ur_system.mimepath + '1x1.gif" style = "width:17px;height: 17px "></div>';
      }
      else
      {
          html += '<td nowrap style="width:' + CONSTANTS.waveResize + 'px;" class = ""><img width="22" border = "0" style = "height:1px;width:22px" src = "' + ur_system.mimepath + '1x1.gif" > ';
      }
      html += '</table>';
  }
      
  html += "</div></div><div tabindex=\"0\" onfocus=\"thisPopup.focusTitle();\"></div>";
  html += "</body>";
  
      
      
  if (this.url.length == 0)
      html += "<sc" + "ript>setTimeout(function(){thisPopup.forceInitialize();},0);" + "</sc" + "ript>";
  
  
  html += "</html>";
  
  
  outerIFrameWindow.document.onhelp = function(){return false;};
  outerIFrameWindow.document.write(html);
  outerIFrameWindow.thisPopup = this;
  
  
  if (this.popupManager.IE || navigator.userAgent.indexOf("Firefox") != -1)
  { 
    
    outerIFrameWindow.document.close();    
  }  
}
URPopupWindow.prototype.forceInitialize = function()
{
    this.initialize(this.sourceWindow.ptrDialogObj,false);
}
URPopupWindow.prototype.createIFrame = function(id)
{
    
    
    var iFrame = this.popupManager.getHostWindow().document.getElementById(id);
    if (iFrame == null)
    {
        iFrame = this.popupManager.getHostWindow().document.createElement("IFRAME");
    }
    
    
    iFrame.src = "javascript:void(0)";
    iFrame.setAttribute("frameBorder", "0");
    iFrame.setAttribute("id", id);
    iFrame.setAttribute("name", id);
    iFrame.setAttribute("tabIndex", "-1");
    iFrame.setAttribute("border", "no");
    iFrame.setAttribute("scrolling", "auto");
    iFrame.style.position = "absolute";
    iFrame.style.zIndex = "1001";
    iFrame.style.width = "0px";
    iFrame.style.height = "0px";
    iFrame.style.display = "block";
    iFrame.style.left = "0px";
    iFrame.style.right = "0px";
    iFrame.style.top = "-4000px";
    iFrame.style.overflow = "auto";
    
    if (!iFrame.parentNode)
      this.popupManager.getHostWindow().document.body.appendChild(iFrame);
    iFrame.src = this.getEmptyHoverUrl();
    return iFrame;
}
URPopupWindow.prototype.enableFocusRect = function(enable)
{
    var innerIFrameWindow = this.innerIFrame.contentWindow;
    try
    {
        var oC={top:innerIFrameWindow.ur_get("ur-topfocus"),bottom:innerIFrameWindow.ur_get("ur-bottomfocus"),left:innerIFrameWindow.ur_get("ur-leftfocus"),right:innerIFrameWindow.ur_get("ur-rightfocus")};
        for (x in oC)
        {
            oC[x].style.display = enable ? "block" : "none";
        }
    }catch(e){}
}
URPopupWindow.prototype.initialize = function(translationObj,resize)
{
    
    if (typeof(translationObj) != "undefined")
    {
        this.initLabels(translationObj);
        
        if (typeof(translationObj.sourceFocusId) == "string")
        {
            this.sourceFocusId = translationObj.sourceFocusId;
        }
    }
    
    var sourceWindow = this.sourceWindow;
    var innerIFrameWindow = null;
    if (this.innerIFrame != null)
    {
        innerIFrameWindow = this.innerIFrame.contentWindow;
        innerIFrameWindow.sourceWindow = sourceWindow;
        
        if (innerIFrameWindow.document.body.className.indexOf("urPopBdyEmp") < 0)
        	innerIFrameWindow.document.body.className += " urPopBdyEmp";
    }
    
    var width = this.getWidth();
    var height = this.getHeight();
    
    var viewportSize = this.popupManager.getViewPortSize(this.popupManager.getHostWindow());
    var scrollOffset = this.popupManager.getScrollOffset(this.popupManager.getHostWindow());
    var modalOffset = CONSTANTS.modalOffset;
    
    if (!this.isResized)
    {
        var currentWidth = this.getWidth();
        var currentHeight = this.getHeight();
        
        if (innerIFrameWindow != null)
        {
            
            if (!this.popupManager.isRTL())
            {
                this.innerIFrame.style.width = "150px";
                this.innerIFrame.style.height = "150px";
            }
            
            if (this.isInitial)
            {
                
                
                
                
                
                if (this.desiredHeight != null)
                    this.innerIFrame.style.height = sapUrMapi_sAddUnit( this.desiredHeight , "px" );
                
                if (this.desiredWidth != null)
                    this.innerIFrame.style.width = sapUrMapi_sAddUnit( this.desiredWidth , "px" );
            }
            else if (this.popupManager.isRTL())
            {
              
            }
            
            
            
            if (this.popupManager.isRTL())
            {
                
                this.enableFocusRect(false);
                
                var bg = innerIFrameWindow.document.body.style.backgroundColor;
                innerIFrameWindow.document.body.style.backgroundColor = "transparent";
                innerIFrameWindow.document.body.style.backgroundColor = bg;
            }
            
            var pageSize = this.popupManager.getPageSize(innerIFrameWindow.document);
            
            if (this.popupManager.isRTL())
            { 
                this.enableFocusRect(true);
            }
            
            pageSize.height += 21 + 29 + 4;
	        pageSize.width += 4; 
            
	        width = pageSize.width;
	        height = pageSize.height;
	    }
        
        if (this.messageType.length > 0)
            width += CONSTANTS.typeLeft;
        
        
        
        if (this.isInitial)
        {
            if (this.desiredHeight != null)
                height = Math.max(height,parseInt(this.desiredHeight));
            
            if (this.desiredWidth != null)
                width  = Math.max(width,parseInt(this.desiredWidth));
        }
        
        
        height = Math.min(height,viewportSize.height - modalOffset);
        width = Math.min(width,viewportSize.width - modalOffset);    
        
        
        height = Math.max(height,currentHeight);
        width = Math.max(width,currentWidth);
        
	      
        height = Math.max(height,21 + 29 + 4 + 150);
        width = Math.max(width,4 + 160);        
        
        this.setWidth(width);
        this.setHeight(height);
        
        if (innerIFrameWindow != null)
        {
            
            var innerBody = innerIFrameWindow.document.body;
            innerIFrameWindow.document.body.scroll = "auto";
              
            var sw = innerBody.scrollWidth;
            var cw = innerBody.clientWidth;
            var ow = innerBody.offsetWidth;
            
            var sh = innerBody.scrollHeight;
            var ch = innerBody.clientHeight;
            var oh = innerBody.offsetHeight;
            
            if (ch < sh && this.isInitial)
            {
               
                width += 21;
                this.setWidth(width);
                
                if (!this.popupManager.IE)
                {
                    height += 1;
                    this.setHeight(height);
                }
                this.updateScrollBars();
            }
            
            
            
        }
    }   
    
    var position = this.getPosition();
    
    var left = position.left;
    var right = position.right;
    var top = position.top;
    
    if (this.isInitial)
    {
       
      
	    left = this.initLeft;
	    right = this.initRight;
	    top = this.initTop;
	    
	    if (left == null)
        left = scrollOffset.x  + viewportSize.width / 5 + this.index * modalOffset;
        
        
      if (right == null)
        right = scrollOffset.x  + viewportSize.width  / 5 + this.index * modalOffset;
           
      if (top == null)
        top = scrollOffset.y  + viewportSize.height  / 5  + this.index * modalOffset;
        
            
    }
    
    
    if (!this.isMoved)
    {
  
      var bottomRight = scrollOffset;
      bottomRight.x += viewportSize.width - modalOffset/2;
      bottomRight.y += viewportSize.height - modalOffset/2;
          
      if (right + width > bottomRight.x)
          right = bottomRight.x - width- modalOffset/2;
      
      if (left + width > bottomRight.x )
          left = bottomRight.x - width- modalOffset/2;
      
    if (top + height > bottomRight.y )
        top = bottomRight.y  - height;
	
	}
	
	this.setPosition(left,right,top);
    
  if (resize == false && this.index == this.popupManager.getPopups().length - 1)
  {
      
      this.popupManager.getPopups()[this.popupManager.getPopups().length-1].focusDefaultElement(translationObj);
  }  
  
  if (innerIFrameWindow != null)
      this.createFocusHelpers();
  
  if (this.isInitial)
  {
      this.popupManager.focusPopup(null);
      
      var that = this;
      var closeCallback = function(event)
      {
          if (!event)
              event = that.outerIFrame.contentWindow.event;
          
          if (!event && innerIFrameWindow)
              event = innerIFrameWindow.event;    
          
          
          if (event && event.keyCode == 27 && that.hasCloseButton)
          {
              if (event.preventDefault)
                event.preventDefault();
                
              that.popupManager._closePopup(that,"CANCEL");   
          }
      }
      
      helperAddEventListener(this.outerIFrame.contentWindow.document,"keypress", closeCallback);
      
      if (innerIFrameWindow)
          helperAddEventListener(innerIFrameWindow.document,"keypress", closeCallback);    
  }
  
  
  if (this.innerIFrame)
      this.innerIFrame.contentWindow.document.body.style.overflow = "";
      
  
  if (this.innerIFrame)
      this.innerIFrame.style.overflow = "";
  if (this.outerIFrame)
      this.outerIFrame.style.overflow = "";
  
  var that = this;
  setTimeout(function()
  {
      if (that.innerIFrame)
        that.innerIFrame.style.overflow = "auto";
      if (that.outerIFrame)
        that.outerIFrame.style.overflow = "auto";
      
      
      if (that.innerIFrame)
        that.innerIFrame.contentWindow.document.body.style.overflow = "auto";
      
  },100);
  
  
  this.isInitial = false;
  return innerIFrameWindow;
}
URPopupWindow.prototype.updateScrollBars = function()
{
  
  if (!this.innerIFrame)
    return;
  
  var innerBody = this.innerIFrame.contentWindow.document.body;
  
  var sw = innerBody.scrollWidth;
  var cw = innerBody.clientWidth;
  var ow = innerBody.offsetWidth;
  
  var sh = innerBody.scrollHeight;
  var ch = innerBody.clientHeight;
  var oh = innerBody.offsetHeight;
  
  var scroll = "no";
  if (sw > cw || sh > ch)
      scroll = "auto";
  
  this.innerIFrame.contentWindow.document.body.scroll = scroll;
  
}
URPopupManager.prototype._getIndexOfPopup = function(popup)
{
    for (var x = 0; x < this.getPopups().length; x++)
    {
        if (this.getPopups()[x] == popup)
            return x;
    }
    return null;
}
URPopupWindow.prototype.toggleMinMax = function()
{	
    
  
  this.isMoved = true;
  
  var outerWindow = this.outerIFrame.contentWindow;
  var iframePopupDivHeaderTextObj =  outerWindow.document.getElementById("iframePopupDivHeader");
  var titleAnimationDiv = this.popupManager.getHostWindow().document.getElementById("titleAnimationDiv");
  titleAnimationDiv.innerText = outerWindow.document.getElementById("iframePopupDivHeaderText").innerText;
  var height = iframePopupDivHeaderTextObj.clientHeight;
  
  var bodyLeft = this.popupManager.getHostWindow().document.body.scrollLeft;
  var bodyRight = this.popupManager.getHostWindow().document.body.scrollWidth - document.body.clientWidth - document.body.scrollLeft;
  var bodyWidth = this.popupManager.getHostWindow().document.body.clientWidth;
  var bodyTop = this.popupManager.getHostWindow().document.body.scrollTop;
  
  var position = this.getPosition();
  
  var popupRight = position.right;
	var popupTop = position.top;
	var popupLeft = position.left;
	var popupWidth = null;
	
	if (this.isMaximized)
	{
		popupRight = parseInt(this.midRight);
		popupTop = parseInt(this.midTop);
		popupLeft = parseInt(this.midLeft);
		popupWidth = parseInt(this.midWidth);
		
	}
	else
	{
	    this.midWidth = this.getWidth();
	    this.midHeight = this.getHeight();
	}
		
    titleAnimationDiv.style.display = "block";
    titleAnimationDiv.style.zIndex = this.outerIFrame.style.zIndex + 10;
    
    this.animateMinMax(titleAnimationDiv, 20, popupLeft,  bodyLeft, popupRight, bodyRight, popupWidth, bodyWidth, popupTop, bodyTop, height); 
    
}
URPopupWindow.prototype.animateMinMax = function( titleAnimationDiv, countAnimation, popupLeft, bodyLeft, popupRight, bodyRight, popupWidth, bodyWidth, popupTop, bodyTop, height)
{
  var left = 0;
  var right = 0;
  var width = 0;
  var top = 0;
  
  var factor = this.isMaximized == false ? 20-countAnimation: countAnimation;
  
  left = popupLeft;
  right = popupRight;
      
  if (countAnimation > 0)
  {
      left = popupLeft - parseInt((popupLeft - bodyLeft) / 20) * factor;
      right = popupRight - parseInt((popupRight - bodyRight) / 20) * factor;
  }
  else if (this.isMaximized == false)
  {
      left = bodyLeft;
      right = bodyRight;
  }
  	
  
  width = popupWidth;
  if (countAnimation > 0)
  {
      width = popupWidth - parseInt((popupWidth - bodyWidth) / 20) * factor;
  }
  else if (this.isMaximized == false)
  {
      width = bodyWidth;
  }
  
  
  top = popupTop;
  if (countAnimation > 0)
  {
      top = popupTop - parseInt((popupTop - bodyTop) / 20) * factor;
  }
  else if (this.isMaximized == false)
  {
      top = bodyTop;
  }
  
  titleAnimationDiv.style.top = top + "px";
  titleAnimationDiv.style.left = left + "px";
  titleAnimationDiv.style.right = right + "px";
  if (width)
    titleAnimationDiv.style.width = width + "px";
  titleAnimationDiv.style.height = height + "px";
      
  countAnimation--;
  
  if (countAnimation >= 0)
  {
      var that = this;
      window.setTimeout(function()
      {
          that.animateMinMax( titleAnimationDiv, countAnimation, popupLeft, bodyLeft, popupRight, bodyRight,
              popupWidth, bodyWidth, popupTop, bodyTop, height); 
      }
      , 0);
  }
  else
  {
      var that = this;
      window.setTimeout(function()
      {
        var outerWindow = that.outerIFrame.contentWindow;
        var toggleIcon = outerWindow.document.getElementById("ptrPopupToggleIconId");
        var resizeIcon = outerWindow.document.getElementById("ptrPopupResizeIconId");
          
        titleAnimationDiv.style.display = "none";
        
    	  if (that.isMaximized == false)
    	  {
  		    that.isMaximized = true;
  	       
  	      var position = that.getPosition();
  	        	
	        that.midLeft = position.left;
	        that.midRight = position.right;
	        that.midTop = position.top;
        	
	        resizeIcon.className = "urPopFrameResizeHide";
	        toggleIcon.className = "urPopFrameMid";
        		        	
	        that.maximize();
        	
	        that.autoResizeHandler = function()
	        {
	            that.maximize();
	        }
        	
	        helperAddEventListener(that.popupManager.getHostWindow(),"resize",that.autoResizeHandler);
  	        	
    	  }
        else if (that.isMaximized == true)
        {
      	  that.isMaximized = false;
      	  resizeIcon.className = "urPopFrameResize";
      	  toggleIcon.className = "urPopFrameMax";
        	
      	  that.setPosition(that.midLeft,that.midRight,that.midTop);
      	  that.setWidth(that.midWidth);
      	  that.setHeight(that.midHeight);
        	
      	  if (that.autoResizeHandler)
      	  {
      	      helperRemoveEventListener(that.popupManager.getHostWindow(),"resize",that.autoResizeHandler);
      	      that.autoResizeHandler = null;
      	  }
        }
         
      }
      , 0);
      
  }
}
URPopupWindow.prototype.maximize = function()
{
    
  var hostBody = this.popupManager.getHostWindow().document.body;
  
  var viewPortSize = this.popupManager.getViewPortSize(this.popupManager.getHostWindow());
  var pageSize = this.popupManager.getPageSize(this.popupManager.getHostWindow().document);
    
  var width = viewPortSize.width;
	var height = viewPortSize.height;
	var top = hostBody.scrollTop;
	var left = hostBody.scrollLeft;
  var right = hostBody.scrollWidth - hostBody.clientWidth - hostBody.scrollLeft;
	
	
	this.setPosition(left,right,top);
	this.setWidth(width);
	this.setHeight(height);
	
}
URPopupManager.prototype.ptrResizeModalDialog = function(popupId, style, translationObj)
{
    
    if (typeof(translationObj) != "object")
    	translationObj = new Object();
    
    
    var currentIndex = this.getPopups().length - 1;
    
    
    if (typeof(popupId) == "string" && popupId.length > 0)
    {
        for (var i = 0; i < this.getPopups().length; i++)
        {
            if (this.getPopups()[i].popupId == popupId)
            {
                currentIndex = i;
                translationObj.popupId = popupId;
                break;
            }
        }
    }
	var thePopup = this.getPopups()[currentIndex];
    if (thePopup.innerIFrame == null)
        return ;
    
    
    var ptrBodyLoadingObj = thePopup.innerIFrame.contentWindow.document.body;
    if (ptrBodyLoadingObj.id == "ptrBodyLoading")
        return;
    
   
   	
    if (thePopup.innerIFrame.contentWindow.document.body.className.indexOf("urPopBdyEmp") < 0)
    	thePopup.innerIFrame.contentWindow.document.body.className += " urPopBdyEmp";
    
    
    if (thePopup.innerIFrame != null)
    {
        
        thePopup.createFocusHelpers();
    }
		
	
    if (typeof(style) == "number")
    {
        if (typeof(thePopup.style) != "number" || thePopup.style != style)
        {
            thePopup.style = style;
            var html = "";
            for (var i = 0; i < style; i++)
            {
                html += _createButton(this.getPopups().length - 1, "BUTTON_" + i, "");
            }
           
            thePopup.outerIFrame.contentWindow.document.getElementById("ptrToolbarContent").innerHTML = html;
        }
    }
    
    
    var imgObj = thePopup.outerIFrame.contentWindow.document.getElementById("ptrPopupToggleIconId");
    if (imgObj == null || thePopup.isMaximized == false)
        this.ptrInitModalDialog(translationObj, true);
        
    if (thePopup.isMaximized)
      thePopup.updateScrollBars();    
    
}
URPopupWindow.prototype.buttonClick = function(buttonDomRef,keyCode)
{
  if (buttonDomRef.getAttribute("status") == "enabled")
    this.popupManager._closePopup(this,keyCode);
}
function _createButton(index, keyCode, text)
{
    var html = '<span><a tabindex="0" href="javascript:void(0);" onmouseover="window.status=\'\';return true;" onfocus="window.status=\'\';return true;" onkeypress="if(event.keyCode==13||event.keyCode==32){thisPopup.buttonClick(this,\'' + keyCode + '\');};" ';
    html += 'onClick="thisPopup.buttonClick(this,\'' + keyCode + '\');" ';
    html += 'class="urBtnStd urBorderBox urPopFont" ';
    html += 'status="enabled" ';
    html += 'id="' + keyCode + '" title="' + text;
    if (ur_system.is508 == true)
        html += " - " + ur_txt[ur_language].SAPUR_B + " - " + ur_txt[ur_language].SAPUR_B_TUT;
    html += '">'+text;
    html += '</a><span style="width:2px;">&nbsp;</span></span>';
    
    
    return html;
    var classes = "urPopTbarBtnStd urPopFont";
       
    var html = 	'<span onmousedown="event.cancelBubble=true" class="urPopTbarItmBtn" id="' + keyCode + '-r" show="true" cancollapse="false" > ';
    html += '<a href="javascript:void(0);" onmouseover="window.status=\'\';return true;" onkeypress="if(event.keyCode==13||event.keyCode==32){this.click();};" ';
    html += 'onClick="thisPopup.popupManager._closePopup(thisPopup,\'' + keyCode + '\');" ';
    
    html += 'class="' + classes + '" ';
    html += 'status="enabled" ';
    html += 'id="' + keyCode + '" title="' + text;
    
    if (ur_system.is508 == true)
        html += " - " + ur_txt[ur_language].SAPUR_B + " - " + ur_txt[ur_language].SAPUR_B_TUT;
    
    html += '">';
    html += '<span style="white-space:nowrap;">' + text + '</span>';
    html += '</a>';
    html += '</span>';
   
    
    return html;
}
URPopupWindow.prototype._ptrUpdateButton = function(buttonDefinition, buttonDomRef)
{
  
  if (typeof(buttonDefinition) == "undefined" || buttonDomRef == null)
  	return;
  
  var text = "";
  var tooltip = "";
  
  if (typeof(buttonDefinition.title) != "undefined" || typeof(buttonDefinition.tooltip) != "undefined")
  {
    tooltip = typeof(buttonDefinition.title) != "undefined" ? buttonDefinition.title : buttonDefinition.tooltip;
  }
  
  if (ur_system.is508 == true)
  {
      
      text = buttonDefinition.text;
      
      
      text += " - " + (ur_txt[ur_language].SAPUR_B?ur_txt[ur_language].SAPUR_B:ur_txt[ur_language].SAPUR_BUTTON);
      
      
      if (tooltip != "" && tooltip != buttonDefinition.text)
        text += " - " + tooltip;
      
      
      if (typeof(buttonDefinition.enabled) == "boolean" && !buttonDefinition.enabled)
      {
        text += " - " + ur_txt[ur_language].SAPUR_DISABLED;
      }
      else
      {
        text += " - " + ur_txt[ur_language].SAPUR_B_TUT;
      }
  }
  else
  {
      if (tooltip)
        text = tooltip;
      else
        text = buttonDefinition.text;
  }
  
  buttonDomRef.title = text;
  
  var html = "";
  if (typeof(buttonDefinition.image) == "object" && typeof(buttonDefinition.image.src) == "string")
  {
    html = '<img border="0" align="absmiddle" src=   "' + buttonDefinition.image.src + '"alt = "';
    if (typeof(buttonDefinition.image.alt) == "string")
    {
        html += buttonDefinition.image.alt;
    }
    else
    {
        html += buttonDefinition.image.src;
    }
    html += '">&nbsp;';
  }
  
  
  if (typeof(buttonDefinition.enabled) == "boolean")
  {
    
    if (!buttonDefinition.enabled)
    {
      buttonDomRef.className = "urBtnStdDsbl urPopFont urBorderBox";
      buttonDomRef.setAttribute("status", "disabled");
      buttonDomRef.setAttribute("tabIndex", "-1");
    }
    else
    {
      buttonDomRef.className = "urBtnStd urPopFont urBorderBox";
      buttonDomRef.setAttribute("status", "enabled");
      buttonDomRef.setAttribute("tabIndex", "0");
    }
    
  }
  if (buttonDefinition.text)
    html += buttonDefinition.text;
  
  buttonDomRef.innerHTML = html;
}
URPopupWindow.prototype.initLabels = function(translationObj)
{
    
  if (typeof(translationObj) == "undefined")
      return;
  
  var popupWindow = this.outerIFrame.contentWindow;
  if (typeof(this.buttonStyle) == "number")
  {
    for (var i = 0; i < this.buttonStyle; i++)
    {
     this._ptrUpdateButton(translationObj["BUTTON_" + i], popupWindow.document.getElementById("BUTTON_" + i));
    }
  }
  else
  {
    if (popupWindow.document.getElementById("ABORT"))
      this._ptrUpdateButton(translationObj.ABORT, popupWindow.document.getElementById("ABORT"));
    
    if (popupWindow.document.getElementById("CLOSE"))
      this._ptrUpdateButton(translationObj.CLOSE, popupWindow.document.getElementById("CLOSE"));
    
    if (popupWindow.document.getElementById("RETRY"))
      this._ptrUpdateButton(translationObj.RETRY, popupWindow.document.getElementById("RETRY"));
    
    if (popupWindow.document.getElementById("IGNORE"))
      this._ptrUpdateButton(translationObj.IGNORE,popupWindow.document.getElementById("IGNORE"));
    
    if (popupWindow.document.getElementById("OK"))
      this._ptrUpdateButton(translationObj.OK,  popupWindow.document.getElementById("OK"));
    
    if (popupWindow.document.getElementById("YES"))
      this._ptrUpdateButton(translationObj.YES, popupWindow.document.getElementById("YES"));
    
    if (popupWindow.document.getElementById("NO"))
      this._ptrUpdateButton(translationObj.NO,  popupWindow.document.getElementById("NO"));
      
    if (popupWindow.document.getElementById("CANCEL"))  
      this._ptrUpdateButton(translationObj.CANCEL, popupWindow.document.getElementById("CANCEL"));
  }
  
  var titlebar = popupWindow.document.getElementById("iframePopupDivHeaderText");
  
	
  if (typeof(translationObj.title) != "undefined")
  {
    titlebar.innerHTML = translationObj.title;
    if (ur_system.is508 == true)
    {
       titlebar.title = ur_txt[ur_language].SAPUR_POPUP.replace("{0}", translationObj.title);
    }
    else
    {
      titlebar.title = translationObj.title;
    }
  }
  if (ur_system.is508 == true)
  {
    if (typeof(translationObj.accessibilityDescribtion) != "undefined")
    {
      titlebar.title = ur_txt[ur_language].SAPUR_POPUP.replace("{0}", translationObj.accessibilityDescribtion);
    }
    if (typeof(translationObj.accessibilityCancelButtonText) != "undefined")
    {
      var cancelButton = popupWindow.document.getElementById("headerCancel");
      
      if (cancelButton)
          cancelButton.title = translationObj.accessibilityCancelButtonText 
                             + " - " 
                             + ur_txt[ur_language].SAPUR_B 
                             + " - " 
                             + ur_txt[ur_language].SAPUR_B_TUT;
    }
    if (typeof(translationObj.accessibilityMessageIconText) != "undefined")
    {
      
      var messageIcon = popupWindow.document.getElementById("messageIcon");
      
      if (messageIcon)
          messageIcon.title = translationObj.accessibilityMessageIconText 
                              + " - " 
                              + ur_txt[ur_language].SAPUR_IMG;
    }
  }
}
URPopupManager.prototype.ptrSetTitle = function(popupId, title)
{
    var currentIndex = null;
    for (var i = 0; i < this.getPopups().length; i++)
    {
        if (this.getPopups()[i].popupId == popupId)
        {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex == null)
        return;
        
    this.getPopups()[currentIndex].initLabels({title: title});
}
URPopupManager.prototype.ptrGetWinRefById = function(popupId)
{
  var urlWindow = null;
  
  for (var i = 0; i < this.getPopups().length; i++)
  {
    if (popupId == this.getPopups()[i].popupId)
    {
      urlWindow = this.getPopups()[i].innerIFrame.contentWindow;
      break;
    }
  }
  return urlWindow;
}
URPopupManager.prototype.ptrInitDialogByWindow = function(urlWindow)
{
    this.ptrInitModalDialog( {popupId:ptrGetPopupId(urlWindow)} );
}
URPopupManager.prototype.ptrInitDialogById = function(popupId)
{
    this.ptrInitModalDialog( {popupId: popupId} );
}
URPopupManager.prototype.ptrGetPopupId = function(urlWindow)
{
    
  var popupId = null;
  for (var i = 0; i < this.getPopups().length; i++)
  {
      
    if (urlWindow == this.getPopups()[i].innerIFrame.contentWindow)
    {
      popupId = this.getPopups()[i].popupId;
      break;
    }
  }
  return popupId;
}
URPopupManager.prototype.getPopupById = function(id)
{
    
  var popup = null;
  for (var i = 0; i < this.getPopups().length; i++)
  {
      
    if (id == this.getPopups()[i].popupId)
    {
      return this.getPopups()[i];
    }
  }
  return null;
}
URPopupManager.prototype.ptrInitModalDialog = function(translationObj, resize)
{
	
	
	if (this.getPopups().length == 0)
        return ;
    
  var currentIndex = this.getPopups().length-1;
  
  if (typeof(translationObj) != "undefined" && translationObj != null)
  {
    if (typeof(translationObj.popupId) != "undefined")
    {
      for (var i = 0; i < this.getPopups().length; i++)
      {
        if (this.getPopups()[i].popupId == translationObj.popupId)
        {
          currentIndex = i;
          
          break;
        }
      }
    }
  }
    
  if (typeof(resize) == "undefined")
    resize = false;
    
  var popup = this.getPopups()[currentIndex];
  
  popup.initialize(translationObj,resize);
  
 	var innerIFrameWindow = popup.innerIFrame.contentWindow;
 	innerIFrameWindow.sourceWindow = popup.sourceWindow;
 	return innerIFrameWindow;
}
URPopupWindow.prototype.getWidth = function()
{
  var width = parseInt(this.outerIFrame.style.width);
  if (isNaN(width))
    width = 0;
  return width;
}
	
URPopupWindow.prototype.getHeight = function()
{
  var height = parseInt(this.outerIFrame.style.height);
  if (isNaN(height))
      height = 0;
  return height;
    
}
URPopupWindow.prototype.getPosition = function()
{
  var left = parseInt(this.outerIFrame.style.left);
  if (isNaN(left))
    left = 0;
  
  var right = parseInt(this.outerIFrame.style.right);
  if (isNaN(right))
    right = 0;
  
  var top = parseInt(this.outerIFrame.style.top);
  if (isNaN(top))
    top = 0;
  
  return {left:left,right:right,top:top};
}
URPopupWindow.prototype.setHeight = function(height)
{
  height = Math.max(height, 21 + 29 + 4 + 90); 
  
  var outerWindow = this.outerIFrame.contentWindow;
  var outerBorderDiv = outerWindow.document.getElementById("iframePopupDivOuterFrame");
  var innerBorderDiv = outerWindow.document.getElementById("iframePopupDivInnerFrame");
  
  this.outerIFrame.style.height = height + "px";
  
  outerWindow.document.getElementById("urPopFrame2").style.height = (height - 4) + "px";
  
  outerBorderDiv.style.height = (height - 2) + "px";
  innerBorderDiv.style.height = (height - 1 - CONSTANTS.top - CONSTANTS.bottom) + "px";
  if (this.innerIFrame != null)
  {
    this.innerIFrame.style.height = (height - CONSTANTS.top - CONSTANTS.bottom) + "px";
  }
}
URPopupWindow.prototype.setWidth = function( width)
{
    
  width = Math.max(width,this.getToolbarWidth());
  width = Math.max(width,210);
      
  var outerWindow = this.outerIFrame.contentWindow;
  var outerBorderDiv = outerWindow.document.getElementById("iframePopupDivOuterFrame");
  var innerBorderDiv = outerWindow.document.getElementById("iframePopupDivInnerFrame");
  var iframePopupDivHeaderTextObj = outerWindow.document.getElementById("iframePopupDivHeaderText");
  
  this.outerIFrame.style.width = width + "px";
  outerBorderDiv.style.width = width + "px";
  iframePopupDivHeaderTextObj.style.width = (width - 50)  + "px";
  
  if (!this.popupManager.IE)
  {
    outerBorderDiv.style.width = (width - 2) + "px";
    outerWindow.document.getElementById("urPopFrame2").style.width = (width - 4) + "px";
  }
  
  
  if (this.innerIFrame)
  {
	  var innerIFrameStyle = this.innerIFrame.style;
    if (this.messageType.length == 0)
    {
      innerIFrameStyle.width = (width - (CONSTANTS.left + CONSTANTS.right)) + "px";
        
    }
    else
    {
      if (this.popupManager.isRTL())
      {
        innerIFrameStyle.width = (width- CONSTANTS.left	- CONSTANTS.typeRight) + "px";
      }
      else
      {
    	  innerIFrameStyle.width = (width - CONSTANTS.right - CONSTANTS.typeLeft) + "px";
      }
    }
  }
  else 
  {
      
    var innerWidth = width - CONSTANTS.left - CONSTANTS.right;
    if (this.messageType.length > 0)
    {
      if (this.popupManager.isRTL())
      {
        innerBorderDiv.style.width = (innerWidth - CONSTANTS.typeRight) + "px";
      }
      else
      {
        innerBorderDiv.style.width = (innerWidth - CONSTANTS.typeLeft) + "px";
      }
    
    }
    else
    {
      innerBorderDiv.style.width = innerWidth + "px";
        
    }
      
  }
}
URPopupManager.prototype.focusTitle = function(popupId)
{
  for (var x = 0; x < this.getPopups().length; x++)
  {
    if (this.getPopups()[x].popupId == popupId)
    {
      return this.getPopups()[x].focusTitle();
    }    
  }
  return false;
}
URPopupWindow.prototype.focusTitle = function()
{
  try
  {
    this.outerIFrame.contentWindow.document.getElementById("iframePopupDivHeader").focus();
  }
  catch (e)
  {
    return false;
  }          
  return true;
}
URPopupWindow.prototype.focusDefaultElement = function(obj)
{
	
	if (ur_system.is508)
	{
	  this.focusTitle();
	  return;
	}
	
  var outerWindow = this.outerIFrame.contentWindow;
  var focusId = "iframePopupDivHeader";
  
  if (!obj)
    return;
  	
	if (typeof(obj.applFocusId) != "undefined")
	{
    focusId = obj.applFocusId;
    try
    {
        this.innerIFrame.contentWindow.document.getElementById(focusId).focus();
    }
    catch (e)
    {
        outerWindow.document.getElementById("iframePopupDivHeader").focus();
    }
  }
  else if (typeof(obj.defaultFocusId) != "undefined")
  {
    focusId = obj.defaultFocusId;
    try
    {
        outerWindow.document.getElementById(focusId).focus();
    }
    catch (e)
    {
        
        try
    	{
		if (outerWindow.document.getElementById("iframePopupDivHeader").focus)
          		outerWindow.document.getElementById("iframePopupDivHeader").focus();
        } catch (e) {}
    }
  }
  
}
function _canFocus(domElement)
{
   if (domElement == null)
      return false;
  if (!domElement.tagName)
      return false;
      
  var tag = "," + domElement.tagName + ",";
  
  if ((tag == ",INPUT,") && (domElement.type == "hidden" || domElement.disabled))
     return false;
  
  var search = ",A,BODY,BUTTON,FRAME,IFRAME,INPUT,ISINDEX,OBJECT,SELECT,TEXTAREA,";
  
  if (!domElement.getAttribute)
      return false;
  
  if (search.indexOf(tag) >  -1)
  {   
      return (parseInt(domElement.getAttribute("tabIndex")) >= 0);
  }
      
  if (domElement.getAttribute("ti") != null)
  {
      return (parseInt(domElement.getAttribute("ti")) >= 0);
  }
  return false;
}
URPopupWindow.prototype.focusLastElement = function()
{
  try
  {
    
    if(this._findChildFocus(this.outerIFrame.contentWindow.document.getElementById('ptrToolbar'))==false)
    {
        this.focusElement(this.innerIFrame.contentWindow.document.getElementById('ptrFocusEnd').previousSibling,false);
    }
 
  }
  catch(e){};
   
}
URPopupWindow.prototype._findChildFocus = function(ele)
{
  var hasFocus = false;
  for (var i = 0; hasFocus == false && i < ele.childNodes.length; i++)
  {
    if (_canFocus(ele.childNodes.item(i)) == true)
    {
      ele.childNodes.item(i).focus();
      return true;
    }
    hasFocus = this._findChildFocus(ele.childNodes.item(i));
  }
  return hasFocus;
}
URPopupWindow.prototype.focusElement = function(ele,next)
{
   
  do
  {
    if (ele.id != 'urFrames' && ele.id != 'sapPopup_Event')
    {    
       
      
      if (_canFocus(ele))
      {
        ele.setAttribute("tabIndex",0);
        try
        {
          ele.focus();
          return true;
        }
        catch (e){};
      }
                  
      var x = next? ele.firstChild:ele.lastChild;
    
      if (x && this.focusElement(x,next))
         return true;   
    }
    
    if (next)
        ele = ele.nextSibling;
    else
        ele = ele.previousSibling;    
     
  }
  while (ele != null);
  
  return false;
}
URPopupWindow.prototype.createFocusHelpers = function()
{
  var documentBody = this.innerIFrame.contentWindow.document.body;
  var spanFocusStart2 = null;
  if (this.innerIFrame.contentWindow.document.getElementById("ptrFocusStart2") == null)
  {
      
    spanFocusStart2 = this.innerIFrame.contentWindow.document.createElement("SPAN");
    spanFocusStart2.id = "ptrFocusStart2";
    spanFocusStart2.tabIndex = "0";
    var that = this;
    helperAddEventListener(spanFocusStart2,"focus",function(){try{that.outerIFrame.contentWindow.document.getElementById('iframePopupDivHeader').focus();}catch(e){};});
    documentBody.insertBefore(spanFocusStart2, documentBody.childNodes[0]);
  }
  
  if (this.innerIFrame.contentWindow.document.getElementById("ptrFocusStart") == null)
  {
      
    var spanFocusStart = this.innerIFrame.contentWindow.document.createElement("SPAN");
    spanFocusStart.id = "ptrFocusStart";
    spanFocusStart.tabIndex = "0";
    var that = this;
    helperAddEventListener(spanFocusStart,"focus",function(){try{that.focusElement(spanFocusStart2.nextSibling,true);}catch(e){};});
    documentBody.insertBefore(spanFocusStart, documentBody.childNodes[0]);
  }
  
  if (this.innerIFrame.contentWindow.document.getElementById("ptrFocusEnd") == null)
  {
    var spanFocusEnd = this.innerIFrame.contentWindow.document.createElement("SPAN");
    spanFocusEnd.id = "ptrFocusEnd";
    spanFocusEnd.tabIndex = "0";
    
    var that = this;
    var method = function()
    {
      try
      {
        
        if( that._findChildFocus(that.outerIFrame.contentWindow.document.getElementById('ptrToolbar'))==false)
        {
            that.outerIFrame.contentWindow.document.getElementById('iframePopupDivHeader').focus();
        }
     
      }
      catch(e){};
   }
    
   helperAddEventListener(spanFocusEnd,"focus",method);
   documentBody.appendChild(spanFocusEnd);
  }
   
}
URPopupManager.prototype.ptrGetSourceWindow = function(urlWindow)
{
    if (this.getPopups().length == 0)
        return urlWindow;
    var currentIndex = this.getPopups().length - 1;
    if (typeof(urlWindow) != "undefined")
    {
        for (var i = 0; i < this.getPopups().length; i++)
        {
            if (urlWindow == this.getPopups()[i].innerIFrame.contentWindow)
            {
                currentIndex = i;
            }
        }
    }
    
    return this.getPopups()[currentIndex].sourceWindow;
}
URPopupWindow.prototype.getPopupStyles = function()
{
  
  
  var abs = this.sourceWindow.location.href;
  
  var stylepathUrl = ur_system.stylepath;
  var stylepathArray = ur_system.stylepath.split("/");
  if (stylepathArray[stylepathArray.length - 2] != "ur")
  {
      stylepathUrl += "ur/";
  }
  var stylesheet = stylepathUrl + "ur_dia_" + ur_system.browser_abbrev + ".css";
  
  return this.relativeToAbsolutePath(stylesheet,abs);
}
URPopupWindow.prototype.getFoundationStyles = function()
{
  
  
  var abs = this.sourceWindow.location.href;
  
  var stylepathUrl = ur_system.stylepath;
  var stylepathArray = ur_system.stylepath.split("/");
  if (stylepathArray[stylepathArray.length - 2] != "ur")
  {
      stylepathUrl += "ur/";
  }
  
  var stylesheet = stylepathUrl + "ur_" + ur_system.browser_abbrev + ".css";
  
  return this.relativeToAbsolutePath(stylesheet,abs);
}
URPopupWindow.prototype.getEmptyHoverUrl = function()
{
    var abs = this.sourceWindow.location.href;
    var rel = ur_system.emptyhoverurl;
    
    return this.relativeToAbsolutePath(rel,abs);
}
URPopupWindow.prototype.relativeToAbsolutePath = function(relativeURL,baseURL)
{
    
  if(relativeURL.indexOf("http:/"+"/") !=-1 ) return relativeURL;
	if(relativeURL.indexOf("https:/"+"/") !=-1) return relativeURL;    
  if(relativeURL.indexOf("file:/"+"/") !=-1) return relativeURL;    
    
  if (relativeURL.indexOf("./") == -1) 
  {
	    
    if (baseURL.indexOf("?")!=-1) 
    {
      baseURL = baseURL.substring(0,baseURL.indexOf("?"));
    }
    
    if(relativeURL.indexOf("/") == 0) 
    {
      
      var urlParts = baseURL.split("/"+"/");
      var domain = urlParts[1].substring(0,urlParts[1].indexOf("/"));
      var baseURLPath = urlParts[0] + "/"+"/" + domain;
      
      return baseURLPath + relativeURL;
    }
    else
    {
      
      var baseURLPath = baseURL.substring(0,baseURL.lastIndexOf("/")+1);
      return baseURLPath + relativeURL;
    }
	    
  }
    
    var baseURLPath = baseURL;
    
    if (baseURLPath.indexOf("?") != -1) 
      baseURLPath = baseURLPath.substring(0,baseURLPath.indexOf("?"));
            
    baseURLPath = baseURLPath.substring(0,baseURLPath.lastIndexOf("/"));
    
    var relativeURLDots = relativeURL.substring(0,relativeURL.lastIndexOf("./")+2);
    
    while(relativeURLDots.lastIndexOf("..")>-1) 
    { 
      baseURLPath = baseURLPath.substring(0,baseURLPath.lastIndexOf("/"));
      relativeURLDots = relativeURLDots.substring(0,relativeURLDots.lastIndexOf(".."))+"/";
    }
  
    if (relativeURLDots.lastIndexOf("./")>-1) 
    {
        
      relativeURLDots = relativeURLDots.substring(0,relativeURLDots.lastIndexOf("./"))+"/";
      if (relativeURLDots.lastIndexOf("./")>-1) 
      {
        showError (relativeURL + " is not a valid relative url.");
      }
    }
    
    strNewAbsPath = baseURLPath + relativeURLDots + relativeURL.substring(relativeURL.lastIndexOf("./")+2,relativeURL.length);
    return strNewAbsPath;
}
URPopupManager.prototype.ptrCloseModalDialog = function(popupId, okCode)
{
  if (typeof(okCode) == "undefined")
  {
    okCode = null;
  }
  var currentIndex = this.getPopups().length - 1;
  if (typeof(popupId) != "undefined" && popupId.length > 0)
  {
    for (var i = 0; i < this.getPopups().length; i++)
    {
      if (this.getPopups()[i].popupId == popupId)
      {
        currentIndex = i;
      }
    }
  }
  this._closePopup(this.getPopups()[currentIndex],okCode);
}
URPopupManager.prototype._closePopup = function(thePopup,okCode)
{
  var close = (okCode == null)? true : thePopup.callback("ptrOnHideModalDialog",[okCode]);
  if (close == false)
  	return;
  
  if (thePopup.innerIFrame)
  {
    
    try
    {
        thePopup.innerIFrame.contentWindow.sapUrMapi_LoadingAnimation_cancel();  
        thePopup.innerIFrame.contentWindow.sapUrMapi_PopupMenu_hideAll();
    }
    catch (e)
    {
    }
  }
  
  if (thePopup.autoResizeHandler)
  {
    helperRemoveEventListener(this.getHostWindow(),"resize",thePopup.autoResizeHandler);
    thePopup.autoResizeHandler = null;
  }
  
  this._unblockActiveXControls();
  
  
  
  if (this.getPopups().length == 1) {
      
      try {
          var sourceWindow = thePopup.sourceWindow;
          if (typeof (thePopup.sourceFocusId) == "string" && thePopup.sourceFocusId.length > 0) {
              sourceWindow.document.getElementById(thePopup.sourceFocusId).setActive();
              if (sourceWindow.focusElement)
                  sourceWindow.focusElement(thePopup.sourceFocusId);
          }
          else {
              sourceWindow.document.body.setActive();
              if (sourceWindow.focusElement && sourceWindow.ur_context && !sourceWindow.ur_context.suppressFocus)
                  sourceWindow.document.body.focus();
          }
      }
      catch (e) { }
  }
  
  if (thePopup.outerIFrame.contentWindow.parent.popupRef)
    thePopup.outerIFrame.contentWindow.parent.popupRef[thePopup.popupId] = null;
  thePopup.outerIFrame.parentNode.removeChild(thePopup.outerIFrame);
  delete thePopup.outerIFrame;
  
  if (thePopup.innerIFrame != null)
  {
    thePopup.innerIFrame.parentNode.removeChild(thePopup.innerIFrame);
    delete thePopup.innerIFrame;
      
  }
	
		
	var index = this._getIndexOfPopup(thePopup);
	this.getPopups().splice(index,1);		
	
	if (index > 0)
	{
    this.focusPopup(this.getPopups()[index-1]);
    this.getPopups()[index-1].focusDefaultElement(null);
	}
	else
	  this.focusPopup(null);
	
}
URPopupManager.prototype._createBlocklayer = function()
{
  var documentBody = this.getHostWindow().document.body;
  var blockLayer = this.getHostWindow().document.getElementById("ptrBlockLayer");
  if (blockLayer == null)
  {    
      
    blockLayer = this.getHostWindow().document.createElement('div');
    blockLayer.id = "ptrBlockLayer";
    blockLayer.style.position = "absolute";
    blockLayer.style.left = "0px";
    blockLayer.style.right = "0px";
    blockLayer.style.top = "0px";
    blockLayer.style.display = "none";
    blockLayer.style.zIndex = "4999";
    blockLayer.tabIndex = "0";
    blockLayer.style.backgroundColor = "#FFFFFF";
    blockLayer.style.opacity = "0.6";
    blockLayer.style.filter = "alpha(opacity=60)";
	  
    var firstChild = documentBody.firstChild;
    documentBody.insertBefore(blockLayer,firstChild);
  }
  
  
  
  var titleAnimationBlock = this.getHostWindow().document.getElementById("titleAnimationDiv");
  if (titleAnimationBlock == null)
 	{
    titleAnimationBlock = this.getHostWindow().document.createElement('div');
    titleAnimationBlock.id = "titleAnimationDiv";
    titleAnimationBlock.style.fontFamily = "font-family:Arial,Helvetica,sans-serif";
    titleAnimationBlock.style.fontWeight = "bold";
    titleAnimationBlock.style.fontStyle = "normal";
    titleAnimationBlock.style.backgroundColor = "#999999";
    titleAnimationBlock.style.fontSize = "11px";
    titleAnimationBlock.style.color = "#FFFFFF";
    titleAnimationBlock.style.position = "absolute";
    titleAnimationBlock.style.left = "0px";
    titleAnimationBlock.style.top = "0px";
    titleAnimationBlock.style.display = "none";
    titleAnimationBlock.style.zIndex = "5999";
    titleAnimationBlock.style.width = "100%";
    titleAnimationBlock.style.paddingTop = "2px";
    titleAnimationBlock.style.overflow = "hidden";
    titleAnimationBlock.style.textOverflow = "ellipsis";
    documentBody.appendChild(titleAnimationBlock);
  }
}
URPopupManager.prototype._showBlocklayer = function(zIndex)
{
	this._resizeBlocklayer();
	var blockLayer = this.getHostWindow().document.getElementById("ptrBlockLayer");
	
  blockLayer.style.cursor = "not-allowed"; 
  blockLayer.style.display = "block";
  blockLayer.style.zIndex = zIndex;
  
  if (!ur_system.is508)
      blockLayer.style.backgroundColor = "#FFFFFF";
	
	blockLayer.oncontextmenu =  function(event)
  {
    event = event || window.event;
    if (event)
      event.cancelBubble=true;
        
    return false;             
      
  };
  var that = this;
  
  if (!blockLayer.onclick)
  {
    blockLayer.onclick = function()
    {
      var popups = that.getPopups();
      popups[popups.length-1].blink();
      
    };
  }
  if (!blockLayer.ondragstart)
  {
    blockLayer.ondragstart = function(event)
    {
      event = event || window.event;
      event.returnValue = false;
      return false;
    };
  }
  if (!blockLayer.onfocus)
  {
    blockLayer.onfocus = function()
    {
     
      var popups = that.getPopups();
      popups[popups.length-1].focusTitle();
         
    };
  }
	
	if (!this.focusCall)
  {    
    var that = this;
    this.focusCall = function()
    {
      var popups = that.getPopups();
      if (popups.length > 0)
        popups[popups.length-1].focusTitle();
    }
    helperAddEventListener(this.getHostWindow(),"focus", this.focusCall);
  }
	
	if (!this.resizeCall)
  {    
    var that = this;
    this.resizeCall = function()
    {
      that._resizeBlocklayer();
    }
    helperAddEventListener(this.getHostWindow(),"resize", this.resizeCall);
  }
    
}
URPopupManager.prototype._resizeBlocklayer = function()
{
    
  var blockLayer = this.getHostWindow().document.getElementById("ptrBlockLayer");
  var hostBody = this.getHostWindow().document.body;
  
  var viewPortSize = this.getViewPortSize(this.getHostWindow());
  
  var bodyScrollHeight = hostBody.scrollHeight;
  var bodyScrollWidth = hostBody.scrollWidth;
  var bodyClientHeight = viewPortSize.height;
  var bodyClientWidth = viewPortSize.width;
  
  blockLayer.style.height = Math.max(bodyScrollHeight, bodyClientHeight) + "px";
  blockLayer.style.width = Math.max(bodyScrollWidth, bodyClientWidth) + "px";
    
}
URPopupManager.prototype._hideBlocklayer = function()
{
	var blockLayer = this.getHostWindow().document.getElementById("ptrBlockLayer");
    
  blockLayer.style.cursor = "default";
  blockLayer.style.display = "none";
  
  if (typeof(this.resizeCall) != "undefined")
      helperRemoveEventListener(this.getHostWindow(),"resize",this.resizeCall);
  this.resizeCall = null; 
  if (typeof(this.focusCall) != "undefined")
      helperRemoveEventListener(this.getHostWindow(),"focus",this.focusCall);
  this.focusCall = null;
};
URPopupWindow.prototype.blink = function(step)
{
  if (typeof(step) == "undefined")
  {
    this.blink(5);
    return;
  }
  
  var visibility = (step % 2 == 0)? "visible" : "hidden"; 
	
	if (this.outerIFrame)
	  this.outerIFrame.style.visibility = visibility;
	
	var that = this;
	if (step > 0)
	{
		setTimeout (function () { that.blink( step-1); },80); 
	}
	else
	{
	  this.focusTitle();
	}
  
}
URPopupWindow.prototype.startDrag = function(event,resize)
{
  this.popupManager.focusPopup(this);
  
  if (this.isMaximized == true)
      return false;
  
  var outerIFrame = this.outerIFrame;
  var outerWindow = this.outerIFrame.contentWindow;
  var innerWindow = this.innerIFrame? this.innerIFrame.contentWindow : null;
      
  var srcElement;
  var theEvent;
  if (this.popupManager.IE)
  {
    if (outerWindow.event == null)
        return false;
    
    theEvent = outerWindow.event; 
    srcElement = theEvent.srcElement;
      
  }
  else
  {
    theEvent = event;
    srcElement = theEvent.target;
  } 
  
  this.popupManager.viewportSize = this.popupManager.getViewPortSize(this.popupManager.getHostWindow());
  this.popupManager.scrollOffset = this.popupManager.getScrollOffset(this.popupManager.getHostWindow());	
  
  this.moveData = 
  {
    srcElement: srcElement,
    startX: 	parseInt(outerIFrame.style.left),
    startXR: 	parseInt(outerIFrame.style.right),
    startY:		parseInt(outerIFrame.style.top), 
    startW: 	parseInt(outerIFrame.style.width), 
    startH: 	parseInt(outerIFrame.style.height),
    x: 			theEvent.screenX, 
    y: 			theEvent.screenY
  };
  
  this.resizeData = (resize == true);
  
  var that = this;
  this.movePopupCall = function(event)
  {
    if (!event)
        event = outerWindow.event;
    that.drag(event);
  }
  this.endPopupCall = function()
  {
    that.endDrag();
  }
  
  if (this.popupManager.IE)
  {
    srcElement.onmousemove = this.movePopupCall;
    srcElement.onmouseup = srcElement.onlosecapture = this.endPopupCall;
    srcElement.setCapture();
  }
  else
  {
    outerWindow.document.addEventListener("mousemove",this.movePopupCall,false);
    outerWindow.document.addEventListener("mouseup",this.endPopupCall,false);
    if(innerWindow!=null)
    {
      innerWindow.document.addEventListener("mousemove",this.movePopupCall,false);
      innerWindow.document.addEventListener("mouseup",this.endPopupCall,false);
    }
    this.popupManager.getHostWindow().document.addEventListener("mousemove",this.movePopupCall,false);
    
    this.popupManager.getHostWindow().document.addEventListener("mouseup",this.endPopupCall,false);
    
  
  }
  
  return false;
  
}
URPopupWindow.prototype.drag = function(event)
{
    
  if (!this.popupManager.IE)
       event.cancelBubble = true;
    
	var outerIFrame = this.outerIFrame;
	var innerIFrame = null;
	if (this.innerIFrame != null)
	{
		innerIFrame = this.innerIFrame;
		try
		{
		   
		   if (!this.innerIFrame.contentWindow._ur_LoadingPopup)
		    this.innerIFrame.contentWindow.sapUrMapi_PopupMenu_hideAll();
		}
		catch(e){};
	}
	
	var position = this.getPosition();
	var left = position.left;
	var right = position.right;
	var top = position.top;
	var width = this.getWidth();
	var height = this.getHeight();
			
  if (this.resizeData == true)
  {
    this.isResized = true;
    var minimumWidth = this.getToolbarWidth();
    
    if (this.innerIFrame != null)
      this.innerIFrame.contentWindow.document.body.scroll = "auto";
  
    var x = event.screenX - this.moveData.x;
    if (this.popupManager.isRTL())
    	x *= -1;
    
    var width = parseInt(this.moveData.startW + x);
    if (left + width < this.popupManager.scrollOffset.x + this.popupManager.viewportSize.width)
    {
        this.setWidth(width);
    }
    
    var height = this.moveData.startH + event.screenY - this.moveData.y;
    
    if (top + height < this.popupManager.scrollOffset.y + this.popupManager.viewportSize.height)
    {
       this.setHeight(height);    
    }
    
  }
  else
  {
  	this.isMoved = true;
  	
  	left = Math.max(this.moveData.startX + event.screenX - this.moveData.x, this.popupManager.scrollOffset.x);
  	right = Math.max(this.moveData.startXR - event.screenX + this.moveData.x,0);
  	top = Math.max(this.moveData.startY + event.screenY - this.moveData.y,this.popupManager.scrollOffset.y);
  	
  	left = Math.min(left, this.popupManager.scrollOffset.x+this.popupManager.viewportSize.width - this.getWidth());
  	top = Math.min(top, Math.max(0, this.popupManager.scrollOffset.y+this.popupManager.viewportSize.height - this.getHeight()));
  	
      
  }
     
  this.setPosition(left,right,top);
   
  return false;
}
URPopupWindow.prototype.endDrag = function()
{
  var innerWindow = null;
	if (this.innerIFrame != null)
	{
		innerWindow = this.innerIFrame.contentWindow;
	}
  
  var position = this.getPosition();
  
  var params = [this.popupId,position.left,position.right,position.top,this.getWidth(),this.getHeight()]
  
  if (this.resizeData == true)
      this.callback("ptrPopupResized",params);
  else    
      this.callback("ptrPopupMoved",params);
  
  var outerWindow = this.outerIFrame.contentWindow;    
  
  
  if (this.popupManager.IE)
  {
      var srcElement = this.moveData.srcElement;
      srcElement.releaseCapture();
      srcElement.onmousemove = srcElement.onmouseup = srcElement.onlosecapture =  null;
  }
  else
  {
    
    outerWindow.document.removeEventListener("mousemove",this.movePopupCall,false);
    outerWindow.document.removeEventListener("mouseup",this.endPopupCall,false);
    
    if(innerWindow != null)
    {
      innerWindow.document.removeEventListener("mousemove",this.movePopupCall,false);
      innerWindow.document.removeEventListener("mouseup",this.endPopupCall,false);
    }
    this.popupManager.getHostWindow().document.removeEventListener("mousemove",this.movePopupCall,false);
    this.popupManager.getHostWindow().document.removeEventListener("mouseup",this.endPopupCall,false);
  
  }
  
  this.movePopupCall = null;
  this.endPopupCall = null;
      
  this.popupManager._resizeBlocklayer();
}
URPopupManager.prototype.focusPopup = function(thePopup)
{
  this.focussedPopup = thePopup;
		
	var zIndex = 5000;
	var blocklayerZIndex = null;
		
	for (var x = 0; x <  this.getPopups().length; x++)
	{
		if (this.getPopups()[x])
		{
			var popup = this.getPopups()[x];
			
			
			
			if (popup.dialogMode == "alwaysOnTop")
			{
				popup.setZIndex(zIndex++ +100);
			}
			else if (popup.dialogMode == "modal")
			{
				blocklayerZIndex = zIndex+=2;
				
				popup.setZIndex(zIndex+=2);
				
			}
			else if (popup.dialogMode == "amodal")
			{
				popup.setZIndex(zIndex+=2);
				
			}
		}
	}
	
	if (this.focussedPopup != null)
	{
		this.focussedPopup.setZIndex(zIndex+ 101);
		try
		{
		  var oHeaderDomRef = this.focussedPopup.outerIFrame.contentWindow.document.getElementById("iframePopupDivHeader");
		}
		catch(e){};
		
		if (oHeaderDomRef && oHeaderDomRef.focus)
		  oHeaderDomRef.focus();
	}
	if (blocklayerZIndex != null)
	{
    if (this.focussedPopup) 
        this.focussedPopup.callback("ptrShowBlocklayer",[]);
	        
		this._showBlocklayer(blocklayerZIndex);
	}
	else
	{
		this._hideBlocklayer();
		
	}
}
URPopupWindow.prototype.setZIndex = function(zIndex)
{
	this.outerIFrame.style.zIndex = zIndex;
	
	if (!this.innerIFrame)
		return;
	
	this.innerIFrame.style.zIndex = zIndex+1;
}
URPopupWindow.prototype.callback = function(methodName,parameters)
{
    
  var res = null;
  if (this.innerIFrame)
  {
    var iframeInnerPopupWindow = this.innerIFrame.contentWindow;
    try
    {
  	  
      res = iframeInnerPopupWindow[methodName].apply(iframeInnerPopupWindow,parameters);
    }
    catch (e)
    {};
  }
  var sourceWindow = this.sourceWindow;
  if (res == null)
  {
    try
    {
      
      res = sourceWindow[methodName].apply(sourceWindow,parameters);
    }
    catch (e)
    {};
  }
  return res;
}
URPopupWindow.prototype.getToolbarWidth = function()
{
	var toolbarWidth = 0;
	try
	{
	  toolbarWidth += parseInt(this.outerIFrame.contentWindow.document.getElementById("ptrToolbar").scrollWidth);
	}
	catch(e){}
	
	return toolbarWidth 
		    + CONSTANTS.left 
		    + CONSTANTS.right 
		    + CONSTANTS.waveBottom 
		    + CONSTANTS.waveMid 
		    + CONSTANTS.waveTop 
		    + CONSTANTS.waveResize;	
}
URPopupWindow.prototype.setPosition = function(left, right, top)
{
	this.left = left + "px";
  this.right = right + "px";
  this.top = top + "px";
  var outerIFrame = this.outerIFrame;
  
  outerIFrame.style.right = right + "px";
  outerIFrame.style.left = left + "px";
  outerIFrame.style.top = top + "px";
  
  if (!this.innerIFrame)
	  return;
	
	var innerIFrame = this.innerIFrame;
	
	innerIFrame.style.top = (top + CONSTANTS.top + (this.popupManager.IE?0:1)) + "px";
		
  if (this.messageType.length == 0)
  {
  	innerIFrame.style.left = (left + CONSTANTS.left) + "px";
    innerIFrame.style.right = (right + CONSTANTS.right) + "px";
              
  }
  else
  {
  	innerIFrame.style.left = (left + CONSTANTS.typeLeft) + "px";
    innerIFrame.style.right = (right + CONSTANTS.typeRight)  + "px";
  }
       
}
function _getButtonHTML(buttonStyle, index)
{
	
	var html = "";
	
	
  if (typeof(buttonStyle) == "number")
  {
    for (var i = 0; i < buttonStyle; i++)
    {
      html += _createButton(index, "BUTTON_" + i, "");
    }
  }
  
  else
  {
    if (buttonStyle == "PTR_ABORTRETRYIGNORE")
        html += _createButton(index, "ABORT", "Abort");
    if (buttonStyle == "PTR_CLOSE")
        html += _createButton(index, "CLOSE", "Close");
    if (buttonStyle == "PTR_ABORTRETRYIGNORE" || buttonStyle == "PTR_RETRYCANCEL")
        html += _createButton(index, "RETRY", "Retry");
    if (buttonStyle == "PTR_ABORTRETRYIGNORE")
        html += _createButton(index, "IGNORE", "Ignore");
    if (buttonStyle == "PTR_OK" || buttonStyle == "PTR_OKCANCEL")
        html += _createButton(index, "OK", "OK");
    if (buttonStyle == "PTR_YESNO" || buttonStyle == "PTR_YESNOCANCEL")
        html += _createButton(index, "YES", "Yes");
    if (buttonStyle == "PTR_YESNO" || buttonStyle == "PTR_YESNOCANCEL")
        html += _createButton(index, "NO", "No");
    if (buttonStyle == "PTR_OKCANCEL" || buttonStyle == "PTR_RETRYCANCEL" || buttonStyle == "PTR_YESNOCANCEL")
        html += _createButton(index, "CANCEL", "Cancel");
  }	
	return html;
}
function toHTMLEntities(text)
{
    
    return UCF_XSSEncoder.encodeHTML(text);
    
    
}
URPopupWindow.prototype._getCSS = function()
{
	var css = "<st" + "yle>";
    
  if (this.popupManager.IE)
  {
    css += ".urPopFrameMax{background-position:center;background-repeat:no-repeat;vertical-align:middle;width:16px;height:16px;}";
    css += ".urPopFrameMid{background-position:center;background-repeat:no-repeat;vertical-align:middle;width:16px;height:16px;}";
    css += ".urPopFrameClose{background-position:center;background-repeat:no-repeat;vertical-align:middle;width:16px;height:16px;}";
    css += ".urPopFrameResizeHide{cursor:default;width:22px;height:17px;}";
    css += ".urPopFrameResize{width:22px;height:17px;background-repeat:no-repeat;background-position:";
    if (this.popupManager.isRTL())
        css += "left bottom;cursor:sw-resize;";
    else
        css += "right bottom;cursor:nw-resize;";
    css += "}";
    
 
    css += ".urPopTitleArea{border-width:0px 0px 1px 0px;border-style:solid;cursor:default;height:21px;padding:";
    if (this.popupManager.isRTL())
        css += "0px 5px 0px 1px";
    else
        css += "0px 1px 0px 5px";
    css += "}";
    css += ".urPopTitle{vertical-align:top;padding-top:1px;font-weight:bold;font-style:normal;font-size:11px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}";
  
    css += ".urPopTitleAreaHeader{padding-top:1px}";
    css += ".urPopTitleAreaResize{padding:";
    if (this.popupManager.isRTL())
        css += "0px 2px 0px 0px";
    else
        css += "0px 0px 0px 2px";
    css += ";width:18px;}";
    css += ".urPopTitleAreaClose{padding:";
    if (this.popupManager.isRTL())
        css += "0px 0px 0px 2px";
    else
        css += "0px 2px 0px 2px";
    css += ";width:20px;}";
    css += ".urPopIconArea{text-align:center;width:72px;padding:";
    if (this.popupManager.isRTL())
	    css += "0px 22px 0 18px;"
    else
        css += "0px 18px 0 22px;";
    
    css += "}";
  }
  else
  {
    css += ".urPopFrameMax{background-position:center;background-repeat:no-repeat;height:20px;}";
    css += ".urPopFrameMid{background-position:center;background-repeat:no-repeat;height:20px;}";
    css += ".urPopFrameClose{background-position:center;background-repeat:no-repeat;height:20px;}";
    css += ".urPopFrameResizeHide{width:22px;height:17px;}";
    css += ".urPopFrameResize{width:22px;height:17px;background-position:right bottom;cursor:nw-resize;background-repeat:no-repeat;}";
  
    css += ".urPopTitleArea{border-width:0px 0px 1px 0px;border-style:solid;cursor:default;height:21px;padding:0px 1px 0px 5px}";
    css += ".urPopTitle{vertical-align:top;padding-top:1px;font-weight:bold;font-style:normal;font-size:11px;white-space:nowrap;overflow:hidden;}";
    
    css += ".urPopTitleAreaHeader{padding-top:2px}";
    css += ".urPopTitleAreaResize{padding:0px 0px 0px 2px;width:16px;}";
    css += ".urPopTitleAreaClose{padding:0px 2px 0px 2px;width:16px;}";
    css += ".urPopIconArea{text-align:center;width:32px;padding-left:22px;padding-right:18px;}";
  }
  
  css += ".urPopIconArea{background-position:50% 16px;background-repeat:no-repeat;}";
  css += ".urPopFrame1{border-width:1px;border-style:solid;cursor:default;font-size:11px;}";
  css += ".urPopFrame2{border-width:1px;border-style:solid;cursor:default;font-size:11px;}";
  
  css += ".urPopWaveBottom{background-repeat:repeat-x;width:100%;}";
  css += ".urPopWaveMid{background-repeat:no-repeat;width:40px;}";
  css += ".urPopWaveTop{background-repeat:repeat-x;}";
  css += ".urPopFont{font-size:11px;}";
  css += ".urPopTxtStd{font-size:11px;font-style:normal;}";
  css += ".urPopBdyStd{overflow:hidden;margin:0px;}";
  css += "</st" + "yle>";
  return css;	
}
function helperAddEventListener(element,type, method)
{
  if (element.attachEvent)
	{
		
		element.attachEvent("on" + type, method);
	}
	else
	{
		element.addEventListener(type,method,false);
	}
}
function helperRemoveEventListener(element,type, method)
{
	if (element.detachEvent)
	{
		element.detachEvent("on" + type, method);
	}
	else
	{
		element.removeEventListener(type,method,false);
	}
}
URPopupManager.prototype.getPageSize = function(oDocument)
{
	var x,y;
	
	var test1 = oDocument.body.scrollWidth;
	var test2 = oDocument.body.offsetWidth;
	if (test1 > test2) 
	{
		x = oDocument.body.scrollWidth;
		y = oDocument.body.scrollHeight;
	}
	else 
	     
	{
		x = oDocument.body.offsetWidth;
		y = oDocument.body.offsetHeight;												
	}
	
	x = Math.max(oDocument.body.scrollWidth,oDocument.body.offsetWidth);
	y = Math.max(oDocument.body.scrollHeight, oDocument.body.offsetHeight);
	
	return {width:x,height:y};
	
}
URPopupManager.prototype.getViewPortSize = function(oWindow)
{
	var width,height;
	if (document.addEventListener) 
	
	{
		
		width = oWindow.document.body.offsetWidth;
		
		
		height = oWindow.innerHeight;
	}
	else if (oWindow.document.documentElement && oWindow.document.documentElement.clientHeight)
	
	{
		width = oWindow.document.documentElement.clientWidth;
		height = oWindow.document.documentElement.clientHeight;
	}
	else if (oWindow.document.body) 
	
	{
		width = oWindow.document.body.clientWidth;
		height = oWindow.document.body.clientHeight;
	}
	return {width:width,height:height};
}
URPopupManager.prototype.getScrollOffset = function(oWindow)
{
	var body = oWindow.document.body;
	var x,y;
	if (oWindow.pageYOffset) 
	{
		x = oWindow.pageXOffset;
		y = oWindow.pageYOffset;
	}
	else if (oWindow.document.documentElement && oWindow.document.documentElement.scrollTop)
		
	{
		
		x = oWindow.document.documentElement.scrollLeft;
		y = oWindow.document.documentElement.scrollTop;
	}
	else if (body) 
	{
		
		x = body.scrollLeft;
		
		if (this.isRTL())
		  x = body.scrollWidth - body.scrollLeft - body.clientWidth;
		
		y = body.scrollTop;
	}
			
	return {x:x,y:y};
	
}      
                                                 
URPopupManager.prototype.ptrRegisterActiveXComponent = function(sourceWindow, enable, ptrFunction)
{
    for (var i = 0; i < this.ptrActiveXArray.length; i++)
    {
        var item = this.ptrActiveXArray[i];
        if (item.sourceWindow == sourceWindow && item.enable == enable)
        {
            item.isActive = true;
            item.ptrFunction = ptrFunction;
            break;
        }
    }
    if (i >= this.ptrActiveXArray.length)
    {
        this.ptrActiveXArray[this.ptrActiveXArray.length] = 
        {
            sourceWindow: sourceWindow,
            enable: 			enable,
            ptrFunction:  ptrFunction, 
            isActive: 		true
        };
    }
}
URPopupManager.prototype.ptrUnregisterActiveXComponent = function(sourceWindow)
{
    for (var i = 0; i < this.ptrActiveXArray.length; i++)
    {
        var item = this.ptrActiveXArray[i];
        if (item.sourceWindow == sourceWindow)
        {
            item.isActive = false;
        }
    }
}
URPopupManager.prototype._unblockActiveXControls = function()
{
  this._toggleActiveXControls(true);
}
URPopupManager.prototype._blockActiveXControls = function()
{
  this._toggleActiveXControls(false);
}
URPopupManager.prototype._toggleActiveXControls = function(enable)
{
  if (!this.IE)
    return;
  
  for (var i = 0; i < this.ptrActiveXArray.length; i++)
  {
      var item = this.ptrActiveXArray[i];
      if (item.isActive == true && item.enable == enable)
      {
          try
          {
              item.ptrFunction();
          }
          catch (e){}
      }
  }
}
URPopupManager.prototype.ptrMessageBox = function(sourceWindow, text, title, style, type)
{
    this.ptrShowModalDialog(sourceWindow, text, title, style, type);
}
URPopupManager.prototype.ptrModalDialogUrl = function(sourceWindow, url, title, style, width, height)
{
    if (typeof(style) == "string" && style.length == 0)
        style = "PTR_OKCANCEL";
    
    this.ptrShowModalDialog(sourceWindow, '', title, style, '', width, height, url,  false, false, true, false, '', true);
}
URPopupManager.prototype.ptrModalDialogWdr = function(sourceWindow, popupId, url, title, style, type,
    width, height, hasCloseButton, initLeft, initTop)
{
    if (typeof(style) == "string" && style.length == 0)
        style = "PTR_OKCANCEL";
        
    this.ptrShowModalDialog(sourceWindow, '', title, style, type, width, height, url, false, false, true, false, popupId, false, hasCloseButton,initLeft,initLeft,initTop);
}
URPopupManager.prototype.ptrFloatingDialogWdr = function(sourceWindow, popupId, url, title, style, type, width, height, hasCloseButton, initLeft, initTop)
{
    if (typeof(style) == "string" && style.length == 0)
        style = "PTR_OKCANCEL";
          
    this.ptrShowModalDialog(sourceWindow, '', title, style, type, width, height, url, false, false, true, "alwaysOnTop", popupId, false, hasCloseButton,initLeft,initLeft,initTop);
}
URPopupManager.prototype.ptrModelessDialogUrl = function(sourceWindow, url, title, style, width, height)
{
    this.ptrModlessDialogUrl(sourceWindow, url, title, style, width, height);
}
URPopupManager.prototype.ptrModelessDialogWdr = function(sourceWindow, popupId, url, title, style, width, height, hasCloseButton, initLeft, initTop)
{
    
    
    this.ptrModlessDialogWdr(sourceWindow, popupId, url, title, style, width, height, hasCloseButton, initLeft, initLeft, initTop);
}
URPopupManager.prototype.ptrDialogWdr = function(isModal, sourceWindow, popupId, url, title, style, type, width, height, hasCloseButton)
{
    if (typeof(isModal) == "boolean")  
    {
        if (isModal == true)
            this.ptrModalDialogWdr(sourceWindow, popupId, url, title, style, type, width, height, hasCloseButton);
        else
            this.ptrModlessDialogWdr(sourceWindow, popupId, url, title, style, width,  height, hasCloseButton);
    }
    else
    {
        this.ptrFloatingDialogWdr(sourceWindow, popupId, url, title, style, type, width, height, hasCloseButton);        
    }
}
URPopupManager.prototype.ptrModlessDialogUrl = function(sourceWindow, url, title, style, width, height)
{
    if (typeof(style) == "string" && style.length == 0)
    {
        style = "PTR_OKCANCEL";
    }
   
    this.ptrShowModalDialog(sourceWindow, '', title, style, '', width, height, url, false, true, true, true, '', true);
}
URPopupManager.prototype.ptrModlessDialogWdr = function(sourceWindow, popupId, url, title, style, width, height, hasCloseButton)
{
    if (typeof(style) == "string" && style.length == 0)
        style = "PTR_OKCANCEL";
     
    this.ptrShowModalDialog(sourceWindow, '', title, style, '', width, height, url, false, true, true, true, popupId, true, hasCloseButton);
}
URPopupManager.prototype.ptrModalDialog = function(sourceWindow, text, title, style, width, height)
{
    this.ptrShowModalDialog(sourceWindow, text, title, style, '', width, height, '',  false, false, true);
}
URPopupManager.prototype.ptrLogout = function(sourceWindow, text, title)
{
    this.ptrShowModalDialog(sourceWindow, text, title, "PTR_YESNO", "PTR_QUESTION", 200, 120, '', true, true);
}
URPopupManager.prototype.ptrShowModalDialog = function(sourceWindow, text, title, style, type, width,
    height, url, logout, mode, resize, aModal, popupId, isFix, hasCloseButton,initLeft,initRight,initTop)
{
    if (typeof(sourceWindow) != "object")
        return ;
    if (typeof(text) == "undefined")
        text = "Your request is being processed!";
    
    if (typeof(title) == "undefined")
        title = "SAP";
    
    if (typeof(style) == "undefined")
        style = "PTR_OK";
    
    if (typeof(type) == "undefined")
        type = "";
    
    if (typeof(width) == "undefined" || width == 0)
        width = null;
    
    if (typeof(height) == "undefined" || height == 0)
        height = null;
    
    if (typeof(url) == "undefined")
        url = "";
    
    if (typeof(logout) == "undefined")
        logout = false;
    
    if (typeof(mode) == "undefined")
        mode = false;
    
    if (typeof(resize) == "undefined")
        resize = false;
    
    if (typeof(aModal) == "undefined")
        aModal = false;
    
    var dialogMode = null;
    if (typeof(aModal) == "boolean" )
    {
        if (aModal == true)
        {
            dialogMode = "amodal";
        }
        else
        {
            dialogMode = "modal";
        }
    }
    else 
    {
        dialogMode = aModal;
    }
        
    
    if (typeof(popupId) == "undefined")
        popupId = "";
    
    if (typeof(isFix) == "undefined")
        isFix = false;
    
    if (typeof(hasCloseButton) != "boolean")
        hasCloseButton = true;
    
    if (typeof(initLeft) == "undefined")
        initLeft = null;
    
    if (typeof(initRight) == "undefined")
        initRight = null;
    
    if (typeof(initTop) == "undefined")
        initTop = null;
    
    this._ptrShowPopupWindow(sourceWindow,initLeft,initRight,initTop, width, height, url, title, text, style, type, logout, mode, resize, dialogMode, popupId, hasCloseButton);
}

//** RadioButton.ie5 **

function sapUrMapi_RadioButton_registerCreate(sId) {
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_RadioButton_create('"+sId+"')");
}
function sapUrMapi_RadioButton_create(sId) {
	var o=ur_get(sId);
	if(o==null || !o.checked ) return;
	o.checked=false;
	o.checked=true;
}
  
function sapUrMapi_RadioButton_setDisabled(sId) {
 	var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-r");
	var oImg=ur_get(sId+"-img");
	if (ur_isSt(oIn,ur_st.DISABLED)) return;
	var newClass = "";
	if(ur_isSt(oIn,ur_st.READONLY)){
		oImg.className=oImg.className.replace("Dsbl","");
		ur_setSt(oIn,ur_st.READONLY,false);
	}
	oLbl.className=oLbl.className.replace("Lbl","LblDsbl");
  if(ur_isSt(oIn,ur_st.SELECTED))
		oImg.className=oImg.className.replace("On","OnDsbl");
	else
		oImg.className=oImg.className.replace("Off","OffDsbl");	
	
	newClass=oImg.className;
	oImg.className="";
	oImg.className=newClass;
	if(ur_system.is508)
		sapUrMapi_setTabIndex(oLbl,"0");
  oIn.disabled=true;	
	ur_setSt(oIn,ur_st.DISABLED,true);
	sapUrMapi_Label_setDisabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;	
}
function sapUrMapi_RadioButton_setEnabled(sId) {
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-r");
	var oImg=ur_get(sId+"-img");
	var newClass = "";
	oLbl.className=oLbl.className.replace("Dsbl","");
	oLbl.className=oLbl.className.replace("Ro","");
	oLbl.className=oLbl.className.replace("Inv","");
	
	newClass=oImg.className.replace("Dsbl","");
	oImg.className="";
	oImg.className=newClass;
	oIn.disabled=false;
	ur_setSt(oIn,ur_st.DISABLED,false);
	ur_setSt(oIn,ur_st.READONLY,false);
	if(ur_system.is508)
		sapUrMapi_setTabIndex(oLbl,"-1");
	sapUrMapi_Label_setEnabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;	
}
function sapUrMapi_RadioButton_setReadonly(sId,bSet){
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-r");
	var oImg=ur_get(sId+"-img");
	var newClass = "";
	if(bSet){
		if (ur_isSt(oIn,ur_st.READONLY)) return;
		if (ur_isSt(oIn,ur_st.DISABLED)){
			oLbl.className=oLbl.className.replace("Dsbl","");
			oImg.className=oImg.className.replace("Dsbl","");
			ur_setSt(oIn,ur_st.DISABLED,false);
		}
		if(ur_isSt(oIn,ur_st.SELECTED))
			oImg.className=oImg.className.replace("On","OnDsbl");
		else
			oImg.className=oImg.className.replace("Off","OffDsbl");	
		oIn.disabled=true;	
		ur_setSt(oIn,ur_st.READONLY,true);
		if(ur_system.is508)
			sapUrMapi_setTabIndex(oImg,"0");
	}
	else{
		if (!ur_isSt(oIn,ur_st.READONLY)) return;
		oLbl.className=oLbl.className.replace("Ro","");
		oIn.disabled=false;	
		ur_setSt(oIn,ur_st.READONLY,false);
		if(ur_system.is508)
			sapUrMapi_setTabIndex(oLbl,"-1");	
	}
	
	newClass=oImg.className;
	oImg.className="";
	oImg.className=newClass;
	sapUrMapi_Label_setEnabled(sapUrMapi_Label_getInputLabel(sId));
	if(ur_system.is508)
		oLbl.st=oIn.st;
	
}
function sapUrMapi_RadioButton_setInvalid(sId){
  var oIn=ur_get(sId);
	var oLbl=ur_get(sId+"-r");
	var oImg=ur_get(sId+"-img");
	if (ur_isSt(oIn,ur_st.INVALID) || ur_isSt(oIn,ur_st.READONLY) || ur_isSt(oIn,ur_st.DISABLED))
		return;
	oLbl.className=oLbl.className.replace("Lbl","LblInv");
	
	ur_setSt(oIn,ur_st.INVALID,true);
	sapUrMapi_Label_setInvalid(sapUrMapi_Label_getInputLabel(sId),true);
	if(ur_system.is508)
		oLbl.st=oIn.st;	
}
function sapUrMapi_RadioButton_toggle(sId,oEvt) {
	
	var	oRadioToSelect 	 =  ur_get(sId),
		radioStatus 	 =  ur_getRadioStatus(oRadioToSelect);
	if (radioStatus 	!= mRadioStatus.ACCESSABLE) {
		if (radioStatus	!= mRadioStatus.SELECTED) return;
		if (oRadioGroup.bInitialized) 	return;
	}
	
	var accessType  = ur_getRadioAccessType(oEvt);
	if (accessType != mRadioAccessType.SELECTION) return;
	
	
	
	var exitType = ur_getRadioExitType(oEvt);
	if (exitType == mRadioExitType.RADIO_FOCUS_LOST) {
		ur_onRadioGroupExit();
}
	
	if (!oRadioGroup.bInitialized) {
	
		var aRadiosData			 			= ur_getRadios(oRadioToSelect),
			aNavHelper 			 			= (ur_system.is508) ? null : ur_getRadioNavHelper(aRadiosData["aInputs"]),
			oRadioToDeselectData	 		= ur_getSelectedRadioData(aRadiosData["aInputs"]),
			oRadioToSelectData 				= ur_getSelectedRadioData(aRadiosData["aInputs"], oRadioToSelect);
		ur_createRadioGroup(				aRadiosData, 
											aNavHelper, 
											oRadioToSelectData,
											oRadioToSelectData);
		oRadioGroup.bInitialized 			= true;
		if(!ur_system.is508) ur_removeRadioNavHelper();
		
	}else {
		
		var oRadioToSelectData 				= ur_getSelectedRadioData(oRadioGroup.aRadiosData.aProperties, oRadioToSelect),
			oRadioToDeselectData 			= oRadioGroup.oSelectedRadioData;
			}
	
	
	if (oRadioToDeselectData && oRadioToDeselectData.oProperties.id != oRadioToSelectData.oProperties.id) {
		ur_setDeselectedRadioProperties		(oRadioToDeselectData.oProperties);
		if(!ur_system.is508)ur_removeRadioTabIndex(oRadioToDeselectData.oFocusDomRef);
		}
		
	ur_setSelectedRadioProperties			(oRadioToSelectData.oProperties);
	if(!ur_system.is508)ur_assignRadioTabIndex(oRadioToSelectData.oFocusDomRef);
	ur_focusRadio							(oRadioToSelectData.oFocusDomRef);
	
	oRadioGroup.oSelectedRadioData 			= oRadioToSelectData;
	sapUrMapi_refocusElement(oRadioToSelect);
	if (ur_system.is508) oRadioToSelect.fireEvent("onactivate");
	return ur_EVT_fire(ur_get(sId+"-r"),"och",oEvt);
}
function ur_setSelectedRadioProperties(oProperties) {
	var sId  = oProperties.id,
		oImg = ur_get(sId+"-img");
		
	oImg.className = oImg.className.replace("Off","On");
		
	oProperties.setAttribute("checked",true);
	oProperties.checked=true;
			
	ur_setSt(oProperties,ur_st.SELECTED,true);
	ur_setSt(oProperties,ur_st.NOTSELECTED,false);
	}
function ur_setDeselectedRadioProperties(oProperties) {
	var sId = oProperties.id,
		oImg = ur_get(sId + "-img");
	
	oImg.className = oImg.className.replace("On","Off");
	
	oProperties.setAttribute("checked",false);
	oProperties.checked=false;
	
	ur_setSt(oProperties, ur_st.SELECTED,false);
	ur_setSt(oProperties, ur_st.NOTSELECTED,true);	
}
		
function sapUrMapi_RadioButton_keydown(sId,oEvt) {
  var iKey=oEvt.keyCode;	
  if(iKey==37)
		iKey==ur_system.direction!="rtl"?37:39;
	else if(iKey==39)
		iKey==ur_system.direction!="rtl"?39:37;
	
	if(oEvt.keyCode == "73" && sapUrMapi_bCtrl(oEvt) && oEvt.shiftKey ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
		return ur_EVT_cancel(oEvt);
	}
	
	
	else if(iKey == 27){
		sapUrMapi_DataTip_hide(sId);
		return ur_EVT_cancel(oEvt);		
	}
	
	
	else if(iKey==37 || iKey==38){
		if (!ur_system.browser_abbrev == "ie6") return;
		var bPerformSelection = !oEvt.shiftKey;
		ur_navToPreviousRadio(bPerformSelection);
		ur_EVT_cancelBubble(oEvt);
	}
	
	else if(iKey==39 || iKey==40){
		if (!ur_system.browser_abbrev == "ie6") return;
		var bPerformSelection = !oEvt.shiftKey;
		ur_navToNextRadio(bPerformSelection);
		ur_EVT_cancelBubble(oEvt);
	}
	
	
	else if (iKey == 32) {
		sapUrMapi_RadioButton_toggle(sId, oEvt);
		ur_EVT_cancelBubble(oEvt);
	}
	
	
	else if (iKey == 9) {
		oRadioGroup.mRadioExitType = mRadioExitType.EXIT;
	}
}
function ur_navToNextRadio(bPerformSelection){
	var iIndex 				= oRadioGroup.oFocusedRadioData.iIndex,
		aFocusDomRefs 		= oRadioGroup.aRadiosData.aFocusDomRefs,
		iIndex 				= (iIndex == aFocusDomRefs.length - 1) ? 0 : iIndex + 1,
	    oRadioToUnFocus 	= oRadioGroup.oFocusedRadioData.oFocusDomRef,
		oRadioToFocus 		= aFocusDomRefs[iIndex];
	
	if(!ur_system.is508) {
	ur_removeRadioTabIndex	(oRadioToUnFocus);
	ur_assignRadioTabIndex	(oRadioToFocus);
	}
	
	ur_focusRadio			(oRadioToFocus);
	if (bPerformSelection)   oRadioToFocus.click();
	
	oRadioGroup.oFocusedRadioData.iIndex 		= iIndex;
	oRadioGroup.oFocusedRadioData.oFocusDomRef 	= oRadioToFocus;
	oRadioGroup.mRadioAccessType 				= mRadioAccessType.NAVIGATION;
}
function ur_navToPreviousRadio(bPerformSelection){
	
	var iIndex 				= oRadioGroup.oFocusedRadioData.iIndex,
		iAllRadios 			= oRadioGroup.aRadiosData.aFocusDomRefs.length - 1,
		iIndex 				= iIndex == 0 ? iAllRadios : iIndex - 1,
	    oRadioToUnFocus		= oRadioGroup.oFocusedRadioData.oFocusDomRef,
		oRadioToFocus		= oRadioGroup.aRadiosData.aFocusDomRefs[iIndex];
		
	if(!ur_system.is508){
	ur_removeRadioTabIndex	(oRadioToUnFocus);
	ur_assignRadioTabIndex	(oRadioToFocus);
	}
	
	ur_focusRadio			(oRadioToFocus);
	if (bPerformSelection)   oRadioToFocus.click();
	
	oRadioGroup.oFocusedRadioData.iIndex 		= iIndex;
	oRadioGroup.oFocusedRadioData.oFocusDomRef 	= oRadioToFocus;
	oRadioGroup.mRadioAccessType 				= mRadioAccessType.NAVIGATION;
}
	
var mRadioGroupAccessed = {
		FROM_START 	: "FROM_START", 
		FROM_END 	: "FROM_END",
		FROM_ROOT 	: "FROM_ROOT"
};
function ur_getRadioAccessPoint(oEvt) {
	
	var oAccessedElement = oEvt.srcElement,
		sAccessPoint =  oAccessedElement.getAttribute("accessPoint");
	
	switch (sAccessPoint) {
		case mRadioGroupAccessed.FROM_START:
			return mRadioGroupAccessed.FROM_START;
			
		case mRadioGroupAccessed.FROM_END:
			return mRadioGroupAccessed.FROM_END;
			
		case mRadioGroupAccessed.FROM_ROOT:
			return mRadioGroupAccessed.FROM_ROOT;
		
		default: null;
	}
}
var mRadioAccessType = {
		NAVIGATION	: "NAVIGATION",
		SELECTION 	: "SELECTION",
		TABED_IN 	: "TABBED_IN",
		NONE 		:  "NONE"
};
function ur_getRadioAccessType(oEvt) {
	
	if (oEvt.keyCode == 9 && !oEvt.shiftKey) {
		return mRadioAccessType.TABED_IN;
	}
	if (oEvt.keyCode == 37 || oEvt.keyCode == 38 || oEvt.keyCode == 39 || oEvt.keyCode == 40) {
		return mRadioAccessType.NAVIGATION;	
	}
	
	if (oRadioGroup.bInitialized && oEvt.type != "click") {
		var oFromElement = oEvt.fromElement;
		if (oFromElement) {
			var oInput = oFromElement.getElementsByTagName("INPUT");
			
			if (oInput) {
				var sUnknownName = oInput.name,
					sKnownName = oRadioGroup.aRadiosData.aProperties[0].name;
				
				if (sUnknownName == sKnownName) {
					return mRadioAccessType.NAVIGATION;	
				}
			}
		}
	}
	
	if (oEvt.keyCode == 32 || oEvt.type == "click") {
		return mRadioAccessType.SELECTION
	}
	return mRadioAccessType.NONE;
}
var mRadioExitType = {
		RADIO_FOCUS_LOST : "RADIO_FOCUS_LOST",
		EXIT	 		 : "EXIT",
		NONE 			 : "NONE"
};
function ur_getRadioExitType(oEvt) {
	if (oEvt.keyCode == 9) {
		return mRadioExitType.TABED_OUT;
	}
	if(ur_bRadioFocusLost()) {
		return mRadioExitType.RADIO_FOCUS_LOST;
	}
	return mRadioExitType.NONE;
}
var mRadioStatus = {
		ACCESSABLE 	: "ACCESSABLE",	
		SELECTED 	: "SELECTED",
		READONLY 	: "READONLY",
		DISABLED 	: "DISABLED"
};
function ur_getRadioStatus(oInput) {
	if (ur_isSt(oInput,ur_st.DISABLED))
		return mRadioStatus.DISABLED;
	
	if (ur_isSt(oInput,ur_st.READONLY)) 
		return mRadioStatus.READONLY;
	
	if (ur_isSt(oInput,ur_st.SELECTED))
		return mRadioStatus.SELECTED;
	
	return mRadioStatus.ACCESSABLE;
	}
	
function ur_bRadioFocusLost() {
	
	if (oRadioGroup.bInitialized == false) return false;
	
	var oElement = document.activeElement,
		sRadioName = oRadioGroup.aRadiosData.aProperties[0].name;
	
		var oUnknownInput = oElement.getElementsByTagName("INPUT")[0];
		if (oUnknownInput && oUnknownInput.name && oUnknownInput.getAttribute("ct") && oUnknownInput.getAttribute("ct") == "r") {
			var sElementName = oUnknownInput.name;
		} else {
			var	sElementName = null;
		}
	
	if (!sElementName || sElementName != sRadioName) {
		return true;
	}
	else return false;
}
function sapUrMapi_RadioButton_blur(sId,oEvt) {
	sapUrMapi_DataTip_hide(sId);
	
	if (oRadioGroup.bInitialized && oRadioGroup.mRadioExitType == mRadioExitType.EXIT) {
		ur_onRadioGroupExit();
	}
}
function sapUrMapi_RadioButton_focus(sId,oEvt) {
	sapUrMapi_DataTip_show(sId,"focus");
	if (ur_system.is508) {
		ur_onRadioGroupAccess(oEvt);
	}
}
var oRadioGroup = {};
	oRadioGroup.bInitialized 	 = false;
	oRadioGroup.mRadioAccessType = mRadioAccessType.NONE;
	oRadioGroup.mRadioExitType 	 = mRadioExitType.NONE;
	
function ur_onRadioGroupAccess(oEvt) {
	var sAccessPoint = ur_getRadioAccessPoint(oEvt);
	if (sAccessPoint == mRadioGroupAccessed.FROM_ROOT) {
		if (!ur_system.is508) {
			return;
		}
		else if (ur_system.is508 && oRadioGroup.mRadioAccessType == mRadioAccessType.NAVIGATION) {
		return;
	}
	}
	
	
	var exitType = ur_getRadioExitType(oEvt);
	if (exitType == mRadioExitType.RADIO_FOCUS_LOST) {
			ur_onRadioGroupExit();
	}
	
	var oNavHelper 				= oEvt.srcElement,     
		sId 					= oNavHelper.id.split("-")[0],
		oInput 					= ur_get(sId),
		aRadiosData 			= ur_getRadios(oInput),
		aNavHelper 				= ur_getRadioNavHelper			(aRadiosData.aInputs),
		oSelectedRadioData		= ur_getSelectedRadioData		(aRadiosData.aInputs),
			oFirstRadioToFocusData  = (!oSelectedRadioData || ur_system.is508) ? ur_getFirstRadioToFocusData(aRadiosData, sAccessPoint, oInput) : oSelectedRadioData,
		oFocusDomRef 			= oFirstRadioToFocusData.oFocusDomRef;
		
		
	ur_createRadioGroup(		aRadiosData, 
								aNavHelper, 
								oFirstRadioToFocusData, 
								oSelectedRadioData);
	oRadioGroup.bInitialized 	= true;
	
	if (!ur_system.is508) {
	ur_removeRadioNavHelper();
	ur_assignRadioTabIndex		(oFocusDomRef);
	ur_focusRadio				(oFocusDomRef);
}
}
function ur_createRadioGroup(aRadiosData, aNavHelper, oFocusedRadioData, oSelectedRadioData) {
	
	oRadioGroup.aNavHelper 					= aNavHelper; 
	
	oRadioGroup.aRadiosData 				= {};
	oRadioGroup.aRadiosData.aFocusDomRefs 	= aRadiosData.aFocusDomRefs;
	oRadioGroup.aRadiosData.aProperties	 	= aRadiosData.aInputs; 
	oRadioGroup.oFocusedRadioData 			= oFocusedRadioData; 
	oRadioGroup.oSelectedRadioData 			= oSelectedRadioData; 
	oRadioGroup.mRadioExitType 				= mRadioExitType.NONE;
	oRadioGroup.mRadioAccessType			= mRadioAccessType.NONE;
	return oRadioGroup;
}
function ur_getRadios(oRadio) {
	var sFilterName = oRadio.name,
		aInputs 	= document.getElementsByName(sFilterName),
		aRadios 	= ur_filterRadiosByName(aInputs, sFilterName);
		if (!ur_system.is508) {
			aRadios = ur_filterRadiosByFocus(aRadios);
		}
		
		return aRadios;
}
function ur_getRadioNavHelper(aRadios) {
	var aNavhelper 	= new Array(),
		iLength 	= aRadios.length;
	
	for (var i = 0; i < iLength; i++) {
		
		var sId = aRadios[i].id + "-" + mRadioGroupAccessed.FROM_START,
			oHelper = ur_get(sId);
			aNavhelper.push(oHelper);
			
		var sId = aRadios[i].id + "-" + mRadioGroupAccessed.FROM_END,
			oHelper = ur_get(sId);
			aNavhelper.push(oHelper);
	}
	
	return aNavhelper;
}
function ur_filterRadiosByName(aInputs, sFilterName) {
	
	var aFocusDomRefs = [];
	var aFilteredInputs = [];
	var aFilteredRadios = [];
	
	for (var i = 0; i < aInputs.length; i++) {
		
		var bIsRadioButton = aInputs[i].getAttribute("ct") == "R",
			bHasFilterName = aInputs[i].name == sFilterName;
		
		if ( bHasFilterName && bIsRadioButton) {
			
			var sId = aInputs[i].id,
				oInput = ur_get(sId),
				oRoot = ur_get(sId + "-r");
			
			aFilteredInputs.push(oInput);
			aFocusDomRefs.push(oRoot);
		}
	}
	
	aFilteredRadios["aFocusDomRefs"] = aFocusDomRefs;
	aFilteredRadios["aInputs"] = aFilteredInputs;
	
	return aFilteredRadios;	
}
function ur_filterRadiosByFocus(aFilteredRadios) {
	
	var aFilteredByNavFocus = [],
		aFocusDomRefs 		= aFilteredRadios["aFocusDomRefs"],
		aProperties 		= aFilteredRadios["aInputs"],
		iRadios 			= aFilteredRadios["aInputs"].length;
		
		aFilteredByNavFocus["aFocusDomRefs"] = [];
		aFilteredByNavFocus["aInputs"] = [];
	
	for (var i = 0; i < iRadios; i++) {
		
		var bCanReceiveNavFocus = aProperties[i].getAttribute("receiveNavFocus") == "true";
	
		
		
		if (bCanReceiveNavFocus) {
			aFilteredByNavFocus["aFocusDomRefs"].push(aFocusDomRefs[i]);
			aFilteredByNavFocus["aInputs"].push(aProperties[i]);
		}
	}
	
	return aFilteredByNavFocus;
}
function ur_getSelectedRadioData(aRadios, oRadio) {
	var oSelectedRadioData = {};
	
	if (oRadio) {
		
		for (var i in aRadios) {
			if (aRadios[i].id == oRadio.id) {
				
				oSelectedRadioData.iIndex 			= parseInt(i);
				oSelectedRadioData.oProperties 		= oRadio;
				oSelectedRadioData.oFocusDomRef 	= ur_get(oRadio.id + "-r");
				
				return oSelectedRadioData;
			}
		}
	}
	else {
		
		for (var i in aRadios) {
			var sStatus = ur_getRadioStatus(aRadios[i]);
			
			if (sStatus == mRadioStatus.SELECTED) {
				oSelectedRadioData.iIndex 			= parseInt(i);
				oSelectedRadioData.oProperties		= aRadios[i];
				oSelectedRadioData.oFocusDomRef 	= ur_get(aRadios[i].id + "-r");
				
				return oSelectedRadioData;
			}
		}
	}
	return null;
} 
	
function ur_getFirstRadioToFocusData(aRadiosData, sAccessPoint, oInput) {
		var oFirstRadioToFocusData = {},
		iIndex,oFocusDomRef,oProperties;
		
		switch (sAccessPoint) {
			case mRadioGroupAccessed.FROM_START:
				iIndex 		 = 0;
				oFocusDomRef = aRadiosData.aFocusDomRefs[0];
				oProperties  = aRadiosData.aInputs[0];  
				break;
	
			case mRadioGroupAccessed.FROM_END:
				iIndex 		 = aRadiosData.aFocusDomRefs.length - 1;
				oFocusDomRef = aRadiosData.aFocusDomRefs[aRadiosData.aFocusDomRefs.length - 1];
				oProperties  = aRadiosData.aInputs[		 aRadiosData.aInputs.length - 1];  
				break;
		
			case mRadioGroupAccessed.FROM_ROOT:
				
				if (ur_system.is508) {
					iIndex 		 = ur_getRadioIndex(aRadiosData.aInputs, oInput);
					oFocusDomRef = ur_get(oInput.id + "-r");
					oProperties  = oInput;  
					break;
				}
				
			default:
				iIndex 		 = 0;
				oFocusDomRef = aRadiosData.aFocusDomRefs[0];
				oProperties  = aRadiosData.aInputs[0];  
			break;
		}
			oFirstRadioToFocusData.oProperties 		= oProperties;
			oFirstRadioToFocusData.oFocusDomRef 	= oFocusDomRef;
			oFirstRadioToFocusData.iIndex 			= parseInt(iIndex);
	return  oFirstRadioToFocusData;
}
function ur_getRadioIndex(aRadios, oRadio) {
	for (var i = 0; i < aRadios.length; i++) {
		if (aRadios[i].id == oRadio.id) {
		return i;
	}
}
}
function ur_removeRadioNavHelper() {
	var aNavHelper = oRadioGroup.aNavHelper;
	
	for (var i = 0; i < aNavHelper.length; i++) {
		aNavHelper[i].tabIndex = -1;
	}
		}
function ur_assignRadioHelperTabIndex() {
	var oNavHelper = oRadioGroup.aNavHelper;
	for (var i = 0; i < aNavHelper.length; i++) {
		aNavHelper[i].tabIndex = 0;
	}
	 }
	 
function ur_assignRadioTabIndex(oRadio) {
	 
	oRadio.tabIndex = 0;
	oRadio.setAttribute("ti", 0);
				}
function ur_focusRadio(oRadio) {
	if(!ur_system.is508) {
		oRadio.focus();
	} else { 
		UCF_DomUtil.moveFocusDomElement(oRadio, false);
	}
}
	 
function ur_onRadioGroupExit() {
	if(!ur_system.is508) {
	var oRadio = oRadioGroup.oFocusedRadioData.oFocusDomRef;
	ur_removeRadioTabIndex(oRadio);
		if(!ur_system.is508)ur_assignRadioNavHelper();
	}
	ur_destroyRadios();
}
	 
function ur_removeRadioTabIndex(oRadio) {
	oRadio.tabIndex = -1;
	oRadio.setAttribute("ti", -1);
}
	 	
function ur_assignRadioNavHelper() {
	var aNavHelper = oRadioGroup.aNavHelper;
		
	for (var i = 0; i < aNavHelper.length; i++) {
		aNavHelper[i].tabIndex = 0;
	 }
}
function ur_destroyRadios() {
	oRadioGroup = null;
	oRadioGroup = {};
	oRadioGroup.bInitialized = false;
	oRadioGroup.mRadioAccessType = mRadioAccessType.NONE;
	oRadioGroup.mRadioExitType 	 = mRadioExitType.NONE;
}
function sapUrMapi_Rb_navToNext(sId, bSelect){
	var aGroup = sapUrMapi_getRadioBtnGroup(sId),
		iCurrentIndex = aGroup[sId]["iIndex"];
		
	if (iCurrentIndex >= aGroup.length - 1) return;
	
	
	if(ur_system.is508) {
		var iNextIndex = iCurrentIndex + 1,
			sNextItemId = aGroup[iNextIndex],
			oFocusDomRef = aGroup[sNextItemId]["oFocusDomRef"];
	}	
	
	else {
		var sNextItemId = sapUrMapi_Rb_findFocuable(aGroup, sId, true),
			oFocusDomRef = aGroup[sNextItemId]["oFocusDomRef"];
	}
	var oOldFocusDomRef = ur_get(sId + "-r");
	sapUrMapi_Rb_setFocus(oOldFocusDomRef, oFocusDomRef);
	if (bSelect) {
		var oOldItem = ur_get(sId),
			oNextItem = ur_get(sNextItemId);
		
		oOldItem.setAttribute("checked", false);
		oOldItem.checked=false;
		oNextItem.click();
	}
}
function sapUrMapi_Rb_navToPrevious(sId, bSelect) {
	var aGroup = sapUrMapi_getRadioBtnGroup(sId),
		iCurrentIndex = aGroup[sId]["iIndex"];
	
	if (iCurrentIndex == 0) return;
	
	
	if(ur_system.is508) {
		var iNewIndex = iCurrentIndex - 1,
			sNewId = aGroup[iNewIndex],
			oFocusDomRef = aGroup[sNewId]["oFocusDomRef"];
		
	} 
	
	else {
		var sNewId = sapUrMapi_Rb_findFocuable(aGroup, sId, false),
			oFocusDomRef = aGroup[sNewId]["oFocusDomRef"];
	}
		
	var oOldFocusDomRef = ur_get(sId + "-r");
	sapUrMapi_Rb_setFocus(oOldFocusDomRef, oFocusDomRef);
	
	if (bSelect) {
		var oOldItem = ur_get(sId),
			oPreviousItem = ur_get(sNewId);
		oOldItem.setAttribute("checked",true);
		oOldItem.checked=true;
		oPreviousItem.click();
	}
}

//** RichTextEdit.nn6 **

var rteChanged = {};
function ur_RTE_Create(sId,sText,Evt)
{
	rteChanged[sId] = false;
	if(ur_get(sId+"-rd"))
	{
		ur_get(sId+"-rd").innerHTML = sText;
	}
}
function ur_RTE_IframeLoad(sId,sText)
{
	rteChanged[sId] = false;
	try{
	var oIfrm = ur_get(sId+'-frm'),
	    oDoc = oIfrm.contentWindow.document;
	oDoc.body.setAttribute("id",sId);
	if(sText == "")
		sText = "<p>&nbsp;</p>";
	sText = sText.replace(/<\/br>/g, "");
	var oLink = oDoc.getElementsByTagName("LINK")[0],
	    cssUrl = ur_system.stylepath+"ur/ur_"+ur_system.browser_abbrev+".css";
        
	oLink.href = ur_RTE_relativeToAbsolutePath(cssUrl, location.href);
	
	oDoc.body.dir = ur_system.direction;
	oDoc.body.className = "urBdyStd urTrcBodyBox urFTxtV";
	oDoc.body.innerHTML = sText;
	
	oDoc.designMode = 'On'; 
	oDoc.execCommand("useCSS",false,true); 
	oDoc.addEventListener("keypress",ur_RTE_keyHandler,true);
	oDoc.addEventListener("keydown",ur_RTE_keyHandler,true);
	oDoc.addEventListener("keyup",ur_RTE_keyHandler,true);
	oDoc.addEventListener("click",ur_RTE_handleClick,true);
	oDoc.addEventListener("blur",ur_RTE_blur,true);
	}catch(ex){};
}
function ur_RTE_blur(evt)
{
	var sId = ur_RTE_getIdFromEvent(evt);
	if (rteChanged[sId]) {
		ur_EVT_fire(ur_get(sId),"ochg");
	}
	
}
function ur_RTE_getIdFromEvent(evt)
{
	var sId ="", oTarget = evt.target, oBody;
	
	while(oTarget.parentNode != null) {
		oTarget = oTarget.parentNode;
	}
	
	oBody = oTarget.getElementsByTagName("body")[0];
	return oBody.getAttribute("id");
}
function ur_RTE_keyHandler(evt)
{
	var sId = ur_RTE_getIdFromEvent(evt);
	if(evt.keyCode == 9)
	{
		evt.preventDefault();
		evt.stopPropagation();
		
	}
	if (sapUrMapi_bCtrl(evt)) {
		var key = String.fromCharCode(evt.charCode).toLowerCase();
		var cmd = '';
		switch (key) {
			case 'b': cmd = "bold"; break;
			case 'i': cmd = "italic"; break;
			case 'u': cmd = "underline"; break;
		};
		
		if (cmd) {
			ur_RTE_frmt(sId,"",cmd);
			
			evt.preventDefault();
			evt.stopPropagation();
		}
 	}
    	rteChanged[sId] = true;
	ur_RTE_queryState(sId);
}
function ur_RTE_handleClick(evt)
{
	if(evt.target.tagName == "HTML") return;
	
	var sId = evt.target.getAttribute("id");
	
	if(!sId && (evt.target).tagName != "BODY")
	{
		
		var elm = evt.target;
		while(elm.tagName != "BODY")
		{
			elm  = elm.parentNode;
		}
		
		sId = elm.getAttribute("id");
		
	}
	
	ur_RTE_queryState(sId);
}
function ur_RTE_btnClk(sId,Evt)
{
	var elm;
	if(Evt.srcElement.tagName == "IMG")
		elm = Evt.srcElement.parentNode.parentNode;
		
	else if(Evt.srcElement.tagName == "A")
		elm = Evt.srcElement.parentNode;
	
	if(!elm || elm.getAttribute("id") == "" ) return;
	
	var sIdCtrl = elm.getAttribute("id").split("-")[0];
	if(sId.indexOf('-bld')> -1){
		ur_RTE_frmt(sIdCtrl,"","Bold");
		}
	else if(sId.indexOf('-itl')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","italic");
	}
	else if(sId.indexOf('-und')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","Underline");
	}
	else if(sId.indexOf('-head1')> -1)
	{
		if(ur_get(sIdCtrl+"-tbar-head1").className == "urBtnStdD")
			ur_RTE_frmt(sIdCtrl,"<p>","formatblock");
		else
			ur_RTE_frmt(sIdCtrl,"<h1>","formatblock");
	}
	else if(sId.indexOf('-head2')> -1)
	{
		if(ur_get(sIdCtrl+"-tbar-head2").className == "urBtnStdD")
			ur_RTE_frmt(sIdCtrl,"<p>","formatblock");
		else
			ur_RTE_frmt(sIdCtrl,"<h2>","formatblock");
	}
	else if(sId.indexOf('-head3')> -1)
	{		
		if(ur_get(sIdCtrl+"-tbar-head3").className == "urBtnStdD")
			ur_RTE_frmt(sIdCtrl,"<p>","formatblock");
		else
			ur_RTE_frmt(sIdCtrl,"<h3>","formatblock");
	}	else if(sId.indexOf('-idnt')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","Indent");
	}
	else if(sId.indexOf('-odnt')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","Outdent");
	}
	else if(sId.indexOf('-olist')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","InsertOrderedList");
	}
	else if(sId.indexOf('-unolist')> -1)
	{
		ur_RTE_frmt(sIdCtrl,"","InsertUnorderedList");
	}
	rteChanged[sIdCtrl] = true;
	ur_RTE_queryState(sIdCtrl);
}
function ur_RTE_frmt(sId,format,selName)
{	
	var oCtrl = ur_get(sId+"-frm");
	oCtrl.contentWindow.document.execCommand(selName,false,format);
	oCtrl.contentWindow.focus();
	ur_RTE_queryState(sId);
	
}
function ur_RTE_queryState(sId)
{
	
	var oIfrm = ur_get(sId+"-frm");
	
	if(ur_get(sId+"-tbar-itl"))
	{
		var bI = oIfrm.contentWindow.document.queryCommandState("Italic");
		if(bI)
			ur_TB_toggleDownState(sId+"-tbar-itl","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-itl","up");
	}
	if(ur_get(sId+"-tbar-bld"))
	{
		var bB = oIfrm.contentWindow.document.queryCommandState('Bold');
		if(bB)
			ur_TB_toggleDownState(sId+"-tbar-bld","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-bld","up");
	}
	if(ur_get(sId+"-tbar-und"))
	{
		var bU = oIfrm.contentWindow.document.queryCommandState('Underline');
		if(bU)
			ur_TB_toggleDownState(sId+"-tbar-und","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-und","up");
	}
	if(ur_get(sId+"-tbar-head1"))
	{
		var sH1 = oIfrm.contentWindow.document.queryCommandValue('formatblock');
		if(sH1 == "h1")
			ur_TB_toggleDownState(sId+"-tbar-head1","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-head1","up");
	}
	if(ur_get(sId+"-tbar-head2"))
	{
		var sH2 = oIfrm.contentWindow.document.queryCommandValue('formatblock');
		if(sH2 == "h2")
			ur_TB_toggleDownState(sId+"-tbar-head2","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-head2","up");
	}
	if(ur_get(sId+"-tbar-head3"))
	{
		var sH3 = oIfrm.contentWindow.document.queryCommandValue('formatblock');
		if(sH3 == "h3")
			ur_TB_toggleDownState(sId+"-tbar-head3","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-head3","up");
	}
	
	if(ur_get(sId+"-tbar-olist"))
	{
		var bOlist = oIfrm.contentWindow.document.queryCommandState("InsertOrderedList");
		if(bOlist)
			ur_TB_toggleDownState(sId+"-tbar-olist","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-olist","up");
	}
	if(ur_get(sId+"-tbar-unolist"))
	{
		var bOlist = oIfrm.contentWindow.document.queryCommandState("InsertUnorderedList");
		if(bOlist)
			ur_TB_toggleDownState(sId+"-tbar-unolist","dn");
		else
			ur_TB_toggleDownState(sId+"-tbar-unolist","up");
	}	
	
}
function ur_TB_toggleDownState(sId,bSt)
{
	
	var oBtn = ur_get(sId);
	var oBtnR = ur_get(sId+"-r");
	if(bSt == "dn")
	{
		oBtn.className = "urBtnStdD";
		oBtnR.setAttribute("down","true");
	}
	else if(bSt == "up")
	{
		oBtn.className = "urBtnStd";
		oBtnR.setAttribute("down","false");
	}
	else
	{
		if(oBtn.className == "urBtnStd")
			oBtn.className == "urBtnStdD"
		else
			oBtn.className == "urBtnStd"
	}
}
var ur_RTE_iSerializeCounter = 0;
function ur_RTE_getHTMLText(sId,oEvt)
{
   var node = ur_get(sId+'-frm').contentWindow.document.body,
       buffer = [],
       html;
   
   ur_RTE_iSerializeCounter++;    
   ur_RTE_serializeXHTML(buffer, node);
   html = buffer.join("");
   return html;
}
var ur_RTE_oValidTags = {
	"abbr":{empty:false},
	"acronym":{empty:false},
	"address":{empty:false},
	"blockquote":{empty:false},
	"br":{empty:true},
	"cite":{empty:false},
	"code":{empty:false},
	"dfn":{empty:false},
	"div":{empty:false},
	"em":{empty:false},
	"h1":{empty:false},
	"h2":{empty:false},
	"h3":{empty:false},
	"h4":{empty:false},
	"kbd":{empty:false},
	"p":{empty:false},
	"pre":{empty:false},
	"q":{empty:false},
	"samp":{empty:false},
	"span":{empty:false},
	"strong":{empty:false},
	"var":{empty:false},
	"dt":{empty:false},
	"dd":{empty:false},
	"ol":{empty:false},
	"ul":{empty:false},
	"li":{empty:false},
	"a":{empty:false, attrs:["href"]},
	"img":{empty:true, attrs:["src"]},
	
	"b":{mapped:"strong"},
	"i":{mapped:"em"}
};
var ur_RTE_oOmitContentTags = {
	"script": true,
	"noscript": true,
	"style": true,
	"select": true,
	"button": true,
	"link": true,
	"iframe": true,
	"object": true
};
function ur_RTE_serializeXHTML(aBuffer, oNode) {
	switch(oNode.nodeType) {
		case 1: 
			var sTagName = oNode.tagName.toLowerCase(),
				oTagInfo = ur_RTE_oValidTags[sTagName];
			if (oTagInfo) {
				
				
				
				if (oNode.cnt == ur_RTE_iSerializeCounter) {
					break;
				}
				oNode.cnt = ur_RTE_iSerializeCounter;
				
				if (oTagInfo.mapped) {
					sTagName = oTagInfo.mapped;
					oTagInfo = ur_RTE_oValidTags[sTagName];
				}
				
				aBuffer.push("<");
				aBuffer.push(sTagName);
				if (oTagInfo.attrs) {
					var aAttributes = oTagInfo.attrs,
						sName,
						sValue;
					for (var i = 0; i < aAttributes.length; i++) {
						sName = aAttributes[i];
						sValue = oNode.getAttribute(sName);
						if (sValue) {
							aBuffer.push(" ");
							aBuffer.push(sName); 
							aBuffer.push("=\""); 
							aBuffer.push(ur_RTE_sXmlEscape(sValue));
							aBuffer.push("\""); 
						}
					}
				}
				if (oTagInfo.empty) {
					aBuffer.push(" />");
				}	
				else {
					aBuffer.push(">");
				}
			}
			
			if (!ur_RTE_oOmitContentTags[sTagName]) {
				var childNodes = oNode.childNodes;
				if (childNodes) {
					for (var i = 0; i < childNodes.length; i++) {
						ur_RTE_serializeXHTML(aBuffer, childNodes[i]);
					}
				}
			}
			
			if (oTagInfo && !oTagInfo.empty) {
				aBuffer.push("</" + sTagName + ">");			
			}
			break;
		case 3: 
			aBuffer.push(ur_RTE_sXmlEscape(oNode.nodeValue));
			break;
		default: 
			
	}
};
function ur_RTE_sXmlEscape(sText) {
	sText = sText.replace(/\&/g, "&amp;");
	sText = sText.replace(/\</g, "&lt;");
	sText = sText.replace(/\"/g, "&quot;");
	return sText;
};
function ur_RTE_relativeToAbsolutePath(strRel,strAbs) {
  if (strRel.lastIndexOf("./")==-1) return strRel; 
  var strRelDots      = strRel.substring(0,strRel.lastIndexOf("./")+2);
  var strAbsPath      = strAbs.substring(0,strAbs.lastIndexOf("/")); 
  while(strRelDots.lastIndexOf("..")>-1) { 
    strAbsPath = strAbsPath.substring(0,strAbsPath.lastIndexOf("/")); 
    strRelDots = strRelDots.substring(0,strRelDots.lastIndexOf(".."))+"/";
  }
  if (strRelDots.lastIndexOf("./")>-1) {
    strRelDots = strRelDots.substring(0,strRelDots.lastIndexOf("./"))+"/";
    if (strRelDots.lastIndexOf("./")>-1) { 
      showError (strRel+" is not a valid relative url.");
    }
  }
  
  strNewAbsPath = strAbsPath + strRelDots + strRel.substring(strRel.lastIndexOf("./")+2,strRel.length);
  return strNewAbsPath;
}  

//** RoadMap.ie5 **

function ur_RM_RegisterCreate(sId)
{
	var oRm = ur_get(sId);
	if(parseInt(oRm.getAttribute("ic"))==0)return;
 	
	if(!oRm.getAttribute("sel"))
		oRm.setAttribute("sel","-1");
	 if(oRm.getAttribute('scrl') == "1")
		sapUrMapi_Create_AddItem(sId, "ur_RM_create('" + sId + "')");
	 else
	 {
		ur_get(sId+"-scrl").className = "";
		if(oRm.getAttribute('sel') == "-1")
			sapUrMapi_setTabIndex(ur_get(sId+'-itm-0'),0);
		else
			sapUrMapi_setTabIndex(ur_get(sId+'-itm-'+oRm.getAttribute('sel')),0);
	 }
}
function sapUrMapi_RoadMap_hoverEdges(sId,edgeType,e){
	var oS= ur_get(sId + "-itm-start");
	var sBts=oS.childNodes[0].className;
	var oE= ur_get(sId + "-itm-end");
	var sBte=oE.childNodes[0].className;
	
	if(e.type=="mouseover"){
		if(edgeType=="start" && sBts.indexOf("More")>-1)
			oS.childNodes[0].className=sBts +"Hover";
		else if(edgeType=="end" && sBte.indexOf("More")>-1)
			oE.childNodes[0].className=sBte +"Hover";
	}
	else if(e.type=="mouseout"){
		if(edgeType=="start" && sBts.indexOf("More")>-1)
			oS.childNodes[0].className=sBts.split("Hover")[0];
		else if(edgeType=="end" && sBte.indexOf("More")>-1)
			oE.childNodes[0].className=sBte.split("Hover")[0];
	}
}
function sapUrMapi_RoadMap_hoverStep(sId,iStepNr,e){
	var iSel = parseInt(ur_get(sId).getAttribute("sel"));
	var oTitle = ur_get(sId + "-itm-" + iStepNr).childNodes[1];
	
	if( iSel == iStepNr || oTitle.className == "urRMNoItem")return;
	
	if(e.type == "mouseover"){
		oTitle.className = "urRMStepItem urRMItemHover";
		}
	else if(e.type=="mouseout"){
			oTitle.className = "urRMStepItem";
		}
}
function ur_RM_create(sId)
{
	ur_get(sId+'-itm-start').setAttribute("stDsgn",ur_get(sId+'-itm-start').firstChild.className);
	ur_get(sId+'-itm-end').setAttribute("endDsgn",ur_get(sId+'-itm-end').firstChild.className);
	
	ur_IScr_getObj(sId);
	ur_IScr_create(sId);
	sapUrMapi_Resize_AddItem(sId, "ur_IScr_resize('"+sId+"')");
    var oRm = ur_get(sId);
    var oRmScrl = ur_IScr[sId];
    var iSel = parseInt(oRm.getAttribute('sel'));
    var iFScrl = oRmScrl.first;
    var iLScrl = oRmScrl.last;
	if(iSel <= iLScrl && iSel >=iFScrl)
		sapUrMapi_setTabIndex(ur_get(sId+'-itm-'+iSel),0);
	else{
		sapUrMapi_setTabIndex(ur_get(sId+'-itm-'+iFScrl),0);
		oRm.setAttribute("fidx",iFScrl);
	}
}
function sapUrMapi_RoadMap_keydownStep(sId,iIdx,e){
        if (ur_system.browser_abbrev != "ie6") return;
	var o=ur_RM_getObj(sId);
	var bScroll=o.ref.getAttribute("scrl");
	if(e.keyCode==32)
		o.items[iIdx].click();
	if(bScroll=="1"){
		if(e.keyCode == 39 && iIdx == ur_IScr[sId].last) 
		   ur_IScr_toNextPage(sId);
		if(e.keyCode == 37 && iIdx == ur_IScr[sId].first)
   	       ur_IScr_toPrevPage(sId);
	}
	ur_KY_nav(e,o);
}
function ur_RM_getObj(sId) {
  var oRm=ur_get(sId);
  var oScrl=ur_get(sId+"-scrl");
  var o={ref:oRm,
  		items:new Array(),
  		selected:oRm.getAttribute("sel")
  };
  o.ref["kb"]="h";
  o.items=ur_get(sId+"-scrl").firstChild.firstChild.firstChild.childNodes;
  
  return o;
}
function ur_RM_oadi(sId,oEvt)
{
	var o = ur_IScr[sId];
	if(o.first!= 0)
		ur_get(sId+'-itm-start').firstChild.className = "urRMMoreBefore";
	else
		ur_get(sId+'-itm-start').firstChild.className = ur_get(sId+'-itm-start').getAttribute("stDsgn");
	if(o.last != o.items.length-1)
	{
		ur_get(sId+'-itm-end').firstChild.className = "urRMMoreAfter";
				
	}
	else
	{
		ur_get(sId+'-itm-end').firstChild.className = ur_get(sId+'-itm-end').getAttribute("endDsgn");
	}
}
function ur_RM_select(sId,iNr,oEv){
	var o = ur_get(sId + "-itm-" + iNr);
	var iSelectedIdx = parseInt(ur_get(sId).getAttribute("sel"));
	
	
	if( o.st && o.st.indexOf("d") > -1  ||
		iSelectedIdx == iNr ||
		o.className == "urRMNotInterActive") return;
	
	var oStepN = o.getElementsByTagName("TD")[1];
	var oTitleN = o.childNodes[1];
	var oRm = ur_get(sId);
	oStepN.className = oStepN.className + "Sel";
	oTitleN.className = "urRMStepItem";
	oTitleN.className = oTitleN.className + "Sel";
	
	if (ur_system.is508) {
		ur_setSt(o,ur_st.NOTSELECTED,false);
		ur_setSt(o,ur_st.SELECTED,true);
		sapUrMapi_refocusElement(o);
	}
	
	if (iSelectedIdx != -1) {
		var o = ur_get(sId + "-itm-" + iSelectedIdx);
		var oStepO = o.getElementsByTagName("TD")[1];
		var oTitleO = o.childNodes[1];
		
		oStepO.className = oStepO.className.split("Sel")[0];
		oTitleO.className = oTitleO.className.split("Sel")[0];
		
		sapUrMapi_setTabIndex(oStepO,-1);
		
		if (ur_system.is508) {
			ur_setSt(o,ur_st.NOTSELECTED,true);
			ur_setSt(o,ur_st.SELECTED,false);
		}
	}
	
	
	sapUrMapi_setTabIndex(oStepN,0);
	oRm.setAttribute("fidx", iNr);
	oRm.setAttribute("sel", iNr);
	
	
	
	if ( oRm.scroll == 1 ){
		ur_EVT_addParam(oEv,"FirstVisibleItemIdx",ur_IScr[sId].first);
    	var bVisible = ur_IScr[sId].items[iNr].visible;
    	
	    if ( bVisible ) 
			ur_IScr_draw(sId);
	    else {
	      ur_IScr[sId].first = iNr;
	      ur_IScr[sId].last = -1;
	      ur_IScr_draw(sId);
	    }
    }
}
function ur_RM_Scrl(sId,edgeType,oEvt)
{
	var iRmItms = parseInt(ur_get(sId).getAttribute("ic"));	
	if(iRmItms==0)return;
	var oRmStart = ur_get(sId+'-itm-start');
	var oRmEnd = ur_get(sId+'-itm-end');
	var oRmScrl = ur_IScr[sId];
	if( oRmStart.firstChild.className.indexOf("Before") > -1 && edgeType == "start" && oRmScrl.first != 0)
	{
		ur_IScr_toPrevPage(sId);
	}
	else if( oRmEnd.firstChild.className.indexOf("After") && edgeType == "end" && oRmScrl.last != (iRmItms - 1) )
	{
		ur_IScr_toNextPage(sId);
	}
	else if( oRmStart.firstChild.className.indexOf("Before") > -1 || oRmScrl.first == 0 && edgeType == "start") 
	{
		ur_EVT_fire(oRmStart,"onscrl");
	}
	else if( oRmEnd.firstChild.className.indexOf("After") > -1 || oRmScrl.last == iRmItms-1 && edgeType == "end")
	{
		ur_EVT_fire(oRmEnd,"onscrl");
	}
	ur_EVT_addParam(oEvt,"FirstVisibleItemIdx",ur_IScr[sId].first);
}
function sapUrMapi_RoadMap_setFocusStep(sId,iStepIdx,e){
	if (ur_system.is508 && ur_system.browserabbrev == "ie6") {
	
		var oStep = ur_get(sId + "-itm-" + iStepIdx),
			initFocus = oStep.getAttribute("initFocus");
			
		if ( ur_isSt(oStep, ur_st.SELECTED ) && initFocus == null) {
			
			oStep.setAttribute("initFocus");
			sapUrMapi_triggerFocus(sId);
		}
	}
}
//** SapTable.ie5 **

function sapUrMapi_SapTable_processTabActionStart(oDomRef, oTable, bBackward){
	if(oTable.focusedCell == null){
		sapUrMapi_SapTable_processTabActionReset(oTable);
	} else {
		oTable.oTabActionLastCell = oTable.focusedCell;
	}
	oTable.bTabActionBackward = bBackward;
	
};
function sapUrMapi_SapTable_processTabActionReset(oTable){
	if(oTable.oTabActionLastCell != null){
		oTable.oTabActionLastCell = null;
	}
};
function sapUrMapi_SapTable_processCreateRowByTab(oDomRef, sSapTableId, oEvt){
	var oTable = ur_Table_create(sSapTableId);
	if(oTable.bTabActionBackward) {
		var oPreviousElementToFocus = ur_getPreviousFocusableElement(oDomRef);
		if(oPreviousElementToFocus) ur_focus(oPreviousElementToFocus);
	} else {
		if(oTable && oTable.oTabActionLastCell && ur_contains(oTable.oTabActionLastCell.ref, ur_getPreviousFocusableElement(oDomRef)) ) {
			ur_EVT_fire(oDomRef,"ocr",oEvt);
		} else {
			var oNextElementToFocus = ur_getNextFocusableElement(oDomRef);
			if(oNextElementToFocus) ur_focus(oNextElementToFocus);
		}
	}
	
	sapUrMapi_SapTable_processTabActionReset(oTable);
};
function ur_contains(oDomRefContainer, oDomRefChild) {
	var oDomRef = oDomRefChild;
	
	if(oDomRefContainer == oDomRefChild) return true;
	
	while(oDomRef != null) {
		if(oDomRef == oDomRefContainer) return true;
		oDomRef = oDomRef.parentNode;
	}
	
	return false;
};
function sapUrMapi_SapTable_getClickedRowIndex(e)
{
   var o=ur_evtSrc(e);
   while (o!=null && o.getAttribute("rr")==null) o=o.parentElement;
   if(o==null) return;
   try {
     var iRIdx=parseInt(o.rr);
     if (isNaN(iRIdx)) return null;
     else return iRIdx;
   } catch (e) {
     return null;
   }
}
function sapUrMapi_SapTable_getClickedColIndex(e)
{
   var o=ur_evtSrc(e);
   while (o!=null && o.getAttribute("cc")==null) o=o.parentElement;
   if(o==null) return;
   try {
     var iCIdx=parseInt(o.cc);
     if (isNaN(iCIdx)) return null;
     else return iCIdx;
   } catch (e) {
     return null;
   }
}
function sapUrMapi_SapTable_getClickedCellId(e)
{
   var o=ur_evtSrc(e);
   while ( o!=null && o.getAttribute("cc")==null ) o=o.parentElement;
   if(o==null) return;
   try {
     var sId=o.id;
     return sId;
   } catch (e) {
     return null;
   }
}
function sapUrMapi_SapTable_getClickedRow(sTableId,e) {
   var idx=sapUrMapi_SapTable_getClickedRowIndex(e);
   if(idx==null) return;
   return sapUrMapi_SapTable_getRow(sTableId,idx);
}
function sapUrMapi_SapTable_getRow(sTableId, iRowIdx) {
	var oTable=ur_Table_create(sTableId),
		aRows = oTable.rows,
		iRowIndex = -1,
		sRowIndex = null;
	for (var i=0;i<aRows.length;i++) {
		sRowIndex = aRows[i].ref.getAttribute("rr");
		iRowIndex = -1;
		if(sRowIndex) {
			iRowIndex = parseInt(sRowIndex);
			if(isNaN(iRowIndex)) continue;
		} else continue;
		if (iRowIndex==iRowIdx) return aRows[i].ref;
	}
	return null;
}
function sapUrMapi_SapTable_correctSelectionBorder(oRow){}
function sapUrMapi_SapTable_correctSelectionBorder4Table(id){}
function sapUrMapi_SapTable_isSecondarySelected(oButton) {
  return oButton.className.indexOf("urSTRowSelSecIcon") != -1;
}
function sapUrMapi_SapTable_isPrimarySelected(oButton) {
  return oButton.className.indexOf("urSTRowSelIcon") != -1;
}
function sapUrMapi_SapTable_toggleSecondarySelection(oRow) {
  var oButton = oRow.getElementsByTagName("DIV").item(0);
  sapUrMapi_SapTable_selectRowByObject(oRow, !sapUrMapi_SapTable_isSecondarySelected(oButton), true);
}
var UR_FOCUS_APPEARANCE = {
  NONE:0,
  CLASS:1,
  FAST:2
};
var eUrFocusAppearance = UR_FOCUS_APPEARANCE.FAST;
function sapUrMapi_SapTable_setFocusAppearance(eLocalUrFocusAppearance) {
	eUrFocusAppearance = eLocalUrFocusAppearance;
};
var UR_SELECTION_STATE = {
  NOT_SELECTED:0,
  PRIMARY:1,
  SECONDARY:2
};
function sapUrMapi_SapTable_setSelection(oRow, eState) {
  if(eState == UR_SELECTION_STATE.NOT_SELECTED) {
    sapUrMapi_SapTable_selectRowByObject(oRow, false, false);
  } else if(eState == UR_SELECTION_STATE.PRIMARY) {
    sapUrMapi_SapTable_selectRowByObject(oRow, true, false);
  } else if(eState == UR_SELECTION_STATE.SECONDARY) {
    sapUrMapi_SapTable_selectRowByObject(oRow, true, true);
  }
}
function sapUrMapi_SapTable_setCellSelection(oCell, eState) {
  if(eState == UR_SELECTION_STATE.NOT_SELECTED) {
    sapUrMapi_SapTableSelectCell(oCell, false, false, false);
  } else if(eState == UR_SELECTION_STATE.PRIMARY) {
    sapUrMapi_SapTableSelectCell(oCell, false, true, false);
  } else if(eState == UR_SELECTION_STATE.SECONDARY) {
    sapUrMapi_SapTableSelectCell(oCell, false, true, true);
  }
}
var oUrFastTableSelectionInfo = null;
function ur_initFastTableSelectionInfo() {
	oUrFastTableSelectionInfo = {
		bValid: false
	};
	oUrFastTableSelectionInfo.oSelectorNames = {
		sPrimary: ".urST4Sel",
		sPrimaryReadOnly: ".urST4SelRo",
		sSecondary: ".urST4Sel2",
		sSecondaryReadOnly: ".urST4Sel2Ro",
		sFocus: ".urSTFoc"
	};
	
	oUrFastTableSelectionInfo.oClassNames = {
		sPrimary: "urST4Sel",
		sPrimaryReadOnly: "urST4SelRo",
		sSecondary: "urST4Sel2",
		sSecondaryReadOnly: "urST4Sel2Ro",
		sReadOnly: "urSTTDRo2",
		sFocus: "urSTFoc"
	};
	
	oUrFastTableSelectionInfo.oColors = {
		sPrimary: null,
		sPrimaryReadOnly: null,
		sSecondary: null,
		sSecondaryReadOnly: null,
		sFocus: null
	};	
	if(window.document.styleSheets) {
		for(var j=0; j<window.document.styleSheets.length; j++) {
			var oStyleSheet = window.document.styleSheets[j];
			if(oStyleSheet.href && UCF_UserAgent.bIsIE() ) {
		
				var oRules = oStyleSheet.rules,
					oRule = null;
				
				oUrFastTableSelectionInfo.bValid = true;
				
				for(var i=0; i<oRules.length; i++) {
					oRule = oRules[i];
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sPrimary) {
						oUrFastTableSelectionInfo.oColors.sPrimary = oRule.style.backgroundColor;
						continue;
					}
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sPrimaryReadOnly) {
						oUrFastTableSelectionInfo.oColors.sPrimaryReadOnly = oRule.style.backgroundColor;
						continue;
					}
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sSecondary) {
						oUrFastTableSelectionInfo.oColors.sSecondary = oRule.style.backgroundColor;
						continue;
					}
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sSecondaryReadOnly) {
						oUrFastTableSelectionInfo.oColors.sSecondaryReadOnly = oRule.style.backgroundColor;
						continue;
					}
					
					if(oRule.selectorText == oUrFastTableSelectionInfo.oSelectorNames.sFocus) {
						oUrFastTableSelectionInfo.oColors.sFocus = oRule.style.backgroundColor;
						continue;
					}
								
				}
			}
		}
	}
	return oUrFastTableSelectionInfo.bValid? oUrFastTableSelectionInfo: null;
}
function ur_getFastTableSelectionInfo() {
	return (oUrFastTableSelectionInfo)? (oUrFastTableSelectionInfo.bValid? oUrFastTableSelectionInfo: null) : ur_initFastTableSelectionInfo();
}
function ur_fastTableSelectionModeEnabled() {
	return ur_getFastTableSelectionInfo() != null;
}
function ur_fastTableCellSelect(oCell, bReadOnly, bSelect, bSecondary) {
	var oSelectionInfo = ur_getFastTableSelectionInfo();
	
	if(!oSelectionInfo) return false;
	
	
	if(oCell.firstChild && oCell.firstChild.className && 	
		(oCell.firstChild.className.indexOf("urEdf2WhlDsbl") >= 0 || oCell.firstChild.className.indexOf("urEdf2WhlRo") >= 0)
	){
	 return false;
	}
	if(!(oCell.urFastSelectionClean || bSelect)) {
		if(oCell.className.indexOf(oSelectionInfo.oClassNames.sPrimary) >= 0)
	  	oCell.className = oCell.className.replace(oSelectionInfo.oClassNames.sPrimary, "");
	  if(oCell.className.indexOf(oSelectionInfo.oClassNames.sPrimaryReadOnly) >= 0)
	  	oCell.className = oCell.className.replace(oSelectionInfo.oClassNames.sPrimaryReadOnly, "");
	  if(oCell.className.indexOf(oSelectionInfo.oClassNames.sSecondary) >= 0)
	  	oCell.className = oCell.className.replace(oSelectionInfo.oClassNames.sSecondary, "");
		if(oCell.className.indexOf(oSelectionInfo.oClassNames.sSecondaryReadOnly) >= 0)
	  	oCell.className = oCell.className.replace(oSelectionInfo.oClassNames.sSecondaryReadOnly, "");
	  
	  oCell.urFastSelectionClean = true;
	}
  if (bSelect) {
    if (bSecondary) {
			if(oCell.runtimeStyle.backgroundColor) {
				oCell.runtimeStyle.cssText = oCell.runtimeStyle.cssText.replace(oCell.runtimeStyle.backgroundColor, ((bReadOnly? oSelectionInfo.oColors.sSecondaryReadOnly: oSelectionInfo.oColors.sSecondary) + " !important") );
			} else {
	    	oCell.runtimeStyle.cssText += "background-color:" + (bReadOnly? oSelectionInfo.oColors.sSecondaryReadOnly: oSelectionInfo.oColors.sSecondary) + " !important";
	    }
    } else {
			if(oCell.runtimeStyle.backgroundColor) {
				oCell.runtimeStyle.cssText = oCell.runtimeStyle.cssText.replace(oCell.runtimeStyle.backgroundColor, ((bReadOnly? oSelectionInfo.oColors.sPrimaryReadOnly: oSelectionInfo.oColors.sPrimary) + " !important") );
			} else {
	    	oCell.runtimeStyle.cssText += "background-color:"+ (bReadOnly? oSelectionInfo.oColors.sPrimaryReadOnly: oSelectionInfo.oColors.sPrimary) +" !important";
	    }
    }
  } else {
  	oCell.runtimeStyle.backgroundColor = "";
  }
  
  return true;
};
function ur_fastTableCellFocus(oCell, bFocus) {
	if(eUrFocusAppearance != UR_FOCUS_APPEARANCE.FAST) return false;
	
	var oSelectionInfo = ur_getFastTableSelectionInfo();
	
	if(!oSelectionInfo) return false;
	
	if (bFocus) {
		if(!oCell.bIsFocusColorized) {
			if(oCell.runtimeStyle.backgroundColor) {
				oCell.setAttribute("sOldBgColor", oCell.runtimeStyle.backgroundColor);
				oldcolo = oCell.getAttribute("sOldBgColor");
				
				oCell.runtimeStyle.cssText = oCell.runtimeStyle.cssText.replace(oCell.runtimeStyle.backgroundColor, oSelectionInfo.oColors.sFocus + " !important");
			
			} else {
	    	oCell.runtimeStyle.cssText += "background-color:"+ oSelectionInfo.oColors.sFocus + " !important";
	    }
	    
	    oCell.bIsFocusColorized = true;
		}	
	} else {
		if(oCell.bIsFocusColorized) {
			
			var sOldBgColor = oCell.getAttribute("sOldBgColor");
			if(sOldBgColor) {
				oCell.runtimeStyle.cssText = oCell.runtimeStyle.cssText.replace(oSelectionInfo.oColors.sFocus, sOldBgColor + " !important");
				oCell.setAttribute("sOldBgColor", "");
			} else oCell.runtimeStyle.backgroundColor = "";
			
			oCell.bIsFocusColorized = false;
		}
	}
	return true;
};
function sapUrMapi_SapTable_selectRowByObject(oRow,bSelect,bSecondary)
{
  var oButton = oRow.getElementsByTagName("DIV").item(0);
  var bHasSelectionButton = (oButton && oButton.className && oButton.className.indexOf("urSTRow") >= 0)? true: false;
  if(bHasSelectionButton) {
    if(!sapUrMapi_SapTable_isSelButtonSelectable(oButton)) return;
    
    if(!bSelect && oButton.getAttribute("selMust")) return;
    if(!bSelect) {
	      oButton.className = oButton.className.replace("urSTRowSelSecIcon", "urSTRowUnSelIcon");
	      oButton.className = oButton.className.replace("urSTRowSelIcon", "urSTRowUnSelIcon");
    } else if(bSecondary) {
    	oButton.className = oButton.className.replace("urSTRowUnSelIcon", "urSTRowSelSecIcon");
    	oButton.className = oButton.className.replace("urSTRowSelIcon", "urSTRowSelSecIcon"); 
    } else {
    	oButton.className = oButton.className.replace("urSTRowSelSecIcon", "urSTRowSelIcon");
    	oButton.className = oButton.className.replace("urSTRowUnSelIcon", "urSTRowSelIcon");
  	}
  }
  var startIndex = 0;
  if (bHasSelectionButton) startIndex = 1;
  for (var n=startIndex;n<oRow.childNodes.length;n++) {
    oItem=oRow.childNodes[n];
    sapUrMapi_SapTableSelectCell(oItem,false,bSelect,bSecondary);
  }
  if(ur_system.is508 && bHasSelectionButton){
    if(bSelect){
      ur_setSt(oButton,ur_st.SELECTED,true);
      ur_setSt(oButton,ur_st.NOTSELECTED,false);
    }
    else{
      ur_setSt(oButton,ur_st.SELECTED,false);
      ur_setSt(oButton,ur_st.NOTSELECTED,true);
    }
    oButton.fireEvent("onactivate");
  }
}
function sapUrMapi_SapTable_selectRow(sId,sRowIdx,iCol,iGroup,v1,v2,v3)
{
	var oEventSource = null,  sTableId = null, bSecondary = null;
	
	
	
	if(v1 && typeof(v1) == "object") { 
		sTableId = sId;
		oEventSource = ur_EVT_src(v1);
		bSecondary = v2;
	} else { 
		sTableId = v1;
		oEventSource = ur_EVT_src(v2);
		bSecondary = v3;
	}
	
  if (typeof(bSecondary)=="undefined") bSecondary=false;
  var oRow = oEventSource.parentNode.parentNode;
  while (oRow.tagName!="TR") oRow=oRow.parentNode;
  var oButton = oRow.getElementsByTagName("DIV").item(0);
  if(!sapUrMapi_SapTable_isSelButtonSelectable(oButton)) return oRow;
  var bSelect = sapUrMapi_SapTable_isSecondarySelected(oButton)||sapUrMapi_SapTable_isPrimarySelected(oButton)?false:true;
 
  sapUrMapi_SapTable_selectRowByObject(oRow,bSelect,bSecondary);
  return oRow;
}
function sapUrMapi_SapTableSelectCell(oCell,bEdit,bSelect,bSecondary)
{
  var bEdit=false;
  if (oCell.getAttribute("urRowSpan") &&  parseInt(oCell.getAttribute("urRowSpan")) > 1) return;
  if (typeof(bSelect)=="undefined") bSelect=true;
  if (typeof(bSecondary)=="undefined") bSecondary=false;
  if (oCell.className.indexOf("Ico")>-1) return;
  var bIsReadOnly = oCell.className.indexOf("urSTTDRo2") >= 0;
  if(!ur_fastTableCellSelect(oCell, bIsReadOnly, bSelect, bSecondary)) {
	  if (bSelect) {
	    if (bSecondary)
	      oCell.className = oCell.className + " urST4Sel2" + (bIsReadOnly? "Ro": "");
	    else
	      oCell.className = oCell.className + " urST4Sel" + (bIsReadOnly? "Ro": "");
	  } else {
	  	if(bIsReadOnly) {
	  		oCell.className=oCell.className.replace(" urST4Sel2Ro","");
		    oCell.className=oCell.className.replace(" urST4SelRo","");
	  	} else {
	  		oCell.className=oCell.className.replace(" urST4Sel2","");
		    oCell.className=oCell.className.replace(" urST4Sel","");
	  	}
	  }
  }
  if(ur_system.is508){
    var sSemanticColor = oCell.getAttribute("s")?  oCell.getAttribute("s"): "";
    sSemanticColor = sSemanticColor.replace("s","");
    if(bSelect){
      sSemanticColor += "s";
    }
    oCell.setAttribute("s", sSemanticColor);
  }
}
function sapUrMapi_SapTable_isSelButtonSelectable(oSelButton){
  if(oSelButton) {
    var sClassName = oSelButton.className;
    if(sClassName.indexOf("urSTRowUnSelIcon") >= 0 || sClassName.indexOf("urSTRowSelIcon") >=0 || sClassName.indexOf("urSTRowSelSecIcon") >= 0) return true;
  }
  return false;
}
function sapUrMapi_SapTable_isSelectable(oRow){
  var oButtons = oRow.getElementsByTagName("DIV");
  if(oButtons.length > 0) {
    return sapUrMapi_SapTable_isSelButtonSelectable(oButtons.item(0));
  }
  return false;
}
function sapUrMapi_SapTable_clickSelButton(oRow,oEvt){
  while(oRow.tagName!="TR") oRow = oRow.parentNode;
  if(oRow.tagName!="TR")return;
  var sButtons = oRow.getElementsByTagName("DIV");
  for(var i=0;i<sButtons.length;i++){
    if(sapUrMapi_SapTable_isSelButtonSelectable(sButtons[i])){
      sButtons[i].fireEvent("onclick",oEvt);
      return;
    }
  }
}
function sapUrMapi_SapTable_getModelCellOfCnt(sId,o) {
  var oTbl=ur_Table_create(sId);
  var oCell=o;
  
  while( (oCell.tagName != "TD" && oCell.tagName != "TH") || (oCell.className.indexOf("urST3")==-1 && oCell.className.indexOf("urST3H")==-1) ){
    if(oCell.id==sId) break;
    oCell = oCell.parentNode;
  }
  
  oCell=oTbl.lookup[oCell.id];
  return oCell;
}
var UR_SEARCH_DIRECTION = {
    NONE: 0,
    ACCENDING: 1,
    DECENDING: 2,
    LAST: 3,
    FIRST: 4
  };
function sapUrMapi_SapTable_focusDown(sId,o){
  return ur_SapTable_sNavigate(sId, o, UR_SEARCH_DIRECTION.ACCENDING, false);
}
function sapUrMapi_SapTable_focusUp(sId,o){
  return ur_SapTable_sNavigate(sId, o, UR_SEARCH_DIRECTION.DECENDING, false);
}
function sapUrMapi_SapTable_focusNext(sId,o){
  return ur_SapTable_sNavigate(sId, o, UR_SEARCH_DIRECTION.ACCENDING, true);
}
function sapUrMapi_SapTable_focusPrevious(sId,o){
  return ur_SapTable_sNavigate(sId, o, UR_SEARCH_DIRECTION.DECENDING, true);
}
function ur_SapTable_sNavigate(sTableId, oDomRefCell, eSearchDirection, bHorizontal){
  var oTable=ur_Table_create(sTableId),
    oCell = oTable.focusedCell,
    oResultCell = null;
  if (oCell==null) oCell=sapUrMapi_SapTable_getModelCellOfCnt(sTableId,oDomRefCell);
  if (oCell==null) return "UNDEFINED";
  oResultCell = ur_SapTable_oSearchFocusableCell(oTable, oCell, eSearchDirection, bHorizontal);
  if(oResultCell == oCell) return "END";
  if(oResultCell == null) return "UNDEFINED";
  sapUrMapi_SapTable_focusCell(oResultCell, sTableId);
  return "";
}
function ur_SapTable_oSearchFocusableCell(oTable, oCellReference, eSearchDirection, bHorizontal){
  var iCurrRowIndex = -1, iCurrColIndex = -1, oCurrCell = null, oOrgCell = null;
  oOrgCell = oCellReference.oOrgCell;
  iCurrRowIndex = oOrgCell.rowIdx;
  iCurrColIndex = oOrgCell.colIdx;
  if(bHorizontal) {
    if(eSearchDirection == UR_SEARCH_DIRECTION.LAST) {
      iCurrColIndex = oOrgCell.parentRow.cells.length-1;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.FIRST) {
      iCurrColIndex = 0;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.ACCENDING) {
      iCurrColIndex = iCurrColIndex + oOrgCell.iColSpan;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.DECENDING) {
      iCurrColIndex = iCurrColIndex -1;
    }
  } else {
    if(eSearchDirection == UR_SEARCH_DIRECTION.LAST) {
      iCurrRowIndex = oOrgCell.parentCol.cells.length-1;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.FIRST) {
      iCurrRowIndex = 0;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.ACCENDING) {
      iCurrRowIndex = iCurrRowIndex + oOrgCell.iRowSpan;
    } else if (eSearchDirection == UR_SEARCH_DIRECTION.DECENDING) {
      iCurrRowIndex = iCurrRowIndex -1;
    }
  }
  if(oTable.rows[iCurrRowIndex]) {
    oCurrCell = oTable.rows[iCurrRowIndex].cells[iCurrColIndex];
  }
  if(oCurrCell == null) return oCellReference;
  
  if(oCurrCell.ref.fi) {
    var oRecursionResult = null;
    if(eSearchDirection == UR_SEARCH_DIRECTION.LAST)
      oRecursionResult = ur_SapTable_oSearchFocusableCell(oTable, oCurrCell, UR_SEARCH_DIRECTION.DECENDING, bHorizontal);
    else if(eSearchDirection == UR_SEARCH_DIRECTION.FIRST)
      oRecursionResult = ur_SapTable_oSearchFocusableCell(oTable, oCurrCell, UR_SEARCH_DIRECTION.ACCENDING, bHorizontal);
    else {
      oRecursionResult = ur_SapTable_oSearchFocusableCell(oTable, oCurrCell, eSearchDirection, bHorizontal);
    }
    if(oRecursionResult.ref.fi) return oCellReference;
    else return oRecursionResult;
  } else return oCurrCell;
};
var UR_SCROLL_UI = {
  NONE:0,
  PAGINATOR:1,
  SCROLLBAR:2
}
var UR_SCROLL_DIR = {
  VERTICAL:0,
  HORIZONTAL:1
}
var UR_SCROLL_BY = {
  NEXT_ITEM:0,
  NEXT_PAGE:1,
  END:2,
  PREVIOUS_ITEM:3,
  PREVIOUS_PAGE:4,
  BEGIN:5
}
function sapUrMapi_SapTable_canScrollV(sTableId, oTable) {
  if(!oTable) oTable=ur_get(sTableId);
  return (ur_get(oTable.getAttribute("pv")) || ur_get(sTableId+"-scrollV"))? true: false;
}
function sapUrMapi_SapTable_canScrollH(sTableId, oTable) {
  if(!oTable) oTable=ur_get(sTableId);
  return (ur_get(oTable.getAttribute("ph")) || ur_get(sTableId+"-scrollH"))? true: false;
}
function sapUrMapi_SapTable_scroll(sTableId, oEvt, iScrollDir, iScrollBy) {
  var oTable=ur_get(sTableId), sSclId = null, oScl=null, scrollUi=UR_SCROLL_UI.PAGINATOR;
  if (iScrollDir == UR_SCROLL_DIR.VERTICAL) {
    sSclId=oTable.getAttribute("pv");
    oScl=ur_get(sSclId);
    if (!oScl) {
      sSclId=sTableId+"-scrollV";
      oScl=ur_get(sSclId);
      scrollUi=UR_SCROLL_UI.SCROLLBAR;
    }
  } else if (iScrollDir == UR_SCROLL_DIR.HORIZONTAL) {
    sSclId=oTable.getAttribute("ph");
    oScl=ur_get(sSclId);
    if (!oScl) {
      sSclId=sTableId+"-scrollH";
      oScl=ur_get(sSclId);
      scrollUi=UR_SCROLL_UI.SCROLLBAR;
    }
  } else return false;
  if (!oScl) return false;
  if (scrollUi == UR_SCROLL_UI.PAGINATOR) {
    switch (iScrollBy) {
      case 0:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.NEXT_ITEM)) return true;
      case 1:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.NEXT_PAGE)) return true;
      case 2:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.END)) return true;
        break;
      case 3:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.PREVIOUS_ITEM)) return true;
      case 4:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.PREVIOUS_PAGE)) return true;
      case 5:
        if (ur_Paginator_triggerClick(sSclId, UR_PAGINATOR_BUTTON.BEGIN)) return true;
        break;
      default:
        return false;
    }
  } else if (scrollUi == UR_SCROLL_UI.SCROLLBAR) {
    var oSclInfoObject=ur_Scrollbar_getObj(sSclId);
    switch (iScrollBy) {
      case 0:
        ur_Scrollbar_scroll(oSclInfoObject, "down", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 1:
        ur_Scrollbar_page(oSclInfoObject, "down", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 2:
        ur_Scrollbar_bounce(oSclInfoObject, "down", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 3:
        ur_Scrollbar_scroll(oSclInfoObject, "up", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 4:
        ur_Scrollbar_page(oSclInfoObject, "up", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      case 5:
        ur_Scrollbar_bounce(oSclInfoObject, "up", oEvt);
        ur_Scrollbar_fireChange(oSclInfoObject, oEvt);
        break;
      default:
        return false;
    }
  }
  return false;
}
function sapUrMapi_SapTable_keydown(sId,e) {
 var o=ur_EVT_src(e);
  var sTag=o.tagName;
  var iKey=e.keyCode;
  var bS=e.shiftKey;
  var bA=e.altKey;
  var bC=sapUrMapi_bCtrl(e);
  var sCt=sapUrMapi_getControlTypeFromObject(o);
  var oT=ur_get(sId); 
  var oTableObject = ur_Table_create(sId);
	if(iKey==9) sapUrMapi_SapTable_processTabActionStart(o, oTableObject, bS);
	else sapUrMapi_SapTable_processTabActionReset(oTableObject);
  
  var bCanScrollV=sapUrMapi_SapTable_canScrollV(sId, oT);
  var bCanScrollH=sapUrMapi_SapTable_canScrollH(sId, oT);
  
  var sPhId=oT.getAttribute("ph");
  var oPh=ur_get(sPhId);
  
  var sPvId=oT.getAttribute("pv");
  var oPv=ur_get(sPvId);
  
  if(iKey==32 && sCt!="I" && sCt!="TE" && sCt!="CB" && sCt!="C" && sCt!="R" && sCt!="TRI"){
    try{
      o.fireEvent("onclick",e);
    } catch(ex){ }
    ur_EVT_cancel(e);
    return true;
  }
  
  if((bC || bS) && (iKey==40 || iKey==38)){
    if(sapUrMapiSapTable_sort(o))
      return ur_EVT_cancel(e);
  }
  
  if(iKey==40 && sCt!="TE"){
    sResult=sapUrMapi_SapTable_focusDown(sId,o);
    if (sResult=="END" && bCanScrollV) {
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.NEXT_ITEM);
    }
    ur_EVT_cancel(e);
    return true;
  }
  
  if(iKey==38 && sCt!="TE"){
    sResult=sapUrMapi_SapTable_focusUp(sId,o);
    if (sResult=="END" && bCanScrollV) {
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.PREVIOUS_ITEM);
    }
    ur_EVT_cancel(e);
    return true;
  }
  
  if(iKey==39 && (sCt!="I" && sCt!="TE")){
    var sResult="";
    if (ur_system.direction=="rtl")
      sResult=sapUrMapi_SapTable_focusPrevious(sId,o);
    else
      sResult=sapUrMapi_SapTable_focusNext(sId,o);
    if (sResult=="END" && bCanScrollH) {
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.HORIZONTAL, (ur_system.direction=="rtl")? UR_SCROLL_BY.PREVIOUS_ITEM: UR_SCROLL_BY.NEXT_ITEM);
    }
    ur_EVT_cancel(e);
    return true;
  }
  
  if(iKey==37 && (sCt!="I" && sCt!="TE")){
    var sResult="";
    if (ur_system.direction=="rtl")
      sResult=sapUrMapi_SapTable_focusNext(sId,o);
    else
      sResult=sapUrMapi_SapTable_focusPrevious(sId,o);
    if (sResult=="END" && bCanScrollH) {
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.HORIZONTAL, (ur_system.direction=="rtl")? UR_SCROLL_BY.NEXT_ITEM: UR_SCROLL_BY.PREVIOUS_ITEM);
    }
    ur_EVT_cancel(e);
    return true;
  }
  else if(iKey==9){
    var oTableInfoObject=ur_Table_create(sId);
    oTableInfoObject.focusedCell=null;
  }
  
  
  
  
  if (bCanScrollH && bA && !bS && !bC && sCt!="TE") {
    
    if(iKey==33){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.HORIZONTAL, UR_SCROLL_BY.PREVIOUS_PAGE);
      ur_EVT_cancel(e);
      return;
    }
    
    if(iKey==34){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.HORIZONTAL, UR_SCROLL_BY.NEXT_PAGE);
      ur_EVT_cancel(e);
      return;
    }
  }
  
  if (bCanScrollV && !bA && !bS && sCt!="I" && sCt!="TE") {
    
    if(iKey==36 && bC){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.BEGIN);
      ur_EVT_cancel(e);
      return;
    }
    
    if(iKey==35 && bC){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.END);
      ur_EVT_cancel(e);
      return;
    }
    
    if(iKey==33 && !bC){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.PREVIOUS_PAGE);
      ur_EVT_cancel(e);
      return;
    }
    
    if(iKey==34 && !bC){
      sapUrMapi_SapTable_scroll(sId, e, UR_SCROLL_DIR.VERTICAL, UR_SCROLL_BY.NEXT_PAGE);
      ur_EVT_cancel(e);
      return;
    }
  }
  
  return sapUrMapi_skip(sId,e);
}
function ur_SapTable_getCell(o){
  var oCell=o;
  while(oCell.getAttribute("tp")!="HIC"){
    if(oCell.getAttribute("ct")=="ST") return null;
    oCell=oCell.parentNode;
  }
  return oCell;
}
function sapUrMapi_SapTable_HiCell_he(o,oEvt) {
	var o=ur_evtSrc(oEvt);
	var oCell=ur_SapTable_getCell(o);
	var sCt=sapUrMapi_getControlTypeFromObject(o);
	var sFunc="";
	var oFunc=null;
	
	if(o==null || oCell==null) return;
	
	
	
	if( (sCt=="FU" || sCt=="I" || sCt=="CB" || sCt=="TE" || sCt=="TGL") && !(sapUrMapi_bCtrl(oEvt) && oEvt.type=="keydown" && (oEvt.keyCode==107 || oEvt.keyCode==109)) )
			return;
			
		
	
	if( oEvt.type!="click" && !(oEvt.type=="keydown" && (oEvt.keyCode==32 || (oEvt.keyCode==107) || (oEvt.keyCode==109) )))
		return;
		
	if (oEvt.type=="keydown" && o.tagName != "IMG") o = oCell.getElementsByTagName("IMG")[0];
		
	var sStc=o.getAttribute("stc"); 
	if(sStc) {
		if (oEvt.type=="keydown") {
			if (sStc=="oex" && oEvt.keyCode==107)
				ur_EVT_fire(oCell,sStc,oEvt);
			else if (sStc=="oco" && oEvt.keyCode==109)
				ur_EVT_fire(oCell,sStc,oEvt);
			else if (oEvt.keyCode==32)
				ur_EVT_fire(oCell,sStc,oEvt);
		} else {
			ur_EVT_fire(oCell,sStc,oEvt);
		}
	} else if (oCell.getAttribute("oc"))
		ur_EVT_fire(oCell,"oc",oEvt);
	
	return ur_EVT_cancel(oEvt);		
}
function sapUrMapiSapTable_sort(oCell,bAsc){
  var aBtn;
  var oBtn=null;
  var sTp=oCell.getAttribute("tp");
  if(sTp==null || sTp.indexOf("HDR")<0) return false;
  aBtn=oCell.getElementsByTagName("button");
  for(var i=0;i<aBtn.length;i++)
    if(aBtn[i].className.indexOf("urSTIconSor")>=0 || aBtn[i].className=="urSTIconUnsorted")oBtn=aBtn[i];
  if(oBtn!=null) oBtn.click();
  return true;
}
function sapUrMapi_SapTable_activate(sId,e){
  var o=e.srcElement;
  var oTab=ur_Table_create(sId);
  if(oTab) {
    var oCell=sapUrMapi_SapTable_getModelCellOfCnt(sId,o);
    oTab.focusedCell=oCell;
  }
}
function sapUrMapi_SapTable_deactivate(oEvt){
}
function sapUrMapi_SapTable_focusCell(oCell, sTableId){
  var oFocus = null;
  
  if(oCell==null) return null; 
  
  if( oCell.ref.firstChild!=null && oCell.ref.firstChild.nodeType!=3 && (oCell.ref.firstChild).getAttribute('ct')!="PI")
    oFocus=sapUrMapi_findFirstFocus(oCell.ref.firstChild);
  
  if(oFocus!=null){
    ur_focus(oFocus);
  }
  
  else {
    var sCellType=oCell.ref.getAttribute("tp"),
      oDomRefToFocus = oCell.ref.firstChild;
    if(sCellType!=null && sCellType=="ER") return false;
    sapUrMapi_setTabIndex(oDomRefToFocus,"0");
    sapUrMapi_setTabIndexAutoReset(oDomRefToFocus);
    if(sTableId && !oDomRefToFocus.id) oDomRefToFocus.id = sapUrMapi_SapTable_sGenerateMatrixId(sTableId, oCell.rowIdx, oCell.colIdx);
    ur_focus(oDomRefToFocus);
  }
  return true;
}
function sapUrMapi_SapTable_sGenerateMatrixId(sRootId, iRowIndex, iColIndex){ 
  return sRootId + "-mtx_" + iRowIndex + "_" + iColIndex + "_mtx-";
}
function sapUrMapi_SapTable_bIsMatrixId(sId){
  return sId && sId.indexOf("-mtx_") > 0 && sId.indexOf("_mtx-") == sId.length-5;
}
function sapUrMapi_SapTable_focusMatrixItem(sMatrixId){
  var iPosBeginIndex = sMatrixId.indexOf("-mtx_"),
    sRootId = sMatrixId.substring(0, iPosBeginIndex),
    sPos = sMatrixId.substring(iPosBeginIndex+5, sMatrixId.length - 5),
    aPos = sPos.split("_"),
    iRowIndex = parseInt(aPos[0]),
    iColIndex = parseInt(aPos[1]);
  sapUrMapi_SapTable_focusTableCellByPos(sRootId, iRowIndex, iColIndex);
}
function sapUrMapi_SapTable_focusTableCellByPos(sTableId, iRowIndex, iColIndex){
  var oTable = ur_Table_create(sTableId),
    oCell = (oTable.rows[iRowIndex])? oTable.rows[iRowIndex].cells[iColIndex]: null;
  if(oCell) {
    sapUrMapi_SapTable_focusCell(oCell, sTableId);
    oTable.focusedCell = oCell;
  }
}
function sapUrMapi_SapTable_sGetMatrixIdByContentDomRef(sTableId, oContentDomRef){
  var oDomRefTable=ur_get(sTableId),
    oTableInfo = (oDomRefTable.ct == "ST")? ur_Table_create(sTableId): null,
    oCurrDomRef = oContentDomRef;
  if(oTableInfo) {
    while(oCurrDomRef != null && oCurrDomRef != oDomRefTable && oCurrDomRef.tagName!="BODY") {
      if(oCurrDomRef.parentNode && oCurrDomRef.parentNode.rr && oCurrDomRef.id){
        var oCellInfo = oTableInfo.lookup[oCurrDomRef.id];
        if(oCellInfo) return sapUrMapi_SapTable_sGenerateMatrixId(sTableId, oCellInfo.rowIdx, oCellInfo.colIdx);
      }
      oCurrDomRef = oCurrDomRef.parentNode;
    }
  }
  return "";
}
function sapUrMapi_SapTable_bIsTableId(sTableId){
  var oDomRefTable=ur_get(sTableId);
  return oDomRefTable && oDomRefTable.ct == "ST";
}
function sapUrMapi_SapTable_getTooltip(o,oCell,oTab){
  
}
var _ur_tables=new Array();
function ur_Table_create(sId) {
  if (_ur_tables[sId]==null) {
    if(ur_SapTableClientScroll_isClientScrollTable(sId))
      return null;
    var oRows = new Array();
    var oRefCells = new Array();
    var oBdy = null;
    var iR=0;
    var oTab=ur_get(sId);
    var bHasTb=false;
    var oTb=null;
    while(oBdy==null){
      if (oTab.rows[iR].cells[0]==null){iR++;continue;}
      var oTmp=oTab.rows[iR].cells[0].firstChild;
      if (oTmp==null) {iR++;continue;}
	  
      if (oTmp.tagName=="DIV" && oTmp.className.indexOf("urST3BdBrd")>-1 && oTmp.firstChild) { 
	      oTmp=oTmp.firstChild;
      }	  
	  
      if (oTmp.tagName=="TABLE") {
        if (oTmp.className.indexOf("urST3Bd")>-1) {
          oBdy=oTmp;
          
          if (oBdy.ur_firstTBodyOnly && oBdy.tBodies && oBdy.tBodies.length && oBdy.tBodies.length > 0)
            oBdy=oBdy.tBodies[0];
          
          break;
        }
        if (oTmp.firstChild.firstChild.firstChild.getAttribute("ct")=="T") {
          oTb=oTmp.firstChild.firstChild.firstChild;
          bHasTb=true;
        }
      }
      iR++;
    }
    if (oBdy==null) return null;
    var oTRows = oBdy.rows;
    var oDCells = null;
    var oRowSpanedCells = new Array();
    var iMaxCols=0;
    for (var iRowCount=0;iRowCount<oTRows.length;iRowCount++)  {
      for (var iColCount=0;iColCount<oTRows[iRowCount].cells.length;iColCount++) {
        var iColSpan=parseInt(oTRows[iRowCount].cells[iColCount].colSpan);
        if (isNaN(iColSpan)) iColSpan=1;
        iMaxCols=iMaxCols+iColSpan;
      }
      break;
    }
    for (var iRowCount=0;iRowCount<oTRows.length;iRowCount++)  {
      oRows.push({irowidx:iRowCount,ref:null,cells:new Array(iMaxCols)});
    }
    for (var iRowCount=0;iRowCount<oTRows.length;iRowCount++)  {
      var oCells = oRows[iRowCount].cells;
      var iColCount=0, oOrgCell = null, oTmpCell = null;
      oDCells=oTRows[iRowCount].cells;
      for (var iCol = 0; iCol<oDCells.length; iCol++) {
        while (oCells[iColCount]) iColCount++;
        oRows[iRowCount].cells[iColCount] = {ref:oDCells[iCol]};
        var iColSpan=parseInt(oDCells[iCol].colSpan);
        if (isNaN(iColSpan)) iColSpan=1;
        var iRowSpan=parseInt(oDCells[iCol].rowSpan);
        if (isNaN(iRowSpan)) iRowSpan = 1;
        for (var x=1;x<=iColSpan;x++) {
          for (var iRowSpanCount = 1 ; iRowSpanCount <= iRowSpan; iRowSpanCount++) {
            oTmpCell = {ref:oDCells[iCol],cspan:iColSpan>1,rspan:iRowSpan>1};
            if(x == 1 && iRowSpanCount == 1) {
              oOrgCell = oTmpCell;
              oOrgCell.iRowSpan = iRowSpan;
              oOrgCell.iColSpan = iColSpan;
            }
            oTmpCell.oOrgCell = oOrgCell;
            oRows[iRowCount+iRowSpanCount-1].cells[iColCount] = oTmpCell;
          }
          iColCount++;
        }
      }
      iColCount++;
      oRows[iRowCount].ref=oTRows[iRowCount];
    }
    var oCols=new Array();
    for (var i=0; i<oRows.length; i++){
      for (var j=0; j<oRows[i].cells.length; j++) {
        if (oRows[i].cells[j] == null) {
          oRows[i].cells[j]={ref:oRows[i].cells[j-1].ref,empty:true};
          oRows[i].cells[j-1].last=true;
        } else {
          oRows[i].cells[j].empty=false;
          oRows[i].cells[j].last=j==oRows[i].cells.length-1?true:false;
        }
        if (i>0) oRows[i].previousRow=oRows[i-1];
        if (i<oRows.length-1) oRows[i].nextRow=oRows[i+1];
        oRows[i].irowidx=i;
        var oCell=oRows[i].cells[j];
        oRows[i].sel=-1;
        oCell.foc=false;
        oCell.sel=-1;
        oCell.type="te";
        oCell.parentRow=oRows[i];
        oCell.first=j==0?true:false;
        oCell.isTH=oCell.ref.tagName=="TH";
        oCell.rowIdx=i;
        oCell.colIdx=j;
        if (i==0) {
          oCols.push({icolidx:j,cells:new Array()});
        }
        oCell.parentCol=oCols[j];
        oCols[j].cells.push(oCell);
        oCols[j].sel=-1;
        if (oCell.ref.id==null || oCell.ref.id=="") {
          oCell.ref.setAttribute("id",sId+"-cell-"+i+"-"+j);
        }
        oRefCells[oCell.ref.id]=oCell;
      }
    }
    _ur_tables[sId]={rows:oRows,cols:oCols,lookup:oRefCells,ref:oTab,hasToolbar:bHasTb,toolbar:oTb};
    var debugMode="";
    if (debugMode=="table") {
      var sRenderTable = "<table border='1'>";
      for (var y=0;y<_ur_tables[sId].rows.length;y++) {
        sRenderTable+="<tr>";
        for (var x=0;x<_ur_tables[sId].rows[y].cells.length;x++) {
          sRenderTable+="<td>"+_ur_tables[sId].rows[y].cells[x].rspan + x+" "+y+" "+_ur_tables[sId].rows[y].cells[x].ref.innerText+"</td>";
        }
        sRenderTable+="</tr>";
      }
      sRenderTable+="</table>";
      var oDiv = document.createElement("DIV");
      document.body.appendChild(oDiv);
      oDiv.innerHTML = sRenderTable;
    }
  }
  return _ur_tables[sId];
}
function sapUrMapi_SapTable_Scrollbar_scroll(sId,oEvt) {
  var o=document.getElementById(sId.split("-")[0]);
  if (!o) return;
  if (oEvt.ur_param && oEvt.ur_param["dir"]) {
    var dir=oEvt.ur_param["dir"];
    if (dir=="v") {
      if (ur_getAttD(o,"o"+dir+"scrl","")!="") ur_EVT_fire(o,"o"+dir+"scrl",oEvt);
    } else if (dir=="h") {
      if (ur_getAttD(o,"o"+dir+"scrl","")!="") ur_EVT_fire(o,"o"+dir+"scrl",oEvt);
    }
  }
}
var ur_oCRConfig = null;
function ur_SapTable_CR_init(oCRConfig) {
  ur_oCRConfig = oCRConfig;
  var oSrcHeader = ur_getNextHtmlParentByTagName(oCRConfig.oDragSource, "TH"),
    oTable = document.getElementById(oCRConfig.sTableId);
  if(oSrcHeader && oTable) {
    var oHeaderRow = oSrcHeader.parentNode,
      oCurrHeader=null,
      oHeaderInfo = null,
      bCanResize = false,
      oDomRefContentTable = document.getElementById(oCRConfig.sTableId + "-content").getElementsByTagName("TABLE")[0],
      oDomRefColGroup = oDomRefContentTable.getElementsByTagName("COLGROUP")[0];
      aDomRefCols = oDomRefColGroup? oDomRefColGroup.getElementsByTagName("COL"): null;
    
    
    
    oCRConfig.oTable = oTable;
    oCRConfig.oTablePos = sapUrMapi_getAbsolutePositionInScrollContainer(oTable);
    oCRConfig.iMinColumnWidth = 25;
    oCRConfig.oAllHeaderInfos = [];
    oCRConfig.iNextColumnsTotalWidth = 0;
    oCRConfig.iSrcIndex = -1;
    oCRConfig.oSrcHeaderPos = sapUrMapi_getAbsolutePositionInScrollContainer(oSrcHeader);
    oCRConfig.sColWidths = "";
    
    var oDomRefContainer = oTable.parentElement, iScrollOffsetX =0;
    while(oDomRefContainer != null) {
      iScrollOffsetX += oDomRefContainer.scrollLeft;
      oDomRefContainer = oDomRefContainer.parentElement;
    }
    iScrollOffsetX = Math.max(iScrollOffsetX, 0);
    oCRConfig.iMinHorizontalMove = oCRConfig.oSrcHeaderPos.left + oCRConfig.iMinColumnWidth - iScrollOffsetX;
    oCRConfig.iMaxHorizontalMove = oCRConfig.iMinHorizontalMove; 
    for(var i=0; i<oHeaderRow.childNodes.length; i++) {
      oCurrHeader = oHeaderRow.childNodes[i];
      if( !(i==0 && ur_hasClassName(oCurrHeader, "urST3H1Scol")) && oCurrHeader.tagName == "TH") {
        oHeaderInfo = {
          oHeaderRef: oCurrHeader,
          iWidthBefore: oCurrHeader.offsetWidth,
          iWidthAfter: -1,
          bIsResizable: (oCurrHeader.getAttribute("rszbl") == "X"),
          sWidthUnitAfter: null,
          iWidthAmountAfter: -1,
          sWidthUnitBefore: null,
          iWidthAmountBefore: -1,
          sOrignalStyleWidth: aDomRefCols? aDomRefCols[i].style.width: null
        };
        if(oCurrHeader == oSrcHeader) {
          oCRConfig.iSrcIndex = oCRConfig.oAllHeaderInfos.length;
        }
        if(oHeaderInfo.sOrignalStyleWidth) {
          var iWidthAmount = parseInt(oHeaderInfo.sOrignalStyleWidth),
            sWidthAmount = new String(iWidthAmount),
            sWidthUnit = oHeaderInfo.sOrignalStyleWidth.substr(sWidthAmount.length);
          if(sWidthUnit == "%") {
            oHeaderInfo.iWidthAmountBefore = iWidthAmount;
            oHeaderInfo.sWidthUnitBefore = "%";
          } else if(oCRConfig.iSrcIndex != -1){
            oHeaderInfo.iWidthAmountBefore = oHeaderInfo.iWidthBefore;
            oHeaderInfo.sWidthUnitBefore = "px";
          } else {
            oHeaderInfo.iWidthAmountBefore = iWidthAmount;
            oHeaderInfo.sWidthUnitBefore = sWidthUnit;
          }
        }
        if(oCRConfig.iSrcIndex != -1) { 
          if(oHeaderInfo.bIsResizable) {
            oCRConfig.iMaxHorizontalMove += oHeaderInfo.iWidthBefore - oCRConfig.iMinColumnWidth;
            if(oCurrHeader != oSrcHeader) bCanResize=true;
          }
          if(oCurrHeader != oSrcHeader && oHeaderInfo.bIsResizable) oCRConfig.iNextColumnsTotalWidth += oHeaderInfo.iWidthBefore;
        } else {
          
          
          oHeaderInfo.iWidthAfter = oHeaderInfo.iWidthBefore;
          oHeaderInfo.sWidthUnitAfter = oHeaderInfo.sWidthUnitBefore;
          oHeaderInfo.iWidthAmountAfter = oHeaderInfo.iWidthAmountBefore;
        }
        oCRConfig.oAllHeaderInfos[oCRConfig.oAllHeaderInfos.length] = oHeaderInfo;
      }
    }
    if(bCanResize) {
      ur_SapTable_CR_hideResizeHandles(oCRConfig.sTableId);
      ur_setCapture(oCRConfig.oDragSource);
      ur_attachEvent(oCRConfig.oDragSource, "mousemove", ur_SapTable_CR_resizeMove);
      ur_attachEvent(oCRConfig.oDragSource, "mouseup", ur_SapTable_CR_resizeEnd);
    }
  }
}
function ur_SapTable_CR_cleanUp() {
  var oCRConfig = ur_oCRConfig;
  ur_releaseCapture(oCRConfig.oDragSource);
  ur_detachEvent(oCRConfig.oDragSource, "mousemove", ur_SapTable_CR_resizeMove);
  ur_detachEvent(oCRConfig.oDragSource, "mouseup", ur_SapTable_CR_resizeEnd);
  ur_SapTable_hideReferenceLine();
  ur_SapTable_CR_showResizeHandles(oCRConfig.sTableId);
  ur_oCRConfig = null;
}
function ur_SapTable_CR_resizeMove(oEvt) {
  var oCRConfig = ur_oCRConfig;
  oCRConfig.iCurrHorizontalMove = Math.min(Math.max(oCRConfig.iMinHorizontalMove, oEvt.x), oCRConfig.iMaxHorizontalMove) + ur_getBodyRef().scrollLeft;
  ur_SapTable_showReferenceLine(
    oCRConfig.iCurrHorizontalMove,
    oCRConfig.oSrcHeaderPos.top,
    oCRConfig.oTable.offsetHeight - (oCRConfig.oSrcHeaderPos.top - oCRConfig.oTablePos.top),
    oCRConfig.oTable,
    null,
    0,
    false);
}
function ur_SapTable_CR_resizeEnd(oEvt) {
  var oCRConfig = ur_oCRConfig,
    oCurrHeaderInfo = null,
    iResultWidth = oCRConfig.iCurrHorizontalMove - oCRConfig.oSrcHeaderPos.left,
    oldTotalWidth = oCRConfig.iNextColumnsTotalWidth,
    newTotalWidth = oldTotalWidth - (iResultWidth - oCRConfig.oAllHeaderInfos[oCRConfig.iSrcIndex].iWidthBefore),
    iCheckSum = 0,
    iPercentTotalValue= 0,
    iPercentNewTotalWidthInPx= 0,
    aPercentColumnInfos = new Array();
  for(var i=0;  i < oCRConfig.oAllHeaderInfos.length; i++) {
    oCurrHeaderInfo = oCRConfig.oAllHeaderInfos[i];
    if(i >= oCRConfig.iSrcIndex) {
      if(i==oCRConfig.iSrcIndex) {
        oCurrHeaderInfo.iWidthAfter =  iResultWidth;
      } else {
        if(oCurrHeaderInfo.bIsResizable) {
          oCurrHeaderInfo.iWidthAfter = Math.max(oCRConfig.iMinColumnWidth, Math.round(newTotalWidth/oldTotalWidth * (oCurrHeaderInfo.iWidthBefore)));
          iCheckSum += oCurrHeaderInfo.iWidthAfter;
        } else {
          oCurrHeaderInfo.iWidthAfter = oCurrHeaderInfo.iWidthBefore;
        }
        if(i == oCRConfig.oAllHeaderInfos.length-1) { 
          oCurrHeaderInfo.iWidthAfter -= iCheckSum - newTotalWidth ;
        }
      }
    }
    if(oCurrHeaderInfo.sWidthUnitBefore == "%" || !oCurrHeaderInfo.sOrignalStyleWidth) {
      aPercentColumnInfos[aPercentColumnInfos.length] = oCurrHeaderInfo;
      iPercentNewTotalWidthInPx += oCurrHeaderInfo.iWidthAfter;
    } else if(oCurrHeaderInfo.iWidthAmountAfter == -1) { 
      oCurrHeaderInfo.iWidthAmountAfter = oCurrHeaderInfo.iWidthAfter;
      oCurrHeaderInfo.sWidthUnitAfter = "px";
    }
  }
  
  var iWidthLeftOver = 100,
    iPercentNewWidthInPc = 0;
  for(var i=0;  i < aPercentColumnInfos.length; i++) {
    oPercentColumnInfo = aPercentColumnInfos[i];
    if(oPercentColumnInfo.iWidthAmountAfter == -1) {
      iPercentNewWidthInPc = parseInt(100 * oPercentColumnInfo.iWidthAfter/ iPercentNewTotalWidthInPx);
      iWidthLeftOver -= iPercentNewWidthInPc;
      if(i == aPercentColumnInfos.length-1) { 
        iPercentNewWidthInPc += iWidthLeftOver;
      }
      oPercentColumnInfo.iWidthAmountAfter = iPercentNewWidthInPc;
      oPercentColumnInfo.sWidthUnitAfter = "%";
    } else {
      iWidthLeftOver -= oPercentColumnInfo.iWidthAmountAfter;
    }
  }
  
  for(var i=0;  i < oCRConfig.oAllHeaderInfos.length; i++) {
    oCurrHeaderInfo = oCRConfig.oAllHeaderInfos[i];
    oCRConfig.sColWidths += oCurrHeaderInfo.iWidthAmountAfter + oCurrHeaderInfo.sWidthUnitAfter + ";";
  }
  oEvt.ur_param = {
    colWidths: oCRConfig.sColWidths
  }
  ur_SapTable_CR_cleanUp();
  ur_EVT_fire(oCRConfig.oTable,"onColumnResize",oEvt,window);
}
function ur_SapTable_CR_isResizeOperation(oEvt) {
  var oEvtSrc = ur_EVT_src(oEvt);
  return ur_hasClassName(oEvtSrc, "urSTTHResize");
}
function ur_SapTable_CR_getResizeHandle(oTableHeaderCell) {
  if(oTableHeaderCell && oTableHeaderCell.firstChild && oTableHeaderCell.firstChild.tagName=="TABLE") {
    var oHeaderTable=oTableHeaderCell.firstChild,
     oTDs = oHeaderTable.getElementsByTagName("TD");
     oCurrTD = null;
    for(var i=0; i<oTDs.length; i++) {
      oCurrTD=oTDs[i];
      if(oCurrTD.getAttribute("fid")=="resizeHandle") return oCurrTD;
    }
  }
  return null;
}
function ur_SapTable_CR_hideResizeHandles(sTableId) {
  var oTable = document.getElementById(sTableId);
  if(oTable && !oTable.hiddenResizeHandles) {
    var oTHs = oTable.getElementsByTagName("TH"),
      oResizeHandle=null;
    for(var i=0; i<oTHs.length; i++) {
      oResizeHandle = ur_SapTable_CR_getResizeHandle(oTHs[i]);
      if(oResizeHandle) {
        oResizeHandle.style.visibility="hidden";
      }
    }
    
    oTable.hiddenResizeHandles = true;
  }
}
function ur_SapTable_CR_showResizeHandles(sTableId) {
  var oTable = document.getElementById(sTableId);
  if(oTable && oTable.hiddenResizeHandles) {
    var oTHs = oTable.getElementsByTagName("TH"),
      oResizeHandle=null;
    for(var i=0; i<oTHs.length; i++) {
      oResizeHandle = ur_SapTable_CR_getResizeHandle(oTHs[i]);
      if(oResizeHandle) {
        oResizeHandle.style.visibility="";
      }
    }
    
    oTable.hiddenResizeHandles = false;
  }
}
function ur_SapTable_Drag_mousedown(sTableId,oEvt) {
  if(ur_SapTable_CR_isResizeOperation(oEvt)) {
    ur_SapTable_CR_init({
      sTableId: sTableId,
      oDragSource : ur_EVT_src(oEvt)
    });
  } else {
    var oDDConfig = {
        oEvt: oEvt,
        oDocumentMoveHandler: ur_SapTable_Drag_handler,
        oDataBag:{
          sTableId: sTableId
        }
      };
    ur_DragDrop_init(oDDConfig);
  }
  var o = ur_EVT_src(oEvt);
  if(ur_hasClassName(o, "urSTDragData")) {
    
    o.createTextRange().select();
  }
}
function ur_SapTable_Drag_Drop(oDragDropResult) {
  var oDragDropResult = ur_SapTable_getTargetHeader(oDragDropResult);
  oDragDropResult.oEvt.ur_param = {
    sMovedColId: oDragDropResult.oDragSource.id,
    sInsertMode: oDragDropResult.sInsertMode,
    sRefColId: oDragDropResult.oTarget.id
  }
  ur_SapTable_CR_showResizeHandles(oDragDropResult.oDataBag.sTableId);
  ur_SapTable_hideReferenceLine();
  ur_EVT_fire(oDragDropResult.oTable,"onColumnReorder",oDragDropResult.oEvt,window);
  return true;
}
function ur_SapTable_Drag_DropCancel(oDragDropResult) {
  ur_SapTable_CR_showResizeHandles(oDragDropResult.oDataBag.sTableId);
  ur_SapTable_hideReferenceLine();
  return true;
}
function ur_SapTable_Drag_handler(oDragDropResult) {
  if (oDragDropResult.sState == "MOVE") {
    return ur_SapTable_Drag_DragMove(oDragDropResult);
  } else if (oDragDropResult.sState == "DROP") {
    return ur_SapTable_Drag_Drop(oDragDropResult);
  } else if (oDragDropResult.sState == "CANCEL") {
    return ur_SapTable_Drag_DropCancel(oDragDropResult);
  }
  return false;
}
function ur_SapTable_getTargetHeader(oDragDropResult) {
  var oTarget = oDragDropResult.oDropTarget,
    oPreviousTarget = oTarget.previousSibling,
    oSource = oDragDropResult.oDragSource,
    oPos = null,
    oTable = ur_get(oDragDropResult.oDataBag.sTableId),
    oTablePos = sapUrMapi_getAbsolutePositionInScrollContainer(oTable);
  oPos = sapUrMapi_getAbsolutePositionInScrollContainer(oTarget);
  oPos.width = oTarget.offsetWidth;
  oPos.height = oTarget.offsetHeight;
  if (oDragDropResult.iMouseX < oTablePos.left || oDragDropResult.iMouseX > oTablePos.left + oTable.offsetWidth ||
      oDragDropResult.iMouseY < oTablePos.top || oDragDropResult.iMouseY > oTablePos.top + oTable.offsetHeight) {
      return null;
  }
  if (oDragDropResult.iMouseX < oPos.left + (oTarget.offsetWidth/2)) {
    if (oPreviousTarget && ur_DragDrop_hasFlavour(oSource, oPreviousTarget)) {
      oTarget = oPreviousTarget;
      oDragDropResult.sInsertMode = "AFTER";
    } else if(ur_DragDrop_hasFlavour(oSource, oTarget)){
      oDragDropResult.sInsertMode = "BEFORE";
    } else {
      oDragDropResult.sInsertMode = "AFTER";
      return null;
    }
    oPos = sapUrMapi_getAbsolutePositionInScrollContainer(oTarget);
    oPos.width = oTarget.offsetWidth;
    oPos.height = oTarget.offsetHeight;
  } else {
    oDragDropResult.sInsertMode = "AFTER";
  }
  oDragDropResult.oHeaderPos = oPos;
  oDragDropResult.oTablePos = oTablePos;
  oDragDropResult.oTarget = oTarget;
  oDragDropResult.oTable = oTable;
  return oDragDropResult;
}
function ur_SapTable_Drag_DragMove(oDragDropResult) {
  if (!oDragDropResult.bAllowed) {
      ur_SapTable_hideReferenceLine();
      return false;
  }
  if(oDragDropResult && oDragDropResult.oDataBag && oDragDropResult.oDataBag.sTableId) {
  	ur_SapTable_CR_hideResizeHandles(oDragDropResult.oDataBag.sTableId);
  }
  var oResult = ur_SapTable_getTargetHeader(oDragDropResult);
  if (oResult) {
    ur_SapTable_showReferenceLine(
      (oDragDropResult.sInsertMode == "AFTER")?
        oResult.oHeaderPos.left + oResult.oHeaderPos.width - 1:
        oResult.oHeaderPos.left - 1,
      oResult.oHeaderPos.top + oResult.oHeaderPos.height ,
      oResult.oTable.offsetHeight - (oResult.oHeaderPos.top - oResult.oTablePos.top) - oResult.oHeaderPos.height,
      oResult.oTable,
      oResult.oTarget,
      oResult.oHeaderPos.height,
      true);
    return true;
  } else {
    ur_SapTable_hideReferenceLine();
    return false;
  }
}
function ur_SapTable_Drag_start(sControlId,oEvt) {
  var oControl = ur_get(sControlId);
  oEvt["ur_param"] = {type:"all",rowindex:""};
  var content = ur_EVT_fire(oControl, "ocdg", oEvt, window, "SYNC");
  if(content) {
    ur_ClipboardSet(content);
    return true;
  } else {
    return false;
  }
};
function ur_SapTable_hideReferenceLine() {
  var oLine = ur_get("table-line"),
    oArrow = ur_get("table-arrow");
  if (oLine) oLine.style.top = "-1000px";
  if (oArrow) oArrow.style.top = "-1000px";
}
function ur_SapTable_showReferenceLine(iLeft,iTop,iHeight,oTable,oTarget,iRowHeight, bShowArrow) {
  var oLine = ur_get("table-line"),
    oArrow = ur_get("table-arrow"),
    oBody = ur_getBodyRef();
  if (!oLine || !oArrow) {
    oArrow = document.createElement("DIV");
    oArrow.style.position = "absolute";
    oArrow.style.height = "10px";
    oArrow.style.width = "10px";
    oArrow.style.backgroundRepeat="no-repeat";
    oArrow.style.overflow="hidden";
    oArrow.setAttribute("id","table-arrow");
    oArrow.className="urSCBDwn";
    oArrow.style.filter = "progid:DXImageTransform.Microsoft.Alpha( Opacity=80, Style=0 )";
    oLine = document.createElement("DIV");
    oLine.style.position = "absolute";
    oLine.style.borderLeft = "1px solid gray";
    oLine.style.borderRight = "1px solid gray";
    oLine.style.filter = "progid:DXImageTransform.Microsoft.Alpha( Opacity=60, Style=0 )";
    oLine.style.backgroundColor = "black";
    oLine.style.width= "3px";
    oLine.setAttribute("id","table-line");
    oBody.appendChild(oLine);
    oBody.appendChild(oArrow);
  }
  if (oTable.parentNode != oLine.parentNode) {
    oTable.parentNode.appendChild(oLine);
    oTable.parentNode.appendChild(oArrow);
  }
  oArrow.style.top = "-1000px";
  oLine.style.top = "-1000px";
  var iScrollTop = "0px";
  var iScrollLeft = "0px";
  if (oLine.parentNode == oBody) {
    iScrollTop = oBody.scrollTop;
    iScrollLeft = oBody.scrollLeft;
  }
  if(bShowArrow) {
    oArrow.style.top = sapUrMapi_sAddUnit( iTop + iScrollTop - iRowHeight-9 , "px" );
    oArrow.style.left = sapUrMapi_sAddUnit( iLeft + iScrollLeft-5 , "px" );
  }
  oLine.style.top = sapUrMapi_sAddUnit( iTop + iScrollTop , "px" );
  oLine.style.left = sapUrMapi_sAddUnit( iLeft + iScrollLeft , "px" );
  oLine.style.height = sapUrMapi_sAddUnit( iHeight-1 , "px" );
}
function ur_SapTable_ClipboardDataSet (sControlId, sClipboard) {
  var dataBag=ur_get("ur-databag");
  if (!dataBag) return;
  dataBag.innerHTML = sClipboard;
  if (!dataBag.firstChild) {
    dataBag.innerHTML="<div>No data available</div>";
  } else {
    var oRange = dataBag.createTextRange();
    oRange.select();
    oRange.execCommand("Copy");
  }
}
function ur_classNameToStyle(oTag) {
  if (oTag.className && oTag.currentStyle) {
    oTag.style.backgroundColor = oTag.currentStyle.backgroundColor;
    oTag.style.fontFamily      = oTag.currentStyle.fontFamily;
    oTag.style.borderStyle     = oTag.currentStyle.borderStyle;
    oTag.style.borderColor     = oTag.currentStyle.borderColor;
    oTag.style.borderWidth     = sapUrMapi_sAddUnit( oTag.currentStyle.borderWidth , "px" );
    oTag.style.padding         = sapUrMapi_sAddUnit( oTag.currentStyle.padding , "px" );
    oTag.style.fontSize        = sapUrMapi_sAddUnit( oTag.currentStyle.fontSize , "px" );
    oTag.style.textAlign       = oTag.currentStyle.textAlign;
    oTag.style.borderCollapse  = oTag.currentStyle.borderCollapse;
    oTag.className = ""; 
  }
  if (oTag.childNodes) {
    for (var n = 0;n<oTag.childNodes.length;n++) {
      ur_classNameToStyle(oTag.childNodes[n]);
    }
  }
}
function ur_SapTable_applySortCursor(oEvt) {
  var o=ur_evtSrc(oEvt);
  o = ur_getNextHtmlParentByAttribute(o, "stasc");
  o.style.cursor="url(" + ur_system.mimepath + "saptable/sort.cur)";
  o.mouseover=null;
  return false;
}
function sapUrMapi_SapTable_registerCreate(sId) {
	  sapUrMapi_Create_AddItem(sId, "ur_SapTable_init('"+sId+"')");
}
function ur_SapTable_getFirstInnerTable(oDomRef) {
 if (!oDomRef==null || !oDomRef.childNodes) return;
 for(var i=0; i< oDomRef.childNodes.length; i++) {
    if(oDomRef.childNodes[i].tagName == "TABLE"){
    	oTmp = oDomRef.childNodes[i];
    }else {
    	oTmp = ur_SapTable_getFirstInnerTable(oDomRef.childNodes[i]);
	}
    if (oTmp) return oTmp; 
  }
 return null;
}
function ur_SapTable_init(sId) {
	var innerTable = ur_SapTable_getFirstInnerTable(ur_get(sId));
	if(innerTable &&  innerTable.tBodies && ur_system.browser_abbrev == "standards" && UCF_UserAgent.bIsIE() && sapUrMapi_SapTable_canScrollV(sId) ) {
		UCF_DomUtil.initPercentageToStaticHeight(ur_get(sId+"-scrollV").parentNode,  innerTable.tBodies[0]);
	}
  
}
var ur_SapTableClientScrollObj;
function ur_SapTableClientScroll_flatSearchByTagName(oDomRefNode, sTagName) {
  if(oDomRefNode) {
    for(var i=0; i< oDomRefNode.childNodes.length; i++) {
      if(oDomRefNode.childNodes[i].tagName == sTagName) return oDomRefNode.childNodes[i];
    }
  }
  return null;
}
function sapUrMapi_SapTableClientScroll_setContentRowSelection(oClientScrollObj, iRowIndex, eState) {
  var aDomRefRows=[], oDomRefRow=null, aContentFragments=ur_SapTableClientScroll_getContentFragments(oClientScrollObj);
  for(var i=0; i<aContentFragments.length; i++) {
    aDomRefRows[aDomRefRows.length] = ur_SapTableClientScroll_getInnerTable(aContentFragments[i]).rows[iRowIndex-1];
  }
  for(var i=0; i<aDomRefRows.length; i++) {
    oDomRefRow = aDomRefRows[i];
    if(oDomRefRow.eState === eState) continue;
    sapUrMapi_SapTable_setSelection(oDomRefRow, eState);
    oDomRefRow.eState = eState;
  }
}
function ur_SapTableClientScroll_getContentFragments(oClientScrollObj) {
  var aContentFragments=[];
  if(oClientScrollObj.oDomRefContentContLeft) aContentFragments[aContentFragments.length] = oClientScrollObj.oDomRefContentContLeft;
  if(oClientScrollObj.oDomRefContentContNone) aContentFragments[aContentFragments.length] = oClientScrollObj.oDomRefContentContNone;
  if(oClientScrollObj.oDomRefContentContRight) aContentFragments[aContentFragments.length] = oClientScrollObj.oDomRefContentContRight;
  return aContentFragments;
}
function ur_SapTableClientScroll_getInnerTable(oFragmentRef) {
    return ur_SapTableClientScroll_flatSearchByTagName(oFragmentRef, "TABLE");
}
function ur_SapTableClientScroll_getCols(oClientScrollObj) {
  if(oClientScrollObj.aCols) return oClientScrollObj.aCols;
  var aCols=[],
    oDomRefCurrTable=null,
    oDomRefCurrColGroup=null,
    aDomRefCurrCols=null,
    aContentFragments=ur_SapTableClientScroll_getContentFragments(oClientScrollObj);
  for(var i=0; i<aContentFragments.length; i++) {
    oDomRefCurrTable = ur_SapTableClientScroll_getInnerTable(aContentFragments[i]);
    oDomRefCurrColGroup = ur_SapTableClientScroll_flatSearchByTagName(oDomRefCurrTable, "COLGROUP");
    aDomRefCurrCols = oDomRefCurrColGroup? oDomRefCurrColGroup.getElementsByTagName("COL"): null;
    for(var j=0; j<aDomRefCurrCols.length; j++) {
      aCols[aCols.length] = {
          oFragment: aContentFragments[i],
          oDomRefCol: aDomRefCurrCols[j],
          iIndexInColGroup: j
        };
    }
  }
  oClientScrollObj.aCols = aCols;
  return oClientScrollObj.aCols;
}
function sapUrMapi_SapTableClientScroll_setColSelection(oClientScrollObj, iColIndex, eState) {
  var aCols=ur_SapTableClientScroll_getCols(oClientScrollObj),
    oCol = aCols[iColIndex-1];
    
    if(oCol.oDomRefCol.eState === eState) return;
    aDomRefRows = ur_SapTableClientScroll_getInnerTable(oCol.oFragment).rows;
    for(var i=0; i<aDomRefRows.length; i++) {
      sapUrMapi_SapTable_setCellSelection(aDomRefRows[i].cells[oCol.iIndexInColGroup], eState);
    }
    oCol.oDomRefCol.eState = eState;
}
function sapUrMapi_SapTableClientScroll_setCellSelection(oClientScrollObj, iRowIndex, iColIndex, eState) {
}
function ur_SapTableClientScroll_isClientScrollTable(sId) {
  if(sId) {
    var oContentTD = ur_get(sId + "-content"),
      oDomRefClientScroll = ur_SapTableClientScroll_flatSearchByTagName(oContentTD, "TABLE"),
      sClientScrollId = ur_getAttD( oDomRefClientScroll, "id", "");
    if(oDomRefClientScroll && (oDomRefClientScroll.vcrc || oDomRefClientScroll.vcrc === "0" )) return true;
  }
  return false;
}
function ur_SapTableClientScroll_EnvironmentInit() {
  ur_SapTableClientScrollObj = new Array();
}
function ur_SapTableClientScroll_EnvironmentCleanUp() {
  ur_SapTableClientScrollObj = null;
}
function sapUrMapi_SapTableClientScroll_registerCreate(sId) {
  sapUrMapi_Create_AddItem(sId, "ur_SapTableClientScroll_init('"+sId+"')");
}
function ur_SapTableClientScroll_getObject(sId) {
  if(ur_SapTableClientScrollObj[sId]) return ur_SapTableClientScrollObj[sId];
  var oDomRefClientScroll = ur_get(sId),
    oClientScrollObj = {
    oDomRefClientScroll: oDomRefClientScroll,
    sVScrollbarId: ur_getAttD(oDomRefClientScroll, "vsbid", ""),
    sHScrollbarId: ur_getAttD(oDomRefClientScroll, "hsbid", ""),
    oDomRefContentHdrNone: ur_get(sId + "-mrss-hdr-none"),
    oDomRefContentTfxNone: ur_get(sId + "-mrss-tfx-none"),
    oDomRefContentContLeft: ur_get(sId + "-mrss-cont-left"),
    oDomRefContentContNone: ur_get(sId + "-mrss-cont-none"),
    oDomRefContentContRight: ur_get(sId + "-mrss-cont-right"),
    oDomRefContentBfxNone: ur_get(sId + "-mrss-bfx-none"),
    iVisibleContentRowCount: parseInt(ur_getAttD(oDomRefClientScroll,"vcrc","0")),
    iFirstVisibleContentRowIndex: parseInt(ur_getAttD(oDomRefClientScroll,"fvcri","0"))
  }
  ur_SapTableClientScrollObj[sId] = oClientScrollObj;
  return oClientScrollObj;
}
function ur_SapTableClientScroll_init(sId) {
  var oScrollBarObj = ur_SapTableClientScroll_getObject(sId),
    iHorizontalScrollPosition = parseInt(ur_getAttD(oScrollBarObj.oDomRefClientScroll,"hsp","0"));
  ur_SapTableClientScroll_updateHScrollbar(oScrollBarObj, iHorizontalScrollPosition);
  ur_Scrollbar_setCallback( oScrollBarObj.sHScrollbarId, "ur_SapTableClientScroll_callBackResizeH", "ur_SapTableClientScroll_callBackChangeH");
  ur_Scrollbar_setCallback( oScrollBarObj.sVScrollbarId, null, "ur_SapTableClientScroll_callBackChangeV");
}
function ur_SapTableClientScroll_updateHScrollbar(oScrollBarObj, iHorizontalScrollPosition) {
  if(oScrollBarObj.oDomRefContentContNone) {
    var iScrollWindowWidth = oScrollBarObj.oDomRefContentContNone.offsetWidth,
      iScrollWidth = oScrollBarObj.oDomRefContentContNone.scrollWidth,
      iScrollPos = (iHorizontalScrollPosition)? iHorizontalScrollPosition: -(oScrollBarObj.oDomRefContentContNone.firstChild.style.left + 1);
    if(iScrollWindowWidth >= iScrollWidth) iScrollWidth = iScrollWindowWidth;
    ur_Scrollbar_setSizingParams(oScrollBarObj.sHScrollbarId, iScrollPos + 1, iScrollWidth - iScrollWindowWidth + 1, iScrollWindowWidth + 1);
  }
}
function ur_SapTableClientScroll_updateHScrollPositionById(sId, iPos) {
  ur_SapTableClientScroll_updateHScrollPosition(ur_SapTableClientScroll_getObject(sId), iPos);
}
function ur_SapTableClientScroll_updateHScrollPosition(oScrollBarObj, iPos) {
  ur_SapTableClientScroll_updateHScrollPositionFragment(oScrollBarObj.oDomRefContentHdrNone, iPos);
  ur_SapTableClientScroll_updateHScrollPositionFragment(oScrollBarObj.oDomRefContentTfxNone, iPos);
  ur_SapTableClientScroll_updateHScrollPositionFragment(oScrollBarObj.oDomRefContentContNone, iPos);
  ur_SapTableClientScroll_updateHScrollPositionFragment(oScrollBarObj.oDomRefContentBfxNone, iPos);
}
function ur_SapTableClientScroll_updateHScrollPositionFragment(oDomRefFragment, iPos) {
  if(oDomRefFragment) {
    oDomRefFragment.firstChild.style.left = sapUrMapi_sAddUnit( -(iPos+1)  , "px" );
  }
}
function ur_SapTableClientScroll_callBackResizeH(sId) {
  var oScrollBarObj = ur_SapTableClientScroll_getObject(sId);
  ur_SapTableClientScroll_updateHScrollbar(oScrollBarObj);
}
function ur_SapTableClientScroll_callBackChangeH(sId, iValue) {
  var oScrollBarObj = ur_SapTableClientScroll_getObject(sId);
  ur_SapTableClientScroll_updateHScrollPosition(oScrollBarObj, iValue);
}
function ur_SapTableClientScroll_callBackChangeV(sId, iValue) {
  var oScrollBarObj = ur_SapTableClientScroll_getObject(sId);
  if(iValue != oScrollBarObj.iFirstVisibleContentRowIndex) {
    var oMergingObject = {};
    for(var i=iValue, iTo=iValue+oScrollBarObj.iVisibleContentRowCount; i < iTo; i++) {
      oMergingObject[i] = true;
    }
    for(var i=oScrollBarObj.iFirstVisibleContentRowIndex, iTo=oScrollBarObj.iFirstVisibleContentRowIndex+oScrollBarObj.iVisibleContentRowCount; i < iTo; i++) {
      if(!oMergingObject[i]) oMergingObject[i] = false;
    }
    for(var i in oMergingObject) {
      i = parseInt(i);
      if(oMergingObject[i]) ur_SapTableClientScroll_showRow(oScrollBarObj, i);
      else ur_SapTableClientScroll_hideRow(oScrollBarObj, i);
    }
    oScrollBarObj.iFirstVisibleContentRowIndex = iValue;
  }
}
function ur_SapTableClientScroll_showRow(oScrollBarObj, iRowIdx) {
  ur_SapTableClientScroll_showFragmentRow(oScrollBarObj.oDomRefContentContLeft, iRowIdx);
  ur_SapTableClientScroll_showFragmentRow(oScrollBarObj.oDomRefContentContNone, iRowIdx);
  ur_SapTableClientScroll_showFragmentRow(oScrollBarObj.oDomRefContentContRight, iRowIdx);
}
function ur_SapTableClientScroll_hideRow(oScrollBarObj, iRowIdx) {
  ur_SapTableClientScroll_hideFragmentRow(oScrollBarObj.oDomRefContentContLeft, iRowIdx);
  ur_SapTableClientScroll_hideFragmentRow(oScrollBarObj.oDomRefContentContNone, iRowIdx);
  ur_SapTableClientScroll_hideFragmentRow(oScrollBarObj.oDomRefContentContRight, iRowIdx);
}
function ur_SapTableClientScroll_showFragmentRow(oFragment, iRowIdx) {
  if(oFragment && oFragment.childNodes[0] && oFragment.childNodes[0].rows[iRowIdx-1]) {
    oFragment.childNodes[0].rows[iRowIdx-1].style.display = "block";
  }
}
function ur_SapTableClientScroll_hideFragmentRow(oFragment, iRowIdx) {
  if(oFragment && oFragment.childNodes[0] && oFragment.childNodes[0].rows[iRowIdx-1]) {
    oFragment.childNodes[0].rows[iRowIdx-1].style.display = "none";
  }
}
function sapUrMapi_SapTable_setBorderCollapse(sTableId, bCollapse){
	var oTableContent = document.getElementById(sTableId + "-content"),
		oInnerTable = oTableContent? oTableContent.firstChild: null;
	
	
	while(oInnerTable != null && oInnerTable.tagName != "TABLE") {
		oInnerTable = oInnerTable.firstChild;
	}
	
	if(oInnerTable && oInnerTable.tagName == "TABLE") {
		oInnerTable.style.borderCollapse = bCollapse? "collapse": "separate";
	}
}

//** Scrollbar.ie5 **
var ur_SCB_obj;      
var ur_SCB_handle;   
var ur_SCB_initialMousePos; 
var ur_SCB_initialHandlePos;
var ur_SCB_max;      
var ur_SCB_timer;    
var ur_SCB_pixelStop;  
var ur_SCB_src;      
var ur_SCB_arr = new Array(); 
var ur_SCB_evt; 
var ur_SCB_showst=false; 
function sapUrMapi_Scrollbar_handler(oEvt) {
  ur_SCB_evt=oEvt;
  ur_SCB_src=ur_EVT_src(oEvt);  
  if (ur_getAttD(ur_SCB_src,"role","") == "evthdlr") ur_SCB_src=ur_SCB_src.parentNode;
  var o=ur_getRootObj(ur_SCB_src);
  if(oEvt.type == "mousewheel" && o.getAttribute("ct") != "SCB") {
  	
  	var oObj = o;
  	while (oObj.tagName!="BODY") {
    	if (oObj && oObj.getAttribute && oObj.getAttribute("ct")=="ST") break;
    	oObj=oObj.parentNode;
  	}
  	if(oObj && oObj.getAttribute("urScrlbar")) {
	  	o = document.getElementById(oObj.getAttribute("urScrlbar"));
	  	ur_SCB_src = o;
	  }
  }
  sArea=ur_getAttD(ur_SCB_src,"area",""); 
  if(o && o.id && oEvt.type!="mousemove" && oEvt.type!="mouseup") {
    ur_SCB_obj=ur_Scrollbar_getObj(o.id); 
    if(ur_Scrollbar_isDisabled(ur_SCB_obj)) return false; 
  }
  
  if (ur_SCB_obj.showscrolltip) {
    if (!ur_get("ur-scrolltip")) {
      var oScrollTip=document.createElement("SPAN");
      oScrollTip.setAttribute("id","ur-scrolltip");
      oScrollTip.style.position="absolute";
      oScrollTip.style.visibility="hidden";
      oScrollTip.style.top="0px";
      oScrollTip.style.left="0px";
      document.getElementsByTagName("BODY")[0].appendChild(oScrollTip);
    }
    ur_SCB_obj.scrolltip=ur_get("ur-scrolltip");
    while ( ur_SCB_obj.sScrolltips.indexOf("_")>0) ur_SCB_obj.sScrolltips=ur_SCB_obj.sScrolltips.replace("_","'");
    if(ur_SCB_obj.sScrolltips) ur_SCB_obj.scrolltips = eval("result=" + ur_SCB_obj.sScrolltips +";");
  }
  
  if (oEvt.type == "mousewheel") {
    if (o.getAttribute("sdir")!="v") return;
    if (oEvt.wheelDelta > 0){ 
       ur_Scrollbar_scroll(ur_SCB_obj,"up");
    } else {
       ur_Scrollbar_scroll(ur_SCB_obj,"down");
    }
    
    clearTimeout(ur_SCB_timer);
    
    
    ur_SCB_evt={};
    ur_SCB_timer=ur_callDelayed("ur_Scrollbar_fireChange(ur_SCB_obj, ur_SCB_evt)",300);
    ur_EVT_cancel(oEvt);
  
  } else if (oEvt.type=="mousedown") { 
    
    if(document.activeElement && (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA")) {
      
      
      try{
        document.activeElement.blur();
      } catch(e){}
    }
   
    if (sArea == "handle") { 
      ur_SCB_handle=ur_SCB_src;
      if (ur_SCB_handle.setCapture) {
      	ur_SCB_handle.setCapture();
      }
      ur_attachEvent(ur_SCB_handle, "mousemove", sapUrMapi_Scrollbar_handler);
      ur_attachEvent(ur_SCB_handle, "mouseup", sapUrMapi_Scrollbar_handler);
      ur_SCB_handle.firstChild.className.replace("urSCBBtn","urSCBBtnPressed");
      if (ur_SCB_obj.sdir=="v") {
        ur_SCB_initialHandlePos=parseInt(ur_SCB_src.style.marginTop);
        ur_SCB_initialMousePos=oEvt.clientY;
        ur_SCB_max=ur_SCB_src.parentNode.offsetHeight - ur_SCB_src.offsetHeight;
      } else {
        ur_SCB_initialHandlePos=parseInt((ur_system.direction=="rtl")? ur_SCB_src.style.marginRight: ur_SCB_src.style.marginLeft);
        ur_SCB_initialMousePos=oEvt.clientX;
        ur_SCB_max = ur_SCB_src.parentNode.offsetWidth - ur_SCB_src.offsetWidth;
      }
      ur_EVT_cancel(oEvt);
    
    } else if (sArea == "bar") {
      var iPos=0, offsetPos;
      ur_SCB_handle=ur_get(o.id+"-h");
      ur_SCB_handle.firstChild.className.replace("urSCBBtn","urSCBBtnPressed");
      if (ur_SCB_src.setCapture) {
      	ur_SCB_src.setCapture();
      }
      if (ur_SCB_obj.sdir=="v") {
      	offsetPos = oEvt.offsetY;
        iPos=parseInt(ur_SCB_handle.style.marginTop);
      } else {
        if (ur_system.direction=="rtl") {
          offsetPos = ur_SCB_obj.totalPixels-oEvt.offsetX;
          iPos=parseInt(ur_SCB_src.firstChild.style.marginRight);
        } else {
          offsetPos = oEvt.offsetX;
          iPos=parseInt(ur_SCB_src.firstChild.style.marginLeft);
        }
      }
      ur_SCB_pixelStop = ur_SCB_obj.range / ur_SCB_obj.totalPixels * offsetPos + ur_SCB_obj.min;
      if (offsetPos<iPos) {
        ur_Scrollbar_page(ur_SCB_obj,"up");
        ur_scrollDir="up";
        if (ur_system.browser_abbrev != "standards")
             ur_SCB_timer=setInterval("ur_Scrollbar_pageStart(ur_SCB_obj,'up')",300);
      } else if (offsetPos>iPos) {
        if (iPos == 0 && ur_SCB_obj.newvalue > ur_SCB_obj.largeChange) return;
        ur_Scrollbar_page(ur_SCB_obj,"down");
        ur_scrollDir="down";
         if (ur_system.browser_abbrev != "standards")
             ur_SCB_timer=setInterval("ur_Scrollbar_pageStart(ur_SCB_obj,'down')",300);
      }
      ur_attachEvent(ur_SCB_src, "mouseup", ur_Scrollbar_stopButton);
      ur_attachEvent(ur_SCB_src, "mouseout", ur_Scrollbar_stopButton);
      ur_attachEvent(ur_SCB_src, "mousemove", ur_Scrollbar_correctStopValue);
    
    } else if ("ebudpn".indexOf(sArea)>-1) {
      ur_SCB_handle=ur_get(o.id+"-h");
      if (ur_SCB_src.setCapture) {
      	ur_SCB_src.setCapture();
      }
      ur_SCB_src.className=ur_SCB_src.className.replace("urSCBBtn","urSCBBtnPressed");
      ur_attachEvent(ur_SCB_src, "mouseup", ur_Scrollbar_stopButton);
      ur_attachEvent(ur_SCB_src, "mouseout", ur_Scrollbar_stopButton);
      ur_SCB_handle.firstChild.className.replace("urSCBBtn","urSCBBtnPressed");
      if (sArea=="e") {
        ur_Scrollbar_bounce(ur_SCB_obj,"down");
      
      } else if (sArea=="b") {
        ur_Scrollbar_bounce(ur_SCB_obj,"up");
      
      } else if (sArea=="u" || sArea=="p") {
        ur_Scrollbar_scroll(ur_SCB_obj,"up");
        if (ur_system.browser_abbrev != "standards")
           ur_SCB_timer=setInterval("ur_Scrollbar_scrollStart(ur_SCB_obj,'up')",180);
      
      } else if (sArea=="d" || sArea=="n") {
        ur_Scrollbar_scroll(ur_SCB_obj,"down");
      if (ur_system.browser_abbrev != "standards")
         ur_SCB_timer=setInterval("ur_Scrollbar_scrollStart(ur_SCB_obj,'down')",180);
      }
    }
  
  } else if (oEvt.type=="mousemove") {
    if (ur_SCB_handle) {
      var iDiff=0, iNewPos=0;
      if (ur_SCB_obj.sdir=="v") {
      	iDiff=oEvt.clientY - ur_SCB_initialMousePos;
      } else {
      	iDiff = (ur_system.direction=="rtl")? ur_SCB_initialMousePos - oEvt.clientX: oEvt.clientX - ur_SCB_initialMousePos;
      }
      iNewPos = ur_SCB_initialHandlePos + iDiff;
      if (iNewPos<0) iNewPos=0;
      if (iNewPos>ur_SCB_max) {
      	  iNewPos=ur_SCB_max;
      }
      if (iNewPos + ur_SCB_obj.handlesize >= ur_SCB_obj.totalPixels ) iNewPos = ur_SCB_obj.totalPixels - ur_SCB_obj.handlesize;
      if (ur_SCB_obj.sdir=="v") {
        ur_SCB_handle.style.marginTop = sapUrMapi_sAddUnit( iNewPos , "px" );
      } else {
        if (ur_system.direction=="rtl")
          ur_SCB_handle.style.marginRight=sapUrMapi_sAddUnit( iNewPos , "px" );
        else
          ur_SCB_handle.style.marginLeft=sapUrMapi_sAddUnit( iNewPos , "px" );
       }
      ur_SCB_obj.newvalue = Math.floor(ur_SCB_obj.range/ur_SCB_max*iNewPos+ur_SCB_obj.min);
      ur_SCB_showst=true;
      ur_Scrollbar_showScrollTip(ur_SCB_obj, ur_SCB_obj.newvalue);
      if(ur_SCB_obj.sCallBackChange && ur_SCB_obj.sid) {
        window[ur_SCB_obj.sCallBackChange](ur_SCB_obj.sid, ur_SCB_obj.newvalue);
      }
      ur_EVT_cancel(oEvt);
    }
  
  } else if (oEvt.type=="mouseup") {
    if(!ur_SCB_handle) ur_SCB_handle=ur_get(o.id+"-h");
    if (ur_SCB_handle.releaseCapture) {
    	ur_SCB_handle.releaseCapture();
    }
    ur_detachEvent(ur_SCB_handle, "mousemove", sapUrMapi_Scrollbar_handler);
    ur_detachEvent(ur_SCB_handle, "mouseup", sapUrMapi_Scrollbar_handler);
    ur_SCB_handle.firstChild.className.replace("urSCBBtnPressed","urSCBBtn");
    ur_SCB_handle=null;
    ur_Scrollbar_applyHandlePos(ur_SCB_obj);
    
    ur_Scrollbar_fireChange(ur_SCB_obj, ur_SCB_evt);
  }
}
function ur_Scrollbar_fireChange(ur_SCB_obj, oEvt) {
  ur_Scrollbar_hideScrollTip();
  ur_SCB_showst=false;
  var iMod=ur_SCB_obj.newvalue%ur_SCB_obj.smallChange;
  if (Math.abs(iMod)>0) {
    if (ur_SCB_obj.smallChange/2>iMod) ur_SCB_obj.newvalue=ur_SCB_obj.newvalue-iMod;
    else ur_SCB_obj.newvalue=ur_SCB_obj.newvalue+ur_SCB_obj.smallChange-iMod;
  }
  if (ur_SCB_obj.newvalue!=ur_SCB_obj.value) {
    ur_SCB_obj.value=ur_SCB_obj.newvalue;
    ur_SCB_obj.ref.setAttribute("val",ur_SCB_obj.value);
    oEvt.ur_param=new Array();
    oEvt.ur_param["pos"]=ur_SCB_obj.value;
    oEvt.ur_param["dir"]=ur_SCB_obj.sdir;
    ur_EVT_fire(ur_SCB_obj.ref,"oscrlf",oEvt);
    if(ur_SCB_obj.sCallBackChange && ur_SCB_obj.sid) {
      window[ur_SCB_obj.sCallBackChange](ur_SCB_obj.sid, ur_SCB_obj.value);
    }
  }
}
function ur_Scrollbar_pageStart(o,sDir) {
   if (ur_system.browser_abbrev != "standards")  clearInterval(ur_SCB_timer);
  ur_Scrollbar_page(o,sDir);
  ur_SCB_showst=true;
  if (ur_system.browser_abbrev != "standards")  ur_SCB_timer=setInterval("ur_Scrollbar_page(ur_SCB_obj,'"+sDir+"')",100)
}
function ur_Scrollbar_scrollStart(o,sDir) {
  if (ur_system.browser_abbrev != "standards") clearInterval(ur_SCB_timer);
  ur_Scrollbar_scroll(o,sDir);
  ur_SCB_showst=true;
  if (ur_system.browser_abbrev != "standards") ur_SCB_timer=setInterval("ur_Scrollbar_scroll(ur_SCB_obj,'"+sDir+"')",50)
}
function ur_Scrollbar_correctStopValue(oEvt) {
  if (ur_SCB_obj.sdir=="v") {
    var newValue=ur_SCB_obj.range / ur_SCB_obj.totalPixels * oEvt.offsetY + ur_SCB_obj.min;
    var iPos=parseInt(ur_SCB_handle.style.marginTop);
    if (ur_scrollDir=="up" && newValue<iPos) ur_SCB_pixelStop=newValue;
    if (ur_scrollDir=="down" && newValue>iPos) ur_SCB_pixelStop=newValue;
  } else {
    var newValue=ur_SCB_obj.range / ur_SCB_obj.totalPixels * oEvt.offsetX + ur_SCB_obj.min;
    var iPos=parseInt(ur_SCB_handle.style.marginLeft);
    if (ur_scrollDir=="up" && newValue<iPos) ur_SCB_pixelStop=newValue;
    if (ur_scrollDir=="down" && newValue>iPos) ur_SCB_pixelStop=newValue;
  }
}
function ur_Scrollbar_stopButton(oEvt) {
  ur_SCB_evt=oEvt;
  if (ur_SCB_timer) window.clearInterval(ur_SCB_timer);
  
  if (ur_SCB_src) {
    ur_SCB_src.className=ur_SCB_src.className.replace("urSCBBtnPressed","urSCBBtn");
    ur_detachEvent(ur_SCB_src, "mouseup", ur_Scrollbar_stopButton);
    ur_detachEvent(ur_SCB_src, "mouseout", ur_Scrollbar_stopButton);
    ur_detachEvent(ur_SCB_src, "mousemove", ur_Scrollbar_correctStopValue);
    ur_SCB_handle.firstChild.className.replace("urSCBBtnPressed","urSCBBtn");
    if (ur_SCB_src.releaseCapture) {
    	ur_SCB_src.releaseCapture();
    }
    ur_SCB_src=null;
  }
  ur_Scrollbar_fireChange(ur_SCB_obj, ur_SCB_evt);
  ur_SCB_handle=null;
}
function sapUrMapi_Scrollbar_registerCreate(sId) {
  sapUrMapi_Create_AddItem(sId, "ur_Scrollbar_init('"+sId+"')");
  
}
var ur_iScrollbarResizeProcessObject;
function ur_Scrollbar_resize(oEvt) {
  if (!oEvt) return;
  var sId = ur_EVT_src(oEvt).id;
  if(!ur_iScrollbarResizeProcessObject) ur_iScrollbarResizeProcessObject = {};
  if(!ur_iScrollbarResizeProcessObject[sId]) ur_iScrollbarResizeProcessObject[sId] = 0;
  ur_iScrollbarResizeProcessObject[sId]++;
  ur_callDelayed("ur_Scrollbar_resize_serialized("+ur_iScrollbarResizeProcessObject[sId]+",'"+sId+"')",0);
}
function ur_Scrollbar_resize_serialized(iProcessId, sId) {
  if(iProcessId == ur_iScrollbarResizeProcessObject[sId]) {
    var oScrollbarObj = ur_Scrollbar_getObj(sId),
      sCallBackResize = oScrollbarObj.sCallBackResize,
      sConnnectedId = oScrollbarObj.sid;
    if(oScrollbarObj.sdir == "v") {
    	if(oScrollbarObj.iLastParentHeight == oScrollbarObj.ref.parentNode.offsetHeight) return;
    	oScrollbarObj.iLastParentHeight = oScrollbarObj.ref.parentNode.offsetHeight;
    }
    delete ur_iScrollbarResizeProcessObject[sId];
    oScrollbarObj = null;
    if(sCallBackResize && sConnnectedId) {
      window[sCallBackResize](sConnnectedId);
    }
    ur_SCB_arr[sId]=null;
    ur_Scrollbar_init(sId);
  }
}
function ur_Scrollbar_EnvironmentCleanUp() {
  ur_SCB_arr=null;
  ur_iScrollbarResizeProcessObject = null;
}
function ur_Scrollbar_EnvironmentInit() {
  ur_SCB_arr = new Array();
  ur_iScrollbarResizeProcessObject = {};
}
function ur_Scrollbar_getObj(sId) {
  var oDomRefScrollbar = ur_get(sId);
  if (!oDomRefScrollbar) return null;
  if (!ur_SCB_arr[sId]) {
    var obj = {id:sId,
         sid:ur_getAttD(oDomRefScrollbar,"sid",""),
         sdir:ur_getAttD(oDomRefScrollbar,"sdir",""),
         value:parseInt(ur_getAttD(oDomRefScrollbar,"val","0")),
         newvalue:parseInt(ur_getAttD(oDomRefScrollbar,"val","0")),
         max:parseInt(ur_getAttD(oDomRefScrollbar,"max","")),
         min:parseInt(ur_getAttD(oDomRefScrollbar,"min","")),
         smallChange:parseInt(ur_getAttD(oDomRefScrollbar,"sml","")),
         largeChange:parseInt(ur_getAttD(oDomRefScrollbar,"lrg","")),
         showscrolltip:ur_getAttD(oDomRefScrollbar,"scs","")=="1",
         scrolltipdefault:ur_getAttD(oDomRefScrollbar,"scd",""),
         sScrolltips:ur_getAttD(oDomRefScrollbar,"sct",""),
         scrolltips:null,
         ref:oDomRefScrollbar,
         handle:ur_get(sId+"-h"),
         sCallBackResize: ur_getAttD(oDomRefScrollbar,"cbRz", null),
         sCallBackChange: ur_getAttD(oDomRefScrollbar,"cbCh", null),
         iLastParentHeight: 0
        };
    
    
    
    if(obj.value > 1 && obj.min >= obj.max) obj.max=obj.value;
    if (obj.sdir == "v") {
      
      obj.iLastParentHeight = obj.ref.parentNode.offsetHeight;
      
      obj.ref.style.height = (ur_system.browser_abbrev == "ie6") ? obj.ref.offsetHeight : obj.ref.parentNode.offsetHeight;
      obj.totalPixels = obj.handle.parentNode.offsetHeight;
    } else {
      obj.totalPixels = obj.handle.parentNode.offsetWidth;
    }
    if (obj.value < obj.min) obj.value = obj.min;
    obj.range = obj.max-obj.min;
    obj.handlesize=ur_Scrollbar_getHandleSize(obj);
    
    if (obj.sdir == "v") {
    	obj.handle.style.width = "100%";
    	obj.handle.style.height = sapUrMapi_sAddUnit( obj.handlesize , "px" );
    } else {
      obj.handle.style.width = sapUrMapi_sAddUnit( obj.handlesize , "px" );
      obj.handle.style.height = "100%";
    }
    ur_SCB_arr[sId] = obj;
    if (ur_Scrollbar_isDisabled(obj)) {
      
    } else {
      
    }
    ur_attachEvent(oDomRefScrollbar, "resize", ur_Scrollbar_resize);
    if(obj.sdir == "v" && obj.sid) {
    	
    	var oScrolledElement = document.getElementById(obj.sid);
    	if(oScrolledElement && !oScrolledElement.getAttribute("urScrlbar")) {
    		ur_attachEvent(oScrolledElement, "mousewheel", sapUrMapi_Scrollbar_handler);
    		oScrolledElement.setAttribute("urScrlbar", obj.id);
    	}
    }
    return obj;
  } else {
    return ur_SCB_arr[sId];
  }
}
function ur_Scrollbar_page(o,dir,oEvt) {
  if (!oEvt) oEvt=ur_SCB_evt;
  if (dir=="up") o.newvalue=o.newvalue-o.largeChange;
  else o.newvalue=o.newvalue+o.largeChange;
  if (o.newvalue>o.max) o.newvalue=o.max;
  if (o.newvalue<o.min) o.newvalue=o.min;
  
  
  o.newvalue=Math.ceil(o.newvalue);
  ur_Scrollbar_applyHandlePos(o);
  ur_Scrollbar_showScrollTip(o,o.newvalue);
}
function ur_Scrollbar_scroll(o,dir,oEvt) {
  if (!oEvt) oEvt=ur_SCB_evt;
  if (dir=="up") o.newvalue=o.newvalue-o.smallChange;
  else o.newvalue=o.newvalue+o.smallChange;
  if (o.newvalue>o.max) o.newvalue=o.max;
  if (o.newvalue<o.min) o.newvalue=o.min;
  ur_Scrollbar_applyHandlePos(o);
  ur_Scrollbar_showScrollTip(o,o.newvalue);
}
function ur_Scrollbar_bounce(o,dir,oEvt) {
  if (!oEvt) oEvt=ur_SCB_evt;
  if (dir=="up") o.newvalue=o.min;
  else o.newvalue=o.max;
  ur_Scrollbar_applyHandlePos(o);
}
function ur_Scrollbar_getHandleSize(o) {
  if(ur_Scrollbar_isDisabled(o)) return 0;
  var iTotal = 0;
  var elemCount = o.range + o.largeChange;
  var iSize=Math.floor(o.totalPixels / elemCount * o.largeChange);
  if (iSize<6) iSize=6;
  if (o.totalPixels <= iSize) iSize=0;
  o.totalPixels = o.totalPixels;
  return iSize;
}
function ur_Scrollbar_applyHandleSize(o) {
  if(ur_Scrollbar_isDisabled(o)) {
    o.handle.style.display = "none";
  } else {
    o.handle.style.display = "block";
    if (o.sdir == "v") {
      o.handle.style.height = o.handlesize+"px";
    } else {
      o.handle.style.width = o.handlesize+"px";
    }
  }
}
function ur_Scrollbar_isDisabled(o) {
  return (o)? o.min >= o.max: false;
}
function ur_Scrollbar_applyHandlePos(o) {
  if(ur_Scrollbar_isDisabled(o)) return;
  var iVal = o.newvalue - o.min;
  iVal = Math.floor((o.totalPixels / o.range) * iVal);
  
  if (o.totalPixels == 0) return;
  iVal=iVal - Math.ceil((o.handlesize / o.totalPixels) * iVal);
  if (iVal != 0) {
    if (iVal + o.handlesize >= o.totalPixels) iVal = o.totalPixels - o.handlesize;
  }
  if (o.sdir == "v") {
    o.handle.style.marginTop = sapUrMapi_sAddUnit( iVal , "px" );
  } else {
    if (ur_system.direction=="rtl")
      o.handle.style.marginRight = sapUrMapi_sAddUnit( iVal , "px" );
    else
      o.handle.style.marginLeft = sapUrMapi_sAddUnit( iVal , "px" );
  }
	o.handle.style.visibility = "";
}
function ur_Scrollbar_init(sId) {
   var o = ur_Scrollbar_getObj(sId);
   if (!o) return;
	
	if(ur_system.browser_abbrev == "standards" && UCF_UserAgent.bIsIE() && o.sdir == "v" ) {
		UCF_DomUtil.initHtmlTableCorrection(UCF_DomUtil.firstChild(ur_get(sId), "TABLE"));
	}
   ur_Scrollbar_applyHandleSize(o);
   ur_Scrollbar_applyHandlePos(o);
}
function sapUrMapi_Scrollbar_scroll(sId,oEvt) {
   var o = ur_get(sId);
   var oScr=ur_Scrollbar_getObj(ur_getRootObj(ur_EVT_src(oEvt).id));
   if (o && o.style.overflow=="hidden") {
      if (oScr.sdir=="v")
        o.scrollTop=(o.scrollHeight/oScr.range)*(oScr.value-oScr.min); 
      else
        o.scrollleft=(o.scrollWidth/oScr.range)*(oScr.value-oScr.min); 
   }
}
function ur_Scrollbar_hideScrollTip() {
  if (oPopup)
    oPopup.hide();
}
function ur_Scrollbar_showScrollTip(obj,val) {
  
  
  if (obj.showscrolltip && ur_SCB_showst) {
    var oScrollTip=ur_get('ur-scrolltip');
    var s="<table class=\"urDataTipStd urDataTipTxt urBorderBox\" style=\"text-align:right;padding:1px 3px;height:16px;width:1px;\">";
    
    if (obj.scrolltips) { 
      var lastMatchValue;
      s += "<tr><td nowrap><b>";
      for(var n in obj.scrolltips) { 
        if (n>val) break;
        else lastMatchValue=n;
      }
      
      var sDomObjIndex = obj.scrolltips[lastMatchValue];
      
      var sHTML = ur_get(obj.id + "-sct-" + sDomObjIndex).innerHTML;
      s += sHTML + "</b></td></tr>";
    }
    
    var fromIndex=val, toIndex=fromIndex+obj.largeChange-1, ofCount=obj.max+obj.largeChange-1;
    if (obj.sdir=="v" && obj.scrolltipdefault=="ROW") {
      s += "<tr><td nowrap>" + getLanguageText("SAPUR_PG_ROW") + " " + fromIndex + " - " + toIndex + " " + getLanguageText("SAPUR_PG_INDEX") + " " + ofCount + "</td></tr>";
    } else if (obj.sdir=="h" && obj.scrolltipdefault=="COL") {
      s += "<tr><td nowrap>" + getLanguageText("SAPUR_PG_COLUMN") + " " + fromIndex + " - " + toIndex + " " + getLanguageText("SAPUR_PG_INDEX") + " " + ofCount + "</td></tr>";
    }
    oScrollTip.innerHTML= s + "</table>";
    if (obj.sdir=="v") {
      oScrollTip.firstChild.style.textAlign="right";
    } else
      oScrollTip.firstChild.style.textAlign="left";
    var arrUrls = new Array(ur_system.stylepath+"ur/ur_pop_"+ur_system.browser_abbrev+".css");
    oPopup = new sapPopup(window,arrUrls,oScrollTip,obj.handle,0);
    oPopup.positionbehavior = sapPopupPositionBehavior.MENURIGHT;
    if (obj.sdir=="v") {
      oPopup.position.left-=obj.ref.offsetWidth;
      oPopup.position.top-=obj.handle.offsetHeight;
    } else {
      oPopup.position.left-=obj.handle.offsetWidth-oScrollTip.offsetWidth;
      oPopup.position.top-=obj.handle.offsetHeight+oScrollTip.offsetHeight;
    }
    oPopup.show(true);
  } else {
    if (oPopup)
      oPopup.hide();
  }
}
function ur_Scrollbar_setSizingParams(sId, iValue, iMax, iLargeChange) {
  var oDomRefScrollbar = ur_get(sId), oScrollBarObj = ur_SCB_arr[sId];
  if(oDomRefScrollbar) {
      oDomRefScrollbar.setAttribute("val", iValue);
      oDomRefScrollbar.setAttribute("max", iMax);
      oDomRefScrollbar.setAttribute("lrg", iLargeChange);
  }
  if (oScrollBarObj) {
    oScrollBarObj.value = iValue;
    oScrollBarObj.max = iMax;
    oScrollBarObj.largeChange = iLargeChange;
  }
}
function ur_Scrollbar_setCallback(sId, sCbRz, sCbCh) {
  var oDomRefScrollbar = ur_get(sId), oScrollBarObj = ur_SCB_arr[sId];
  if(oDomRefScrollbar) {
    oDomRefScrollbar.setAttribute("cbRz", sCbRz);
    oDomRefScrollbar.setAttribute("cbCh", sCbCh);
  }
  if (oScrollBarObj) {
    oScrollBarObj.sCallBackResize = sCbRz;
    oScrollBarObj.sCallBackChange = sCbCh;
  }
}
//** Splitter.ie5 **

function urSp_addEventListener(node, eventname, listener, useCapturePhase)
{
			var _tmp, _eventname;
			if (!node || ! eventname )
			{
					return false;
			}
			if (useCapturePhase)
			{
				if (node.setCapture)
				{
						node.setCapture();
						
				}
 				else if (window.captureEvents)
				{
      				if (eventname == "mousemove")
					{
							window.captureEvents(Event.MOUSEMOVE);
					} else if (eventname == "mouseup")
					{
							window.captureEvents(Event.MOUSEUP);
					} else if (eventname == "mouseout")
					{
							window.captureEvents(Event.MOUSEOUT);
					} else if (eventname == "mousedown")
					{
							window.captureEvents(Event.MOUSEDOWN);
					}	
									
  				} 
  				
  					
  				
			}
			if (node.addEventListener)
			{
				
					node.addEventListener(eventname, listener, useCapturePhase);
			}
			else {
				_eventname = 'on'+eventname;
				if (node.attachEvent) {
					
					node.attachEvent(_eventname, listener);
					}
				else {
					
					_tmp = node[_eventname];
					node[_eventname] = typeof _tmp == 'function'
					? (function() { _tmp(); listener(); })
					: listener;
				}
			}
			
			
			return true;
}
function urSp_removeEventListener(node, eventname, listener, useCapturePhase)
{
			var _tmp, _eventname;
			if (!node || !eventname )
			{
				return false;
			}
			if (useCapturePhase)
			{
				if (node.releaseCapture)
				{
						node.releaseCapture();
						
				}
 				else if (window.releaseEvents)
				{
      				if (eventname == "mousemove")
					{
							window.releaseEvents(Event.MOUSEMOVE);
					} else if (eventname == "mouseup")
					{
							window.releaseEvents(Event.MOUSEUP);
					} else if (eventname == "mouseout")
					{
							window.releaseEvents(Event.MOUSEOUT);
					} else if (eventname == "mousedown")
					{
							window.releaseEvents(Event.MOUSEDOWN);
					}
  				} 
  				
  					
  				
			}
			if (node.removeEventListener)
			{
				
				node.removeEventListener(eventname, listener, useCapturePhase);
			}
			else
			{
				_eventname = 'on'+eventname;
				if (node.detachEvent)
				{ 
					node.detachEvent(_eventname, listener);
				}
				else
				{ 	
					node[_eventname] = "";
				}
			}
			return true;
}
function urSp_getChildNodesByTagName(parent, tagname)
			{
				var children = new Array();
				if (parent != null)
				{
					var old_children = parent.childNodes;
					var i = 0;
					for(i = 0; i < old_children.length; i++)
					{
						if (old_children[i].nodeName == tagname )
						{
							children.push(old_children[i]);
						}
					}
				}	
				return children;
}
function urSp_getFirstChildNodeByTagName(parent, tagname)
			{				
				if (parent != null)
				{
					var old_children = parent.childNodes;
					var i = 0;
					for(i = 0; i < old_children.length; i++)
					{
						if (old_children[i].nodeName == tagname )
						{
							return old_children[i];
						}
					}
				}	
				return null;
}
			
function urSp_checkTPElement(Id, event)
{	
	var element = urSp_getTPElement(event);
	if ( element.id != Id )
	{
		
		return null;
	}
	return element;
}	
function urSp_getTPElement(event)
{
	var element = (event.target) ? event.target : event.srcElement;
	while( element != null && ! element.getAttribute("tp") )
	{
		element = element.parentNode;	
	}
	if (element == null)
	{
		
		return null;
	}
	return element;
}		
			
function urSp_checkEvent(event)
{
	var evt = event ? event : window.event;
	if (! evt.target && ! evt.srcElement )
	{
		
		return null;
	}
	return evt;
}	
function urSp_refreshTable(table)
{
	if (table.refresh)
	{
		table.refresh();
	} else 
	{   
		var old = table.style.display; 
		table.style.display = "none";
		var colgroup = urSp_getFirstChildNodeByTagName(table, "COLGROUP");
		var cols = urSp_getChildNodesByTagName(colgroup, "COL");
		var tbody = urSp_getFirstChildNodeByTagName(table, "TBODY");
		var trs = urSp_getChildNodesByTagName(tbody, "TR");
		var k = 0;
		for (k=0; k < (trs.length - 1); k++)
		{						
			var td1 = urSp_getFirstChildNodeByTagName(trs[k], "TD");
			if (td1.getAttribute("tp") != null && td1.getAttribute("tp") == "urSpTP") 
			{
				var tds = urSp_getChildNodesByTagName(trs[k], "TD");	
				var l = 0;
				for (l=0; l< (cols.length -1); l++)			
				{
					var td = tds[l];
					if (td.getAttribute("tp") != null && td.getAttribute("tp") == "urSpTP")
					{
						var col = cols[l];		
						if (col.width && col.width!= null && col.width != "*")
						{
							td.width = col.width;										
						}
					}		
				}
			}	
		}	
		
		
		
		
		table.style.display = old;	
	}
} 
			var urSp = new Object();
			
			urSp.bPressed = false;
			
			urSp.sActiveSplitterID = null;
			
			
			
			urSp.oPreviousElements = new Array();
			
			urSp.oNextElements = new Array();
			
			urSp.iStartPositionX = null;
			
			urSp.iStartPositionY = null;
			
			
			
			
			
			
			urSp.iPreviousElementsWidth = null;
			
			urSp.iNextElementsWidth = null;
			
			urSp.iPreviousElementsHeight = null;
			
			urSp.iNextElementsHeight = null;
			
			urSp.sSplitterType = null;
			
			urSp.iCollapseSize = 25;
function urSpGetSplitterType() 
{
	if (urSpIsVerticalSplitter())
	{
		return "columnresize";
	} else if (urSpIsHorizontalSplitter())
	{
		return "rowresize";
	}
	return null;				
}
function urSpIsVerticalSplitter() 
{
	if (urSp.sSplitterType != null && urSp.sSplitterType == 'c')
	{
		return true;
	}
	return false;				
}
function urSpIsHorizontalSplitter() 
{
	if (urSp.sSplitterType != null && urSp.sSplitterType == 'r')
	{
		return true;
	}
	return false;				
}
function sapUrMapi_SplitterSashActivate_handler(Id, event)
{
	urSpTSDwnList(Id, event);
}
function sapUrMapi_SplitterSashPassivate_handler(Id, event) 
{
	var evt = urSp_checkEvent(event);
	var element = urSp_checkTPElement(Id, evt);
	urSpTSUpList(evt);
}
function sapUrMapi_SplitterSashHover_handler(Id, event) 
{
	var evt = urSp_checkEvent(event);	
	var element = urSp_checkTPElement(Id, evt);
	urSpTHovList(evt);
}
function urSpTSDwnList(Id, event)
			{
				var evt = urSp_checkEvent(event);
				var oSash = urSp_checkTPElement(Id, evt);
				
				if ( oSash.getAttribute("tp") == "urSpTVsD"
					 || oSash.getAttribute("tp") == "urSpTHsD"
				)
				{
					
					
				} else
				{
				if (oSash.getAttribute("tp") == "urSpTVs")
				{
					urSp.sSplitterType= "c"; 
				} else 
				{
					urSp.sSplitterType = "r"; 
				} 
					
					
				
				if (event.preventDefault)
				{
					event.preventDefault(); 
				}	
				urSpTDeHovList(event);
			{
				
				
				var children = new Array();
				var tbody = oSash.parentNode.parentNode;
				var oSplitter = tbody.parentNode;
				urSp.sActiveSplitterID = oSplitter.id;
				if (urSpIsVerticalSplitter() )
				{ 
					var iRow = parseInt(oSash.getAttribute("prevcol"));
					
					
					
					var mElements = urSp_getColumnElements(oSplitter,iRow); 
					urSp.oPreviousElements = mElements.prev;
					urSp.oNextElements = mElements.next;
					if (ur_system.direction == "rtl")
					{
						urSp.oPreviousElementsTemp = urSp.oPreviousElements;
						urSp.oPreviousElements = urSp.oNextElements;
						urSp.oNextElements = urSp.oPreviousElementsTemp;
					}
				} else 
				{ 
					var iCol = parseInt( oSash.getAttribute("prevrow"));
					
					
						var mElements = urSp_getRowElements(oSplitter,iCol); 
						urSp.oPreviousElements = mElements.prev;
						urSp.oNextElements = mElements.next;
				}
			}
				urSp.bPressed = true;
				urSp.iPreviousElementsWidth = urSpTSGetSize(urSp.oPreviousElements, true);
				urSp.iNextElementsWidth = urSpTSGetSize(urSp.oNextElements, true);
				urSp.iPreviousElementsHeight = urSpTSGetSize(urSp.oPreviousElements, false);
				urSp.iNextElementsHeight = urSpTSGetSize(urSp.oNextElements, false);
				{ 
				var oSplitterPosition = sapUrMapi_getAbsolutePosition(oSplitter);
				
				var oSashPosition = sapUrMapi_getAbsolutePosition(oSash);
				
				var oParentPosition = sapUrMapi_getAbsolutePosition(oSplitter.parentNode);
				
				
					
				
				
				var iSplitterBackgroundTop;
				
				{
						urSp.iStartPositionX = parseInt(oSashPosition.left);
						urSp.iStartPositionY = parseInt(oSashPosition.top);
						iSplitterBackgroundTop = parseInt(oSplitterPosition.top) ;	
				}  				
					
				var oBody = document.getElementsByTagName("BODY")[0];
				
				var iSplitterOffsetHeight = oSplitter.offsetHeight;
				var iSplitterOffsetWidth = oSplitter.offsetWidth;
				var iSashOffsetWidth =  oSash.offsetWidth;
				var iSashOffsetHeight =  oSash.offsetHeight;
	
				var oSplitterBack = document.getElementById(urSp.sActiveSplitterID + "-bgdiv");
				var oSplitterBackiframe = document.getElementById(urSp.sActiveSplitterID + "-bgiframe");
				var oSplitterdiv = document.getElementById(urSp.sActiveSplitterID + "-div");
				var oSplitteriframe = document.getElementById(urSp.sActiveSplitterID + "-iframe");	
			
					
				if (oSplitterBack == null)
				{
						{	
				
							var oSplitterBack = document.createElement("div");
							oSplitterBack.setAttribute("id", urSp.sActiveSplitterID + "-bgdiv");
							oSplitterBack.className = "urSpTSB";					
							oBody.insertBefore(oSplitterBack, oBody.firstChild);
						
							urSp_addEventListener(oSplitterBack,"mousemove", urSpTSBMoveList, true);
							urSp_addEventListener(oSplitterBack,"mouseup",urSpTSUpList, true);
			
							var oSplitterBackiframe = document.createElement("iframe");
							oSplitterBackiframe.setAttribute("id", urSp.sActiveSplitterID + "-bgiframe");
							oSplitterBackiframe.frameBorder="0";
							oSplitterBackiframe.className = "urSpTSB";					
							oBody.insertBefore(oSplitterBackiframe, oBody.firstChild);
						
							urSp_addEventListener(oSplitterBackiframe,"mousemove", urSpTSBMoveList, true);
							urSp_addEventListener(oSplitterBackiframe,"mouseup",urSpTSUpList, true);
						}				
						{	
							var oSplitterdiv = document.createElement("div");
							oSplitterdiv.setAttribute("id", urSp.sActiveSplitterID + "-div");			
							oBody.insertBefore(oSplitterdiv, oBody.firstChild);
						
							urSp_addEventListener(oSplitterdiv,"mousemove", urSpTSBMoveList, true);
							urSp_addEventListener(oSplitterdiv,"mouseup",urSpTSUpList, true);				
				
							var oSplitteriframe = document.createElement("iframe");
							oSplitteriframe.setAttribute("id", urSp.sActiveSplitterID + "-iframe");
							oSplitteriframe.frameBorder="0";					
							oBody.insertBefore(oSplitteriframe, oBody.firstChild);
						
							urSp_addEventListener(oSplitteriframe,"mousemove", urSpTSBMoveList, true);
							urSp_addEventListener(oSplitteriframe,"mouseup",urSpTSUpList, true);
				
						}
				}	
				{
					if ( urSpIsVerticalSplitter())
					{
						oSplitterBack.style.top = iSplitterBackgroundTop + "px"	;
						oSplitterBack.style.left = (urSp.iStartPositionX - parseInt(urSp.iPreviousElementsWidth)) + "px";
						oSplitterBack.style.height = iSplitterOffsetHeight  + "px"	;
						oSplitterBack.style.width = (parseInt(urSp.iPreviousElementsWidth) + parseInt(urSp.iNextElementsWidth) + parseInt(iSashOffsetWidth))  + "px";	
					} else 
					{
						oSplitterBack.style.top =(urSp.iStartPositionY - parseInt(urSp.iPreviousElementsHeight)) + "px";
						oSplitterBack.style.left = urSp.iStartPositionX   + "px";
						oSplitterBack.style.height =  (parseInt(urSp.iPreviousElementsHeight) + parseInt(urSp.iNextElementsHeight) + parseInt(iSashOffsetHeight ))  + "px";
						oSplitterBack.style.width = iSplitterOffsetWidth  + "px";		
					}
	
					oSplitterBackiframe.style.top = sapUrMapi_sAddUnit( oSplitterBack.style.top , "px" );
					oSplitterBackiframe.style.left = sapUrMapi_sAddUnit( oSplitterBack.style.left , "px" );
					oSplitterBackiframe.style.height = sapUrMapi_sAddUnit( oSplitterBack.style.height , "px" );
					oSplitterBackiframe.style.width = sapUrMapi_sAddUnit( oSplitterBack.style.width , "px" );	
				}	
				{	
					var className;
					if ( urSpIsVerticalSplitter())
					{
						className = "urSpTVsA";
					} else
					{
						className = "urSpTHsA";	
					}	
					oSplitterdiv.className = className;	
					oSplitteriframe.className = className;	
	
					if ( urSpIsVerticalSplitter())
					{
						oSplitterdiv.style.top = iSplitterBackgroundTop + "px";
						oSplitterdiv.style.left = (urSp.iStartPositionX - (parseInt(iSashOffsetWidth) / 2)) +  "px";
						oSplitterdiv.style.height = iSplitterOffsetHeight  + "px";
						oSplitterdiv.style.width = iSashOffsetWidth + "px";
					} else 
					{
						oSplitterdiv.style.top = (urSp.iStartPositionY - (parseInt(iSashOffsetHeight ) / 2)) +  "px";
						oSplitterdiv.style.left =  urSp.iStartPositionX  + "px";
						oSplitterdiv.style.height = iSashOffsetHeight   + "px";
						oSplitterdiv.style.width = iSplitterOffsetWidth  + "px";
					}	
	
					oSplitteriframe.style.top = sapUrMapi_sAddUnit( oSplitterdiv.style.top , "px" );
					oSplitteriframe.style.left = sapUrMapi_sAddUnit( oSplitterdiv.style.left , "px" );
					oSplitteriframe.style.height = sapUrMapi_sAddUnit( oSplitterdiv.style.height , "px" );
					oSplitteriframe.style.width = sapUrMapi_sAddUnit( oSplitterdiv.style.width , "px" );
		
				}		
				oSplitterBack.style.display = "inline";
				oSplitterBackiframe.style.display = "inline";	
				oSplitterdiv.style.display = "inline";
				oSplitteriframe.style.display = "inline";	
				urSp_addEventListener(oBody,"mousemove", urSpTSBMoveList, true);
				urSp_addEventListener(oBody,"mouseup",urSpTSUpList, true);
			}
		}
}
function urSpTSGetSize(elements, isWidth) 
{
	var size = -1;
	{
		var i = 0;
		for (i =0; i < elements.length; i++)
		{
			var t = document.getElementById(elements[i]);
			{
				if (isWidth)
				{
					if ( ! t.width || t.width.indexOf("%") > -1)
					{ 
						size = t.offsetWidth;
					} else
					{ 
						size = t.width;
						break;
					}
				} else
				{
					if ( ! t.height || t.height.indexOf("%") > -1)
					{ 
						size = t.offsetHeight;
					} else
					{ 
						size = t.height;
						break;
					}
				}	
			}
		}
		
	}
	return size;				
}
function urSpTSUpList(event)
{								
				
				if (urSp.bPressed)
				{  
					urSp.bPressed = false;
					if(urSp.sActiveSplitterID != null)
					{
							var evt = urSp_checkEvent(event);
							var oSplitter = document.getElementById(urSp.sActiveSplitterID);
							var oSplitterBack = document.getElementById(urSp.sActiveSplitterID + "-bgdiv");
							var oSplitteriframe = document.getElementById(urSp.sActiveSplitterID + "-iframe");
							var oPreviousElements = document.getElementById(urSp.oPreviousElements[0]);							
							var oNextElements = document.getElementById(urSp.oNextElements[0]);
								if (urSpIsVerticalSplitter())
								{
									
									{
										var curX = evt.clientX - parseInt(urSp.iStartPositionX); 
									}									
									var colgroup = urSp_getFirstChildNodeByTagName(oSplitter,"COLGROUP");
									var cols = urSp_getChildNodesByTagName(colgroup, "COL");
									
									if (cols.length >= 2)
									{
										
										
										var iDifferencePreviousElements = parseInt(curX)  - (parseInt(oSplitteriframe.offsetWidth) / 2);
										var iDifferenceNextElements = (parseInt(oSplitteriframe.offsetWidth) / 2) - parseInt(curX);
										var iPreviousElementsOffsetWidth = oPreviousElements.offsetWidth;
										var iNextElementsOffsetWidth = oNextElements.offsetWidth;
										
										if ( (oPreviousElements.width == null || oPreviousElements.width == "" || oPreviousElements.width == "*")
										  	&&  (oNextElements.width == null || oNextElements.width == "" || oNextElements.width == "*")
											)
										{
												
										} else  if (oPreviousElements.width.indexOf("%") > -1 || oNextElements.width.indexOf("%") > -1)
										{ 
											var iPreviousElementsWidth = oPreviousElements.width ;
											if (! (oPreviousElements.width == null || oPreviousElements.width == "" || oPreviousElements.width == "*") )
											{	 
												
												var iPaneSize = Math.floor((1 + iDifferencePreviousElements / oPreviousElements.offsetWidth) * parseInt(oPreviousElements.width));
												if (iPaneSize >= parseInt(oNextElements.width) + parseInt(oPreviousElements.width) )
												{
													iPaneSize = parseInt(oNextElements.width) + parseInt(oPreviousElements.width) - 1;
												}
												if (iPaneSize > 0)
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oPreviousElements[iPanesPosition]).width = iPaneSize + "%";
													}
												} else
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oPreviousElements[iPanesPosition]).width = "1%";
													}
												}
											}
											if (!(oNextElements.width == null || oNextElements.width == "" || oNextElements.width == "*"))
											{ 	
												
												if (oPreviousElements.width == null || oPreviousElements.width == "" || oPreviousElements.width == "*")
												{
													iPreviousElementsWidth = (parseInt(oNextElements.width) *  iPreviousElementsOffsetWidth)  / iNextElementsOffsetWidth
												}
												var iPaneSize =  Math.ceil((- iDifferencePreviousElements / iPreviousElementsOffsetWidth)  * parseInt(iPreviousElementsWidth)) + parseInt(oNextElements.width);
												if (iPaneSize >= parseInt(oNextElements.width) + parseInt(iPreviousElementsWidth) )
												{
													iPaneSize = parseInt(oNextElements.width) + parseInt(iPreviousElementsWidth) - 1;
												}
												if (iPaneSize > 0)
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oNextElements[iPanesPosition]).width = iPaneSize + "%";
													}
												}  else
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oNextElements[iPanesPosition]).width = "1%";
													}
												}
											}
										} else 
										{	
											if (! (oPreviousElements.width == null || oPreviousElements.width == "" || oPreviousElements.width == "*") )
											{
														
														var iPaneSizeOfPreviousElements = parseInt(oPreviousElements.width) + iDifferencePreviousElements;														
														if ( iPaneSizeOfPreviousElements >= parseInt(iPreviousElementsOffsetWidth) + parseInt(iNextElementsOffsetWidth) - urSp.iCollapseSize )
														{  
															iPaneSizeOfPreviousElements = parseInt(iPreviousElementsOffsetWidth) + parseInt(iNextElementsOffsetWidth) - 1;
														}
														if (iPaneSizeOfPreviousElements < urSp.iCollapseSize)
														{ 
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oPreviousElements[iPanesPosition]).width = "1px";
															}
														} else
														{
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oPreviousElements[iPanesPosition]).width = iPaneSizeOfPreviousElements + "px";	
															}					
																								
															
														}
											}
											if (!(oNextElements.width == null || oNextElements.width == "" || oNextElements.width == "*"))
											{
														
														var iPaneSizeOfNextElements = parseInt(oNextElements.width) + iDifferenceNextElements;
														if ( (iPreviousElementsOffsetWidth + iDifferencePreviousElements)  < urSp.iCollapseSize )  
														{ 
															iPaneSizeOfNextElements = parseInt(iPreviousElementsOffsetWidth) + parseInt(iNextElementsOffsetWidth) - 1;
														}
														if (iPaneSizeOfNextElements < urSp.iCollapseSize)
														{ 
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oNextElements[iPanesPosition]).width = "1px";
															}
														} else
														{
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oNextElements[iPanesPosition]).width = iPaneSizeOfNextElements + "px";
															}
														}		
											}
											urSp_refreshTable(oSplitter);
									}
									
									
									var oPreviousElements = new Array();
									var oNextElements = new Array();
									var oPreviousElementIds = new Array();
									var oNextElementIds = new Array();
									var tbody = urSp_getFirstChildNodeByTagName(oSplitter, "TBODY");
									var trs = urSp_getChildNodesByTagName(tbody, "TR");
									
									if (document.getElementById(urSp.oNextElements[0]).nodeName == "COL")
									{   
										var colgroup = urSp_getFirstChildNodeByTagName(oSplitter, "COLGROUP");
										var cols = urSp_getChildNodesByTagName(colgroup, "COL");
				
										var iPreviousElementsColumnPosition = 0;
										for (iPreviousElementsColumnPosition=0; iPreviousElementsColumnPosition < cols.length; iPreviousElementsColumnPosition++)
										{
											if (cols[iPreviousElementsColumnPosition].id != null &&  cols[iPreviousElementsColumnPosition].id == urSp.oPreviousElements[0] )
											{
												break;
											}
										}
				
										for (iRowPosition = 0; (iRowPosition * 2) < trs.length; iRowPosition++)
										{
											var tds = urSp_getChildNodesByTagName(trs[iRowPosition * 2], "TD");
											
											{
												if (iRowPosition == 0)
												{
													
													oPreviousElements.push(tds[iPreviousElementsColumnPosition]);
													oNextElements.push(tds[iPreviousElementsColumnPosition + 2]);
												} else
												{	
													oPreviousElements.push(tds[iPreviousElementsColumnPosition / 2]);
													oNextElements.push(tds[iPreviousElementsColumnPosition/ 2 + 1]);
												}
											}
										}
									} else
									{
											oNextElements = urSp.oNextElements;	
											oPreviousElements = urSp.oPreviousElements;															
									}
																																				
									{
										for (iPos = 0;  iPos < oPreviousElements.length; iPos++)
										{
											oPreviousElements[iPos].width = document.getElementById(urSp.oPreviousElements[0]).width;
											oPreviousElementIds.push(oPreviousElements[iPos].id);	
											
											
											 										 
										}
									}
									{
										
										for (iPos = 0;  iPos < oNextElements.length; iPos++)
										{
											oNextElements[iPos].width = document.getElementById(urSp.oNextElements[0]).width;
											oNextElementIds.push(oNextElements[iPos].id);	
									
											
											 
										}
									}
									evt["ur_param"]={type: urSpGetSplitterType(), prev: document.getElementById(urSp.oPreviousElements[0]).width, next: document.getElementById(urSp.oNextElements[0]).width, prevElements: oPreviousElementIds.join(","), nextElements: oNextElementIds.join(",")};
									ur_EVT_fire(oSplitter,"onsashmovingfinished",evt);		
								}	
								} else 
								{
									
									{
										var curY = evt.clientY - parseInt(urSp.iStartPositionY) ; 
									}
									var tbody = urSp_getFirstChildNodeByTagName(oSplitter,"TBODY");
									var trs = urSp_getChildNodesByTagName(tbody, "TR");
									if (trs.length  >= 2)
									{
										var iDifferencePreviousElements = parseInt(curY)  - (parseInt(oSplitteriframe.offsetHeight) / 2);
										var iDifferenceNextElements = (parseInt(oSplitteriframe.offsetHeight) / 2) - parseInt(curY);
										var iPreviousElementsOffsetHeight = oPreviousElements.offsetHeight;
										var iNextElementsOffsetHeight = oNextElements.offsetHeight;
										
										if (   (oPreviousElements.height == null || oPreviousElements.height == "" || oPreviousElements.height == "*")
											   &&  (oNextElements.height == null || oNextElements.height == "" || oNextElements.height == "*")
											)
										{
												
										} else  if (oPreviousElements.height.indexOf("%") > -1 || oNextElements.height.indexOf("%") > -1)
										{ 
											var oPreviousElements_height = oPreviousElements.height;
											
											if (! (oPreviousElements.height == null || oPreviousElements.height == "" || oPreviousElements.height == "*") )
											{	 
												
												var iPaneSize = Math.floor((1 + iDifferencePreviousElements / oPreviousElements.offsetHeight) * parseInt(oPreviousElements.height));
												if (iPaneSize >= parseInt(oNextElements.height) + parseInt(oPreviousElements.height) )
												{
													iPaneSize = parseInt(oNextElements.height) + parseInt(oPreviousElements.height) - 1;
												}
												if (iPaneSize > 0)
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oPreviousElements[iPanesPosition]).height = iPaneSize + "%";
													}
												} else
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oPreviousElements[iPanesPosition]).height = "1%";
													}
												}
											}
											if (!(oNextElements.height == null || oNextElements.height == "" || oNextElements.height == "*"))
											{ 	
												
												if (oPreviousElements.height == null || oPreviousElements.height == "" || oPreviousElements.height == "*")
												{
													oPreviousElements_height = (parseInt(oNextElements.height) *  iPreviousElementsOffsetHeight)  / iNextElementsOffsetHeight;
												}
												var iPaneSize =  Math.ceil((- iDifferencePreviousElements / iPreviousElementsOffsetHeight)  * parseInt(oPreviousElements_height)) + parseInt(oNextElements.height);
												if (iPaneSize >= parseInt(oNextElements.height) + parseInt(oPreviousElements_height) )
												{
													iPaneSize = parseInt(oNextElements.height) + parseInt(oPreviousElements_height) - 1;
												}
												if (iPaneSize > 0)
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oNextElements[iPanesPosition]).height = iPaneSize + "%";
													}
												}  else
												{
													
													for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
													{
														document.getElementById(urSp.oNextElements[iPanesPosition]).height = "1%";
													}
												}
											}
										} else 
										{
											var iPreviousElementsOffsetHeight = oPreviousElements.offsetHeight ;
											if (! (oPreviousElements.height == null || oPreviousElements.height == "" || oPreviousElements.height == "*") )
											{
														
														var iPaneSizeOfPreviousElements = parseInt(oPreviousElements.height) + iDifferencePreviousElements;
														if ( iPaneSizeOfPreviousElements >= parseInt(iPreviousElementsOffsetHeight) + parseInt(iNextElementsOffsetHeight) - urSp.iCollapseSize )
														{  
															iPaneSizeOfPreviousElements = parseInt(iPreviousElementsOffsetHeight) + parseInt(iNextElementsOffsetHeight) - 1;
														}
														if (iPaneSizeOfPreviousElements < urSp.iCollapseSize)
														{ 
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oPreviousElements[iPanesPosition]).height = "1px";
															}
														} else
														{
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oPreviousElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oPreviousElements[iPanesPosition]).height = iPaneSizeOfPreviousElements + "px";
															}
														}
											}
											if (!(oNextElements.height == null || oNextElements.height == "" || oNextElements.height == "*"))
											{
														
														var iPaneSizeOfNextElements = parseInt(oNextElements.height) + iDifferenceNextElements;
														if ( (iPreviousElementsOffsetHeight + iDifferencePreviousElements) < urSp.iCollapseSize )  
														{ 
															iPaneSizeOfNextElements = parseInt(iPreviousElementsOffsetHeight) + parseInt(iNextElementsOffsetHeight) - 1;
														}
														if (iPaneSizeOfNextElements < urSp.iCollapseSize)
														{ 
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oNextElements[iPanesPosition]).height = "1px";
															}
														} else
														{
															
															for (iPanesPosition = 0; iPanesPosition < urSp.oNextElements.length; iPanesPosition++ )
															{
																document.getElementById(urSp.oNextElements[iPanesPosition]).height = iPaneSizeOfNextElements + "px";
															}
														}
											}
										}
									}								
										
										
	
										evt["ur_param"]={type: urSpGetSplitterType(), prev: document.getElementById(urSp.oPreviousElements[0]).height, next: document.getElementById(urSp.oNextElements[0]).height, prevElements: urSp.oPreviousElements.join(","), nextElements: urSp.oNextElements.join(",")};
										ur_EVT_fire(oSplitter,"onsashmovingfinished",evt);	
								}	
							var oBody = document.getElementsByTagName("BODY")[0];
							urSp_removeEventListener(oBody,"mousemove", urSpTSBMoveList, true);
							urSp_removeEventListener(oBody,"mouseup",urSpTSUpList, true);
							
							{	
								var n = document.getElementById(urSp.sActiveSplitterID + "-bgiframe");
								urSp_removeEventListener(n,"mousemove", urSpTSBMoveList, true);
								urSp_removeEventListener(n,"mouseup",urSpTSUpList, true);
								
								n.style.display = "none";
							}
							{	
								var n = document.getElementById(urSp.sActiveSplitterID + "-bgdiv");
								urSp_removeEventListener(n,"mousemove", urSpTSBMoveList, true);
								urSp_removeEventListener(n,"mouseup",urSpTSUpList, true);
								
								n.style.display = "none";
							}
							
							{ 
								var n = document.getElementById(urSp.sActiveSplitterID + "-iframe");
								urSp_removeEventListener(n,"mousemove", urSpTSBMoveList, true);
								urSp_removeEventListener(n,"mouseup",urSpTSUpList, true);
								
								n.style.display = "none";
							}
							{ 
								var n = document.getElementById(urSp.sActiveSplitterID + "-div");
								urSp_removeEventListener(n,"mousemove", urSpTSBMoveList, true);
								urSp_removeEventListener(n,"mouseup",urSpTSUpList, true);
								
								n.style.display = "none";
							}
																							
							{ 
								var n = oSplitterBack;
								
								n.style.display = "none";
							}
							urSp.sActiveSplitterID = null;	
					}
				}
}
function urSpTSBMoveList(event)
{
				if (! urSp.bPressed)
				{
					return;
				} else
				{	
				var evt = urSp_checkEvent(event);
				var oSplitter = document.getElementById(urSp.sActiveSplitterID);
				var oSplitteriframe = document.getElementById(urSp.sActiveSplitterID + "-iframe");
				var oSplitterdiv = document.getElementById(urSp.sActiveSplitterID + "-div");
				
					if (urSp.oPreviousElements.length == 0)
					{
						
					} else if (urSp.oNextElements.length == 0 )
					{
						
					} else
				{
				if ( urSpIsVerticalSplitter()) {
					
														
					
					{	
						var curX = evt.clientX - parseInt(urSp.iStartPositionX) ; 
					}		
					{
						if (urSp.iPreviousElementsWidth != null && urSp.iNextElementsWidth != null)
							{
						if ( 
							parseInt(urSp.iPreviousElementsWidth) + parseInt(curX) < 0 ||
							parseInt(urSp.iNextElementsWidth) - parseInt(curX) < 0
						)
						{
							
						} else
						{
							
							
							{
								oSplitteriframe.style.left = sapUrMapi_sAddUnit( evt.clientX  , "px" ); 
							}
							oSplitterdiv.style.left = sapUrMapi_sAddUnit( oSplitteriframe.style.left , "px" );
						}
						}
					}
				} else 
				{   
					 
					{	
						var curY = evt.clientY - parseInt(urSp.iStartPositionY); 
					}
					
					
						if ( 
							parseInt(urSp.iPreviousElementsHeight) + parseInt(curY)  < -1 ||
							parseInt(urSp.iNextElementsHeight) - parseInt(curY) < -1
						)
						{
							
						} else
						{
							
							
							{
								oSplitteriframe.style.top = sapUrMapi_sAddUnit( evt.clientY  , "px" ); 
							}
							oSplitterdiv.style.top = sapUrMapi_sAddUnit( oSplitteriframe.style.top , "px" );
						}
				}
			}
		}
}
function urSpTHovList(event)
{
				var evt = urSp_checkEvent(event);
				var oSash = urSp_getTPElement(evt);
				if (oSash.getAttribute("tp") == "urSpTVs")
				{
					urSpSetSashClass(oSash, "urSpTVsH");
				} else 
				{
					urSpSetSashClass(oSash, "urSpTHsH");
				}
				urSp_addEventListener(oSash,"mouseout",urSpTDeHovList, false);
}
function urSpTDeHovList(event)
{
				var evt = urSp_checkEvent(event);
				var oSash = urSp_getTPElement(evt);
				if (oSash.getAttribute("tp") == "urSpTVs") 
				{
					urSpSetSashClass(oSash, "urSpTVs");
				} else 
				{
					urSpSetSashClass(oSash, "urSpTHs");
				}
				urSp_removeEventListener(oSash,"mouseout",urSpTDeHovList, false);
}
			
function urSpSetSashClass(oSash,sClassName)
{
	oSash.className = sClassName;
}	
function urSp_getColumnElements(oSplitter,iRow)
{
	var aPreviousElements = new Array();
	var aNextElements = new Array();
	var colgroup = urSp_getFirstChildNodeByTagName(oSplitter,"COLGROUP");
	{
		var cols = urSp_getChildNodesByTagName(colgroup, "COL");
		
		if (iRow > -1 &&  cols[ (iRow)  * 2  ].id)
		{
			aPreviousElements.push(  cols[ (iRow)  * 2   ].id );
		}
		else
		{
			
		}
		if ((iRow + 1) * 2 < cols.length && cols[ (iRow + 1)  * 2  ].id)
		{
			aNextElements.push(  cols[ (iRow + 1)  * 2   ].id );
		}
		
	}
	var mParameters = { prev: aPreviousElements, next: aNextElements};
	return mParameters;
}
function urSp_getRowElements(oSplitter,iCol)
{
	var aPreviousElements = new Array();
	var aNextElements = new Array();
	var tbody = urSp_getFirstChildNodeByTagName(oSplitter, "TBODY");
	var trs = urSp_getChildNodesByTagName(tbody, "TR");
	
	var tds = urSp_getChildNodesByTagName( trs[(iCol) * 2 ],"TD");
	if (iCol == 0)
	{ 	
		for (p = 0; (p * 2) < tds.length; p++)
		{
			if ( tds[p * 2].id  )
			{
				aPreviousElements.push(  tds[p * 2].id  );
			}
				
		}
	} else
	{ 
		for (p = 0; p < tds.length; p++)
		{
			if ( tds[p].id  )
			{
				aPreviousElements.push(  tds[p].id  );
			}
				
		}
	}
	{ 
		var tds = urSp_getChildNodesByTagName(trs[(iCol + 1) * 2 ],"TD");
		for (p = 0; p < tds.length; p++)
		{
			if (tds[p].id )
			{
				aNextElements.push(  tds[p].id  );
			}
			
		}
	}
	var mParameters = { prev: aPreviousElements, next: aNextElements};
	return mParameters;
}
function sapUrMapi_Splitter_setColumnWidth(Id,column,size,sizeMode,event)
{
	var oSplitter = document.getElementById(Id);
	var iSize = parseInt(size);
	if (iSize > 0)
	{	
		var mElements = urSp_getColumnElements(oSplitter, parseInt(column)); 
		
		
		for (iPanesPosition = 0; iPanesPosition < mElements.prev.length; iPanesPosition++ )
		{
			if (sizeMode == "RELATIVE")
			{
				document.getElementById(mElements.prev[iPanesPosition]).width = size + "%";
			} else 
			{
				document.getElementById(mElements.prev[iPanesPosition]).width = size + "px";
			}
		}
	} else
	{
		oSplitter.width =  "100%";
	}	
}
function sapUrMapi_Splitter_setSplitterWidth(Id,size,sizeMode,event)
{
	var oSplitter = document.getElementById(Id);
	var iSize = parseInt(size);
	if (iSize > 0)
	{	
		if (sizeMode == "RELATIVE")
		{
			oSplitter.width = iSize + "%";
			return;
		} else 
		{
			oSplitter.width = iSize + "px";
			return;
		} 
	} else
	{
		oSplitter.width =  size; 
	}
}
function sapUrMapi_Splitter_setRowHeight(Id,row,size,sizeMode,event)
{
	var oSplitter = document.getElementById(Id);
	var iSize = parseInt(size);
	if (iSize > 0)
	{	
		var mElements = urSp_getRowElements(oSplitter,parseInt(row)); 
		
		
		
		for (iPanesPosition = 0; iPanesPosition < mElements.prev.length; iPanesPosition++ )
		{
			if (sizeMode == "RELATIVE")
			{
				document.getElementById(mElements.prev[iPanesPosition]).height = iSize + "%";
			} else 
			{
				document.getElementById(mElements.prev[iPanesPosition]).height = iSize + "px";
			}
		}
	} else
	{
		oSplitter.height =  "100%";
	}
}
function sapUrMapi_Splitter_setSplitterHeight(Id,size,sizeMode,event)
{
	var oSplitter = document.getElementById(Id);
	var iSize = parseInt(size);
	if (iSize > 0)
	{	
		if (sizeMode == "RELATIVE")
		{
			oSplitter.height = iSize + "%";
			return;
		} else 
		{
			oSplitter.height = iSize + "px";
			return;
		} 
	} else
	{
		oSplitter.height =  "100%";
	}
}

//** SelectableLinkBar.ie5 **

function sapUrMapi_SelectableLinkBar_RegisterCreate(sId) {
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_SelectableLinkBar_create('" + sId + "')");
}
function sapUrMapi_SelectableLinkBar_create(sId) {
	
	ur_IScr_getObj(sId);
	ur_IScr_create(sId);
	sapUrMapi_Resize_AddItem(sId, "ur_IScr_resize('"+sId+"')");
	ur_IScr_resize(sId);
	
}
function ur_SLB_oadi(sId)
{
	var oScrl = ur_IScr[sId];
	if(oScrl.first == 0)
		ur_get(sId+'-SrlLt').className= "urLnkBarScrlLeftDsbl";
	else
		ur_get(sId+'-SrlLt').className= "urLnkBarScrlLeft";
	if(oScrl.last == oScrl.items.length -1)
		ur_get(sId+'-SrlRt').className= "urLnkBarScrlRightDsbl";
	else
		ur_get(sId+'-SrlRt').className= "urLnkBarScrlRight";
	
}
function sapUrMapi_SelectableLinkBar_draw(sId) {
  var oLinkBar = ur_get(sId);
  var iWidth = oLinkBar.offsetWidth;
  var iOrgWidth=iWidth;
  var oLinkBarContent = ur_get(sId+"-cnt");
  var oLinkBarScrollPrev = ur_get(sId+"-p");
  var oLinkBarScrollNext = ur_get(sId+"-n");
  iWidth-=oLinkBarScrollPrev.offsetWidth;
  iWidth-=oLinkBarScrollNext.offsetWidth;
  var nWidth=0;
  var xWidth=0;
  var xHeight=oLinkBarScrollNext.offsetHeight;
  var collItems = oLinkBarContent.childNodes;
  var iFirstVisible=sapUrMapi_SelectableLinkBar_getFirstVisibleItem(sId);
  var iLastVisible=parseInt(ur_get(sId).getAttribute("lastitemidx"));
  for (var n=0;n<collItems.length;n++) {
		  collItems.item(n).style.width="50px";
  }
  var ix=0;
  if (iWidth==0) {
  	oLinkBar.style.width="100%";
  	return;
  }
  if (iFirstVisible==-1) {
	  for (var n=0;n<iLastVisible+1;n++) {
		  if (n>=collItems.length) break;
		  collItems.item(n).style.height=sapUrMapi_sAddUnit( xHeight , "px" );
	   	collItems.item(n).style.display="block";
	    nWidth+=collItems.item(n).offsetWidth;
	    if (nWidth<iWidth) {
	      xWidth=nWidth;
	    }
 	    if (nWidth>iWidth) {
	      collItems.item(ix).style.display="none";
	      ix++;
	      iFirstVisible=ix;
	    }
    }
    if (nWidth<iWidth) {
		  for (var n=iLastVisible+1;n<collItems.length;n++) {
		   	collItems.item(n).style.display="block";
  	    iLastVisible=n-1;
		    if (nWidth<iWidth) {
		      xWidth=nWidth;
		    }
 	      nWidth+=collItems.item(n).offsetWidth;
	 	    if (nWidth>iWidth) {
	 	    	break;
		    }
	    }
    }
  } else {
    var iLastVisible=-1;
	  for (var n=0;n<collItems.length;n++) {
		   collItems.item(n).style.height=sapUrMapi_sAddUnit( xHeight , "px" );
		   if (n<iFirstVisible) {
		   	collItems.item(n).style.display="none";
		    continue;
		   } else {
		   	collItems.item(n).style.display="block";
		   }
		   nWidth+=collItems.item(n).offsetWidth;
		   if (nWidth<iWidth) {
		     xWidth=nWidth;
		   }
		   if (nWidth>iWidth) {
		     collItems.item(n).style.display="none";
		     if (iLastVisible==-1) {
		     	 iLastVisible=n-1;
		     }
		   }
		   if (nWidth<iWidth) {
		     xWidth=nWidth;
		   }
	  }
  }
  if (iLastVisible==-1) {
  	 iLastVisible=collItems.length-1;
  }
  if (iFirstVisible==-1) {
  	 iFirstVisible=0;
  }
  oLinkBar.setAttribute("lastitemidx",iLastVisible);
  oLinkBar.setAttribute("firstitemidx",iFirstVisible);
  
  
	if (oLinkBarScrollNext.onclick!=null) {
    oLinkBarScrollNext.setAttribute("oldonclick",oLinkBarScrollNext.onclick);
	}
  if (iLastVisible>=collItems.length-1) {
    oLinkBarScrollNext.className="urLnkBarScrlRight urLnkBarScrlRightDsbl";
    oLinkBarScrollNext.onclick=null;
  } else {
    oLinkBarScrollNext.className="urLnkBarScrlRight";
    oLinkBarScrollNext.onclick=oLinkBarScrollNext.getAttribute("oldonclick");
  }
	if (oLinkBarScrollPrev.onclick!=null) {
    oLinkBarScrollPrev.setAttribute("oldonclick",oLinkBarScrollPrev.onclick);
	}
  if (iFirstVisible==0) {
    oLinkBarScrollPrev.className="urLnkBarScrlLeft urLnkBarScrlLeftDsbl";
    oLinkBarScrollPrev.onclick=null;
  } else {
    oLinkBarScrollPrev.className="urLnkBarScrlLeft";
    oLinkBarScrollPrev.onclick=oLinkBarScrollPrev.getAttribute("oldonclick");
  }
  var oLinkBarDiv = ur_get(sId+"-div");
  oLinkBarDiv.style.height=sapUrMapi_sAddUnit( xHeight , "px" );
  oLinkBarDiv.style.width=sapUrMapi_sAddUnit( xWidth , "px" );
}
function sapUrMapi_SelectableLinkBar_getFirstVisibleItem(sLinkBarId) {
	return parseInt(ur_get(sLinkBarId).getAttribute("firstitemidx"));
}
function sapUrMapi_SelectableLinkBar_resize(sLinkBarId,e) {
  sapUrMapi_SelectableLinkBar_create(sLinkBarId);
}
function sapUrMapi_SelectableLinkBar_scroll(sLinkBarId,sDirection) {
  var iFirstVisible=sapUrMapi_SelectableLinkBar_getFirstVisibleItem(sLinkBarId);
  var iLastVisible=ur_get(sLinkBarId).getAttribute("lastitemidx");
  var iPageSize=iLastVisible-iFirstVisible;
  if (sDirection=="PREV") {
		iLastVisible=iFirstVisible-1;
		iFirstVisible=-1;
  } else if (sDirection=="NEXT") {
		iFirstVisible=iLastVisible+1;
		iLastVisible=-1;
	}	else {
	  iFirstVisible=-1;
	  iLastVisible=parseInt(sDirection.split("-")[2]);
	}
	ur_get(sLinkBarId).setAttribute("firstitemidx",iFirstVisible)
	ur_get(sLinkBarId).setAttribute("lastitemidx",iLastVisible)
  sapUrMapi_SelectableLinkBar_draw(sLinkBarId);
}
function sapUrMapi_SelectableLinkBar_goprevious(sId,o,e) {
	if(o.tagName == "TABLE"){
			o=o.firstChild.firstChild.firstChild;
		} else {
			while(o.tagName != "TD") o=o.parentNode;
			sapUrMapi_setTabIndex(o.firstChild,-1);
			o=o.previousSibling;
			if(o==null) return;
		}
		if(o.firstChild.className == "urLnkBarLnkDsbl" && ur_system.is508 == false ) o=o.previousSibling;
		if(o==null) return;
		if(o.style.display=="none")
		  sapUrMapi_SelectableLinkBar_scroll(sId,"PREV");
		sapUrMapi_setTabIndex(o.firstChild,0);
		sapUrMapi_focusElement(o.firstChild);
		ur_EVT_cancel(e);
		return true;
}
function sapUrMapi_SelectableLinkBar_gonext(sId,o,e) {
	if(o.tagName == "TABLE"){
			o=o.firstChild.firstChild.firstChild;
		}
		else{
			while(o.tagName != "TD") o=o.parentNode;
			sapUrMapi_setTabIndex(o.firstChild,-1);
			o=o.nextSibling;
			if(o==null) return;
		}
		if(o.firstChild.className == "urLnkBarLnkDsbl" && ur_system.is508 == false ) o=o.nextSibling;
		if(o==null) return;
		if(o.style.display=="none")
			sapUrMapi_SelectableLinkBar_scroll(sId,"NEXT");
		sapUrMapi_setTabIndex(o.firstChild,0);
		sapUrMapi_focusElement(o.firstChild);
		ur_EVT_cancel(e);
		return true;
}
function sapUrMapi_SelectableLinkBar_keydown(sId,e) {
	var o=e.srcElement;
	
	if(e.keyCode=="32"){
		if(o.tagName=="A")o.click();
		ur_EVT_cancel(e);
	}
	
	if(e.keyCode=="39"){
		if (ur_system.direction=="rtl")
			return sapUrMapi_SelectableLinkBar_goprevious(sId,o,e)
		else
			return sapUrMapi_SelectableLinkBar_gonext(sId,o,e)
	}
	
	if(e.keyCode=="37"){
		if (ur_system.direction=="rtl")
			return sapUrMapi_SelectableLinkBar_gonext(sId,o,e);
		else
			return sapUrMapi_SelectableLinkBar_goprevious(sId,o,e);
	}
	
	if(e.keyCode=="9"){
		if(o.tagName == "TABLE"){
			o=o.firstChild.firstChild.firstChild;
		} else {
			while(o.tagName != "TD") o=o.parentNode;
			sapUrMapi_setTabIndex(o.firstChild,-1);
			o=o.previousSibling;
			if(o==null) return;
		}
	}
}

//** Skip.ie5 **

function sapUrMapi_skip(sId,oEvt) 
{
	var sCt=sapUrMapi_getControlType(sId);
	if(sCt=="AX" || sCt=="AP" || sCt=="IF" || sCt=="T" )
		sId+="-r";
	var oR=ur_get(sId);
	var oN=null;
	var oF=null;
	
	
	if( oEvt.shiftKey && oEvt.keyCode == 117 )
	{
		oF = ur_getPreviousFocusableElement(oR);
	}	 
	
	else if( oEvt.keyCode == 117 ){
		oF = ur_getNextFocusableElement(oR);
	}	
	if(oF!=null)
	{
		ur_focus(oF);
		return ur_EVT_cancel(oEvt);
	}
    if(oEvt.keyCode== 13)
	 {
		if(oR.getAttribute("dbid")!=null)
		 {
			 sapUrMapi_triggerDefaultButton(sId,oEvt);
		 }else{
		 
		 	if(oEvt.srcElement.ct=="IT")
		 		ur_EVT_cancel(oEvt);
		 }
	 }	 
}
function ur_getPreviousFocusableElement(oR) {
	var oN=null;
	var oF=null;
	while(oR!=null && oF==null){
		while(oR!=null && oR.previousSibling==null)
			oR=oR.parentNode;
		if(oR==null)
			break;
		oN=oR.previousSibling;
		while(oN!=null && oF==null){
			oF=sapUrMapi_findFirstFocus(oN,true);
			if(oF==null)
				oN=oN.previousSibling;
		}
		if(oF==null)
			oR=oR.parentNode;
		else
			break;
	}
	return oF;
}
function ur_getNextFocusableElement(oR) {
	var oN=null;
	var oF=null;
	while(oR!=null && oF==null){
		while(oR!=null && oR.nextSibling==null)
			oR=oR.parentNode;
		if(oR==null)
			break;				
		oN=oR.nextSibling;
		while(oN!=null && oF==null){
			oF=sapUrMapi_findFirstFocus(oN);
			if(oF==null)
				oN=oN.nextSibling;
		}
		if(oF==null)
			oR=oR.parentNode;
		else
			break;
	}
	return oF;
}
//** Status.ie5 **

function ur_setSt(sId,aSt,bOn){
	var o=null;
	if(typeof(sId)=="string") o=ur_get(sId);
	else o=sId;
	if (!o) return 
	var sSt=o.getAttribute("st");
	
	if(sSt==null) sSt="";
	if(typeof(aSt)=="string")
		aSt=new Array(aSt);
	
	for(var i=0; i<aSt.length;i++){
		if(sSt=="" || sSt.indexOf(aSt[i])==-1){
			if(bOn) sSt+=aSt[i];
		}
		else{
			if(!bOn) sSt=sSt.replace(aSt[i],"");
		}
	}
	
	o.setAttribute("st",sSt);
}
function ur_isSt(sId,aSt){
	var o=null;
	if(typeof(sId)=="string") o=ur_get(sId);
	else o=sId;
	if (!o) return false; 
	var sSt=o.getAttribute("st");
	var bRet=true;
	if(sSt==null) return false;
	
	if(typeof(aSt)=="string")
		aSt=new Array(aSt);
	
	for(var i=0; i<aSt.length;i++)
		if(sSt.indexOf(aSt[i])==-1)
			bRet=false;
	return bRet;
}
function ur_getRootObj(o) {
  while(o.getAttribute!=null && (o.getAttribute("ct")==null || o.getAttribute("ct")==""))
    o=o.parentNode;
  if (o.getAttribute!=null && o.getAttribute("ct")!=null && o.getAttribute("ct")!="")
    return o;
}

//** TableView.nn6 **

function sapUrMapi_Table_selectRow(sTableId,iRow,e) {
  var oInput = ur_get(sTableId+'-itm-'+iRow);
  var oInputGrp = document.getElementsByName(oInput.name);
  if ((oInputGrp.length==1)&&(oInput.type!="radio")) {
    if (e.target.tagName=="IMG") oInput.checked = (!oInput.checked);
		var oImg = ur_get(oInput.id + "-img");
	  oImg.className = "urImgCbgImg";
		if (oInput.checked) oImg.className = "urImgCbgImgChk";
		
		var oRow = oInput.parentNode;
		while(!oRow.getAttribute("rr")) {
			oRow=oRow.parentNode;
		}
		for (var n=0;n<oRow.cells.length;n++) {
			var oCell = oRow.cells[n];
			if (oInput.checked) {
			  oCell.setAttribute("unselectedclass",oCell.className);
			  
			} else {
	  	  
			}
		}
  } else {
	  for (var i = 0; i < oInputGrp.length; i++){
	    var oImg = ur_get(oInputGrp[i].id + "-img");
	    if (oInputGrp[i]==oInput){
			  if (e.target.tagName=="IMG") oInput.checked=true;
			  if (e.target.tagName=="IMG") ur_focus(oInputGrp[i]);
		    oImg.className = "urImgRbgImgChk";
	    } else {
			 if (oImg.onclick) {
			 oInputGrp[i].checked=false;
	     oImg.className = "urImgRbgImg";
	    }
   }
  }
  }
	ur_EVT_cancelBubble(e);
}
function sapUrMapi_Table_getClickedRowIndex(sId,oEvent) {
 	 oSrc = oEvent.target;
   var obj = oEvent.target;
   while ( (obj!=null) && (obj.tagName!='TD') )
      obj = obj.parentNode;
   if(obj==null) return;
   var parent = obj.parentNode;
   var rowIndex = parent.getAttribute("rr");
   return parseInt(rowIndex);
}
function sapUrMapi_Table_getClickedColIndex(sId,oEvent) {
 	 oSrc = oEvent.target;
   var obj = oEvent.target;
   while ( (obj!=null) && (obj.tagName!='TD') )
      obj = obj.parentNode;
   var oCell = obj;
   while ( (obj!=null) && (obj.tagName!='TR') )
      obj = obj.parentNode;
   var oRow = obj;
   while ( (obj!=null) && (obj.tagName!='TABLE') )
      obj = obj.parentNode;
   var oTable = obj;
   if ( obj==null ) return;
   var idx = 0;
   while (oRow.childNodes.item(idx)!=oCell) {
   	 idx++;
   }
   var colidx =  idx - parseInt( oTable.getAttribute("nmi"));
   return colidx;
}
function sapUrMapi_Table_getClickedCellId(sId,oEvent) {
 	 oSrc = oEvent.target;
   var obj = oEvent.target;
   while ( (obj!=null) && (obj.tagName!='TD') )
      obj = obj.parentNode;
   var oCell = obj;
   var cellid =  oCell.getAttribute("id");
   return cellid;
}
function sapUrMapi_Table_keydown(sId,e){}
function sapUrMapi_Table_activate(sId,e){}

//** TabStrip.ie5 **

function sapUrMapi_TabStrip_RegisterCreate(sId,iCount,iActive) {
	if(!sId || iCount==0 || iActive<0) return;
	sapUrMapi_Create_AddItem(sId, "sapUrMapi_TabStrip_create('" + sId + "','" + iCount + "','" + iActive + "')");
}
function sapUrMapi_TabStrip_create(sId,iCount,iActive) {
	
	var oTabTable=ur_get(sId);
	var curTab = ur_get(sId + "-cnt-" + iActive);
	
	if (curTab == null) return;
	
	var iHeight = 0
	var iWidth = 0;
	
	if (curTab.childNodes[0] != null && sapUrMapi_getCurrentStyle(curTab.childNodes[0],"overflow")!="visible") {
		var oContent = ur_TS_drawScrollContent(sId);
		var iHeight = oContent.height;
		var iWidth = oContent.width;
	}
		
	if(ur_get(sId).getAttribute("scrl")=="1") 
	{
		ur_IScr_getObj(sId);
		ur_IScr[sId].scrl.style.width = "auto";
		
		if ( oTabTable.style.width == "" && iWidth != 0 ) {
			oTabTable.style.width = sapUrMapi_sAddUnit( iWidth , "px" );
		}
		ur_IScr_create(sId);
		
		
		var oPag = ur_get(sId+"-pg");
		sapUrMapi_Paginator_removeFromTabChain(sId+"-pg");
		var oScr = ur_IScr[sId];
		var iSelIdx = parseInt(oTabTable.getAttribute('sidx'));
		var iTabWidth = 0;
		for (var n = 0; n < oScr.items.length; n++) {
		  if (oScr.items[n].width > iTabWidth) iTabWidth=oScr.items[n].width;
		}
		var iPagWidth=oPag.parentNode.offsetWidth;
		if (iWidth==0) iWidth=oTabTable.offsetWidth;
		
		
		
		
		try{
			if(iWidth  < (iPagWidth+iTabWidth+(iTabWidth/2)))
			{
				oTabTable.style.width=sapUrMapi_sAddUnit( iPagWidth+iTabWidth+(iTabWidth/2) , "px" );
				ur_IScr_draw(sId);
				ur_TS_drawScrollContent(sId);
			}
		}catch(ex){};
		
		
		
		
		if(!oScr.items[iSelIdx].visible)
		{
			
			
			
							
			ur_get(sId+"-scrl").setAttribute("fsrl",iSelIdx);
			oScr.first = iSelIdx;
			ur_IScr_create(sId);
			oTabTable.setAttribute("fidx",iSelIdx);
			sapUrMapi_setTabIndex(oScr.items[iSelIdx][1],0);
		}
		else
		{
			sapUrMapi_setTabIndex(oScr.items[iSelIdx][1],0);
			oTabTable.setAttribute("fidx",iSelIdx);
		}
	}
	oTabTable.onresize = new Function("event","sapUrMapi_TabStrip_resize('"+sId+"',"+iWidth+","+iHeight+")");
	sapUrMapi_Resize_AddItem(sId, "sapUrMapi_TabStrip_resize('"+sId+"',"+iWidth+","+iHeight+")");
}
function ur_TS_drawScrollContent(sId) {
	var curTab = ur_get(sId + "-cnt-" + ur_get(sId).getAttribute("sidx"));
	if (sapUrMapi_getCurrentStyle(curTab.childNodes[0],"overflow")!="visible") {
	  	var oBorders=curTab.parentNode;
		var iBl=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderBottomWidth"));
		var iBr=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderRightWidth"));
		var iBt=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderTopWidth"));
		var iBb=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderBottomWidth"));
	  	curTab.childNodes[0].style.height=sapUrMapi_sAddUnit( curTab.parentNode.offsetHeight-iBt-iBb , "px" );
	  	curTab.childNodes[0].style.width=sapUrMapi_sAddUnit( curTab.parentNode.offsetWidth-iBl-iBr , "px" );
	  	curTab.style.overflow="visible";
	  	return {height:curTab.parentNode.offsetHeight-iBt-iBb,width:curTab.parentNode.offsetWidth-iBl-iBr};
	} else {
	  	return {height:curTab.offsetHeight,width:curTab.offsetWidth};
	}
}
function sapUrMapi_TabStrip_resize(sId) {
	var o = ur_get(sId);
	if(!o) return;
	if(o.getAttribute("scrl") == 1) {
		var iWidth = o.offsetWidth;
		if (ur_IScr[sId].iWidth && ur_IScr[sId].iWidth == iWidth ) return;
		ur_IScr_resize(sId);
		ur_IScr[sId].iWidth = iWidth;
	}
  	ur_TS_drawScrollContent(sId);
}
function sapUrMapi_TabStrip_getSelectedItemId(sTabStripId) {
  	var oTabTable = ur_get(sTabStripId);
	var iSelTab	= parseInt(oTabTable.getAttribute("sidx"));
	return sTabStripId+"-itm-"+iSelTab;
}
function sapUrMapi_TabStrip_keySelect(strId, intSelectedIdx, intTabCount,e) {
	var o = ur_KY_getObj(strId,"-tbl","TD","itemid","h",true),
		oTabScrl = ur_get(strId),
		bScroll = oTabScrl.getAttribute("scrl")=="1";
	
	if(e.keyCode == 9)
	{	
		var iSelIdx = parseInt(oTabScrl.getAttribute("sidx"));
		var iFocIdx = parseInt(oTabScrl.getAttribute("fidx"));
		
		if(bScroll)
		{
			var oScrl = ur_IScr[strId];
			
			if(!oScrl.items[iSelIdx].visible)
			{
				ur_focus_Itm(oScrl.items[oScrl.first][1],oScrl.items[iSelIdx][1]);
				if(oScrl.first != iFocIdx)
					sapUrMapi_setTabIndex(oScrl.items[iFocIdx][1],-1);
				oTabScrl.setAttribute("fidx",oScrl.first);
			}
			else
			{
				if(intSelectedIdx != iSelIdx){
					ur_focus_Itm(oScrl.items[iSelIdx][1],oScrl.items[intSelectedIdx][1]);
					oTabScrl.setAttribute("fidx",iSelIdx);
				}
			}
		}
		else
		  ur_KY_nav(e,o);
	}
	else if (sapUrMapi_checkKey(e,"keydown",new Array("39","37","33","34","35","36"))){			
		if(bScroll){
			var iKey=e.keyCode;
			var bNext=false;
			var bPrev=false;
			if(iKey==39 || iKey==34 || iKey==35){
				if (ur_system.direction != "rtl"){
					bNext=true;
					intSelectedIdx=intSelectedIdx + 1;
				}else{
					bPrev=true;
					intSelectedIdx = intSelectedIdx - 1;
				}
			}else if(iKey==37 || iKey ==33 || iKey == 36){
				if (ur_system.direction != "rtl"){
					bPrev=true;
					intSelectedIdx = intSelectedIdx - 1;
				}else{
					bNext=true;
					intSelectedIdx = intSelectedIdx + 1;
				}
			}
			if (!ur_system.is508){
				var check = ur_KY_checkDsbl(o,intSelectedIdx,e.keyCode); 
			    var intSelectedIdx= check["idx"];
			    var oFrom = check["from"];
			 }
			sapUrMapi_TabStrip_triggerScroll(strId,intSelectedIdx,intTabCount,bNext,bPrev,oFrom,e);
		}
			ur_KY_nav(e,o);
  }
  
  if (sapUrMapi_checkKey(e,"keydown",new Array("32"))){
  	e.srcElement.click();
	ur_EVT_cancel(e);
  	return;
  }
  
}
function sapUrMapi_TabStrip_triggerScroll(sTabStripId,iFocusIdx,iTabCount,bNext,bPrev,oFrom,evt) {
  	var oTabTable 	= ur_get(sTabStripId);
  	var objTab = ur_IScr[sTabStripId];
	if (isNaN(iFocusIdx)) iFocusIdx = parseInt(ur_get(sTabStripId).getAttribute("fidx"));
	if (bNext) {
		if(evt.keyCode == 33 || evt.keyCode == 34) 
		{
			if(iFocusIdx < objTab.items.length - 1)
				ur_IScr_toNextPage(sTabStripId);
		}
		else if(evt.keyCode == 36 || evt.keyCode == 35)
		{
			if(iFocusIdx < objTab.items.length - 1)
				ur_IScr_toEnd(sTabStripId);
		}
		else if(evt.keyCode==39 || evt.keyCode==37) {
			if(iFocusIdx > objTab.last || oFrom=="last"){
				if(iFocusIdx >= objTab.items.length || oFrom == "last")
					ur_IScr_toBegin(sTabStripId);
				else
					ur_IScr_toNextItem(sTabStripId);
			}
		}
	}
	if (bPrev) {
		if(evt.keyCode == 33 || evt.keyCode == 34)
		{
			if(iFocusIdx > 0)
				ur_IScr_toPrevPage(sTabStripId);
		}
		else if(evt.keyCode == 36 || evt.keyCode == 35)
		{
			if(iFocusIdx > 0)
				ur_IScr_toBegin(sTabStripId);
		}
		else if(evt.keyCode==39 || evt.keyCode==37){
			if(iFocusIdx < objTab.first || oFrom=="first"){
			   if(oFrom=="first" || iFocusIdx<0)
			      ur_IScr_toEnd(sTabStripId);
			   else
			   	ur_IScr_toPrevItem(sTabStripId);
			}
		}
	}
	try{
		ur_EVT_addParam(evt,"FirstVisibleItemIdx",objTab.first);
	}catch(ex){};
}
function ur_TS_setTabIdx(sId,iOldFocIdx,iNewIndex)
{
	var oTabScrl = ur_get(sId);
	var iselIdx = oTabScrl.getAttribute("sidx");
	if (ur_IScr[sId] == null) ur_IScr_getObj(sId);
	var oScrl = ur_IScr[sId];
	
	if(!isNaN(iOldFocIdx))
	{
		
		if(iNewIndex == -1) 
		{
			iNewIndex  = iselIdx;
			if(!oScrl.items[iselIdx].visible)
			{
				sapUrMapi_setTabIndex(oScrl.items[oScrl.first][1],0);
				if(oScrl.first != iOldFocIdx)
					sapUrMapi_setTabIndex(oScrl.items[iOldFocIdx][1],-1);
				oTabScrl.setAttribute("fidx",oScrl.first);
			}
			else
			{
				sapUrMapi_setTabIndex(oScrl.items[iNewIndex][1],0);
				sapUrMapi_setTabIndex(oScrl.items[iOldFocIdx][1],-1);
				oTabScrl.setAttribute("fidx",iNewIndex);
			}
			
		}
		else{
			sapUrMapi_setTabIndex(oScrl.items[iOldFocIdx][1],-1);
			sapUrMapi_setTabIndex(oScrl.items[iNewIndex][1],0);
			oTabScrl.setAttribute("fidx",iNewIndex);
			oScrl.items[iNewIndex][1].focus();
		}
	}
}
function sapUrMapi_TabStrip_focusItem(sTabStripId,iFocusIdx,iTabCount,bNext,bPrev,evt){
	if (evt == null) {
		evt = window.event;
	}
	sapUrMapi_TabStrip_keySelect(sTabStripId, iFocusIdx, iTabCount,evt);
}
function sapUrMapi_TabStrip_enter (sId,e) {
	if (e.srcElement.id==sId+"-skipstart") {
		if (sapUrMapi_skip(sId+'-skipstart',sId+'-skipend',e)) return;
    if (!e.shiftKey) { 
		  if (sapUrMapi_checkKey(e,"keydown",new Array("9","39","37"))){
	        sapUrMapi_TabStrip_focusItem(sId);
	   
				ur_EVT_cancelBubble(e);
		  }
	  }
	}
}
function sapUrMapi_TabStrip_setActiveItem(sId,iIdx) {
		if (isNaN(iIdx)) return;
				
		if(ur_IScr[sId] == null)
			ur_IScr_getObj(sId);
		var oScrl = ur_IScr[sId];
		var obj	= ur_get(sId);
		
		if (obj != oScrl.Ref) {
			ur_IScr_getObj(sId);
			oScrl = ur_IScr[sId]
		}
		
		var sStdAdjust = (ur_system.browser_abbrev == "standards") ? " urBorderBox" : "";
		
		var iSelTab	= parseInt(obj.getAttribute("sidx"));
		var iTabLength	= parseInt(obj.getAttribute("ic"));
		
		if (oScrl.items[iIdx][1].getAttribute("st") != null && oScrl.items[iIdx][1].getAttribute("st").indexOf("d") >- 1) return false; 
		if ((iTabLength==1) || (iSelTab==iIdx)) return true; 
		
		var oCurrentTxt  = oScrl.items[iSelTab][1].firstChild;
		var oCurrentCell = oScrl.items[iSelTab][1];
		var oClickedTxt  = oScrl.items[iIdx][1].firstChild;
		var oClickedCell = oScrl.items[iIdx][1];
		
		var oCurrentContent  = ur_get(sId+"-cnt-"+iSelTab);
	  	var oClickedContent  = ur_get(sId+"-cnt-"+iIdx);
		
		var oCloseCurrent = ur_get(sId + "-itm-cl-" + iSelTab);
		var oCloseClicked = ur_get(sId + "-itm-cl-" + iIdx);
		
		var oBorders=oClickedContent.parentNode;
		var iBl=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderBottomWidth"));
		var iBr=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderRightWidth"));
		var iBt=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderTopWidth"));
		var iBb=parseInt(sapUrMapi_getCurrentStyle(oBorders,"borderBottomWidth"));
		
		oCurrentCell.className="urTbsLabelOff" + sStdAdjust; 
		oCurrentTxt.className = "urTbsTxtOff"; 
		oClickedTxt.className = "urTbsTxtOn"; 
	  	oClickedCell.className="urTbsLabelOn" + sStdAdjust; 
	  
		if (oCloseCurrent != null) oCloseCurrent.className = "urTbsCloseUnSel";
		if (oCloseClicked != null) oCloseClicked.className = "urTbsCloseSel";
	  
	  	sapUrMapi_setTabIndex(oCurrentCell,-1);
	  	sapUrMapi_setTabIndex(oClickedCell,0);
	  	
		obj.setAttribute("sidx",iIdx);
	  	obj.setAttribute("fidx",iIdx); 
	  
	  
    	if ( sapUrMapi_getCurrentStyle(oClickedContent.childNodes[0],"overflow") != "visible") {
  			oClickedContent.childNodes[0].style.height=sapUrMapi_sAddUnit( oClickedContent.parentNode.offsetHeight-iBt-iBb , "px" );
  			oClickedContent.childNodes[0].style.width=sapUrMapi_sAddUnit( oClickedContent.parentNode.offsetWidth-iBl-iBr , "px" );
		} else {
			if ( obj.getAttribute("exact") == "1") {
		    	oClickedContent.style.height=sapUrMapi_sAddUnit( oClickedContent.parentNode.offsetHeight-iBt-iBb , "px" );
		    	if ( !oClickedContent.style.width == "100%" )
		    		oClickedContent.style.width=sapUrMapi_sAddUnit( oClickedContent.parentNode.offsetWidth-iBl-iBr , "px" );
		  	}
		}
		
    	
    	
    	if ( UCF_UserAgent.bIsIE() ) {
			with ( oCurrentContent.style ) {
				overflow="hidden";
				position="absolute";
				top:"-1000px";
				left:"0px";
				visibility="hidden";
			}
			
			with ( oClickedContent.style ) {
				overflow="";
				position="";
				visibility="inherit";
			}
    	} 
		
		oCurrentContent.className = "urTSDsp";
		oClickedContent.className = "";  
		oClickedContent.style.visibility = "visible";
    	
		if(ur_get(sId+"-itm-cl-"+iIdx))
		{
			ur_get(sId+"-itm-cl-"+iIdx).className = "urTbsCloseSel";
		}
		if(ur_get(sId+"-itm-cl-"+iSelTab))
		{
			ur_get(sId+"-itm-cl-"+iSelTab).className = "urTbsCloseUnSel";
		}
	
	ur_setSt(oCurrentCell,ur_st.NOTSELECTED,true);
	ur_setSt(oCurrentCell,ur_st.SELECTED,false);
	ur_setSt(oClickedCell,ur_st.NOTSELECTED,false);
	ur_setSt(oClickedCell,ur_st.SELECTED,true);
	
	
   var bVisible=oScrl.items[iIdx].visible;
   if (!oScrl.items[iIdx].visible || !bVisible) {
     oScrl.first=iIdx;
     oScrl.last=-1;
     ur_IScr_draw(sId);
	} else {
		ur_TS_oadi(sId);
	}
	
  if (ur_system.is508 && ur_system.browser_abbrev == "ie6") {
	if(oClickedCell.style.display == "inline"){
	   sapUrMapi_refocusElement(oClickedCell.id);
	}else{
		sapUrMapi_refocusElement(oScrl.items[oScrl.first][1]);
	}
  }
	return true;
}
function ur_TS_cl(sId,evt)
  {
	var sElm = evt.srcElement;
	var bIdPresent = false;
	while(!bIdPresent)
	{	
		if(sElm.getAttribute('idx') !=null)
		{
			if (oScrl.items[param[1]][1].getAttribute("st")!=null && oScrl.items[param[1]][1].getAttribute("st").indexOf("d")>-1) return false; 
			ur_EVT_fire(ur_get(sId+'-scrl'),"otc");
			bIdPresent = true;
		}
		else{
			sElm = sElm.parentNode;
		}
	} 
	   
  }
	
function ur_TS_oadi(sId) {
  var oScrl = ur_IScr[sId];
	
	var iFirst = oScrl.first;
	
	var iLast = oScrl.last;
  if (oScrl.ref.getAttribute("scrl")!="1") {
    iFirst=0;
    iLast=parseInt(oScrl.ref.getAttribute("ic"))-1;
  }
  
	
	var iSel = parseInt(ur_get(oScrl.ref.id).getAttribute('sidx')); 
	
	for(i=iFirst;i<=iLast;i++) {
		var arrItems = oScrl.items[i];
		var oItemImage = arrItems[0];
		
		if(iFirst == i ) {
			if(iFirst != 0) { 
				if(iSel== i) 
					oItemImage.className = "urTbsFirstAngOnPrevOn";
				else
					oItemImage.className = "urTbsFirstAngOffPrevOn";
			} else {
				if(iSel== i) 
					oItemImage.className = "urTbsFirstAngOnPrevOff";
				else
					oItemImage.className = "urTbsFirstAngOffPrevOff";
			}
		} else { 
			if((i!=0 && iSel== i-1)) 
			  oItemImage.className = "urTbsAngOnOff"; 
			else if(iSel == i) 
				oItemImage.className = "urTbsAngOffOn";
			else 
				oItemImage.className = "urTbsAngOffOff";
		}
		
		if(iLast == i ) {
			var oLastImg=ur_get(oScrl.ref.id+"-n");
			if(iLast != (oScrl.items.length -1)) { 
				if(iSel== i) 
					oLastImg.className = "urTbsLastOnNextOn";
				else 
					oLastImg.className = "urTbsLastOffNextOn";
			} else {
				if(iSel== i)
					oLastImg.className = "urTbsLastOnNextOff";
				else 
					oLastImg.className = "urTbsLastOffNextOff";
			}
		}
	}
	
	if(ur_get(sId).getAttribute("scrl") == "1")
		ur_TS_setPagiButtonState(iFirst,iLast,sId);
	
}
function ur_TS_setPagiButtonState(iFirst,iLast,sId) {
  var oScrl = ur_IScr[sId];
  var oBtns = ur_get(sId + "-scrlBtns");	
  
  
  	if ( ur_IScr[sId].first == 0 && ur_IScr[sId].last == oScrl.items.length - 1 ){
		oBtns.style.visibility = "hidden";
		return;
	}
	else {
		if ( oBtns.style.visibility == "hidden" )
		   oBtns.style.visibility = "visible";
	}
  
	
	sapUrMapi_Paginator_setStates(sId+'-pg',new Array("","",UR_PAGINATOR_BUTTON.PREVIOUS_ITEM,UR_PAGINATOR_BUTTON.NEXT_ITEM,"",""),new Array("","",true,true,"",""));
	
	
	if(ur_IScr[sId].last == oScrl.items.length -1 || ur_IScr[sId].last == -1)
	{
		
		var arrBtn = new Array();
		arrBtn[3] = UR_PAGINATOR_BUTTON.NEXT_ITEM;
				
		var arrBtnState = new Array();
		arrBtnState[3] = false;
		
		sapUrMapi_Paginator_setStates(sId+'-pg',arrBtn,arrBtnState);
	}
    
	
	if(ur_IScr[sId].first == 0)
	{
		
		sapUrMapi_Paginator_setStates(sId+'-pg', new Array("","",UR_PAGINATOR_BUTTON.PREVIOUS_ITEM), new Array("","",false));
	}
}
function sapUrMapi_TabStripItem_keydown(sId,evt)
{
	if(evt.keyCode== 13)
	{
		var oR = ur_get(sId);
		if(oR.getAttribute("dbid")!=null)
		 {
			 sapUrMapi_triggerDefaultButton(sId,evt);
		 }
	 }	 
}

//** TextEdit.ie5 **

function sapUrMapi_TextEdit_focus(sId,oEvt){
	sapUrMapi_DataTip_show(sId,"focus");
}
function sapUrMapi_TextEdit_blur(sId,oEvt) {
	if(ur_get(sId) && ur_get(sId).getAttribute("chgFire") && ur_get(sId).getAttribute("chgFire") == "1")
	{
		ur_EVT_fire(ur_get(sId),'notifyChange',oEvt);
		ur_get(sId).setAttribute("chgFire","0");
	}
	sapUrMapi_DataTip_hide(sId);
}
function sapUrMapi_TextEdit_keydown(sId,oEvt) {
	
	if(oEvt.keyCode == "73" && sapUrMapi_bCtrl(oEvt) && oEvt.shiftKey && !oEvt.altKey ){
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
		ur_EVT_cancel(oEvt);
	}
	if( (ur_get(sId).getAttribute('rc')) == '1') 
	{
		var iMaxLength = parseInt(ur_get(sId).getAttribute('cc'));
		
		if(ur_TE_getCorrectLength(ur_get(sId).value) == iMaxLength)
		{
			
			if(oEvt.keyCode == 8 
			|| (oEvt.keyCode==86 && sapUrMapi_bCtrl(oEvt)) 
			|| (oEvt.keyCode==88 && sapUrMapi_bCtrl(oEvt)) 
			|| (oEvt.keyCode==89 && sapUrMapi_bCtrl(oEvt)) 
			|| (oEvt.keyCode==90 && sapUrMapi_bCtrl(oEvt))
			|| (oEvt.keyCode==65 && sapUrMapi_bCtrl(oEvt))
			|| (document.selection && document.selection.createRange().text.length>0)
			) {
				if (oEvt.keyCode==90 && sapUrMapi_bCtrl(oEvt)) { 
					ur_callDelayed("ur_TE_restrictChar('"+sId+"')",0);
				}
  			return true;
			}
		}
		
		
		if(oEvt.keyCode==13){
		  iMaxLength = iMaxLength -1;
		}		
		
		if(ur_TE_getCorrectLength(ur_get(sId).value) >= iMaxLength && ur_TE_checkValidKey(oEvt))
		{
				ur_EVT_cancel(oEvt);
		}
		
	}
	if(oEvt.keyCode == "27"){
		sapUrMapi_DataTip_hide(sId);
		ur_EVT_cancel(oEvt);
	}
}
function ur_TE_checkValidKey(oEvt)
{
	switch(oEvt.keyCode)
	{
		case 37: 
		case 39: 
		case 38: 
		case 40: 
		case 46: 
		case 45: 
		case 16: 
		case 17: 
		case 9: 
		case 33:
		case 34:
		case 35:
		case 36:
			return false;
			break;
		default:
			return true;
	}
}
function ur_TE_KeyUp(sId,oEvt)
{
     if (ur_system.browser_abbrev == "ie6") {
	ur_EVT_fire(ur_get(sId),'notifyKeyUp',oEvt);
     } else {
	ur_TE_restrictChars(sId,oEvt);
	ur_EVT_fire(ur_get(sId),'notifyKeyUp');
     }
}
function ur_TE_Change(sId, oEvt)
{
    if (ur_system.browser_abbrev == "ie6") {
	ur_EVT_fire(ur_get(sId),'notifyChange',oEvt);
    } else {
        ur_EVT_fire(ur_get(sId),'notifyChange');
    }
}
function ur_TE_onPaste(sId,oEvt)
{
	
	if( (ur_get(sId).getAttribute('rc')) == '1') 	
	{
           if (ur_system.browser_abbrev == "ie6") {
		ur_callDelayed("ur_TE_restrictChar('"+sId+"')",0);
		ur_get(sId).setAttribute("chgFire","1");
           } else {
                ur_callDelayed("ur_TE_restrictChars('"+sId+"','"+oEvt+"')",1000);
           }
	}
}
function ur_TE_getCorrectLength(txtValue)
{
	  if (txtValue.indexOf('\r\n')!=-1)
	    ; 
	  else if (txtValue.indexOf('\r')!=-1)
	    txtValue=txtValue.replace ( /\r/g, "\r\n" ); 
	  else if (txtValue.indexOf('\n')!=-1)
	     txtValue=txtValue.replace ( /\n/g, "\r\n" ); 
		return txtValue.length;
}
function ur_TE_restrictChar( sId ) 
{
	var oTextEdt = ur_get(sId), 
		txtValue=oTextEdt.value,
		lineBreakCount = 0,
		charCount = parseInt(oTextEdt.getAttribute('cc'));
	if(txtValue != "" && ur_TE_getCorrectLength(txtValue) >= charCount) {
		txtValue = txtValue.substr(0,charCount);
		
		
		
	  if (txtValue.indexOf('\r\n')!=-1)
	    lineBreakCount = 0; 
	  else if (txtValue.indexOf('\r')!=-1)
	    lineBreakCount = (txtValue.split(/\r/g).length - 1); 
	  else if (txtValue.indexOf('\n')!=-1)
	    lineBreakCount = (txtValue.split(/\n/g).length - 1); 
		if (lineBreakCount > 0 ) txtValue = txtValue.substr(0,charCount-lineBreakCount);
		oTextEdt.value = txtValue;
	}	
}
function ur_TE_setCursorTop(sId)
{
var d=document, ta, rng;
if(d.all){
	ta=d.all[sId];
	if(ta && ta.createTextRange){
		rng=ta.createTextRange();
		rng.collapse(true);
		rng.select();
		}
	}
}
function ur_TE_setCursorBottom(sId)
{
var d=document, ta, rng;
if(d.all){
	ta=d.all[sId];
	if(ta && ta.createTextRange){
		rng=ta.createTextRange();
		rng.collapse(false);
		rng.select();
		}
	}
}
function ur_TE_getCursorPosition(o)
{
	var CaretPos = 0;
	
	if (document.selection) {
		o.focus ();
		var Sel = document.selection.createRange ();
		Sel.moveStart ('character', -o.value.length);
		CaretPos = Sel.text.length;
	}
	
	else if (o.selectionStart || o.selectionStart == '0')
		CaretPos = o.selectionStart;
	return (CaretPos);
}
function ur_TE_setCursorPosition(o, pos)
{
	if(o.setSelectionRange)
	{
		o.focus();
		o.setSelectionRange(pos,pos);
	}
	else if (o.createTextRange) {
		var range = o.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
}

//** TextView.ie5 **

function sapUrMapi_TextView_menuActivate(sTextViewId,e) {
	var o=ur_get(sTextViewId);
	if (sapUrMapi_checkKey(e,"keydown",new Array("32","40"))) {
		if(o.onclick) {o.onclick();return false;} 
		if(o.oncontextmenu) {o.oncontextmenu();return false;} 
		if(o.onmouseover) {o.onmouseover();return false;} 
	}
  return false;
}
//** Toolbar.ie5 **

function sapUrMapi_Toolbar_toggleItems(sControlId,e) {
  if((e.type == "keydown" && e.keyCode==32) || e.type == "click") {
  
	  var oToggleButton = ur_get(sControlId+"-tgl");
	  var oToolbar = ur_get(sControlId);
	  var colItems = oToolbar.childNodes;
	  if (ur_system.browser_abbrev == "ie6") ur_EVT_cancel(e);
		
	  var bShowAllState = oToggleButton.getAttribute("showall")=="true";
	  for (var n=0;n<colItems.length;n++) {
	  	var oItem=colItems.item(n);
	  	if (oItem.nodeType!=3) {
		  	if (oItem.getAttribute("cancollapse")=="true") {
		  	  if (bShowAllState) {
		  		  oItem.style.display="none";
		  		  oItem.setAttribute("show","false");
		      } else {
		    	  oItem.style.display="inline";
		  		  oItem.setAttribute("show","true");
		    	}
		    }
		  }
	    if (oItem==oToggleButton) break;
		}
	  if (bShowAllState) {
	    oToggleButton.setAttribute("showall","false");
	    oToggleButton.className="urBtnStd urTBtnCol";
	    oToggleButton.title=getLanguageText("SAPUR_T_BTN_E");
	    if(ur_system.is508)
		oToggleButton.setAttribute("t",getLanguageText("SAPUR_T_BTN_E"));
	  } else {
	    oToggleButton.setAttribute("showall","true");
	    oToggleButton.className="urBtnStd urTBtnExp";
	    oToggleButton.title=getLanguageText("SAPUR_T_BTN_C");
	    if(ur_system.is508)
		oToggleButton.setAttribute("t",getLanguageText("SAPUR_T_BTN_C"));
	    
	  }
  }
  else {
	return;
  }
}

//** ToolbarButton.ie5 **
function sapUrMapi_ToolbarButton_openMenu( sButtonId, e){
	var sPopupId = ur_get(sButtonId).getAttribute("popup");
	if (ur_get(sPopupId)==null) return;
	
	if (ur_get(sButtonId+"-r") && ur_get(sButtonId+"-r").getAttribute("replaceable") && ur_get(sButtonId+"-r").getAttribute("replaceable")=="true") {
	  ur_replace_function=true;
	  ur_replace_function_button_id=sButtonId;
	}
	
	if (ur_system.direction=="rtl")
 	  sapUrMapi_PopupMenu_showMenu(sButtonId,sPopupId,sapPopupPositionBehavior.MENULEFT,e);
 	else
 	  sapUrMapi_PopupMenu_showMenu(sButtonId,sPopupId,sapPopupPositionBehavior.MENURIGHT,e);
  	
	e.cancelBubble=false;
	
	if ((e.type=="contextmenu")) {
    	e.returnValue=false;
  } else {
    	e.returnValue=true;
  }
}
function sapUrMapi_ToolbarButton_setFunctionFromMenuItem(sMenuItemId) {
	
	return;
	
  if (ur_replace_function) {
  	var clickedItem = ur_get(sMenuItemId);
    var sImgSrc=""
    if (clickedItem.getElementsByTagName("img").length>0) {
      sImgSrc=clickedItem.getElementsByTagName("img").item(0).src;
    }
    var sText=clickedItem.innerText;
    var effectedButtonId=ur_replace_function_button_id;
    ur_replace_function_button_id="";
    ur_replace_function=false;
    sapUrMapi_ToolbarButton_applyFunction( effectedButtonId, sText, sImgSrc, clickedItem.onclick);
  }
}
function sapUrMapi_ToolbarButton_applyFunction( sButtonId, sNewText, sNewImageSrc, fNewClickHandler){
	
	return;
  var oButton = ur_get(sButtonId),
  	  oRootElement = ur_get(sButtonId + "-r"),
  	  bHasTxt = (oRootElement.getAttribute("notext")=="true") ? false : true,
	  oButtonIcon = ur_get(sButtonId + "-Icon");
	
  if (fNewClickHandler && fNewClickHandler != "") {
	  oButton.onclick = fNewClickHandler;
	  oButton.onkeydown = fNewClickHandler;
  }
  if (bHasTxt && sNewText && sNewText != "") { 
  	 var oTxtNode = sapUrMapi_ToolbarButton_getText(oRootElement, sButtonId);
	 if (oTxtNode) {
	 	oTxtNode.nodeValue = sNewText;
	 }
  }
  
  if (oButtonIcon) {
	if (sNewImageSrc == "") {
		oButtonIcon.src =  ur_system.mimepath + "1x1.gif";
	} else {
		oButtonIcon.src = sNewImageSrc;
	}
  }
}
 
function sapUrMapi_ToolbarButton_getText(oRootElement, sButtonId) {
	var oButtom = ur_get(sButtonId),
		oTextNode = oButtom.childNodes.item(0);
	
	if (oTextNode && oTextNode.nodeType == 3) {
		return oTextNode;
	}
	
	if (oRootElement.tagName == "SPAN") {
	  	oRootElement = oRootElement.firstChild;
	}
	
	var aChildren = oRootElement.childNodes;
	
	if (!aChildren || aChildren == "") {
		return "";
	}
	
	for (var i = 0; i < aChildren.length; i++) {
		
		if (aChildren[i].nodeType == "3") {
			return aChildren[i];
		}
	}
}
function sapUrMapi_ToolbarButton_keydown(sButtonId,e)
{
	var o=ur_get(sButtonId);
	while (o.getAttribute("ct")!="TB") {
	  o=o.parentNode;
	} 
	 if (ur_isSt(o,ur_st.DISABLED)) return;
	var attr_tp=o.getAttribute("tp");	
	if((attr_tp=="MNUSEC") || (attr_tp=="MNU"))
	{
		if(e.altKey && e.keyCode==40)
		{
		  sapUrMapi_ToolbarButton_openMenu(o.id,e);
		}
	}
	if ((e.type!="click")&&(e.type!="contextmenu")) {
		if (!sapUrMapi_checkKey(e,"keypress",new Array("32","40"))) {
	    e.cancelBubble=true;
	    e.returnValue=true;
		  return false;
		}
	}
	if (e.keyCode==32) return ur_EVT_fire(o,"ocl",e);
}

//** ToolbarInputField.ie5 **

function sapUrMapi_ToolbarInputField_blur(sId,event){
	sapUrMapi_InputField_Blur(sId,event);
}
function sapUrMapi_ToolbarInputField_keydown(sId,oEvt) {
	
	if(oEvt.keyCode == "73" && sapUrMapi_bCtrl(oEvt) && oEvt.shiftKey && !oEvt.altKey ){
		ur_EVT_cancel(oEvt);
		if (sapUrMapi_DataTip_isOpen(sId)) sapUrMapi_DataTip_hide(sId);
		else sapUrMapi_DataTip_show(sId,"keydown");
	}
	if(oEvt.keyCode == "27"){
		ur_EVT_cancel(oEvt);
		sapUrMapi_DataTip_hide();
	}
}

//** Tray.ie5 **

function sapUrMapi_Tray_RegisterCreate(sId, bScroll, bCollapsed) {
	
}
function sapUrMapi_Tray_create(sId,bScroll,bCollapsed) {
}
function sapUrMapi_Tray_showOptionMenu2(sTrayId,sMenuContentId,oEvt) {
 	if (ur_system.direction=="rtl")
	  sapUrMapi_Tray_showOptionMenu(sTrayId,sTrayId+"-menu",sMenuContentId,sapPopupPositionBehavior.MENULEFT,oEvt) 
	else
	  sapUrMapi_Tray_showOptionMenu(sTrayId,sTrayId+"-menu",sMenuContentId,sapPopupPositionBehavior.MENURIGHT,oEvt) 
}
function sapUrMapi_Tray_showOptionMenu(sTrayId,sTriggerId,sMenuContentId,enumPositionBehavior,e) {
	if (e.type!="click") {
		if (!sapUrMapi_checkKey(e,"keydown",new Array("32","40"))) {
		  return false;
	  } else {
		  ur_EVT_cancel(e);
		}
	}
	sapUrMapi_PopupMenu_showMenu(sTriggerId,sMenuContentId,enumPositionBehavior,e);
}
function sapUrMapi_Tray_toggle(sTrayId,e)
{
	ur_EVT_cancelBubble(e);
	var elBody = ur_get(sTrayId+"-bd"); 
	var elHeader = ur_get(sTrayId+"-hd");
	var oTray = ur_get(sTrayId);
	var elExp = ur_get(sTrayId+"-exp");
	if ( elBody != null && elExp != null )
	{
		var sScrollMode = elBody.getAttribute("scrlMode"),
			iHeight = elBody.getAttribute("cntHeight"),
			oTbar = ur_get(sTrayId+"-tbar"),
			oTbody = ur_get(sTrayId+"-height");
		if ( elBody.style.visibility == "hidden" )
		{
			if (oTbar != null) oTbar.style.display = "block";
			elBody.style.visibility = "inherit";
			elBody.style.overflow = sScrollMode;
			
			if (ur_system.browser_abbrev == "nn7") {
				if (sScrollMode != "visible") {
						elBody.style.height = sapUrMapi_sAddUnit( iHeight , "px" );
				} else {
					elBody.style.height = "100%";
				}
			}
			
			else if (ur_system.browser_abbrev != "nn7" && ur_system.browser_abbrev != "standards") {
				
				if (sScrollMode != "visible") {
					elBody.style.height = "100%";
				} else {
					
					elBody.style.height = "";
				}
			}
			
			else if (ur_system.browser_abbrev == "standards") {
				if (sScrollMode == "visible") {
					elBody.style.height = "auto";
				} else {
					elBody.style.height = sapUrMapi_sAddUnit( iHeight , "px" );
				}
			}
	
			if (sScrollMode != "visible") {
				elBody.style.padding = "0 0 0 10px";
			} else {
				elBody.style.padding = "";
			}
			
			oTbody.parentNode.className = oTbody.parentNode.className.replace(" urTryCTransBody", "");
			oTbody.style.height = sapUrMapi_sAddUnit( iHeight , "px" );
			
			ur_setSt(oTray,ur_st.COLLAPSED,false);
			ur_setSt(oTray,ur_st.EXPANDED,true);
			sapUrMapi_Focus_showFocusRect();
			if (elExp.className.indexOf("Closed") != -1)
			{
				var re = /Closed/gi;
				var clsNm = elExp.className;
				
				elExp.className = clsNm.replace(re, "Open");
			}
			if (elHeader.className == "urTrcHdBgClosedIco" ) elHeader.className = "urTrcHdBgOpenIco";
			elExp.title=getLanguageText("SAPUR_TY_BTNE");
			sapUrMapi_refocusElement(oTray);
		} 
		else
		{
			if (oTbar != null) oTbar.style.display = "none";
			elBody.style.overflow = "hidden";
			elBody.style.height = "1px";
			oTbody.style.height = "1px";
			oTbody.parentNode.className = oTbody.parentNode.className + " urTryCTransBody";
			elBody.style.visibility = "hidden";
			elBody.style.padding = "0px";
			
			ur_setSt(oTray,ur_st.COLLAPSED,true);
			ur_setSt(oTray,ur_st.EXPANDED,false);
			sapUrMapi_Focus_showFocusRect();
			if (elExp.className.indexOf("Open") != -1)
			{
				var re = /Open/gi;
				var clsNm = elExp.className;
				
				elExp.className = clsNm.replace(re, "Closed");
				
			}
			if (elHeader.className == "urTrcHdBgOpenIco" ) elHeader.className = "urTrcHdBgClosedIco";
			elExp.title=getLanguageText("SAPUR_TY_BTNC");
			sapUrMapi_refocusElement(oTray);
		}
	}
	return true;
}
function sapUrMapi_Tray_keydown(sTrayId,e)
{
	var elBody = ur_get(sTrayId+"-tbd"); 
	var elHeader = ur_get(sTrayId+"-hd");
	var oSkip=document.getElementById(sTrayId);
	var sCt=ur_EVT_src(e).ct;
	
	if(e.keyCode==107 && !ur_isSt(oSkip,ur_st.DISABLED) && ur_isSt(oSkip,ur_st.COLLAPSED) && sCt=="TY")
	 {
		sapUrMapi_Tray_toggle(sTrayId,e);
		sapUrMapi_DBTN_showDBtn();
		return true;
	 }
	 
	 else  if(e.keyCode==109 && !ur_isSt(oSkip,ur_st.DISABLED) && ur_isSt(oSkip,ur_st.EXPANDED) && sCt=="TY")
	 {
			sapUrMapi_Tray_toggle(sTrayId,e);
			sapUrMapi_DBTN_hideDBtn(); 
			return true;
	 }
	  else if(e.keyCode== 13)
	 {
		sapUrMapi_triggerDefaultButton(sTrayId,e);
	 }	 
	 else
		return sapUrMapi_skip(sTrayId,e);	
     
}

//** Tree.ie5 **

function sapUrMapi_Tree_collapseAll(sTreeId) {
    var eRootNode = ur_get(sTreeId + "-r");
    var eNodes = eRootNode.getElementsByTagName("DIV");
    
    for (var i =  eNodes.length-1; i >-1; i--){
      if (ur_getAttD(eNodes[i],"tp","").indexOf("F")>-1) {
        sapUrMapi_Tree_toggle( sTreeId, eNodes[i].id, true, true)
      }
    }
}
function sapUrMapi_Tree_expandAll(sTreeId) {
    var eRootNode = ur_get(sTreeId + "-r");
    var eNodes = eRootNode.getElementsByTagName("DIV");
    
    for (var i =  eNodes.length-1; i >-1; i--){
      if (ur_getAttD(eNodes[i],"tp","").indexOf("F")>-1) {
        sapUrMapi_Tree_toggle( sTreeId, eNodes[i].id, false, true)
      }
    }
}
function sapUrMapi_Tree_toggle( sTreeId, sNodeId, bClose, bKey) {
	var nodeDiv = ur_get(sNodeId);
  var oMainContainerNode = ur_get(sTreeId+"-r");
  var oEvt = window.event;
  if (oEvt) ur_EVT_cancelBubble(oEvt);
  if (ur_isSt(nodeDiv,ur_st.DISABLED)) return;
  if (!bKey) {
    oMainContainerNode.setAttribute("focuced_id",sNodeId);
    try { sapUrMapi_Tree_focusNode(sTreeId,sNodeId); } catch (e) {};
	}
  var childrenDiv = ur_get( nodeDiv.id + "-child" );
  if (!childrenDiv) return;
	var expander = ur_get( nodeDiv.id + "-exp" );
	if ((ur_isSt(nodeDiv,ur_st.COLLAPSED) && !bKey)||(bKey && !bClose && ur_isSt(nodeDiv,ur_st.COLLAPSED)))
	{
	  nodeDiv.className = nodeDiv.className+" urTreNlExp";
		childrenDiv.style.display="block";
		
		
		eLength = expander.className.length;
		expander.className = expander.className.substr(0,eLength-3) + "Op";
    nodeDiv.setAttribute("st",nodeDiv.getAttribute("st").replace("-","+"));
    try { sapUrMapi_Tree_focusNode(sTreeId,sNodeId); } catch (e) {};
    return;
	}
	if ((ur_isSt(nodeDiv,ur_st.EXPANDED)&&!bKey)||(bKey && bClose && ur_isSt(nodeDiv,ur_st.EXPANDED)))
	{
		if (nodeDiv.className.lastIndexOf(" ")>-1) {
		  nodeDiv.className = nodeDiv.className.substring(0,nodeDiv.className.lastIndexOf(" "));
		}
		childrenDiv.style.display="none";
		eLength = expander.className.length;
		expander.className = expander.className.substr(0,eLength-2) + "Clo";
    nodeDiv.setAttribute("st",nodeDiv.getAttribute("st").replace("+","-"));
    try { sapUrMapi_Tree_focusNode(sTreeId,sNodeId); } catch (e) {};
		return;
	}
}
function sapUrMapi_Tree_focusNode(sTreeId,sNodeId,bInit,bNoFocus) {
	var oMainContainerNode = ur_get(sTreeId+"-r");
	var oR=ur_get(sTreeId+"-skipstart");
	if (sNodeId=="") return;
	if (sNodeId.indexOf("-skipstart")>0) return;
	var oNode = ur_get(sNodeId);
	if (bInit) oMainContainerNode.setAttribute("focuced_id",null);
	var sOldNode = oMainContainerNode.getAttribute("focuced_id");
	try {
		if (sOldNode) {
		  sapUrMapi_setTabIndex(ur_get(sOldNode),-1);
		}
  } catch (ex) {
  }
	oMainContainerNode.setAttribute("focuced_id",oNode.id);
	if(ur_system.is508) {
		var sTtTree=oMainContainerNode.getAttribute("tt");
		var sTt=oNode.getAttribute("tt");	
		var sAccTt="";
		}
	sapUrMapi_setTabIndex(oNode,0);
  try {
    if (!bNoFocus) ur_focus(oNode);
  } catch (ex) {}
  sapUrMapi_Focus_showFocusRect();
}
function sapUrMapi_TreeNode_keyDown(sTreeId,sNodeId,e) {
	if (sapUrMapi_checkKey(e,"keydown",new Array("32"))) {
		 
		 if (ur_isSt(ur_get(sNodeId),ur_st.DISABLED)) return;
		 oNodeEvents = ur_get(sNodeId);
		 if (oNodeEvents.onclick) {
		 	  oNodeEvents.onclick(e);
		 	  return true;
		 } else {
		 	
		 	ur_EVT_cancel(e);
		 }
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("121")) && e.shiftKey) { 
		oNodeEvents = ur_get(sNodeId);
		 if (oNodeEvents.oncontextmenu) {
		 	  oNodeEvents.oncontextmenu(e);
		 	  return true;
		 } else {
		 	
		 	ur_EVT_cancel(e);
		 }
	}
	if (sapUrMapi_checkKey(e,"keydown",new Array("38","39","40","37","9","107","109","106"))) {
		sapUrMapi_Tree_keyDown(sTreeId,e)
  }
}
function sapUrMapi_TreeNode_hover(sTreeId,sNodeId,bIn,e) {
	if ((ur_EVT_src(e).getAttribute("level")) && (!ur_EVT_src(e).getAttribute("container"))) {
	  var sClass="urTreNoEnbl";
	  if (ur_EVT_src(e).getAttribute("clickable")=="true") {
	    sClass+="Clk";
	  }
    if (bIn) ur_EVT_src(e).className=sClass+" urTreNoEnblClkHover"
    else ur_EVT_src(e).className=sClass;
  }
}
function sapUrMapi_TreeNode_mouseover(sTreeId,sNodeId,e) {
	sapUrMapi_TreeNode_hover(sTreeId, sNodeId, true, e);
}
function sapUrMapi_TreeNode_mouseout(sTreeId,sNodeId,e) {
	sapUrMapi_TreeNode_hover(sTreeId, sNodeId, false, e);
}
function sapUrMapi_Tree_enter (sTreeId,e) {
	
	
	var oFocusedNode=null;
	if (ur_EVT_src(e).id==sTreeId+"-skipstart") {
	  var oMainContainerNode = ur_get(sTreeId+"-r");
		
		
		if (ur_get(sTreeId+"-skipstart").getAttribute("exit")=="true") {
			ur_get(sTreeId+"-skipstart").setAttribute("exit","false");
			var sFocusedNode= oMainContainerNode.getAttribute("focuced_id");
		  if (sFocusedNode!="") {
		  	 oFocusedNode=ur_get(sFocusedNode);
			   sapUrMapi_setTabIndex(oFocusedNode.lastChild,-1);
		  }
		} else {
			
		  var sFocusedNode= oMainContainerNode.getAttribute("focuced_id");
		  if (sFocusedNode) {
				 oFocusedNode=ur_get(sFocusedNode);
		  } else {
		  	 var nodelist= oMainContainerNode.getElementsByTagName("DIV");
		  	 for (var nlc=0;nlc<nodelist.length;nlc++) {
		  	   if (nodelist.item(nlc).getAttribute("sellevel")=="1") {
		  	     oFocusedNode=nodelist.item(nlc);
		  	     break;
		  	   }
		  	 }
		     if (oFocusedNode==null) {
		       var nodelist=oMainContainerNode.getElementsByTagName("DIV");
		  	   oFocusedNode=nodelist.item(0);
		  	   if (oFocusedNode.id.indexOf("-")>0) {
		  	     oFocusedNode=oFocusedNode.childNodes.item(0);
		  	   }
			}
			}
			sapUrMapi_Tree_focusNode(sTreeId,oFocusedNode.id,true);
	  }
	} else {
		
		var oLastElement=ur_get(sTreeId+"-skipend")
		if (oLastElement.getAttribute("exit")=="true") {
			
			
			oLastElement.setAttribute("exit","false");
		} else {
			ur_focus(ur_get(sTreeId+"-skipstart"));
	  }
	}
}
function sapUrMapi_Tree_expandNode(sTreeId,o,sMainContainerNode) {
	if (o && ur_getAttD(o,"tp","").indexOf("F")>-1 && ur_isSt(o,ur_st.COLLAPSED) && !ur_isSt(o,ur_st.DISABLED)) {
		sapUrMapi_Tree_toggle(sTreeId,o.id,false,true);
  }
}
function sapUrMapi_Tree_collapseNode(sTreeId,o, sMainContainerNode) {
	if (o && ur_getAttD(o,"tp","").indexOf("F")>-1 && !ur_isSt(o,ur_st.COLLAPSED) && !ur_isSt(o,ur_st.DISABLED)) {
		sapUrMapi_Tree_toggle(sTreeId,o.id,true,true);
  }
}
function sapUrMapi_Tree_keyDown(sTreeId,e) {
  var oFocusedNode=null;
  var oMainContainerNode = ur_get(sTreeId+"-r");
  var sFocusedNode= oMainContainerNode.getAttribute("focuced_id");
  if (sFocusedNode!="") {
  	 oFocusedNode=ur_get(sFocusedNode);
  }
  if (sapUrMapi_checkKey(e,"keydown",new Array("38","39","40","37","9","32","107","109","106"))) {
  	if (e.keyCode==9) { 
  		if (!e.shiftKey) {
  			oLastElement = ur_get(sTreeId+"-skipend");
  			oLastElement.setAttribute("exit","true");
  			ur_focus(oLastElement);
	  		ur_EVT_cancel(e);
	  		return;
  		} else {
  			oFirstElement = ur_get(sTreeId+"-skipstart");
  			oFirstElement.setAttribute("exit","true");
  			ur_focus(oFirstElement);
	  		ur_EVT_cancel(e);
	  		return;
  		}
  	}
  	if (e.keyCode==40) { 
		  if (!oFocusedNode) {
	  	  oFocusedNode=oMainContainerNode.childNodes.item(0);
		  } else {
		  	if (ur_isSt(oFocusedNode,ur_st.EXPANDED) || ur_getAttD(oFocusedNode,"tp","").indexOf("L")>-1) { 
		  	  oNextContainer = ur_get(oFocusedNode.id+"-child");
		  	  if (oNextContainer && oFocusedNode.nextSibling.firstChild) oFocusedNode=oFocusedNode.nextSibling.childNodes.item(0);
          else if (oNextContainer && oFocusedNode.nextSibling.nextSibling) oFocusedNode=oFocusedNode.nextSibling.nextSibling; 
          else if (!oNextContainer && oFocusedNode.nextSibling) oFocusedNode=oFocusedNode.nextSibling; 
          else if (oFocusedNode.parentNode !=oMainContainerNode)
			  	     { 
				  	     	oParent = oFocusedNode.parentNode.previousSibling;
				  	     	while ((!oParent.nextSibling.nextSibling) && (oParent.parentNode!=oMainContainerNode)) {
				  	     		 oParent=oParent.parentNode.previousSibling;
				  	     	}
				  	     	if (oParent.nextSibling.nextSibling) {
				  	     		oFocusedNode=oParent.nextSibling.nextSibling;
				  	     	}
			  	     }
			  } else {
		  		if (ur_isSt(oFocusedNode,ur_st.COLLAPSED) || ur_getAttD(oFocusedNode,"tp","").indexOf("L")) {
			  		if (oFocusedNode.nextSibling.nextSibling) {
				  	  oFocusedNode=oFocusedNode.nextSibling.nextSibling;
			  		} else { 
		  	     	oParent = oFocusedNode;
		  	     	while ((!oParent.nextSibling.nextSibling) && (oParent.parentNode!=oMainContainerNode)) {
		  	     		 oParent=oParent.parentNode.previousSibling;
		  	     	}
		  	     	if (oParent.nextSibling.nextSibling) {
		  	     		oFocusedNode=oParent.nextSibling.nextSibling;
		  	     	}
			  		}
		  		}
		  	}
		  }
		}
		if (e.keyCode==39) { 
		  if (ur_system.direction=="rtl") {
		    sapUrMapi_Tree_collapseNode(sTreeId,oFocusedNode,oMainContainerNode);
		  } else {
		    sapUrMapi_Tree_expandNode(sTreeId,oFocusedNode,oMainContainerNode)
		  }
		}
		if (e.keyCode==37) { 
		  if (ur_system.direction=="rtl") {
		    sapUrMapi_Tree_expandNode(sTreeId,oFocusedNode,oMainContainerNode)
		  } else {
		    sapUrMapi_Tree_collapseNode(sTreeId,oFocusedNode,oMainContainerNode);
		  }
		}
		if (e.keyCode==109) { 
		  sapUrMapi_Tree_collapseNode(sTreeId,oFocusedNode,oMainContainerNode);
		}
		if (e.keyCode==107) { 
		  sapUrMapi_Tree_expandNode(sTreeId,oFocusedNode,oMainContainerNode);
		}
		if (e.keyCode==106) { 
			sapUrMapi_Tree_collapseAll(sTreeId);
			return;
		}
		if (e.keyCode==38) { 
		  if (!oFocusedNode) {
			  oFocusedNode=oMainContainerNode.childNodes.item(0);
		  } else {
			  oParent = oFocusedNode.parentNode;
	    	if (oFocusedNode != oMainContainerNode.childNodes.item(0)) {
		    	if (oFocusedNode==oParent.childNodes[0]) {
		    		if (oParent==oMainContainerNode) {
		    			oFocusedNode=oParent.lastChild;
				  		while ((oFocusedNode.id.indexOf("-child")>-1)&&(ur_isSt(oFocusedNode.previousSibling,ur_st.COLLAPSED)||ur_getAttD(oFocusedNode.previousSibling,"tp","").indexOf("L")>-1)) {
				  		  oFocusedNode=oFocusedNode.previousSibling;
				  		}
				  		while ((oFocusedNode.id.indexOf("-child")>-1)&&(ur_isSt(oFocusedNode.previousSibling,ur_st.EXPANDED)||ur_getAttD(oFocusedNode.previousSibling,"tp","").indexOf("L")>-1)) {
				  		  oFocusedNode=oFocusedNode.lastChild;
				  		}
		    		} else {
			  		  oFocusedNode=oParent.previousSibling;
						}
					} else {
							oFocusedNode=oFocusedNode.previousSibling;
							while ((oFocusedNode.id.indexOf("-child")>-1)&&(ur_isSt(oFocusedNode.previousSibling,ur_st.COLLAPSED) || !oFocusedNode.lastChild)) {
								oFocusedNode=oFocusedNode.previousSibling;
							}
							while ((oFocusedNode.id.indexOf("-child")>-1)&&(ur_isSt(oFocusedNode.previousSibling,ur_st.EXPANDED)) && oFocusedNode.lastChild) {
								oFocusedNode=oFocusedNode.lastChild;
							}
					}
				}
			}
	  }
		ur_EVT_cancel(e);
  		
	  	if (sTreeId && oFocusedNode) {
			sapUrMapi_Tree_focusNode(sTreeId,oFocusedNode.id);
		}
		
		if (ur_system.is508 && oFocusedNode) {
			  sapUrMapi_refocusElement(oFocusedNode.id);
		}
  }
}
function sapUrMapi_Tree_controlExit(sTreeId, sNodeId,e) {
	var oContainer = ur_get(sNodeId+"-cnt-start");
  sapUrMapi_setTabIndex(oContainer,-1); 
  oContainer.onkeydown=null;  
  														
  oContainer.title = ""
  var oNode=ur_get(sNodeId);  														
	sapUrMapi_setTabIndex(oNode.lastChild,0);
	sapUrMapi_setTabIndex(ur_get(sNodeId+"-cnt-end"),-1);
	ur_get(sNodeId+"-cnt-end").title="";
	sapUrMapi_Tree_focusNode(sTreeId,sNodeId)
	ur_EVT_cancel(e);
}
function sapUrMapi_Tree_ignoreControlEvents() {
	ur_EVT_cancel(event);
}
function sapUrMapi_Tree_controlEnter(sTreeId, sNodeId,e) {
	var oControlExitPoint = ur_get(sNodeId+"-cnt-end");
	var oControlEventer   = ur_get(sNodeId+"-cnt-start");
	var sAllowTag=",INPUT,SELECT,TEXTAREA,";
	var sEvType = ur_EVT_src(e).type;
	if (sAllowTag.indexOf(","+ur_EVT_src(e).tagName+",")>-1) {
	  
		sapUrMapi_Tree_focusNode(sTreeId,sNodeId,true,true);
		sapUrMapi_setTabIndex(oControlExitPoint,0);
		sapUrMapi_setTabIndex(oControlEventer,0);
		if(sEvType.indexOf("select")>-1){
			ur_focus(ur_EVT_src(e).options[0]);
		}else{
			ur_focus(ur_EVT_src(e));
		}
		oControlEventer.onkeydown=sapUrMapi_Tree_ignoreControlEvents; 
		return true;
	}
	if (oControlExitPoint) {
		sapUrMapi_setTabIndex(oControlExitPoint,0);
		sapUrMapi_setTabIndex(oControlEventer,0);
		oControlExitPoint.title = getLanguageText("SAPUR_TREE_ITEM_CONTAINER_END");
		oControlEventer.title   = getLanguageText("SAPUR_TREE_ITEM_CONT_SELECTED");
		ur_focus(oControlEventer);
		oControlEventer.onkeydown=sapUrMapi_Tree_ignoreControlEvents; 
		ur_EVT_cancelBubble(e);
		
		return true;
	}
	return false;
}
function sapUrMapi_Tree_getNodeId(sId) {
	var o=ur_get(sId);
	while (o.tagName!="BODY") {
		if (o.tagName=="DIV" && ((String(o.getAttribute("tp")).indexOf("F")>-1) || (String(o.getAttribute("tp")).indexOf("L")>-1))) return o.id;
		o=o.parentNode;
	}
	return "";
}
function sapUrMapi_Tree_selectNode(sTreeId, sNodeId, iSelLevel) {
	var oNode   = ur_get(sNodeId);
	var bExp    = oNode.className.indexOf("urTreNlExp")>0;
	var sClass = oNode.className.substring(0,oNode.className.indexOf(" "));
	if (sClass=="") var sClass = oNode.className;
	oNode.setAttribute("sellevel",""+iSelLevel);
	ur_get(sNodeId+"-cnt-start").setAttribute("sellevel",""+iSelLevel);
	if (iSelLevel==1) sClass+=" urTreNSel";
	if (iSelLevel==2) sClass+=" urTreNSel2";
	if (bExp) sClass+=" urTreNlExp";
	oNode.className=sClass;
}
function sapUrMapi_Tree_deselectAll(sTreeId) {
	var colNodes   = document.getElementsByTagName("DIV");
	for (var n=0;n<colNodes.length;n++) {
		if (colNodes.item(n).sellevel) sapUrMapi_Tree_selectNode(sTreeId,colNodes.item(n).id,0);
	}
}
function sapUrMapi_Tree_showMenu(sTreeId,sNodeId,sPopupMenuId,oEvt) {
	sapUrMapi_Tree_focusNode(sTreeId,sNodeId);
	o=ur_get(sNodeId);
   
  if (oEvt.type=="keydown") {
	  sapUrMapi_PopupMenu_showMenu(sNodeId,sPopupMenuId,sapPopupPositionBehavior.MENULEFT,oEvt);
	  if (oPopup) {
	    oPopup.frame.object.style.top=sapUrMapi_sAddUnit( parseInt(oPopup.frame.object.style.top)-7+"px" , "px" );
	    oPopup.frame.object.style.left=sapUrMapi_sAddUnit( parseInt(oPopup.frame.object.style.left)+o.firstChild.offsetLeft+14+"px" , "px" );
	    
	  }
  } else { 
	sapUrMapi_PopupMenu_showMenu(sNodeId,sPopupMenuId,sapPopupPositionBehavior.EVENT,oEvt);
	}
	ur_EVT_cancel(oEvt);
}

//** TriStateCheckBox.ie5 **

function sapUrMapi_TriStateCheckBox_toggle(sId,e) {
  var o=ur_get(sId);
  var oImg=ur_get(sId+"-img");
  if (ur_isSt(o,ur_st.DISABLED) || ur_isSt(o,ur_st.READONLY) || (e.type=="keydown" && e.keyCode!=32)) 
		return false;
	if (ur_isSt(o,ur_st.SELECTED)){
		ur_setSt(o,ur_st.SELECTED,false);
		ur_setSt(o,ur_st.UNDEFINED,true);
		oImg.className=oImg.className.replace("On","Ind");
	}
	else if (ur_isSt(o,ur_st.NOTSELECTED)){
		ur_setSt(o,ur_st.NOTSELECTED,false);
		ur_setSt(o,ur_st.SELECTED,true);
		oImg.className=oImg.className.replace("Off","On");	
	}
	else{
		ur_setSt(o,ur_st.UNDEFINED,false);
		ur_setSt(o,ur_st.NOTSELECTED,true);
		oImg.className=oImg.className.replace("Ind","Off");	
	}
	ur_focus(o);
	if (ur_system.is508) o.fireEvent("onactivate");
	return ur_EVT_cancel(e);
}
function sapUrMapi_TriStateCheckBox_setDisabled(sId) {
	sapUrMapi_CheckBox_setDisabled(sId);
}
function sapUrMapi_TriStateCheckBox_setEnabled(sId) {
	sapUrMapi_CheckBox_setEnabled(sId);
}
function sapUrMapi_TriStateCheckBox_setReadonly(sId,bSet){
	sapUrMapi_CheckBox_setReadonly(sId,bSet);
}

//** ViewSwitch.ie5 **

function ur_VS_sel(oEvt) {
  var o=ur_VS_getObj(oEvt).ref;
  oItm=ur_EVT_src(oEvt);
  while (oItm.getAttribute && (oItm.getAttribute("idx")==null || oItm.getAttribute("idx")=="")) {
    oItm=oItm.parentNode;
    if (oItm.tagName=="TR") return;
  }
  var iIdx=parseInt(oItm.getAttribute("idx"));
  var sSt=oItm.getAttribute("st");
  if (sSt.indexOf("d")==-1) { 
	  	ur_EVT_fire(oItm,"osel",oEvt);
	}
}
function ur_VS_getObj(oEvt) {
  var o={ref:ur_getRootObj(ur_EVT_src(oEvt))};
  var items=new Array();
  for (var i=0;i<o.ref.firstChild.childNodes.length;i++)
    items.push(o.ref.firstChild.childNodes[i].firstChild);
  o["items"]=items;
  o["selected"]=o.ref.getAttribute("sidx");
  return o;
}
function ur_VS_cl(oEvt)
{
    if (!oEvt) oEvt=event; 
    ur_VS_sel(oEvt); 
}
function ur_VS_kd(oEvt) {
  if (!oEvt) oEvt=event;
  if (oEvt.keyCode==32 || oEvt.keyCode==13) {
    ur_VS_sel(oEvt);
    ur_EVT_cancel(oEvt);
  }
  else if(oEvt.keyCode==38 || oEvt.keyCode==40){
  	ur_VS_ac(oEvt);
  }
 var o=ur_VS_getObj(oEvt);
   ur_KY_nav(oEvt,o);
}
function ur_VS_ac(oEvt)
{
   var o=ur_VS_getObj(oEvt);
   var aItms=o.ref.getElementsByTagName("TR");
   
   var oCur=ur_EVT_src(oEvt);
   var iIdx= parseInt(oCur.getAttribute("idx"));
   if(oEvt.keyCode==38) 
   	  iIdx=iIdx-1;
   	else if(oEvt.keyCode==40) 
   	  iIdx=iIdx+1;
   if(iIdx<0 || iIdx>aItms.length)return;
   if(aItms[iIdx]==null)return;
   
   ur_focus_Itm(aItms[iIdx].firstChild,oCur);
}
function ur_VS_mm(oEvt) {
  
}
