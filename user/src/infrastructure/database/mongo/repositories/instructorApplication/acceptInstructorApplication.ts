import { instructorApplication } from "@/infrastructure/database/mongo/models";

export const acceptInstructorApplication = async (
    id: string
) => {
    
    try {
    
        const application = await instructorApplication.findByIdAndUpdate(id, {
            accepted: true
        }, {
            new: true
        })

        if (!application) {
            throw new Error("application accept failed!");
        }

        return application;

    } catch (error: any) {
        throw new Error(error?.message);
    }
    
}