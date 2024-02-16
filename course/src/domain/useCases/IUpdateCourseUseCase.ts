import { CourseEntity } from "../entities";

export interface IUpdateCourseUseCase {
    execute(data: CourseEntity): Promise<CourseEntity | null>;
}