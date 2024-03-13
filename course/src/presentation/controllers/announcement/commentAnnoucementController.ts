import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const commentAnnoucementController = (dependencies: IDependencies) => {

    const {
        useCases: { commentAnnouncementUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            const result = await commentAnnouncementUseCase(dependencies)
                .execute(data);

            if(!result){
                throw new Error("Announcement comment failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Announcement commented!"
            });

        } catch (error) {
            next(error);
        }
    }
}