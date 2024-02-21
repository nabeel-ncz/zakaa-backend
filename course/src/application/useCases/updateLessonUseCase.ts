import { IDependencies } from "../interfaces/IDependencies";

export const updateLessonUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { updateLesson }
    } = dependencies;

    return {
        execute: async (data: {
            courseId: string;
            lessonId: string;
            title: string;
            thumbnail?: string | null;
            description: string;
        }) => {
            return await updateLesson(data);
        }
    }
};