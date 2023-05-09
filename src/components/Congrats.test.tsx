import React from "react";
import {getByText, render} from "@testing-library/react";
import {Congrats} from "./Congrats";

describe('Congrats', () => {
    it("should render the child component", async () => {
        const { container } = render(
            <Congrats/>
        );

        expect(getByText(container, 'TERRIFIC')).toBeTruthy()
        expect(getByText(container, '🎉🎉🎉')).toBeTruthy()
    });
});
