// create row data
// RowData = new Meteor.Collection(); // creates an expiring mini-mongo db
RowData = new Meteor.Collection('quotes'); // get the quotes collection

if(Meteor.isServer && RowData.find().count() === 0) {
	var baseQuoteDocument = {
		name: 'sandbox',
		lastUpdate: '',
		rowData: [{
			label: '',
			amount: '',
			opperation: 'add',
			opperationSymbol: '+'
		}]
	}

	// lets add the base document to the collection
	RowData.insert(baseQuoteDocument);
	
}

// insert some dummy data
// RowData.insert(globalValues.baseRowObject);