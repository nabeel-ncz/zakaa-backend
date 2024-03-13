import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createAnnoucementController = (dependencies: IDependencies) => {

    const {
        useCases: { createAnnouncementUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            const result = await createAnnouncementUseCase(dependencies)
                .execute(data);

            if(!result){
                throw new Error("Announcement creation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Announcement created!"
            });

        } catch (error) {
            next(error);
        }
    }
}