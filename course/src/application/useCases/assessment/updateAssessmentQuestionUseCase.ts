import { IDependencies } from "../../interfaces/IDependencies";

export const updateAssessmentQuestionUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { updateAssessmentQuestion }
    } = dependencies;

    return {
        execute: async (data: any) => {
            return await updateAssessmentQuestion(data);
        }
    }
};