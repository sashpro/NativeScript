export class Transaction {
    pk: number;
    status: string;
    hash: string;
    message: string;
    wallet_from: number;
    wallet_to: number;
    amount: number;
    type: string;
    dt_created: string;
    ext_transaction_id: number;
    send_to_email: string;
    currency: string;
}

export class Hash {
    hash: string;
}

export class SendEmail {
    message: string;
    subject: string;
    user: string;
}
