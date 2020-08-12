import { Request, Response } from "express";
import db from "../database/connection";

interface Account {
  week_day: number;
  from: string;
  to: string;
}

export default class AuthController {
  async index(req: Request, res: Response) {
    const users = await db("accounts");
    return res.status(200).json(users);
  }

  async auth(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const trx = await db.transaction();

    try {
      const insertedAccount = await trx("accounts").insert({
        name,
        email,
        password,
      });

      await trx.commit();
      return res.status(201).send();
    } catch (err) {
      await trx.rollback();

      return res.status(400).json({
        error: "Unexpected error while creating new user",
      });
    }
  }
}
