import socket from 'socket.io';
import express from 'express';
import http from 'http';
import ChatBot from './ChatBot';

const app = express();
const server = http.createServer(app);
const io = socket(server);
const bot = new ChatBot();

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', socket => {
    console.log('user connected');
    socket.on('chat message', msg => {
        let botAnswer = {textMessage: bot.answerToQuestions(msg), userId: "bot", userAvatar: bot.avatar};
        io.emit('chat message', msg);
        //simulate bot is waiting to answer
        setTimeout(() => {
            io.emit('bot answer', botAnswer);
        }, 1000);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(3000, () => {
    console.log('listening on *:3000');
});