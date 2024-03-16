import { Enrollment } from "@/infrastructure/database/mongo/models";
import { EnrollmentEntity } from "@/domain/entities";

export const updateEnrollment = async (
    { enrollmentId, lessonId, totalTimeWatched = 0, status, completedLesson, completedAssessment }: {
        enrollmentId: string;
        lessonId: string;
        totalTimeWatched: number;
        status: 'lesson-completed' | 'assessment-completed' | 'none';
        completedLesson?: string;
        completedAssessment?: string;
    }
): Promise<EnrollmentEntity | null> => {
    try {

        const enrollment = await Enrollment.findById(enrollmentId);

        if (!enrollment) {
            throw new Error("Course enrollment failed!");
        }

        if (status !== 'assessment-completed') {
            if (!enrollment.progress) {
                enrollment.progress = {};
            }

            if (!enrollment.progress.lessonProgress) {
                enrollment.progress.lessonProgress = [];
            }

            const lessonIndex = enrollment?.progress?.lessonProgress?.findIndex((progress) => progress.lessonId.toString() === lessonId);

            if (lessonIndex === -1) {
                enrollment?.progress?.lessonProgress?.push({ lessonId, totalTimeWatched });
            } else {
                enrollment.progress.lessonProgress[lessonIndex].totalTimeWatched = totalTimeWatched;
            }
        }

        if (status === 'lesson-completed' && completedLesson) {
            let exist = enrollment?.progress?.completedLessons?.findIndex((item) => item.toString() === completedLesson);
            if (exist === -1) {
                (enrollment?.progress?.completedLessons as string[])?.push(completedLesson);
            }
        }

        if (status === "assessment-completed" && completedAssessment) {
            let exist = enrollment?.progress?.completedAssessments?.findIndex((item) => item.toString() === completedAssessment);
            if (exist === -1) {
                (enrollment?.progress?.completedAssessments as string[])?.push(completedAssessment);
            }
        }

        const newEnr = await enrollment.save();

        return newEnr;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}