import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAnnouncementsController = (dependencies: IDependencies) => {

    const {
        useCases: { getAnnouncementsUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const page = Number(req.query?.page);
            const limit = Number(req.query?.limit);

            const result = await getAnnouncementsUseCase(dependencies)
                .execute(page, limit);

            if (!result) {
                throw new Error("Announcement retrievel failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Announcement retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}