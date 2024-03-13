import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateAnnouncementController = (dependencies: IDependencies) => {

    const {
        useCases: { updateAnnouncementUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            const result = await updateAnnouncementUseCase(dependencies)
                .execute(data);

            if(!result){
                throw new Error("Announcement updation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Announcement updated!"
            });

        } catch (error) {
            next(error);
        }
    }
}