'use strict';

angular.
	module('AnnaStudioApp').
	config(['$locationProvider','$routeProvider',
		function config($locationProvider,$routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/gallery', {
					template: '<art-list></art-list>'
				}).
				when('/gallery/:paintingId', {
					template: '<art-detail></art-detail>'
				}).
				otherwise('/gallery');
		}
	]);