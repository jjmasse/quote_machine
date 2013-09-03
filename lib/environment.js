// global values and helpers for the server and client
globalValues = { // a global object with any special rule values we need to store
	baseRowObject: { // default values for newly created rows
		label: '',
		amount: '',
		opperation: 'add',
		opperationSymbol: '+'
	}
};

globalHelpers = { // global object filled with nifty methods to aid other methods
	keyDownAllowCurrency: function(event, t) { // evaluates what the user typed and prevents alpha characters
		var shiftAllowedKeys = [38, 9], // up key | shift key
			allowedKeys = [8, 9, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57], // keys that are not allowed - typically characters
			keyPressed = event.which, // the key number that was pressed
			isValidKey = false, // a flag var to be used when needed for looping through keys
			currentTarget = event.currentTarget, // element that fired the event
			value = currentTarget.value, // current string value
			hasDecimal = value.split('.'); // used to determine if a decimal point exists
			
		if(hasDecimal.length <= 1) { // if there is no decimal from the current target then it is still allowed
			allowedKeys.push(190);
		}

		if(event.shiftKey === true) { // first if they are holding shift then check against allowed while shift keys
			for(var i = 0; i < shiftAllowedKeys.length; i++) {
				if(shiftAllowedKeys[i] === keyPressed) { // if there is a match - then we return true and allow it happen
					isValidKey = true;
					break; // stop the loop we found our answer
				}
			}

			if(!isValidKey) { // if it not a valid key while holding shift then prevent the event from propagating
				return false;
			} else {
				return true;
			}

		} else { // they are not holding shift and we need to compare against the allowed keys list
			for(var k = 0; k < allowedKeys.length; k++) {
				if(allowedKeys[k] === keyPressed) {
					isValidKey = true; // set the flag
					break; // stop the loop
				}
			}
			
			if(!isValidKey) {
				return false;
			} else {
				return true;
			}
		}
	}
};