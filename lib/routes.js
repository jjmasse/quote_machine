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
	data: function() {
			// generates a new blank document and sets the user to work
			GlobalHelpers.generateNewBlankQuote();
		}
	});


	// pulls up an existing document for editing
	this.route('saved_page', {
		template: 'index',
		path: '/:_id' // takes the id passed from the URL so we can use it to perform a lookup
	});

});