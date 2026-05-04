/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
dojo.provide("dojo.widget.openmrs.EncounterSearch");
dojo.require("dojo.widget.openmrs.OpenmrsSearch");

var openmrsSearchBase = djConfig["baseScriptUri"].substring(0, djConfig["baseScriptUri"].indexOf("/", 1));
importJavascriptFile(openmrsSearchBase + "/dwr/interface/DWREncounterService.js");

dojo.widget.tags.addParseTreeHandler("dojo:EncounterSearch");

dojo.widget.defineWidget(
	"dojo.widget.openmrs.EncounterSearch",
	dojo.widget.openmrs.OpenmrsSearch,
	{
		encounterId: "",
		
		postCreate: function(){
			dojo.debug("postCreate in encounterSearch");
			
			if (this.encounterId)
				DWREncounterService.getEncounter(this.encounterId, this.simpleClosure(this, "select"));
		},
		
		
		doFindObjects: function(text) {

			var tmpIncludedVoided = (this.showIncludeVoided && this.includeVoided.checked);
			DWREncounterService.findEncounters(text, tmpIncludedVoided, this.simpleClosure(this, "doObjectsFound"));
			
			return false;
		},
		
		
		getPatient: function(enc) {
			if (typeof enc == 'string') {
				var td = document.createElement("td");
				td.colSpan = 6;
				td.innerHTML = enc;
				return td;
			}
			return enc.personName;
		},
		
		
		getType: function(enc) {
			if (typeof enc == 'string') return this.noCell();
			return enc.encounterType;
		},
		
		
		getForm: function(enc) {
			if (typeof enc == 'string') return this.noCell();
			return enc.formName;
		},
		
		
		getProvider: function(enc) {
			if (typeof enc == 'string') return this.noCell();
			return enc.providerName;
		},
		
		
		getLocation: function(enc) {
			if (typeof enc == 'string') return this.noCell();
			return enc.location;
		},
		
		
		getDateTime: function(enc) {
			if (typeof p == 'string') return this.noCell();
			return enc.encounterDateString;
			//this.getDateString(enc.encounterDateTime);
		},
		
		
		getCellFunctions: function() {
			return [this.simpleClosure(this, "getNumber"), 
					this.simpleClosure(this, "getPatient"), 
					this.simpleClosure(this, "getType"), 
					this.simpleClosure(this, "getForm"), 
					this.simpleClosure(this, "getProvider"),
					this.simpleClosure(this, "getLocation"), 
					this.simpleClosure(this, "getDateTime")
					];
			
		},
			
		// TODO: internationalize
		showHeaderRow: true,
		getHeaderCellContent: function() {
			return ['', 'Patient Name', 'Encounter Type', 'Form', 'Provider', 'Location', 'Encounter Date'];
		},
		
		autoJump: true,
		allowAutoJump: function() {
			if (this.autoJump == false) {
				this.autoJump = true;
				return false;
			}
			return true;
		}
		
	},
	"html"
);