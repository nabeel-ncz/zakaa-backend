import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getEnrollmentsByInstructorIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getEnrollmentsByInstructorIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await getEnrollmentsByInstructorIdUseCase(dependencies)
                .execute(req.params?.instructorId);

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