import { AssessmentEntity } from "../entities";

export interface IGetAllAssessmentsUseCase {
    execute(): Promise<AssessmentEntity[] | null>;
}
