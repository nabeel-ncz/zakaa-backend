import { ISubscriber } from "@zakaa/common";
import {
    sendVerificationMailConsumer,
    instructorVerificationConsumer
} from "./consumers";

export interface IAuthSubscriber extends Pick<
    ISubscriber, 'sendVerificationMail' | 'instructorVerified'
> { }

export const createSubscriber = (): IAuthSubscriber => {
    return {
        sendVerificationMail: sendVerificationMailConsumer,
        instructorVerified: instructorVerificationConsumer
    }
}