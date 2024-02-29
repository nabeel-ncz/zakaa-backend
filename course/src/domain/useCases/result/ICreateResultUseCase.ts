import { ResultEntity } from "@/domain/entities";

export interface ICreateResultUseCase {
    execute(data: ResultEntity): Promise<ResultEntity[] | null>;
}