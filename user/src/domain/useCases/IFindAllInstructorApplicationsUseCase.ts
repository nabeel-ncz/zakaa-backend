import { InstructorApplicationEntity } from "../entities";
export interface IFindAllInstructorApplicationsUseCase{
    execute(page: number, limit: number): Promise<InstructorApplicationEntity[] | null>;
}