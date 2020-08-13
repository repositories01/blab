import { Request, Response } from "express";
import crypto from "crypto";
import db from "../database/connection";
import jwt from "jsonwebtoken";

export default class AuthController {
  async login(req: Request, res: Response) {
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

    const user = await db("accounts").where({ email: email }).select("id");
    try {
      if (user.length == 0) {
        await db("accounts").insert(userObj);
        res.status(201).send();
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
