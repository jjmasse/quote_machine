// js associated with the text and amount input fields
$(document).ready(function() {
	var mainUI = {}; // define the main ui obj

	mainUI.control = { // commands and helpers
		controlAmountContent: function(event, t) { // this things job is to capture the amount entered and get it cleaned up
			var that = event.currentTarget, // reference to current target
				enteredValue = that.value, // current entered value
				helpers = mainUI.helpers; // reference to the helpers obj 
			helpers.cleanAndRepairAmount(that, enteredValue); // cleans and repairs inputs to dollars and cents
		},
		
	};

	mainUI.helpers = { // helper methods
		cleanAndRepairAmount: function(referenceToInputField, amountFromInputField) {
			var that = this, // reference to itself
				input = referenceToInputField,
				amt = amountFromInputField;

			// clean out any alpha characters in the string
			//input.value = this.removeAlpha(amt); // assigns the cleaned out string to the input field

			// see if this thing is a string
			if(typeof amt === 'string') {
				// console.log('it is a string');
			}

		},
		removeAlpha: function(stringValue) { // takes a string and returns the same string but without any alpha characters
			var str = stringValue;
			str = str.replace(/\D/g, ''); // regex sees D as anything that is not a number
			return str; // return a new string without any alpha characters
		}
	};

	Template.main_ui.events({ // events associated with the main_ui template
		'keyup .cost_input_field': mainUI.control.controlAmountContent,
		'keydown .cost_input_field': globalHelpers.keyUpAllowCurrency // use globalHelpers method to prevent unwanted characters for currency
	});

});