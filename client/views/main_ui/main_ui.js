var mainUI = {}; // define the main ui obj

	mainUI.control = { // commands and helpers
		controlLabelContent: function(event, t) {
			// save user entered content into this rows
			// document attribute
			var thatData = this; // in Meteor this is associated with the data that built the elements
			// console.log(this.uniqueId);
			// console.log(RowData.find({_id: Session.get('rows'), 'rows.uniqueId': this.uniqueId}));

			// RowData.update(
			// 	{_id: Session.get('rows'), 'rows.uniqueId': this.uniqueId},
			// 	{$set: {title: this.title}}
			// );

			RowData.update(Session.get('rows'), {$set: {rows: {$: this}}});
		},
		controlAmountContent: function(event, t) { // this things job is to capture the amount entered and get it cleaned up
			var that = event.currentTarget, // reference to current target
				enteredValue = that.value, // current entered value
				helpers = mainUI.helpers; // reference to the helpers obj

			helpers.roundInputValue(that, enteredValue); // update the value to only two spots after the decimal

			enteredValue = helpers.roundInputValue(enteredValue); // update the value with the rounded value
			that.value = enteredValue; // update the fields text value with what came back from the rounding function
			
			this.amount = enteredValue; // set the amount to the row
		},
		toggleOpperation: function(event, t) {
			event.preventDefault();
			var thatData = this, // store this things data
				opperation; // will become the next opperation

			if(thatData.opperationSymbol === '+') { // figure out what opperation we need to update this to
				opperation = '-';
			} else {
				opperation = '+';
			}

			console.log(this.opperationSymbol);

			this.opperationSymbol = opperation; // update the opperation symbol
		},
		deleteRow: function(event, template) {
			// remove this row from RowData by document using the uniqueId
			// of the clicked row
			event.preventDefault();
			RowData.update(Session.get('rows'), {$pull: {rows: {uniqueId: this.uniqueId}}});
		}
	};
	mainUI.helpers = { // helper methods
		roundInputValue: function(inputFieldsCurrentValue) {
			var text = inputFieldsCurrentValue;

			if(text !== '' && text !== '.') { // make sure we have a value to work with
				text = parseFloat(text);
				text = text.toFixed(2); // round to the second place
			} else { // just empty this out - we have invalid input
				text = '';
			}
			return text;
		}
	};

// js associated with the text and amount input fields
$(document).ready(function() {
	// template events
	Template.main_ui.events({ // events associated with the main_ui template
		'focusout .cost_input_field': mainUI.control.controlAmountContent, // controls the content entered - removes not needed characters and kicks off updating the data
		'keydown .cost_input_field': GlobalHelpers.keyDownAllowCurrency, // use globalHelpers method to prevent unwanted characters for currency
		'focusout .label_input_field': mainUI.control.controlLabelContent,
		'click .toggle_opperation': mainUI.control.toggleOpperation,
		'click .delete_row': mainUI.control.deleteRow
	});

	// find the document to render from the current session
	Template.main_ui.rowData = function() { // pull the content of the current session set
		return RowData.findOne({_id: Session.get('rows')}); // get all of the records in rowdata and display them
	}

});