// publish the document sets we need
DocumentData = new Meteor.Collection('documents'); // documents store references to their RowData
RowData = new Meteor.Collection('quotes'); // collection containing the quote content for a document
UsersData = new Meteor.Collection('users'); // collection of user accounts
