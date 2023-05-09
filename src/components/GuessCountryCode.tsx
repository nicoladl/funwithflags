'use client';

import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {inputCountryCode} from "@/store/UiSlice/UiSlice";

export const GuessCountryCode = () => {
    const dispatch = useDispatch()
    const [charOne, setCharOne] = useState('');
    const [charTwo, setCharTwo] = useState('');

    useEffect(() => {
        if (`${charOne}${charTwo}`.length === 2) {
            dispatch(inputCountryCode(`${charOne}${charTwo}`))
        }
    }, [charOne, charTwo])

    const onInputFirst = (event: Event) => {
        const { value } = event.target as unknown as { value: string };
        setCharOne(value)
    }

    const onInputSecond = (event: Event) => {
        const { value } = event.target as unknown as { value: string };
        setCharTwo(value)
    }

    return (
        <>
            <input type="text" maxLength="1" onInput={onInputFirst}/>
            <input type="text" maxLength="1" onInput={onInputSecond}/>
        </>
    );
}