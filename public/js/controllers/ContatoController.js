angular.module('Service')
    .controller('ContatoController', 
        function($scope, $routeParams) {
            console.log($routeParams.contatoId);
        });