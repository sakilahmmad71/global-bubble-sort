import { Sorter } from './Sorter';

export class CharectersCollection extends Sorter {
  constructor(public data: string) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charecters = this.data.split('');

    const temp = charecters[leftIndex];
    charecters[leftIndex] = charecters[rightIndex];
    charecters[rightIndex] = temp;

    this.data = charecters.join('');
  }
}