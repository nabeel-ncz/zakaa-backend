import { AssessmentEntity, CategoryEntity, CourseEntity, EnrollmentEntity, ResultEntity } from "@/domain/entities";
import { AnnouncementEntity } from "@/domain/entities/announcementEntity";
import { Types } from "mongoose";

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
    getAllAssessments: () => Promise<AssessmentEntity[] | null>;
    getAssessmentsByInstructorId: (id: string) => Promise<AssessmentEntity[] | null>;
    getAllCategories: () => Promise<CategoryEntity[] | null>;
    getAvailableCategories: () => Promise<CategoryEntity[] | null>;
    createCategory: (data: CategoryEntity) => Promise<CategoryEntity | null>;
    updateCategory: (data: CategoryEntity) => Promise<CategoryEntity | null>;
    getAvailableCourses: (query: any) => Promise<CourseEntity[] | null>;
    updateLesson: (data: any) => Promise<CourseEntity | null>;
    getAssessmentById: (id: string) => Promise<AssessmentEntity | null>;
    updateAssessmentQuestion: (data: any) => Promise<AssessmentEntity | null>;
    createEnrollment: (data: any) => Promise<EnrollmentEntity | null>;
    getEnrollmentByUserId: (userId: string) => Promise<EnrollmentEntity[] | null>;
    getEnrollmentById: (id: string) => Promise<EnrollmentEntity | null>;
    getAssessmentsByCourseId: (id: string) => Promise<AssessmentEntity[] | null>;
    updateEnrollment: (data: any) => Promise<EnrollmentEntity | null>;
    createResult: (data: ResultEntity) => Promise<ResultEntity | null>;
    getAllResults: () => Promise<ResultEntity[] | null>;
    getResultByUserId: (userId: string) => Promise<ResultEntity[] | null>;
    getResultById: (id: string) => Promise<ResultEntity | null>;
    getEnrollmentsByInstructorId: (instructorId: string) => Promise<EnrollmentEntity[] | null>;
    addLesson: (data: {
        courseId: Types.ObjectId | string;
        title: string;
        description: string;
        thumbnail: string;
        video: string;
        attachments?: {
            title: string;
            url: string;
        }
    }) => Promise<CourseEntity | null>;
    createAnnouncement: (data: AnnouncementEntity) => Promise<AnnouncementEntity | null>;
    updateAnnouncement: (data: AnnouncementEntity) => Promise<AnnouncementEntity | null>;
    commentAnnouncement: (data: {
        _id: Types.ObjectId | string;
        userRef: Types.ObjectId | string;
        comment: string;
    }) => Promise<AnnouncementEntity | null>;
    reactAnnoucement: (data: {
        _id: Types.ObjectId | string;
        userRef: Types.ObjectId | string;
        type: 'like' | 'dislike' | string;
    }) => Promise<AnnouncementEntity | null>;
    getAnnouncements: (data: {
        page?: number;
        limit?: number;
    }) => Promise<AnnouncementEntity[] | null>;
    getAnnouncementsByInstructorId: (id: string) => Promise<AnnouncementEntity[] | null>;
    getAnnouncementById: (id: string) => Promise<AnnouncementEntity | null>;
    getTopInstructorsByEnrollments: () => Promise<
        {
            instructorDetails: any
            totalEnrollments: number;
        }[] | null>;
}



