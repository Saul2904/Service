angular.module('Service').factory('Aviso',
   function($resource) {
      return $resource('avisos');
   }
);