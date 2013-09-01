// js associated with the text and amount input fields
$(document).ready(function() {
	var mainUI = {}; // define the main ui obj

	mainUI.control = { // commands and helpers
		controlAmountContent: function(event, t) { // this things job is to capture the amount entered and get it cleaned up
			var that = event.currentTarget, // reference to current target
				enteredValue = that.value, // current entered value
				helpers = mainUI.helpers; // reference to the helpers obj

			helpers.roundInputValue(that, enteredValue); // update the value to only two spots after the decimal
		},
		
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

	Template.main_ui.events({ // events associated with the main_ui template
		'focusout .cost_input_field': mainUI.control.controlAmountContent, // controls the content entered - removes not needed characters and kicks off updating the data
		'keydown .cost_input_field': globalHelpers.keyDownAllowCurrency // use globalHelpers method to prevent unwanted characters for currency
	});

});