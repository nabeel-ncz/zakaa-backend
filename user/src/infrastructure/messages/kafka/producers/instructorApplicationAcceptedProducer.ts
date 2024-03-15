import { producer } from "../index";
import {
    NOTIFICATION_SERVICE_TOPIC,
    INSTRUCTOR_APPLICATION_ACCEPTED_MESSAGE
} from "@zakaa/common";

export default async (
    data: {
        email: string,
        token: string
    }
) => {

    try {
        await producer.connect();

        const message = {
            topic: NOTIFICATION_SERVICE_TOPIC,
            messages: [{
                key: INSTRUCTOR_APPLICATION_ACCEPTED_MESSAGE,
                value: JSON.stringify(data)
            }]
        }

        await producer.send(message);

    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}