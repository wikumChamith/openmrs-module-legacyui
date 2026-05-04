/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
function GetXmlHttpObject() { 
	var objXMLHttp = null;
	if (window.XMLHttpRequest) {
		objXMLHttp=new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return objXMLHttp;
}

function loadInto(loadingText, url, layer, delay) {
	if (delay > 0) {
		setTimeout("loadInto('" + loadingText + "', '" + url + "', ':" + layer + "')", delay);
	} else {
		loadInto(loadingText, url, layer);
	}
}

function loadInto(loadingText, url, layer) {
	document.getElementById(layer).innerHTML = loadingText;
	var xmlHttp=GetXmlHttpObject();
	xmlHttp.onreadystatechange=function() { loadStateChanged(xmlHttp, layer); }
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function loadStateChanged(xmlHttpObj, layer) {
	if (xmlHttpObj.readyState==4 || xmlHttpObj.readyState=="complete") { 
		document.getElementById(layer).innerHTML = xmlHttpObj.responseText;
	} 
}