import * as jwt from '../config/jwt'


interface TokenInterface {
  user: number;
}

export default async (req, res, next) => {
  const headerAuth = req.headers.authorization;
  if (!headerAuth) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  try {

    const token = headerAuth ? headerAuth.split(' ')[1] : ''
    const decoded = jwt.verify(token);
    const userId = (decoded as TokenInterface).user
    next();
    return userId;
  } catch (err) {
    console.log(err)
    return res.status(401).json({ error: 'Token invalid' });
  }

};