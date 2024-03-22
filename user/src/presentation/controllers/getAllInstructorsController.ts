import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllInstructorsController = (dependencies: IDependencies) => {

    const {
        useCases: { getAllInstructorsUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const page = req.query?.page as unknown;
            const limit = req.query?.limit as unknown;

            const result = await getAllInstructorsUseCase(dependencies)
                .execute(page as number, limit as number);

            res.status(200).json({
                success: true,
                data: result,
                message: "Retrieve users"
            });

        } catch (error) {
            next(error);
        }
    }
}