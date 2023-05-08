'use client';

import React, {useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/client';
import {useDispatch} from "react-redux";
import {COUNTRIES} from "@/gql/queries";
import {randomCountryCode} from "@/store/UiSlice/UiSlice";
import {CountryDetails} from "@/components/CountryDetails";
import styles from './RandomCountry.module.scss'

export const RandomCountry = () => {
    const [randomCountry, setRandomCountry] = useState({
        code: '',
        name: '',
        emoji: null,
    })
    const dispatch = useDispatch()
    const [loadCountries, {called, loading, error, data}] = useLazyQuery(COUNTRIES);

    const onRefreshRandomCountry = () => {
        loadCountries()
    }

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
        dispatch(randomCountryCode({code: randomCountry.code, name: randomCountry.name}))
    }, [randomCountry])

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return data && (
        <>
            <p style={{ fontSize: '10em' }}>{randomCountry.emoji}</p>
            <p><strong>Hints</strong></p>
            <CountryDetails code={randomCountry.code}/>
            <button className={styles.button} onClick={onRefreshRandomCountry}>new random flag</button>
        </>
    );
}