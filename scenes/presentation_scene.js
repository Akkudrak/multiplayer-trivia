var textModal=undefined;
var forceEnd=false;
export class presentation_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'presentation_scene' });
    }



    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.add.image(mid_h, (mid_v/10), 'title_presentacion').setOrigin(.5,0).setScale(1.5);
        this.add.image(mid_h, (mid_v+mid_mid_v), 'pet_1_lg').setOrigin(.5,1);
        textModal=this.add.image(mid_h, (w_height-padding), 'bg_modal').setOrigin(.5,1).setDisplaySize((w_width-(padding*2)), mid_mid_v-50);
        textModal.alpha = 0.6;
        console.log(textModal);
        var texto="Hola, bienvenido al juego de trivia de Coin City, te explico rapidamente las reglas:. Primero, serán llamados uno por uno al centro. Segundo, Mirarán la pantalla para saber el tema y la pregunta. Tercero: yo les diré cuando pueden contestar usando el dispositivo en la mesa.";
        
        utterance.text=texto
        synthesis.speak(utterance);
        this.textolines(textModal,texto,this);

        var mainScene=this.scene.get('mainScene');
        mainScene.setButton({scene:this, x:mid_h,y:w_height-(mid_mid_v/4),text:"Siguiente",scale_c:scale}).setInteractive().on("pointerdown", () => {
            forceEnd=true;
        });


        
    }

    textolines(modal_this,text,scene){

        
        var ytop=modal_this.getBounds().top;
        var ybottom=modal_this.getBounds().bottom;
        var line_1=((1080-(ytop))/2)/2;
        var line_2=(((1080-(ytop))/2)/2)*2;
        console.log(line_1);

        var line_1=this.add.text(padding*2, ytop+line_1, "", { fontFamily: 'mikado', fontSize: 70, color:'#000000' }).setOrigin(0, .5);
        console.log(line_1);
        var line_2=this.add.text(padding*2, ytop+line_2, "", { fontFamily: 'mikado', fontSize: 70, color:'#000000' }).setOrigin(0, .5);

        
        //
        //
       

        var words = text;
        var index = 0;
        var liner=0;
        var lineText="";
        var juanword=""; 
        var intervalId = setInterval(function() {
            lineText+= words[index];
            if (words[index]==" ") {
                juanword="";
            }else{
                juanword+= words[index];
            }
            
            line_2.setText(lineText);
            index++;
            liner++;
            if (liner>55) {
                //line_1.setText(line_2.text).alpha = 0.6;
                line_2.setText(" ");
                lineText="";
                liner=0;
            }

            if(index == words.length||forceEnd==true) {
                clearInterval(intervalId);
                forceEnd=false;
                scene.scene.start("waiting_ready_scene");
            }
        }, 60);



    }



}