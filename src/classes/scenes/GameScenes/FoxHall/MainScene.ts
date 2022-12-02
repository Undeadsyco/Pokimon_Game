import { GameMap } from "../../../Maps";

import eventCenter from "../../../../utils/eventCenter";
import { mapKeys, sceneKeys } from "../../../../keys";
import { GameManager } from "../../../gameManager";
import PlayerContainer from "../../../entities/Player/CharacterContainer";

export default class FoxHallMainScene extends Phaser.Scene {
  private gameMap: GameMap;
  private npcs: Phaser.GameObjects.Group;
  private slimes: Phaser.GameObjects.Group;
  private bats: Phaser.GameObjects.Group;
  private ghosts: Phaser.GameObjects.Group;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  gameManager: GameManager;
  player: PlayerContainer;

  constructor() {
    super(sceneKeys.foxHallMain);
  }

  create(): void {
    this.createMap();
    // TODO add game audio to create method once function is created
    this.createGroups();
    this.createInput();
    this.createGameManager();

    eventCenter.emit('loadingDone');
  }

  update(): void {
    if (this.player) this.player.update(this.cursors);
  }

  private createMap(): void {
    eventCenter.emit('updateText', 'creating map');

    this.gameMap = new GameMap({ scene: this, key: mapKeys.foxHall.key });
  }

  // TODO create game audio function

  private createGroups() {
    eventCenter.emit('updateText', 'creating entity groups');

    this.npcs = this.physics.add.group();
    this.slimes = this.physics.add.group();
    this.bats = this.physics.add.group();
    this.ghosts = this.physics.add.group();
  }

  /** add cursor input */
  private createInput() {
    eventCenter.emit('updateText', 'creating user input');

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  private createGameManager() {
    eventCenter.emit('updateText', 'creating game manager');

    eventCenter.on('spawnPlayer', (playerObj: PlayerContainer) => {
      this.createPlayer(playerObj);
    })

    this.gameManager = new GameManager(this, this.gameMap.objectLayers);
    this.gameManager.setup();
  }

  private createPlayer(playerObj: PlayerContainer) {
    this.player = new PlayerContainer(
      this,
      playerObj.x,
      playerObj.y,
      playerObj.id,
      playerObj.maxHealth
    );
  }

  private addCollisions() {

  }
}