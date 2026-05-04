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

dojo.provide("dojo.widget.ContextMenu");

dojo.deprecated("dojo.widget.ContextMenu",  "use dojo.widget.Menu2", "0.4");

dojo.require("dojo.widget.*");
dojo.require("dojo.widget.DomWidget");

dojo.widget.ContextMenu = function(){
	dojo.widget.Widget.call(this);
	this.widgetType = "ContextMenu";
	this.isContainer = true;
	this.isOpened = false;
	
	// copy children widgets output directly to parent (this node), to avoid
	// errors trying to insert an <li> under a <div>
	this.snarfChildDomOutput = true;

}

dojo.inherits(dojo.widget.ContextMenu, dojo.widget.Widget);
dojo.widget.tags.addParseTreeHandler("dojo:contextmenu");

dojo.requireAfterIf("html", "dojo.widget.html.ContextMenu");
