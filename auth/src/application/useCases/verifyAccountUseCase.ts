import { IDependencies } from "@/application/interfaces/IDependencies";

export const verifyAccountUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { findByEmail, verify }
    } = dependencies;

    return {
        execute: async (
            data: {
                email: string,
                otp: string
            }
        ) => {
            try {
                const user = await findByEmail(data.email);

                if(!user){
                    throw new Error("User does not exist!");
                }

                if(!user.otp){
                    throw new Error("There some issues with OTP, Try again!")
                }
                
                if(user.otp !== data.otp){
                    throw new Error("OTP is incorrect, Try again!");
                }

                const updated = await verify(data.email);

                return updated;

            } catch (error: any){
                throw new Error(error?.message || "There is something went wrong!");
            }
        }
    }
}