import eventCenter from "../../utils/eventCenter";
import { mapKeys, tileSetKeys } from "../../keys";

const { key, layerKeys } = mapKeys.foxHall;

type params = {
  scene: Phaser.Scene;
  key: string;
  tileSetsKeys?: string[];
  bgLayersKeys?: string[];
  blockedLayersKeys?: string[];
}

export default class GameMap {
  private scene: Phaser.Scene;
  private key: string;
  private tileSets: Phaser.Tilemaps.Tileset[];
  private tileSetsKeys: string[];
  private bgLayers: { type: string; layers: Phaser.Tilemaps.TilemapLayer[] }[];
  private bgLayersKeys: string[];
  private blockedLayers: { type: string; layers: Phaser.Tilemaps.TilemapLayer[] }[];
  private blockedLayersKeys: string[];
  private LayerObjects: { type: string; layers: Phaser.Tilemaps.ObjectLayer[] }[];
  private ObjectLayersKeys: string[];
  private foregroundLayers: { type: string; layers: Phaser.Tilemaps.TilemapLayer[] }[];
  private foregroundLayersKeys: string[];
  private tileMap: Phaser.Tilemaps.Tilemap;

  get objectLayers() { return this.LayerObjects; }
  get collisionLayers() { return this.blockedLayers; }

  constructor({ scene, key, tileSetsKeys, bgLayersKeys, blockedLayersKeys }: params) {
    this.scene = scene;
    this.key = key;
    this.tileSetsKeys = tileSetsKeys ?? [];
    this.bgLayersKeys = bgLayersKeys ?? [];
    this.blockedLayersKeys = blockedLayersKeys ?? [];

    this.createMap();
  }

  private createMap(): void {
    this.tileMap = this.scene.make.tilemap({ key });
    const townTiles = this.tileMap.addTilesetImage('global_town', tileSetKeys.townTiles, 16, 16);
    const farmTiles = this.tileMap.addTilesetImage('global_farm', tileSetKeys.farmTiles, 16, 16);
    const interior = this.tileMap.addTilesetImage('global_interior', tileSetKeys.interiorTiles, 16, 16);
    const collision = this.tileMap.addTilesetImage('collisions', tileSetKeys.collisionTile, 24, 24);

    this.tileSets = [townTiles, farmTiles, interior, collision];

    const groundLayer = this.createLayer(layerKeys.groundLayer, [townTiles, farmTiles]);
    const groundDecor = this.createLayer(layerKeys.groundDecor, [townTiles, farmTiles]);
    const groundObjects = this.tileMap.getObjectLayer(layerKeys.groundObjects);
    const fenceLayer = this.createLayer(layerKeys.fenceLayer, [farmTiles]);
    const fenceCollisions = this.createLayer(layerKeys.fenceCollision, [collision], false);
    const buildingsLayer = this.createLayer(layerKeys.buildingLayer, [townTiles, farmTiles]);
    const buildingForeground = this.createLayer(layerKeys.buildingForeground, [townTiles, farmTiles]);
    const buildingCollisions = this.createLayer(layerKeys.buildingCollisions, [collision], false);
    const buildingObjects = this.tileMap.getObjectLayer(layerKeys.buildingObjects);

    this.bgLayers = [
      { type: 'groundLayer', layers: [groundLayer, groundDecor] },
      { type: 'fenceLayer', layers: [fenceLayer] },
      { type: 'buildingsLayer', layers: [buildingsLayer] },
    ];

    this.blockedLayers = [
      { type: 'fenceLayer', layers: [fenceCollisions] },
      { type: 'buildingsLayer', layers: [buildingCollisions] },
    ]

    this.LayerObjects = [
      { type: 'groundLayer', layers: [groundObjects] },
      { type: 'buildingsLayer', layers: [buildingObjects] },
    ]

    this.foregroundLayers = [
      { type: 'buildingsLayer', layers: [buildingForeground] },
    ]
  }

  private createLayer(name: string, tileSets: Phaser.Tilemaps.Tileset[], visible?: boolean, x?: number, y?: number) {
    eventCenter.emit('updateText', `creating map layer: ${name}`);
    return this.tileMap.createLayer(name, tileSets, x ?? 0, y ?? 0).setScale(3).setVisible(visible ?? true);
  }
}