import { tokenToBecomeInstructor } from "@/_lib/utils/other";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { instructorApplicationAcceptedProducer } from "@/infrastructure/messages/kafka/producers";
import { Request, Response, NextFunction } from "express";

export const acceptInstructorApplicationController = (dependencies: IDependencies) => {

    const {
        useCases: { acceptInstructrorApplicationUsecase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const { id, email } = req.body;
            const token = tokenToBecomeInstructor({ email });

            await acceptInstructrorApplicationUsecase(dependencies)
                .execute(id);

            //produce-message-to-notification
            await instructorApplicationAcceptedProducer({
                email,
                token
            });
            //=============================

            res.status(200).json({
                success: true,
                data: {},
                message: "Application accepted!"
            });

        } catch (error) {
            next(error);
        }
    }
}