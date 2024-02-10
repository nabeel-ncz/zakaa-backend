import { UserEntity } from "@/domain/entities";

export interface IRepositories {
    create: (data: UserEntity) => Promise<UserEntity | null>;
    findByEmail: (email: string) => Promise<UserEntity | null>;
    findById: (id: string) => Promise<UserEntity | null>;
    isAvailableUsername: (username: string) => Promise<boolean | null>;
    updatePassword: (data: {
        email: string,
        password: string
    }) => Promise<UserEntity | null>;
}