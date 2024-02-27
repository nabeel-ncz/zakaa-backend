import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getPaymentSessionByIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getPaymentSessionByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await getPaymentSessionByIdUseCase(dependencies)
                .execute(req.params?.id);

            if (!result) {
                throw new Error("payment session not-found!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "payment session!"
            });

        } catch (error) {
            next(error);
        }
    }
}