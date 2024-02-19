import { consumer } from "@/infrastructure/messages/kafka";
import { createSubscriber, ICourseSubscriber } from "@/infrastructure/messages/kafka/subscriber";
import { COURSE_SERVICE_TOPIC } from "@zakaa/common";

export const startConsumer = async () => {
    try {

        await consumer.connect();

        await consumer.subscribe({
            topic: COURSE_SERVICE_TOPIC,
            fromBeginning: true
        });

        const subscriber = createSubscriber();

        await consumer.run({

            eachMessage: async ({ message }) => {

                const { key, value } = message;

                const subscriberMethod = String(key) as keyof ICourseSubscriber;
                const subscriberData = JSON.parse(String(value));

                try {
                    await subscriber[subscriberMethod](subscriberData);
                } catch (error: any) {
                    throw new Error(error?.message);
                }

            }

        });
    } catch (error: any) {
        throw new Error("Kafka Consume Error : " + error?.message);
    }
}

export const stopConsumer = async () => {
    await consumer.stop();
    await consumer.disconnect();
}