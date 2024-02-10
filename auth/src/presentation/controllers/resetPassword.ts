import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const resetPasswordController = (dependencies: IDependencies) => {

    const {
        useCases: {  }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {


   
        } catch (error) {
            next(error);
        }
    }
}