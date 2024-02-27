import { Types } from "mongoose";
import { createEnrollment } from "@/infrastructure/database/mongo/repositories";

export default async (
    data: {
        userId: Types.ObjectId,
        courseId: Types.ObjectId,
        amount: number
    }
) => {

    try {

        await createEnrollment({
            userId: data.userId,
            courseId: data.courseId,
            enrolledAt: Date.now()
        });

        console.log("==========");
        console.log("course-payment-success-consumed");
        console.log("==========");

    } catch (error: any) {
        console.log("course-payment-success-consumed error: ", error?.message);
    }

}