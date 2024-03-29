import { InstructorApplicationEntity, UserEntity } from "@/domain/entities";

export interface IRepositories {
    createInstructorApplication: (data: InstructorApplicationEntity) => Promise<InstructorApplicationEntity | null>;
    findAllInstructorApplication: (p: number, l: number) => Promise<InstructorApplicationEntity[] | null>;
    acceptInstructorApplication: (id: string) => Promise<InstructorApplicationEntity | null>;
    createUser: (data: UserEntity) => Promise<UserEntity | null>;
    updateUserRole: (email: string, role: string) => Promise<UserEntity | null>;
    verifyUser: (data: { email: string, isVerified: boolean }) => Promise<UserEntity | null>;
    updateUser: (data: UserEntity) => Promise<UserEntity | null>;
    findUserById: (id: string) => Promise<UserEntity | null>;
    findUsersByUsername: (username: string) => Promise<UserEntity[] | null>;
    getAllInstructors: (page?: number, limit?: number) => Promise<UserEntity[] | null>;
}