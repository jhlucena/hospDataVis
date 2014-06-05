(function() {
    'use strict';

    angular.module('recicla')
        .controller('HomeController', function($scope) {
            $scope.message = 'Hospital Vis';
        })
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                controller: 'HomeController',
                templateUrl: 'scripts/home/views/home.html'
            });
        });
})();