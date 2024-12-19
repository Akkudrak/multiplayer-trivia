var waitingText=[];
var stopUpdate = false;

export class results_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'results_scene' });
    }

    preload(){
        stopUpdate = false;
    }

    

    update(){
        // this.data = this.datax;
        // console.log(this.data );
        if(stopUpdate === false ){
            resultsGamers.forEach((el,idx) => {
                if(!resultsGamers[idx].readyAuth){
                    resultsGamers[idx].readyAuth = true;
                    console.log('El usuario '+el.name+" Ha sido verificado.");
                    this.changeStatus(resultsGamers[idx]);
                }
            })
        }
    }

    create(){
        // this.datax = this.data;
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        //this.add.image(mid_h, (mid_v/10), 'title_presentacion').setOrigin(.5,0).setScale(1.5);
        this.add.image(padding, (mid_v+mid_mid_v), 'pet_1_lg').setOrigin(0,1); 
        // this.drawParticipants(teams[0]);
        this.drawParticipants(receiveMembers);

        var mainScene=this.scene.get('mainScene');
        const this1 = this;
        mainScene.setButton({scene:this1, x:mid_h,y:w_height-(mid_mid_v/4),text:"Siguiente",scale_c:scale}).setInteractive().on("pointerdown",this.sceneSwitch.bind(this));
        usersActive=[];
    }

    sceneSwitch(){
        // this.data = this.datax;
        
        this.scene.start("roulette_scene",{popcorn:'ya pase'});

    }

    drawParticipants(participants){
        
        console.log(participants);
        var col=mid_h/1.25;
        var row=mid_v/1.3;
        var index_p=0;
        for (var i = 0; i < participants.length; i++) {
            this.cont=this.add.image(col, row, 'playerSel_desk').setOrigin(.5,.5).setScale(.75);
            this.cont.item_1=this.add.text(this.cont.x, this.cont.y+10, participants[i].name, { fontFamily: 'mikado', fontSize: 25, color:'#000000' }).setOrigin(.5, .5);
            this.cont.item_2=this.add.text(this.cont.x, this.cont.getBounds().top+padding*2, "Esperando...", { fontFamily: 'mikado', fontSize: 25, color:'#ffffff' }).setOrigin(.5, .5);
            this.cont.item_3=this.add.image(this.cont.getBounds().right, this.cont.getBounds().bottom, 'icon_wait').setOrigin(1,1).setScale(.7);
            this.cont.datax=participants[i];
            this.cont.ready=false;
            waitingText.push(this.cont);
            console.log(this.cont);
            if (index_p<2) {
                col+=mid_h/2.3;

                index_p++;
            }else{
                col=mid_h/1.25;
                index_p=0;
                row+=mid_v/2.5
            }
        }
    }
    changeStatus(item){
        for (var i = 0; i < waitingText.length; i++) {
            if (waitingText[i].datax.name==item.name) {
                console.log(waitingText[i]);
                waitingText[i].ready=true;
                waitingText[i].item_2.text=item.status;
                if(item.status == "GANASTE"){
                    waitingText[i].item_3.setTexture("icon_ok");
                }else{
                    waitingText[i].item_3.setTexture("icon_no");
                }
                break;
            }
        }
        this.check_if_ready();
    }

    check_if_ready(){
        var registers=waitingText.length;
        var registersNow=0;
        for (var i = 0; i < waitingText.length; i++) {
            if (waitingText[i].ready) {
                registersNow++;
                console.log(registersNow);
            }
        }
        
        if (registersNow==registers) {
            stopUpdate = true;
            console.log("todos ready");
            receiveMembers = [];
            resultsGamers = [];
            scoreBoardLap = [];
            // setTimeout(() => {
                // console.log('activando la ruleta de la muejte');
                // this.scene.remove('waiting_ready_scene');
                // this.finishScene();
            // },2000)
        }else{
            console.log("faltan "+(registers-registersNow)+" de "+registers);
        }
    }

}