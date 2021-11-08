const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const port=4001

const app = express()

const server=http.createServer(app)

// const io=socketio(server)

// let userCount=0
const io = require("socket.io")(server,
    {cors : {origin: ["http://localhost:3000"]}});


io.on("connection", socket=>{

    const id=socket.handshake.query.id

    socket.join(id)

    socket.on('send_message',({recipients,text})=>{
        recipients.foreach(recipient=>{
            const newRecipients=recipients.filter(r=>r!==recipient)
            newRecipients.push(id)
            socket.broadcast.to(recipient).emit('recieve_message',{
                            recipients:newRecipients,sender:id,text
            })
        
        
        })
    })
    
    // userCount++

    // const username=`Guest ${userCount}`

    // socket.emit("SET_USERNAME",username)

    // io.sockets.emit("CREATE_MESSAGE",{
    //     content:`${username} connected`
    // })
    
    // socket.on("SEND_MESSAGE",mesageObject)
    // io.sockets.emit("CREATE_MESSAGE",mesageObject)

    // socket.on('disconnect', () => {
    //     io.sockets.emit("CREATE_MESSAGE",{
    //         content:`${username} disconnected`

    //     })
    // })



})
server.listen(port, () => {
    console.log('Server listening at port %d', port);
  });