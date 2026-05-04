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

dojo.require("dojo.widget.Menu");
dojo.provide("dojo.widget.html.Menu");

/* HtmlMenu
 ***********/
 
dojo.widget.html.Menu = function(){
	dojo.widget.html.Menu.superclass.constructor.call(this);
	this.items = [];
}
dojo.inherits(dojo.widget.html.Menu, dojo.widget.HtmlWidget);

dojo.lang.extend(dojo.widget.html.Menu, {
	widgetType: "Menu",
	isContainer: true,

	// copy children widgets output directly to parent (this node), to avoid
	// errors trying to insert an <li> under a <div>
	snarfChildDomOutput: true,

	templateString: '<ul></ul>',
	templateCssPath: dojo.uri.dojoUri("src/widget/templates/Menu.css"),
	
	fillInTemplate: function (args, frag){
		//dojo.widget.HtmlMenu.superclass.fillInTemplate.apply(this, arguments);
		this.domNode.className = "dojoMenu";
	},
	
 
	_register: function (item ) {
		dojo.event.connect(item, "onSelect", this, "onSelect");
		this.items.push(item);
	},

	push: function (item) {
		this.domNode.appendChild(item.domNode);
		this._register(item);
	}

});

