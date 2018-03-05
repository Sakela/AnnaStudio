'use strict';

angular.
	module('AnnaStudioApp').
	config(['$locationProvider','$routeProvider',
		function config($locationProvider,$routeProvider) {
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/home', {
					template: '<art-home></art-home>'
				}).
				when('/gallery', {
					template: '<art-list></art-list>'
				}).
				when('/gallery/:paintingId', {
					template: '<art-detail></art-detail>'
				}).
				when('/installations', {
					template: '<art-installations></art-installations>'
				}).
				when('/contacts', {
					template: '<art-contacts></art-contacts>'
				}).
				otherwise('/home');
		}
	]);