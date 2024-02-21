import { CourseEntity } from "../entities";

export interface IGetAvailableCoursesUseCase {
    execute(): Promise<CourseEntity[] | null>;
}