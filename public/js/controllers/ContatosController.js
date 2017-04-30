angular.module('contatooh').controller('ContatosController',
   function($scope, /*$http*/ $resource) {

      $scope.mensagem = {};
     

      var Noticias = $resource('noticias/:id');

      buscaContatos = function(){
         Contato.query(
         function(noticias){
            $scope.noticias = noticias;
            //$scope.mensagem = {};//
         },
         function(erro){
            $scope.mensagem = {
               class: 'danger',
               texto:'Não foi possivel obter alista de contatos'
            };
         }
      );
      }   

      buscaContatos();

      $scope.remove = function(noticias){
         Contato.delete({id : contato._id},
            function(){               
               buscaContatos();
               $scope.mensagem = {
                  class: "info",
                  texto: "Contato excluido com sucesso"
               };
            },
            function(erro){
               $scope.mensagem = {
                  class: "danger",
                  texto: "Não foi possivel escluir o contato"
               };

            }       
         );
      }

   	//$http({method: 'GET', url: '/contatos'});
   	/*
      $http.get('/contatos')
   		.then(function(res){
   			$scope.response = res.data;
   			$scope.contatos = res.data;
   		},
   		function(statusText){
   			console.log("Não foi possivel obter alista de contatos");
   			console.log(statusText);
   		});
*/
   	/*
      $scope.total = 0;     

      $scope.incrementa = function() {
         $scope.total++;
      }     

      $scope.contatos = [
      	{
      		'id': 1,
      		'nome': 'Contato angular 1',
      		'email': 'cont1@empresa.com.br'
      	},
      	{
      		'id': 2,
      		'nome': 'Contato angular 2',
      		'email': 'cont2@empresa.com.br'
      	},
      	{
      		'id': 3,
      		'nome': 'Contato angular 3',
      		'email': 'cont3@empresa.com.br'
      	}
      ];	 

		*/

		$scope.filtro = '';

   }
);