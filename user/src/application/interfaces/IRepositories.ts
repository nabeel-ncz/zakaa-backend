import { InstructorApplicationEntity } from "@/domain/entities";

export interface IRepositories {
    createInstructorApplication: (data: InstructorApplicationEntity) => Promise<InstructorApplicationEntity | null>;
    findAllInstructorApplication: (p: number, l: number) => Promise<InstructorApplicationEntity[] | null>;
}