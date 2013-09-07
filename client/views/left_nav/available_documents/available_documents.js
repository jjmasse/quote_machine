// setup the templates namespace
var availableDocuments = {};
availableDocuments.data = {};
availableDocuments.controls = {
	switchDocument: function(event, template) { // resets the session to load up the selected documents content
		event.preventDefault();
		Session.set('document', this._id);
	}
};


// get the list of documents out to the template
Template.available_documents.documentList = function() {
	return DocumentData.find({}); // return all of the documents
};

// time for some events
Template.available_documents.events({
	'click .btn_set_document': availableDocuments.controls.switchDocument
});