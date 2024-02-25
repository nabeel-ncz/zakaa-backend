import { CourseEntity } from "@/domain/entities";

export interface IGetCoursesByInstructorIdUseCase {
    execute(id: string): Promise<CourseEntity[] | null>;
}
