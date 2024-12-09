var fs = require("node:fs");
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

var express = require('express');
var app = express();
var server = require('https').Server(options,app);
var io = require('socket.io').listen(server);

var players=[];
var maxPlayers=8;



app.use('/images',express.static(__dirname + '/images'));
app.use('/lib',express.static(__dirname + '/lib'));
app.use('/sounds',express.static(__dirname + '/sounds'));
app.use('/scenes',express.static(__dirname + '/scenes'));

app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');
});

app.get('/controls',function(req,res){
    res.sendFile(__dirname+'/controls.html');
});

server.lastPlayderID = 0;


server.listen(process.env.PORT || 8000,"0.0.0.0",function(){
    console.log('Listening on '+server.address().port);
});



io.on('connection',function(socket){

    socket.on('createTarget',function(){
        if (server.lastPlayderID<4) {
            console.log("createTarget");
            socket.targetPlayer = {
                id: server.lastPlayderID,
                bullets: 4
            };

            //socket.emit('createTarget',socket.targetPlayer);
            socket.broadcast.emit('createTarget',socket.targetPlayer);
            socket.emit('setID',socket.targetPlayer);
        }else{
            socket.emit('resetGame',socket.targetPlayer);
        }
        

    });

    socket.on('moveTarget_v2',function(target){
        io.emit('moveTarget_v2',target);
    });

    socket.on('reloadGun',function(data){
        io.emit('reloadGun',data);
    });

    socket.on('centerCross',function(data){
        io.emit('centerCross',data);
    });

    socket.on('dispense',function(){
        console.log("dispense");
        io.emit('dispense');
    });

    socket.on('endGame',function(prizes){
        console.log("endGame",prizes);
        socket.broadcast.emit('endGame',prizes);
    });











    socket.on('reset',function(){
        console.log("reset");
        server.lastPlayderID = 0;
        //console.log("resetGame",server.lastPlayderID);
        socket.broadcast.emit('resetGame');
    });

    socket.on('pingo', function() {
        socket.broadcast.emit('pong');
        socket.emit('pong');
    });

    socket.on('disconnect',function(){
       // console.log("jugador desconectado",socket.targetPlayer)
        if (typeof socket.targetPlayer!="undefined") {
            io.emit('remove',);
        }
        
    });

    
});


