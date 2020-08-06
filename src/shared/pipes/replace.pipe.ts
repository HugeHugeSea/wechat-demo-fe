import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replace'
})

/**
 * Shorten string display according to the inputted length and trailing display
 *
 * Usage:
 * {{ str | replace:['aaa,bbb,ccc', ' '] }}
 */
export class StringReplacePipe implements PipeTransform {
    transform(value: string, args: string[]): string {
        if (!value) {
            return value;
        }
        const list = args[0].split(',');
        let result = value;
        for (let event of list) {
            const reg = new RegExp(event, "g");
            result = result.replace(reg, args[1]);
        }

        return result;
    }
}
