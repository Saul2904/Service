module.exports.noticias = function(application, req, res){
   var connection = application.config.dbConnection();
   var noticiasModel = new application.app.models.NoticiasDAO(connection);

   noticiasModel.getNoticias(function(error, result){
      res.render("index", {noticias : result});
   });   
}

module.exports.noticia = function(application, req, res){
   var connection = application.config.dbConnection();
   var noticiasModel = new application.app.models.NoticiasDAO(connection);

   var id_noticia = req.query;

   var controller = {};
   
      controller.listaContatos = function(req, res) {
      res.json(noticias);
   };

 
}

/*module.exports = function() {
   var controller = {};
   console.log(noticias);
   
   controller.listaContatos = function(req, res) {
      res.json(contatos);
   };

   controller.obtemContato = function(req, res) {
      //console.log(req.params.id);

      var idContato = req.params.id;
      
      var filtrados = contatos.filter(function(contato) {
         return contato._id == idContato;
      });

      // O método filter sempre retorna um vetor,
      // mesmo que haja um só resultado. Por isso,
      // se houver encontrado alguém, pegamos a primeira
      // posição (0) do vetor
      if(filtrados.length > 0) { // Encontrou algo
         var contato = filtrados[0];
         res.json(contato);
      }
      else {
         res.status(404).send('Contato ' + idContato +
            ' não encontrado.');
      }
   }

   controller.removeContato = function(req, res){
      // O vetor contato é filtrado e sobrescrito 
      // de modo a deixar de fora o contato cujo 
      //id foi excluído
      contatos = contatos.filter(function(contato){
         return contato._id != req.params.id
      });
      //HTTP 204: OK, mas não há conteúdo na resposta
      res.status(204).end();
   }

   var ID_CONTATO_INC = 3; //Já existe três contatos

   controller.salvaContato = function(req, res){

      var contato = req.body;

      contato = contato._id ? atualiza(contato) : adiciona(contato);

      res.json(contato);
   }

   function adiciona(novo){
      novo._id = ++ID_CONTATO_INC;
      contatos.push(novo);
      return novo;
   }

   function atualiza(existente){
      contatos = contatos.map(function(contato){
         if(contato._id == existente._id){
            contato = existente;
         }
         return contato;
      });
      return existente;
      
   }

   return controller;

};*/