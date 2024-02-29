import { Enrollment } from "@/infrastructure/database/mongo/models";
import { EnrollmentEntity } from "@/domain/entities";
import mongoose from "mongoose";

export const getEnrollmentsByInstructorId = async (
    instructorId: string
): Promise<EnrollmentEntity[] | null> => {
    try {

        const objectInstructorId = new mongoose.Types.ObjectId(instructorId);

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
                $match: { "course.instructorRef": objectInstructorId }
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