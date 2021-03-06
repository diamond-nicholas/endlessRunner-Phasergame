// import 'regenerator-runtime/runtime';
import Phaser from 'phaser';
import config from './Config/config';
import GameScene from './scenes/gameScene';
import BootScene from './scenes/bootScene';
import PreloaderScene from './scenes/preloaderScene';
import TitleScene from './scenes/titleScene';
import GameOverScene from './scenes/gameOverScene';
import LeaderboardScene from './scenes/leaderboardScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Leaderboard', LeaderboardScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
