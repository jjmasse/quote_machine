// create row data
RowData = new Meteor.Collection(); // creates an expiring mini-mongo db

// insert some dummy data
RowData.insert(globalValues.baseRowObject);

// application wide data
ApplicationData = new Meteor.Collection();

// default application data obj
var defaultApplicationData = {
	total_amount: '100.00'
};

ApplicationData.insert(defaultApplicationData); // add the default application data to the collection



