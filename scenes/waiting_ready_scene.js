var textModal=undefined;
var waitingText=[];
var stopUpdate = false;
export class waiting_ready_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'waiting_ready_scene' });
    }

    update(){
        if(usersActive){

            if(usersActive.length > 0){
                if(stopUpdate === false ){
                    usersActive.forEach((el,idx) => {
                        if(!usersActive[idx].readyAuth){
                            usersActive[idx].readyAuth = true;
                            console.log('El usuario '+el.name+" Ha sido verificado.");
                            this.changeStatus('Listo',usersActive[idx]);
                        }
                    })
                }
            }
        }
    }

    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        //this.add.image(mid_h, (mid_v/10), 'title_presentacion').setOrigin(.5,0).setScale(1.5);
        this.add.image(padding, (mid_v+mid_mid_v), 'pet_1_lg').setOrigin(0,1); 
        // this.drawParticipants(teams[0]);
        this.drawParticipants(receiveMembers);

        var mainScene=this.scene.get('mainScene');
        mainScene.setButton({scene:this, x:mid_h,y:w_height-(mid_mid_v/4),text:"Siguiente",scale_c:scale}).setInteractive().on("pointerdown", () => {
            game.scene.start("roulette_scene");
        });

    }

    drawParticipants(participants){
        

        console.log(participants);
        var col=mid_h/1.25;
        var row=mid_v/1.3;
        var index_p=0;
        for (var i = 0; i < participants.length; i++) {
            var cont=this.add.image(col, row, 'playerSel_desk').setOrigin(.5,.5).setScale(.75);
            cont.item_1=this.add.text(cont.x, cont.y+10, participants[i].name, { fontFamily: 'mikado', fontSize: 25, color:'#000000' }).setOrigin(.5, .5);
            cont.item_2=this.add.text(cont.x, cont.getBounds().top+padding*2, "Esperando...", { fontFamily: 'mikado', fontSize: 25, color:'#ffffff' }).setOrigin(.5, .5);
            cont.item_3=this.add.image(cont.getBounds().right, cont.getBounds().bottom, 'icon_wait').setOrigin(1,1).setScale(.7);
            cont.data=participants[i];
            cont.ready=false;
            waitingText.push(cont);
            console.log(cont);
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

    changeStatus(estatus,item){
        for (var i = 0; i < waitingText.length; i++) {
            if (waitingText[i].data.name==item.name) {
                console.log(waitingText[i]);
                waitingText[i].ready=true;
                waitingText[i].item_2.text=estatus;
                waitingText[i].item_3.setTexture("icon_ok");
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
            console.log("todos ready");
            stopUpdate = true;
            // setTimeout(() => {
                // console.log('activando la ruleta de la muejte');
                // this.scene.remove('waiting_ready_scene');
                // this.finishScene();
            // },2000)
        }else{
            console.log("faltan "+(registers-registersNow)+" de "+registers);
        }
    }

    finishScene(){
        this.scene.start("roulette_scene");
    }
}


