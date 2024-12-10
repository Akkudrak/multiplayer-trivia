var textModal=undefined;

export class waiting_ready_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'waiting_ready_scene' });
    }



    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.add.image(mid_h, (mid_v/10), 'title_presentacion').setOrigin(.5,0).setScale(1.5);
        this.add.image(mid_h, (mid_v+mid_mid_v), 'pet_1_lg').setOrigin(.5,1); 
    }

    



}