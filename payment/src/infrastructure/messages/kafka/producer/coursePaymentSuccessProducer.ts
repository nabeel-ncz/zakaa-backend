import { producer } from "../index";
import {
    USER_SERVICE_TOPIC,
    COURSE_SERVICE_TOPIC,
    COURSE_PAYMENT_SUCCESS_MESSAGE
} from "@zakaa/common";

export default async (
    data: {
        userId: string,
        courseId: string,
        amount: number,
        instructorId: string
    }
) => {

    try {

        const { userId, courseId, amount, instructorId } = data;

        await producer.connect();

        const messages = [
            {
                topic: USER_SERVICE_TOPIC,
                messages: [{
                    key: COURSE_PAYMENT_SUCCESS_MESSAGE,
                    value: JSON.stringify({
                        userId: instructorId,
                        courseId: courseId,
                        amount: amount
                    })
                }]
            },
            {
                topic: COURSE_SERVICE_TOPIC,
                messages: [{
                    key: COURSE_PAYMENT_SUCCESS_MESSAGE,
                    value: JSON.stringify({
                        userId: userId,
                        courseId: courseId,
                        amount: amount
                    })
                }]
            }
        ]

        await producer.sendBatch({ topicMessages: messages });

    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}