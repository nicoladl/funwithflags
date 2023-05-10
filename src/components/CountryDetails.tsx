import {Tile} from "@/components/Tile";
import {AlignCenter} from "@/components/AlignCenter";
import styles from './CountryDetails.module.scss'
import {useLazyQuery} from "@apollo/client";
import {COUNTRY_DETAILS} from "@/gql/queries";
import React, {useEffect} from "react";
import {useAppSelector} from "@/store/hooks";
import {UiState} from "@/store/UiSlice/UiSlice";

type Name = { name: string }

export const CountryDetails = () => {
    const countryCode: string = useAppSelector((state: { ui: UiState }) => state.ui.randomCountry.code)
    const [loadCountry, {loading, error, data}] = useLazyQuery(COUNTRY_DETAILS);

    useEffect(() => {
        loadCountry({variables: {code: countryCode}});
    }, [countryCode]);

    if (loading || error) {
        return (
            <AlignCenter>
                <Tile>
                    <p>{error ? error.message : 'Loading...'}</p>
                </Tile>
            </AlignCenter>
        );
    }

    return data && (
        <AlignCenter>
            <div className={styles.countryDetails}>
                <Tile>
                    <>
                        <p>Currency: {data.country.currency}</p>
                        <p>Native: {data.country.native}</p>
                        <p>Phone: {data.country.phone}</p>
                        {!!data.country.languages.length &&
                            <p>Languages: {
                                data.country.languages.map((language: Name, index: number) => {
                                    return <span key={language.name}>
                                        {language.name}{index < data.country.languages.length - 1 ? ', ' : ''}
                                    </span>
                                })}
                            </p>
                        }
                        {!!data.country.states.length &&
                            <p>States: {
                                data.country.states.map((state: Name, index: number) => {
                                    return <span key={state.name}>
                                        {state.name}{index < data.country.states.length - 1 ? ', ' : ''}
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