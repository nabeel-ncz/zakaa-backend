import {
    ICreateUserUseCase,
    ILoginUserUseCase,
    ICheckUsernameUseCase,
    IFindUserByIdUseCase,
    IFindUserByEmailUseCase,
    IUpdatePasswordUseCase,
    IVerifyAccountUseCase,
    IUpdateUserUseCase
} from "@/domain/useCases";

export interface IUseCases {
    createUserUseCase: (dependencies: any) => ICreateUserUseCase;
    loginUserUseCase: (dependencies: any) => ILoginUserUseCase;
    checkUsernameUseCase: (dependencies: any) => ICheckUsernameUseCase;
    findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
    findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
    updatePasswordUseCase: (dependencies: any) => IUpdatePasswordUseCase;
    verifyAccountUseCase: (dependencies: any) => IVerifyAccountUseCase;
    updateUserUseCase: (dependencies: any) => IUpdateUserUseCase;
}