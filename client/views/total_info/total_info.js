// js for total info row
$(document).ready(function() {
	var totalInfo = {};

	totalInfo.data = { // stores any data we need for total info
		totalAmount: 0
	};

	totalInfo.control = { // total info controller methods
		updateTotalAmount: function() { // whenever an amount changes - we re-run the generation of the amount
			// loop through each of the docs in RowData and generate a value
			var rows = RowData.find({}),
				newTotal = 0;
			rows.forEach(function(row) {
				var rowAmt = row.amount, // store the amount
					rowOpperationSymbol = row.opperationSymbol; // sums up the new total

				if(rowAmt !== '') {
					if(rowOpperationSymbol === '+') {
						newTotal  = newTotal + rowAmt;
					} else if(rowOpperationSymbol === '-') {
						newTotal = newTotal - rowAmt;
					}
				}
			});
			// pass off the new total
			return newTotal.toFixed(2);
		}
	};


	// automatically update the total row when data is changing
	Deps.autorun(function() { // whenever the data changes update the total amount
		totalInfo.data.totalAmount = totalInfo.control.updateTotalAmount();
	});

	Template.total_info.totalAmount = function() {
		return totalInfo.data.totalAmount;
	}
});