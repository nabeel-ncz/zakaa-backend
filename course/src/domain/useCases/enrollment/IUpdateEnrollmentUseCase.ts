import { EnrollmentEntity } from "@/domain/entities";

export interface IUpdateEnrollmentUseCase {
    execute(data: any): Promise<EnrollmentEntity | null>;
}