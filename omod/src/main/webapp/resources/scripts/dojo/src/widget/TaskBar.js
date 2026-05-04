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

dojo.provide("dojo.widget.TaskBar");
dojo.provide("dojo.widget.TaskBarItem");
dojo.require("dojo.widget.Widget");

dojo.widget.TaskBar = function(){
	dojo.widget.Widget.call(this);

	this.widgetType = "TaskBar";
	this.isContainer = true;
}
dojo.inherits(dojo.widget.TaskBar, dojo.widget.Widget);
dojo.widget.tags.addParseTreeHandler("dojo:taskbar");

dojo.widget.TaskBarItem = function(){
	dojo.widget.Widget.call(this);

	this.widgetType = "TaskBarItem";
}
dojo.inherits(dojo.widget.TaskBarItem, dojo.widget.Widget);
dojo.widget.tags.addParseTreeHandler("dojo:taskbaritem");

dojo.requireAfterIf("html", "dojo.widget.html.TaskBar");
