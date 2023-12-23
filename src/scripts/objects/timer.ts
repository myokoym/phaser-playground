export default class Timer extends Phaser.GameObjects.Container {
  time: number = 0
  timeText: Phaser.GameObjects.Text
  gameTimer: Phaser.Time.TimerEvent

  constructor(scene: Phaser.Scene) {
    super(scene)
    scene.add.existing(this)

    this.timeText = new Phaser.GameObjects.Text(scene, 10, 100, '0', { color: 'black', fontSize: '64px' })
    this.add(this.timeText)

    this.gameTimer = this.scene.time.addEvent({
      delay: 100,
      callback: ()=> {
        this.time += 100
        this.timeText.setText(this.formatTime(this.time))
      },
      callbackScope: this,
      loop: true,
    });

    // this.timeLeft = timeLeft
    // // the energy container. A simple sprite
    // let energyContainer = new Phaser.GameObjects.Sprite(scene, 640 / 2, 320 / 2, "energycontainer");
    // // the energy bar. Another simple sprite
    // let energyBar = new Phaser.GameObjects.Sprite(scene, energyContainer.x + 46, energyContainer.y, "energybar");
    // // a copy of the energy bar to be used as a mask. Another simple sprite but...
    // this.energyMask = new Phaser.GameObjects.Sprite(scene, energyBar.x, energyBar.y, "energybar");
    // // ...it's not visible...
    // this.energyMask.visible = false;
    // // and we assign it as energyBar's mask.
    // energyBar.mask = new Phaser.Display.Masks.BitmapMask(this.scene, this.energyMask);
    // // a boring timer.
    // this.gameTimer = this.scene.time.addEvent({
    //   delay: 1000,
    //   callback: function(timeLeft){
    //     this.timeLeft--;
    //     // dividing enery bar width by the number of seconds gives us the amount
    //     // of pixels we need to move the energy bar each second
    //     let stepWidth = this.energyMask.displayWidth / gameOptions.initialTime;
    //     // moving the mask
    //     this.energyMask.x -= stepWidth;
    //     if(this.timeLeft == 0){
    //         this.scene.start("PlayGame")
    //     }
    //   },
    //   callbackScope: this,
    //   loop: true
    // });
  }

  private formatTime(miliSeconds: number): string {
    // 小数点以下1桁まで表示
    return (miliSeconds / 1000).toFixed(1)
  }
}
