'use client';

import React, {useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/client';
import {COUNTRIES} from "@/gql/queries";
import {CountryHints} from "@/components/CountryHints";
import {getRandomCountryCode} from "@/utils";
import styles from './RandomCountry.module.scss'
import {randomCountryCode} from "@/store/UiSlice/UiSlice";
import {useAppDispatch} from "@/store/hooks";

export const RandomCountry = () => {
    const dispatch = useAppDispatch()
    const [randomCountry, setRandomCountry] = useState({
        code: '',
        name: '',
        emoji: null,
    })
    const [loadCountries, {loading, error, data}] = useLazyQuery(COUNTRIES);

    const onRefreshRandomCountry = () => {
        loadCountries()
    }

    // todo: fix double call
    useEffect(() => {
        loadCountries()
    }, [])

    useEffect(() => {
        if (data) {
            setRandomCountry(getRandomCountryCode(data.countries))
        }
    }, [data])

    useEffect(() => {
        dispatch(randomCountryCode({code: randomCountry.code, name: randomCountry.name}))
    }, [randomCountry])

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return (
        <>
            {data && (
                <>
                    <p style={{ fontSize: '10em' }}>{randomCountry.emoji}</p>
                    <p><strong>Hints</strong></p>
                    <CountryHints code={randomCountry.code}/>
                </>
            )}
            <button className={styles.button} onClick={onRefreshRandomCountry}>new random flag</button>
        </>
    );
}