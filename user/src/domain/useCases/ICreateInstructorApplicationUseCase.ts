import { InstructorApplicationEntity } from "@/domain/entities";

export interface ICreateInstructorApplicationUseCase {
    execute(data: InstructorApplicationEntity): Promise<InstructorApplicationEntity | null>;
}