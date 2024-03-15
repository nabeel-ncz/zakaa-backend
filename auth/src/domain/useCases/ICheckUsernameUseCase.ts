export interface ICheckUsernameUseCase {
    execute(username: string): Promise<boolean | null>;
}