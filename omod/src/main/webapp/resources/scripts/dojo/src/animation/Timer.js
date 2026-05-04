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

dojo.provide("dojo.animation.Timer");
dojo.require("dojo.lang.func");

dojo.animation.Timer = function(intvl){
	var timer = null;
	this.isRunning = false;
	this.interval = intvl;

	this.onTick = function(){};
	this.onStart = null;
	this.onStop = null;

	this.setInterval = function(ms){
		if (this.isRunning) window.clearInterval(timer);
		this.interval = ms;
		if (this.isRunning) timer = window.setInterval(dojo.lang.hitch(this, "onTick"), this.interval);
	};

	this.start = function(){
		if (typeof this.onStart == "function") this.onStart();
		this.isRunning = true;
		timer = window.setInterval(this.onTick, this.interval);
	};
	this.stop = function(){
		if (typeof this.onStop == "function") this.onStop();
		this.isRunning = false;
		window.clearInterval(timer);
	};
};
