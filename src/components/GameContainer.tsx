import {CountrySelect} from "@/components/CountrySelect";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GuessCountryCode} from "@/components/GuessCountryCode";
import {Congrats} from "@/components/Congrats";
import {Tile} from "@/components/Tile";
import {isNotWinning, isWinning} from "@/store/UiSlice/UiSlice";

export const GameContainer = () => {
    const dispatch = useDispatch()
    const [countryGuessed, setCountryGuessed] = useState(false);
    const randomCountryCode = useSelector(state => state.ui.randomCountry.code)
    const guessedCountryCode = useSelector(state => state.ui.guessedCountryCode)
    const inputCountryCode = useSelector(state => state.ui.inputCountryCode)
    const winning = useSelector(state => state.ui.winning)

    useEffect(() => {
        if (randomCountryCode && guessedCountryCode) {
            guessedCountryCode === randomCountryCode ? dispatch(isWinning()) : dispatch(isNotWinning())
        }
    }, [guessedCountryCode, randomCountryCode])

    useEffect(() => {
        if (inputCountryCode.length >= 2) {
            setCountryGuessed(randomCountryCode === guessedCountryCode)
        }
    }, [inputCountryCode])

    return (
        <>
            <CountrySelect/>
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