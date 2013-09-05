// handles app routing
// using iron-routes

Router.configure({
	layout: 'index',
	loadingTemplate: 'loading',
	notFoundTemplate: 'not_found'
});

Router.map(function() { 
  this.route('scratch_page', { // user comes into the app and we create a scratch page
  	template: 'scratch_page',
  	path: '/'
  });

  this.route('saved_page', {
  	template: 'index',
  	path: '/:_id' // takes the id passed from the URL so we can use it to perform a lookup
  });

});