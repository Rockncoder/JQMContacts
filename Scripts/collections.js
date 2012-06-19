
"use strict";
var Backbone;
var RocknCoder = RocknCoder || {};

var Contacts = Backbone.Collection.extend({
	model: RocknCoder.Contact,
	url: "api/contacts"
});

RocknCoder.contacts = new Contacts();
RocknCoder.contacts.comparator = function (contact) {
	return contact.get('lastName') + contact.get('firstName');
};
