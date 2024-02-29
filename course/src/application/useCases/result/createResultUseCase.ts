import { ResultEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const createResultUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createResult }
    } = dependencies;

    return {
        execute: async (data: ResultEntity) => {
            return await createResult(data);
        }
    }
};