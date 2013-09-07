// set some namespace shizzal
var warningMessage = {};
warningMessage.data = {};
warningMessage.controls = {
	deleteDocument: function(event, template) {
		event.preventDefault();
		// removes the sessions current document
		DocumentData.remove(Session.get('document'));
		$('#warn_window').modal('hide');

		// use the global helper to set a new document to peer at
		GlobalHelpers.setAnAvailableDocument();
	}
};

$(document).ready(function() {
	// these events actually effect whether or not a document gets deleted
	Template.warning_message.events({
		'click #btn_delete_document': warningMessage.controls.deleteDocument
	});
});
