import { StartBtn } from "../UI";
import { sceneKeys } from "../../keys";

export default class TitleScene extends Phaser.Scene {
  private startBtn: StartBtn;

  constructor() {
    super(sceneKeys.title);
  }

  preload(): void {

  }

  create(): void {
    const { width, height } = this.cameras.main;

    const title = this.add.text(0, height / 2, "Brandon's game!", { fontSize: '64px', color: '#1d74ad' });
    const titleBounds = title.getBounds();
    title.setPosition(width / 2 - titleBounds.width / 2, height * 0.25);

    this.startBtn = new StartBtn(this, width/2, height/2, this.startScene);
  }

  startScene: () => void = () => {
    this.scene.start(sceneKeys.foxHallLoader);
  }
}