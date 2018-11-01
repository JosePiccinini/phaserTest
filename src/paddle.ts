module MyGame {

  export class Paddle extends Phaser.Sprite {

    constructor(game : Phaser.Game, x : number, y : number) {

      super(game, x, y, 'simon', 0);

      this
        .game
        .physics
        .arcade
        .enableBody(this);

      game
        .add
        .existing(this);
    }

    update() {

      this.body.velocity.x = 0;

      // TODO: More elegant input handler, also prevent off screen movement
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        this.body.velocity.y = 150;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        this.body.velocity.y = -150;
      }
    }
  }
}