import { producer } from "../index";
import { USER_SERVICE_TOPIC, USER_VEIRIFIED_MESSAGE } from "@zakaa/common";

export default async (
    data: { 
        email: string, 
        isVerified: boolean 
    }
) => {

    try {
        await producer.connect();

        const message = {
            topic: USER_SERVICE_TOPIC,
            messages: [{
                key: USER_VEIRIFIED_MESSAGE,
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