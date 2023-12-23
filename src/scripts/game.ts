import 'phaser'
import MainScene from './scenes/mainScene'
import GameScene from './scenes/gameScene'
import PreloadScene from './scenes/preloadScene'
import TitleScene from './scenes/titleScene'
import TypingGameScene from './scenes/typingGameScene'
import { Game } from 'phaser'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  //scene: [PreloadScene, MainScene],
  scene: [PreloadScene, TitleScene, TypingGameScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
