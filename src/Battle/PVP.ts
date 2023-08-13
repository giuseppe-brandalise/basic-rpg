import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  private turn: number;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
    this.turn = 1;
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.whoAttaks();
      this.turn += 1;
    }

    return this._player1.lifePoints === -1 ? -1 : 1;
  }

  whoAttaks() {
    if (this.turn % 2 === 0) {
      this._player2.attack(this._player1);
    } else {
      this._player1.attack(this._player2);
    }
  }
}