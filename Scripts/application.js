
"use strict";
var $;

var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};

// handles all of the page events and dispatches them to a handler, if one exists
RocknCoder.Pages.Kernel = function (event) {
	var that = this,
		eventType = event.type,
		pageName = $(this).attr("data-rockncoder-jspage");
	
	if (RocknCoder && RocknCoder.Pages && pageName && RocknCoder.Pages[pageName] && RocknCoder.Pages[pageName][eventType]) {
		RocknCoder.Pages[pageName][eventType].call(that);
	}
};

// hooks all of the page events
RocknCoder.App = function () {
	$("section[data-rockncoder-jspage]").on(
		'pagebeforecreate pagecreate pagebeforeload pagebeforeshow pageshow pagebeforechange pagechange pagebeforehide pagehide pageinit',
		RocknCoder.Pages.Kernel).on(
		"pageinit", RocknCoder.hideAddressBar);
} ();

$("section[data-RocknCoder-jspage]").on('pageinit', function (event) {
	RocknCoder.Pages.Kernel.call(this, event);
	if (RocknCoder.contacts.length === 0) {
		RocknCoder.contacts.fetch();
	}
});
