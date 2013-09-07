var leftNav = {}; // left nav namespace

leftNav.control = { // methods for ui elements
	addNewRow: function(event, t) {
		event.preventDefault();
		// globalValues.baseRowObject
		// push a new row into the rowData
		RowData.update(Session.get('document'), {$push: {rowData: {rowId: Meteor.uuid(), amount: '', label: '', opperation: 'add', opperationSymbol: '+'}}});
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