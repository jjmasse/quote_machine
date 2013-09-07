var leftNav = {}; // left nav namespace

leftNav.control = { // methods for ui elements
	addNewRow: function(event, t) {
		// addNewRow will add a new empty row to the current DataRow document
		event.preventDefault();
		RowData.update(Session.get('rows'), {$push: {rows: GlobalValues.defaultRowData}});
	},
	addNewSection: function(event, t) {
		event.preventDefault();
		console.log('Build a new section');
	}
};

$(document).ready(function() {
	Template.left_nav.events({ // assigning events to the template
		'click #btn_add_item': leftNav.control.addNewRow,
		'click #btn_create_section': leftNav.control.addNewSection
	});
});