export class waiting_scene extends Phaser.Scene{
    constructor () {
        super({ key: 'waiting_scene' });
    }

    create (){   
        this.add.image(0, 0, 'bg_main').setDisplaySize(w_width,w_height).setOrigin(0,0);
        this.add.image(mid_h,mid_mid_v/4, 'title_registro').setOrigin(.5,0).setScale(scale);
        this.drawUsers();
        modal = this.add.container(w_width, 0,[this.add.image(mid_h, mid_v, 'bg_modal').setOrigin(.5,.5)]);
        this.showConfirmation();


        const main = this.scene.get('mainScene');

        main.setButton({scene:this, x:mid_h,y:(w_height-(mid_mid_v/4)),text:"Armar Equipos",scale_c:1.2}).setInteractive().on("pointerdown", () => {
            this.scene.start("sorting_scene");
        });;
    }

    drawUsers(){
            var index=0;
            var row=mid_mid_v;
            var scaleHere=.4
            for (var i = 0; i < users.length; i++) {
                var avatar="head_"+randomIntFromInterval(1,36);
                if (users[i].object) {
                    var user=users[i].object
                }else{
                    users[i].object=this.add.image(cols[index]-(col_size/2),row , avatar).setOrigin(.5,.5).setInteractive().setScale(scaleHere);
                    users[i].object.name=users[i].nombre;
                    users[i].object.avatar=avatar;
                    users[i].personaje=avatar;
                    users[i].object.objectText=this.add.text(cols[index]-(col_size/2),users[i].object.y+60, users[i].nombre, { fontFamily: 'mikado', fontSize: 18 }).setOrigin(.5, 1).setStroke('#2F4649',10);

                    users[i].object.on("pointerdown", ((user) => {
                        return () => {
                            this.editModalConfirmation(user);
                        };
                    })(users[i].object), this);
                }
                

                
                index++;
                if (index>base_cols) {
                    index=0;
                    row+= 100;
                }
            }
            
    }

    showConfirmation(){
            console.log(modal.getBounds());
            modal.addAt(this.add.text(mid_h,modal.getBounds().top+(padding*4), "Eliminar al siguiente jugador?", { fontFamily: 'mikado', fontSize: 60, color:"#000000" }).setOrigin(.5, 0),1);
            modal.addAt(this.add.text(mid_h,modal.getBounds().bottom-100, "Elige", { fontFamily: 'mikado', fontSize: 80, color:"#000000" }).setOrigin(.5, 0),2);
            modal.addAt(this.add.text(mid_h,mid_v+(mid_v/4), "Folgore", { fontFamily: 'mikado', fontSize: 50, color:"#000000" }).setOrigin(.5, 0),3);
            modal.addAt(this.add.image(mid_h, mid_v, "head_1").setOrigin(.5,.5),4);
            let actualBottom=modal.getBounds().bottom;
            modal.addAt(this.add.image((mid_h-(mid_h/4)), actualBottom, "btn_sm_red").setOrigin(.5,.5),5);
            modal.addAt(this.add.image((mid_h+(mid_h/4)), actualBottom, "btn_sm_green").setOrigin(.5,.5),6);
            modal.addAt(this.add.text((mid_h-(mid_h/4))-10, actualBottom-10, "No", { fontFamily: 'mikado', fontSize: 80, color:"#ffffff" }).setOrigin(.5, .5).setInteractive().on("pointerdown", (() => {
                this.cancelConfirmation();
            }), this),7);
            modal.addAt(this.add.text((mid_h+(mid_h/4))-20, actualBottom-10, "Si", { fontFamily: 'mikado', fontSize: 80, color:"#ffffff" }).setOrigin(.5, .5).setInteractive(),8);
    }

    editModalConfirmation(user){
            modal.list[3].text=user.name;
            modal.list[4].setTexture(user.avatar);
            modal.list[8].off("pointerdown");
            modal.list[8].on("pointerdown", ((user) => {
                return () => {
                    this.deleteUser(user);
                };
            })(user), this)

            this.tweens.add({
                targets: modal,
                x: 0, // Posición final en el eje Y (centro de la escena)
                ease: 'Power2', // Tipo de interpolación
                duration: 500, // Duración en milisegundos
                onComplete: () => {
                    console.log('El Container ha llegado al centro');
                }
            });
    }

    cancelConfirmation(){
        console.log("cancel confirm");
        this.tweens.add({
            targets: modal,
            x: w_width, // Posición final en el eje Y (centro de la escena)
            ease: 'Power2', // Tipo de interpolación
            duration: 500, // Duración en milisegundos
            onComplete: () => {
            }
        });
            
    }



    deleteUser(user){
        deleteUserFromArray(user.name);
        console.log(user);
        //destroy text
        user.objectText.active=false;
        user.objectText.visible=false;
        user.objectText.destroy();
        //dedstroy object
        user.active=false;
        user.visible=false;
        user.destroy();


        this.tweens.add({
            targets: modal,
            x: w_width, // Posición final en el eje Y (centro de la escena)
            ease: 'Power2', // Tipo de interpolación
            duration: 500, // Duración en milisegundos
            onComplete: () => {
            }
        });

    }







}