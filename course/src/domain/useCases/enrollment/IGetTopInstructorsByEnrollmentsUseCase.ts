export interface IGetTopInstructorsByEnrollmentsUseCase {
    execute(): Promise<
    {
        instructorDetails: any
        totalEnrollments: number;
    }[] | null>;
}