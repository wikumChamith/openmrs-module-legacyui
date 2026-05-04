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

dojo.provide("dojo.widget.Button2");
dojo.require("dojo.widget.Button");
dojo.require("dojo.widget.*");

dojo.widget.tags.addParseTreeHandler("dojo:button2");
dojo.widget.tags.addParseTreeHandler("dojo:dropdownbutton2");
dojo.widget.tags.addParseTreeHandler("dojo:combobutton2");

dojo.deprecated("dojo.widget.Button2", "Use dojo.widget.Button instead", "0.4");

dojo.requireAfterIf("html", "dojo.widget.html.Button2");

dojo.widget.Button2 = function(){}
dojo.inherits(dojo.widget.Button2, dojo.widget.Button);
dojo.lang.extend(dojo.widget.Button2, { widgetType: "Button2" });

dojo.widget.DropDownButton2 = function(){}
dojo.inherits(dojo.widget.DropDownButton2, dojo.widget.DropDownButton);
dojo.lang.extend(dojo.widget.DropDownButton2, { widgetType: "DropDownButton2" });

dojo.widget.ComboButton2 = function(){}
dojo.inherits(dojo.widget.ComboButton2, dojo.widget.ComboButton);
dojo.lang.extend(dojo.widget.ComboButton2, { widgetType: "ComboButton2" });
