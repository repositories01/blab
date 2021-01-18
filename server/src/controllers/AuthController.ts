import { Request, Response } from "express";
import crypto from "crypto";
import db from "../database/connection";
import * as jwt from '../config/jwt'

export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  password: string;
}

export default class AuthController {

  async index(req: Request, res: Response) {
    const users = await db("users")
    return res.json(users);
  }


  async login(req: Request, res: Response) {


    const headerAuth = req.headers.authorization;
    const hash = headerAuth ? headerAuth.split(' ')[1] : ''
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');
    const passCrypto = crypto.createHash("md5").update(password).digest("hex")


    try {

      const user: IUser[] = await db("users")
        .where({ email: email, password: passCrypto })
        .select('name', 'email', 'id')


      if (user.length != 0) {
        const token: string = jwt.sign({ user: user[0].id })
        res.status(200).json({ user, token: token });

      }

      res.status(401).json({ erro: "user not found" });

    } catch (err) {
      res.status(500).json({ erro: err })
    }
  }



  async signup(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userObj = {
      name,
      email,
      password: crypto.createHash("md5").update(password).digest("hex"),
    };

    const user = await db("users").where({ email: email });

    try {
      if (user.length == 0) {
        await db("users").insert(userObj);
        const userId: number = await db("users")
          .where({ email: email })
          .select("id");

        const token = jwt.sign({ user: userId })

        return res.status(201).json({ userId });
      }
      res.status(400).json({ erro: "This email already exists" });

    } catch (err) {

      return res.status(400).json({
        error: "Unexpected error while creating new user",
      });

    }
  }
}
