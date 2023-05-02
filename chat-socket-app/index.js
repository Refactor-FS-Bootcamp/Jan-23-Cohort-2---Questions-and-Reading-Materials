const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server)

const port = process.env.PORT || 8080
const publicDir = path.join(__dirname, './public')

io.on('connection', socket => {
    console.log('New WebSocket connection')
    socket.emit('message', 'Welcome to the Chat App!')
    socket.broadcast.emit('message', 'A new user has joined!')

    socket.on('sendMessage', (message, callback) => {
        io.emit('message', message)
        callback()
    })

    socket.on('disconnect', message => {
        io.emit('message', 'A user has left')
    })
})

app.use(express.static(publicDir))

server.listen(port, () => console.log(`Server is up on port ${port}`))