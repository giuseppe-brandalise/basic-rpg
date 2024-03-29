import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints : number;
  private static _countDwarf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf._countDwarf += 1;
    return Dwarf._countDwarf;
  }
}