import { ICheckUsernameUseCase } from "@/domain/useCases";

export const getAvailableUsername = async (
    suggestions: string[],
    checkDatabaseAvailabiltiy: ICheckUsernameUseCase
) => {

    const availableSuggestions: string[] = [];

    for (const suggestion of suggestions) {

        const isAvailable = await checkDatabaseAvailabiltiy
            .execute(suggestion);

        if (isAvailable) {
            availableSuggestions.push(suggestion);
        }
    }

    return availableSuggestions;

}