export class mainScene extends Phaser.Scene{
    constructor () {
        super({ key: 'mainScene' });
    }

    preload (){
        //main scene loads
        this.load.image('bg_main', 'images/gui/bg_main.png');
        this.load.image('btn_config', 'images/gui/btn_config.png');
        
        this.load.image('logo_game', 'images/gui/logo_game.png');
        this.load.image('mono_1', 'images/gui/mono_1.png');

        //waiting players loads
        this.load.image('title_registro', 'images/gui/title_registro.png');
        this.load.image('bg_elipse', '/images/gui/bg_elipse.png');
        this.load.image('pet_1', 'images/gui/pet1.png');
        this.load.image('pet_2', 'images/gui/pet2.png');
        this.load.image('pet_3', 'images/gui/pet3.png');

        this.load.image('head_1', 'images/gui/heads/head_1.png');
        this.load.image('head_2', 'images/gui/heads/head_2.png');
        this.load.image('head_3', 'images/gui/heads/head_3.png');
        this.load.image('head_4', 'images/gui/heads/head_4.png');
        this.load.image('head_5', 'images/gui/heads/head_5.png');
        this.load.image('head_6', 'images/gui/heads/head_6.png');
        this.load.image('head_7', 'images/gui/heads/head_7.png');
        this.load.image('head_8', 'images/gui/heads/head_8.png');
        this.load.image('head_9', 'images/gui/heads/head_9.png');
        this.load.image('head_10', 'images/gui/heads/head_10.png');
        this.load.image('head_11', 'images/gui/heads/head_11.png');
        this.load.image('head_12', 'images/gui/heads/head_12.png');
        this.load.image('head_13', 'images/gui/heads/head_13.png');
        this.load.image('head_14', 'images/gui/heads/head_14.png');
        this.load.image('head_15', 'images/gui/heads/head_15.png');
        this.load.image('head_16', 'images/gui/heads/head_16.png');
        this.load.image('head_17', 'images/gui/heads/head_17.png');
        this.load.image('head_18', 'images/gui/heads/head_18.png');
        this.load.image('head_19', 'images/gui/heads/head_19.png');
        this.load.image('head_20', 'images/gui/heads/head_20.png');
        this.load.image('head_21', 'images/gui/heads/head_21.png');
        this.load.image('head_22', 'images/gui/heads/head_22.png');
        this.load.image('head_23', 'images/gui/heads/head_23.png');
        this.load.image('head_24', 'images/gui/heads/head_24.png');
        this.load.image('head_25', 'images/gui/heads/head_25.png');
        this.load.image('head_26', 'images/gui/heads/head_26.png');
        this.load.image('head_27', 'images/gui/heads/head_27.png');
        this.load.image('head_28', 'images/gui/heads/head_28.png');
        this.load.image('head_29', 'images/gui/heads/head_29.png');
        this.load.image('head_30', 'images/gui/heads/head_30.png');
        this.load.image('head_31', 'images/gui/heads/head_31.png');
        this.load.image('head_32', 'images/gui/heads/head_32.png');
        this.load.image('head_33', 'images/gui/heads/head_33.png');
        this.load.image('head_34', 'images/gui/heads/head_34.png');
        this.load.image('head_35', 'images/gui/heads/head_35.png');
        this.load.image('head_36', 'images/gui/heads/head_36.png');

        //generic
        this.load.image('btn_sm_green', 'images/gui/btn_sm_green.png');
        this.load.image('btn_sm_red', 'images/gui/btn_sm_red.png');
        this.load.image('bg_modal', 'images/gui/bg_modal.png');
        this.load.image('btn_lg_green', 'images/gui/btn_lg_green.png');
        this.load.image('btn_lg_white', 'images/gui/btn_lg_white.png');


    }

    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.add.image(w_width-padding, padding, 'btn_config').setOrigin(1,0);

        this.add.image(mid_h, mid_v-mid_mid_v, 'logo_game').setOrigin(.5,.5).setScale(scale);

        this.add.image(mid_h, mid_v+(mid_mid_v/2), 'mono_1').setOrigin(.5,.5).setScale(scale);
        this.setButton({scene:this, x:mid_h,y:(w_height-(mid_mid_v/2)),text:"Comenzar",scale_c:scale}).setInteractive().on("pointerdown", () => {
            this.scene.start("waiting_scene");
        });;



    }

    setButton(data=null){
        var button=data.scene.add.image(data.x, data.y, 'btn_lg_green').setOrigin(.5,.5).setScale(data.scale_c);
        data.scene.add.text(button.x, button.y-10, data.text, { fontFamily: 'mikado', fontSize: 70 }).setOrigin(.5, .5)//.setStroke('#2F4649',10);
        return button;
    }


    
}