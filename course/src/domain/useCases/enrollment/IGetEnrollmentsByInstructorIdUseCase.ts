import { EnrollmentEntity } from "@/domain/entities";

export interface IGetEnrollmentsByInstructorIdUseCase {
    execute(instructorId: string): Promise<EnrollmentEntity[] | null>;
}