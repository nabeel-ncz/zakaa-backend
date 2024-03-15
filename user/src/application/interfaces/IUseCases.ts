import {
    IAcceptInstructorApplicationUseCase,
    ICreateInstructorApplicationUseCase, 
    IFindAllInstructorApplicationsUseCase,
    IFindUserByIdUseCase,
    IFindUsersByUsernameUseCase,
    IUpdateUserRoleUseCase,
    IUpdateUserUseCase
} from "@/domain/useCases";

import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createInstructorApplicationUseCase: (dependencies: IDependencies) => ICreateInstructorApplicationUseCase;
    findAllInstructorApplicationsUseCase: (dependencies: IDependencies) => IFindAllInstructorApplicationsUseCase;
    acceptInstructrorApplicationUsecase: (dependencies: IDependencies) => IAcceptInstructorApplicationUseCase;
    updateUserRoleUseCase: (dependencies: IDependencies) => IUpdateUserRoleUseCase;
    updateUserUseCase: (dependencies: IDependencies) => IUpdateUserUseCase;
    findUserByIdUseCase: (dependencies: IDependencies) => IFindUserByIdUseCase;
    findUsersByUsernameUseCase: (dependencies: IDependencies) => IFindUsersByUsernameUseCase;
}