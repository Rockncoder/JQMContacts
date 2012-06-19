
"use strict";

var Backbone;
var RocknCoder = RocknCoder || {};

RocknCoder.Contact = Backbone.Model.extend({
	initialize: function () {
		this.set({createdAt: new Date().getTime()});
	}
});
