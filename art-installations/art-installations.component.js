'use strict'

angular.
	module('artInstallations').
	component('artInstallations', {
		templateUrl: 'art-installations/art-installations.template.html',
		controller: function artInstallationsController($http) {
			console.log('hi installations');

			var self = this;
			self.paintings;

			$http.get('art.json').then(function(response) {
				console.log(response);
				self.paintings = response.data;
			})
		}
	})