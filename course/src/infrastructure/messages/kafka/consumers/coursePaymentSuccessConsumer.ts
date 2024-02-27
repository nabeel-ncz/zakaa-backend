import { createEnrollment } from "@/infrastructure/database/mongo/repositories";

export default async (
    data: any
) => {

    try {

        await createEnrollment({
            userId: data.userId,
            courseId: data.courseId,
            enrolledAt: Date.now().toString()
        });

        console.log("==========");
        console.log("coursePaymentSuccessConsumer");
        console.log("==========");

    } catch (error: any) {
        console.log("coursePaymentSuccessConsumer error: ", error?.message);
    }

}