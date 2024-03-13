import { Router } from "express";
import { CurrentUser, RequireAuth } from "@zakaa/common";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { uploadMultipleFiles, uploadSingleImage } from "@/_lib/multer";
import { requireInstructor, requireAdmin } from "@/_lib/http/middlewares";

export const routes = (dependencies: IDependencies) => {
    const router = Router();

    const {
        createCourse,
        updateCourse,
        getAllCourse,
        getCourse,
        deleteCourse,
        uploadCourseContent,
        uploadLessonContent,
        getInstructorCourses,
        createAssessment,
        updateAssessment,
        getAllAssessments,
        getAssessmentsByInstructorId,
        createCategory,
        updateCategory,
        getAllCategories,
        getAvailableCategories,
        streamCourseVideo,
        getAvailableCourses,
        updateLesson,
        getAssessmentById,
        updateAssessmentQuestion,
        createEnrollment,
        getEnrollmentByUserId,
        getEnrollmentById,
        getAssessmentsByCourseId,
        updateEnrollment,
        createResult,
        getAllResults,
        getResultByUserId,
        getResultById,
        getEnrollmentsByInstructorId,
        createAnnouncement,
        updateAnnouncement,
        commentAnnouncement,
        reactAnnoucement
    } = controllers(dependencies);

    router.route("/")
        .get(CurrentUser, requireAdmin, getAllCourse)
        .post(CurrentUser, requireInstructor, createCourse)
        .put(CurrentUser, requireInstructor, updateCourse);

    router.route("/lesson")
        .put(uploadSingleImage('thumbnail'), updateLesson);

    router.route("/active")
        .get(getAvailableCourses);

    router.route("/instructor/:instructorId")
        .get(CurrentUser, requireInstructor, getInstructorCourses);

    router.route("/:id/active")
        .get(getCourse);

    router.route("/content/upload")
        .post(
            CurrentUser,
            requireInstructor,
            uploadMultipleFiles(
                ['courseThumbnail', 'trialVideo'],
                ['.jpg', '.jpeg', '.png', '.mp4', '.mkv', '.webm', '.mpeg']
            ),
            uploadCourseContent
        );

    router.route("/lesson/upload")
        .post(
            CurrentUser,
            requireInstructor,
            uploadMultipleFiles(
                ['lessonThumbnail', 'lessonVideo', 'lessonAttachment'],
                ['.jpg', '.jpeg', '.png', '.mp4', '.mkv', '.webm', '.mpeg', '.pdf', '.docx']
            ),
            uploadLessonContent
        );

    router.route("/assessment")
        .post(createAssessment)
        .put(updateAssessment)
        .get(getAllAssessments);

    router.route("/assessment/question")
        .put(updateAssessmentQuestion);


    router.route("/assessment/:id")
        .get(getAssessmentById);

    router.route("/assessment/instructor/:instructorId")
        .get(getAssessmentsByInstructorId);

    router.route("/assessment/course/:courseId")
        .get(getAssessmentsByCourseId);

    router.route("/exam/result")
        .post(createResult)
        .get(getAllResults);

    router.route("/exam/result/:id")
        .get(getResultById);

    router.route("/exam/result/user/:userId")
        .get(getResultByUserId);

    router.route("/category")
        .post(CurrentUser, requireAdmin, createCategory)
        .put(CurrentUser, requireAdmin, updateCategory)
        .get(CurrentUser, requireAdmin, getAllCategories);

    router.route("/category/available")
        .get(getAvailableCategories);

    router.route("/video/:courseId/:segment")
        .get(streamCourseVideo);

    router.route("/enrollment")
        .post(CurrentUser, RequireAuth, createEnrollment)
        .put(CurrentUser, RequireAuth, updateEnrollment);

    router.route("/enrollment/user/:userId")
        .get(CurrentUser, RequireAuth, getEnrollmentByUserId);

    router.route("/enrollment/instructor/:instructorId")
        .get(CurrentUser, RequireAuth, getEnrollmentsByInstructorId);

    router.route("/enrollment/:id")
        .get(CurrentUser, RequireAuth, getEnrollmentById);

    router.route("/announcement")
        .post(createAnnouncement)
        .put(updateAnnouncement);

    router.route("/announcement/comment")
        .post(commentAnnouncement);

    router.route("/announcement/:type")
        .post(reactAnnoucement);

    router.route("/:id")
        .get(getCourse)
        .delete(CurrentUser, requireInstructor, deleteCourse);

    return router;
}