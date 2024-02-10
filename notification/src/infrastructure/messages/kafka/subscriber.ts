import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer,
    requestForgotPasswordConsumer
} from "./consumers";

export interface INotificationSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'requestForgotPassword'
> { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        requestForgotPassword: requestForgotPasswordConsumer
    }
}