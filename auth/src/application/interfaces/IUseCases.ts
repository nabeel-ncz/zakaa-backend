import {
    ICreateUserUseCase,
    ILoginUserUseCase,
    ICheckUsernameUseCase
} from "@/domain/useCases";

export interface IUseCases {
    createUserUseCase: (dependencies: any) => ICreateUserUseCase;
    loginUserUseCase: (dependencies: any) => ILoginUserUseCase;
    checkUsernameUseCase: (dependencies: any) => ICheckUsernameUseCase;
}