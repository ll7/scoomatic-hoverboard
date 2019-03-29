/*-------------------------------------*/
/*  Global Control Services            */
/*  (c) 2002 SAP AG                    */
/*-------------------------------------*/
  
/*----------------------------------------------------------------------*/
/*  General                                                             */
/*----------------------------------------------------------------------*/
// domainrelaxing
  // domainrelaxing
  
  /*var  strDomainRelaxScript  = '<S'+'CRIPT> var liBehindFirstDot = document.domain.indexOf( "." ) + 1;';
       strDomainRelaxScript += 'if (liBehindFirstDot > 0) {';
       strDomainRelaxScript += 'document.domain = document.domain.substr( liBehindFirstDot );';
       strDomainRelaxScript += '}</S'+'CRIPT>';
  */
  strDomainRelaxScript  = "";  
  var docBody = null;  
//------------------------------------------------------------------------------

//----------------------------------------------------------------------------
//  Popup Object                                                        
//----------------------------------------------------------------------------
//Events provided by this Object 
// onbeforerender  = use that event to set other positions than the precalculated;
// onblur          = fired when the popup blurs, use to hide it
//----------------------------------------------------------------------------

//consts enums 
  
//----------------------------------------------------------------------------
// sapPopupSizeBehavior used with attribute o.sizebehaviour
// o.sizebehaviour.USER    - you can set the size of the popup, 
//                           use o.size.width,o.size.height
//                         
// o.sizebehaviour.CONTENT - the popup will automatically adjust to the the
//                           size of its content
//----------------------------------------------------------------------------
  sapPopupSizeBehavior     = { CONTENT : "CONTENT", USER : "USER" };
//----------------------------------------------------------------------------
if(ur_system.emptyhoverurl==null) ur_system.emptyhoverurl = ur_system.mimepath+"emptyhover.html";
document.write("<div id='urFrames'><iframe id=\"sapPopupMainId_X0\" name=\"sapPopupMainId_X0\" src=\""+ur_system.emptyhoverurl+"\" style=\"visibility:hidden;z-index:1001;display:block;position:absolute;top:-5000;width:0;height:0\"  frameborder=\"0\" border=\"no\" scrolling=\"no\" tabindex=\"-1\"></iframe><iframe id=\"sapPopupMainId_X1\" name=\"sapPopupMainId_X1\" src=\""+ur_system.emptyhoverurl+"\" style=\"visibility:hidden;z-index:1001;display:block;position:absolute;top:-5000;width:0;height:0\"  frameborder=\"0\" border=\"no\" scrolling=\"no\" tabindex=\"-1\"></iframe></div>");
  
//----------------------------------------------------------------------------
// sapPopupPositionBehavior used with attribute o.positionbehaviour
// o.positionbehaviour.MENULEFT      - popup shows left aligned under the 
//                                     source element.
// o.positionbehaviour.MENURIGHT     - popup shows right aligned under the 
//                                     source element.
// o.positionbehaviour.BROWSERCENTER - popup shows centered in the browser 
//                                     window. 
// o.positionbehaviour.USER          - you can set the position
//                                     use o.position.left, o.position.top
//----------------------------------------------------------------------------
  
  sapPopupPositionBehavior = { MENULEFT : "MENULEFT", MENURIGHT : "MENURIGHT", BROWSERCENTER : "BROWSERCENTER", USER : "USER", SUBMENU : "SUBMENU",EVENT:"EVENT" }
//----------------------------------------------------------------------------

  var sapPopupMainId = "sapPopupMainId_X";

//Variables
  var sapPopupStore = new Array(); 
  var sapOpenLevel  = false; 
  
