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

//
// this widget provides Delphi-style panel layout semantics
//

dojo.provide("dojo.widget.LayoutContainer");
dojo.provide("dojo.widget.html.LayoutContainer");

dojo.require("dojo.widget.*");
dojo.require("dojo.html.layout");

dojo.widget.html.LayoutContainer = function(){
	dojo.widget.HtmlWidget.call(this);
}

dojo.inherits(dojo.widget.html.LayoutContainer, dojo.widget.HtmlWidget);

dojo.lang.extend(dojo.widget.html.LayoutContainer, {
	widgetType: "LayoutContainer",
	isContainer: true,

	layoutChildPriority: 'top-bottom',

	postCreate: function(){
		dojo.html.layout(this.domNode, this.children, this.layoutChildPriority);
	},

	addChild: function(child, overrideContainerNode, pos, ref, insertIndex){
		dojo.widget.html.LayoutContainer.superclass.addChild.call(this, child, overrideContainerNode, pos, ref, insertIndex);
		dojo.html.layout(this.domNode, this.children, this.layoutChildPriority);
	},

	removeChild: function(pane){
		dojo.widget.html.LayoutContainer.superclass.removeChild.call(this,pane);
		dojo.html.layout(this.domNode, this.children, this.layoutChildPriority);
	},

	onResized: function(){
		dojo.html.layout(this.domNode, this.children, this.layoutChildPriority);
	},

	show: function(){
		// If this node was created while display=="none" then it
		// hasn't been laid out yet.  Do that now.
		this.domNode.style.display="";
		this.checkSize();
		this.domNode.style.display="none";
		this.domNode.style.visibility="";

		dojo.widget.html.LayoutContainer.superclass.show.call(this);
	}
});

// This argument can be specified for the children of a LayoutContainer.
// Since any widget can be specified as a LayoutContainer child, mix it
// into the base widget class.  (This is a hack, but it's effective.)
dojo.lang.extend(dojo.widget.Widget, {
	layoutAlign: 'none'
});

dojo.widget.tags.addParseTreeHandler("dojo:LayoutContainer");
