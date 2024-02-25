import { CourseEntity } from "@/domain/entities";

export interface IGetAvailableCoursesUseCase {
    execute(): Promise<CourseEntity[] | null>;
}