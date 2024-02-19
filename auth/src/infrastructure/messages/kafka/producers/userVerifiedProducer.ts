import { producer } from "../index";
import { USER_SERVICE_TOPIC, USER_VEIRIFIED_MESSAGE, COURSE_SERVICE_TOPIC } from "@zakaa/common";

export default async (
    data: { 
        email: string, 
        isVerified: boolean 
    }
) => {

    try {

        await producer.connect();

        const messages = [
            {
                topic: COURSE_SERVICE_TOPIC,
                messages: [{
                    key: USER_VEIRIFIED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: USER_SERVICE_TOPIC,
                messages: [{
                    key: USER_VEIRIFIED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            }
        ];

        await producer.sendBatch({ topicMessages: messages });

    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}