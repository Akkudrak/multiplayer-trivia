export class Loading extends Phaser.Scene{
    constructor () {
        super({ key: 'Loading' });
    }

    init(){
        this.receiveTeam = false;
        this.membersGuild = [];
        this.guildsInfo;
        this.laps = 0;
        this.observer = 0;
        this.randomizerInterval;
        this.avaliableMembers = [];
        this.selectedUser = [];
    }

    preload(){
        loadFont("MikadoBold", "/lib/fonts/MikadoBold.otf");
        this.load.image('bgmain', '../images/gui/bg_main.png');
        this.load.image('charaSel', '../images/gui/playerSel.png');
        this.load.image('whitelist', '../images/gui/bg_teams.png');
        this.load.image('btnGreen', '../images/gui/btn_sm_green.png');

    }

    update(){
        if(guild){
            if(this.receiveTeam === false){
                this.receiveTeam = true;
                this.guildsInfo = new Array;
                var localVar = [];
                if(localStorage.getItem('avaliableMembers')){
                    this.avaliableMembers = JSON.parse(localStorage.getItem('avaliableMembers'));
                    console.log('sacados del local', this.avaliableMembers)
                    
                    this.avaliableMembers.forEach((pos,stp) => {
                        localVar[stp] = pos['val'];
                    })
                    guild.forEach((el,idx) => {
                        this.guildsInfo[idx] = { name: el, used: false, score:0, ready:false };
                        if(!localVar.includes(idx)){
                            this.guildsInfo[idx]['used'] = true;
                        }
                    })

                }else{

                    guild.forEach((el,idx) => {
                        this.guildsInfo[idx] = { name: el, used: false, score:0, ready:false };
                        this.avaliableMembers[idx] = {val:idx};
                        
                    })

                }

                

                

                this.tweens.add({
                    targets: this.loadingMoment,
                    y: -window.innerHeight/2,
                    duration: 500,
                    ease: 'Quad.easeInOut',     
                    easeParams: [],   
                    yoyo:false,
                    repeat:0,
                    onComplete: () => {
                        this.loadingMoment.destroy();
                        this.showGuild();
                    }
                  });

            }
        }
    }

    create(){

        this.background = this.add.image(window.innerWidth/2,window.innerHeight/2,'bgmain').setOrigin(0.5,0.5).setScale(2.9);
        this.loadingMoment = this.add.text(window.innerWidth/2, -window.innerHeight/2, 
            'CARGANDO...', { 
                fontSize: '3rem ',
                fontFamily: "MikadoBold",
                color: '#ffffff',
                stroke: '#2f4649',
                strokeThickness: 12,
            }).setOrigin(0.5,0.5);

            this.loadingScreen('show');

    }
    loadingScreen(mode) {

        if(mode == 'show'){
                this.tweens.add({
                    targets: this.loadingMoment,
                    y: window.innerHeight/2,
                    duration: 1000,
                    ease: 'Sine.easeInOut',     
                    easeParams: [],   
                    yoyo:false,
                    repeat:0,
                    onComplete: () => {
                        this.tweens.add({
                            targets: this.loadingMoment,
                            y: window.innerHeight/2 - 25,
                            duration: 1000,
                            ease: 'Sine.easeInOut',     
                            easeParams: [],   
                            yoyo:true,
                            repeat:-1
                          });
                    }
                  });
                
        }else{
            this.tweens.add({
                targets: this.loadingMoment,
                y: -window.innerHeight/2,
                duration: 1000,
                ease: 'Sine.easeInOut',     
                easeParams: [],   
                yoyo:true,
                repeat:-1
              });
        }

    }
    showGuild() {
        this.guild = this.add.image(window.innerWidth/2,window.innerHeight/2,'whitelist').setAlpha(0).setOrigin(0.5,0.5).setScale(1.8);
        if(this.avaliableMembers.length > 1){

            this.guild.setAlpha(1);
            var temp = this.add.rectangle(window.innerWidth/2,this.guild.y+this.guild.displayWidth/7, this.guild.displayWidth-this.guild.displayWidth/4,this.guild.displayHeight-this.guild.displayHeight/3.3,0x000000,0).setOrigin(0.5,0.5);
            this.selector = this.add.rectangle(window.innerWidth/2,window.innerHeight/2,100,100,0x000000,1).setOrigin(0.5,0.5);
            this.numberTeam = this.add.text(this.guild.x, this.guild.y-(this.guild.displayHeight/3),
                'EQUIPO #', {
                    fontSize: '3rem ',
                    fontFamily: "MikadoBold",
                    color: '#000000',
                    stroke: '1px'
                }).setOrigin(0.5,0.5);
                this.selector.setAlpha(0);
            this.guildsInfo.forEach((el,idx) => {
                this.membersGuild[idx] = this.add.text(this.guild.x, (temp.y - temp.displayHeight/2) + (this.numberTeam.displayHeight*1.5),
                        el.name, {
                        fontSize: '3rem ',
                        fontFamily: "MikadoBold",
                        color: '#000000',
                        stroke: '1px'
                    }).setOrigin(0.5,0.5);
                if(idx > 0){
                    this.membersGuild[idx].y = this.membersGuild[(idx-1)].y+this.numberTeam.displayHeight*1.5;
                }
                if(el.used==true){
                    this.membersGuild[idx].setAlpha(0.5);
                }
            })
            temp.destroy();

            setTimeout(() => {
                console.log('comenzando randomizador');
                this.randomizerInterval = this.time.addEvent({
                    delay: 100, // Tiempo en milisegundos (1 segundo)
                    callback: this.randomizerTeam,
                    callbackScope: this,
                    loop: 10 // Para que se repita indefinidamente
                  });
            },5000);
        }else{
            console.log('finish');
            Client.socket.emit('selectedChara', this.guildsInfo[this.avaliableMembers[0]['val']]);
            this.guildsInfo[this.avaliableMembers[0]['val']].used = true;
            this.selectedUser = this.guildsInfo[this.avaliableMembers[0]['val']];
            localStorage.setItem('avaliableMembers',JSON.stringify(this.avaliableMembers));
            this.showSelectedCharacter();
        }
        

    }

    showSelectedCharacter(){
        this.DNI = this.add.image(window.innerWidth/2,window.innerHeight/2,'charaSel').setOrigin(0.5,0.5).setScale(1.8);
        this.playerSelectedTitle = this.add.text(this.guild.x, this.guild.y,
            'JUGADOR', {
                fontSize: '3rem ',
                fontFamily: "MikadoBold",
                color: '#000000',
                stroke: '1px'
            }).setOrigin(0.5,0.5);

            this.playerSelectedTitle = this.add.text(this.guild.x, this.guild.y+this.playerSelectedTitle.displayHeight,
            this.selectedUser.name, {
                fontSize: '3rem ',
                fontFamily: "MikadoBold",
                color: '#000000',
                stroke: '1px'
            }).setOrigin(0.5,0.5);
            this.ready = this.add.image(window.innerWidth/2,window.innerHeight/2+(window.innerHeight/4),'btnGreen').setScale(1.5).setOrigin(0.5,0.5).setInteractive();
            this.playerReadyBtn = this.add.text(0, 0,
                'LISTO?', {
                    fontSize: '3rem ',
                    fontFamily: "MikadoBold",
                    color: '#FFFFFF',
                    stroke: '1px'
                }).setOrigin(0.5,0.5);
                this.playerReadyBtn.x = this.ready.x - this.playerReadyBtn.displayWidth/7;
                this.playerReadyBtn.y = this.ready.y - this.playerReadyBtn.displayWidth/5.5;

                this.membersGuild.forEach((el,idx) => {
                    this.membersGuild[idx].destroy();
                })

            this.ready.on('pointerdown',(pointer) => {
                pointer.event.stopPropagation();   
                console.log('provocar');
                this.selectedUser.ready = true;
                Client.socket.emit('userReady', this.selectedUser);

            });

    }
    
    randomizerTeam(){
        
        
        var remainingMembers;
        var numberRand = Math.floor(Math.random() * (this.avaliableMembers.length));
        var rand = this.avaliableMembers[numberRand];
        
        
        
        if(this.observer == 5){
            this.changeColorSel = '';
            this.randomizerInterval.destroy();
            this.observer = 0;
            // console.log(this.guildsInfo[rand['val']]);
            Client.socket.emit('selectedChara', this.guildsInfo[rand['val']]);
            this.guildsInfo[rand['val']].used = true;
            this.selectedUser = this.guildsInfo[rand['val']];
            this.avaliableMembers.splice(numberRand, 1);
            
            localStorage.setItem('avaliableMembers',JSON.stringify(this.avaliableMembers));
            console.log(localStorage.getItem('avaliableMembers'));
            this.guild.destroy();
            this.selector.destroy();
            this.numberTeam.destroy();
            this.membersGuild.forEach((el,idx) => {
                this.membersGuild[idx].setAlpha(0);
            })
            setTimeout(() => {
                this.showSelectedCharacter();
            },500)
            this.laps = 0;
        }else{

            this.membersGuild[rand['val']].setColor('#ffffff');
            this.selector.width = this.membersGuild[rand['val']].displayWidth + 20;
            this.selector.height = this.membersGuild[rand['val']].displayHeight + 20;
            this.selector.y = this.membersGuild[rand['val']].y+5;
            this.selector.x = this.guild.x;
            this.selector.setOrigin(0.5,0.5);
            this.changeColorSel = setTimeout(() => {
                this.membersGuild[rand['val']].setColor('#000000');    
            },100)
            
                        
            this.laps++;
            


            if(this.laps == (this.membersGuild.length-1)){
                this.laps = 0;
                this.observer++;
                console.log('vuelta no. ',this.observer);
            }
        }
        
    }

}

function loadFont(name, url) {
    var newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }