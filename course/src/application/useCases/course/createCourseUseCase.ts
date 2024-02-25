import { CourseEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const createCourseUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createCourse }
    } = dependencies;

    return {
        execute: async (data: CourseEntity) => {
            return await createCourse(data);
        }
    }
};