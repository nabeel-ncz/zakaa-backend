import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { userVerifiedProducer } from "@/infrastructure/messages/kafka/producers";

export const verifyAccountController = (dependencies: IDependencies) => {

    const {
        useCases: { verifyAccountUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { otp } = req.body;

            if (!otp || otp.length < 6) {
                throw new Error("OTP is incorrect, Try again!");
            }

            if (!req.user || !req.user?.email) {
                throw new Error("User information required!");
            }

            const updated = await verifyAccountUseCase(dependencies)
                .execute({
                    email: req.user.email,
                    otp: otp
                });

            if (!updated) {
                throw new Error("Account verification failed!");
            }

            //produce-message user-verified
            await userVerifiedProducer({ 
                email: updated.email,
                isVerified: updated.isVerified 
            });
            //=============================

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