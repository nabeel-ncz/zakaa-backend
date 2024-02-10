import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer
} from "./consumers";

export interface INotificationSubscriber extends Pick<
    ISubscriber, 'userCreated'
> { }

export const createSubscriber = (): INotificationSubscriber => {
    return {
        userCreated: userCreatedConsumer
    }
}