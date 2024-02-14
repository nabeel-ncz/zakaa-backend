import jwt from "jsonwebtoken";

export const verifyTokenToBecomeInstructor = (
    token: string
) => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            String(process.env.UTILS_SECRET),
            (err, decoded) => {
                if (err) {
                    reject("Link is valid, try again!");
                } else {
                    resolve(decoded);
                }
            });
    });
}