import {
    IAcceptInstructorApplicationUseCase,
    ICreateInstructorApplicationUseCase, 
    IFindAllInstructorApplicationsUseCase,
    IUpdateUserRoleUseCase
} from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createInstructorApplicationUseCase: (dependencies: IDependencies) => ICreateInstructorApplicationUseCase;
    findAllInstructorApplicationsUseCase: (dependencies: IDependencies) => IFindAllInstructorApplicationsUseCase;
    acceptInstructrorApplicationUsecase: (dependencies: IDependencies) => IAcceptInstructorApplicationUseCase;
    updateUserRoleUseCase: (dependencies: IDependencies) => IUpdateUserRoleUseCase;
}