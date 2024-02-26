import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getEnrollmentByUserIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getEnrollmentByUserIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await getEnrollmentByUserIdUseCase(dependencies)
                .execute(req.params?.userId);

            res.status(200).json({
                success: true,
                data: result,
                message: "Enrollment retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}