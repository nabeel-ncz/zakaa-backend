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
    IGetAvailableCoursesUseCase
} from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

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
}

