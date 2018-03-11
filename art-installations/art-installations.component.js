'use strict'

angular.
	module('artInstallations').
	component('artInstallations', {
		templateUrl: 'art-installations/art-installations.template.html',
		controller: function artInstallationsController($http) {
			var self = this;

			$('#navHeader').addClass('nav-brand-section');
			$('#navbarNav').addClass("collapse navbar-collapse");
			$('#brand').removeClass('navbar-brand-centered');

			// Show/Hide hamburger menu toggler on medium device breakpoint
			if (window.innerWidth < 768) {
				$('.navbar-toggler').show();
			} else {
				$('.navbar-toggler').hide();
			}
			

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