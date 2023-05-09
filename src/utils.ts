type Country = {
    code: string;
    name: string;
    emoji: null;
};

export const getRandomCountryCode = (countries: Array<Country>) => {
    return countries[Math.floor(Math.random() * countries.length)]
}