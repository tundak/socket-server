var http = require('http');
var server = http.createServer();
var socket = require( 'socket.io' );
var io = socket.listen( server );

io.sockets.on('connection', function(socket){

	socket.on('openOrders',function(val){
		var pair = val.pair;
		io.sockets.emit('openOrdersClient'+pair,val.data);

	});
		
});
server.listen(8443, function(){
  console.log('listening on *:8443');
});