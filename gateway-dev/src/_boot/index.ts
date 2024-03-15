import server from "@/_boot/server";
import app from "@/presentation/application";

export const main = async () => {
    try {
        
        await server(app);

    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }
}