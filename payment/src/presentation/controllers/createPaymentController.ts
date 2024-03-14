import { IDependencies } from "@/application/interfaces/IDependencies";
import { coursePaymentSuccessProducer } from "@/infrastructure/messages/kafka/producer";
import { Request, Response, NextFunction } from "express";

export const createPaymentController = (dependencies: IDependencies) => {

    const {
        useCases: { createPaymentUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { instructorId, ...data } = req.body;

            const result = await createPaymentUseCase(dependencies)
                .execute(data);

            if (!result) {
                throw new Error("payment failed!");
            }

            //produce-payment-success-page
            await coursePaymentSuccessProducer({
                userId: result.userId.toString(),
                courseId: result.courseId.toString(),
                amount: result.amount,
                instructorId
            });
            //================================

            res.status(200).json({
                success: true,
                data: result,
                message: "payment success!"
            });

        } catch (error) {
            next(error);
        }
    }
}