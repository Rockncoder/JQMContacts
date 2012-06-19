
"use strict";
var $, _, console;

var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};

RocknCoder.Pages.home = function () {
	var pagebeforecreate = function () {
	},
	    pagecreate = function () {
	    },
	    pageinit = function () {
	    },
	    pagebeforeload = function () {
	    },
	    pagebeforeshow = function () {
	    	console.log("Home is ready: " + this.id);
	    },
	    pageshow = function () {
	    },
	    pagebeforechange = function () {
	    },
	    pagechange = function () {
	    },
	    pagebeforehide = function () {
	    },
	    pagehide = function () {
	    };
	return {
		pagebeforecreate: pagebeforechange,
		pagecreate: pagecreate,
		pagebeforeload: pagebeforeload,
		pagebeforeshow: pagebeforeshow,
		pageshow: pageshow,
		pagebeforechange: pagebeforechange,
		pagechange: pagechange,
		pagebeforehide: pagebeforehide,
		pagehide: pagehide
	};
} ();

RocknCoder.Pages.contacts = function () {
	var pagebeforeshow = function () {
		console.log("contacts is ready: " + this.id);
		$('.Contact').bind('click', function (event) {
			RocknCoder.CurrentContact = parseInt(this.id.replace("contact", ""), 10);
			$.mobile.changePage('#editcontact', { transition: 'slideup' });
		});
	},
		pagebeforehide = function () {
			$('.Contact').unbind('click');
		};
	return {
		pagebeforeshow: pagebeforeshow,
		pagebeforehide: pagebeforehide
	};
} ();

RocknCoder.Pages.addcontact = function () {
	var pagebeforeshow = function () {
		var that = this;

		console.log("add contact is ready: " + this.id);
		$('#saveAddContact').click(function (event) {
			var validObject = true,
			    newContact = {};

			$('.inputdata').each(function () {
				var id = this.id.replace("AddContact", ""),
				    info = $.trim(this.value);
				if (!info) {
					validObject = false;
				}
				newContact[id] = info;
			});

			if (validObject) {
				newContact = RocknCoder.contacts.create(newContact);

				// clear the input fields
				$('.inputdata').each(function () {
					this.value = "";
				});
			} else {
				alert("One or more fields are blank.");
			}
		});

		$('#cancelAddContact').click(function (event) {
			$('.inputdata').each(function () {
				this.value = "";
			});
		});
	},
	    pagehide = function () {
	    	$('#saveAddContact').unbind('click');
	    	$('#cancelAddContact').unbind('click');
	    };
	return {
		pagebeforeshow: pagebeforeshow,
		pagehide: pagehide
	};
} ();

RocknCoder.Pages.editcontact = function () {
	var pagebeforeshow = function () {
		var id = RocknCoder.CurrentContact,
		    contact = RocknCoder.contacts.get(RocknCoder.CurrentContact),
		    template = _.template($('#edit-template').html());

		if (id !== null && contact) {
			$('#edits').html(template({ Contact: contact.toJSON() }));

			$(this).trigger('pagecreate');
		}
	},
	    pageshow = function () {
	    	console.log("pageshow");
	    	$('#cancelEditContact', $.mobile.activePage).click(function (event) {
	    		history.back();
	    	});

	    	$('#updateEditContact', $.mobile.activePage).click(function (event) {
	    		console.log("updateEditContact");
	    	});

	    	$('#deleteEditContact', $.mobile.activePage).click(function (event) {
	    		console.log("deleteEditContact");
	    	});
	    },
	    pagehide = function () {
	    	$('#cancelEditContact').unbind('click');
	    	$('#updateEditContact').unbind('click');
	    	$('#deleteEditContact').unbind('click');
	    };
	return {
		pagebeforeshow: pagebeforeshow,
		pageshow: pageshow,
		pagehide: pagehide
	};
} ();

