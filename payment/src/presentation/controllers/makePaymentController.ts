import { config } from "@/_boot/config";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import stripe from "stripe";

export const makePaymentController = (dependencies: IDependencies) => {

    const {
        useCases: { }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const stripeInstance = new stripe(`${config.fronend.url}`);
            const { courseName, courseThumbnail } = req.body;

            const data = [
                {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: courseName,
                            image: [courseThumbnail]
                        },
                        unit_amount: 1000
                    },
                    quantity: 1
                }
            ];

            const session = await stripeInstance.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: data,
                mode: "payment",
                success_url: `${config.fronend.url}/course/purchase/success`,
                cancel_url: `${config.fronend.url}/course/purchase/failed`
            });

            res.status(200).json({
                success: true,
                data: { sessionId: session.id },
                message: "payment created!"
            });

        } catch (error) {
            next(error);
        }
    }
}