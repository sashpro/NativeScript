export class Pair {
    left_currency: number;
    right_currency: number;
}

export class Rate {
    pair = new Pair;
    buy_rate: number;
    sell_rate: number;
    create_dt: string;
    active: boolean;
}

export class ChangeRate {
    pk: string;
    pair: string;
    new_buy_rate: number;
    new_sell_rate: number;
}

export class Service {
    id: string;
    name: string;
    picture: string;
    const_fee: number;
    percent_fee: number;
    currency: string;
    operation_type: string;
    service_type: string;
}

export class Fee {
    pk: string;
    service = new Service;
    const_fee: number;
    percent_fee: number;
}

export class ChangeFee {
    id: string;
    service: string
    const_fee: number;
    percent_fee: number;
}
