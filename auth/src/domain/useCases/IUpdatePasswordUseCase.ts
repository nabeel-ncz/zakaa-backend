import { UserEntity } from "@/domain/entities";

export interface IUpdatePasswordUseCase {
    execute(data: {
        email: string,
        password: string,
    }): Promise<UserEntity | null>;
}