import {Tile} from "@/components/Tile";
import {AlignCenter} from "@/components/AlignCenter";
import styles from './CountryDetails.module.scss'
import {useLazyQuery} from "@apollo/client";
import {COUNTRY_DETAILS} from "@/gql/queries";
import React, {useEffect, useState} from "react";
import {useAppSelector} from "@/store/hooks";
import {UiState} from "@/store/UiSlice/UiSlice";

type Name = { name: string }

type InitialCountry = {
    phone: string,
    currency: string,
    native: string,
    languages: Array<Name>,
    states: Array<Name>,
}

const initialCountry: InitialCountry = {
    phone: '',
    currency: '',
    native: '',
    languages: [{name: ''}],
    states: [{name: ''}],
}

export const CountryDetails = () => {
    const [country, setCountry] = useState(initialCountry)
    const countryCode: string = useAppSelector((state: { ui: UiState }) => state.ui.randomCountry.code)
    const [loadCountry, {loading, error, data}] = useLazyQuery(COUNTRY_DETAILS);

    useEffect(() => {
        loadCountry({variables: {code: countryCode}});
    }, [countryCode]);

    useEffect(() => {
        if (data) {
            setCountry(data.country)
        }
    }, [data])

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return data && (
        <AlignCenter>
            <div className={styles.countryDetails}>
                <Tile>
                    <>
                        <p>Currency: {country.currency}</p>
                        <p>Native: {country.native}</p>
                        <p>Phone: {country.phone}</p>
                        {!!country.languages.length &&
                            <p>Languages: {
                                country.languages.map((language: Name, index: number) => {
                                    return <span key={language.name}>
                                        {language.name}{index < country.languages.length - 1 ? ', ' : ''}
                                    </span>
                                })}
                            </p>
                        }
                        {!!country.states.length &&
                            <p>States: {
                                country.states.map((state: Name, index: number) => {
                                    return <span key={state.name}>
                                        {state.name}{index < country.states.length - 1 ? ', ' : ''}
                                    </span>
                                })}
                            </p>
                        }
                    </>
                </Tile>
            </div>
        </AlignCenter>
    )
}