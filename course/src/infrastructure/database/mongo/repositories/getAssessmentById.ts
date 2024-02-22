import { Assessment } from "../models";

export const getAssessmentsById = async (
    id: string
) => {
    try {
        const result = await Assessment.findById(id);
        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Assessment retrievel failed");
    }
}
