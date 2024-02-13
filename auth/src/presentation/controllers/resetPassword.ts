import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { comparePassword, hashPassword } from "@/_lib/http/bcrypt";

export const resetPasswordController = (dependencies: IDependencies) => {

    const {
        useCases: { findUserByEmailUseCase, updatePasswordUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const user = req.user;

            const body: {
                currentPassword: string,
                newPassword: string
            } = req.body

            if (!user) {
                throw new Error("UnAuthorized!");
            }

            const exist = await findUserByEmailUseCase(dependencies)
                .execute(String(user?.email));

            if (!exist) {
                throw new Error("There is no account exist!");
            }

            const match = await comparePassword(body.currentPassword, exist?.password!);

            if (!match) {
                throw new Error("Password doesn't match, Try again!");
            }

            const hash = await hashPassword(body.newPassword);

            const updated = await updatePasswordUseCase(dependencies)
                .execute({ email: user?.email!, password: hash });

            if (!updated) {
                throw new Error("There is something went wrong in the updation");
            }

            res.status(200).json({
                success: true,
                data: updated,
                message: "Password updated!"
            })

        } catch (error) {
            next(error);
        }
    }
}