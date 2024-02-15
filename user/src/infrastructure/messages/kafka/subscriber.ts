import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer,
    userVerifiedConsumer
} from "./consumers";

export interface IUserSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'userVerified'
> { }

export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userVerified: userVerifiedConsumer
    }
}