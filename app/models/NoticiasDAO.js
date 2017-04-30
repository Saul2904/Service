
module.exports = function(){

console.log("achou o model");

	this.getNoticias = function(connection, callback){
		connection.query('select * from TBavisos', callback);
	}

	this.getNoticia = function(connection, callback){
		connection.query('select * from TBavisos where codAvisos = 2', callback);
	}

	return this;
}

function NoticiasDAO(connection){
	this._connection = connection;
	
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from TBavisos order', callback);
console.log('conecta');
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	console.log(id_noticia.id_noticia);
	this._connection.query('select * from TBavisos where codAvisos = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	this._connection.query('insert into TBavisos set ? ', noticia, callback)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from TBavisos limit 5', callback);
}

module.exports = function(){
	return NoticiasDAO;
}