import {CountrySelect} from "@/components/CountrySelect";
import {useEffect, useState} from "react";
import {GuessCountryCode} from "@/components/GuessCountryCode";
import {Congrats} from "@/components/Congrats";
import {Tile} from "@/components/Tile";
import {isNotWinning, isWinning, UiState} from "@/store/UiSlice/UiSlice";
import {useAppDispatch, useAppSelector} from "@/store/hooks";

export const GameContainer = () => {
    const dispatch = useAppDispatch()
    const [countryGuessed, setCountryGuessed] = useState(false);
    const randomCountryCode: string = useAppSelector((state: { ui: UiState }) => state.ui.randomCountry.code)
    const guessedCountryCode: string = useAppSelector((state: { ui: UiState }) => state.ui.guessedCountryCode)
    const inputCountryCode: string = useAppSelector((state: { ui: UiState }) => state.ui.inputCountryCode)
    const winning: boolean = useAppSelector((state: { ui: UiState }) => state.ui.winning)

    useEffect((): void => {
        if (randomCountryCode && guessedCountryCode) {
            guessedCountryCode === randomCountryCode ? dispatch(isWinning()) : dispatch(isNotWinning())
        }
    }, [guessedCountryCode, randomCountryCode])

    useEffect((): void => {
        if (inputCountryCode.length >= 2) {
            setCountryGuessed(randomCountryCode === guessedCountryCode)
        }
    }, [inputCountryCode])

    return (
        <>
            {(!winning && (
                <p>Select the country name</p>
            ))}
            <Tile>
                <CountrySelect/>
            </Tile>
            {winning && (
                <>
                    <Tile>
                        <Congrats/>
                    </Tile>
                    <Tile>
                        <>
                            <p>Now guess the country code</p>
                            <GuessCountryCode/>
                            {countryGuessed && (
                                <>
                                    <Tile>
                                        <Congrats/>
                                    </Tile>
                                </>
                            )}
                        </>
                    </Tile>
                </>
            )}
        </>
    )
}