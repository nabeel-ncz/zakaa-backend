import { IDependencies } from "@/application/interfaces/IDependencies";

import {
    createAssessmentController,
    updateAssessmentQuestionController,
    updateAssessmentController,
    getAllAssessmentsController,
    getAssessmentByIdController,
    getAssessmentsByInstructorIdController,
    getAssessmentsByCourseIdController
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
    getAvailableCoursesController,
    addLessonController
} from "@/presentation/controllers/course";

import {
    updateCategoryController,
    createCategoryController,
    getAllCategoriesController,
    getAvailableCategoriesController
} from "@/presentation/controllers/category";

import {
    createEnrollmentController,
    getEnrollmentByIdController,
    getEnrollmentByUserIdController,
    getEnrollmentsByInstructorIdController,
    getTopInstructorsByEnrollmentsController,
    updateEnrollmentController
} from "@/presentation/controllers/enrollment";

import {
    createResultController,
    getAllResultsController,
    getResultByIdController,
    getResultByUseIdController
} from "@/presentation/controllers/result";

import {
    commentAnnoucementController,
    createAnnoucementController,
    getAnnouncementByIdController,
    getAnnouncementsByInstructorIdController,
    getAnnouncementsController,
    reactAnnoucementController,
    updateAnnouncementController
} from "./announcement";


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
        updateAssessmentQuestion: updateAssessmentQuestionController(dependencies),
        createEnrollment: createEnrollmentController(dependencies),
        getEnrollmentByUserId: getEnrollmentByUserIdController(dependencies),
        getEnrollmentById: getEnrollmentByIdController(dependencies),
        getAssessmentsByCourseId: getAssessmentsByCourseIdController(dependencies),
        updateEnrollment: updateEnrollmentController(dependencies),
        createResult: createResultController(dependencies),
        getAllResults: getAllResultsController(dependencies),
        getResultByUserId: getResultByUseIdController(dependencies),
        getResultById: getResultByIdController(dependencies),
        getEnrollmentsByInstructorId: getEnrollmentsByInstructorIdController(dependencies),
        createAnnouncement: createAnnoucementController(dependencies),
        updateAnnouncement: updateAnnouncementController(dependencies),
        commentAnnouncement: commentAnnoucementController(dependencies),
        reactAnnoucement: reactAnnoucementController(dependencies),
        addLesson: addLessonController(dependencies),
        getAnnoucements: getAnnouncementsController(dependencies),
        getAnnouncementsByInstructorId: getAnnouncementsByInstructorIdController(dependencies),
        getAnnouncementById: getAnnouncementByIdController(dependencies),
        getTopInstructors: getTopInstructorsByEnrollmentsController(dependencies)
    }
};