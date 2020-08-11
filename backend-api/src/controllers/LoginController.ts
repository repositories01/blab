import { Request, Response } from 'express';


export default class LoginController{

    async auth(request: Request, response: Response) {
      
        return response.json('ok');
    }

    async create(request: Request, response: Response) {
      
        return response.status(201).send();
    }
}