/*----------------------------------------------------------------------*/
/*  Constructor                                                         */
/*----------------------------------------------------------------------*/
// desc : create a new popup
// in   : sourcewindow   : DOM window object - caller window
//        stylesheets    : Array             - stylesheet urls to use in the popup
//        contentobject  : DOM element       - that contains the html to show in the popup
//        sourceobject   : DOM element       - source element to align the popup
//        sourceevent    : DOM event object  - fired on the sourceobject to position the popup
// out  : none 
// brw  : NN6>
//----------------------------------------------------------------------------
  function sapPopup(sourcewindow,stylesheets,contentobject,sourceobject,sourceevent,level) {
    //Attributes
    if (!level) level=0;
    this.level = level;
    this.sizebehaviour = sapPopupSizeBehavior.CONTENT;
    this.positionbehavior = sapPopupPositionBehavior.MENULEFT;
    
    this.position = { left: -1, top: -1, right: -1, bottom: -1 };
    this.size     = { width: -1, height: -1 };
    if (document.getElementById(sapPopupMainId+(level+1))==null) {
    	 var oFramesContainer = document.getElementsByTagName("BODY").item(0);
    	 for (var f=level+1;f<level+3;f++) {    	 	
    	 	 var oFrame = document.createElement("IFRAME");
    	 	 oFrame.setAttribute("id",sapPopupMainId+(f));
    	 	 oFrame.setAttribute("name",sapPopupMainId+(f));
    	 	 oFrame.setAttribute("src",ur_system.emptyhoverurl);
    	 	 oFrame.setAttribute("style","width:0;height:0;z-index:1001;display:block;position:absolute;top:-5000;");
    	 	 oFrame.setAttribute("tabindex","-1");
    	 	 oFrame.setAttribute("frameborder","0");
    	 	 oFrame.setAttribute("border","no");
    	 	 oFrame.setAttribute("scrolling","no");
    	   oFramesContainer.appendChild(oFrame);
    	 }
    }
    var oFrame = document.getElementById(sapPopupMainId+level);
    oFrame.style.visibility="hidden";
    oFrame.style.visibility="visible";
    
    this.frame = { object: oFrame, 
                   window: window.frames[sapPopupMainId+level]};
    
    this.content = { html: contentobject.innerHTML,
                     size: contentobject.childNodes[0],
                     obj: contentobject};
    //store information about the source of that popuprequest
    this.source = { event:sourceevent, 
                    object:sourceobject, 
                    window: sourcewindow, 
                    document:sourcewindow.document, 
                    body: sourcewindow.document.getElementsByTagName("BODY").item(0) };
    
    this.canrender   = true;
    this.domainrelax = true;
    this.scrolling   = true; 
    this.stylesheets = stylesheets;

    //Methods
    this.write   = sapPopup_write;
    this.show    = sapPopup_show;
    this.showOld = sapPopup_showOld;
    this.hide    = sapPopup_hide;
    this.poscalc = sapPopup_poscalc;
    
    //Events
    this.onbeforerender  = null;
    this.onblur          = null;
        
    //define a global variable with the body element for all popups once
    if (!docBody) docBody = window.document.getElementsByTagName("BODY")[0];

    //if relative urls are used for styles try to absolute them
    for (var n=0; n<this.stylesheets.length;n++) {
      this.stylesheets[n]=relativeToAbsolutePath(this.stylesheets[n],sourcewindow.location.href);
    }

    //set a variable inside sourcewindow to itself, used to refer events back
    this.source.window.me = this.source.window;
    sapPopupStore[this.level] = this;
    return this; 
 }
 

