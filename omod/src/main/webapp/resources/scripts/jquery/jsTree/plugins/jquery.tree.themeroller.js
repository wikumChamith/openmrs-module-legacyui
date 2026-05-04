/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
(function ($) {
	$.extend($.tree.plugins, {
		"themeroller" : {
			defaults : {

			},
			callbacks : {
				oninit : function (t) {
					if(this.settings.ui.theme_name != "themeroller") return;
					var opts = $.extend(true, {}, $.tree.plugins.themeroller.defaults, this.settings.plugins.themeroller);
					this.container.addClass("ui-widget ui-widget-content");
					$("#" + this.container.attr("id") + " li a").live("mouseover", function () { $(this).addClass("ui-state-hover"); });
					$("#" + this.container.attr("id") + " li a").live("mouseout",  function () { $(this).removeClass("ui-state-hover"); });
				},
				onparse : function (s, t) {
					if(this.settings.ui.theme_name != "themeroller") return;
					var opts = $.extend(true, {}, $.tree.plugins.themeroller.defaults, this.settings.plugins.themeroller);
					return $(s).find("a").not(".ui-state-default").addClass("ui-state-default").children("ins").addClass("ui-icon").end().end().end();
				},
				onselect : function(n, t) {
					if(this.settings.ui.theme_name != "themeroller") return;
					var opts = $.extend(true, {}, $.tree.plugins.themeroller.defaults, this.settings.plugins.themeroller);
					$(n).children("a").addClass("ui-state-active");
				},
				ondeselect : function(n, t) {
					if(this.settings.ui.theme_name != "themeroller") return;
					var opts = $.extend(true, {}, $.tree.plugins.themeroller.defaults, this.settings.plugins.themeroller);
					$(n).children("a").removeClass("ui-state-active");
				}
			}
		}
	});
})(jQuery);