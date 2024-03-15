import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updatePaymentController = (dependencies: IDependencies) => {

    const {
        useCases: { updatePaymentUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            const result = await updatePaymentUseCase(dependencies)
                .execute(data);

            if(!result){
                throw new Error("payment updation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "payment updation success!"
            });

        } catch (error) {
            next(error);
        }
    }
}