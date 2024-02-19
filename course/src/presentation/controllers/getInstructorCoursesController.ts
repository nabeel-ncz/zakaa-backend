import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getInstructorCoursesController = (dependencies: IDependencies) => {

    const {
        useCases: { getCoursesByInstructorIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const id = req.params?.instructorId;

            const result = await getCoursesByInstructorIdUseCase(dependencies).execute(id);

            if(!result){
                throw new Error("Course doesn't exist!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Course retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}