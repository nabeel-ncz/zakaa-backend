import { Router } from "express";
import { uploadMultipleFiles } from "@/_lib/multer";
import { controllers } from "@/presentation/controllers";
import { CurrentUser, RequireAuth } from "@zakaa/common";
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
        streamCourseVideo
    } = controllers(dependencies);

    router.route("/")
        .get(CurrentUser, requireAdmin, getAllCourse)
        .post(CurrentUser, requireInstructor, createCourse)
        .put(CurrentUser, requireInstructor, updateCourse);

    router.route("/active")
        .get(getAllCourse);

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

    router.route("/assessment/:instructorId")
        .get(getAssessmentsByInstructorId);

    router.route("/category")
        .post(CurrentUser, requireAdmin, createCategory)
        .put(CurrentUser, requireAdmin, updateCategory)
        .get(CurrentUser, requireAdmin, getAllCategories);

    router.route("/category/available")
        .get(getAvailableCategories);

    router.route("/video/:vid")
        .get(streamCourseVideo);

    router.route("/:id")
        .get(CurrentUser, RequireAuth, getCourse)
        .delete(CurrentUser, requireInstructor, deleteCourse);

    return router;
}