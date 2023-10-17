import { Component, OnInit } from '@angular/core';
import { InfantryArmyFactory } from './Infantry/InfantryArmyFactory';
import { CavalryArmyFactory } from './Cavalry/CavalryArmyFactory';
import { ArtilleryArmyFactory } from './Artillery/ArtilleryArmyFactory';
import { Unit } from './unit';
import { AbstractArmyFactory } from './abstract-army-factory';
import { isCommander } from './Commander';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedInfantryIndex:string=''
  infantryUnits: Unit[] = [];
  cavalryUnits: Unit[] = [];
  artilleryUnits: Unit[] = [];

  infantryFactory: AbstractArmyFactory;
  cavalryFactory: AbstractArmyFactory;
  artilleryFactory: AbstractArmyFactory;

  private Commander = new isCommander();


  constructor() {
    this.infantryFactory = new InfantryArmyFactory();
    this.cavalryFactory = new CavalryArmyFactory();
    this.artilleryFactory = new ArtilleryArmyFactory();
  }

  ngOnInit(): void {
  }

  addInfantry() {
    this.infantryUnits.push(this.infantryFactory.createUnit());
  }

  addCavalry() {
    this.cavalryUnits.push(this.cavalryFactory.createUnit());
  }

  addArtillery() {
    this.artilleryUnits.push(this.artilleryFactory.createUnit());
  }


  commandInfantry(index: number,selected:string) {
    this.Commander.command(selected,this.infantryUnits,'Infantry',index);
    this.selectedInfantryIndex = ''
  }

  commandCavalry(index: number,selected:string) {
    this.Commander.command(selected, this.cavalryUnits, 'Cavalry',index);
    this.selectedInfantryIndex = ''
  }
  
  commandArtillery(index: number,selected:string) {
    this.Commander.command(selected, this.artilleryUnits, 'Artillery',index);
    this.selectedInfantryIndex = ''
  }
  
  removeInfantry(index: number) {
    this.infantryUnits.splice(index, 1);
  }
  
  removeCavalry(index: number) {
    this.cavalryUnits.splice(index, 1);
  }
  
  removeArtillery(index: number) {
    this.artilleryUnits.splice(index, 1);
  }


  clearMessages() {
    const messageContainer = document.getElementById('message-container');
  
    if (messageContainer) {
      messageContainer.innerHTML = '';
    }
  }
}



