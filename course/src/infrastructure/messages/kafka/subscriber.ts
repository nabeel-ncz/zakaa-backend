import { ISubscriber } from "@zakaa/common";
import {
    instructorVerificationConsumer,
    userCreatedConsumer,
    userVerifiedConsumer,
    coursePaymentSuccessConsumer,
    userUpdatedConsumer
} from "./consumers";

export interface ICourseSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'userVerified' | 'instructorVerified' | 'coursePaymentSuccess' | 'userUpdated'
> { }

export const createSubscriber = (): ICourseSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userVerified: userVerifiedConsumer,
        instructorVerified: instructorVerificationConsumer,
        coursePaymentSuccess: coursePaymentSuccessConsumer,
        userUpdated: userUpdatedConsumer
    }
}