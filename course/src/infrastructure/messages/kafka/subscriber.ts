import { ISubscriber } from "@zakaa/common";
import {
    instructorVerificationConsumer,
    userCreatedConsumer,
    userVerifiedConsumer
} from "./consumers";

export interface ICourseSubscriber extends Pick<
    ISubscriber, 'userCreated' | 'userVerified' | 'instructorVerified'
> { }

export const createSubscriber = (): ICourseSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userVerified: userVerifiedConsumer,
        instructorVerified: instructorVerificationConsumer
    }
}