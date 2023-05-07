'use client';

import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import {Country} from "@/gql/graphql";
import {useDispatch} from "react-redux";
import {guessedCountry} from "@/store/UiSlice/UiSlice";
import {COUNTRIES_SELECT_OPTIONS} from "@/gql/queries";

export const CountrySelect = () => {
    const dispatch = useDispatch()
    const [country, setCountry] = useState('');
    const {data, loading, error} = useQuery(COUNTRIES_SELECT_OPTIONS);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    const onSelect = (countryCode: string) => {
        setCountry(countryCode)
        dispatch(guessedCountry(countryCode))
    }

    return (
        <>
            <select value={country} onChange={event => onSelect(event.target.value)}>
                {data.countries.map((country: Country) => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
        </>
    );
}