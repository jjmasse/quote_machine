$(document).ready(function(){
	var leftNav = {}; // left nav namespace


	leftNav.rowCommands = { // methods for ui elements
		addNewRow: function(event, t) {
			event.preventDefault();
			console.log('Create a new Mongo Row!!!');
		},
		addNewSection: function(event, t) {
			event.preventDefault();
			console.log('Build a new section');
		}
	};

	Template.left_nav.events({ // assigning events to the template
		'click #btn_add_item': leftNav.rowCommands.addNewRow,
		'click #btn_create_section': leftNav.rowCommands.addNewSection
	});
});