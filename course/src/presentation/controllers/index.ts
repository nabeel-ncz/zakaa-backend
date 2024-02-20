import { IDependencies } from "@/application/interfaces/IDependencies";
import { createCourseController } from "./createCourseController";
import { updateCourseController } from "./updateCourseController";
import { getAllCoursesController } from "./getAllCoursesController";
import { getCourseByIdController } from "./getCourseByIdController";
import { uploadCourseContentController } from "./uploadCourseContentController";
import { uploadLessonContentController } from "./uploadLessonContentController";
import { getInstructorCoursesController } from "./getInstructorCoursesController";
import { createAssessmentController } from "./createAssessmentController";
import { updateAssessmentController } from "./updateAssessmentController";
import { getAllAssessmentsController } from "./getAllAssessmentsController";
import { getAssessmentsByInstructorIdController } from "./getAssessmentsByInstructorIdController";

export const controllers = (dependencies: IDependencies) => {
    return {
        createCourse: createCourseController(dependencies),
        updateCourse: updateCourseController(dependencies),
        getAllCourse: getAllCoursesController(dependencies),
        getCourse: getCourseByIdController(dependencies),
        deleteCourse: () => {},
        uploadCourseContent: uploadCourseContentController(dependencies),
        uploadLessonContent: uploadLessonContentController(dependencies),
        getInstructorCourses: getInstructorCoursesController(dependencies),
        createAssessment: createAssessmentController(dependencies),
        updateAssessment: updateAssessmentController(dependencies),
        getAllAssessments: getAllAssessmentsController(dependencies),
        getAssessmentsByInstructorId: getAssessmentsByInstructorIdController(dependencies)
    }
};