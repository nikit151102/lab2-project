// isCommander.ts
import { messages } from "./MessageToPage";
import { Commander, Unit } from "./unit";

export class isCommander implements Commander {
    
    command(selected: string, unit: Unit[], unitType: string, index: number) {
        const message = `Commander gives orders to ${unitType} ${index}`;
        let mess = new messages()
        mess.addMessageToPage(message)
        if (selected === 'attack') {
            unit.forEach((unit, index) => {
                unit.attack(index);
            });
        } else if (selected === 'defend') {
            unit.forEach((unit, index) => {
                unit.defend(index);
            });
        }
    }
}
