import { IDependencies } from "@/application/interfaces/IDependencies";
import { createCourseController } from "./createCourseController";
import { updateCourseController } from "./updateCourseController";

export const controllers = (dependencies: IDependencies) => {
    return {
        createCourse: createCourseController(dependencies),
        updateCourse: updateCourseController(dependencies),
        getAllCourse: () => {},
        getCourse: () => {},
        deleteCourse: () => {}
    }
};