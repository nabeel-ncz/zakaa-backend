import socket from "@/_boot/socket";
import server from "@/_boot/server";
import database from "@/_boot/database";
import app from "@/presentation/application";
import socketEventHandler from "@/infrastructure/socket";
import { startConsumer, stopConsumer } from "@/_boot/consumer";

export const main = async () => {

    try {

        const srvr = await server(app);
        await database();
        await socket(srvr, socketEventHandler);
        startConsumer()
            .catch((error: any) => {
                console.info(error);
            });
        process.on('SIGTERM', async () => {
            console.info("SIGTERM received")
            stopConsumer();
        })

    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }
};