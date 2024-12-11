
import {mainScene} from "/scenes/main_scene.js";
import {waiting_scene} from "/scenes/waiting_scene.js";
import {sorting_scene} from "/scenes/sorting_scene.js";
import {teamMobile} from "/scenes/teamMobile.js";


const config = {
    type: Phaser.AUTO,
    width: w_width,
    height: w_height,
    backgroundColor: '#000000',
    parent: 'trivia_multiplayer',
    scene: [mainScene,waiting_scene,sorting_scene,teamMobile],
    
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            //gravity: { y: 300 }
        }
    },
    fx: {
        glow: {
            distance: 32,
            quality: 0.1
        }
    }
};

var game = new Phaser.Game(config);
game.scene.start('mainScene');

