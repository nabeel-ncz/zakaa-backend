import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { uploadMultipleFiles } from "@/_lib/multer";
import { requireInstructor, requireAdmin } from "@/_lib/http/middlewares";
import { CurrentUser, RequireAuth } from "@zakaa/common";

export const courseRoutes = (dependencies: IDependencies, router: Router) => {

    const {
        createCourse,
        updateCourse,
        getAllCourse,
        getCourse,
        deleteCourse,
        uploadCourseContent,
        uploadLessonContent
    } = controllers(dependencies);

    router.route("/")
        .get(CurrentUser, requireAdmin, getAllCourse)
        .post(CurrentUser, requireInstructor, createCourse)
        .put(CurrentUser, requireInstructor, updateCourse);

    router.route("/active")
        .get(getAllCourse);

    router.route("/instructor/:instructorId")
        .get();

    router.route("/:id")
        .get(CurrentUser, RequireAuth, getCourse)
        .delete(CurrentUser, requireInstructor, deleteCourse);

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

    return router;
}