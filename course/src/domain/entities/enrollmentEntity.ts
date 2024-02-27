import { Types } from "mongoose";

export interface EnrollmentEntity {
    _id?: Types.ObjectId;
    userId: Types.ObjectId;
    courseId: Types.ObjectId;
    enrolledAt: Types.ObjectId;
    progress?: {
        completedLessons?: Types.ObjectId[] | [] | null;
        completedAssessments?: Types.ObjectId[] | [] | null;
        currentLesson?: Types.ObjectId | string;
    };
};