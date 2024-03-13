import { UserEntity } from "@/domain/entities";
import { producer } from "../index";
import {
    AUTH_SERVICE_TOPIC,
    CHAT_SERVICE_TOPIC,
    COURSE_SERVICE_TOPIC,
    USER_UPDATED_MESSAGE
} from "@zakaa/common";

export default async (
    data: UserEntity
) => {

    try {

        await producer.connect();

        const messages = [
            {
                topic: AUTH_SERVICE_TOPIC,
                messages: [{
                    key: USER_UPDATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: CHAT_SERVICE_TOPIC,
                messages: [{
                    key: USER_UPDATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: COURSE_SERVICE_TOPIC,
                messages: [{
                    key: USER_UPDATED_MESSAGE,
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