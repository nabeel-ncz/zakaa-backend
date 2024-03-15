import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAnnouncementByIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getAnnouncementByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const id = req.params.id;

            const result = await getAnnouncementByIdUseCase(dependencies)
                .execute(id);

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