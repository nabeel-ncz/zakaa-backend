import { IDependencies } from "@/application/interfaces/IDependencies";

import {
    createAssessmentController,
    updateAssessmentQuestionController,
    updateAssessmentController,
    getAllAssessmentsController,
    getAssessmentByIdController,
    getAssessmentsByInstructorIdController
} from "@/presentation/controllers/assessment";

import {
    createCourseController,
    updateCourseController,
    getAllCoursesController,
    getCourseByIdController,
    getInstructorCoursesController,
    streamCourseVideoController,
    updateLessonController,
    uploadCourseContentController,
    uploadLessonContentController,
    getAvailableCoursesController
} from "@/presentation/controllers/course";

import {
    updateCategoryController,
    createCategoryController,
    getAllCategoriesController,
    getAvailableCategoriesController
} from "@/presentation/controllers/category";

export const controllers = (dependencies: IDependencies) => {
    return {
        createCourse: createCourseController(dependencies),
        updateCourse: updateCourseController(dependencies),
        getAllCourse: getAllCoursesController(dependencies),
        getCourse: getCourseByIdController(dependencies),
        deleteCourse: () => { },
        uploadCourseContent: uploadCourseContentController(dependencies),
        uploadLessonContent: uploadLessonContentController(dependencies),
        getInstructorCourses: getInstructorCoursesController(dependencies),
        createAssessment: createAssessmentController(dependencies),
        updateAssessment: updateAssessmentController(dependencies),
        getAllAssessments: getAllAssessmentsController(dependencies),
        getAssessmentsByInstructorId: getAssessmentsByInstructorIdController(dependencies),
        getAllCategories: getAllCategoriesController(dependencies),
        getAvailableCategories: getAvailableCategoriesController(dependencies),
        createCategory: createCategoryController(dependencies),
        updateCategory: updateCategoryController(dependencies),
        streamCourseVideo: streamCourseVideoController(dependencies),
        getAvailableCourses: getAvailableCoursesController(dependencies),
        updateLesson: updateLessonController(dependencies),
        getAssessmentById: getAssessmentByIdController(dependencies),
        updateAssessmentQuestion: updateAssessmentQuestionController(dependencies)
    }
};