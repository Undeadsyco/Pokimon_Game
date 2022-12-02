import Character from "./Character";
import direction from "../../../utils/direction";

export default class PlayerContainer extends Phaser.GameObjects.Container {
  id: string;
  health: number;
  maxHealth: number;
  velocity = 200;
  attacking = false;
  swordHit = false;
  player: Phaser.GameObjects.Sprite;
  currentDir = direction.DOWN;

  constructor(scene: Phaser.Scene, x: number, y: number, id: string, maxHealth: number) {
    super(scene, x, y);
    this.id = id;
    this.health = maxHealth;
    this.maxHealth = maxHealth;

    this.setSize(32 * 3, 32 * 3);
    this.scene.physics.world.enable(this, 0);
    if ('setCollideWorldBounds' in this.body) this.body.setCollideWorldBounds(true);
    this.scene.add.existing(this);
    this.scene.cameras.main.startFollow(this);

    // create player
    this.player = new Character(scene, x, y);
    this.add(this.player);
  }



  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    if ('setVelocity' in this.body) {
      this.body.setVelocity(0);

      if (cursors.left.isDown) {
        this.body.setVelocityX(-this.velocity);
        this.currentDir = direction.LEFT;
      } else if (cursors.right.isDown) {
        this.body.setVelocityX(this.velocity);
        this.currentDir = direction.RIGHT;
      }
      if (cursors.up.isDown) {
        this.body.setVelocityY(-this.velocity);
        this.currentDir = direction.UP;
      } else if (cursors.down.isDown) {
        this.body.setVelocityY(this.velocity);
        this.currentDir = direction.DOWN;
      }
    }
  }

  createHealthBar() { }

  updateHealthBar() { }

  updateHealth() {

  }

  respawn(playerObj: PlayerContainer) {
    this.health = playerObj.maxHealth;
    this.setPosition(playerObj.x, playerObj.y)
  }
}