/*----------------------------------------------------------------------*/
/*  Methods                                                               */
/*----------------------------------------------------------------------*/
//----------------------------------------------------------------------------
// method write
//----------------------------------------------------------------------------
// desc : writes the popup into its iframe
//        internal use only
// in   : none
// out  : none 
// brw  : NN6>
//----------------------------------------------------------------------------
function sapPopup_write(bDoNotAutoFocus) {
  var oTargetWin = this.frame.window;
  var oTargetDoc = oTargetWin.document;
  var oTargetBody = oTargetDoc.getElementsByTagName("BODY")[0];
  //set the text direction
  if (ur_system.direction == "rtl")
    oTargetBody.setAttribute("dir","rtl");
  oTargetWin.me=sapPopupStore[this.level].source.window;
  oTargetWin.mylevel=this.level;
  if (!bDoNotAutoFocus) {
    oTargetWin.focus();
  }
  for (var n = 0; n<this.stylesheets.length;n++) {
    var oLink = oTargetDoc.getElementsByTagName("LINK")[0];
    oLink.href = this.stylesheets[n];
  }
  
  //oTargetBody.onbeforeunload = 'if (window.me) me.closeWin(window);';
  oTargetBody.className = "urBdyStd";
  oTargetBody.scroll = "no";
  
  sFocus = "";
  if(this.object!=null && this.object.getAttribute("ct")!="ComboBox"){  
    oTargetBody.onload = new oTargetWin.Function("parent.sapUrMapi_PopupMenu_setEvents(parent.sapPopupStore["+this.level+"],1);");
    oTargetBody.onfocus = new oTargetWin.Function ("parent.sapUrMapi_PopupMenu_setEvents(parent.sapPopupStore["+this.level+"],2);");
    oTargetBody.onblur = new oTargetWin.Function ("if ((parent.sapPopupStore[mylevel]) && (!parent.sapOpenLevel)) {parent.sapPopupStore[mylevel].onblur();}");
	}
  
  //oTargetBody.unselectable = "on";
  oTargetBody.oncontextmenu = new oTargetWin.Function("return false");
  //oTargetBody.onmouseover='window.mover=true;if (window.me) {if (me.sapPopupStore["+this.level+"]) me.sapPopupStore["+this.level+"].mouseover=true;}' 
  //oTargetBody.onmouseout='window.mover=false;if (window.me) {if (window.me.sapPopupStore["+this.level+"]) me.sapPopupStore["+this.level+"].mouseover=false;}'  
  oTargetBody.style.margin="0";
  oTargetBody.style.border="none";
  if (oTargetBody.firstChild)
		oTargetBody.removeChild(oTargetBody.firstChild);
  var oDiv = oTargetDoc.createElement("DIV");
  oTargetBody.appendChild(oDiv);
  oTargetBody.tabIndex="0";
  var sBaseUrl = document.location.href.substring(0,document.location.href.lastIndexOf(document.location.search));
  sBaseUrl = sBaseUrl.substring(0,sBaseUrl.lastIndexOf("/"));
  this.content.html =  this.content.html.replace(/src=\"\./gi," src=\""+sBaseUrl+"/.");
  oDiv.innerHTML=this.content.html;
  if(this.source.object!=null && this.source.object.getAttribute("ct")!="CB" && this.source.object.getAttribute("ct")!="I"){  
    if ( oDiv.firstChild) {
      oTargetWin.onkeydown = oDiv.firstChild.onkeydown;
      oTargetWin.focus();
    }
  }
}

var intLeftFramePx;
var intTopFramePx;

