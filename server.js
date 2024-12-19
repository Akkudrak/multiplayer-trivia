var fs = require("node:fs");
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

var express = require('express');
var app = express();
var server = require('https').Server(options,app);
var io = require('socket.io').listen(server);
// console.log('asd');
var players=[];
var maxPlayers=8;

var users = [];
// var quesList = {
//         'question':'¿En qué museo se encuentra la obra original La noche estrellada, de Van Gogh?',
//         'trueAnswer':1,
//         'answers':[
//             'Fleur de lis',
//             'Arte Moderno en NY',
//             'Priorato de Sion'
//         ]
//     };

app.use('/images',express.static(__dirname + '/images'));
app.use('/lib',express.static(__dirname + '/lib'));
app.use('/sounds',express.static(__dirname + '/sounds'));
app.use('/scenes',express.static(__dirname + '/scenes'));
app.use('/scenes_controls',express.static(__dirname + '/scenes_controls'));

app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');
});

app.get('/controls',function(req,res){
    res.sendFile(__dirname+'/controls.html');
});

server.lastPlayderID = 1;


server.listen(process.env.PORT || 8000,"0.0.0.0",function(){
    console.log('Listening on '+server.address().port);
});



io.on('connection',function(socket){

    socket.on('joinPlayer',function(){
        if (server.lastPlayderID<11) {
            console.log("createTarget");
            console.log(server.lastPlayderID);

            if(users.length > 0){
                socket.targetPlayer = {
                    id: server.lastPlayderID,
                    info:users,
                };
            }else{
                socket.targetPlayer = {
                    id: server.lastPlayderID,
                };
            }

            
            server.lastPlayderID++;
            //socket.emit('createTarget',socket.targetPlayer);
            // socket.broadcast.emit('createTarget',socket.targetPlayer);
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

    socket.on('endGame',function(prizes){
        console.log("endGame",prizes);
        socket.broadcast.emit('endGame',prizes);
    });
    socket.on('usedTeam',function(used){
        socket.broadcast.emit('usedTeam',used);
    })

    socket.on('selectedChara',function(select){
        socket.broadcast.emit('selectedCharacter',select);
    })

    socket.on('userReady',function(select){
        socket.broadcast.emit('userReadyView',select);
    })

    socket.on('sendSolution',function(finishInfo){
        console.log(finishInfo);
        socket.broadcast.emit('receiveSolution',finishInfo);
    })

    socket.on('testTeams',function(userList){
        
        users = userList;
        // console.log(users);
        // io.emit('testTeams',{name:"Team 1",players:users}); // A todos sin importar que! MEGAFONO DORADO
        socket.broadcast.emit('testTeams',{name:"Team",players:userList}); //Todos menos el emisor! MEGAFONO PLATA
    });
    socket.on('sendTopic',function(questions){
        console.log(questions);
        // io.emit('testTeams',{name:"Team 1",players:users}); // A todos sin importar que! MEGAFONO DORADO
        socket.broadcast.emit('receiveTopic',{topic:questions.topic, questList:questions.quest}); //Todos menos el emisor! MEGAFONO PLATA
    });

    socket.on('sendAnswer',function(questions){
        // io.emit('testTeams',{name:"Team 1",players:users}); // A todos sin importar que! MEGAFONO DORADO
        socket.broadcast.emit('showAnswer',true); //Todos menos el emisor! MEGAFONO PLATA
    });

    socket.on('sendResults',function(result){
        console.log(result);
        // io.emit('testTeams',{name:"Team 1",players:users}); // A todos sin importar que! MEGAFONO DORADO
        socket.broadcast.emit('receiveResults',JSON.stringify(result)); //Todos menos el emisor! MEGAFONO PLATA
    });

    

    socket.on('reset',function(){
        console.log("reset");
        server.lastPlayderID = 1;
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


