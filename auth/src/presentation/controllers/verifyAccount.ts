import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const verifyAccountController = (dependencies: IDependencies) => {

    const {
        useCases: { verifyAccountUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { otp } = req.body;

            if(!otp || otp.length < 6){
                throw new Error("OTP is incorrect, Try again!");
            }

            if(!req.user || !req.user?.email){
                throw new Error("User information required!");
            }

            const updated = await verifyAccountUseCase(dependencies)
                .execute({
                    email: req.user.email,
                    otp: otp
                });

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