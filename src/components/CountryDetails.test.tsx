import React from "react";
import {render, screen} from "@testing-library/react";
import {CountryDetails} from "@/components/CountryDetails";
import {MockedProvider} from "@apollo/client/testing";
import {COUNTRY_DETAILS} from "@/gql/queries";
import {useAppSelector} from "@/store/hooks";
import {beforeEach} from "@jest/globals";

jest.mock('@/store/hooks')

const mocksLoading = [
    {
        request: {
            query: COUNTRY_DETAILS,
            variables: { code: 'IT' }
        },
    }
];

const mocksError = [
    {
        request: {
            query: COUNTRY_DETAILS,
            variables: { code: 'IT' }
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
            query: COUNTRY_DETAILS,
            variables: {code: 'IT'}
        },
        result: {
            data: {
                country: {
                    currency: "currency mock",
                    native: "native mock",
                    phone: "phone mock",
                    languages: [{name: "language mock"}, {name: "second language mock"}],
                    states: [{name: "state mock"}, {name: "second state mock"}],
                }
            }
        }
    }
];

describe('CountryDetails', () => {
    beforeEach(() => {
        useAppSelector.mockImplementation(() => 'IT')
    })

    it("should render the loading state", async () => {
        render(
            <MockedProvider mocks={mocksLoading} addTypename={false}>
                <CountryDetails/>
            </MockedProvider>
        )
        expect(screen.getByText('Loading...')).toBeTruthy()
    });

    it("should render the error message", async () => {
        render(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <CountryDetails/>
            </MockedProvider>
        );

        expect(await screen.findByText("An error occurred")).toBeInTheDocument();
    });

    it("should render Italy details", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountryDetails/>
            </MockedProvider>
        );

        expect(await screen.findByText("Currency: currency mock")).toBeInTheDocument();
        expect(await screen.findByText("Native: native mock")).toBeInTheDocument();
        expect(await screen.findByText("Phone: phone mock")).toBeInTheDocument();
        expect(await screen.findByText("language mock,")).toBeInTheDocument();
        expect(await screen.findByText("second language mock")).toBeInTheDocument();
        expect(await screen.findByText("state mock,")).toBeInTheDocument();
        expect(await screen.findByText("second state mock")).toBeInTheDocument();
    });
});
