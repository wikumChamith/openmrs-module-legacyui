/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
var obsCellFuncs = [
	function(data) { return "" + data.personName; },
	function(data) { 
		if (data.encounter == null || data.encounter == '') {
			return "";
		}
		return "<a href=\""+openmrsContextPath+"/admin/encounters/encounter.form?encounterId=" + data.encounter + "\">" + data.encounterName + " (" + data.encounterDate + ")</a>"; 
	},
	function(data) { return "" + data.conceptName; },
	function(data) { return "<a href=\"obs.form?obsId=" + data.obsId + "\">" + data.value + "</a>"; },
	function(data) { return "" + data.obsDate; }
];

var obsNoneCellFuncs = [
	function(data) { return "" + data; }
];

function showDiv(id) {
	var div = document.getElementById(id);
	if ( div ) {
		div.style.display = "";
	}
}

function hideDiv(id) {
	var div = document.getElementById(id);
	if ( div ) {
		div.style.display = "none";
	}
}

function showHideDiv(id) {
	var div = document.getElementById(id);
	if ( div ) {
		if ( div.style.display != "none" ) {
			div.style.display = "none";
		} else { 
			div.style.display = "";
		}
	}
}

var obsTableToRefresh = "";

function obsSearch( patientField, conceptField, encounterField, obsTable, obsDiv ) {
	showDiv(obsDiv);
	var patientId = patientField.length == 0 ? "" : jquerySelectEscaped(patientField).val();
	var conceptId = conceptField.length == 0 ? "" : jquerySelectEscaped(conceptField).val();
	var encounterId = encounterField.length == 0 ? "" : jquerySelectEscaped(encounterField).val();
	obsTableToRefresh = obsTable;
	DWRObsService.getObsByPatientConceptEncounter(patientId, conceptId, encounterId, refreshObsTable);
}

function refreshObsTable(obss) {
	if ( document.getElementById(obsTableToRefresh) ) {
		dwr.util.removeAllRows(obsTableToRefresh);
		if ( obss && obss.length > 0 ) {
			dwr.util.addRows(obsTableToRefresh, obss, obsCellFuncs, {
				cellCreator:function(options) {
				    var td = document.createElement("td");
				    return td;
				},
				escapeHtml:false
			});
		} else {
			var noObsMsg = omsgs.noObsFound;
			var obsMsgs = [noObsMsg, ""];
			dwr.util.addRows(obsTableToRefresh, obsMsgs, obsNoneCellFuncs, {
				cellCreator:function(options) {
				    var td = document.createElement("td");
				    return td;
				},
				escapeHtml:false
			});
		}
	} else {
		alert('cannot find table called ' + obsTableToRefresh);
	}
}

function obsSearchClear( personField, conceptField, encounterField ) {
	if ( personField.length > 0 ) {
		jquerySelectEscaped(personField).val("");
		jquerySelectEscaped(personField + "_selection").val("");
	}
	if ( conceptField.length > 0 ) {
		jquerySelectEscaped(conceptField).val("");
		jquerySelectEscaped(conceptField + "_selection").val("");
	}
	if ( encounterField.length > 0 ) {
		jquerySelectEscaped(encounterField).val("");
		jquerySelectEscaped(encounterField + "_selection").val("");
	}
}