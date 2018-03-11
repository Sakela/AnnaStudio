'use strict'

angular.
	module('artInstallations').
	component('artInstallations', {
		templateUrl: 'art-installations/art-installations.template.html',
		controller: function artInstallationsController($http) {
			var self = this;
			console.log('hi installations');
			$('#navHeader').addClass('nav-brand-section');
			$('.navbar-toggler').show();
			$('#navbarNav').addClass("collapse navbar-collapse");

			self.isActive = false;

			self.enlargeImage = function() {
				console.log('bam');
			}

			self.paintings;

			$http.get('art.json').then(function(response) {
				console.log(response);
				self.paintings = response.data;
			})
		}
	})