import { CourseEntity } from "../entities";

export interface IUpdateAssessmentUseCase {
    execute(data: CourseEntity): Promise<CourseEntity | null>;
}