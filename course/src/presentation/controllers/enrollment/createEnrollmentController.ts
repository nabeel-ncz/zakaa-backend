import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createEnrollmentController = (dependencies: IDependencies) => {

    const {
        useCases: { createEnrollmentUseCase, getEnrollmentByUserIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const body = req.body;

            const enrollments = await getEnrollmentByUserIdUseCase(dependencies)
                .execute(body?.userId);

            const existingEnrollment = enrollments?.find((item) => item.courseId?._id?.toString() === body?.courseId?.toString());

            if(existingEnrollment){
                throw new Error("You are already subscribed this course!");
            }

            const result = await createEnrollmentUseCase(dependencies)
                .execute(body);

            if (!result) {
                throw new Error("Enrollment creation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Enrollment created!"
            });

        } catch (error) {
            next(error);
        }
    }
}