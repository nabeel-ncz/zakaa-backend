import {
    ICreateUserUseCase,
    ILoginUserUseCase,
    ICheckUsernameUseCase,
    IFindUserByIdUseCase
} from "@/domain/useCases";

export interface IUseCases {
    createUserUseCase: (dependencies: any) => ICreateUserUseCase;
    loginUserUseCase: (dependencies: any) => ILoginUserUseCase;
    checkUsernameUseCase: (dependencies: any) => ICheckUsernameUseCase;
    findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
}