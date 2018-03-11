'use strict'

angular.
	module('artContacts').
	component('artContacts', {
		templateUrl: 'art-contacts/art-contacts.template.html',
		controller: function artContactsController($http) {
			console.log('contacts page');
			// $('#navHeader').addClass('nav-brand-section');
			$('#navbarNav').addClass("collapse navbar-collapse");
			$('#brand').removeClass('navbar-brand-centered');

			if (window.innerWidth < 768) {
				$('.navbar-toggler').show();
			} else {
				$('.navbar-toggler').hide();
			}


			// send data to action.php on submit
					self.handleFormSubmit = function (booking) {

			            /*----
			            Un comment the following lines to enable action.php script
			            ----*/
					    $http.post('./scripts/action.php', booking).success(function (data, status) {
					        if (data.success) {
					            $window.alert("Thank you! Your message has been sent.");
					            self.booking = {};

					            // display success message
					            self.$parent.message = true;
					        }			
					    }).error(function (data, status) {
					        $window.alert("Sorry, there was a problem!");
					    });

						/*----
						Remove the following 2 lines of code to enable action.php script
						----*/
						// $scope.booking = {};
			   //          $scope.$parent.message = true;


					};
		}
	});