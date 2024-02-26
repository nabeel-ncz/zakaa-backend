import { PaymentEntity } from "@/domain/entities";

export interface IRepositories {
    createPayment: (data: PaymentEntity) => Promise<PaymentEntity | null>;
    updatePayment: (data: PaymentEntity) => Promise<PaymentEntity | null>;
};