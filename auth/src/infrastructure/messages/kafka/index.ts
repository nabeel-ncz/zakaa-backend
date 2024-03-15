import { Kafka, Producer, Consumer } from "kafkajs";
import { config } from "@/_boot/config";

export const kafka = new Kafka({
    clientId: config.kafka.client_id,
    brokers: [config.kafka.broker_urls]
});

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "auth-service-kafka-group",
});