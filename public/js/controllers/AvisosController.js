angular.module('Service').controller('AvisosController',
   function($scope, $resource, Aviso) {

      $scope.mensagem = {};     
    
      buscaAvisos = function(){
         Aviso.query(
             function(avisos){
                 console.log(avisos);
            $scope.avisos = avisos;
            //$scope.mensagem = {};//
            
         },
         function(erro){
             console.log(erro)
            $scope.mensagem = {
               class: 'danger',
               texto:'Não foi possivel obter alista de contatos'
            };
         }
      );
      }   

      buscaAvisos();

      $scope.remove = function(avisos){
         Contato.delete({id : aviso._id},
            function(){               
               buscaAvisos();
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