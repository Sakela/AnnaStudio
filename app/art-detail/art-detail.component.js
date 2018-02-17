'use strict';

angular.
	module('artDetail').
	component('artDetail', {
		templateUrl: 'art-detail/art-detail.template.html',
		controller: ['$http', '$routeParams', 
			function ArtDetailController($http, $routeParams) {
				var self = this;

				$http.get('art.json').then(function(response) {
					var artData = response.data;
					console.log(artData);
				})
			}
		]
	});