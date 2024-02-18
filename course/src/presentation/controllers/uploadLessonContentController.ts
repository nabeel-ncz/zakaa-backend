import { createVideoVersions } from "@/_lib/ffmpeg";
import { resizeCourseThumbnail } from "@/_lib/sharp";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const uploadLessonContentController = (dependencies: IDependencies) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const rawFiles: any = req.files;
            
            const thumbnail = await resizeCourseThumbnail(rawFiles.lessonThumbnail[0]);
            const lessonVideo = await createVideoVersions(rawFiles.lessonVideo[0]);
            
            res.status(200).json({
                success: true,
                data: {
                    thumbnail,
                    lessonVideo,
                    attachment: rawFiles?.lessonAttachment[0]?.filename
                },
                message: "Lesson content uploaded!"
            });

        } catch (error) {
            next(error);
        }
    }
}