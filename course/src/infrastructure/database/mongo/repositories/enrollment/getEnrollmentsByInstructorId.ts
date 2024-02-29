import { Enrollment } from "@/infrastructure/database/mongo/models";
import { EnrollmentEntity } from "@/domain/entities";

export const getEnrollmentsByInstructorId = async (
    instructorId: string
): Promise<EnrollmentEntity[] | null> => {
    try {

        const enrollment = await Enrollment.aggregate([
            {
                $lookup: {
                    from: "courses",
                    localField: "courseId",
                    foreignField: "_id",
                    as: "course"
                }
            },
            {
                $unwind: "$course"
            },
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $unwind: "$user"
            },
            {
                $match: { "course.instructorId": instructorId }
            }, 
            {
                $project: {
                    _id: 1,
                    user: 1,
                    course: 1,
                    enrolledAt: 1
                }
            }
        ]);

        return enrollment;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}