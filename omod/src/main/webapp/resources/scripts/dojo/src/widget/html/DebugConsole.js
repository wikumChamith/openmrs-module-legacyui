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

dojo.provide("dojo.widget.html.DebugConsole");

dojo.require("dojo.widget.*");
dojo.require("dojo.widget.FloatingPane");

dojo.widget.html.DebugConsole= function(){

	dojo.widget.html.FloatingPane.call(this);
	dojo.widget.DebugConsole.call(this);
}

dojo.inherits(dojo.widget.html.DebugConsole, dojo.widget.html.FloatingPane);

dojo.lang.extend(dojo.widget.html.DebugConsole, {
	fillInTemplate: function() {
		dojo.widget.html.DebugConsole.superclass.fillInTemplate.apply(this, arguments);
		this.containerNode.id = "debugConsoleClientPane";
		djConfig.isDebug = true;
		djConfig.debugContainerId = this.containerNode.id;
	}
});
