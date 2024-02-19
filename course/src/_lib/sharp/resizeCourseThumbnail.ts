import sharp from "sharp";
import path from "path";

export const resizeCourseThumbnail = async (file: any) => {
    try {
        
        await sharp(file.path)
            .resize(1280, 720, { position: 'centre' })
            .toFormat('png')
            .toFile(path.join(__dirname, "..", "..", "public", "images", file.filename));

        return file.filename;

    } catch (error: any) {
        throw new Error(error?.message || "Issue in the image resizing");
    }
}