import { Request, Response, NextFunction } from "express";
import { UnAuthorizedError } from "@zakaa/common";
import { findUserById } from "@/infrastructure/database/mongo/repositories";

export const requireInstructor = async (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.user) {
        return next(new UnAuthorizedError());
    }
        
    const user = await findUserById(req.user._id);
    
    if (!user) {
        return next(new UnAuthorizedError());
    }

    if (user.role !== "instructor") {
        return next(new Error("Access denied, Require Instructor"));
    }
    
    next();
}