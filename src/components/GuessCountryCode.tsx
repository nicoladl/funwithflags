'use client';

import React, {FormEvent, useEffect, useState} from 'react';
import {inputCountryCode} from "@/store/UiSlice/UiSlice";
import styles from './GuessCountryCode.module.scss'
import {useAppDispatch} from "@/store/hooks";

export const GuessCountryCode = () => {
    const dispatch = useAppDispatch()
    const [charOne, setCharOne] = useState('');
    const [charTwo, setCharTwo] = useState('');

    useEffect((): void => {
        if (`${charOne}${charTwo}`.length === 2) {
            dispatch(inputCountryCode(`${charOne}${charTwo}`))
        }
    }, [charOne, charTwo])

    const onInputFirst = (event: FormEvent): void => {
        const { value } = event.target as unknown as { value: string };
        setCharOne(value)
    }

    const onInputSecond = (event: FormEvent): void => {
        const { value } = event.target as unknown as { value: string };
        setCharTwo(value)
    }

    return (
        <>
            <input className={styles.input} type="text" maxLength={1} onInput={onInputFirst}/>
            <input className={styles.input} type="text" maxLength={1} onInput={onInputSecond}/>
        </>
    );
}