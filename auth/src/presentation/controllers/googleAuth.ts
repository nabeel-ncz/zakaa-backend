import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const googleAuthController = (dependencies: IDependencies) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            console.log(req.body, "=============");

            res.cookie("test-key", "test123", { maxAge: 1000 * 60 * 5 });

            res.status(200).json({
                success: true,
                data: {},
                message: "User Signup!"
            });

        } catch (error) {
            next(error);
        }
    }
}