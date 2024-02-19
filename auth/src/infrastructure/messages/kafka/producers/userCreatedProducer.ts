import { producer } from "../index";
import { UserEntity } from "@/domain/entities";
import {
    USER_CREATED_MESSAGE,
    NOTIFICATION_SERVICE_TOPIC,
    USER_SERVICE_TOPIC,
    COURSE_SERVICE_TOPIC
} from "@zakaa/common";

export default async (
    data: UserEntity
) => {
    
    try {
        await producer.connect();

        const messages = [
            {
                topic: NOTIFICATION_SERVICE_TOPIC,
                messages: [{
                    key: USER_CREATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: COURSE_SERVICE_TOPIC,
                messages: [{
                    key: USER_CREATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: USER_SERVICE_TOPIC,
                messages: [{
                    key: USER_CREATED_MESSAGE,
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