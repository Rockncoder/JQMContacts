
"use strict";
var $, _, Backbone;
var RocknCoder = RocknCoder || {};

var ContactCollectionView = Backbone.View.extend({
	initialize: function () {
		_.bindAll(this, 'render');
		this.template = _.template($('#contactlistview-template').html());
		this.collection.bind('reset', this.render);
		this.collection.bind('add', this.render);
		this.collection.bind('remove', this.render);
	},
	render: function () {
		$(this.el).html(this.template({ Contacts: this.collection.toJSON() }));
		// the ui-listview selector only calls refresh if JQM has already applied its mark up
		$(this.el).filter(".ui-listview").listview('refresh');
	}
});

RocknCoder.contactsCollectionView = new ContactCollectionView({
	collection: RocknCoder.contacts,
	el: '#contactlistview'
});
