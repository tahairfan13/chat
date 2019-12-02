const express = require('express')
const app = express()
const socketio = require('socket.io')

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.send("HELLOW")
})

app.post('/send_message', (req, res) => {

})

const expressServer = app.listen(3000)
const io = socketio(expressServer)
io.on('connection', (socket) => {
    socket.emit('messageFromServer', {data: "Welcome to SocketIO server" })
    socket.on('messageToServer', (dataFromClient) => {
        console.log(dataFromClient)
    })
})