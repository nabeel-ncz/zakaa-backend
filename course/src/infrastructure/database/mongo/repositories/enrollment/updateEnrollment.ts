import { Enrollment } from "@/infrastructure/database/mongo/models";
import { EnrollmentEntity } from "@/domain/entities";

export const updateEnrollment = async (
    data: EnrollmentEntity
): Promise<EnrollmentEntity | null> => {
    try {

        const enrollment = await Enrollment.findByIdAndUpdate(data?._id, {
            $set: { progress: data?.progress }
        }, {
            new: true
        });

        if (!enrollment) {
            throw new Error("Course enrollment failed!");
        }

        return enrollment;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}