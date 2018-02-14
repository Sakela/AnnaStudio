'use strict';

//Define 'art-list' component with controller and template
angular.
	module('artList').
	component('artList', {
		templateUrl: 'art-list/art-list.template.html',
		controller: function ArtListController($http, $sce) {
			var self = this;
			self.paintings = [
				{
		            img : 'img/11.jpg',
		            title : 'Stamp Flowers',
		            price : 70,
		            pubdate : new Date('2014', '11', '10')
		        },
		        {
		            img : 'img/12.jpg',
		            title : 'Simple Flowers',
		            price : 35,
		            pubdate : new Date('2015', '12', '08')
		        },
		        {
		            img : 'img/13.jpg',
		            title : 'Sad Singer',
		            price : 95,
		            pubdate : new Date('2016', '03', '08')
		        },
		        {
		            img : 'img/11.jpg',
		            title : 'Stamp Flowers',
		            price : 70,
		            pubdate : new Date('2014', '11', '10')
		        },
		        {
		            img : 'img/12.jpg',
		            title : 'Simple Flowers',
		            price : 35,
		            pubdate : new Date('2015', '12', '08')
		        },
		        {
		            img : 'img/13.jpg',
		            title : 'Sad Singer',
		            price : 95,
		            pubdate : new Date('2016', '03', '08')
		        }
			];

			self.sortBy = 'price';

			var url = "https://backend.deviantart.com/oembed?url=http%3A%2F%2Ffav.me%2Fd2enxz7&format=jsonp"
			var trustedUrl = $sce.trustAsResourceUrl(url);

			$http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
			    .then(function successCallback(response){
			        console.log(response);
			        self.paintings.push(response.data);
			        self.setPaintingId();
				}, function errorCallback(response){
					console.log("erorr");
				});

			// var oembed_url = 'https://backend.deviantart.com/oembed?url=http%3A%2F%2Ffav.me%2Fd2enxz7&format=jsonp&callback=?';
			// $.getJSON(oembed_url, function(data) {
			//     console.log( data);
			// });

			self.setPaintingId = function() {
				self.paintings.forEach(function(painting) {
					painting.id = self.paintings.indexOf(painting);
				});
			}
		}
	});