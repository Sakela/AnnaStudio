/**
 * Created by Igor on 17.03.2016.
 */
app.controller ('MainController', ['$scope', function($scope) {
    $scope.apps = [
        {
            img : 'images/11.jpg',
            title : 'Stamp Flowers',
            price : 70,
            pubdate : new Date('2014', '11', '10')
        },
        {
            img : 'images/12.jpg',
            title : 'Simple Flowers',
            price : 35,
            pubdate : new Date('2015', '12', '08')
        },
        {
            img : 'images/13.jpg',
            title : 'Sad Singer',
            price : 95,
            pubdate : new Date('2016', '03', '08')
        },
        {
            img : '',
            title : '',
            price : '',
            pubdate : ''
        },
        {
            img : '',
            title : '',
            price : '',
            pubdate : ''
        },
        {
            img : '',
            title : '',
            price : '',
            pubdate : ''
        },
        {
            img : '',
            title : '',
            price : '',
            pubdate : ''
        },
        {
            img : '',
            title : '',
            price : '',
            pubdate : ''
        },
        {
            img : '',
            title : '',
            price : '',
            pubdate : ''
        }
    ]
}]);