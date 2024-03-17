import { envString, envNumber } from "@/_boot/environment";

export const config = {
    http: {
        host: envString('HOST', 'localhost'),
        port: envNumber('PORT', 3002)
    },
    mongo: {
        database: envString('DB_NAME', 'zakaa_user'),
        host: envString('DB_HOST', 'mongodb://127.0.0.1:27017'),
        username: envString('DB_USERNAME', 'mongo_username'),
        password: envString('DB_PASSWORD', 'mongo_password')
    },
    secrets: {
        access_token: envString('ACCESS_TOKEN_SECRET', 'testsecret'),
        refresh_token: envString('REFRESH_TOKEN_SECRET', 'testsecret')
    },
    kafka: {
        broker_urls: envString('KAFKA_BROKER_URLS', 'localhost:29092'),
        client_id: envString('KAFKA_CLIENT_ID', 'kafka-user-client'),
        username: envString('KAFKA_USERNAME', ''),
        password: envString('KAFKA_PASSWORD', '')
    }
};