//----------------------------------------------------------------------------
// method poscalc
//----------------------------------------------------------------------------
// desc : calculates the position of the popup depending on 
//        - sizebehaviour
//        - positionbehavior
//        changes the position if right or/and bottom might be 
//        not in the visible area to ensure the whole popup is visible
// in   : none
// out  : none 
// brw  : NN6>
//----------------------------------------------------------------------------
function sapPopup_poscalc() {
  //set the size of the frame depending on its content
  if (this.sizebehaviour==sapPopupSizeBehavior.CONTENT) {
    this.size.width  = this.content.size.offsetWidth;
    this.size.height = this.content.size.offsetHeight;
  } else {
    if ((this.size.width<=0) || (this.size.height<=0)) {
      showError("Please set\n   int sapPopup.size.width\n   int sapPopup.size.height\n to a value > 0.");
      this.canrender = false
    }
  } 
  //find relative position to sourceobject;
  var sourceoffset    = getAbsolutePosition(this.source.object);
  var sourcesize      = getElementSize(this.source.object);
  var oldPosLeft      = this.position.left;
  var oldPosRight     = this.position.right;
  var oldPosTop       = this.position.top;
  
  //event object is available
  if ( this.positionbehavior.indexOf("MENU")>-1) {
      this.position.left = sourceoffset.left;
      this.position.top  = sourceoffset.top + sourcesize.height;
      if (this.positionbehavior == sapPopupPositionBehavior.MENURIGHT) {
	      this.position.left = this.position.left + sourcesize.width - this.size.width;
      }
      //calculate right and bottom
      if (this.positionbehavior == sapPopupPositionBehavior.SUBMENU) {
	    this.position.left = this.position.left + sourcesize.width;
	    this.position.top  = this.position.top - sourcesize.height;
        if (this.level>0) { 
          this.position.left = this.position.left+sapPopupStore[this.level-1].position.left;
          this.position.top = this.position.top+sapPopupStore[this.level-1].position.top;
        } 
      }
      //calculate right and bottom
      this.position = setPosBottomRight(window, this.position, this.size);
      
      // if submenue does not fit on usual place,
      // try to position on other side of parent menu,
      // but only, of there is enough space available
      var setsubmenubelow=false;
      if (this.positionbehavior == sapPopupPositionBehavior.SUBMENU) {
        if (this.position.right<0) {
          if (this.position.left-(sourcesize.width)+7-this.size.width>window.pageXOffset) {
            this.position.left=this.position.left-(sourcesize.width)+7-this.size.width;
          } else {
            this.position.top = this.position.top + sourcesize.height;
            setsubmenubelow=true;
          }
          //calculate right and bottom 
          this.position = setPosBottomRight(window, this.position, this.size)
        } 
      } 
      
      //reposition horizontally
      if (this.position.right<0) this.position.left  = window.innerWidth + window.pageXOffset - this.size.width;
      if (this.position.left-window.pageXOffset<0) this.position.left  = 0 + window.pageXOffset;
      // reposition vertically
      if (this.position.bottom<0) {											 //too bottom
        if (this.positionbehavior == sapPopupPositionBehavior.SUBMENU) {
          if (setsubmenubelow) 
            this.position.top = this.position.top - sourcesize.height - this.size.height; 
          else  
            this.position.top = this.position.top + sourcesize.height - this.size.height; 
        }  
        if ((this.positionbehavior == sapPopupPositionBehavior.MENULEFT) ||
            (this.positionbehavior == sapPopupPositionBehavior.MENURIGHT)) {
          this.position.top = this.position.top - sourcesize.height - this.size.height;  
        }
      }  
      if (this.position.top-window.pageYOffset<0) this.position.top  = 0 + window.pageYOffset;
        
      //recalculate right and bottom according to changed values
      this.position = setPosBottomRight(window, this.position, this.size)
      
    } else if ( this.positionbehavior == sapPopupPositionBehavior.BROWSERCENTER ) {
	  this.position.left = Math.floor((window.innerWidth/2)-(this.size.width/2)) + this.source.window.pageXOffset;
	  this.position.top  = Math.floor((window.innerHeight/2)-(this.size.height/2)) + this.source.window.pageYOffset;
      this.position.right   = window.innerWidth  - this.position.left - this.size.width + window.pageXOffset;
	  this.position.bottom  = window.innerHeight - this.position.top  - this.size.height + window.pageYOffset;
	  
  } else if (this.positionbehavior == sapPopupPositionBehavior.EVENT) {
	  this.position.left = this.source.event.pageX;
	  this.position.top  = this.source.event.pageY;
      this.position.right   = window.innerWidth  - this.position.left - this.size.width + window.pageXOffset;
      this.position.bottom  = window.innerHeight - this.position.top  - this.size.height + window.pageYOffset;
      
      //repositioning
      if (this.position.right<0) this.position.left  = this.position.left - this.size.width;
      if (this.position.bottom<0) this.position.top  = this.position.top - this.size.height;
      if (this.position.left-window.pageXOffset<0) this.position.left  = 0 + window.pageXOffset;
      if (this.position.top-window.pageYOffset<0) this.position.top  = 0 + window.pageYOffset;
	  //recalculate right and bottom
      this.position = setPosBottomRight(window, this.position, this.size)
   } else if ((this.position.top<0) || (this.position.left<0)) {
      showError("Please set\n   int sapPopup.position.left\n   int sapPopup.position.top\n to a value > 0.");
      this.canrender = false
  }

  if ((this.position.left-window.pageXOffset<0) || (this.position.right<0)) {
     this.position.left  = window.pageXOffset;
  }
  if ((this.position.top-window.pageYOffset<0) || (this.position.bottom<0)){
      if (this.canrender) this.scrolling=true;
      this.position.top  = window.pageYOffset;
  }
  
  if (ur_system.direction=="rtl")
    this.position.right += oldPosRight+1;
  else
    this.position.left+=oldPosLeft+1;
  this.position.top +=oldPosTop+1;
}
//----------------------------------------------------------------------------
// method show
//----------------------------------------------------------------------------
// desc : shows the popup
// in   : none
// out  : none 
// brw  : NN6>
//----------------------------------------------------------------------------
function sapPopup_show(noRecalc,bDoNotAutoFocus) {
  //creating another child 
  sapOpenLevel = true;
  this.poscalc();
  if (this.onbeforerender) { if (!this.onbeforerender(this)) return; }
  if (!this.canrender) { showError("Cannot render Popup. Sizes and positions are not set."); return; }
  try {  	
		if (this.frame.window.mylevel==null) {
		  this.write(bDoNotAutoFocus);
		} else {
		  var oBody = this.frame.window.document.getElementsByTagName("BODY").item(0)
		  oBody.innerHTML=this.content.html;
		  var oDiv =  oBody.firstChild;
      if (oDiv) {
        this.frame.window.onkeydown = oDiv.onkeydown;
         /* This line used to be invalidated by a alert(); command
		in a previous line. Seems that the alert prevented the focus from
		being set on the main window. Setting it on the main window, by contrast,
		calls hide_all which, in return sets the oPopup object to null.
		This again makes drop down to stay open after a context menu has been closed.
		Observed with BI 0001036416 2013
		this.frame.window.focus();*/
      }
		  window.sapUrMapi_PopupMenu_setEvents(this,1);
		}
  } catch (e){
    this.write(bDoNotAutoFocus);
  }
  //show the menu
  
           this.frame.object.style.left   = sapUrMapi_sAddUnit( this.position.left , "px" );
           this.frame.object.style.top    = sapUrMapi_sAddUnit( this.position.top , "px" );
           this.frame.object.style.width  = sapUrMapi_sAddUnit( this.size.width , "px" );
           this.frame.object.style.height = sapUrMapi_sAddUnit( this.size.height + 1 , "px" );

  activePopup = this;
  this.oldresize = window.onresize;
  //window.onresize = top.hidePopups;
  return true;
}
//----------------------------------------------------------------------------
// method showOld
//----------------------------------------------------------------------------
// desc : shows the popup, does not calculate the position and does not
//        write the content
// in   : none
// out  : none 
// brw  : NN6>
//----------------------------------------------------------------------------
function sapPopup_showOld() {
  sapOpenLevel = true;
  this.frame.object.style.left   = sapUrMapi_sAddUnit( this.position.left , "px" );
  this.frame.object.style.top    = sapUrMapi_sAddUnit( this.position.top , "px" );
  this.frame.object.style.width  = sapUrMapi_sAddUnit( this.size.width , "px" );
  this.frame.object.style.height = sapUrMapi_sAddUnit( this.size.height , "px" );
  activePopup = this;
  this.oldresize = window.onresize;
  return true;
}
//----------------------------------------------------------------------------
// method hide
//----------------------------------------------------------------------------
// desc : hides the popup
// in   : none
// out  : none 
// brw  : NN6>
//----------------------------------------------------------------------------
function sapPopup_hide() {
  //hide the menu
  if (this.frame && this.frame.object && this.frame.object.style) {
		this.frame.object.style.top="-15001px";
	}
  if (this.level<sapPopupStore.length-1) {
  	sapPopupStore[this.level+1].hide();
  }
  if (this.level == 0 && this.remove) this.remove();

  sapPopupStore[this.level] = null; 
  var sapPopNew = new Array();
  for (var n=0;n<sapPopupStore.length;n++) {
  	if (sapPopupStore[n]!=null) {
  		sapPopNew[sapPopNew.length]=sapPopupStore[n];
  	}
  }
  sapPopupStore = sapPopNew;
  return true;
}
function hidePopupMenu(level) {
  if (sapPopupStore[0]) {
    sapPopupStore[0].hide();
  }
}

