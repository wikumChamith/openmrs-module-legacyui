/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
/*
 * jQuery UI Datepicker Patch for IE for month year dropdown
 *
 * Depends:
 *    jquery.ui.datepicker.js
 *
 *********************************************************************
 *  NOTE: THIS FILE MUST BE DELETED AFTER JQUERY UPGRADE
 *********************************************************************
 * THIS IS A PATCH TO FIX BUG IN JQUERY FOR DATEPICKER ON IE FOR MONTH YEAR DROPDOWN
 * IT'S ALREADY FIXED IN NEW VERSION OF JQUEYR  TICKET #6198
 * PLEASE, REMOVE THIS INCLUDE AFTER JQUERY UPGRADE
 */

(function( $, undefined ) {
    var dpuuid = new Date().getTime();
    $.extend($.datepicker, {
        __updateDatepicker: $.datepicker._updateDatepicker,
        _updateDatepicker: function(inst) {
            inst.dpDiv.find("select.ui-datepicker-year, select.ui-datepicker-month").removeAttr("onclick");
            this.__updateDatepicker(inst);
        }
    });
    window['DP_jQuery_' + dpuuid] = $;
})(jQuery);

