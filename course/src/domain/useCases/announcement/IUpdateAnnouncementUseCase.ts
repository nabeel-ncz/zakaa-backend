import { AnnouncementEntity } from "@/domain/entities";

export interface IUpdateAnnouncementUseCase {
    execute(data: AnnouncementEntity): Promise<AnnouncementEntity | null>;
}