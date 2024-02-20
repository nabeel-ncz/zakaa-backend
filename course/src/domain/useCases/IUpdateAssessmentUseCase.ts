import { AssessmentEntity } from "../entities";

export interface IUpdateAssessmentUseCase {
    execute(data: AssessmentEntity): Promise<AssessmentEntity | null>;
}