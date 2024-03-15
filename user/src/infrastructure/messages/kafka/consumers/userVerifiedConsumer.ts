import { verifyUser } from "@/infrastructure/database/mongo/repositories";

export default async (
    data: { email: string, isVerified: boolean }
) => {

    try {

        await verifyUser(data);

        console.log("==========");
        console.log("user-verified-consumed");
        console.log("==========");

    } catch (error: any) {
        console.log("user-verified-consumed error: ", error?.message);
    }

}