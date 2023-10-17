import { Unit,Commander } from './unit';


export abstract class AbstractArmyFactory {
  abstract createUnit(): Unit;
  abstract createCommander(): Commander;
}
