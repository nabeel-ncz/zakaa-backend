import { ISubscriber } from "@zakaa/common";
import {
    sendVerificationMailConsumer
} from "./consumers";

export interface IAuthSubscriber extends Pick<
    ISubscriber, 'sendVerificationMail'
> { }

export const createSubscriber = (): IAuthSubscriber => {
    return {
        sendVerificationMail: sendVerificationMailConsumer
    }
}