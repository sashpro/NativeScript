export class Exchange {
    operation: string;
    wallet_from: any;
    wallet_to: any;
    rate: number;
    amount: number;
    other_amount: number;
    message: string;
};

export class ExchangeRate {
    operation: string;
    wallet_from_currency: string;
    wallet_to_currency: string;
};
