import { producer } from "../index";
import {
    AUTH_SERVICE_TOPIC,
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

        const message = {
            topic: AUTH_SERVICE_TOPIC,
            messages: [{
                key: INSTRUCTOR_VEIRIFIED_MESSAGE,
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