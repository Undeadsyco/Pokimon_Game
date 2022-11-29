import { sceneKeys } from "../../../../keys";
import eventCenter from "../../../../utils/eventCenter";

export default class FoxHallLoaderScene extends Phaser.Scene {
  private eventCalls = 0;
  private readonly maxEventCalls = 10;

  constructor() {
    super(sceneKeys.foxHallLoader);
  }

  init(): void {
    this.scene.launch(sceneKeys.foxHallMain);
  }

  preload() {
    this.createLoadingUI();
  }

  private createLoadingUI(): void {
    const { width, height } = this.cameras.main;
    const progressBar = this.add.graphics(), progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - ((width / 3) / 2), height / 2 - 25, width / 3, 50);
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        color: '#ffffff',
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      text: '0%',
      style: {
        font: '18px monospace',
        color: '#ffffff'
      }
    });
    const percentBounds = percentText.getBounds();
    percentText.setPosition(width / 2 - percentBounds.width / 2, height / 2 + percentBounds.height * 0.25);
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2 - 90,
      y: height / 2 + 60,
      text: '',
      style: {
        font: '18px monospace',
        color: '#ffffff',
      }
    });

    eventCenter.on('updateText', (message: string) => {
      console.log(`${this.eventCalls}`)
      ++this.eventCalls;
      progressBar.clear();
      progressBar.fillStyle(0x1d74ad, 1);
      progressBar.fillRect(width / 2 - ((width / 3) / 2) + 10, height / 2 - 15, (width/3) * (this.eventCalls / this.maxEventCalls) - 20, 30);
      percentText.setText(`${this.eventCalls/this.maxEventCalls*100}%`);
      assetText.setText(`${message}`);
      const bounds = assetText.getBounds();
      assetText.setPosition(width/2-bounds.width/2);
    });

    eventCenter.on('loadingDone', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();

      this.scene.stop(this);
    });
  }
}