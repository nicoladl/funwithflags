import React from "react";
import {getByText, render} from "@testing-library/react";
import {AlignCenter} from "./AlignCenter";

describe('AlignCenter', () => {
    it("should render the child component", async () => {
        const { container } = render(
            <AlignCenter>
                <p>mock child</p>
            </AlignCenter>
        );

        expect(getByText(container, 'mock child')).toBeTruthy()
    });
});
