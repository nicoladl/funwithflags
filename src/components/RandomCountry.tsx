'use client';

import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {CountryDetails} from "@/components/CountryDetails";

const LIST_COUNTRIES = gql`
    {
        countries {
            code
            emoji
        }
    }
`;

export const RandomCountry = () => {
    const {data, loading, error} = useQuery(LIST_COUNTRIES);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    const randomCountry = data.countries[Math.floor(Math.random() * data.countries.length)]

    return data && (
        <>
            <p style={{ fontSize: '10em' }}>{randomCountry.emoji}</p>
            <CountryDetails code={randomCountry.code}/>
        </>
    );
}