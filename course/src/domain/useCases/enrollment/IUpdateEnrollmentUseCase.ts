import { EnrollmentEntity } from "@/domain/entities";

export interface IUpdateEnrollmentUseCase {
    execute(data: EnrollmentEntity): Promise<EnrollmentEntity | null>;
}