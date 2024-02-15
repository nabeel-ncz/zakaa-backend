import { instructorApplication } from "@/infrastructure/database/mongo/models";
import { InstructorApplicationEntity } from "@/domain/entities";

export const createInstructorApplication = async (
    data: InstructorApplicationEntity
) => {
    
    try {
    
        const application = await instructorApplication.create(data);

        if (!application) {
            throw new Error("User creation failed!");
        }

        return application;

    } catch (error: any) {
        throw new Error(error?.message);
    }
    
}