import jwt from "jsonwebtoken";

export const tokenToBecomeInstructor = (
    payload: {
        email: string,
    }
) => {
    return jwt.sign(
        payload,
        String(process.env.UTILS_SECRET),
        { expiresIn: '15d' }
    );
};