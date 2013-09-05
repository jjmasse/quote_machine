// create row data
// RowData = new Meteor.Collection(); // creates an expiring mini-mongo db
RowData = new Meteor.Collection('quotes'); // get the quotes collection

console.log(RowData.find().count());


// insert some dummy data
// RowData.insert(globalValues.baseRowObject);



