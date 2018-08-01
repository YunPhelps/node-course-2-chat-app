const express = require('express'); 
const http = require('http'); 
const path = require('path'); 
const socketIO = require('socket.io'); 

const publicPath = path.join(__dirname, '../public');
const port  = process.env.PORT || 3000;
var app = express(); 
var server = http.createServer(app); 
var io = socketIO(server); 

app.use(express.static(publicPath)); 

//event listener
io.on('connection', (socket) => {
    console.log('New user connected'); 

    socket.emit('newMessage', {
        from: "yun@gmail.com", 
        text: "Yo what up", 
        createdAt: 33
    });

    socket.on('createMessage', (Message) => {
        console.log('createMessage', Message); 
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected'); 
    });
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`); 
});

//new message event, server emit, listen client
//data from, text, createdAt
//client print console.log and print data

//create message event, client emit, listen server
//data from, text
//created and socket.emit calls