import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateUserProfileController = (dependencies: IDependencies) => {

    const {
        useCases: { updateUserUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            if(!req.body?._id){
                throw new Error("Data unavailable!");
            }

            const result = await updateUserUseCase(dependencies)
                .execute(req.body);

            if(!result){
                throw new Error("User profile updation failed");
            }

            //produce message -> auth, chat, course

            res.status(200).json({
                success: true,
                data: result,
                message: "User updated"
            });

            //=====================================

        } catch (error) {
            next(error);
        }
    }
}