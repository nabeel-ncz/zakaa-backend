import {
    ICreateCourseUseCase,
    IGetAllCoursesUseCase,
    IGetCourseByIdUseCase,
    IUpdateCourseUseCase
} from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createCourseUseCase: (dependencies: IDependencies) => ICreateCourseUseCase;
    updateCourseUseCase: (dependencies: IDependencies) => IUpdateCourseUseCase;
    getAllCoursesUseCase: (dependencies: IDependencies) => IGetAllCoursesUseCase;
    getCourseByIdUseCase: (dependencies: IDependencies) => IGetCourseByIdUseCase;
}