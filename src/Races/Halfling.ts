import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints : number;
  private static _countHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Halfling._countHalfling += 1;
    return Halfling._countHalfling;
  }
}