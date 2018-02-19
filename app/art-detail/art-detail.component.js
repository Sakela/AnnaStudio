'use strict';

angular.
	module('artDetail').
	component('artDetail', {
		templateUrl: 'art-detail/art-detail.template.html',
		controller: ['$http', '$routeParams', 
			function ArtDetailController($http, $routeParams) {
				var self = this;
				var artData;

				console.log($routeParams.paintingId);

				$http.get('art.json').then(function(response) {
					artData = response.data;
					console.log(artData);
					artData.forEach(function(item) {
						if(item.title === $routeParams.paintingId) {
							console.log(item.title);
							self.painting = item;
						}
					})
				});
			}
		]
	});