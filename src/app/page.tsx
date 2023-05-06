'use client';

import {CountrySelect} from "@/components/CountrySelect";
import {ApolloProvider} from '@apollo/client';
import client from "../../apollo-client";
import {RandomCountry} from "@/components/RandomCountry";

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <h1>FUN WITH FLAGS</h1>
            <p>guess the country</p>
            <RandomCountry/>
            <CountrySelect/>
        </ApolloProvider>
    )
}
