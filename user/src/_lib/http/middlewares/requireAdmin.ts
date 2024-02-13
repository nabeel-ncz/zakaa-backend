import { Request, Response, NextFunction } from "express";

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
    next();
}