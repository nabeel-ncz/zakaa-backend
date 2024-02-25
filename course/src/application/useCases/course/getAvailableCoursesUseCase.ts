import { IDependencies } from "../../interfaces/IDependencies";

export const getAvailableCoursesUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getAvailableCourses }
    } = dependencies;

    return {
        execute: async () => {
            return await getAvailableCourses();
        }
    }
};