import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer,
    requestForgotPasswordConsumer,
    instructorApplicationAcceptedConsumer
} from "./consumers";

export interface INotificationSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'requestForgotPassword' | 'instructorApplicationAccepted'
> { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        requestForgotPassword: requestForgotPasswordConsumer,
        instructorApplicationAccepted: instructorApplicationAcceptedConsumer
    }
}