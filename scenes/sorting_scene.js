var ticks=0;
var indexBoard=0;
var boards=[];
export class sorting_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'sorting_scene' });
    }

    preload(){
        for (var i = 0; i < 10; i++) {
            this.textures.addImage('team_'+(i+1)+'_img', document.getElementById('team_'+(i+1)+'_img'));
        }
        
        
    }

    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.add.image(mid_h, (mid_v/10), 'title_equipos').setOrigin(.5,0).setScale(1.5);

        var col=209;
        
        for (var i = 0; i < 10; i++) {
            boards.push(this.add.image(col, mid_v, 'team_'+(i+1)+'_img').setDepth(1));
            col+=167;
        }
        // console.log(teams);
        var mainScene=this.scene.get('mainScene');
        mainScene.setButton({scene:this, x:mid_h,y:w_height-(mid_mid_v/4),text:"Siguiente",scale_c:scale}).setInteractive().on("pointerdown", () => {
            console.log(users);
            console.log('aqui deberia enviar cosas');
            Client.socket.emit('testTeams',teams);
            this.scene.start("presentation_scene");

        });

        this.tweens.add({
            targets: boards[indexBoard],
            depth: 2, // Posición final en el eje Y (centro de la escena)
            scale:1.1,
            ease: 'Power2', // Tipo de interpolación
            duration: 500, // Duración en milisegundos
        });
        indexBoard++;

    }

    update(){
        ticks++;
        if (ticks>=500) {
            for (var i = 0; i < boards.length; i++) {
                boards[i].setScale(1);
                boards[i].setDepth(1);
            }
            ticks=0;
            this.tweens.add({
                targets: boards[indexBoard],
                depth: 2, // Posición final en el eje Y (centro de la escena)
                scale:1.1,
                ease: 'Power2', // Tipo de interpolación
                duration: 500, // Duración en milisegundos
            });
            if (indexBoard>=boards.length-1) {
                indexBoard=0;
            }else{
                indexBoard++;
            }
            
        }
    }




}

