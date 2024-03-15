import { Request, Response, NextFunction } from "express";
import { RequireAdminError, UnAuthorizedError } from "@zakaa/common";
import { findUserById } from "@/infrastructure/database/mongo/repositories";

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.user) {
        return next(new UnAuthorizedError());
    }
        
    const user = await findUserById(req.user._id);
    
    if (!user) {
        return next(new UnAuthorizedError());
    }

    if (user.role !== "admin") {
        return next(new RequireAdminError());
    }
    
    next();
}