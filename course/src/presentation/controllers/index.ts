import { IDependencies } from "@/application/interfaces/IDependencies";
import { createCourseController } from "./createCourseController";
import { updateCourseController } from "./updateCourseController";
import { getAllCoursesController } from "./getAllCoursesController";
import { getCourseByIdController } from "./getCourseByIdController";

export const controllers = (dependencies: IDependencies) => {
    return {
        createCourse: createCourseController(dependencies),
        updateCourse: updateCourseController(dependencies),
        getAllCourse: getAllCoursesController(dependencies),
        getCourse: getCourseByIdController(dependencies),
        deleteCourse: () => {}
    }
};