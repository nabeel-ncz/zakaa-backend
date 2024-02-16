import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getCourseByIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getCourseByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const id = req.params?.id;

            const result = await getCourseByIdUseCase(dependencies).execute(id);

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