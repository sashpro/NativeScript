export class Send {
    request_trans_hash: string;
    amount: number;
    message: string;
    receiver: string;
    repeat_receiver: string;
    wallet_from: string;
};

export class Request {
    amount: number;
    message: string;
    currency: string;
    requested_user_email: string;
};
