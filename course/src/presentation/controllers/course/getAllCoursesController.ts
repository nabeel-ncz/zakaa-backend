import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllCoursesController = (dependencies: IDependencies) => {

    const {
        useCases: { getAllCoursesUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const page = Number(req.query?.page);
            const limit = Number(req.query?.limit);
            const category = String(req.query?.category);
            const search = String(req.query?.search);

            const result = await getAllCoursesUseCase(dependencies)
                .execute({
                    page,
                    limit,
                    category,
                    search
                });

            if(!result){
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