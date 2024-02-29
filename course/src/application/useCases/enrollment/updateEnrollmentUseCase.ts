import { EnrollmentEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const updateEnrollmentUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { updateEnrollment }
    } = dependencies;

    return {
        execute: async (data: EnrollmentEntity) => {
            return await updateEnrollment(data);
        }
    }
};