/*----------------------------------------------------------------------*/
/*  Helpers                                                             */
/*----------------------------------------------------------------------*/
//----------------------------------------------------------------------------
// function setPosBottomRight
//----------------------------------------------------------------------------
// desc : returns Right and Bottom  relative from a oBody DOM Body
// in   : oWindow  - windowobject, oPos - object - Position Object , oSize
// out  : oPos   - object Position Object
// brw  : NN6>
//----------------------------------------------------------------------------
function setPosBottomRight ( oWindow, oPos, oSize) {
  oPos.right   = oWindow.innerWidth - oPos.left - oSize.width + oWindow.pageXOffset;
  oPos.bottom  = oWindow.innerHeight - oPos.top - oSize.height + oWindow.pageYOffset;
  return oPos;
}   

//----------------------------------------------------------------------------
// function getAbsolutePosition
//----------------------------------------------------------------------------
// desc : returns position object x.left, x.right and x.top from a dom element 
//        absolute to the left, right and top borders of the document. 
// in   : obj  - object
// out  : position - object 
// brw  : top and left: IE5+, NN6+  right: IE5+
//----------------------------------------------------------------------------
function getAbsolutePosition (obj) {
  if (obj)
	  return sapUrMapi_getAbsolutePosition (obj);
}  

//----------------------------------------------------------------------------
// function getElementSize
//----------------------------------------------------------------------------
// desc : returns size object .width and .height on a dom element
// in   : obj  - object
// out  : size - object 
// brw  : IE5>, NN6>
//----------------------------------------------------------------------------
function getElementSize (obj) {
  if (obj)
	  return { height : obj.offsetHeight, width: obj.offsetWidth };
}

