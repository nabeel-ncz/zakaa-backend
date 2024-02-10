import { hashPassword } from "@/_lib/http/bcrypt";
import { verifyForgotPasswordToken } from "@/_lib/http/jwt";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const forgotPasswordController = (dependencies: IDependencies) => {

    const {
        useCases: { updatePasswordUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { token, password } = req.body;

            const decoded: any = await verifyForgotPasswordToken(token);

            if(!decoded || !decoded?.email){
                throw new Error("Link is valid, Try again!");
            }

            const hash = await hashPassword(password);

            const result = await updatePasswordUseCase(dependencies)
                .execute({ email: decoded.email, password: hash });

            if (result) {
                throw new Error("Password updation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Password updated!"
            });

        } catch (error) {
            next(error);
        }
    }
}