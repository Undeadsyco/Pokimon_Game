import { spriteKeys } from "../../../keys";

export default class Character extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, spriteKeys.billy, 0);
    this.scene.physics.world.enable(this);
    this.setSize(32, 32);
    this.setImmovable(true);
    this.setScale(3);
    this.scene.add.existing(this);
  }
}