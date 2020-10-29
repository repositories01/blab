import { Request, Response } from "express";
import crypto from "crypto";
import db from "../database/connection";
import * as jwt from '../utils/jwt'


export default class AuthController {

  async index(req: Request, res: Response) {
    const users = await db("accounts")
    return res.json(users);
  }


  async login(req: Request, res: Response) {

    const [, hash] = req.headers.authorization?.split(' ');
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');
    const passCrypto = crypto.createHash("md5").update(password).digest("hex")

    try {

      const userId: number = await db("accounts")
        .where({ email: email, password: passCrypto })
        .select("id");

      if (userId != 0) {
        const token: string = jwt.sign({ user: userId })
        res.status(200).json({ id: userId, token: token });

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

    const user = await db("accounts").where({ email: email });
    console.log(userObj)
    try {
      if (user.length == 0) {
        await db("accounts").insert(userObj);
        const userId: number = await db("accounts")
          .where({ email: email })
          .select("id");

        const token = jwt.sign({ user: userId })

        return res.status(201).json({ userId, token });

      }
      res.status(400).json({ erro: "This email already exists" });

    } catch (err) {

      return res.status(400).json({
        error: "Unexpected error while creating new user",
      });

    }
  }
}
