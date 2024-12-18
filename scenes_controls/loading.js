var thisTime=0;
var globalTimer=0;
var timerRunning=false;
export class Loading extends Phaser.Scene{
    constructor () {
        super({ key: 'Loading' });
    }

    graphics;

    init(){
        
        this.receiveTeam = false;
        this.receiveQuestions = false;
        this.saveUser = false;
        this.answerNow = false;
        this.resultsNow = false;
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
        this.load.image('artes', '../images/additionals/artes.png');
        this.load.image('res', '../images/gui/res.png');

    }

    update(){
        if (remmainingTime!=remmainingTimeOriginal) {
            globalTimer.setText(remmainingTime);
        }else{
            globalTimer.setText(0);
        }
        
        

        if(guild && !localStorage.getItem('selectedMember')){
            if(this.receiveTeam === false){
                this.receiveTeam = true;
                this.guildsInfo = new Array;
                var localVar = [];
                if(localStorage.getItem('avaliableMembers')){
                    this.avaliableMembers = JSON.parse(localStorage.getItem('avaliableMembers'));
                    // console.log('sacados del local', this.avaliableMembers)
                    
                    // console.log(this.avaliableMembers);
                    // console.log(this.selectedUser);
                    this.avaliableMembers.forEach((pos,stp) => {
                        localVar[stp] = pos['val'];
                    })
                    guild.forEach((el,idx) => {
                        this.guildsInfo[idx] = { name: el, id:idx,used: false, score:0, ready:false };
                        if(!localVar.includes(idx)){
                            this.guildsInfo[idx]['used'] = true;
                        }
                    })
                }else{
                    guild.forEach((el,idx) => {
                        this.guildsInfo[idx] = { name: el, id:idx,used: false, score:0, ready:false };
                        this.avaliableMembers[idx] = {val:idx};
                    })
                    localStorage.setItem('avaliableMembers',JSON.stringify(this.avaliableMembers));

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
                            // this.loadingMoment.destroy();
                                this.showGuild();
                        }
                    });
                }
            
        }

        if(localStorage.getItem('selectedMember') && !localStorage.getItem('topic')){
            if(this.saveUser === false){
                // localStorage.setItem('avaliableMembers',JSON.stringify(this.avaliableMembers));
                this.saveUser = true;
                this.selectedUser = JSON.parse(localStorage.getItem('selectedMember'));
                setTimeout(() => {
                    this.showSelectedCharacter();
                },500)
                

            }
        }

        if(localStorage.getItem('topic')){
            if(this.saveUser === false){
                this.saveUser = true;
                this.receiveQuestions = true;
                this.selectedUser = JSON.parse(localStorage.getItem('selectedMember'));
                setTimeout(() => {
                    this.loadingScreen('cerrar');
                    this.showSelectedCharacter();
                },500)
            }else if(this.receiveQuestions === false){
                this.receiveQuestions = true;
                this.selectedUser = JSON.parse(localStorage.getItem('selectedMember'));
                this.showTopic();
            }
        }
        
        if(receiveAnswer){
            if(this.answerNow === false){
                this.answerNow = true;
                this.loadingScreen('cerrar');
                this.showAnswer();
            }
        }


        if(resultGamer){
            if(this.resultsNow === false){
                this.resultsNow = true;
                this.showResult();

            }
        }

        //     if(this.anwserNow === false && this.receiveQuestions === false){
        //         this.saveUser = true;
        //         this.selectedUser = JSON.parse(localStorage.getItem('selectedMember'));
        //         this.anwserNow = true;
        //         this.loadingScreen('cerrar');
        //         this.showAwnser();
        //     }else{
        //         this.receiveQuestions = true;
        //         this.saveUser = true;
        //         this.selectedUser = JSON.parse(localStorage.getItem('selectedMember'));
        //         this.anwserNow = true;
        //         this.loadingScreen('cerrar');
        //         this.showTopic();
        //         this.showAwnser();
        //     }
        // }

        // else 
        // // Client.socket.emit('reloadUser');

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
            if(!localStorage.getItem('selectedMember')){
                this.loadingScreen('show');
            }
            this.guild = this.add.image(window.innerWidth/2,window.innerHeight/2,'whitelist').setOrigin(0.5,0.5).setScale(1.8);
            this.guild.setAlpha(0);

            this.guild = this.add.image(window.innerWidth/2,window.innerHeight/2,'whitelist').setOrigin(0.5,0.5).setScale(1.8);
            globalTimer=this.add.text(window.innerWidth/2,window.innerHeight, 
            "00:0"+thisTime, { 
                fontSize: 100,
                fontFamily: "MikadoBold",
                color: '#ffffff',
                stroke: '#2f4649',
                strokeThickness: 12,
            }).setOrigin(.5,1);
    }
    loadingScreen(mode,specialY,customY) {
        var posY;
        
        
        if(mode == 'show'){

            if(specialY && !customY){
                posY = (window.innerHeight-specialY)-50;
            }else if(customY){
                posY = customY;
            }else{
                posY = window.innerHeight/2;
            }

            // console.log('mostrando loadingBar');
                this.tweens.add({
                    targets: this.loadingMoment,
                    y: posY,
                    duration: 1000,
                    ease: 'Quad.easeInOut',
                    easeParams: [],
                    yoyo:false,
                    repeat:0,
                    onComplete: () => {
                        this.tweens.add({
                            targets: this.loadingMoment,
                            y: this.loadingMoment.y - 25,
                            duration: 1000,
                            ease: 'Quad.easeInOut',
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
                ease: 'Quad.easeInOut',     
                easeParams: [],   
                yoyo:false,
                repeat:0
              });
        }

    }
    showGuild() {
        // console.log('aqui deberia activar el guild');
        this.guild.setAlpha(1);
        if(this.avaliableMembers.length > 1){
            var temp = this.add.rectangle(window.innerWidth/2,this.guild.y+this.guild.displayWidth/7, this.guild.displayWidth-this.guild.displayWidth/4,this.guild.displayHeight-this.guild.displayHeight/3.3,0x000000,0).setOrigin(0.5,0.5);
            this.selector = this.add.rectangle(window.innerWidth/2,window.innerHeight/2,100,100,0x000000,1).setOrigin(0.5,0.5);
            this.numberTeam = this.add.text(this.guild.x, this.guild.y-(this.guild.displayHeight/3),
                'EQUIPO '+localStorage.getItem('idTeam'), {
                    fontSize: '3rem ',
                    fontFamily: "MikadoBold",
                    color: '#7d282a',
                    // stroke: '#3a1314',
                    // strokeThickness: 5,
                }).setOrigin(0.5,0.5);
                this.selector.setAlpha(0);
            this.guildsInfo.forEach((el,idx) => {
                this.membersGuild[idx] = this.add.text(this.guild.x, (temp.y - temp.displayHeight/2) + (this.numberTeam.displayHeight*1.5),
                        el.name, {
                        fontSize: '3rem ',
                        fontFamily: "MikadoBold",
                        color: '#7d282a',
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
            Client.socket.emit('selectedChara', this.guildsInfo[this.avaliableMembers[0]['val']]);
            this.guildsInfo[this.avaliableMembers[0]['val']].used = true;
            this.selectedUser = this.guildsInfo[this.avaliableMembers[0]['val']];
            localStorage.setItem('avaliableMembers',JSON.stringify(this.avaliableMembers));
            // this.showSelectedCharacter();
        }
        

    }
    showSelectedCharacter(){
        this.DNI = this.add.image(window.innerWidth/2,window.innerHeight/2,'charaSel').setOrigin(0.5,0.5).setScale(1.8);
        this.playerSelectedTitle = this.add.text(this.guild.x, this.guild.y,
            'JUGADOR', {
                fontSize: '3rem ',
                fontFamily: "MikadoBold",
                color: '#7d282a',
                stroke: '1px'
            }).setOrigin(0.5,0.5);

            this.playerSelectedAutor = this.add.text(this.guild.x, this.guild.y+this.playerSelectedTitle.displayHeight,
            this.selectedUser.name, {
                fontSize: '3rem ',
                fontFamily: "MikadoBold",
                color: '#7d282a',
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
                if(!localStorage.getItem('topic')){
                    Client.socket.emit('userReady', this.selectedUser);
                }
                this.playerReadyBtn.setAlpha(0);
                this.ready.setAlpha(0);

                this.tweens.add({
                    targets: this.DNI,
                    y: window.innerHeight/6,
                    duration: 500,
                    ease: 'Quad.easeInOut',
                    easeParams: [],   
                    yoyo:false,
                    repeat:0
                });
                this.tweens.add({
                    targets: this.playerSelectedTitle,
                    y: window.innerHeight/6,
                    duration: 500,
                    ease: 'Quad.easeInOut',
                    easeParams: [],   
                    yoyo:false,
                    repeat:0
                });
                this.tweens.add({
                    targets: this.playerSelectedAutor,
                    y: window.innerHeight/5,
                    duration: 500,
                    ease: 'Quad.easeInOut',
                    easeParams: [],   
                    yoyo:false,
                    repeat:0,
                    OnComplete: () => {
                        if(!localStorage.getItem('questList')){
                            this.loadingScreen('show',this.DNI.displayHeight);
                        }else{
                            
                            this.loadingScreen('close');
                            this.showTopic();
                        }
                    }
                });
                

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
            localStorage.setItem('selectedMember',JSON.stringify(this.guildsInfo[rand['val']]));
            // console.log(localStorage.getItem('avaliableMembers'));
            this.guild.setAlpha(0);
            this.selector.destroy();
            this.numberTeam.destroy();
            this.membersGuild.forEach((el,idx) => {
                this.membersGuild[idx].setAlpha(0);
            })
            // setTimeout(() => {
            //     this.showSelectedCharacter();
            // },500)
            this.laps = 0;
        }else{

            this.membersGuild[rand['val']].setColor('#ffffff');
            this.selector.width = this.membersGuild[rand['val']].displayWidth + 20;
            this.selector.height = this.membersGuild[rand['val']].displayHeight + 20;
            this.selector.y = this.membersGuild[rand['val']].y+5;
            this.selector.x = this.guild.x;
            this.selector.setOrigin(0.5,0.5);
            this.changeColorSel = setTimeout(() => {
                this.membersGuild[rand['val']].setColor('#7d282a');    
            },100)
            
                        
            this.laps++;
            


            if(this.laps == (this.membersGuild.length-1)){
                this.laps = 0;
                this.observer++;
                console.log('vuelta no. ',this.observer);
            }
        }
        
    }
    showTopic(){

        this.catTitle = this.add.text(this.guild.x, this.guild.y-(this.DNI.displayWidth/3),
            'CATEGORIA\n'+localStorage.getItem('topic'), {
                fontSize: '4rem ',
                fontFamily: "MikadoBold",
                color: '#FFFFFF',
                align: "center",
                stroke: '#2f4649',
                strokeThickness: 18,
            }).setOrigin(0.5,0.5);
        this.catBack = this.add.rectangle(this.catTitle.x,this.catTitle.y,this.catTitle.displayWidth,this.catTitle.displayHeight,0xffffff,0).setOrigin(0.5,0.5);
        this.iconCategory = this.add.image(window.innerWidth/2,window.innerHeight/2+this.DNI.displayWidth/2.5,localStorage.getItem('topic').toLowerCase()).setOrigin(0.5,0.5).setScale(1);
        this.iconCategory.setAngle(Math.floor(Math.random() * 91) - 45);
        this.tweens.add({
            targets: this.iconCategory,
            y: this.iconCategory.y - 25,
            duration: 1000,
            ease: 'Quad.easeInOut',
            easeParams: [],
            yoyo:true,
            repeat:-1
        });
        this.playerReadyBtn.destroy();
        this.ready.destroy();
        this.startQuest = this.add.image(window.innerWidth/2,window.innerHeight-(window.innerHeight/10),'btnGreen').setScale(1.5).setOrigin(0.5,0.5).setInteractive();
        this.startQuestText = this.add.text(0, 0,
            'Comenzar', {
                fontSize: '3rem ',
                fontFamily: "MikadoBold",
                color: '#FFFFFF',
                stroke: '1px'
            }).setOrigin(0.5,0.5);
            this.startQuestText.x = this.startQuest.x - this.startQuestText.displayWidth/8;
            this.startQuestText.y = this.startQuest.y - this.startQuestText.displayWidth/8;
        // this.startQuest.on('pointerdown',(pointer) => {

            setTimeout(() =>{
                this.startQuestText.setAlpha(0);
                this.startQuest.setAlpha(0);
                this.iconCategory.setAlpha(0);
                this.catTitle.setAlpha(0);
                this.showQuestion();
            },2000)
        // })
    }
    showQuestion(){
        let centerSpecial = 0;
        let quest = JSON.parse(localStorage.getItem('questList'));
        // let lorem = ;
        let loremResult  = quest['question'];
        // lorem = lorem.split(' ');
        // let loremResult = '';
        // lorem.forEach((el,idx) => {
        //     if(idx == 0){
        //         loremResult += '\n'+el+' ';
        //     }else if(idx % 4 === 0 ){
        //         loremResult += ' '+el+'\n';
        //     }else if(idx == lorem.length-1){
        //         loremResult += ''+el+'\n';
        //     }else{
        //         loremResult += ' '+el+' ';
        //     }
        // })

        
        this.questionNow = this.add.text(window.innerWidth/2, window.innerHeight/2-(window.innerHeight/12),
            loremResult, {
                fontSize: '3rem ',
                fontFamily: "MikadoBold",
                color: '#FFFFFF',
                align: "center",
                stroke: '#2f4649',
                strokeThickness: 18,
                wordWrap: { width: window.innerWidth-50, useAdvancedWrap: true }
            }).setOrigin(0.5,0.5).setDepth(2);
            this.questionNow.setPadding(30,30);
            this.squareQuest = this.add.rectangle(this.questionNow.x,this.questionNow.y,window.innerWidth,this.questionNow.displayHeight,0xFFFFFF,0.5).setOrigin(0.5,0.5);

        let posIni = (this.squareQuest.y+this.squareQuest.displayHeight/2);
        let middlePos = window.innerHeight - posIni;
        centerSpecial = window.innerHeight - middlePos/2;
        

        if(localStorage.getItem('momentAnswer')){
            receiveAnswer = true;
        }else{
            this.loadingScreen('show',0,centerSpecial);
        }

    }
    showAnswer(){
        

        let infoQuest = JSON.parse(localStorage.getItem('questList'));
        let posIni = (this.squareQuest.y+this.squareQuest.displayHeight/2);
        let middlePos = window.innerHeight - posIni;

        this.optionsQuest = [];
        this.loadingScreen('show','',-window.innerHeight/2);
        infoQuest['answers'].forEach((el,idx) => {
            
            this.optionsQuest[idx] = this.add.text(window.innerWidth/2, (window.innerHeight - (middlePos/1.25) +  + ((middlePos/3.5)*idx)),
                el, {
                    fontSize: '2.5rem ',
                    fontFamily: "MikadoBold",
                    color: '#ffffff',
                    stroke: '#2f4649',
                    strokeThickness: 18,
                    wordWrap: { width: window.innerWidth-50, useAdvancedWrap: true }
                }).setOrigin(0.5,0.5).setDepth(2).setInteractive();
            // this.optionsQuest[idx]['icon'] = this.add.image(window.innerWidth/2, (window.innerHeight - (middlePos/1.25) +  + ((middlePos/3.5)*idx)),'res').setOrigin(0.5,0.5).setScale(1.5).setInteractive();
            this.optionsQuest[idx].on('pointerdown',(pointer) => {

                this.tweens.add({
                    targets: this.optionsQuest[idx],
                    tint: 0xff0000,
                    duration: 100,
                    ease: 'Quad.easeInOut',     
                    easeParams: [],   
                    yoyo:true,
                    repeat:1,
                    onComplete: () => {
                        console.log('Elegiste a bulbasur');
                        forceEndTimer=true;
                        this.selectAnswer(el,idx,infoQuest);
                    }
                });

            })
        })
    }
    showResult(){
        this.loadingScreen('show',0,-window.innerHeight/2);
        this.questionNow.destroy();
        this.squareQuest.destroy();
        this.optionsQuest.forEach((el,idx) => {
            this.optionsQuest[idx].destroy();
        })
        localStorage.setItem('avaliableMembers',JSON.stringify(this.avaliableMembers));
        resultGamer.forEach((el) => {
            if(el.name == this.selectedUser.name){
                console.log('tu resultado es: ');
                console.log(el.status);

                this.ResultTitle = this.add.text(window.innerWidth/2, window.innerHeight/2,
                el.status.toUpperCase(), {
                    fontSize: '6rem ',
                    fontFamily: "MikadoBold",
                    color: '#ffffff',
                    stroke: '#2f4649',
                    strokeThickness: 18,
                    wordWrap: { width: window.innerWidth-50, useAdvancedWrap: true }
                }).setOrigin(0.5,0.5).setDepth(5)
                this.tweens.add({
                    targets: this.ResultTitle,
                    y: this.ResultTitle.y-25,
                    duration: 500,
                    ease: 'Quad.easeInOut',     
                    easeParams: [],   
                    yoyo:true,
                    repeat:-1,
                    onComplete: () => {

                    }
                });

                this.finishEvent = this.add.image(window.innerWidth/2,window.innerHeight-(window.innerHeight/5),'btnGreen').setScale(1.5).setOrigin(0.5,0.5).setInteractive();
                this.finishEventText = this.add.text(0, 0,
                'Repetir', {
                    fontSize: '3rem ',
                    fontFamily: "MikadoBold",
                    color: '#FFFFFF',
                    stroke: '1px'
                }).setOrigin(0.5,0.5);
                this.finishEventText.x = this.finishEvent.x - this.finishEventText.displayWidth/8;
                this.finishEventText.y = this.finishEvent.y - this.finishEventText.displayWidth/8;


                this.tryAgain = this.add.image(window.innerWidth/2,window.innerHeight-(window.innerHeight/10),'btnGreen').setScale(1.5).setOrigin(0.5,0.5).setInteractive();
                this.tryAgainText = this.add.text(0, 0,
                'Finalizar', {
                    fontSize: '3rem ',
                    fontFamily: "MikadoBold",
                    color: '#FFFFFF',
                    stroke: '1px'
                }).setOrigin(0.5,0.5);
                this.tryAgainText.x = this.tryAgain.x - this.tryAgainText.displayWidth/8;
                this.tryAgainText.y = this.tryAgain.y - this.tryAgainText.displayWidth/8;
                
                this.finishEvent.on('pointerdown',(pointer) => {

                });



            }
        });
    }
    selectAnswer(option, position,info){
        let centerSpecial = 0;
        this.guildsInfo = new Array;


        console.log("option",option);
        console.log("position",position);
        console.log("info",info);
        console.log(localStorage.getItem('questList'));
        let posIni = (this.squareQuest.y+this.squareQuest.displayHeight/2);
        let middlePos = window.innerHeight - posIni;
        centerSpecial = window.innerHeight - middlePos/2;
        var localVar = [];
        this.optionsQuest.forEach((el,idx) => {
            this.optionsQuest[idx].destroy();
            // this.optionsQuest[idx]['icon'].destroy();
        })
        this.loadingScreen('show',0,centerSpecial);
        
        if(localStorage.getItem('avaliableMembers')){
            // console.log(localStorage.getItem('avaliableMembers'));
            this.avaliableMembers = JSON.parse(localStorage.getItem('avaliableMembers'));
            
            // this.avaliableMembers.forEach((pos,stp) => {
            //     localVar[stp] = pos['val'];
            // });
            // JSON.parse(localStorage.getItem('dataInfo')).forEach((el,idx) => {
            //     this.guildsInfo[idx] = { name: el, id:idx,used: false, score:0, ready:false };
            //     if(!localVar.includes(idx)){
            //         this.guildsInfo[idx]['used'] = true;
            //     }
            // });
            // guild.forEach((el,idx) => {
            //     this.guildsInfo[idx] = { name: el, id:idx,used: false, score:0, ready:false };
            //     if(!localVar.includes(idx)){
            //         this.guildsInfo[idx]['used'] = true;
            //     }
            // })
            
        }
        
        if(option == ''){
            if(position == info['trueAnswer']){
                var nameSelected = this.selectedUser['name'];
                this.avaliableMembers.splice(this.selectedUser['id'], 1);
                // localStorage.setItem('avaliableMembers',JSON.stringify(this.avaliableMembers));
                // if(localStorage.getItem('winners')){
                //     let winna = JSON.parse(localStorage.getItem('winners'));
                //     winna.push(nameSelected);
                //     localStorage.setItem('winners',JSON.stringify(winna));
                // }else{
                //     let winna = {
                //         nameSelected
                //     };
                //     localStorage.setItem('winners',JSON.stringify(winna));
                // }
                Client.socket.emit('sendSolution',{
                    user: JSON.parse(localStorage.getItem('selectedMember')),
                    answer: option,
                    valid: true,
                });
                console.log('ganaste :3');
            }else{
                Client.socket.emit('sendSolution',{
                    user: JSON.parse(localStorage.getItem('selectedMember')),
                    answer: option,
                    valid: false,
                });
            }
        }else{
            Client.socket.emit('sendSolution',{
                user: JSON.parse(localStorage.getItem('selectedMember')),
                answer: option,
                valid: false,
            });
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