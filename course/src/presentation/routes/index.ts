import { Router } from "express";
import { uploadMultipleFiles, uploadSingleImage } from "@/_lib/multer";
import { controllers } from "@/presentation/controllers";
import { CurrentUser } from "@zakaa/common";
import { IDependencies } from "@/application/interfaces/IDependencies";
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
        updateAssessmentQuestion
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

    router.route("/assessment/:instructorId")
        .get(getAssessmentsByInstructorId);

    router.route("/assessment/by/:id")
        .get(getAssessmentById);

    router.route("/category")
        .post(CurrentUser, requireAdmin, createCategory)
        .put(CurrentUser, requireAdmin, updateCategory)
        .get(CurrentUser, requireAdmin, getAllCategories);

    router.route("/category/available")
        .get(getAvailableCategories);

    router.route("/video/:vid")
        .get(streamCourseVideo);

    router.route("/:id")
        .get(getCourse)
        .delete(CurrentUser, requireInstructor, deleteCourse);

    return router;
}