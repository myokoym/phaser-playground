export default class ScoreText extends Phaser.GameObjects.Text {
  score: number = 0

  constructor(scene) {
    super(scene, 10, 10, 'Score: 0', { color: 'black', fontSize: '64px' })
    scene.add.existing(this)
    this.setOrigin(0)
  }

  public add(diff: number) {
    this.score += diff
    this.setText('Score: ' + this.score.toString())
  }
}
