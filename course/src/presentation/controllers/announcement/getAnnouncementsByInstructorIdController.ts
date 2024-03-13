import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAnnouncementsByInstructorIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getAnnouncementsByInstructorIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const instructorId = req.params.instructorId;

            const result = await getAnnouncementsByInstructorIdUseCase(dependencies)
                .execute(instructorId);

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