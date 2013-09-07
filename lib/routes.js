// handles app routing
// using iron-routes

// Router.configure({ TODO: need to setup the router configuration
// 	layout: 'index',
// 	loadingTemplate: 'loading',
// 	notFoundTemplate: 'not_found'
// });

Router.map(function() {
	this.route('scratch_page', { // user comes into the app and we create a scratch page
	template: 'index',
	path: '/', // url with no unique hash
	data: function() { // add a new document to the database and assign its id to the session
		
		RowData.insert(RouterController.documentTemplate, function(error, id) {
	 		// set the users session with the id of the newly created document
			Session.set('document', id);
		});
	
	}
});

this.route('saved_page', {
	template: 'index',
	path: '/:_id' // takes the id passed from the URL so we can use it to perform a lookup
});