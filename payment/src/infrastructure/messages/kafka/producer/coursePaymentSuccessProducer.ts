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
        amount: number
    }
) => {

    try {
        await producer.connect();

        const messages = [
            {
                topic: USER_SERVICE_TOPIC,
                messages: [{
                    key: COURSE_PAYMENT_SUCCESS_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: COURSE_SERVICE_TOPIC,
                messages: [{
                    key: COURSE_PAYMENT_SUCCESS_MESSAGE,
                    value: JSON.stringify(data)
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