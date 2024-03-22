import { Enrollment } from "@/infrastructure/database/mongo/models";

export const getTopInstructorsByEnrollments = async () => {
    try {

        const users = await Enrollment.aggregate([
            {
                $group: {
                    _id: "$courseId",
                    totalEnrollments: { $sum: 1 }
                }
            },
            {
                $lookup: {
                    from: "courses",
                    localField: "_id",
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
                    localField: "course.instructorRef",
                    foreignField: "_id",
                    as: "instructor"
                }
            },
            {
                $project: {
                    instructorDetails: { $arrayElemAt: ["$instructor", 0] },
                    totalEnrollments: 1
                }
            },
            {
                $sort: { totalEnrollments: -1 }
            },
            {
                $limit: 5
            }
        ]);

        return users;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}