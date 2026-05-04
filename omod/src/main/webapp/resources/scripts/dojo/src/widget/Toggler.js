/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

dojo.provide("dojo.widget.Toggler");
dojo.require("dojo.widget.*");
dojo.require("dojo.event.*");

// clicking on this node shows/hides another widget

dojo.widget.Toggler = function(){
	dojo.widget.DomWidget.call(this);
}

dojo.inherits(dojo.widget.Toggler, dojo.widget.DomWidget);

dojo.lang.extend(dojo.widget.Toggler, {
	widgetType: "Toggler",
	
	// Associated widget 
	targetId: '',
	
	fillInTemplate: function() {
		dojo.event.connect(this.domNode, "onclick", this, "onClick");
	},
	
	onClick: function() {
		var pane = dojo.widget.byId(this.targetId);
		if(!pane){ return; }
		pane.explodeSrc = this.domNode;
		pane.toggleShowing();
	}
});
dojo.widget.tags.addParseTreeHandler("dojo:toggler");
