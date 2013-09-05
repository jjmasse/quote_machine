var mainUI = {}; // define the main ui obj

	mainUI.control = { // commands and helpers
		controlLabelContent: function(event, t) { // updates this rows label data
			console.log('need to update this instances label data');
			var that = event.currentTarget;
		},
		controlAmountContent: function(event, t) { // this things job is to capture the amount entered and get it cleaned up
			var that = event.currentTarget, // reference to current target
				enteredValue = that.value, // current entered value
				helpers = mainUI.helpers; // reference to the helpers obj

			helpers.roundInputValue(that, enteredValue); // update the value to only two spots after the decimal
		},
		toggleOpperation: function(event, t) {
			event.preventDefault();
			var $that = $(event.currentTarget), // wrap the current target in a jQuery object
				currentOpperation = $that.data('opperation'); // get the current opperation

			// update the opperation data associated with this row
			console.log('Update opperation');
		},
		deleteRow: function(event, t) {
			event.preventDefault();
			var $that = $(event.currentTarget);

			console.log('update total data by removing this row information');
		}
	};

	mainUI.helpers = { // helper methods
		roundInputValue: function(inputFieldToUpdate, inputFieldsCurrentValue) {
			var input = inputFieldToUpdate,
				text = inputFieldsCurrentValue;

			if(text !== '' && text !== '.') { // make sure we have a value to work with
				text = parseFloat(text);
				text = text.toFixed(2); // round to the second place
				input.value = text; // update the input field with the rounded value
			} else { // just empty this out - we have invalid input
				input.value = '';
			}
		}
	};

// js associated with the text and amount input fields
$(document).ready(function() {
	// template events
	Template.main_ui.events({ // events associated with the main_ui template
		'focusout .cost_input_field': mainUI.control.controlAmountContent, // controls the content entered - removes not needed characters and kicks off updating the data
		'keydown .cost_input_field': globalHelpers.keyDownAllowCurrency, // use globalHelpers method to prevent unwanted characters for currency
		'keydown .label_input_field': mainUI.control.controlLabelContent,
		'click .toggle_opperation': mainUI.control.toggleOpperation,
		'click .delete_row': mainUI.control.deleteRow
	});

	// wire in the data to build the rows
	Template.main_ui.rows = function() {
		return RowData.find({}); // get all of the records in rowdata and display them
	}

});