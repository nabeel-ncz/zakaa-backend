export interface InstructorApplicationEntity {
    email: string;
    phone: string;
    profession: string;
    profileDescription:string;
    linkedIn?: string;
    github?: string;
    accepted?: boolean;
}