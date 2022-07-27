import { Bill } from './classImplementsInterface';
import { hasPrint } from './interfaceForClass';

const document1: hasPrint = new Bill('Vina', 'make', 5);

const allDocuments: hasPrint[] = [];
allDocuments.push(document1);
console.log(allDocuments);
