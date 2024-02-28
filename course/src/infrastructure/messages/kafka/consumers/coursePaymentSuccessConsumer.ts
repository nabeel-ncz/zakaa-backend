import {
    createEnrollment,
    getEnrollmentByUserId
} from "@/infrastructure/database/mongo/repositories";

export default async (
    data: any
) => {

    try {

        const exist = await getEnrollmentByUserId(data.userId);
        const match = exist?.find((item) => item.courseId?._id.toString() === data.courseId.toString());

        if (match) return;

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