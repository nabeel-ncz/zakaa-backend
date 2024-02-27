import { ISubscriber } from "@zakaa/common";
import {
    instructorVerificationConsumer,
    userCreatedConsumer,
    userVerifiedConsumer,
    coursePaymentSuccessConsumer
} from "./consumers";

export interface ICourseSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'userVerified' | 'instructorVerified' | 'coursePaymentSuccess'
> { }

export const createSubscriber = (): ICourseSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userVerified: userVerifiedConsumer,
        instructorVerified: instructorVerificationConsumer,
        coursePaymentSuccess: coursePaymentSuccessConsumer
    }
}