const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});
io.on('connection', socket => {
    console.log('user connected');
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
http.listen(3000, () => {
    console.log('listening on *:3000');
});