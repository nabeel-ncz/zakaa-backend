import { generateForgotPasswordToken } from "@/_lib/http/jwt";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { requestForgotPassword } from "@/infrastructure/messages/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const sendForgotPasswordMailController = (dependencies: IDependencies) => {

    const {
        useCases: { findUserByEmailUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { email } = req.body;

            const result = await findUserByEmailUseCase(dependencies)
                .execute(email);

            if (!result) {
                throw new Error("Account not found!");
            }

            const token = generateForgotPasswordToken({
                email: email
            });

            //produce message to notification
            await requestForgotPassword({ email, token });
            //===============================

            res.status(200).json({
                success: true,
                data: {},
                message: "Mail produced!"
            });

        } catch (error) {
            next(error);
        }
    }
}