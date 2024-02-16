import { CourseEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const updateCourseUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { updateCourse }
    } = dependencies;

    return {
        execute: async (data: CourseEntity) => {
            return await updateCourse(data);
        }
    }
};