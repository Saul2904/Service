angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            //controller: 'ContatoController'
        });

        $routeProvider.when('/chamado', {
            templateUrl: 'partials/chamado.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/categoria', {
            templateUrl: 'partials/categoria.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/subcategoria', {
            templateUrl: 'partials/subcategoria.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/produto', {
            templateUrl: 'partials/produto.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/problema', {
            templateUrl: 'partials/problema.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/fechamento', {
            templateUrl: 'partials/fechamento.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/grupo', {
            templateUrl: 'partials/grupo.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/usuario', {
            templateUrl: 'partials/usuario.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/analista', {
            templateUrl: 'partials/analista.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/caixa', {
            templateUrl: 'partials/caixa.html',
           // controller: 'ContatoController'
        });
        $routeProvider.when('/auto1', {
            templateUrl: 'partials/autocate.html',
           // controller: 'ContatoController'
        });
        $routeProvider.when('/auto2', {
            templateUrl: 'partials/autoprob.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/fornecedor', {
            templateUrl: 'partials/fornecedor.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/avisos', {
            templateUrl: 'partials/avisos.html',
           // controller: 'ContatoController'
        });

        $routeProvider.when('/aviso', {
            templateUrl: 'partials/aviso.html',
           // controller: 'ContatoController'
        });

        $routeProvider.otherwise({redirectTo: '/home'});

    });