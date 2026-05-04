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

dojo.provide("dojo.widget.MenuItem");
dojo.provide("dojo.widget.DomMenuItem");

dojo.deprecated("dojo.widget.MenuItem, dojo.widget.DomMenuItem",  "use dojo.widget.Menu2", "0.4");

dojo.require("dojo.string");
dojo.require("dojo.widget.*");

dojo.widget.tags.addParseTreeHandler("dojo:MenuItem");

/* MenuItem
 ***********/
 
dojo.widget.MenuItem = function(){
	dojo.widget.MenuItem.superclass.constructor.call(this);
}
dojo.inherits(dojo.widget.MenuItem, dojo.widget.Widget);

dojo.lang.extend(dojo.widget.MenuItem, {
	widgetType: "MenuItem",
	isContainer: true
});


/* DomMenuItem
 **************/
dojo.widget.DomMenuItem = function(){
	dojo.widget.DomMenuItem.superclass.constructor.call(this);
}
dojo.inherits(dojo.widget.DomMenuItem, dojo.widget.DomWidget);

dojo.lang.extend(dojo.widget.DomMenuItem, {
	widgetType: "MenuItem"
});

dojo.requireAfterIf("html", "dojo.html");
dojo.requireAfterIf("html", "dojo.widget.html.MenuItem");
