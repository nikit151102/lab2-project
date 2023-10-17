import { AbstractArmyFactory } from '../abstract-army-factory';
import { Artillery } from './artillery';
import { Commander } from '../unit';

export class ArtilleryArmyFactory extends AbstractArmyFactory {
  
  private commander: Commander;

  constructor() {
    super();
    this.commander = this.createCommander();
  }
  
  createUnit(): Artillery {
    return new Artillery();
  }

  createCommander(): Commander {
    return this.commander; 
  }
}




