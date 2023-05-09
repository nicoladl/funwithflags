import {Tile} from "@/components/Tile";
import {AlignCenter} from "@/components/AlignCenter";
import styles from './CountryDetails.module.scss'
import {useSelector} from "react-redux";
import {useLazyQuery} from "@apollo/client";
import {COUNTRY_DETAILS} from "@/gql/queries";
import React, {useEffect, useState} from "react";

const initialCountry = {
    phone: '',
    currency: '',
    native: '',
    languages: [{name: ''}],
    states: [{name: ''}],
}

export const CountryDetails = () => {
    const [country, setCountry] = useState(initialCountry)
    const countryCode = useSelector(state => state.ui.randomCountry.code)
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
                            <p>Languages: {country.languages.map((language: string, index: number) =>
                                <span>{language.name}{index < country.languages.length - 1 ? ', ' : ''}</span>)}</p>}
                        {!!country.states.length && <p>States: {country.states.map((state: string, index: number) =>
                            <span>{state.name}{index < country.states.length - 1 ? ', ' : ''}</span>)}</p>}
                    </>
                </Tile>
            </div>
        </AlignCenter>
    )
}