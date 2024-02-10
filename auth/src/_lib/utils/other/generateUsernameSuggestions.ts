export const generateUsernameSuggestions = (
    fName: string,
    lName: string
) => {
    
    const firstInitial = fName.charAt(0).toUpperCase();
    const lastInitial = lName.charAt(0).toUpperCase();

    const suggestions = [
        `${firstInitial}_${fName}`,
        `${firstInitial}_${lName}`,
        `${fName}_${lastInitial}`,
        `${lName}_${lastInitial}`,
    ];

    return suggestions;
}