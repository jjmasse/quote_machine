// handles app routing
// using iron-routes

// Router.configure({ TODO: need to setup the router configuration
// 	layout: 'index',
// 	loadingTemplate: 'loading',
// 	notFoundTemplate: 'not_found'
// });

Router.map(function() {
	// default route for visitors and new documents
	this.route('scratch_page', { // user comes into the app and we create a scratch page
	template: 'index',
	path: '/', // url with no unique hash
	data: function() { // create the documents and create assign the relationship
		
			DocumentData.insert(GlobalValues.blankDocument, function(error, id) {
				// set the session to the document id as the document session variable
				// once the document is created build out some new rows that will
				// get associated with this document profile
				Session.set('document', id);
				RowData.insert(GlobalValues.defaultRowData, function(error, id) {
		 			// assign the id of this document to the Document profile that was created
					DocumentData.update(Session.get('document'), {$set: {'rowData': id}});
				});
			});
		}
	});

	// pulls up an existing document for editing
	this.route('saved_page', {
		template: 'index',
		path: '/:_id' // takes the id passed from the URL so we can use it to perform a lookup
	});

});