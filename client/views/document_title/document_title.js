// namespace for this piece
var documentTitle = {};
documentTitle.data = {};
documentTitle.controls = {
	updateDocumentTitle: function(event, template) {
		// takes the entered text and saves it as the documents title
		var newText = event.currentTarget.value; // get the value the peeps entered
		if(newText === '') { // if the thing comes out blank then make it untitled
			newText = 'untitled';
		}
		DocumentData.update({_id: Session.get('document')}, {$set: {title: newText}});
	}
};

// get the documents title into the text field
Template.document_title.documentData = function() {
	return DocumentData.findOne({_id: Session.get('document')});
};

// do the event thing here
Template.document_title.events({
	'keyup #document_title_input': documentTitle.controls.updateDocumentTitle
});