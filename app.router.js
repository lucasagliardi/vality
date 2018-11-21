mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/cart', {
			templateUrl: 'cart/cart.html',
			controller: 'cartController'
		})
		.when('/identification/:id', {
			templateUrl: 'identification/identification.html',
			controller: 'identificationController'
		})
		.when('/simulation/:id', {
			templateUrl: 'simulation/simulation.html',
			controller: 'simulationController'
		})
		.when('/yourmusic', {
			templateUrl: 'yourMusic/yourMusic.html',
			controller: 'cartController'
		})
		.otherwise({
			redirectTo: '/cart'
		});
});