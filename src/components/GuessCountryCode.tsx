'use client';

import React, {useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/client';
import {useDispatch} from "react-redux";
import {guessedCountry} from "@/store/UiSlice/UiSlice";
import {COUNTRIES_CONTAIN} from "@/gql/queries";

export const GuessCountryCode = () => {
    const dispatch = useDispatch()
    const [charOne, setCharOne] = useState(null);
    const [charTwo, setCharTwo] = useState(null);
    const [loadCountries, {called, loading, error, data}] = useLazyQuery(COUNTRIES_CONTAIN);

    useEffect(() => {
        console.log(`${charOne}${charTwo}`)
        if (`${charOne}${charTwo}`.length === 2) {
            loadCountries({ variables: { code: `${charOne}${charTwo}` } })
        }
    }, [charOne, charTwo])

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    const onInputFirst = event => {
        setCharOne(event.target.value)
    }

    const onInputSecond = event => {
        setCharTwo(event.target.value)
    }

    return (
        <>
            <input type="text" maxLength="1" onInput={onInputFirst}/>
            <input type="text" maxLength="1" onInput={onInputSecond}/>
        </>
    );
}