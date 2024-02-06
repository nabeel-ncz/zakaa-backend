// import server from "@/_boot/server";
// import app from "@/presentation/application";
import database from "@/_boot/database";
import { startConsumer, stopConsumer } from "@/_boot/consumer";

export const main = async () => {

    try {
        
        // await server(app);
        
        await database();
        
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