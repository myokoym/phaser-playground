export default class TypingGameScene extends Phaser.Scene {
    words: string[];
    currentWord: string;
    displayedText: string;
    score: number;
    scoreText: Phaser.GameObjects.Text;
    wordText: Phaser.GameObjects.Text;

    constructor() {
        super({ key: 'TypingGameScene' });
        this.words = ['example', 'phaser', 'game', 'coding'];
        this.currentWord = '';
        this.displayedText = '';
        this.score = 0;
    }

    preload() {
        // ここに必要なアセットをロードするコードを追加
    }

    create() {
        this.scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '32px', color: '#000' });
        this.wordText = this.add.text(100, 200, '', { fontSize: '48px', color: '#000' });
        this.nextWord();
    }

    update() {
        // ゲームのアップデートロジックをここに追加
    }

    nextWord() {
        const randomIndex = Phaser.Math.Between(0, this.words.length - 1);
        this.currentWord = this.words[randomIndex];
        this.displayedText = '';
        this.updateWordText();
        this.input.keyboard?.removeAllKeys();
        this.registerKeyInputs();
    }

    registerKeyInputs() {
        for (let i = 0; i < this.currentWord.length; i++) {
            this.input.keyboard?.addKey(this.currentWord.charAt(i).toUpperCase()).on('down', () => {
                if (this.displayedText.length === i) {
                    this.displayedText += this.currentWord.charAt(i);
                    this.updateWordText();
                    if (this.displayedText === this.currentWord) {
                        this.score += 10;
                        this.scoreText.setText('Score: ' + this.score);
                        this.nextWord();
                    }
                }
            });
        }
    }

    updateWordText() {
        let coloredText = this.displayedText.split('').join(' ');
        let remainingText = this.currentWord.substring(this.displayedText.length).split('').join(' ');
        this.wordText.setText(coloredText).setStyle({ color: '#ff0000' }).appendText(' ' + remainingText);
    }
}

//const config = {
//    type: Phaser.AUTO,
//    width: 800,
//    height: 600,
//    scene: [TypingGameScene]
//};
//
//const game = new Phaser.Game(config);
