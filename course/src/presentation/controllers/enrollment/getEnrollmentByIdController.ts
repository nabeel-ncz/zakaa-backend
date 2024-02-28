import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getEnrollmentByIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getEnrollmentByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await getEnrollmentByIdUseCase(dependencies)
                .execute(req.params?.id);

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