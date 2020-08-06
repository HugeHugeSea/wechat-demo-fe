import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterby',
    pure: false
})
export class FilterBy implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        
        // console.log(items)
        // console.log(filter)
        
        const filterArr = Object.entries(filter)
        return items.filter(item => {
            let isPass = true;
            filterArr.forEach(f => {
                // console.log(f);
                if (!item[f[0]].includes(f[1])) isPass = false;
            })
            return isPass;
        });
    }
}