var app = require('./config/server');

app.listen(3000, function(){
	console.log('Servidor ON');
});

// var http = require('http');
// var app = require('./config/express')();

// http
//     .createServer(app)
//     .listen(app.get('port'), function () {
//         console.log('Listening 127.0.0.1:' + app.get('port'));
// });