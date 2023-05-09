import {CountrySelect} from "@/components/CountrySelect";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GuessCountryCode} from "@/components/GuessCountryCode";
import {Congrats} from "@/components/Congrats";
import {Tile} from "@/components/Tile";

export const GameContainer = () => {
    const [countryGuessed, setCountryGuessed] = useState(false);
    const [countryCodeGuessed, setCountryCodeGuessed] = useState(false);
    const randomCountryCode = useSelector(state => state.ui.randomCountry.code)
    const guessedCountryCode = useSelector(state => state.ui.guessedCountryCode)
    const inputCountryCode = useSelector(state => state.ui.inputCountryCode)

    useEffect(() => {
        if (randomCountryCode && guessedCountryCode) {
            setCountryGuessed(randomCountryCode === guessedCountryCode)
        }
    }, [guessedCountryCode, randomCountryCode])

    useEffect(() => {
        if (inputCountryCode.length >= 2) {
            setCountryCodeGuessed(randomCountryCode === inputCountryCode)
        }
    }, [inputCountryCode])

    return (
        <>
            <CountrySelect/>
            {countryGuessed && (
                <>
                    <Tile>
                        <Congrats/>
                    </Tile>
                    <Tile>
                        <>
                            <p>Now guess the country code</p>
                            <GuessCountryCode/>
                            {countryCodeGuessed && (
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