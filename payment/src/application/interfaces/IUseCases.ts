import { ICreatePaymentUseCase, IUpdatePaymentUseCase } from "@/domain/useCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createPaymentUseCase: (dependencies: IDependencies) => ICreatePaymentUseCase;
    updatePaymentUseCase: (dependencies: IDependencies) => IUpdatePaymentUseCase;
}