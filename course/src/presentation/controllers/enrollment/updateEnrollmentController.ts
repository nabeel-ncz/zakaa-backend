import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateEnrollmentController = (dependencies: IDependencies) => {

    const {
        useCases: { updateEnrollmentUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const body = req.body;

            const result = await updateEnrollmentUseCase(dependencies)
                .execute(body);

            if (!result) {
                throw new Error("Enrollment updation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Enrollment updated!"
            });

        } catch (error) {
            next(error);
        }
    }
}