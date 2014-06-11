(function() {
    'use strict';

    angular.module('hospDataVis', ['ngRoute', 'ngResource', 'ui.bootstrap', 'google-maps'])
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider.otherwise({
                redirectTo: '/'
            });
        });
})();