import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharectersCollection } from './CharectersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charectersCollection = new CharectersCollection('SaKiL');
charectersCollection.sort();
console.log(charectersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
linkedList.sort();
linkedList.print();