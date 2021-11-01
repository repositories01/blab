export interface AddAccount {
  add(params: Request): Promise<void>;
}

export namespace AddAccount {
  export interface Request {
    name: string;
    email: string;
    password: string;
    role: string;
  }
}