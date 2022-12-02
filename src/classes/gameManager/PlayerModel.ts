import { v4 } from 'uuid';

export default class PlayerModel {
  id: string
  x: number;
  y: number;
  maxHealth = 10;
  health = this.maxHealth;
  gold = 0;
  spawnLocal: { x: number, y: number };

  constructor(spawnLocal: { x: number, y: number }) {
    this.id = `Player-${v4()}`;
    this.spawnLocal = spawnLocal;
    this.x = spawnLocal.x
    this.y = spawnLocal.y
  }

  updateGold(gold: number) {
    this.gold += gold;
  }

  updateHelth(health: number) {
    this.health += health;
    if (this.health > this.maxHealth) this.health = this.maxHealth;
  }

  respawn() {
    this.health = this.maxHealth;
    
    this.x = this.spawnLocal.x;
    this.y = this.spawnLocal.y;
  }
}