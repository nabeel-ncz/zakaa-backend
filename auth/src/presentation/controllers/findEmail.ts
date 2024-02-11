import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const findEmailController = (dependencies: IDependencies) => {

    const {
        useCases: { findUserByEmailUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const email = req.params.email;
            
            const result = await findUserByEmailUseCase(dependencies)
                .execute(email);

            if (!result) {
                throw new Error("Account already exist with this email");
            }

            res.status(200).json({
                success: true,
                data: {},
                message: "Email is available"
            });

        } catch (error) {
            next(error);
        }
    }
}