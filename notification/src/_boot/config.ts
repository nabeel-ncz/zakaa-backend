import { envString, envNumber } from "@/_boot/environment";

export const config = {
    http: {
        host: envString('HOST', 'localhost'),
        port: envNumber('PORT', 3003)
    },
    // mongo: {
    //     database: envString('DB_NAME', 'zakaa'),
    //     host: envString('DB_HOST', ''),
    //     username: envString('DB_USERNAME', 'mongo_username'),
    //     password: envString('DB_PASSWORD', 'mongo_password')
    // },
    // secrets: {
    //     access_token: envString('ACCESS_TOKEN_SECRET', 'testsecret'),
    //     refresh_token: envString('REFRESH_TOKEN_SECRET', 'testsecret')
    // },
    sendgrid: {
        api_key: envString('SENDGRID_API_KEY', 'testkey'),
        email: envString('SENDGRID_FROM_MAIL', 'testmail')
    },
    urls: {
        frontend: envString('FRONT_END_URL', 'http://localhost:3000')
    },
    kafka: {
        broker_urls: envString('KAFKA_BROKER_URLS', 'localhost:29092'),
        client_id: envString('KAFKA_CLIENT_ID', 'kafka-auth-client')
    }
};