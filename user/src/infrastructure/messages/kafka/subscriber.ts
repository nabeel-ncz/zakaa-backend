import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer
} from "./consumers";

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer
    }
}