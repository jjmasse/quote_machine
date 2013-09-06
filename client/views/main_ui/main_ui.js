var mainUI = {}; // define the main ui obj

	mainUI.control = { // commands and helpers
		controlLabelContent: function(event, t) { // updates this rows label data
			// console.log('need to update this instances label data');
			var that = event.currentTarget;
			RowData.update(this._id, {$set: {label: that.value}}); // use $set to set only the label in the selected document
		},
		controlAmountContent: function(event, t) { // this things job is to capture the amount entered and get it cleaned up
			var that = event.currentTarget, // reference to current target
				enteredValue = that.value, // current entered value
				helpers = mainUI.helpers; // reference to the helpers obj

			helpers.roundInputValue(that, enteredValue); // update the value to only two spots after the decimal

			enteredValue = helpers.roundInputValue(enteredValue); // update the value with the rounded value
			that.value = enteredValue; // update the fields text value with what came back from the rounding function
			
			RowData.update(this._id, {$set: {amount: enteredValue}}); // update the database with the new value
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

			RowData.update(this._id, {$set: {opperationSymbol: opperation}}); // update the doc with the next opperation
		},
		deleteRow: function(event, t) {
			event.preventDefault();
			var thatData = this; // store reference to this things data
			RowData.remove(thatData._id); // remove this record from the db
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
		'keydown .cost_input_field': globalHelpers.keyDownAllowCurrency, // use globalHelpers method to prevent unwanted characters for currency
		'focusout .label_input_field': mainUI.control.controlLabelContent,
		'click .toggle_opperation': mainUI.control.toggleOpperation,
		'click .delete_row': mainUI.control.deleteRow
	});

	// find the document to render from the current session
	Template.main_ui.documentInfo = function() { // pull the content of the current session set
		return RowData.findOne({_id: Session.get('document')}); // get all of the records in rowdata and display them
	}

});