import path from 'path'
import multer from 'multer'
import crypto from 'crypto'

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'tmp'),
        filename(request, file, callback) {
            const filehash = crypto.randomBytes(10).toString("hex");
            const filename = `${filehash}-${file.originalname}`
            return callback(null, filename)
        }
    }),
}