import { CourseEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const createCourseUseCase = (dependencies: IDependencies) => {
    
    const {

    } = dependencies;
    
    return {
        execute: async (data: CourseEntity) => {
            // return await 
        }
    }
};