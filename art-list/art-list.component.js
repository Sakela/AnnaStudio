'use strict';

//Define 'art-list' component with controller and template
angular.
	module('artList').
	component('artList', {
		templateUrl: 'art-list/art-list.template.html',
		controller: function ArtListController($http, $sce, $location) {
			var self = this;
			self.paintings;

			self.sortBy = 'price';
			// $('#navHeader').addClass('nav-brand-section');
			$('#navbarNav').addClass("collapse navbar-collapse");
			$('#brand').removeClass('navbar-brand-centered');

			if (window.innerWidth < 768) {
				$('.navbar-toggler').show();
			} else {
				$('.navbar-toggler').hide();
			}


			self.redirectToPainting = function(myEvent, painting) {
				console.log(myEvent.currentTarget);
		        $location.path('/gallery/' + painting.title);
			};

			$http.get('art.json').then(function(response) {
		        self.paintings = response.data;
			});

			// var url = "https://backend.deviantart.com/oembed?url=http%3A%2F%2Ffav.me%2Fd2enxz7&format=jsonp"
			// var trustedUrl = $sce.trustAsResourceUrl(url);

			// $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
			//     .then(function successCallback(response){
			//         console.log(response);
			//         self.paintings.push(response.data);
			//         self.setPaintingId();
			// 	}, function errorCallback(response){
			// 		console.log("erorr");
			// 	});

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