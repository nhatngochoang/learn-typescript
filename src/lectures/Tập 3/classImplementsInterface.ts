import { hasPrint } from './interfaceForClass';

export class Bill implements hasPrint {
  constructor(readonly client: string, private work: string, public amt: number) {}
  print() {
    return `${this.client} ${this.work} ${this.amt}`;
  }
}
