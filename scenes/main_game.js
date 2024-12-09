class Example extends Phaser.Scene
        {   
            constructor ()
            {
                super({ key: 'Game' });
            }
            
             preload() {
               
                this.sound.pauseOnBlur = false;//Esta roña evita que el sonido se detenga cuando la ventana pierde foco.

                this.load.image('background', 'images/bg.jpg');
                this.load.image('touch', 'images/touch_zone.png');
                this.load.image('marble', 'images/marble.png');
                this.load.image('yellow', 'images/yellow.png');

                this.load.image('square_green', 'images/square_green.png');
                this.load.image('square_yellow', 'images/square_yellow.png');
                this.load.image('square_red', 'images/square_red.png');

                this.load.image('circle_gray', 'images/circle_gray.png');

                this.load.image('star_particle', 'images/star.png');

                this.load.image('logo', 'images/logo.png');
                this.load.image('curtain', 'images/curtain_top.png');

                this.load.audio('music_main',  'sounds/puzzle-1-a.mp3' );
                this.load.audio('ongame',  'sounds/puzzle-1-b.mp3' );
                this.load.audio('gameover', 'sounds/gameover.ogg');
                this.load.audio('pop', 'sounds/p_2.ogg');
                this.load.audio('life', 'sounds/coin3.wav');
                this.load.audio('fall', 'sounds/bell.wav');
                

                
            }


            create() {
                backgroundMusic = this.sound.add('music_main').setLoop(true);//sonido de cuando no estan jugando
                ongameMusic = this.sound.add('ongame').setLoop(true);//sonido de cuando ya estan jugando
                gameoverMusic = this.sound.add('gameover');//sonido fanfare de cuando ganas
                peg = this.sound.add('pop');//cuando las bolas chocan contra las bolas estaticas producen un sonido.
                fall = this.sound.add('fall');//cuando las bolas caen producen este
                backgroundMusic.play();//nomas iniciando reproducir el musicas
                ball_up  = this.sound.add('life');//si una bola se queda atrapada despues de un rato regresa y suena esto
                
                this.add.image(0, 0, 'background').setOrigin(0,0).setDisplaySize(w_width,w_height);//background
                this.add.image(mid_h, 0, 'curtain').setOrigin(.5,0).setDisplaySize(w_width+50,150);//cortina superior
                this.add.image(mid_h, 300, 'logo').setOrigin(.5,.5).setScale(.6,.6);//logo (opcional)

                this.createPegs();//crear bolitas estaticas azules
                this.createWalls();//crear paredes del bottom (containers quiza)
                this.createScoreboard();//crear el coso del top que se mueve
                 

                
            }

            update(){
                for (var i = 0; i < walls.length; i++) {//si alguna pared recibe 5 o mas bolas comienza a emitir estrellitas mostrando que esos creidos has ganado, los emisores siempre existen solo se habilitan o deshabilitan
                    
                    if (parseInt(walls[i].score)>=5) {
                        if (parseInt(walls[i].score)>maxPrize||winner_wall==i) {
                            maxPrize=walls[i].score;
                            winner_wall=i;
                            prizes=block_values[i];
                            walls[i].emiter.active=true;
                            walls[i].emiter.visible=true;
                        }else{
                            walls[i].emiter.active=false;
                            walls[i].emiter.visible=false;
                        }
                    }
                }


                
                
                balls_left_text.x=controller_ball.x;//el texto de las bolas restantes siempre sigue al scoreboard.

                if (balls.length==0&&balls_left==0||gameover==true) {//determina si ya fue un gameover cuando las bolas restantes<=0 y el array de bolas esta vacio(no hay bolas en juego) o cuando se forza el gameover.
                    if (!gameover_onetime) {//flag para ejecutar el gameover 1 sola vez, pausar el juego hace que se vea extraño.
                        pause();
                        setTimeout(()=>{
                            ongameMusic.stop();
                            gameoverMusic.play();
                            
                            document.getElementById('phaser-example').classList.add("hidden");//escondemos el div del juego y mostramos el div del win, escenas? mucho trabajo.
                            document.getElementById('final_screen').classList.remove("hidden");
                            if (prizes==0) {//no dejamos nada a la suerte, si las paredes del fondo no reciben 5 o mas bolas, al final te da un premio de consolacion, es imposible obtener este resultado, solo porsi
                                prizes=1;
                            }
                            document.getElementById('text_coins').innerHTML=prizes;

                            //Client.sendendGame(prizes);//Se le envia a controls el evento de ganar para mostrar algo o hacer algo, antes habilitaba un boton extra, hoy esta obsoleto.
                            endGame();

                        },2500);//le damos chance al juego de seguir mostrandose durante 2500ms
                        gameover_onetime=true;
                    }
                }
            }

            createScoreboard(){//el coso del top que se mueve de un lado al otro y que suelta bolitas.
                controller_ball=this.physics.add.sprite(w_width-150, 0, "circle_gray").setOrigin(.5,0).setImmovable(true).setScale(2,2);

                balls_left_text=this.add.text(mid_h, 0, balls_left, { fontFamily: 'Arial', fontSize: 70 }).setOrigin(.5, 0).setStroke('#DADCE7',6).setDepth(1);//el texto que muestra cuantas bolas quedan

                this.tweens.add({//animacion del coso de top
                    targets: [controller_ball],      // Los objetos que se va a mover
                    x: 150,                         // La posición final (eje x), por defecto el coso de top inicia a la derecha-150, podria comenzar en 150 y el final ser orilla derecha-150, pero pues asi son las cosas
                    duration: 1500,                 // Duración en milisegundos (ajustar según preferencia), menos valor, mas velocidá
                    ease: 'Sine.easeInOut',         // Tipo de suavizado (Sine.easeInOut hace que el movimiento sea fluido)
                    yoyo: true,                     // Activa el efecto de ida y vuelta
                    repeat: -1                      // Repetir indefinidamente
                });
            }

            createWalls(){
                var init_sum=w_width/5;//son 5 zonas donde las bolas pueden caer
                var init=0;//el punto inicial

                for (var j = 0; j < 6; j++) {//"seis son las medias faenas, de mis medios calientes" - Miguel Bosé
                    var wall=this.physics.add.sprite(init, w_height, block_order[j]).setOrigin(0,1).setImmovable(true).setDepth(1);//block_order el nombre de los bloques de color del bottom
                    wall.setDisplaySize(init_sum,wall.height);//el width lo definimos manualmente, pero el height es el valor original de la imagen
                    wall.score=0;//cada wall tiene su propio score para saber cuantas bolas han caido en el
                    wall.textus=this.add.text(init+(init_sum/2), w_height-wall.height, wall.score, { fontFamily: 'Arial', fontSize: 50 }).setOrigin(.5, 1).setStroke('#000000',6).setDepth(1);// texto del score
                    wall.emiter=this.add.particles(init+(init_sum/2), w_height-wall.height+50, 'star_particle', { speed: 50, lifespan: 2500,gravityY: -50,active:false }).setDepth(0);//particulas de estrellitas, existe pero esta inactivo
                    this.add.text(init+(init_sum/2), w_height-wall.height+100, "x"+block_values[j], { fontFamily: 'Arial', fontSize: 50 }).setOrigin(.5, 1).setStroke('#000000',6).setDepth(1);//texto del valor de cada wall del bottom
                    wall.type="bottom";//en el colisioncallback debemos diferenciar que tipo de objeto ha golpeado la bolita.
                    init+=init_sum;


                    walls.push(wall);//metemos todo en un array de walls, para mas placer.

                }
            }

            createFallingBall(x_position){//crea la bolita caedora que suelta el coso del top, cuando puchas el boton.s
                if (balls_left>0) {//tenias 20, sigues teniendolas?
                    peg.play();//sonido de choque cuando soltamos las bolas
                    var fallingball=this.physics.add.sprite(controller_ball.x, controller_ball.height*2, 'yellow').setOrigin(.5,.5).setScale(.5,.5).setBounce(.25);//para mejor randomicidad jugar con scale, bounce y gravity.y
                    fallingball.body.setCircle((fallingball.width/2));//modificamos el hitbox para que sea redondo
                    fallingball.body.gravity.y = randomIntFromInterval(990,1180);//no todas las bolas tienen la misma gravedad.
                    fallingball.body.collideWorldBounds = true;//le agregamos colision con el mundo para que no se salgan.

                    for (var i = 0; i < pegs.length; i++) {//colision de las bolas que caen vs las bolas estaticas
                        this.physics.add.collider(fallingball, pegs[i], this.collisionCallback, null, this);
                    }

                    for (var i = 0; i < walls.length; i++) {//colision de las bolas que caen vs las paredes del bottom
                        this.physics.add.collider(fallingball, walls[i], this.collisionCallback, null, this);
                    }


                    for (var i = 0; i < balls.length; i++) {//colision de las bolas que caen vs otras que tambien caen.
                        this.physics.add.collider(fallingball, balls[i], this.collisionCallback, null, this);
                    }

                    fallingball.touching=0;//estas 2 propiedades detectan si una bola se ha atorado y detectan cuanto tiempo y que bola estatica estan tocando, touching= index de la bola estatica, touching_count=cuantos ciclos ha estado tocandola, si llega a 100 esta desaparece..
                    fallingball.touching_count=0;

                    fallingball.index=index;//le asignamos un index global para asegurarnos que vamos a borrar este elemento especificamente. Usado con splice
                    index++;

                    balls_left--;//ha sido creada una bola, asi que hay que restar 1 a las que quedan
                    balls_left_text.text=balls_left;//texto del coso de top.

                    this.physics.accelerateToObject(fallingball, walls[gravityattraction],300);//las bolas se atraen hacia este punto, un valor de 450 o mas es mas obvio. Esto es para hacer trampa mas a gusto, asi no todos ganan x3 o x2 siempre. Ver variable gravityattraction
                    balls.push(fallingball);//metemos todas las bolas en un array, asi sabemos que bolas siguen cayendo.
                }else{
                    console.log("no more bolas");//no pues andas desbolado
                }
            }


            createPegs(){//esto crea los obstaculos en donde rebotan las bolas. Modificar rows y cols
                var cols=10;//10 en la primera fila y luego 11 y de regreso 10.
                var rows=11;

                var init_y=400;//altura en la que se empiezan a crear los obstaculos
                var init_x=0;//posicion en x donde se empiezan a crear los obstaculos
                var padding_x=(w_width/9)// el espacio de separacion entre cada obstaculo en X
                var padding_y=80;//el espacio de separacion entre cada obstaculo en Y

                var side=true;//flag para comenzar en x=0, si es false comenzamos en x=padding_x
                var index_static=0; //les asignamos un valor de index a cada obstaculo para decirle a la bola que cae con que esta chocando.

                for (var i = 0; i < rows; i++) {
                    for (var j = 0; j < cols; j++) {
                        var peg=this.physics.add.sprite(init_x, init_y, 'marble').setOrigin(.5,.5).setImmovable(true).setScale(.7,.7);
                        peg.body.setCircle((peg.width/2));//hitbox circular
                        peg.index=index_static;
                        index_static++;
                        peg.type="static";//en el collisioncallback se diferencia que tipo de obstaculo es.
                        
                        init_x+=padding_x;
                        pegs.push(peg);//array de obstaculos
                    }

                    if (side) {//cambiamos valores para pintar siguiente fila al centro de 2 obstaculos de la fila anterior.
                        side=false;//flag
                        init_x=padding_x/2;//espacio de separacion /2
                        cols+=1;
                    }else{
                        side=true;
                        init_x=0;
                        cols-=1;
                    }
                    
                    init_y+=padding_y;//separacion vertical
                }
            }

            collisionCallback(movingSprite, fixedSprite) {//cuando una bola que cae golpea un objeto esta funcion detecta esa interaccion

                
                if (movingSprite.x < fixedSprite.x) {// Determina si la colisión es en el lado izquierdo o derecho del sprite fijo
                    movingSprite.setVelocityX(-100); // Colisión en el lado izquierdo - desliza a la izquierda
                } else {
                    movingSprite.setVelocityX(100); // Colisión en el lado derecho - desliza a la derecha
                }
                movingSprite.setVelocityY(movingSprite.body.velocity.y * 3);//para que caigan mas rapido

                if (movingSprite.touching!=fixedSprite.index) {//detectamos si la bola sigue tocando el mismo obstaculo.
                    movingSprite.touching=fixedSprite.index;//asignamos a la bola que cae el index del obstaculo que toca aqui.
                    movingSprite.touching_count=0;//regresamos a 0 el conteo de toques
                }else{
                    movingSprite.touching_count++;//si la bola sigue tocando el obstaculo sigue contando las interacciones.
                }

                if (movingSprite.touching_count>=100) {//determinamos si la bola ha tocado al menos 100 veces un obstaculo
                    if (fixedSprite.type=="static") {//si el obstaculo es "static" sabemos que es un obstaculo fijo, asi que sumamos a las bolas restantes esta bola que vamos a borrar.
                        balls_left++;
                        balls_left_text.text=balls_left;
                        ball_up.play();
                    }
                    console.log("destroy",movingSprite)
                    this.destroyMovingBall(movingSprite);//si llegamos aqui significa que nuestra bola esta atascada y no puede seguir cayendo, asi que la borramos.
                }

                if (fixedSprite.type=="static") {
                    peg.play();
                }

                if (fixedSprite.type=="bottom") {//si la bola golpea el fondo,sumamos el score a la pared del bottom golpeada y destruimos la bola-
                    fall.play();
                    fixedSprite.score++;
                    fixedSprite.textus.text=fixedSprite.score;
                    this.destroyMovingBall(movingSprite);
                }
                
                
            }

            destroyMovingBall(ball){//funcion para destruir bolas. Recibe la propiedad index de la bola que queremos desaparecer.
                ball.active=false;
                ball.visible=false;
                ball.destroy();
                for (var i = 0; i < balls.length; i++) {
                    if(balls[i].index==ball.index){
                        balls.splice(i,1);
                    }
                }
            }


            moveTarget(data){//obsoleto, pero esta funcion movia el coso del top usando cotroles manuales. Ahora solo suelta las bolas desde controls.html
                if (start) {
                    if (data.action) {
                        this.createFallingBall();
                    }else{
                        controller_ball.body.velocity.x=(data.x*50);
                        controller_ball.action=false;
                    
                        if (data.x==0 && data.y==0) {
                            if (!stay) {
                                stay=true;
                            }
                            
                        }else{
                            stay=false;
                        }
                       
                    }
                }
                
            }

        }