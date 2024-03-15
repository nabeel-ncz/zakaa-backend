import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getUserController = (dependencies: IDependencies) => {

    const {
        useCases: { findUserByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            if (!req.user) {
                throw new Error("User doesn't exist!");
            }

            const result = await findUserByIdUseCase(dependencies)
                .execute(req.user._id);

            if(!result){
                throw new Error("User doesn't exist!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "User exist!"
            });

        } catch (error) {
            next(error);
        }
    }
}