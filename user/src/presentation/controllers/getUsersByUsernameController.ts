import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getUsersByUsernameController = (dependencies: IDependencies) => {

    const {
        useCases: { findUsersByUsernameUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const username = req.params?.username;

            const result = await findUsersByUsernameUseCase(dependencies)
                .execute(username);

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