import { AssessmentEntity } from "../entities";

export interface IGetAssessmentByIdUseCase {
    execute(id: string): Promise<AssessmentEntity | null>;
}
