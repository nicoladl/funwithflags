import React from "react";
import {render, screen} from "@testing-library/react";
import {MockedProvider} from "@apollo/client/testing";
import {CountryHints} from "./CountryHints";
import {COUNTRY} from "@/gql/queries";

const mocksLoading = [
    {
        request: {
            query: COUNTRY,
            variables: { code: 'IT' }
        },
    }
];

const mocksError = [
    {
        request: {
            query: COUNTRY,
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
            query: COUNTRY,
            variables: { code: 'IT' }
        },
        result: {
            data: {
                country: {
                    capital: "Rome",
                    continent: {
                        name: "Europe"
                    },
                }
            }
        }
    }
];

describe('CountryHits', () => {
    it("should render the loading state", async () => {
        render(
            <MockedProvider mocks={mocksLoading} addTypename={false}>
                <CountryHints code={'IT'}/>
            </MockedProvider>
        );

        expect(await screen.findByText("Loading...")).toBeInTheDocument();
    });

    it("should render the error message", async () => {
        render(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <CountryHints code={'IT'}/>
            </MockedProvider>
        );

        expect(await screen.findByText("An error occurred")).toBeInTheDocument();
    });

    it("should render Italy", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountryHints code={'IT'}/>
            </MockedProvider>
        );

        expect(await screen.findByText("Capital: Rome")).toBeInTheDocument();
        expect(await screen.findByText("Continent: Europe")).toBeInTheDocument();
    });
});
