'use strict'

angular.
	module('artHome').
	component('artHome', {
		templateUrl: 'art-home/art-home.template.html',
		controller: ['$http', 
		function ArtHomeController($http) {
			var self = this;

			// Center nav brand and hide hamburger menu
			$('#navHeader').removeClass('nav-brand-section');
			$('.navbar-toggler').hide();
			$('#brand').addClass('navbar-brand-centered');

			// var url = 'https://newsapi.org/v2/top-headlines?' +
			//           'country=us&' +
			//           'apiKey=0852f3cd69e04a5ca20cd3e34885dd32';
			// var req = new Request(url);
			// fetch(req)
			//     .then(function(response) {
			//         console.log(response.json());
			//     })

			// var url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0852f3cd69e04a5ca20cd3e34885dd32"
			// var trustedUrl = $sce.trustAsResourceUrl(url);

			// $http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
			//     .then(function successCallback(response){
			//         console.log(response);
			// 	}, function errorCallback(response){
			// 		console.log("erorr");
			// 	});

			/*$http.get('https://newsapi.org/v2/top-headlines?q=art&apiKey=0852f3cd69e04a5ca20cd3e34885dd32').
				then(function(response) {
					console.log(response);
					self.articles = response.data.articles;
					console.log(self.articles);

					self.articles.forEach(function(article) {
						console.log(article);
					});
				})*/

			
		}]
	})