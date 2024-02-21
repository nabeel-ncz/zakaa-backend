import { resizeCourseThumbnail } from "@/_lib/sharp";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateLessonController = (dependencies: IDependencies) => {

    const {
        useCases: { updateLessonUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const body = req.body;

            let thumbnail = null;
            if (req.file) {
                thumbnail = await resizeCourseThumbnail(req.file);
            };

            const result = await updateLessonUseCase(dependencies).execute({
                courseId: body?.courseId,
                lessonId: body?.lessonId,
                title: body?.title,
                description: body?.description,
                thumbnail
            });

            if (!result) {
                throw new Error("Something went wrong!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Courses lesson updated!"
            });

        } catch (error) {
            next(error);
        }
    }
}