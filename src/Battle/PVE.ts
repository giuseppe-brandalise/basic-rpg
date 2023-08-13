import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monters: SimpleFighter[];
  private turn: number;
  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monters = monsters;
    this.turn = 1;
  }

  fight(): number {
    while (this._player.lifePoints > 0 && this.checkMontersAlive()) {
      this._monters = this._monters
        .filter((monster) => monster.lifePoints !== -1);
      this.whoAttaks();
      this.turn += 1;
    }

    return this._player.lifePoints === -1 ? -1 : 1;
  }

  whoAttaks() {
    if (this.turn % 2 === 0) {
      this._monters.forEach((monster) => monster.attack(this.player));
    } else {
      this._player.attack(this._monters[0]);
    }
  }

  checkMontersAlive(): boolean {
    return this._monters.every((monster) => monster.lifePoints !== -1);
  }
}