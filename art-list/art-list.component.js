'use strict';

//Define 'art-list' component with controller and template
angular.
	module('artList').
	component('artList', {
		templateUrl: 'art-list/art-list.template.html',
		controller: function ArtListController() {
			this.paintings = [
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
		}
	});