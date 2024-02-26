import { EnrollmentEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const createEnrollmentUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createEnrollment }
    } = dependencies;

    return {
        execute: async (data: EnrollmentEntity) => {
            return await createEnrollment(data);
        }
    }
};