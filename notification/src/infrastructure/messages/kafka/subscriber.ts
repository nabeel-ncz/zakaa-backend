import { ISubscriber } from "@zakaa/common";
import userCreatedConsumer from "./consumers/userCreatedConsumer";

export interface INotificationSubscriber extends Pick
    <
        ISubscriber,
        'userCreated'
    > { }


export const createSubscriber = (): INotificationSubscriber => {
    return {
        userCreated: userCreatedConsumer
    }
}