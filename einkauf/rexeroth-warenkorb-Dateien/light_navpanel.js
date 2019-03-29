
var percentDiff = 15;var msDiff = 1;var intervalHandle;var defaultExpWidth = 220;var defaultNavPanelStatus = "exp";var collapseWidth = 8;var navPanelLocked = null;
function setExpWidth(expWidth){try{top.expNavPanelWidth = expWidth;}
catch(e){}
}
function getExpWidth(){try{var expWidth = top.expNavPanelWidth;if (expWidth == null) expWidth = defaultExpWidth;return expWidth;
}
catch(e){return defaultExpWidth;}
}
function getNavPanelStatus(){var navPanelStatus;try{navPanelStatus = top.navPanelStatus;if (navPanelStatus == null) navPanelStatus = defaultNavPanelStatus;}
catch(e){navPanelStatus = defaultNavPanelStatus;}
return navPanelStatus;}
function resizePanel(direction){
var panelWidth = document.getElementById("nav_panel_div").style.width;panelWidth = pixelsToNum(panelWidth) + (direction * percentDiff);
if((panelWidth >= 50) && (panelWidth <= getDocWidth()))
{resizePanelToWidth(panelWidth);setExpWidth(panelWidth);adjustNN7Divs();}
}
function resizePanelToWidth(panelWidth){if (navigator.appName == "Microsoft Internet Explorer")
{document.getElementById("nav_panel_td").style.width = numToPixels(panelWidth);}
document.getElementById("nav_panel_div").style.width = numToPixels(panelWidth);adjustContentWidth(panelWidth);}
function isStandardsMode()
{return (document.compatMode==='CSS1Compat');}
function isNN7()
{if (typeof EPCM != "undefined")
{return (EPCM.getUAType() == EPCM.MOZILLA || EPCM.getUAType() == EPCM.NETSCAPE || EPCM.getUAType() == EPCM.SAFARI || EPCM.getUAType() == EPCM.CHROME);}
else
{return (navigator.appName == "Netscape");}
}
function adjustContentWidth(panelWidth){var docWidth = getDocWidth();if (docWidth != null && docWidth >= panelWidth)
{
var divWidth = (docWidth - panelWidth);
document.getElementById("desk_td").style.width = numToPixels(divWidth) ;document.getElementById("desk_div").style.width = numToPixels(divWidth);}
}
function adjustPanelAndContentHeight(){var docHeight = getDocHeight();var deskDocHeight = docHeight;var navDocHeight = docHeight;if (docHeight != null)
{if (navigator.appName == "Microsoft Internet Explorer")
{if(isStandardsMode())
{navDocHeight -= 6;deskDocHeight -= 6;}
else
{navDocHeight -= document.getElementById("nav_panel_buttons_table").clientHeight;navDocHeight -= 2;}
}
else
{navDocHeight -= 6;deskDocHeight -= 6;}
document.getElementById("nav_panel_div").style.height = numToPixels(navDocHeight);document.getElementById("desk_div").style.height = numToPixels(deskDocHeight) ;}
}
function getPanelHeight()
{var docHeight = getDocHeight();var navDocHeight = docHeight;if (docHeight != null)
{if (navigator.appName == "Microsoft Internet Explorer")
{if(isStandardsMode())
{navDocHeight -= 6;}
else
{navDocHeight -= document.getElementById("nav_panel_buttons_table").clientHeight;navDocHeight -= 12;}
}
else
{navDocHeight -= 6;}
return numToPixels(navDocHeight);}
return "";}
function getContentHeight()
{var docHeight = getDocHeight();var deskDocHeight = docHeight;if (docHeight != null)
{if (isNN7() || isStandardsMode())
{deskDocHeight -= 6;}
return numToPixels(deskDocHeight) ;}
return "";}
function adjustPageOnResize(){adjustPanelAndContentHeight();var navPanelStatus = getNavPanelStatus();if (navPanelStatus == "exp")
{adjustContentWidth(getExpWidth());}
else
{adjustContentWidth(collapseWidth);}
adjustNN7Divs();
}
function expandPanel(){
resizePanelToWidth(getExpWidth());document.getElementById("colNavPanel").style.display = "";document.getElementById("reduceNavPanel").style.display = "";document.getElementById("enlargeNavPanel").style.display = "";document.getElementById("expNavPanel").style.display = "none";document.getElementById("nav_container_div").style.display = "";document.getElementById("nav_panel_div").className = "navPanFooter";if (navigator.appName == "Microsoft Internet Explorer")
{if(isStandardsMode())
{adjustNN7Divs();pageSupport.ivuRecalcAllTrays();}
else
{document.getElementById("nav_panel_div").className = "navPanFooter";}
}
else
{adjustNN7Divs();pageSupport.ivuRecalcAllTrays();}
try {top.navPanelStatus = "exp";}
catch (e) {}
}
function collapsePanel(){resizePanelToWidth(collapseWidth);document.getElementById("expNavPanel").style.display = "";document.getElementById("colNavPanel").style.display = "none";document.getElementById("reduceNavPanel").style.display = "none";document.getElementById("enlargeNavPanel").style.display = "none";document.getElementById("nav_container_div").style.display = "none";
document.getElementById("nav_panel_div").className = "navPanCol";
adjustNN7Divs();try {top.navPanelStatus = "col";}
catch (e) {}
}
function checkAndcollapsePanel()
{if(navPanelLocked == null)
collapsePanel();}
function restoreNavPanelStatus(){var navPanelStatus = getNavPanelStatus();if (navPanelStatus == "exp")
{expandPanel();}
else
{collapsePanel();}
}
function checkAndrestoreNavPanelStatus()
{if(navPanelLocked == null)
restoreNavPanelStatus();}
function adjustNN7Divs()
{if(isNN7() || isStandardsMode())
{var left = document.getElementById("nav_panel_div");var right = document.getElementById("desk_div");if(isRtL)
right.style.right = left.style.width;else
right.style.left = left.style.width;}
}
function adjustNN7Position()
{if(isNN7() || isStandardsMode())
{var left = document.getElementById("nav_panel_div");var right = document.getElementById("desk_div");left.style.position = "absolute";right.style.position = "absolute";}
}
function reduceNavPanel_onmouseout(){if(!CostumNavPanelLocked)
{window.clearInterval(intervalHandle);}
}
function reduceNavPanel_onmouseup(){if(!CostumNavPanelLocked)
{window.clearInterval(intervalHandle);}
}
function reduceNavPanel_onmousedown(){if(!CostumNavPanelLocked)
{intervalHandle = window.setInterval("resizePanel(-1)",msDiff);}
}
function enlargeNavPanel_onmouseout(){if(!CostumNavPanelLocked)
{window.clearInterval(intervalHandle);}
}
function enlargeNavPanel_onmouseup(){if(!CostumNavPanelLocked)
{window.clearInterval(intervalHandle);}
}
function enlargeNavPanel_onmousedown(){if(!CostumNavPanelLocked)
{intervalHandle = window.setInterval("resizePanel(1)",msDiff);}
}
function colNavPanel_onclick(){if(!CostumNavPanelLocked)
{collapsePanel();if (typeof EPCM != "undefined") {EPCM.raiseEvent('urn:com.sapportals:navigation','setNavTargetPanel', "collapse");}
}
}
function expNavPanel_onclick(){if(!CostumNavPanelLocked)
{expandPanel();if (typeof EPCM != "undefined") {EPCM.raiseEvent('urn:com.sapportals:navigation','setNavTargetPanel', "expand");}
}
}
function reduceNavPanel_onkeypress()
{if(!CostumNavPanelLocked)
{resizePanel(-1);}
}
function enlargeNavPanel_onkeypress()
{if(!CostumNavPanelLocked)
{resizePanel(1);}
}
function pixelsToNum(per){return (parseInt(per.substr(0,(per.length-2))));
}
function numToPixels(num){return (num + "px");}
function getDocWidth(){var docWidth = null;if (navigator.appName == "Microsoft Internet Explorer") {if(isStandardsMode() && window.innerWidth)
{docWidth = window.innerWidth;if (document.body.scrollHeight > document.body.clientHeight)
docWidth -= 17;}
else
{docWidth = document.body.clientWidth;}
}
else
{docWidth = window.innerWidth;if (document.body.scrollHeight > document.body.clientHeight)
docWidth -= 17;}
return docWidth;}
function getDocHeight(){var docHeight = null;if (navigator.appName == "Microsoft Internet Explorer") {if(isStandardsMode())
{if(window.innerHeight && window.innerHeight != 0)
{docHeight = window.innerHeight - document.getElementById("inner_page_div").offsetParent.offsetTop;}
else
{docHeight = window.screen.availHeight - document.getElementById("inner_page_div").offsetParent.offsetTop;}
}
else
{docHeight = document.body.clientHeight - document.getElementById("inner_page_div").parentElement.offsetTop;}
}
else
{docHeight = window.innerHeight - document.getElementById("inner_page_div").offsetParent.offsetTop;}
return docHeight;}
function onCollapsePanel()
{navPanelStatusHis = "col";
navPanelLocked = true;}
function onExpandPanel()
{navPanelStatusHis = "exp";
navPanelLocked = true;}
function checkNavPanelStatus(mode)
{if(typeof(navPanelStatusHis) != 'undefined' && mode != navPanelStatusHis)
{if(navPanelStatusHis == "exp")
expandPanel();else
collapsePanel();}
}