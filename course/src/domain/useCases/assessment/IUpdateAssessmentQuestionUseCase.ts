import { AssessmentEntity } from "@/domain/entities";

export interface IUpdateAssessmentQuestionUseCase {
    execute(data: any): Promise<AssessmentEntity | null>;
}