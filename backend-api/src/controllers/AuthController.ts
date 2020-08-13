import { Request, Response } from "express";
import db from "../database/connection";

export default class AuthController {
  async index(req: Request, res: Response) {
    const users = await db("accounts");
    return res.status(200).json(users);
  }

  async auth(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const user = await db("accounts")
    .where({email: email})
    .select('id');

    try {
       if(user.length == 0){
          await db("accounts").insert({
          name,
          email,
          password,
        });
        res.status(201).send()
       }else{
        res.status(400).json({erro: 'Email is  already exists'})
      }
      
     
    } catch (err) {
      return res.status(400).json({
        error: "Unexpected error while creating new user",
      });
    }
  }
}
