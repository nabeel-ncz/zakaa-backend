import {
    ICreateAssessmentUseCase,
    ICreateCourseUseCase,
    IGetAllAssessmentsUseCase,
    IGetAllCoursesUseCase,
    IGetAssessmentsByInstructorIdUseCase,
    IGetCourseByIdUseCase,
    IGetCoursesByInstructorIdUseCase,
    IUpdateAssessmentUseCase,
    IUpdateCourseUseCase
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
    getAssessmentsByInstructorId: (dependencies: IDependencies) => IGetAssessmentsByInstructorIdUseCase;
}

