//make socket connection
var socket = io.connect('http://localhost:3000');


//DOM Elements
var message = document.getElementById('message');
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

//emit events
btn.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value,
    })
});

message.addEventListener('keypress',function(){
    socket.emit('typing', handle.value);
})

//listen for events from server

//listening for chat message
socket.on('chat',function(data){
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + '</strong>' + " " + data.message + '</p>';
});

//listening for typing handle
socket.on('typing',function(data){
    feedback.innerHTML = '<em><p>' + data + ' is typing... </em></p>';
})





