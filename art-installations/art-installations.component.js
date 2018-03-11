'use strict'

angular.
	module('artInstallations').
	component('artInstallations', {
		templateUrl: 'art-installations/art-installations.template.html',
		controller: function artInstallationsController($http) {
			var self = this;
			self.paintings;

			// Align brand name to the left and collapse nav links into hamburger menu
			$('#navHeader').addClass('nav-brand-section');
			$('#navbarNav').addClass("collapse navbar-collapse");
			$('#brand').removeClass('navbar-brand-centered');

			// Show/Hide hamburger menu toggler on medium device breakpoint
			if (window.innerWidth < 768) {
				$('.navbar-toggler').show();
			} else {
				$('.navbar-toggler').hide();
			}

			// Fetch paintings database from local json file
			$http.get('art.json').then(function(response) {
				self.paintings = response.data;
			})
		}
	})