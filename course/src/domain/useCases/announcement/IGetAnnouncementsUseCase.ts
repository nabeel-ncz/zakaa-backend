import { AnnouncementEntity } from "@/domain/entities";

export interface IGetAnnouncementsUseCase {
    execute(page?: number, limit?: number): Promise<AnnouncementEntity[] | null>;
}