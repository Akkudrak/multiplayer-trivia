import { Loading } from './loading.js'

const config = {
    type: Phaser.WEBGL,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#000000',
    scene: [ Loading ],
    parent: 'controlsBox',
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
const game = new Phaser.Game(config);
window.game = game;