import { Kafka, Producer, Consumer } from "kafkajs";
import { config } from "@/_boot/config";

export const kafka = new Kafka({
    brokers: [config.kafka.broker_urls],
    clientId: config.kafka.client_id,
    ssl: true,
    sasl: {
        username: config.kafka.username,
        password: config.kafka.password,
        mechanism: 'plain'
    },
    authenticationTimeout: 45000
});

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "user-service-kafka-group",
});