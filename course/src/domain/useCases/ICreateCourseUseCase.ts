import { CourseEntity } from "../entities";

export interface ICreateCourseUseCase {
    execute(data: CourseEntity): Promise<CourseEntity | null>;
}