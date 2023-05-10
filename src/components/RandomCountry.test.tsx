import React from "react";
import {render, screen} from "@testing-library/react";
import {MockedProvider} from "@apollo/client/testing";
import {RandomCountry} from "./RandomCountry";
import {COUNTRIES} from "@/gql/queries";
import {initialState, UiState} from "@/store/UiSlice/UiSlice";
import {beforeEach} from "@jest/globals";

const mocks = [
    {
        request: {
            query: COUNTRIES,
        },
        result: {
            data: {
                countries:[
                    {
                        code: "AD",
                        name:"Andorra",
                        emoji:"🇦🇩"
                    },
                    {
                        code: "IT",
                        name:"Italy",
                        emoji:"🇦🇩"
                    }
                ]
            }
        }
    }
];

describe('RandomCountry', () => {
    let useAppSelector: UiState = initialState

    beforeEach(() => {
        useAppSelector = jest.fn().mockImplementation({
            ui: {
                ...initialState,
                randomCountry: {
                    code: 'ciao',
                },
            },
        })
    })

    it("renders without error", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <RandomCountry/>
            </MockedProvider>
        );

        expect(await screen.findByText("Loading...")).toBeInTheDocument();
    });
});
