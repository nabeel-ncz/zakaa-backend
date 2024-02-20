import { AssessmentEntity } from "../entities";

export interface ICreateAssessmentUseCase {
    execute(data: AssessmentEntity): Promise<AssessmentEntity | null>;
}