import { Request, Response } from "express";
import multer from 'multer'
import uploadConfig from '../config/upload'
import UpdateUserAvatarService from '../services/UpdateAvatarUserService'

export default class UpdateAvatar {

    async index(request: Request, response: Response) {

        const upload = multer(uploadConfig)


        // routes.patch('/avatar', upload.single('avatar'),async(req, res) => {
        //     try{
        //         const updateUserAvatarService = new UpdateUserAvatarService()

        //     }catch(e){
        //         return res.status(400).json({err: e.message})

        //     }
        //     return res.json('ok')
        // })
    }

}