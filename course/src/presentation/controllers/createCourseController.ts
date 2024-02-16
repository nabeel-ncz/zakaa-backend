import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createCourseController = (dependencies: IDependencies) => {

    const {

    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {




            
            res.status(200).json({
                success: true,
                data: {},
                message: "Email is unique!"
            });

        } catch (error) {
            next(error);
        }
    }
}