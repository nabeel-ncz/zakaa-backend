import { AnnouncementEntity } from "@/domain/entities";

export interface IGetAnnouncementsByInstructorIdUseCase {
    execute(id: string): Promise<AnnouncementEntity[] | null>;
}