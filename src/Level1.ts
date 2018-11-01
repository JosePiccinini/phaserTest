module MyGame {

		export class Level1 extends Phaser.State {

				background : Phaser.Sprite;
				player : MyGame.Paddle;

				create() {

						this.background = this
								.add
								.sprite(0, 0, 'background');

						this.player = new Paddle(this.game, 130, 284);
				}

		}

}