import jwt from "jsonwebtoken";
import { config } from "@/_boot/config";

export const generateForgotPasswordToken = (
    payload: {
        email: string
    }
) => {
    return jwt.sign(
        payload,
        config.secrets.forgot_password_token,
        { expiresIn: '15m' }
    );
};