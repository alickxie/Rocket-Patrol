class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    // init(), preload
    preload(){
        //load iamges/tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
    }

    create() {
        // place starfield
        this.starfield = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'starfield').setOrigin(0, 0);

        // green UI background
        this.add.rectangle(0, borderUIsize + borderPadding, game.config.width,
            borderUIsize * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUIsize, 0xFFFFFF).setOrigin
            (0, 0);
        this.add.rectangle(0, game.config.height - borderUIsize, game.config.width,
            borderUIsize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin
            (0, 0);
        this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize, game.
            config.height, 0xFFFFFF).setOrigin
            (0, 0);

        // add rocket (Player 1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - 
            borderUIsize - borderPadding, 'rocket').setOrigin(0.5, 0);
    }

    update(){
        this.starfield.tilePositionX -= starSpeed;
    }
}