export class Email {
    email: string;
}

export class Authentication extends Email {
    password: string;
    mfa_code: string;
}

export class ChangePhone {
    phone_number: number;
    mfa_code: string;
}

export class ResetPassword {
    password: string;
    token: string;
    uid: string;
}

export class User {
    pk: string;
    email: string;
    username: string;
    groups_name: Array<string>;
    role: string;
    first_name: string;
    last_name: string;
    phone: string;
    country: string;
    avatar: string;
    date_of_birth: string;
    address: string;
    state: string;
    city: string;
    postal_code: string;
}

export class UserBrief{
  pk: string;
  email:string;
  first_name: string;
  last_name: string;
  is_active: boolean;
}
