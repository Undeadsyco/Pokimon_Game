export default class GameManager {
  private scene: Phaser.Scene;
  private tilemapObjectLayers: { type: string; layers: Phaser.Tilemaps.ObjectLayer[] }[];

  constructor(scene: Phaser.Scene, tilemapObjectLayers: { type: string; layers: Phaser.Tilemaps.ObjectLayer[] }[]) {
    this.scene = scene;
    this.tilemapObjectLayers = tilemapObjectLayers;
  }

  setup(): void {}

  parseMapData(): void {}

  setupEventListeners(): void {}

  setupSpawners(): void {}

  spawnPlayer(): void {}

  addNpc(id: any, npc: any): void {}

  removeNpc(id: any): void {}

  moveNpc(): void {}
}