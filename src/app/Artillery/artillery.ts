import { messages } from '../MessageToPage';
import { Unit } from '../unit';

export class Artillery implements Unit {
  mess = new messages()
  attack(i: number) {
    let title = 'Artillery is attacking!  ' + i
    this.mess.addMessageToPage(title)
  }

  defend(i: number) {
    let title = 'Artillery is defending!  ' + i
    this.mess.addMessageToPage(title)
  }
}