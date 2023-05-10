import React from "react";
import {render, screen} from "@testing-library/react";
import {CountrySelect} from "@/components/CountrySelect";
import {MockedProvider} from "@apollo/client/testing";
import {COUNTRIES_SELECT_OPTIONS} from "@/gql/queries";
import {useAppDispatch} from "@/store/hooks";
import {beforeEach} from "@jest/globals";

jest.mock('@/store/hooks')

const mocksLoading = [
    {
        request: {
            query: COUNTRIES_SELECT_OPTIONS,
        },
    }
];

const mocksError = [
    {
        request: {
            query: COUNTRIES_SELECT_OPTIONS,
        },
        error: {
            name: 'Error name mock',
            message: 'An error occurred'
        }
    }
];

const mocks = [
    {
        request: {
            query: COUNTRIES_SELECT_OPTIONS,
        },
        result: {
            data: {
                countries: [
                    {
                        code: 'IT',
                        name: 'Italy',
                    },
                    {
                        code: 'CH',
                        name: 'Switzerland',
                    },
                ]
            }
        }
    }
];

describe('CountrySelect', () => {
    beforeEach(() => {
        useAppDispatch.mockImplementation((arg: any) => arg)
    })

    it("should render the loading state", async () => {
        render(
            <MockedProvider mocks={mocksLoading} addTypename={false}>
                <CountrySelect/>
            </MockedProvider>
        )
        expect(screen.getByText('Loading...')).toBeTruthy()
    });

    it("should render the error message", async () => {
        render(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <CountrySelect/>
            </MockedProvider>
        );

        expect(await screen.findByText("An error occurred")).toBeInTheDocument();
    });

    it("should render Italy details", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountrySelect/>
            </MockedProvider>
        );

        expect(await screen.findByText('Italy')).toBeInTheDocument();
        expect(await screen.findByText('Switzerland')).toBeInTheDocument();
        const select = screen.getByRole('combobox')
        expect(select).toBeInTheDocument();
    });
});
