import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";


const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "..", "..", "public", "raw"));
    },
    filename: (req, file, callback) => {
        const uniqueId = uuidv4();
        callback(null, `${file.fieldname}${uniqueId}${path.extname(file.originalname)}`);
    }
});

const fileFilter = (req, file, callback) => {
    if (file.mimetype.startsWith('image/')) {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

export const uploadSingleImage = (name: string) => multer({
    storage: fileStorage,
    fileFilter: fileFilter
}).single(name);