import { IDependencies } from "@/application/interfaces/IDependencies";
import { applyToTeachController } from "./applyToTeachController";
import { getInstructorApplicationsController } from "./getInstructorApplicationsController";
import { acceptInstructorApplicationController } from "./acceptInstructorApplicationController";
import { verifyInstructorApplicationController } from "./verifyInstructorApplicationController";
import { updateUserProfileController } from "./updateUserProfileController";
import { getUserProfileController } from "./getUserProfileController";
import { getUsersByUsernameController } from "./getUsersByUsernameController";

export const controllers = (dependencies: IDependencies) => {
    return {
        applyToTeach: applyToTeachController(dependencies),
        getInstructorApplications: getInstructorApplicationsController(dependencies),
        acceptInstructorApplication: acceptInstructorApplicationController(dependencies),
        verifyInstructorApplication: verifyInstructorApplicationController(dependencies),
        updateUserProfile: updateUserProfileController(dependencies),
        getUserProfile: getUserProfileController(dependencies),
        getUsersByUsername: getUsersByUsernameController(dependencies)
    }
};