import {Pipe, PipeTransform} from 'angular2/core';

/**
 * Accepts a digit and generates an Array filled with ascending values
 * from 0 to the input digit (exclusive).
 */
@Pipe({name: 'toArray'})
export class ToArrayPipe implements PipeTransform {
    transform(value: number, args: string[]) : any {
        return Array.apply(0, Array(8)).map((x, y) => { return y; });
    }
}