import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFormat'
})
export class PhoneFormat implements PipeTransform {
    transform(value: string): string {
        if ( value === undefined ) {
            return null;
        }
        value = value.replace(/[\(\) ]/g,'');
        if ( value.length === 9 ) {
            return value.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '($1) $2 $3 $4');
        } else {
            return value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '($1) $2 $3 $4');
        }
    }
}