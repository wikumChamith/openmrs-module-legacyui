/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
dojo.provide("dojo.widget.openmrs.FieldSearch");
dojo.require("dojo.widget.openmrs.OpenmrsSearch");

var openmrsSearchBase = djConfig["baseScriptUri"].substring(0, djConfig["baseScriptUri"].indexOf("/", 1));
importJavascriptFile(openmrsSearchBase + "/dwr/interface/DWRFormService.js");

dojo.widget.tags.addParseTreeHandler("dojo:FieldSearch");

dojo.widget.defineWidget(
	"dojo.widget.openmrs.FieldSearch",
	dojo.widget.openmrs.OpenmrsSearch,
	{
		fieldId: "",
		alsoSearchConcepts: false,
		
		postCreate: function(){
			dojo.debug("postCreate in FieldSearch");
			
			var closure = function(thisObj, method) { return function(obj) { return thisObj[method]({"obj":obj}); }; };
			if (this.fieldId != "")
				DWRFormService.findFields(this.fieldId, closure(this, "select"));
		},
		
		doFindObjects: function(text) {
			if (this.alsoSearchConcepts == true)
				DWRFormService.findFieldsAndConcepts(text, this.simpleClosure(this, "doObjectsFound"));
			else
				DWRFormService.findFields(text, this.simpleClosure(this, "doObjectsFound"));
				
			return false;
		},
		
		getName: function(f) {
			if (typeof f == 'string') return f;
			return f.name;
		},
		
		getType: function(f) {
			if (typeof f == 'string') return this.noCell();
			var span = document.createElement("span");
			span.style.whiteSpace = "nowrap";
			span.innerHTML = f.fieldTypeName;
			return span;
		},
		
		getDesc: function(f) {
			if (typeof f == 'string') return this.noCell();
			return f.description;
		},
		
		getCellFunctions: function() {
			return [this.simpleClosure(this, "getNumber"), 
					this.simpleClosure(this, "getName"), 
					this.simpleClosure(this, "getType"), 
					this.simpleClosure(this, "getDesc")
					];
		},
		
		// TODO: internationalize
		showHeaderRow: true,
		getHeaderCellContent: function() {
			return ['', 'Name', 'Field Type', 'Description'];
		}
		
	},
	"html"
);
