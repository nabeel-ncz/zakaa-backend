import { Result } from "@/infrastructure/database/mongo/models";
import { ResultEntity } from "@/domain/entities";

export const createResult = async (
    data: ResultEntity
): Promise<ResultEntity | null> => {
    try {

        const examResult = await Result.create(data);

        if (!examResult) {
            throw new Error("exam result failed!");
        }

        return examResult;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}