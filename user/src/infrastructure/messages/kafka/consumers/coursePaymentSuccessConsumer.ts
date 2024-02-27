import { updateUserProfit } from "@/infrastructure/database/mongo/repositories";

export default async (
    data: {
        userId: string,
        courseId: string,
        amount: number
    }
) => {

    try {

        await updateUserProfit(data?.userId, data?.amount);

        console.log("==========");
        console.log("updateUserProfit-consumed");
        console.log("==========");

    } catch (error: any) {
        console.log("updateUserProfit-consumed error: ", error?.message);
    }

}