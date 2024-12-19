
import {mainScene} from "/scenes/main_scene.js";
import {waiting_scene} from "/scenes/waiting_scene.js";
import {sorting_scene} from "/scenes/sorting_scene.js";
import {presentation_scene} from "/scenes/presentation_scene.js";
import {waiting_ready_scene} from "/scenes/waiting_ready_scene.js";
import {roulette_scene} from "/scenes/roulette_scene.js";
import {quiz_scene} from "/scenes/quiz_scene.js";
import {results_scene} from "/scenes/results_scene.js";



const config = {
    type: Phaser.AUTO,
    width: w_width,
    height: w_height,
    backgroundColor: '#000000',
    parent: 'trivia_multiplayer',
    scene: [mainScene,waiting_scene,sorting_scene,presentation_scene,waiting_ready_scene,roulette_scene,quiz_scene,results_scene],
    
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

game = new Phaser.Game(config);
console.log(game);
game.scene.start('mainScene');

