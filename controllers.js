var portfolioApp = angular.module('portfolioApp',[]);



portfolioApp.controller('GalleryListCtrl', ['$scope', '$http', function($scope, $http) {
$http.get('img/galleries.json').success(function(data) {
$scope.galleries=data; 
});
//lab7
$scope.galleries.length;
$scope.sortList = [
    {
        'label':'Alfabetycznie',
        'value':'title'
    },
    {
        'label':'Chronologicznie',
        'value':'when'
    }
];
$scope.orderProp = 'when';

}]);
