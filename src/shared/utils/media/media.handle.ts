import { diskStorage } from "multer";

export const storage = diskStorage({
    destination: `./public/temp-images`,
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.').pop();
        const name = `${Date.now()}.${extension}`;
        cb(null, name);
    },
})