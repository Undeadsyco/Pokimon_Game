import * as Phaser from 'phaser';
import scenes from './classes/scenes';


const container = document.getElementById('container');

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: [...scenes],
  scale: {
    parent: container,
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    max: {
      width: container.offsetWidth,
      height: container.offsetHeight,
    },
    // zoom: Scale.ZOOM_2X
  },
};

class MyGame extends Phaser.Game {
  constructor() {
    super(config)
    this.scene.start('preload');
  }
}

/** @type {Game} */
export default new MyGame();
