import { CategoryEntity } from "@/domain/entities";
export interface IGetAvailableCategoriesUseCase {
    execute(): Promise<CategoryEntity[] | null>;
}