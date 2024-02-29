import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getUserProfileController = (dependencies: IDependencies) => {

    const {
        useCases: { findUserByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await findUserByIdUseCase(dependencies)
                .execute(req.user?._id as string);

            res.status(200).json({
                success: true,
                data: result,
                message: "User retrieved"
            });

        } catch (error) {
            next(error);
        }
    }
}