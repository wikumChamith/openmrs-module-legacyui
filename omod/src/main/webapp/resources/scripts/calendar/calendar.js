/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
function showCalendar(obj, yearsPrevious) {
	// if the object doesn't have an id, just set it to some random text so jq can use it
	if(!obj.id) {
		obj.id = "something_random" + (Math.random()*1000);
	}
	
	//set appendText to something so it doesn't automagically pop into the page
	var opts = { appendText: " " };
	
	//set yearPrevious to 110 if it has'nt been parsed in an argument
	if (!yearsPrevious){
		yearsPrevious= 110;
	}
	opts["yearRange"] = "c-" + yearsPrevious + ":c10";
	
	if (gp.weekStart)
		opts["firstDay"] = gp.weekStart;
	
	var dp = new DatePicker(jsDateFormat, obj.id, opts);
	jQuery.datepicker.setDefaults(jQuery.datepicker.regional[jsLocale]);
	obj.onclick = null;
	dp.show();
	return false;
}

/**
 * Overload the showCalendar(obj, yearsPrevious) function for support
 * future dates in jQuery date picker 
 * 
 * @param HTMLInputElement obj 			 HTML element
 * @param integer		   yearsPrevious Backward year range
 * @param yearsNext		   yearsNext	 Forward year range
 * @returns {Boolean}
 */
function showCalendar(obj, yearsPrevious, yearsNext) {
	
	// if the object doesn't have an id, just set it to some random text so jq can use it
	if(!obj.id) {
		obj.id = "something_random" + (Math.random()*1000);
	}

	//set appendText to something so it doesn't automagically pop into the page
	var opts = { appendText: " " };
	
	//set yearPrevious to 110 if it has'nt been parsed in an argument
	if (!yearsPrevious){
		yearsPrevious= 110;
	}

	//set yearsNext to 10 if it has'nt been parsed in an argument
	if (!yearsNext){
		yearsNext= 10;
	}
	
	opts["yearRange"] = "-"+yearsPrevious+":+"+yearsNext;

	if (gp.weekStart)
		opts["firstDay"] = gp.weekStart;
	
	var dp = new DatePicker(jsDateFormat, obj.id, opts);
	jQuery.datepicker.setDefaults(jQuery.datepicker.regional[jsLocale]);
	obj.onclick = null;
	dp.show();
	
	return false;
   
}

