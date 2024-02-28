import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAvailableCoursesController = (dependencies: IDependencies) => {

    const {
        useCases: { getAvailableCoursesUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const {
                page = 0,
                limit = 0,
            } = req.query;

            const result = await getAvailableCoursesUseCase(dependencies)
                .execute({
                    page,
                    limit
                });

            if (!result) {
                throw new Error("Course retrievel failed");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Courses retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}