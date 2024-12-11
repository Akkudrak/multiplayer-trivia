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

var users=[
    [
        "Daniel Sandoval",
        "Oscar Alvarez",
        "Sandra Vera",
        "Lerings Rodríguez",
        "Sonia Marin",
        "Alfredo Pérez",
        "Alejandro Vargas"
    ],
    [
        "Hernán Lucas",
        "Iván Méndez",
        "Adolfo Soria",
        "Marco Hernández",
        "Karina Jiménez",
        "Estefanía Carrera",
        "Rodrigo Gonzalez"
    ],
    [
        "Sergio Molina",
        "Kasandra López",
        "José Zamora",
        "Bernardo Guerrero",
        "Aarón Cervantes",
        "Victor Corona",
        "Arturo Molina"
    ],
    [
        "Graciela",
        "Jaime Ortiz",
        "Guillermo Ortiz",
        "Carlos Espinoza",
        "Oscar Saucedo",
        "Marisela Sánchez",
        "Karen Marín"
    ],
    [
        "Aldo Eric Bahena",
        "Rubén Díaz",
        "Eduardo Beltran",
        "Alberto Santiago",
        "Estephania Krauletz",
        "Jenny Avelino",
        "Francisco Veneros"
    ],
    [
        "Rafael Alcalá",
        "Christian Mercado",
        "Santa Flores",
        "Beatriz Huerta",
        "Angel Gamboa",
        "Abraham Amaya",
        "Ricardo Daniel Gómez"
    ],
    [
        "Jonathan Cabrera",
        "Gabriel De Jesús ",
        "Flor Evangelina Sandoval",
        "Alan Yael Hernández",
        "Adriana Alonso",
        "Erik Anthony Sánchez",
        "Gustavo Cesar Valero"
    ],
    [
        "Armando Cuevas",
        "Alberto Sánchez",
        "Wulfrano Castillo",
        "Daniel Martin González",
        "Grecia Valentino",
        "Sergio Ivan Espitia",
        "Francisco Javier Martinez"
    ],
    [
        "Maria Guadalupe Garcia",
        "Jorge Brian Nava",
        "Eduardo Hernández",
        "Evelyn Deniss Gallegos",
        "Wendy Elizabeth Argumedo",
        "Karla Paola Arredondo",
        "Cristobal Ramos"
    ],
    [
        "Reyna Marisol Tovar",
        "Pablo Cureño",
        "Héctor Leonardo Ramos",
        "Diego Armando Ariza",
        "Anthony Mendoza",
        "Brian Sanchez",
        "Juan Carlos Zúñiga"
    ]
];


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
            socket.targetPlayer = {
                id: server.lastPlayderID,
                info:users,
            };
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

    
    socket.on('testTeams',function(prizes){
        
        console.log(users);
        // io.emit('testTeams',{name:"Team 1",players:users}); // A todos sin importar que! MEGAFONO DORADO
        socket.broadcast.emit('testTeams',{name:"Team 1",players:users}); //Todos menos el emisor! MEGAFONO PLATA
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


