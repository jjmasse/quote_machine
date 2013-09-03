// create row data
RowData = new Meteor.Collection(); // creates an expiring mini-mongo db

// create the default data obj
var defaultRowData = {
	label: '',
	amount: '',
	opperation: 'add',
	opperationSymbol: '+'
};

// insert some dummy data
RowData.insert(defaultRowData);


// application wide data
ApplicationData = new Meteor.Collection();

// default application data obj
var defaultApplicationData = {}; 



