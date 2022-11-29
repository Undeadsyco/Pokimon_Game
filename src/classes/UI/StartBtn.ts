import * as Phaser from "phaser";
import { imageKeys } from "../../keys";

export default class StartBtn extends Phaser.GameObjects.Container {
  private btn: Phaser.GameObjects.Image;
  private btnText: Phaser.GameObjects.Text;
  private key = imageKeys.btn1;
  private hoverKey = imageKeys.btn2;
  private text = 'start';
  private callback: () => void;

  constructor(scene: Phaser.Scene, x: number, y: number, callback: () => void) {
    super(scene, x, y);

    this.callback = callback;

    this.createBtn();
    this.scene.add.existing(this);
  }

  createBtn() {
    this.btn = this.scene.add.image(0, 0, this.key);
    this.btn.setInteractive()
    this.btn.setScale(1.4);

    this.btnText = this.scene.add.text(0, 0, this.text, { fontSize: '26px', color: '#fff' });

    Phaser.Display.Align.In.Center(this.btnText, this.btn);

    this.add([this.btn, this.btnText]);

    this.btn.on('pointerdown', () => {
      this.callback();
    });

    this.btn.on('pointerover', () => {
      this.btn.setTexture(this.hoverKey);
    });

    this.btn.on('pointerout', () => {
      this.btn.setTexture(this.key);
    });
  }
}