import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { uploadMultipleFiles } from "@/_lib/multer";

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
        .get(getAllCourse)
        .post(createCourse)
        .put(updateCourse);

    router.route("/:id")
        .get(getCourse)
        .delete(deleteCourse);

    router.route("/content/upload")
        .post(
            uploadMultipleFiles(
                ['courseThumbnail', 'trialVideo'],
                ['.jpg', '.jpeg', '.png', '.mp4', '.mkv', '.webm', '.mpeg']
            ),
            uploadCourseContent
        );

    router.route("/lesson/upload")
        .post(
            uploadMultipleFiles(
                ['lessonThumbnail', 'lessonVideo', 'lessonAttachment'],
                ['.jpg', '.jpeg', '.png', '.mp4', '.mkv', '.webm', '.mpeg', '.pdf', '.docx']
            ),
            uploadLessonContent
        );

    return router;
}