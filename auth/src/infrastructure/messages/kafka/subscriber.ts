import { ISubscriber } from "@zakaa/common";
import {
    sendVerificationMailConsumer,
    instructorVerificationConsumer,
    userUpdatedConsumer
} from "./consumers";

export interface IAuthSubscriber extends Pick<
    ISubscriber, 'sendVerificationMail' | 'instructorVerified' | 'userUpdated'
> { }

export const createSubscriber = (): IAuthSubscriber => {
    return {
        sendVerificationMail: sendVerificationMailConsumer,
        instructorVerified: instructorVerificationConsumer,
        userUpdated: userUpdatedConsumer
    }
}