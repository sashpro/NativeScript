import {Pipe} from '@angular/core';

@Pipe({
    name: 'currencyFormat'
})
export class CurrencyFormat {
    transform(value: number, currency: string ): string {
        let paddingCount: number;
        if (currency=='USD') {
            paddingCount=2;
        } else {
            paddingCount=8;
        }
        let padding: string = Array(paddingCount).fill('0').join('');
        let dec = value.toString().split('.')[0];
        let float = value.toString().split('.')[1];
        float = float === undefined ? padding : float + padding.substring(0, padding.length - float.length);
        float = float.substring(0, paddingCount);
        float = float.replace(/(\d)(?=(\d{4})+$)/g, '$1');
        dec = dec.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        return dec + '.' + float;
    }
}
