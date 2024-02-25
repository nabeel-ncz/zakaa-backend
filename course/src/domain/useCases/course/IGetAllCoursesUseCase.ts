import { CourseEntity } from "@/domain/entities";

export interface IGetAllCoursesUseCase {
    execute(data: {
        page?: number;
        limit?: number;
        category?: string;
        search?: string;
    }): Promise<CourseEntity[] | null>;
}