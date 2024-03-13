import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const reactAnnoucementController = (dependencies: IDependencies) => {

    const {
        useCases: { reactAnnouncementUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const type = req.params?.type;
            const data = req.body;

            const result = await reactAnnouncementUseCase(dependencies)
                .execute({ ...data, type });

            if (!result) {
                throw new Error("Announcement Reaction failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Announcement reacted!"
            });

        } catch (error) {
            next(error);
        }
    }
}