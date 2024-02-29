import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const applyToTeachController = (dependencies: IDependencies) => {

    const {
        useCases: { createInstructorApplicationUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const user: any = req.user;
            const body: {
                profession: string;
                phone: string;
                profileDescription: string;
                linkedIn?: string;
                github?: string;
            } = req.body;

            const result = await createInstructorApplicationUseCase(dependencies).execute({
                ...body,
                email: user.email
            });

            if(!result){
                throw new Error("Somthing went wrong, recheck your details");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Applied successfully"
            });

        } catch (error) {
            next(error);
        }
    }
}