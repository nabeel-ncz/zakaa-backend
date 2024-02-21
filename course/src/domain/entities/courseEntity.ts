import { Date, ObjectId } from "mongoose";

interface Lesson {
    title: string;
    description: string;
    thumbnail: string;
    video: {
        high: string;
        medium: string;
        low: string;
    };
    attachments?: {
        title: string;
        url: string;
    }
}

interface Trial {
    title: string;
    description: string;
    thumbnail: string;
    video: {
        high: string;
        medium: string;
        low: string;
    }
}

enum PricingType {
    free = 'free',
    paid = 'paid'
}

interface Pricing {
    amount: number;
    type: PricingType;
}

export interface CourseEntity {
    _id?: ObjectId;
    title: string;
    description: string;
    thumbnail: string;
    instructorRef: ObjectId;
    categoryRef: ObjectId;
    language?: string;
    lessons: [Lesson]
    trial?: Trial;
    createdAt?: Date;
    updatedAt?: Date;
    pricing: Pricing;
    isBlocked?: boolean | string;
    isPublished?: boolean | string;
}
