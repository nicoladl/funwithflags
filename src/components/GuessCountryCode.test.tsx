import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {GuessCountryCode} from "@/components/GuessCountryCode";
import {useAppDispatch} from "@/store/hooks";
import {beforeEach} from "@jest/globals";

jest.mock('@/store/hooks')

describe('GuessCountryCode', () => {
    beforeEach(() => {
        useAppDispatch.mockImplementation((arg: any) => arg)
    })

    it("should render two country code inputs", async () => {
        render(<GuessCountryCode/>)
        const inputs = screen.getAllByRole('textbox')
        expect(inputs.length).toBe(2)
    });

    it("should trigger the first onInput", async () => {
        render(<GuessCountryCode/>)
        const [input] = screen.getAllByRole('textbox')
        fireEvent.input(input, { target: { value: 'A' } })
        expect(screen.getByDisplayValue('A')).toBeInTheDocument();
    });

    it("should trigger the second onInput", async () => {
        render(<GuessCountryCode/>)
        const [input] = screen.getAllByRole('textbox')
        fireEvent.input(input, { target: { value: 'B' } })
        expect(screen.getByDisplayValue('B')).toBeInTheDocument();
    });
});
