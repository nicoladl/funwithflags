'use client';

import React, {useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import {Country} from "@/gql/graphql";

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export const CountrySelect = () => {
    const [country, setCountry] = useState('US');
    const {data, loading, error} = useQuery(LIST_COUNTRIES);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return (
        <>
            <select value={country} onChange={event => setCountry(event.target.value)}>
                {data.countries.map((country: Country) => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
        </>
    );
}