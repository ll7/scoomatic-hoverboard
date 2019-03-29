function CAManager(_modalWindowURI,_modalFeatures)
{
	this.systemMap = new Array();
	this.modalWindowURI = _modalWindowURI;
	this.modalFeatures = _modalFeatures;
	this.AddSystem = AddSystem;
	this.eventCallBack = eventCallBack;
	this.registerCAEvent = registerCAEvent;
	this.setExitCode = setExitCode;
}

function setExitCode(ManagerObj,systemAlias,exitCode)
{	
	if(exitCode == 1)
	{
		ManagerObj.systemMap.push(systemAlias);
	}
}

var netsacpeEngResult = 0;
function AddSystem(systemAlias)
{	
	var i;
	for (i=0; i < this.systemMap.length; i++)
	{ //Check if system in system map
		if(this.systemMap[i] == systemAlias)
		{
			return;
		}
	}	
	var url = this.modalWindowURI + "?Alias=" +  escape(systemAlias);
	if(url.indexOf("Engine")>0)
	{
		if(EPCM.getUAType() == EPCM.MSIE)
		{/*codingfor       IE*/ 
			var engResult = window.showModalDialog(url,null,this.modalFeatures);	
			setExitCode(this,systemAlias,engResult);
		}
		else if(EPCM.getUAType() == EPCM.NETSCAPE)
		{/*codingfor       Mozilla*/ 
			window.open(url,"CA",this.modalFeatures + ",modal=yes");
			setExitCode(this,systemAlias,netsacpeEngResult);
		}
	}
}

function eventCallBack( eventObj )
{
	this.AddSystem(eventObj.dataObject);
}

function registerCAEvent(nameSpace, eventName, objectName, eventHandler)
{
	try
	{
		EPCM.subscribeEvent(nameSpace, eventName, objectName ,eventHandler);
	}
	catch(e)
	{		
	}
}