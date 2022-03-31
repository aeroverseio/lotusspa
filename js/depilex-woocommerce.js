/* Template: Butter WooCommerce Theme | Author: Fluent-Themes */
/*----------------------------------------------------------*/
(function($) {

"use strict";

jQuery(document).ready(function($){
	
	//Styling sidebar widgets
	jQuery('.widget_product_search').addClass('widget_search_form').removeClass('widget_product_search');
	jQuery('.widget_layered_nav').addClass('cat-list').removeClass('widget_layered_nav');
	jQuery('.widget_layered_nav_filters').addClass('cat-list').removeClass('widget_layered_nav_filters');
	jQuery('.widget_product_categories').addClass('cat-list').removeClass('widget_product_categories');
	jQuery('.widget_rating_filter').addClass('cat-list').removeClass('widget_rating_filter');
});
}(jQuery));