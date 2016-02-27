var nodeJsWebSocket =require('nodejs-websocket');
var socketServer = nodeJsWebSocket.createServer(function(connection){
	console.log('A new connection is established');
	connection.on('text', function(msg){
		socketServer.connections.forEach(function(con){
			con.sendText(msg);
		});
	});
});
socketServer.listen(9090);
console.log('Server listening on port 9090');