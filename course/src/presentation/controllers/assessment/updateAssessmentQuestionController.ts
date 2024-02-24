import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateAssessmentQuestionController = (dependencies: IDependencies) => {

    const {
        useCases: { updateAssessmentQuestionUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const body = req.body;

            const result = await updateAssessmentQuestionUseCase(dependencies)
                .execute(body);

            if (!result) {
                throw new Error("Assessment updation failed");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Assessment updated!"
            });

        } catch (error) {
            next(error);
        }
    }
}