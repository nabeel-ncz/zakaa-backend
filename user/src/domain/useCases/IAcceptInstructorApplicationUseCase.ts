import { InstructorApplicationEntity } from "@/domain/entities";

export interface IAcceptInstructorApplicationUseCase {
    execute(id: string): Promise<InstructorApplicationEntity | null>;
}