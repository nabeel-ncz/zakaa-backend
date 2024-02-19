import { CourseEntity } from "../entities";

export interface IGetCoursesByInstructorIdUseCase {
    execute(id: string): Promise<CourseEntity[] | null>;
}
