import { EnrollmentEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const enrollmentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "courses",
        required: true
    },
    enrolledAt: {
        type: Schema.Types.Date,
        default: Date.now()
    },
    progress: {
        completedLessons: {
            type: [Schema.Types.ObjectId],
            default: function () {
                return [];
            }
        },
        completedAssessments: {
            type: [Schema.Types.ObjectId],
            default: function () {
                return [];
            }
        },
        currentLesson: {
            type: Schema.Types.ObjectId,
            default: ""
        }
    }
});

export const Enrollment = model<EnrollmentEntity>("enrollments", enrollmentSchema);