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

dojo.provide("dojo.widget.DebugConsole");
dojo.require("dojo.widget.Widget");

dojo.widget.DebugConsole= function(){
	dojo.widget.Widget.call(this);

	this.widgetType = "DebugConsole";
	this.isContainer = true;
}
dojo.inherits(dojo.widget.DebugConsole, dojo.widget.Widget);
dojo.widget.tags.addParseTreeHandler("dojo:debugconsole");
dojo.requireAfterIf("html", "dojo.widget.html.DebugConsole");
