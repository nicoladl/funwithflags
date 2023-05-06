'use client';

import React, {useEffect, useState} from 'react';
import {gql, useLazyQuery, useQuery} from '@apollo/client';
import {CountryDetails} from "@/components/CountryDetails";
import {randomCountryCode} from "@/store/UiSlice/UiSlice";
import {useDispatch} from "react-redux";

const LIST_COUNTRIES = gql`
    {
        countries {
            code
            emoji
        }
    }
`;

export const RandomCountry = () => {
    const [randomCountry, setRandomCountry] = useState({
        code: '',
        emoji: null,
    })
    const dispatch = useDispatch()
    const [loadCountries, {called, loading, error, data}] = useLazyQuery(LIST_COUNTRIES);

    // fetch the countries
    useEffect(() => {
        loadCountries()
    }, [])

    // if data get a random country
    useEffect(() => {
        if (data) {
            setRandomCountry(data.countries[Math.floor(Math.random() * data.countries.length)])
        }
    }, [data])

    // if random country dispatch
    useEffect(() => {
        dispatch(randomCountryCode(randomCountry.code))
    }, [randomCountry])

    // const {data, loading, error} = useQuery(LIST_COUNTRIES);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return data && (
        <>
            <p style={{ fontSize: '10em' }}>{randomCountry.emoji}</p>
            <CountryDetails code={randomCountry.code}/>
            <button onClick={() => loadCountries()}>refresh</button>
        </>
    );
}