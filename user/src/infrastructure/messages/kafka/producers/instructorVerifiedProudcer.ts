import { producer } from "../index";
import {
    AUTH_SERVICE_TOPIC,
    CHAT_SERVICE_TOPIC,
    COURSE_SERVICE_TOPIC,
    INSTRUCTOR_VEIRIFIED_MESSAGE
} from "@zakaa/common";

export default async (
    data: {
        email: string,
        role: string
    }
) => {

    try {

        await producer.connect();

        const messages = [
            {
                topic: AUTH_SERVICE_TOPIC,
                messages: [{
                    key: INSTRUCTOR_VEIRIFIED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: CHAT_SERVICE_TOPIC,
                messages: [{
                    key: INSTRUCTOR_VEIRIFIED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: COURSE_SERVICE_TOPIC,
                messages: [{
                    key: INSTRUCTOR_VEIRIFIED_MESSAGE,
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