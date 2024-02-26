import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAvailableCoursesController = (dependencies: IDependencies) => {

    const {
        useCases: { getAvailableCoursesUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const {
                search = "",
                page = 0,
                limit = 0,
                type = "",
                category = "",
                priceFrom = 0,
                priceTo = Number.MAX_SAFE_INTEGER
            } = req.query;

            const result = await getAvailableCoursesUseCase(dependencies)
                .execute({
                    search,
                    page,
                    limit,
                    type,
                    category,
                    priceFrom,
                    priceTo
                });

            if (!result) {
                throw new Error("Course retrievel failed");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Courses retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}