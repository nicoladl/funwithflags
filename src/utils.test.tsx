import React from "react";
import {Country, getRandomCountryCode} from "@/utils";

const italyMock: Country = {
    code: 'IT',
    name: 'Italy',
    emoji: null,
}

const countriesMock: Array<Country> = [italyMock]

// todo: improve this test
describe('getRandomCountryCode', () => {
    it("should render the child component", async () => {
        const randomCountryCode: Country = getRandomCountryCode(countriesMock)

        expect(randomCountryCode).toBe(italyMock)
    });
});
