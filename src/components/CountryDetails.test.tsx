import React from "react";
import {render, screen} from "@testing-library/react";
import {MockedProvider} from "@apollo/client/testing";
import {CountryDetails} from "./CountryDetails";
import {COUNTRY} from "@/gql/queries";

const mocksLoading = [
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

const mocksError = [
    {
        request: {
            query: COUNTRY,
            variables: { code: 'IT' }
        },
        error: {
            message: new Error("An error occurred")
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

describe('CountryDetails', () => {
    it("should render the loading state", async () => {
        const { container } = render(
            <MockedProvider mocks={mocksLoading} addTypename={false}>
                <CountryDetails code={'IT'}/>
            </MockedProvider>
        );

        expect(await screen.findByText("Loading...")).toBeInTheDocument();
    });

    it("should render the error message", async () => {
        render(
            <MockedProvider mocks={mocksError} addTypename={false}>
                <CountryDetails code={'IT'}/>
            </MockedProvider>
        );

        expect(await screen.findByText("Error: An error occurred")).toBeInTheDocument();
    });

    it("should render Italy", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <CountryDetails code={'IT'}/>
            </MockedProvider>
        );

        expect(await screen.findByText("Capital: Rome")).toBeInTheDocument();
        expect(await screen.findByText("Continent: Europe")).toBeInTheDocument();
    });
});
