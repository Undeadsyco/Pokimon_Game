import eventCenter from "../../utils/eventCenter";
import PlayerModel from "./PlayerModel";

export default class GameManager {
  private scene: Phaser.Scene;
  private tilemapObjectLayers: { type: string; layers: Phaser.Tilemaps.ObjectLayer[] }[];
  players = new Map<string, PlayerModel>();

  constructor(scene: Phaser.Scene, tilemapObjectLayers: { type: string; layers: Phaser.Tilemaps.ObjectLayer[] }[]) {
    this.scene = scene;
    this.tilemapObjectLayers = tilemapObjectLayers;
  }

  setup(): void {
    this.parseMapData();
    this.setupEventListeners();
    this.setupSpawners();
    this.spawnPlayer();
  }

  parseMapData(): void {
    this.tilemapObjectLayers.forEach(layer => {
      console.log(layer);
    })
  }

  setupEventListeners(): void { }

  setupSpawners(): void { }

  spawnPlayer(): void {
    const player = new PlayerModel({ x: 0, y: 0 });
    this.players.set(player.id, player);
    eventCenter.emit('spawnPlayer', player)
  }

  addNpc(id: any, npc: any): void { }

  removeNpc(id: any): void { }

  moveNpc(): void { }
}