import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const addLessonController = (dependencies: IDependencies) => {

    const {
        useCases: { addLessonUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const body = req.body;

            const result = await addLessonUseCase(dependencies).execute({
                ...body
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