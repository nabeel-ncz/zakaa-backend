import { IDependencies } from "@/application/interfaces/IDependencies";
import { InstructorApplicationEntity } from "@/domain/entities";

export const createInstructorApplicationUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { createInstructorApplication }
    } = dependencies;

    return {
        execute: async (
            data: InstructorApplicationEntity
        ) => {
            return await createInstructorApplication(data);
        }
    }
}