//----------------------------------------------------------------------------
// function relativeToAbsolutePath
//----------------------------------------------------------------------------
// desc : returns the absolute url of strRel from an absolute url strAbs
// in   : strRel - string
//        strAbs - string
// out  : absolute path - string 
// brw  : IE5>, NN6>
//----------------------------------------------------------------------------
function relativeToAbsolutePath(strRel,strAbs) {
  if (strRel.lastIndexOf("./")==-1) {
  	if((strRel.indexOf("http") !=-1) && (strRel.indexOf(".css"))) return strRel;
  	if((strRel.indexOf("https") !=-1) && (strRel.indexOf(".css"))) return strRel;
	  	
  	if(strRel.indexOf("/") == 0) {
  		strRel = strRel.substr(1);
  	}
  
  	if (strAbs.indexOf("?")!=-1) {
  		var strAbs = strAbs.substring(0,strAbs.indexOf("?"));
  	}
  
  	var urlParts = strAbs.split("//");
  	var domain = urlParts[1].substring(0,urlParts[1].indexOf("/"));
  	var strAbsPath = urlParts[0] + "//" + domain + "/";
  
    	strNewAbsPath = strAbsPath + strRel;
    	return strNewAbsPath;
    }
    else {
  	  if (strAbs.indexOf("?")==-1) {
  		var strRelDots      = strRel.substring(0,strRel.lastIndexOf("./")+2);
  		var strAbsPath      = strAbs.substring(0,strAbs.lastIndexOf("/"));
  	  }
  	  else {
  		var strRelDots      = strRel.substring(0,strRel.lastIndexOf("./")+2);
  		var strAbsPath      = strAbs.substring(0,strAbs.indexOf("?"));
  		var strAbsPath      = strAbsPath.substring(0,strAbsPath.lastIndexOf("/"));
  	  }
  }
  while(strRelDots.lastIndexOf("..")>-1) { //erase all double dots
    strAbsPath = strAbsPath.substring(0,strAbsPath.lastIndexOf("/")); 
    strRelDots = strRelDots.substring(0,strRelDots.lastIndexOf(".."))+"/";
  }
  if (strRelDots.lastIndexOf("./")>-1) {
    //erase last dots slash
    strRelDots = strRelDots.substring(0,strRelDots.lastIndexOf("./"))+"/";
    if (strRelDots.lastIndexOf("./")>-1) { 
      showError (strRel+" is not a valid relative url.");
    }
  }
  //build absolut path
  strNewAbsPath = strAbsPath + strRelDots + strRel.substring(strRel.lastIndexOf("./")+2,strRel.length);
  return strNewAbsPath;
}  
//----------------------------------------------------------------------------
// function showError
//----------------------------------------------------------------------------
// desc : shows an error text strTxt in an alert window could be replaces 
//        in the futur to display nicer messages
// in   : strTxt - string
// out  : none 
// brw  : IE5>, NN6>
//----------------------------------------------------------------------------


function showError(strTxt) {
  alert("Error:"+strTxt);
}
