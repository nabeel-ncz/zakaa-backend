import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createCourseController = (dependencies: IDependencies) => {

    const {
        useCases: { createCourseUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            const result = await createCourseUseCase(dependencies)
                .execute(data);

            if(!result){
                throw new Error("Course creation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Course created!"
            });

        } catch (error) {
            next(error);
        }
    }
}