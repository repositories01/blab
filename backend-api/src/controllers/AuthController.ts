import { Request, Response } from "express";
import crypto from "crypto";
import db from "../database/connection";
import * as jwt from '../utils/jwt'


export default class AuthController {


  async login(req: Request, res: Response) {

    // const [hashType, hash] = req.headers.authorization?.split(' ');
    const parameters = req.headers.authorization?.split(' ');
    const iterator = parameters[Symbol.iterator]();
    const hashType = iterator.next().value
    const hash = iterator.next().value

    const credentials = Buffer.from(hash, 'base64').toString();
    console.log(credentials)

    const users = await db("accounts");
    return res.status(200).json(users);
  }



  async signup(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userObj = {
      name,
      email,
      password: crypto.createHash("md5").update(password).digest("hex"),
    };

    const user = await db("accounts").where({ email: email });

    try {
      if (user.length == 0) {
        await db("accounts").insert(userObj);
        const userId: number = await db("accounts")
          .where({ email: email })
          .select("id");

        const token = jwt.sign({ user: userId })

        // const verify = jwt.verify(token, "a21za2FtbHNkYW1rbGRhc2Q");
        res.status(201).json({ userId, token });
      } else {
        res.status(400).json({ erro: "This email already exists" });
      }
    } catch (err) {
      return res.status(400).json({
        error: "Unexpected error while creating new user",
      });
    }
  }
}
