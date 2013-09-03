// js for total info row
$(document).ready(function() {

	// build out the sum of all amounts in stored rows and add them here

	var query = ApplicationData.find({}).total_amount;

	Template.total_info.total = function() {
		return ApplicationData.find({}).fetch().total_amount;
	}
});