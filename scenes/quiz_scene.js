var forceEndQuiz=undefined
export class quiz_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'quiz_scene' });
    }

     init(data) {
        
        this.theme = data.theme || 'Desconocido';
    }


    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.add.image(w_width-(padding*6), (mid_v+mid_mid_v*1.7), 'pet_1_lg').setOrigin(1,1).flipX=true;

        var modal_quiz=this.add.image(padding, mid_v, 'bg_modal').setOrigin(0,.5).setScale(1.2);
        //modal_quiz.quiz=
        this.getQuiz(this.theme,modal_quiz);
    } 


    getQuiz(theme,modal){
        var count=quesList[theme].length;
        var seleccion=quesList[theme][randomIntFromInterval(0,count-1)];

        var questInfo = {
            theme: theme,
            questList: {
                'question':seleccion[0],
                'trueAnswer':seleccion[4],
                'answers':[
                    seleccion[1],
                    seleccion[2],
                    seleccion[3]
                ]
            }
        };
        console.log(questInfo);
        console.log(seleccion);
        Client.socket.emit('sendTopic', {topic:questInfo.theme, quest:questInfo.questList} );
        var texto=seleccion[0]+". "+seleccion[1]+"."+seleccion[2]+". ó "+seleccion[3]+", !Responde¡";
        
        utterance.text=texto
        synthesis.speak(utterance);

        this.textolinesQuiz(modal,seleccion,this);
        
    }

    textolinesQuiz(modal_this,quiz,scene){

        var ytop=modal_this.getBounds().top;
        var ybottom=modal_this.getBounds().bottom;
        var line_1=((1080-(ytop))/2)/2;
        var line_2=(((1080-(ytop))/2)/2)*1.5;
        var row=line_2;
        console.log(modal_this.getBounds());
        modal_this.lines=[];
        modal_this.lines.push(this.add.text(modal_this.getBounds().centerX+padding, ytop+(padding*7), "", { align: 'center', fontFamily: 'mikado', fontSize: 60, color:'#000000',wordWrap: { width: modal_this.width }  }).setOrigin(.5, .5));
        modal_this.lines.push(this.add.text(padding*4, ytop+line_2, "", { fontFamily: 'mikado', fontSize: 60, color:'#000000' ,wordWrap: { width: modal_this.width }}).setOrigin(0, .5));
        modal_this.lines.push(this.add.text(padding*4, ytop+(row*1.5), "", { fontFamily: 'mikado', fontSize: 60, color:'#000000',wordWrap: { width: modal_this.width } }).setOrigin(0, .5));
        modal_this.lines.push(this.add.text(padding*4, ytop+(row*2), "", { fontFamily: 'mikado', fontSize: 60, color:'#000000',wordWrap: { width: modal_this.width } }).setOrigin(0, .5));

        this.printText(0,modal_this.lines,quiz,this);
        //
        //
       

        
    }

    printText(line,modal_lines,text,scene){
        var words = text[line];
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
            var added="";
            switch(line){
                case 1:
                    added="A) ";
                    break;
                case 2:
                    added="B) ";
                    break;
                case 3:
                    added="C) ";
                    break;
            }
            modal_lines[line].setText(added+lineText);
            index++;
            liner++;

            if(index == words.length||forceEndQuiz==true) {
                clearInterval(intervalId);
                forceEndQuiz=false;
                line++;
                console.log(line);
                if (line<4) {
                    scene.printText(line,modal_lines,text,scene);
                }else{
                    
                    setTimeout(()=>{
                        console.log("Ahora!");
                        Client.socket.emit('sendAnswer');
                        // scene.scene.start("roulette_scene");
                    },7000)
                    
                }
                

            }
        }, 60);

    }






}