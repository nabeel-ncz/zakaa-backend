import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";

export const assessmentRoutes = (dependencies: IDependencies, router: Router) => {

    const {
        createAssessment,
        updateAssessment,
        getAllAssessments,
        getAssessmentsByInstructorId
    } = controllers(dependencies);

    router.route("/assessment")
        .post(createAssessment)
        .put(updateAssessment)
        .get(getAllAssessments);

    router.route("/assessment/:instructorId")
        .get(getAssessmentsByInstructorId);

    return router;
}