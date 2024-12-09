export class sorting_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'sorting_scene' });
    }

    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.drawTeams();



    }

    drawTeams(){
        var cols_t=8;
        var row_ini=mid_v;
        var scaleHere=.4
        let col_size_t=(w_width-(padding*base_cols))/base_cols;
        let cols_t_a=[];
        let base_sum_t=10;
        var index_c=0;

        for (var i = 0; i < cols_t; i++) {
            base_sum_t+=(padding+10)+(col_size_t)
            cols_t_a.push(base_sum_t);
        }

        console.log(cols_t_a);
        

        for (var i = 0; i < users.length; i++) {
            console.log(users[i].nombre);
            this.drawUser({scene:this,x:cols_t_a[index_c],y:row_ini,scale_c:scaleHere,text:users[i].nombre});
            index_c++;
            if (index_c>=cols_t) {
                index_c=0;
                row_ini+= 40;
            }
        }
    }

    drawUser(data=null){
        //var button=data.scene.add.image(data.x, data.y, 'btn_lg_white').setOrigin(0,.5).setScale(.3,data.scale_c);
        console.log(data.x);
        data.scene.add.text(data.x, data.y, data.text, { fontFamily: 'mikado', fontSize: 15,color:"#000000" }).setOrigin(0, .5)//.setStroke('#2F4649',10);
        
    }


}