import jwt from "jsonwebtoken";
import { config } from "@/_boot/config";

export const verifyForgotPasswordToken = (
    token: string
) => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            config.secrets.forgot_password_token,
            (err, decoded) => {
                if (err) {
                    reject("Link is valid, try again!");
                } else {
                    resolve(decoded);
                }
            });
    });
}