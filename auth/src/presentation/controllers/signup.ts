import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { signupValidation } from "@/_lib/http/validation/signupValidation";
import { hashPassword } from "@/_lib/http/bcrypt";
import { generateAccessToken, generateRefreshToken } from "@/_lib/http/jwt";

export const signupController = (dependencies: IDependencies) => {

    const {
        useCases: { createUserUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { value, error } = signupValidation.validate(req.body);

            if (error) {
                throw new Error(error.message);
            }

            value.password = await hashPassword(value.password);;

            const result = await createUserUseCase(dependencies).execute(value);

            const accessToken = generateAccessToken({
                _id: String(result?._id),
                email: result?.email!
            });

            const refreshToken = generateRefreshToken({
                _id: String(result?._id),
                email: result?.email!
            });

            res.cookie("access_token", accessToken, {
                httpOnly: true
            });
            
            res.cookie("refresh_token", refreshToken, {
                httpOnly: true
            });

            res.status(200).json({
                success: true,
                data: result,
                message: "User created!"
            });

        } catch (error) {
            next(error);
        }
    }
}