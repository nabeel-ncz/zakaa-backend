import { Enrollment } from "@/infrastructure/database/mongo/models";
import { EnrollmentEntity } from "@/domain/entities";

export const updateEnrollment = async (
    { enrollmentId, lessonId, totalTimeWatched }: any
): Promise<EnrollmentEntity | null> => {
    try {

        const enrollment = await Enrollment.findById(enrollmentId);

        if (!enrollment) {
            throw new Error("Course enrollment failed!");
        }

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

        const newEnr = await enrollment.save();

        return newEnr;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}