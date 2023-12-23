export default class TitleScene extends Phaser.Scene {
    titleText: Phaser.GameObjects.Text;
    startButton: Phaser.GameObjects.Text;

    constructor() {
        super({ key: 'TitleScene' });
    }

    preload() {
        // ここで必要なアセットをロードする。例: ボタン画像
    }

    create() {
        this.titleText = this.add.text(100, 150, 'タイピングゲーム', { fontSize: '64px', color: '#999' });
        this.startButton = this.add.text(100, 300, 'スタート', { fontSize: '40px', color: '#999' })
            .setInteractive()
            .on('pointerdown', () => this.startGame());
    }

    startGame() {
        this.scene.start('GameScene');
    }
}
