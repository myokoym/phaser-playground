export default class InputText extends Phaser.GameObjects.Container {
  remainingText: Phaser.GameObjects.Text
  coloredText: Phaser.GameObjects.Text
  cursor: number = 0

  constructor(scene: Phaser.Scene, word: string) {
    super(scene)
    scene.add.existing(this)
    let fontSize: number = 640 / word.length + 60
    let textOptions = {
      color: 'black',
      fontSize: fontSize.toString() + 'px',
      // スペースがあるとwordWrap幅が変わってしまうので一旦保留
      // wordWrap: { width: this.scene.cameras.main.width },
      // lineSpacing: fontSize / 2,
    }
    this.remainingText = new Phaser.GameObjects.Text(scene, 0, 0, word, textOptions)
    this.remainingText.setOrigin(0.5) // textOptionsに書くと反映されない？
    this.coloredText = new Phaser.GameObjects.Text(scene, 0, 0, ' '.repeat(word.length), textOptions)
    this.coloredText.setOrigin(0.5).setColor('red')
    this.add(this.remainingText)
    this.add(this.coloredText)
  }

  public adjustPosition() {
    this.x = this.scene.cameras.main.width / 2
    this.y = this.scene.cameras.main.height / 2
  }

  public inputKey(char: string): boolean {
    console.log(this.scene.cameras.main.width)
    if (char === this.remainingText.text.charAt(this.cursor)) {
      this.remainingText.setText(this.replaceAt(this.remainingText.text, this.cursor, ' '))
      this.coloredText.setText(this.replaceAt(this.coloredText.text, this.cursor, char))
      this.cursor++
      return true
    } else {
      return false
    }
  }

  public completed(): boolean {
    return this.remainingText.text.length === this.cursor
  }

  private replaceAt(original: string, index: number, replacement: string): string {
    return original.substring(0, index) + replacement + original.substring(index + 1);
  }
}
