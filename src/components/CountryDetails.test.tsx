import React from "react";
import {render, screen} from "@testing-library/react";
import {beforeEach} from "@jest/globals";
import {initialState, UiState} from "@/store/UiSlice/UiSlice";
import {CountryDetails} from "@/components/CountryDetails";
import {MockedProvider} from "@apollo/client/testing";
import {COUNTRY_DETAILS} from "@/gql/queries";

jest.mock('@/store/hooks')

const mocks = [
    {
        request: {
            query: COUNTRY_DETAILS,
            variables: { code: 'IT' }
        },
        result: {
            data: {
                country: {
                    phone: 'abc',
                    currency: 'abc',
                    native: 'abc',
                    languages: [{name: 'abc'}],
                    states: [{name: 'abc'}],
                }
            }
        }
    },
];

describe('CountryDetails', () => {
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

    it("should render the loading state", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountryDetails/>
            </MockedProvider>
        )
        expect(screen.getByText('Loading...')).toBeTruthy()
    });
});
