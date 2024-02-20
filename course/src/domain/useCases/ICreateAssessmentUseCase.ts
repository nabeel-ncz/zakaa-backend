import { CourseEntity } from "../entities";

export interface ICreateAssessmentUseCase {
    execute(data: CourseEntity): Promise<CourseEntity | null>;
}