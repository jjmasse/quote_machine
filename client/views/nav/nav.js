// nav bar namespace jagga
var nav = {};
nav.data = {};
nav.controls = {
	warnUser: function(event, template) {
		event.preventDefault();
		// fire off the warning modal
		$('#warn_window').modal(); // big trick l0l...
	},
	createBlankQuote: function(event, template) {
		event.preventDefault();
		// create a new blank doc and move the user over to it
		GlobalHelpers.generateNewBlankQuote();
	}
};

$(document).ready(function() { // we need a bit of jQuery for this to call upon the warning modal
	Template.nav.events({
		'click #btn_warn_user_of_delete': nav.controls.warnUser,
		'click #btn_create_new_blank_quote': nav.controls.createBlankQuote
	});
});