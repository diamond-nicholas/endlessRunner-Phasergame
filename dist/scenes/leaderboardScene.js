/* eslint-disable comma-dangle */
import Phaser from 'phaser';
import { getScore, sortArray } from './util';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.add.image(400, 300, 'sky').setScale(3);

    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(0, 0, 800, 600);

    this.add.image(400, 300, 'frame');

    this.topTenText = this.add.text(400, 50, 'Top Ten Scores', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.topTenText.setOrigin(0.5, 0.5);

    getScore().then((resp) => {
      const sortedArray = sortArray(resp.result);
      for (let i = 0; i < 10; i += 1) {
        this.scoreText = this.add.text(
          250,
          i * 40 + 100,
          `${sortedArray[i].user}: ${sortedArray[i].score} seconds`,
          { fontSize: '25px', fill: '#fff' }
        );
      }
    });

    // Title Score
    this.titleButton = this.add
      .sprite(100, 200, 'blueButton1')
      .setInteractive();
    this.centerButton(this.titleButton, -2.2);

    this.titleText = this.add.text(0, 0, 'Title Screen', {
      fontSize: '24px',
      fill: '#fff',
    });
    this.centerButtonText(this.titleText, -2.2);

    this.titleButton.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(400, 300 - offset * 100, 800, 600)
    );
  }

  centerButtonText(gameText, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameText,
      this.add.zone(400, 300 - offset * 100, 800, 600)
    );
  }
}
