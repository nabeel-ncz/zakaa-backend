import { IDependencies } from "../../interfaces/IDependencies";

export const getAvailableCoursesUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getAvailableCourses }
    } = dependencies;

    return {
        execute: async (query: any) => {
            return await getAvailableCourses(query);
        }
    }
};