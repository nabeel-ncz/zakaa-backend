import { CourseEntity } from "@/domain/entities";

export interface IGetAvailableCoursesUseCase {
    execute(data: any): Promise<CourseEntity[] | null>;
}