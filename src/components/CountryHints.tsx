'use client';

import React, {useEffect} from 'react';
import {useLazyQuery} from '@apollo/client';
import {COUNTRY} from "@/gql/queries";

type CountryHits = {
    code: string;
};

export const CountryHints = ({code}: CountryHits) => {
    const [country, {loading, error, data}] = useLazyQuery(COUNTRY);

    useEffect(() => {
        country({variables: {code}});
    }, [code]);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return data && (
        <>
            <p>Capital: {data.country.capital}</p>
            <p>Continent: {data.country.continent.name}</p>
        </>
    );
};