// general configuration file

// handles app routing
// using iron-routes
Router.map(function() { 
  this.route('home', {path: '/'}); // home screen - logo and local
  // this.route('hotel_landing'); // tap for hotels nearby
  // this.route('map'); // map selection
  // this.route('listings'); // listings selection
  // this.route('book'); // booking page
});