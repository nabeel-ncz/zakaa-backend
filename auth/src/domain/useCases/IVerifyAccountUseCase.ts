import { UserEntity } from "@/domain/entities";

export interface IVerifyAccountUseCase {
    execute(data: {
        email: string,
        otp: string
    }): Promise<UserEntity | null>;
}