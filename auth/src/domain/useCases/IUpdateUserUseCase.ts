import { UserEntity } from "@/domain/entities";

export interface IUpdateUserUseCase {
    execute(data: UserEntity): Promise<UserEntity | null>;
}