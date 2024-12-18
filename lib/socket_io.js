var Client = {};
Client.socket = io.connect();


Client.sendTest = function(){
    console.log("test sent");
    Client.socket.emit('test');
};

Client.sendReset = function(){
    Client.socket.emit('reset');
};

Client.sendendGame = function(prizes){
    Client.socket.emit('endGame',prizes);
};






Client.socket.on('createTarget',function(data){
    resume()
    console.log("start game",data);
    start=true;
    document.getElementById('phaser-example').classList.remove("hidden");
    document.getElementById('main').classList.add("hidden");
    backgroundMusic.stop();
    ongameMusic.play();

});


Client.socket.on('moveTarget_v2',function(data){
    game.scene.scenes[0].moveTarget(data);
});

Client.socket.on('reloadGun',function(data){
    cross[data.id].bulletsfired=cross[data.id].bulletsmax;
    cross[data.id].realoads++;
    game.scene.scenes[0].drawBullets(cross[data.id]);
});

Client.socket.on('centerCross',function(data){
    cross[data.id].x=mid_h;
    cross[data.id].y=mid_v;
});

Client.socket.on('dispense',function(data){
    console.log("endgame");
    endGame();
});

// Aqui estan llegando los monos
Client.socket.on('receiveTeam',function(data){
    console.log("llegando los monitos");
    // endGame();
});


Client.sendReset();

