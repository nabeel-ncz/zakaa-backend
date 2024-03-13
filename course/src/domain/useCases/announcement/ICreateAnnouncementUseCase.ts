import { AnnouncementEntity } from "@/domain/entities";

export interface ICreateAnnouncementUseCase {
    execute(data: AnnouncementEntity): Promise<AnnouncementEntity | null>;
}