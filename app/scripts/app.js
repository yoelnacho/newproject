'use strict'; // Las variables que se utilicen en estas funcionaes quedan definidas dentro de ellas. Evita errores.

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 * Cargo los móidulos a utilizar en la aplicación y defino el ruteo de URL´s
 */

angular
    .module('blog', [
        'ngAnimate',
        'ngResource',
        'ngRoute'
    ])
    .config(function($locationProvider, $routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });

        //$locationProvider.html5Mode(true);
    });
