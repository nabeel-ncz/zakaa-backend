import { IDependencies } from "@/application/interfaces/IDependencies";
import { applyToTeachController } from "./applyToTeach";
import { getInstructorApplicationsController } from "./getInstructorApplications";
import { acceptInstructorApplicationController } from "./acceptInstructorApplication";

export const controllers = (dependencies: IDependencies) => {
    return {
        applyToTeach: applyToTeachController(dependencies),
        getInstructorApplications: getInstructorApplicationsController(dependencies),
        acceptInstructorApplication: acceptInstructorApplicationController(dependencies)
    }
};