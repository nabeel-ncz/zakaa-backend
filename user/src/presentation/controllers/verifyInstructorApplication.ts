import { verifyTokenToBecomeInstructor } from "@/_lib/utils/other";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const verifyInstructorApplicationController = (dependencies: IDependencies) => {

    const {
        useCases: { updateUserRoleUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const token = req.query?.token as string;

            if(!token){
                throw new Error("Link is valid, Try again!");
            };

            const verify: any = await verifyTokenToBecomeInstructor(token);

            const result = await updateUserRoleUseCase(dependencies)
                .execute(verify.email, "instructor");

            res.status(200).json({
                success: true,
                data: result,
                message: "role updated"
            })

        } catch (error) {
            next(error);
        }
    }
}