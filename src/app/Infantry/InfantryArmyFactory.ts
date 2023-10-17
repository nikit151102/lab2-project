import { AbstractArmyFactory } from '../abstract-army-factory';
import { Infantry } from './infantry';
import { Commander } from '../unit';

export class InfantryArmyFactory extends AbstractArmyFactory {
  private commander: Commander;

  constructor() {
    super();
    this.commander = this.createCommander();
  }
  
  createUnit(): Infantry {
    return new Infantry();
  }

  createCommander(): Commander {
    return this.commander; 
  }
}

