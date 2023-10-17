import { messages } from '../MessageToPage';
import { Unit } from '../unit';

export class Cavalry implements Unit {
  mess = new messages()
    attack(i:number) {
      let title = 'Cavalry is attacking!  ' + i
      this.mess.addMessageToPage(title)
    }
  
    defend(i:number) {
      let title = 'Cavalry is defending!  ' + i
      this.mess.addMessageToPage(title)
    }
  }