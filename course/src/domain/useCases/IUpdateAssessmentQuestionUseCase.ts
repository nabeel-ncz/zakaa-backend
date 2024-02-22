import { AssessmentEntity } from "../entities";

export interface IUpdateAssessmentQuestionUseCase {
    execute(data: any): Promise<AssessmentEntity | null>;
}