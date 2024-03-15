import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer,
    userVerifiedConsumer,
    instructorVerificationConsumer,
    userUpdatedConsumer
} from "./consumers";

export interface IChatSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'userVerified' | 'instructorVerified' | 'userUpdated'
> { }

export const createSubscriber = (): IChatSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userVerified: userVerifiedConsumer,
        instructorVerified: instructorVerificationConsumer,
        userUpdated: userUpdatedConsumer
    }
}