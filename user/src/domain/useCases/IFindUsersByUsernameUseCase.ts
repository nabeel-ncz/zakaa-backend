import { UserEntity } from "../entities";

export interface IFindUsersByUsernameUseCase {
    execute(username: string): Promise<UserEntity[] | null>;
}