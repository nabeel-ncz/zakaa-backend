import { updateRole } from "@/infrastructure/database/mongo/repositories";

export default async (
    data: {
        email: string;
        role: string;
    }
) => {

    try {

        await updateRole(data.email, data.role);

        console.log("==========");
        console.log("instructor-verification-consumed");
        console.log("==========");

    } catch (error: any) {
        console.log("instructor-verification-consumed error: ", error?.message);
    }

}