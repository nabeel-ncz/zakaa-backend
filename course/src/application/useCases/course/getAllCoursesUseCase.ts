import { IDependencies } from "../../interfaces/IDependencies";

export const getAllCoursesUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getAllCourses }
    } = dependencies;

    return {
        execute: async (data) => {
            return await getAllCourses(data);
        }
    }
};