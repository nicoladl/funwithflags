import {CountrySelect} from "@/components/CountrySelect";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GuessCountryCode} from "@/components/GuessCountryCode";

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
        setCountryCodeGuessed(randomCountryCode === inputCountryCode)
    }, [inputCountryCode])

    return (
        <>
            <CountrySelect/>
            {countryGuessed && (
                <>
                    <h2>CONGRATULATIONS</h2>
                    <h1>🎉🎉🎉</h1>
                    <p>Now guess the country code</p>
                    <GuessCountryCode/>
                    {countryCodeGuessed && (
                        <p>BRAVO</p>
                    )}
                </>
            )}
        </>
    )
}