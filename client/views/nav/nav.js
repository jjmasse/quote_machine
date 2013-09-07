// nav bar namespace jagga
var nav = {};
nav.data = {};
nav.controls = {
	warnUser: function(event, template) {
		event.preventDefault();
		// fire off the warning modal
		$('#warn_window').modal(); // big trick l0l...
	}
};

$(document).ready(function() { // we need a bit of jQuery for this to call upon the warning modal
	Template.nav.events({
		'click #btn_warn_user_of_delete': nav.controls.warnUser
	});
});