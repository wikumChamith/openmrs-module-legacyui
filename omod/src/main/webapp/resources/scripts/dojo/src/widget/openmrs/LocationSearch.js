/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
dojo.provide("dojo.widget.openmrs.LocationSearch");
dojo.require("dojo.widget.openmrs.OpenmrsSearch");

var openmrsSearchBase = djConfig["baseScriptUri"].substring(0, djConfig["baseScriptUri"].indexOf("/", 1));
importJavascriptFile(openmrsSearchBase + "/dwr/interface/DWREncounterService.js");

dojo.widget.tags.addParseTreeHandler("dojo:LocationSearch");

dojo.widget.defineWidget(
	"dojo.widget.openmrs.LocationSearch",
	dojo.widget.openmrs.OpenmrsSearch,
	{
		locationId: "",
		
		postCreate: function(){
			dojo.debug("postCreate in LocationSearch");
			if (this.locationId)
				DWREncounterService.getLocation(this.locationId, this.simpleClosure(this, "select"));
		},
		
		showAll: function() {
			DWREncounterService.getAllLocations(this.simpleClosure(this, "doObjectsFound"));
		},
		
		doFindObjects: function(text) {
			DWREncounterService.findLocations(text, this.simpleClosure(this, "doObjectsFound"));
			return false;
		},
		
		getName: function(loc) {
			if (typeof loc == 'string') return this.noCell();
			return loc.name;
		},
		
		getCellFunctions: function() {
			return [this.simpleClosure(this, "getNumber"), 
					this.simpleClosure(this, "getName")
					];
			
		},
			
		// TODO: internationalize
		showHeaderRow: true,
		getHeaderCellContent: function() {
			return ['', 'Location Name'];
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