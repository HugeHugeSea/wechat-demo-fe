import {Pipe, PipeTransform} from '@angular/core';

/**
 *Capital a Word
 * EX:
 *  aaaa => Aaaa
 *  AAAA => AAAA
 *  undefined => undefined
 */
@Pipe({
    name: 'capitalWord'
})
export class CapitalWordPipe implements PipeTransform {

    transform(value: string, args?: any): any {
        if (!value) { return value; }
        return value[0].toUpperCase() + value.substr(1);
    }

}
