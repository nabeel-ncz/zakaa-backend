import { CourseEntity } from "@/domain/entities";

export interface IRepositories {
    createCourse: (data: CourseEntity) => Promise<CourseEntity | null>;
    updateCourse: (data: CourseEntity) => Promise<CourseEntity | null>;
    getAllCourses: (data: {
        page?: number;
        limit?: number;
        category?: string;
        search?: string;
    }) => Promise<CourseEntity[] | null>;
    getCourseById: (id: string) => Promise<CourseEntity | null>;
}