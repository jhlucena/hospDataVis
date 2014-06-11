(function () {
    'use strict';

    angular.module('hospDataVis')
        .controller('HomeController', function ($scope) {
            $scope.message = 'Hospital Vis';

            $scope.map = { center: {latitude: 18.5, longitude: -66.0}, zoom: 8 };
        })
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
                controller: 'HomeController',
                templateUrl: 'scripts/home/views/home.html'
            });
        });
})();