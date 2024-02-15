import { instructorApplication } from "@/infrastructure/database/mongo/models";

export const findAllInstructorApplication = async (
    p: number,
    l: number
) => {
    
    try {

        const page = p || 1;
        const limit = l || 10;
        const skip = (page - 1) * limit;

        const applications = await instructorApplication.find({}).skip(skip).limit(limit);

        return applications;

    } catch (error: any) {
        throw new Error(error?.message);
    }
    
}