import { AbstractArmyFactory } from '../abstract-army-factory';
import { Cavalry } from './cavalry';
import { Commander } from '../unit';

export class CavalryArmyFactory extends AbstractArmyFactory {
  
  private commander: Commander;

  constructor() {
    super();
    this.commander = this.createCommander();
  }

  createUnit(): Cavalry {
    return new Cavalry();
  }

  createCommander(): Commander {
   return this.commander; 
  }
}


