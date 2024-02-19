import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer,
    userVerifiedConsumer
} from "./consumers";

export interface ICourseSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'userVerified'
> { }

export const createSubscriber = (): ICourseSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userVerified: userVerifiedConsumer
    }
}