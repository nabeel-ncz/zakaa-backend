import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const createStorage = (destinationFolder) => {
    return multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.join(__dirname, "..", "..", "public", destinationFolder));
        },
        filename: (req, file, callback) => {
            const uniqueId = uuidv4();
            callback(null, `${file.fieldname}${uniqueId}${path.extname(file.originalname)}`);
        }
    });
}

const createFileFilter = (allowedExtensions: string[]) => {
    return (req, file, callback) => {
        const fileExtension = path.extname(file.originalname).toLowerCase();
        if (allowedExtensions.includes(fileExtension)) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    }
}

export const uploadMultipleFiles = (fields: string[], allowedExtensions: string[]) => {
    const storage = createStorage("raw");
    const fileFilter = createFileFilter(allowedExtensions);
    const multerFieldsConfig = fields.reduce((acc: any, curr) => {
        acc.push({ name: curr, maxCount: 1 });
        return acc;
    }, []);

    return multer({
        storage: storage,
        fileFilter: fileFilter
    }).fields(multerFieldsConfig);
}
