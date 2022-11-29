// tilestes
import townTiles from '../../assets/imgs/tiles/global_town.png';
import farmTiles from '../../assets/imgs/tiles/global_farm.png';
import interiorTiles from '../../assets/imgs/tiles/global_interior.png';
import collisionTile from '../../assets/imgs/tiles/Untitled.png';
// images
import battleBg from '../../assets/imgs/misc/battleBackground.png';
import btn1 from '../../assets/imgs/misc/btn1.png';
import btn2 from '../../assets/imgs/misc/btn2.png';
import emoticons from '../../assets/imgs/misc/emoticons.png';
import fireball from '../../assets/imgs/misc/fireball.png';
import GUI from '../../assets/imgs/misc/GUI.png';
import inventoryItems from '../../assets/imgs/misc/items_inventory.png';
import slimeItems from '../../assets/imgs/misc/slime_items.png';
import treeShake from '../../assets/imgs/misc/tree_shake.png';
// sprites
import characters from '../../assets/imgs/sprites/characters/char_all.png';
import billy from '../../assets/imgs/sprites/characters/Billy.png';
import bats from '../../assets/imgs/sprites/enemies/bat_all.png';
import ghosts from '../../assets/imgs/sprites/enemies/ghost_all.png';
import slimes from '../../assets/imgs/sprites/enemies/slime_all.png';
// sprite accessories
import beard from '../../assets/imgs/sprites/characters/acc/beard.png';
import silverEmeraldEaring from '../../assets/imgs/sprites/characters/acc/earring_emerald_silver.png';
import emeraldEaring from '../../assets/imgs/sprites/characters/acc/earring_emerald.png';
import silverRedEaring from '../../assets/imgs/sprites/characters/acc/earring_red_silver.png';
import redEaring from '../../assets/imgs/sprites/characters/acc/earring_red.png';
import sunGlasses from '../../assets/imgs/sprites/characters/acc/glasses_sun.png';
import glasses from '../../assets/imgs/sprites/characters/acc/glasses.png';
import cowboyHat from '../../assets/imgs/sprites/characters/acc/hat_cowboy.png';
import luckyHat from '../../assets/imgs/sprites/characters/acc/hat_lucky.png';
import purplePumpkinHat from '../../assets/imgs/sprites/characters/acc/hat_pumpkin_purple.png';
import pumpkinHat from '../../assets/imgs/sprites/characters/acc/hat_pumpkin.png';
import witchHat from '../../assets/imgs/sprites/characters/acc/hat_witch.png';
import blueClownMask from '../../assets/imgs/sprites/characters/acc/mask_clown_blue.png';
import redClownMask from '../../assets/imgs/sprites/characters/acc/mask_clown_red.png';
import spookyMask from '../../assets/imgs/sprites/characters/acc/mask_spooky.png';
// sprite clothes
import basicShirts from '../../assets/imgs/sprites/characters/clothes/basic.png';
import clownOutfit from '../../assets/imgs/sprites/characters/clothes/clown.png';
import dress from '../../assets/imgs/sprites/characters/clothes/dress.png';
import floralShirt from '../../assets/imgs/sprites/characters/clothes/floral.png';
import overalls from '../../assets/imgs/sprites/characters/clothes/overalls.png';
import suitPants from '../../assets/imgs/sprites/characters/clothes/pants_suit.png';
import basicPants from '../../assets/imgs/sprites/characters/clothes/pants.png';
import pumpkinOutfit from '../../assets/imgs/sprites/characters/clothes/pumpkin.png';
import sailorBow from '../../assets/imgs/sprites/characters/clothes/sailor_bow.png';
import sailor from '../../assets/imgs/sprites/characters/clothes/sailor.png';
import shoes from '../../assets/imgs/sprites/characters/clothes/shoes.png';
import skirt from '../../assets/imgs/sprites/characters/clothes/skirt.png';
import skullShirt from '../../assets/imgs/sprites/characters/clothes/skull.png';
import spaghettiStrap from '../../assets/imgs/sprites/characters/clothes/spaghetti.png';
import spookyOutfit from '../../assets/imgs/sprites/characters/clothes/spooky.png';
import sportyShirt from '../../assets/imgs/sprites/characters/clothes/sporty.png';
import stripeShirt from '../../assets/imgs/sprites/characters/clothes/stripe.png';
import suitShirt from '../../assets/imgs/sprites/characters/clothes/suit.png';
import witchOutfit from '../../assets/imgs/sprites/characters/clothes/witch.png';
// sprite hair
import bob from '../../assets/imgs/sprites/characters/hair/bob.png';
import braids from '../../assets/imgs/sprites/characters/hair/braids.png';
import buzzcut from '../../assets/imgs/sprites/characters/hair/buzzcut.png';
import curly from '../../assets/imgs/sprites/characters/hair/curly.png';
import emo from '../../assets/imgs/sprites/characters/hair/emo.png';
import extraLongSkirt from '../../assets/imgs/sprites/characters/hair/extra_long_skirt.png';
import extraLong from '../../assets/imgs/sprites/characters/hair/extra_long.png';
import frenchCurls from '../../assets/imgs/sprites/characters/hair/french_curl.png';
import gentleman from '../../assets/imgs/sprites/characters/hair/gentleman.png';
import longStraightSkirt from '../../assets/imgs/sprites/characters/hair/long_straight_skirt.png';
import longStraight from '../../assets/imgs/sprites/characters/hair/long_straight.png';
import midiwave from '../../assets/imgs/sprites/characters/hair/midiwave.png';
import ponytail from '../../assets/imgs/sprites/characters/hair/ponytail.png';
import spacebuns from '../../assets/imgs/sprites/characters/hair/spacebuns.png';
import wavy from '../../assets/imgs/sprites/characters/hair/wavy.png';
// sprite makeup
import blush from '../../assets/imgs/sprites/characters/makeup/blush_all.png';
import eyes from '../../assets/imgs/sprites/characters/makeup/eyes.png';
import lipstick from '../../assets/imgs/sprites/characters/makeup/lipstick.png';
// audio
import battle from '../../assets/Audio/battle.mp3';
import enemyDeath from '../../assets/Audio/EnemyDeath.wav';
import fireballHit from '../../assets/Audio/fireballHit.wav';
import initBattle from '../../assets/Audio/initBattle.wav';
import initFireball from '../../assets/Audio/initFireball.wav';
import map from '../../assets/Audio/map.wav';
import pickup from '../../assets/Audio/Pickup.wav';
import playerAttack from '../../assets/Audio/PlayerAttack.wav';
import playerDamage from '../../assets/Audio/PlayerDamage.wav';
import playerDeath from '../../assets/Audio/PlayerDeath.wav';
import tackleHit from '../../assets/Audio/tackleHit.wav';
import topDown from '../../assets/Audio/top-down-fantasy.mp3';
import victory from '../../assets/Audio/victory.wav';
// map data
import foxHall from '../../assets/mapData/FoxHall/FoxHallMain.json';
// keys
import { audioKeys, imageKeys, mapKeys, sceneKeys, spriteAccessoryKeys, spriteClothesKeys, spriteHairStyleKeys, spriteKeys, spriteMakeupKeys, tileSetKeys } from '../../keys';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super(sceneKeys.boot);
  }

  preload(): void {
    this.createLoadingUI();

    this.loadTiles();
    this.loadImages();
    this.loadSprites();
    this.loadAudio();
    this.loadMapData();
  }

  create(): void {
    this.scene.start(sceneKeys.title);
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
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        color: '#ffffff',
      }
    });

    this.load.on('progress', (value: number) => {
      progressBar.clear();
      progressBar.fillStyle(0x1d74ad, 1);
      progressBar.fillRect(width / 2 - ((width / 3) / 2) + 10, height / 2 - 15, ((width / 3) * (value === 0 ? undefined : value)) - 20, 30);
      percentText.setText(`${(value * 100).toFixed(2)}%`);
    });

    this.load.on('fileprogress', (file: Phaser.Loader.File, value: number) => {
      assetText.setText(`Loading ${file.key}: ${(value * 100).toFixed(2)}%`);
      const bounds = assetText.getBounds()
      assetText.setPosition(width / 2 - bounds.width / 2, height / 2 + 50,);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });
  }

  /** loads tile set images */
  private loadTiles(): void {
    this.load.image(tileSetKeys.townTiles, townTiles)
    this.load.image(tileSetKeys.farmTiles, farmTiles);
    this.load.image(tileSetKeys.interiorTiles, interiorTiles);
    this.load.image(tileSetKeys.collisionTile, collisionTile)
  }

  /** load misc images */
  private loadImages(): void {
    this.load.image(imageKeys.battleBg, battleBg);
    this.load.image(imageKeys.btn1, btn1);
    this.load.image(imageKeys.btn2, btn2);
    this.load.image(imageKeys.emoticons, emoticons);
    this.load.image(imageKeys.fireball, fireball)
    this.load.image(imageKeys.GUI, GUI);
    this.load.image(imageKeys.inventoryItems, inventoryItems);
    this.load.image(imageKeys.slimeItems, slimeItems);
    this.load.image(imageKeys.treeShake, treeShake)
  }

  /** load sprite sheet images */
  private loadSprites(): void {
    // sprites
    this.load.spritesheet(spriteKeys.bats, bats, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteKeys.ghosts, ghosts, { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet(spriteKeys.slimes, slimes, { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet(spriteKeys.characters, characters, { frameWidth: 16, frameHeight: 16 });
    this.load.spritesheet(spriteKeys.billy, billy, { frameWidth: 32, frameHeight: 32 });
    // sprite accessories
    this.load.spritesheet(spriteAccessoryKeys.beard, beard, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.blueClownMask, blueClownMask, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.cowboyHat, cowboyHat, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.emeraldEaring, emeraldEaring, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.glasses, glasses, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.luckyHat, luckyHat, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.pumpkinHat, pumpkinHat, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.purplePumpkinHat, purplePumpkinHat, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.redClownMask, redClownMask, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.redEaring, redEaring, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.silverEmeraldEaring, silverEmeraldEaring, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.silverRedEaring, silverRedEaring, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.spookyMask, spookyMask, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.sunGlasses, sunGlasses, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteAccessoryKeys.witchHat, witchHat, { frameWidth: 32, frameHeight: 32 });
    // sprite clothes
    this.load.spritesheet(spriteClothesKeys.basicPants, basicPants, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.basicShirts, basicShirts, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.clownOutfit, clownOutfit, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.dress, dress, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.floralShirt, floralShirt, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.overalls, overalls, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.pumpkinOutfit, pumpkinOutfit, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.sailor, sailor, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.sailorBow, sailorBow, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.shoes, shoes, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.skirt, skirt, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.skullShirt, skullShirt, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.spaghettiStrap, spaghettiStrap, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.spookyOutfit, spookyOutfit, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.sportyShirt, sportyShirt, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.stripeShirt, stripeShirt, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.suitPants, suitPants, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.suitShirt, suitShirt, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteClothesKeys.witchOutfit, witchOutfit, { frameWidth: 32, frameHeight: 32 });
    // sprite hair
    this.load.spritesheet(spriteHairStyleKeys.bob, bob, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.braids, braids, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.buzzcut, buzzcut, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.curly, curly, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.emo, emo, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.extraLong, extraLong, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.extraLongSkirt, extraLongSkirt, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.frenchCurls, frenchCurls, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.gentleman, gentleman, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.longStraight, longStraight, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.longStraightSkirt, longStraightSkirt, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.midiwave, midiwave, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.ponytail, ponytail, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.spacebuns, spacebuns, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteHairStyleKeys.wavy, wavy, { frameWidth: 32, frameHeight: 32 });
    // sprite makeup
    this.load.spritesheet(spriteMakeupKeys.blush, blush, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteMakeupKeys.eyes, eyes, { frameWidth: 32, frameHeight: 32 });
    this.load.spritesheet(spriteMakeupKeys.lipstick, lipstick, { frameWidth: 32, frameHeight: 32 });
  }

  /** load audio files */
  private loadAudio(): void {
    this.load.audio(audioKeys.battle, battle);
    this.load.audio(audioKeys.enemyDeath, enemyDeath);
    this.load.audio(audioKeys.fireballHit, fireballHit);
    this.load.audio(audioKeys.initBattle, initBattle);
    this.load.audio(audioKeys.initFireball, initFireball);
    this.load.audio(audioKeys.map, map);
    this.load.audio(audioKeys.pickup, pickup);
    this.load.audio(audioKeys.playerAttack, playerAttack);
    this.load.audio(audioKeys.playerDamage, playerDamage);
    this.load.audio(audioKeys.playerDeath, playerDeath);
    this.load.audio(audioKeys.tackleHit, tackleHit);
    this.load.audio(audioKeys.tackleHit, tackleHit);
    this.load.audio(audioKeys.topDown, topDown);
    this.load.audio(audioKeys.victory, victory);
  }

  /** load map file */
  private loadMapData(): void { 
    this.load.tilemapTiledJSON(mapKeys.foxHall.key, foxHall);
  }
}