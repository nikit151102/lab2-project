export interface Unit {
    attack(i:number): void;
    defend(i:number): void;
}



export interface Commander {
    command(selected: string, unit: Unit[], unitType: string, index: number): void;
  }
  