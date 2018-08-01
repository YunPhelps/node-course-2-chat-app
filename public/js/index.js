var socket = io(); 

socket.on('connect', function () {
    console.log('Connected to server')

    socket.emit('createMessage', {
        to: "ravi@gmail.com", 
        text: "Hows college"
    });
}); 

//listening for disconnect from server, sends message
socket.on('disconnect', function () {
    console.log('Disconnected from server');            
});

socket.on('newMessage', function(message) {
    console.log('New Message', message); 
});