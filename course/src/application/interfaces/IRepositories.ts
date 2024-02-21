import { AssessmentEntity, CategoryEntity, CourseEntity } from "@/domain/entities";

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
    getCoursesByInstructorId: (id: string) => Promise<CourseEntity[] | null>;
    createAssessment: (data: AssessmentEntity) => Promise<AssessmentEntity | null>;
    updateAssessment: (data: AssessmentEntity) => Promise<AssessmentEntity | null>;
    getAllAssessments:  () => Promise<AssessmentEntity[] | null>;
    getAssessmentsByInstructorId: (id: string) => Promise<AssessmentEntity[] | null>;
    getAllCategories: () => Promise<CategoryEntity[] | null>;
    getAvailableCategories: () => Promise<CategoryEntity[] | null>;
    createCategory: (data: CategoryEntity) => Promise<CategoryEntity | null>;
    updateCategory: (data: CategoryEntity) => Promise<CategoryEntity | null>;
    getAvailableCourses: () => Promise<CourseEntity[] | null>;
    updateLesson: (data: any) => Promise<CourseEntity | null>;
}



