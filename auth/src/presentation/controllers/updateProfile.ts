import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateProfileController = (dependencies: IDependencies) => {

    const {
        useCases: { updateUserUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            const updated = await updateUserUseCase(dependencies).execute(data);

            if(!updated){
                throw new Error("User updation failed!");
            }
   
            res.status(200).json({
                success: true,
                data: updated,
                message: "Account verified!"
            });

        } catch (error) {
            next(error);
        }
    }
}