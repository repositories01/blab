import { Request, Response, NextFunction } from 'express';
import * as jwt from '../config/jwt'


interface TokenInterface {
  user: number;
}

export default function ensureAuth(req: Request, res: Response, next: NextFunction): void {
  const headerAuth = req.headers.authorization;

  // if (!headerAuth) {
  //   throw new Error('Token is missing');
  // }

  try {

    const token = headerAuth ? headerAuth.split(' ')[1] : ''
    const decoded = jwt.verify(token);
    const userId = (decoded as TokenInterface).user

    req.user = {
      id: userId
    }
    
    return next();
  } catch (err) {
    console.log(err)
    throw new Error('invalid token');

  }

};