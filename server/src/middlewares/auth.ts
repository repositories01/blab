import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { secret } from '../config/jwt';

export default async (req, res, next) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, hash] = req.headers.authorization?.split(' ');
  // const teste = Buffer.from(hash, 'base64').toString().split(':');
  try {

    const decoded = await promisify(jwt.verify)(hash);
    console.log(decoded)
    // req.userId = decoded.id;

    return next();
  } catch (err) {
    console.log(err)
    return res.status(401).json({ error: 'Token invalid' });
  }
};