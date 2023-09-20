const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('draw', (data) => {
        socket.broadcast.emit('draw', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
function useEraser() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    // Set the eraser mode
    context.globalCompositeOperation = 'destination-out';
    context.strokeStyle = 'white'; // Set the line color to match the background (white)
}

