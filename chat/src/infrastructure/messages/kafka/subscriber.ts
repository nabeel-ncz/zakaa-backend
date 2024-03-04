import { ISubscriber } from "@zakaa/common";
import {
    userCreatedConsumer,
    userVerifiedConsumer,
    instructorVerificationConsumer
} from "./consumers";

export interface IChatSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'userVerified' | 'instructorVerified'
> { }

export const createSubscriber = (): IChatSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userVerified: userVerifiedConsumer,
        instructorVerified: instructorVerificationConsumer
    }
}