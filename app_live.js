var https = require('https');
const fs = require('fs');

var server = https.createServer({
key: fs.readFileSync('/etc/ssl/tex.key'),
cert: fs.readFileSync('/etc/ssl/dc21fd1c8506908c.crt'),
//ca: fs.readFileSync('/etc/letsencrypt/live/global.easylife.community/chain.pem'),
NPNProtocols: ['http/2.0', 'spdy', 'http/1.1', 'http/1.0']
})

var socket = require( 'socket.io' );
var io = socket.listen( server );

//console.log('connection io');

io.sockets.on('connection', function(socket){

	socket.on('openOrders',function(val){
		var pair = val.pair;
		io.sockets.emit('openOrdersClient'+pair,val.data);

	});
	
});

server.listen(8443, function(){
  console.log('listening on *:8443');
});