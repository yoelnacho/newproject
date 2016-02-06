'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */

 /*
Diferentes opciones para utilizar el scope:
Opción 1:
controller: la funcion puede pasar la variable $scope -> function($scope)
modelo: luego en el modelo las variable se declaran (ejemplo) $scope.users
html: {{users}}

Opción 2:
controller: la funcion no pasa variable
modelo: luego en el modelo las variable se declaran (ejemplo) this.users
html: ng.controller="ctrl as vm "{{vm.users}}, lo mismo se puede hacer cuando se define el router
controllerAs: vm .Este controlador sería vm
 */

angular.module('blog')
    .controller('BlogCtrl', function() {

        this.awesomeThings = [
            {
                id:1,
                title:'HTML3 Boilerplate',
                description:"oh si"
            },
            {
                id:2,
                title:'HTML4 Boilerplate',
                description:"oh no"
            },
            {
                id:3,
                title:'HTML5 Boilerplate',
                description:"oh oh"
            }
        ];
    });
