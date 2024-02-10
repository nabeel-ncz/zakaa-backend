import { NOTIFICATION_SERVICE_TOPIC } from "@zakaa/common";
import { consumer } from "@/infrastructure/messages/kafka";
import { createSubscriber, INotificationSubscriber } from "@/infrastructure/messages/kafka";

export const startConsumer = async () => {
    try {

        await consumer.connect();

        await consumer.subscribe({
            topic: NOTIFICATION_SERVICE_TOPIC,
            fromBeginning: true
        });

        const subscriber = createSubscriber();

        await consumer.run({
            eachMessage: async ({ message }) => {

                const { key, value } = message;

                const subscriberMethod = String(key) as keyof INotificationSubscriber;
                const subscriberData = JSON.parse(String(value));

                try {
                    await subscriber[subscriberMethod](subscriberData);
                } catch (error: any) {
                    throw new Error(error?.message);
                }

            }
        });

    } catch (error: any) {
        throw new Error("Kafka Consume Error -> Notification : " + error?.message);
    }
}

export const stopConsumer = async () => {
    await consumer.stop();
    await consumer.disconnect();
}