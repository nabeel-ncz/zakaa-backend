import {
    ICreateAssessmentUseCase,
    ICreateCourseUseCase,
    IGetAllAssessmentsUseCase,
    IGetAllCoursesUseCase,
    IGetAssessmentsByInstructorIdUseCase,
    IGetCourseByIdUseCase,
    IGetCoursesByInstructorIdUseCase,
    IUpdateAssessmentUseCase,
    IUpdateCourseUseCase,
    IGetAllCategoriesUseCase,
    IGetAvailableCategoriesUseCase,
    ICreateCategoryUseCase,
    IUpdateCategoryUseCase,
    IGetAvailableCoursesUseCase,
    IUpdateLessonUseCase,
    IGetAssessmentByIdUseCase,
    IUpdateAssessmentQuestionUseCase,
    ICreateEnrollmentUseCase,
    IGetEnrollmentByUserIdUseCase,
    IGetEnrollmentByIdUseCase,
    IGetAssessmentsByCourseIdUseCase,
    IUpdateEnrollmentUseCase,
    IGetEnrollmentsByInstructorIdUseCase,
    IAddLessonUseCase,
    IGetTopInstructorsByEnrollmentsUseCase
} from "@/domain/useCases";
import { IDependencies } from "./IDependencies";
import { ICreateResultUseCase, IGetAllResultsUseCase, IGetResultByIdUseCase, IGetResultByUserIdUseCase } from "@/domain/useCases/result";
import { ICommentAnnouncementUseCase, ICreateAnnouncementUseCase, IGetAnnouncementByIdUseCase, IGetAnnouncementsByInstructorIdUseCase, IGetAnnouncementsUseCase, IReactAnnouncementUseCase, IUpdateAnnouncementUseCase } from "@/domain/useCases/announcement";

export interface IUseCases {
    createCourseUseCase: (dependencies: IDependencies) => ICreateCourseUseCase;
    updateCourseUseCase: (dependencies: IDependencies) => IUpdateCourseUseCase;
    getAllCoursesUseCase: (dependencies: IDependencies) => IGetAllCoursesUseCase;
    getCourseByIdUseCase: (dependencies: IDependencies) => IGetCourseByIdUseCase;
    getCoursesByInstructorIdUseCase: (dependencies: IDependencies) => IGetCoursesByInstructorIdUseCase;
    createAssessmentUseCase: (dependencies: IDependencies) => ICreateAssessmentUseCase;
    updateAssessmentUseCase: (dependencies: IDependencies) => IUpdateAssessmentUseCase;
    getAllAssessmentsUseCase: (dependencies: IDependencies) => IGetAllAssessmentsUseCase;
    getAssessmentsByInstructorIdUseCase: (dependencies: IDependencies) => IGetAssessmentsByInstructorIdUseCase;
    getAllCategoriesUseCase: (dependencies: IDependencies) => IGetAllCategoriesUseCase;
    getAvailableCategoriesUseCase: (dependencies: IDependencies) => IGetAvailableCategoriesUseCase;
    createCategoryUseCase: (dependencies: IDependencies) => ICreateCategoryUseCase;
    updateCategoryUseCase: (dependencies: IDependencies) => IUpdateCategoryUseCase;
    getAvailableCoursesUseCase: (dependencies: IDependencies) => IGetAvailableCoursesUseCase;
    updateLessonUseCase: (dependencies: IDependencies) => IUpdateLessonUseCase;
    getAssessmentByIdUseCase: (dependencies: IDependencies) => IGetAssessmentByIdUseCase;
    updateAssessmentQuestionUseCase: (dependencies: IDependencies) => IUpdateAssessmentQuestionUseCase;
    createEnrollmentUseCase: (dependencies: IDependencies) => ICreateEnrollmentUseCase;
    getEnrollmentByUserIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByUserIdUseCase;
    getEnrollmentByIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByIdUseCase;
    getAssessmentsByCourseIdUseCase: (dependencies: IDependencies) => IGetAssessmentsByCourseIdUseCase;
    updateEnrollmentUseCase: (dependencies: IDependencies) => IUpdateEnrollmentUseCase;
    getAllResultsUseCase: (dependencies: IDependencies) => IGetAllResultsUseCase;
    getResultByUserIdUseCase: (dependencies: IDependencies) => IGetResultByUserIdUseCase;
    createResultUseCase: (dependencies: IDependencies) => ICreateResultUseCase;
    getResultByIdUseCase: (dependencies: IDependencies) => IGetResultByIdUseCase;
    getEnrollmentsByInstructorIdUseCase: (dependencies: IDependencies) => IGetEnrollmentsByInstructorIdUseCase;
    addLessonUseCase: (dependencies: IDependencies) => IAddLessonUseCase;
    createAnnouncementUseCase: (dependencies: IDependencies) => ICreateAnnouncementUseCase;
    updateAnnouncementUseCase: (dependencies: IDependencies) => IUpdateAnnouncementUseCase;
    commentAnnouncementUseCase: (dependencies: IDependencies) => ICommentAnnouncementUseCase;
    reactAnnouncementUseCase: (dependencies: IDependencies) => IReactAnnouncementUseCase;
    getAnnouncementsUseCase: (dependencies: IDependencies) => IGetAnnouncementsUseCase;
    getAnnouncementsByInstructorIdUseCase: (dependencies: IDependencies) => IGetAnnouncementsByInstructorIdUseCase;
    getAnnouncementByIdUseCase: (dependencies: IDependencies) => IGetAnnouncementByIdUseCase;
    getTopInstructorsByEnrollmentsUseCase: (dependencies: IDependencies) => IGetTopInstructorsByEnrollmentsUseCase;
}

