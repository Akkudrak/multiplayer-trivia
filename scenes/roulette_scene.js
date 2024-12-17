let wheel; // Referencia a la ruleta
let isSpinning = false; // Control de giro
let spinSpeed = 0; // Velocidad de giro
const prizes = ['ciencia', 'musica', 'deportes', 'cine','matematicas','arte','geografia','general'];
const sectionAngle = 360 / prizes.length;
var resultIndex = undefined;
var imageCategory=undefined;
export class roulette_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'roulette_scene' });
    }



    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.add.image(padding, (mid_v+mid_mid_v), 'pet_1_lg').setOrigin(0,1);
        wheel=this.add.image(mid_h, mid_v, 'wheel').setOrigin(.5,.5).setScale(.8);
        this.add.image(mid_h, wheel.getBounds().top-40, 'needle').setOrigin(.5,0).setScale(.8);

        imageCategory=this.add.image((wheel.getBounds().right+padding)+((1920-(wheel.getBounds().right+padding))/2), mid_v, 'ciencia').setOrigin(.5,.5).setScale(1.4);
        this.add.image(imageCategory.x, imageCategory.getBounds().bottom+padding, 'seleccionando').setOrigin(.5,0).setScale(.8);
        this.spinning();
    }


    spinning(){
        if (!isSpinning) {
            isSpinning = true;
            spinSpeed = Phaser.Math.Between(10, 30); // Velocidad inicial aleatoria
        }


    }

    update() {
        if (isSpinning) {
            // Rotar la ruleta
            wheel.angle += spinSpeed;
            var speeds=[.90,.91,.92,.93,.94,.95,.96,.97,.98,.99];
            // Reducir la velocidad gradualmente
            spinSpeed *= speeds[randomIntFromInterval(0,speeds.length-1)];
            resultIndex=Math.floor(((360 - wheel.angle % 360) % 360) / sectionAngle)
            // Detener el giro cuando la velocidad sea muy baja
            if (spinSpeed < 0.1) {
                isSpinning = false;
                spinSpeed = 0;
                imageCategory.setTexture(prizes[resultIndex]);
                setTimeout(()=>{
                    this.scene.start("quiz_scene",{theme: prizes[resultIndex] });
                },1500)
                
            }else{
                imageCategory.setTexture(prizes[resultIndex]);
            }
        }
    }



}