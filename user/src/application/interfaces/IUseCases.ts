import {
    ICreateInstructorApplicationUseCase, 
    IFindAllInstructorApplicationsUseCase
} from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createInstructorApplicationUseCase: (dependencies: IDependencies) => ICreateInstructorApplicationUseCase;
    findAllInstructorApplicationsUseCase: (dependencies: IDependencies) => IFindAllInstructorApplicationsUseCase;
}