import { ICreatePaymentUseCase, IUpdatePaymentUseCase } from "@/domain/useCases";
import { IDependencies } from "./IDependencies";
import { ICreateSessionUseCase } from "@/domain/useCases/ICreateSessionUseCase";

export interface IUseCases {
    createPaymentUseCase: (dependencies: IDependencies) => ICreatePaymentUseCase;
    updatePaymentUseCase: (dependencies: IDependencies) => IUpdatePaymentUseCase;
    createSessionUseCase: (dependencies: IDependencies) => ICreateSessionUseCase;
}