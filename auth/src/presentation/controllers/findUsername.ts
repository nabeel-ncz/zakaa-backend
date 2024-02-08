import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const findAvailableUsernameController = (dependencies: IDependencies) => {

    const {
        useCases: { checkUsernameUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const username = req.params.username;
            
            const result = await checkUsernameUseCase(dependencies)
                .execute(username);

            if (result) {
                return res.status(200).json({
                    success: true,
                    data: {},
                    message: "username is available"
                });
            }

            throw new Error("username is not available!");

        } catch (error) {
            next(error);
        }
    }
}