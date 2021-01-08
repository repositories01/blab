interface Request {
   user_id: string;
   avatarFileName: string;
}

class UpdateUserAvatarService {
   public async execute({ user_id, avatarFileName }: Request): Promise<void> {

   }
}

export default UpdateUserAvatarService;