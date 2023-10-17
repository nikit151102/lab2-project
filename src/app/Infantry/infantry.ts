import { messages } from '../MessageToPage';
import { Unit } from '../unit';

export class Infantry implements Unit {
  mess = new messages()

    attack(i:number) {
      let title = 'Infantry is attacking!  ' + i
      this.mess.addMessageToPage(title)
    }
  
    defend(i:number) {
      let title = 'Infantry is defending!  ' + i
      this.mess.addMessageToPage(title)
    }
    
  }