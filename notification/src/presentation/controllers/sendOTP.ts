import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { sendVerifyMail } from "@/_lib/utils/sendGrid/sendVerifyMail";

export const sendOTPController = (dependencies: IDependencies) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            await sendVerifyMail({
                email: "nabhannabeel69@gmail.com",
                otp: "783UYE"
            });

            res.status(200).json({
                success: true
            });
            
        } catch (error) {
            next(error);
        }
    }
}