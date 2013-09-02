// collection data
AppData = new Meteor.Collection(); // creates an expiring mini-mongo db

// insert some dummy data
AppData.insert({
	label: 'Test',
	amount: '100.00',
	opperation: 'add',
	opperationSymbol: '+'
});

