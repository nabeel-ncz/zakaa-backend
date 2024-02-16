import { CourseEntity } from "../entities";

export interface IGetCourseByIdUseCase {
    execute(id: string): Promise<CourseEntity | null>;
}