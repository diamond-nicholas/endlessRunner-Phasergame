![](https://img.shields.io/badge/Microverse-blueviolet)

# endlessRunner-Phasergame

> An endless runner game built wiht Javascript and Phaser 3.

![screenshot](./screenshots/)

## Game instructions

- This game is an endless runner platformer. The plataforms appear infinitly until the game ends and the game character (a cat) has to jump from building to building.
- If the cat falls below the edge of the screen the game ends.
- Your progress (score) is measured in seconds. The longer the cat stays "alive" higher the score.
- To jump you have to simply click on the screen with the left mouse button.
- The cat can jump twice. After the second jump, the cat has to touch a platform to be able to jump again.
- On the game over screen you can input your name and click on the "Save Score" button, to save your score in a leaderbord.
- If no name is given, the name "Default User" will be attributed.
- If you access the leaderboard (by clicking on the "Leaderboard" button) without saving your score, the score for that run WILL BE LOST!
- If you chose to return to the title screen (by clicking on the "Title Screen" button) without saving your score, the score for that run WILL BE LOST!
- By clicking on the "Leaderboard" button, on the Title screen or on the game over screen, You will be shown a Leaderboard with the top 10 scores.

[Click Here to read the Game Design Document](./gameInstructions)

## Built With

- JavaScript, CSS, HTML.
- Phaser 3
- Webpack, Jest, Babel, eslint, stylelint, webhint.

## Live Demo

[Play Cat Jump]()

## Getting Started

To get a local copy up and running follow these simple example steps.

- On the top of the page there is a green button name "Code"
- Click on the "Code" button.
- A Menu will appear click in "Download Zip"
- Save the "phaser3-plataformer-feature-full-game.zip" file on your computer.
- Extract the contents you just downloaded in a folder.

### Prerequisites

- nodeJS.
- A browser.

### Setup

- Open your command prompt.
- Go inside the folder "endless runner game" (The one you extracted from the zip file).
- Type `npm install`.

### Usage

- Open your comand prompt.
- Go inside the folder "endless runner" (The one you extracted from the "zip" file).
- Type `npm run start` (this should open a page in your default browser and the game should load).

### Run tests

- Open your comand prompt.
- Go inside the folder "endless runner game" (The one you extracted from the "zip" file).
- Type `npm run test`.

## Authors

👤 **Nicholas Diamond**

- GitHub: [@Diamond](https://github.com/diamond-nicholas)
- LinkedIn: [Diamond Nicholas](https://www.linkedin.com/in/diamond-nicholas/)
- Twitter: [@diamondnich](https://twitter.com/diamondnich)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/diamond-nicholas/endlessRunner-Phasergame/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

Thanks to:

- Cat Asset by [[LPC] Cats and Dogs" Artist: bluecarrot16 License: CC-BY 3.0 / GPL 3.0 / GPL 2.0 / OGA-BY 3.0](http://opengameart.org/content/lpc-cats-and-dogs).
- Building Asset by [Pedro Neves](https://opengameart.org/content/plataform-building).
- Sky Asset by [Paulina Riva](https://opengameart.org/content/sky-background).
- Phaser 3 template tutorial by [Bill Reed](https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/)
- Phaser 3 Endless Runner tutorial by [Emanuele Feronato](https://www.emanueleferonato.com/tag/endless-runner/)

## 📝 License

This project is [MIT](./LICENSE) licensed.
