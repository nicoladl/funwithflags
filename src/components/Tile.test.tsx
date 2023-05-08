import React from "react";
import {getByText, render} from "@testing-library/react";
import {Tile} from "./Tile";

describe('Tile', () => {
    it("should render the child component", async () => {
        const { container } = render(
            <Tile>
                <p>mock child</p>
            </Tile>
        );

        expect(getByText(container, 'mock child')).toBeTruthy()
    });
});
