import { Request, Response } from "express";
import multer from 'multer'
import uploadConfig from '../config/upload'
import db from "../database/connection";
import UpdateUserAvatarService from '../services/UpdateAvatarUserService'

interface IUser {
    name: string,
    email: string,
    id: number
}

export default class UpdateAvatar {

    async index(request: Request, response: Response) {

        const upload = multer(uploadConfig)

        try {

            // const updateUserAvatarService = new UpdateUserAvatarService()
            // const user: IUser[] = await db("users")
            // .where({ email: email})
            // .select('id')

            return response.json('ok')

        } catch (e) {
            return response.status(400).json({ err: e.message })

        }


    }
}