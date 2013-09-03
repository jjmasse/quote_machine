// js for total info row
$(document).ready(function() {

	// build out the sum of all amounts in stored rows and add them here

	var query = ApplicationData.find({});

	query.forEach(function(row) {
		console.log(row);
	});

	Template.total_info.total = function() {
		var test = '100.00';
		return test;
		//return ApplicationData.find({}).fetch().total_amount;
	}
});