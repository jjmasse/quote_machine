// js for total info row
var totalInfo = {};

totalInfo.data = { // stores any data we need for total info
	totalAmount: 0
};

totalInfo.control = { // total info controller methods
	updateTotalAmount: function() { // whenever an amount changes - we re-run the generation of the amount
		// loop through all entries associated with this document
		var rows = RowData.find({associatedDocument: Session.get('document')}),
			newTotal = 0; // prepare the var that will become the new value
			
		// loops through all of the rows and creates a new sum
		rows.forEach(function(row) {
			var rowAmt = row.dollaAmount, // store the amount
				rowOpperationSymbol = row.opperation; // sums up the new total
			if(rowAmt !== '') {
				if(rowOpperationSymbol === '+') {
					newTotal = parseFloat(newTotal) + parseFloat(rowAmt);
				} else if(rowOpperationSymbol === '-') {
					newTotal = parseFloat(newTotal) - parseFloat(rowAmt);
				}
			}
		});
		// pass off the new total
		return newTotal.toFixed(2);
	}
};

// meteor templates are re-evaluated whenever something changes
Template.total_info.totalAmount = function() {
	totalInfo.data.totalAmount = totalInfo.control.updateTotalAmount();
	return totalInfo.data.totalAmount;
}