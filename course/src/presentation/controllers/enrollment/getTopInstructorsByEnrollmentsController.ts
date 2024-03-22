import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getTopInstructorsByEnrollmentsController = (dependencies: IDependencies) => {

    const {
        useCases: { getTopInstructorsByEnrollmentsUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await getTopInstructorsByEnrollmentsUseCase(dependencies)
                .execute();

            res.status(200).json({
                success: true,
                data: result,
                message: "Top instructors retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}