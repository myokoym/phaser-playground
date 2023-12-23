import TypingText from '../objects/typingText'
import ScoreText from '../objects/scoreText'
import Timer from '../objects/timer'

export default class GameScene extends Phaser.Scene {
  typingText: TypingText
  timer: Timer
  scoreText: ScoreText
  words: {en: string, ja: string}[] = [
    {en: 'cat', ja: '猫'},
    {en: 'dog', ja: '犬'},
    {en: 'bird', ja: '鳥'},
    {en: 'sheep', ja: '羊'},
  ]
  wordsCursor: number = 0

  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.scoreText = new ScoreText(this)
    this.timer = new Timer(this)
    this.typingText = new TypingText(this, this.currentWord())
    this.input.keyboard?.on('keydown', (event) => {
      let result = this.typingText.inputKey(event.key)
      if (!result) {
        this.scoreText.add(-1)
      }
      if (this.typingText.completed()) {
        this.scoreText.add(this.currentWord().en.length)
        this.typingText.destroy()
        this.wordsCursor++
        this.typingText = new TypingText(this, this.currentWord())
      }
    });
  }

  update() {
  }

  private currentWord(): {en: string, ja: string} {
    return this.words[this.wordsCursor % this.words.length]
  }
}
