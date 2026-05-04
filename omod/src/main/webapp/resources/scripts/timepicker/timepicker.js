/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
function showTimePicker(obj) {
     var id = obj.id;
    if (!id) {
        obj.id = obj.name;
        if (!obj.id) {
            obj.id = "something_random" + (Math.random() * 1000);
        }
        id = obj.id;
    }
    var opts = { appendText: " " };
    
    var dp = new TimePicker(jsTimeFormat, id, opts);
    
    jQuery.timepicker.setDefaults(jQuery.timepicker.regional[jsLocale]);
    
	obj.onclick = null;
	dp.show();
	return false;
}

function showDateTimePicker(obj) {
    var id = obj.id;
    if (!id) {
        obj.id = obj.name;
        if (!obj.id) {
            obj.id = "something_random" + (Math.random() * 1000);
        }
        id = obj.id;
    }
    var opts = { appendText: " " };

    if (gp.weekStart)
		opts["firstDay"] = gp.weekStart;
	
    var dp = new DateTimePicker(jsDateFormat, jsTimeFormat, id, opts);
	
    jQuery.datepicker.setDefaults(jQuery.datepicker.regional[jsLocale]);
    jQuery.timepicker.setDefaults(jQuery.timepicker.regional[jsLocale]);
    
	obj.onclick = null;
	dp.show();
	return false;
}