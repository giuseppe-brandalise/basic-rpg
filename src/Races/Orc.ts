import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints : number;
  private static _countOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Orc._countOrc += 1;
    return Orc._countOrc;
  }
}