import * as Phaser from "phaser";

export type ctx = CanvasRenderingContext2D;
export type img = HTMLImageElement;

export type pos = {
  x?: number
  y?: number
}

export type rect = pos & {
  w?: number
  h?: number
}

export type physicsGroup = Phaser.Physics.Arcade.Group;
export type cursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
export type phaserScene = Phaser.Scene;
export type gameObject = Phaser.GameObjects.GameObject;
export type phaserTexture = Phaser.Textures.Texture;
export type vector2 = Phaser.Math.Vector2;
