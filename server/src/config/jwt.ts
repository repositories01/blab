import jwt from "jsonwebtoken";

interface UserId {

    user?: number;
}


const secret = "a21za2FtbHNkYW1rbGRhc2Q";

export const sign = (payload: UserId) => {
  return jwt.sign(payload, secret, { expiresIn: 99999 });
};

export const verify = (token: string) => {
  return jwt.verify(token, secret);
};
