import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createEnrollmentController = (dependencies: IDependencies) => {

    const {
        useCases: { createEnrollmentUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await createEnrollmentUseCase(dependencies)
                .execute(req.body);

            if (!result) {
                throw new Error("Enrollment creation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Enrollment created!"
            });

        } catch (error) {
            next(error);
        }
    }
}