import { UserEntity } from "../entities";

export interface IUpdateUserRoleUseCase {
    execute(email: string, role: string): Promise<UserEntity | null>;
}