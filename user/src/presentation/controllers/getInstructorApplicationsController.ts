import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getInstructorApplicationsController = (dependencies: IDependencies) => {

    const {
        useCases: { findAllInstructorApplicationsUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const page = req.query?.page as unknown;
            const limit = req.query?.limit as unknown;

            const result = await findAllInstructorApplicationsUseCase(dependencies)
                .execute(page as number, limit as number);

            res.status(200).json({
                success: true,
                data: result,
                message: "Retrieve applications"
            });

        } catch (error) {
            next(error);
        }
    }
}