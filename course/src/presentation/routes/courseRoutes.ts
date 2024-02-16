import { Router } from "express";
import { controllers } from "@/presentation/controllers";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const courseRoutes = (dependencies: IDependencies) => {

    const {
        createCourse,
        updateCourse,
        getAllCourse,
        getCourse,
        deleteCourse
    } = controllers(dependencies);

    const router = Router();

    router.route("/")
        .get(getAllCourse)
        .post(createCourse)
        .put(updateCourse);

    router.route("/:id")
        .get(getCourse)
        .delete(deleteCourse);

    return router;
}