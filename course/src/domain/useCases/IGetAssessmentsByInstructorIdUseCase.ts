import { AssessmentEntity } from "../entities";

export interface IGetAssessmentsByInstructorIdUseCase {
    execute(id: string): Promise<AssessmentEntity[] | null>;
}
