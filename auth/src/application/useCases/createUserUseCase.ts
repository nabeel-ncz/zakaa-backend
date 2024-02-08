import { IDependencies } from "@/application/interfaces/IDependencies";
import { UserEntity } from "@/domain/entities";
import { generateVerificationOTP } from "@/_lib/utils/otp";

export const createUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { create }
    } = dependencies;

    return {
        execute: async (data: UserEntity) => {
            try {

                data['otp'] = generateVerificationOTP();
                return await create(data);
                
            } catch (error: any) {
                throw new Error(error.message || "User creation failed");
            }
        }
    }
}