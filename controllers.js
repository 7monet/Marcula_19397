var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'Drukarka 3D ',
        'when': new Date('12-09-2012'),
        'thumbnailUrl':'img/g1.jpg'
        },
        { 'title':'przecinarka plazmowa CNC',
        'when': new Date('01-11-2014'),
        'thumbnailUrl':'img/g2.jpg'
        },
        { 'title':'Drukarka 3D SLA',
        'when' : new Date('04-29-2016'),
        'thumbnailUrl':'img/g3.jpg'
        },
        { 'title':'Frezarka CNC',
        'when' : new Date('09-21-2020'),
        'thumbnailUrl':'img/g4.jpg'
        }
    ];
    $scope.galleries.length;
});