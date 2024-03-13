import { resizeCourseThumbnail } from "@/_lib/sharp";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const addLessonController = (dependencies: IDependencies) => {

    const {
        useCases: { addLessonUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const body = req.body;

            let thumbnail = await resizeCourseThumbnail(req.file);

            if(!thumbnail){
                throw new Error("Thumbnail is required for lesson creation!");
            }

            const result = await addLessonUseCase(dependencies).execute({
                ...body,
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