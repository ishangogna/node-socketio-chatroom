var express = require('express');
var socket = require('socket.io');

// app setup
app = express();


//port setup
var server = app.listen(3000,function(){
    console.log('now listening @ port 3000.')
})

//static files
app.use(express.static('public'));

//setup socketio on the server
var io = socket(server);

//listening for connection from socket.
//all information about that socket is made available in the socket argument.
io.on('connection',function(socket){
    console.log('socket: ' + socket.id + ' connection established.')

    //listen for custom events
    //Make sure to write the socket events inside the main connection.
    socket.on('chat',function(data){
    io.sockets.emit('chat',data);
})
});

