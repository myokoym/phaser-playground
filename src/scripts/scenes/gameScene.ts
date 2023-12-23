import TypingText from '../objects/typingText'
import ScoreText from '../objects/scoreText'

export default class GameScene extends Phaser.Scene {
  typingText: TypingText
  scoreText: ScoreText
  words: string[] = ['cat', 'ai', 'bird', 'fish', 'horse', 'cow', 'pig', 'sheep', 'goat', 'chicken', 'duck', 'goose', 'turkey', 'rabbit', 'mouse', 'rat', 'snake', 'lizard', 'frog', 'toad', 'turtle', 'crab', 'lobster', 'shrimp', 'octopus', 'squid', 'jellyfish', 'starfish', 'whale', 'dolphin', 'shark', 'seal', 'otter', 'beaver', 'walrus', 'penguin', 'ostrich', 'eagle', 'hawk', 'falcon', 'owl', 'parrot', 'crow', 'raven', 'sparrow', 'robin', 'bluejay', 'cardinal', 'woodpecker', 'hummingbird', 'peacock', 'peahen', 'peafowl', 'swan', 'duck', 'goose', 'turkey', 'chicken', 'rooster', 'hen', 'cow', 'bull', 'calf', 'ox', 'pig', 'boar', 'piglet', 'sheep', 'lamb', 'ewe', 'goat', 'kid', 'horse', 'stallion', 'mare', 'foal', 'donkey', 'mule', 'deer', 'buck', 'doe', 'fawn', 'rabbit', 'hare', 'bunny', 'mouse', 'rat', 'squirrel', 'chipmunk', 'beaver', 'otter', 'raccoon', 'skunk', 'fox', 'wolf', 'coyote', 'bear', 'lion', 'tiger', 'leopard', 'cheetah', 'jaguar', 'panther', 'cougar', 'lynx', 'bobcat', 'elephant', 'giraffe', 'zebra', 'rhinoceros', 'hippopotamus', 'kangaroo', 'koala', 'monkey', 'gorilla', 'chimpanzee', 'baboon', 'lemur', 'bat', 'hedgehog', 'porcupine', 'armadillo', 'sloth', 'anteater', 'platypus', 'skunk', 'badger', 'weasel']
  wordsCursor: number = 0

  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    this.scoreText = new ScoreText(this)
    this.typingText = new TypingText(this, this.currentWord())
    this.typingText.adjustPosition()
    this.input.keyboard?.on('keydown', (event) => {
      //this.typing(event);
      let result = this.typingText.inputKey(event.key)
      if (!result) {
        this.scoreText.add(-1)
      }
      if (this.typingText.completed()) {
        this.scoreText.add(this.currentWord().length)
        this.typingText.destroy()
        this.wordsCursor++
        this.typingText = new TypingText(this, this.currentWord())
        this.typingText.adjustPosition()
      }
    });
  }

  update() {
  }

  private currentWord(): string {
    return this.words[this.wordsCursor % this.words.length]
  }
}
