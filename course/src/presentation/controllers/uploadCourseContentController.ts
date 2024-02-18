import { createVideoVersions } from "@/_lib/ffmpeg";
import { resizeCourseThumbnail } from "@/_lib/sharp";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const uploadCourseContentController = (dependencies: IDependencies) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const rawFiles: any = req.files;
            
            await resizeCourseThumbnail(rawFiles.courseThumbnail[0]);
            await createVideoVersions(rawFiles.trialVideo[0]);
            
            res.status(200).json({
                success: true,
                data: {
                    
                },
                message: "Courses content uploaded!"
            });

        } catch (error) {
            next(error);
        }
    }
}