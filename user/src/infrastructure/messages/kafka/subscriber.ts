import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer,
    userVerifiedConsumer,
    coursePaymentSuccessConsumer
} from "./consumers";

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'userVerified' | 'coursePaymentSuccess'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userVerified: userVerifiedConsumer,
        coursePaymentSuccess: coursePaymentSuccessConsumer
    }
}