import { IDependencies } from "../interfaces/IDependencies";

export const getCourseByIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getCourseById }
    } = dependencies;

    return {
        execute: async (id) => {
            return await getCourseById(id);
        }
    }
};