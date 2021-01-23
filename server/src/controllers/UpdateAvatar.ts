import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateAvatarUserService";

export default class UpdateAvatar {
    async index(request: Request, response: Response) {

        try {
            const updateUserAvatar = new UpdateUserAvatarService();

            const user = await updateUserAvatar.execute({
                user_id: request.user.id,
                avatarFileName: request.file.filename,
            });

            return response.json(user[0]);
        } catch (e) {
            return response.status(400).json({ err: e.message });
        }
    }
}
