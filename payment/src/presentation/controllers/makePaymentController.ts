import { config } from "@/_boot/config";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import stripe from "stripe";

export const makePaymentController = (dependencies: IDependencies) => {

    const {
        useCases: { createSessionUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const stripeInstance = new stripe(`${config.secrets.stripe_key}`);
            const { courseName, courseThumbnail, userId, courseId, amount } = req.body;

            const data = [
                {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: courseName,
                            images: [courseThumbnail]
                        },
                        unit_amount: Math.floor(amount * 100)
                    },
                    quantity: 1
                }
            ];

            const session = await stripeInstance.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: data,
                mode: "payment",
                success_url: `${config.fronend.url}/courses/purchase/success`,
                cancel_url: `${config.fronend.url}/courses/purchase/failed`
            });

            const result = await createSessionUseCase(dependencies).execute({
                userId,
                courseId,
                sessionId: session.id
            });

            res.status(200).json({
                success: true,
                data: result,
                message: "session created!"
            });

        } catch (error) {
            next(error);
        }
    }
}