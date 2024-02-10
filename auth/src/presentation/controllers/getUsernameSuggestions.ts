import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import { generateUsernameSuggestions, getAvailableUsername } from "@/_lib/utils/other";

export const getUsernameSuggestionsController = (dependencies: IDependencies) => {

    const {
        useCases: { checkUsernameUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const body: {
                firstName: string,
                lastName: string
            } = req.body;

            const suggestions = generateUsernameSuggestions(
                body.firstName,
                body.lastName
            );

            const available = await getAvailableUsername(
                suggestions,
                checkUsernameUseCase(dependencies)
            );

            res.status(200).json({
                success: true,
                data: available,
                message: "Available usernames!"
            });

        } catch (error) {
            next(error);
        }
    }
}