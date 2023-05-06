'use client';

import React, {useEffect} from 'react';
import {gql, useLazyQuery} from '@apollo/client';

const COUNTRY = gql`
    query country ($code: ID!) {
        country (code: $code) {
            capital
            continent {
                name
            }
        }
    }
`;

type CountryDetails = {
    code: string;
}

export const CountryDetails = ({code}: CountryDetails) => {
    const [country, {called, loading, error, data}] = useLazyQuery(COUNTRY);

    useEffect(() => {
        country({variables: {code}})
    }, [code])

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return data && (
        <>
            <p>{data.country.capital}</p>
            <p>{data.country.continent.name}</p>
        </>
    );
}