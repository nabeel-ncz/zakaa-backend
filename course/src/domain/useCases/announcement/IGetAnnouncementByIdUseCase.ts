import { AnnouncementEntity } from "@/domain/entities";

export interface IGetAnnouncementByIdUseCase {
    execute(id: string): Promise<AnnouncementEntity | null>;
}