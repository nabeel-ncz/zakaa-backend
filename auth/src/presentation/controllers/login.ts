import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { loginValidation } from "@/_lib/http/validation/loginValidation";
import { generateAccessToken, generateRefreshToken } from "@/_lib/http/jwt";

export const loginController = (dependencies: IDependencies) => {

    const {
        useCases: { loginUserUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { value, error } = loginValidation.validate(req.body);

            if (error) {
                throw new Error(error.message);
            }

            const result = await loginUserUseCase(dependencies)
                .execute(value.email, value.password);

            const accessToken = generateAccessToken({
                _id: String(result?._id),
                email: result?.email!,
                role: result?.role!
            });

            const refreshToken = generateRefreshToken({
                _id: String(result?._id),
                email: result?.email!,
                role: result?.role!
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
                message: "User logged-in"
            });

        } catch (error) {
            next(error);
        }
    }
}