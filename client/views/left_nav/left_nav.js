$(document).ready(function(){
	var leftNav = {}; // left nav namespace


	leftNav.control = { // methods for ui elements
		addNewRow: function(event, t) {
			event.preventDefault();
			console.log('Create a new Mongo Row!!!');
			var defaultRowData = {
				label: '',
				amount: '',
				opperation: 'add',
				opperationSymbol: '+'
			};

			RowData.insert(defaultRowData); // add a new row to the row data store
		},
		addNewSection: function(event, t) {
			event.preventDefault();
			console.log('Build a new section');
		}
	};

	Template.left_nav.events({ // assigning events to the template
		'click #btn_add_item': leftNav.control.addNewRow,
		'click #btn_create_section': leftNav.control.addNewSection
	});
});