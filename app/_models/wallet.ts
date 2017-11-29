export class Wallet {
    pk: number;
    name: string;
    default: boolean;
    currency: string;
};

export class WithdrawMoney {
    crypto_address: string;
    address_name: string;
    amount: number;
    wallet: string;
    message: string;
}

export class WithdrawUSD {
    wallet: string;
    email_walletId: string;
    service: any;
    amount: number;
    currency: string;
    message: string;
}

export class Deposit {
    wallet: any;
    label: string;
}

export class DepositUSD {
    comments: string;
    wallet: string;
    service: any;
    amount: number;
}

export class DepositUSDForm {
    ac_account_emails: string;
    ac_amount: number;
    ac_comments: string;
    ac_currency: string;
    ac_order_id: string;
    ac_sci_name: string;
    ac_sign: string;
}

export class LogHistory {
  action: string;
  data: string;
  date: string
}

export class TransactionHistory {
    pk: number;
    currency_amount: number;
    address_name: string;
    currency_name: string;
    time: string;
    type: string;
    status: string;
    wallet_from: string;
    date: string;
    hash: string;
}

export class Transfer {
    wallet_from: string;
    message: string;
    wallet_to: string;
    amount: number;
}

export class Rename {
    walletID: number;
    name: string;
}
