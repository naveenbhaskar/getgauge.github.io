$(document).ready(function(e){e(".features-filter-selector-wrap").on("click",".features-selector",function(t){t.preventDefault(),event.stopPropagation(),e(this).closest(".features-filter-selector-wrap").addClass("active"),console.log("foo"),e("body").toggleClass("opened")}),e(".features-filter-selector-wrap").on("click",".features-filter-value",function(t){var s=e(this).attr("data-value"),a=e(this).text();e(this).closest(".features").removeClass().addClass("features "+s),e(this).closest(".features-filter-selector-wrap").removeClass("active").find(".features-selected-value").text(a)}),e(".sha-link").on("click",function(){e(this).parent().find(".sha-tooltip").toggle()}),e("body").on("click",function(){e(this).hasClass("opened")&&e(".features-filter-selector-wrap").hasClass("active")&&(e(".features-filter-selector-wrap").removeClass("active"),e("body").removeClass("opened"))})});