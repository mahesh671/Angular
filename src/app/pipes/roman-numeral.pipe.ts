import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanNumeral'
})
export class RomanNumeralPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value) || value < 1 || value > 3999) {
      return 'Invalid input';
    }

    const romanNumerals: { [key: number]: string } = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M',
    };

    let result = '';

    // Loop through the romanNumerals in descending order
    const keys = Object.keys(romanNumerals)
      .map((key) => parseInt(key))
      .sort((a, b) => b - a);

    for (const key of keys) {
      while (value >= key) {
        result += romanNumerals[key];
        value -= key;
      }
    }

    return result;
  }

}
