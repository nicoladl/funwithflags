import {CountrySelect} from "@/components/CountrySelect";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GuessCountryCode} from "@/components/GuessCountryCode";

export const GameContainer = () => {
    const [countryGuessed, setCountryGuessed] = useState(false);
    const randomCountryCode = useSelector(state => state.ui.randomCountry.code)
    const guessedCountryCode = useSelector(state => state.ui.guessedCountryCode)

    useEffect(() => {
        if (randomCountryCode && guessedCountryCode) {
            setCountryGuessed(randomCountryCode === guessedCountryCode)
        }
    }, [guessedCountryCode, randomCountryCode])

    return (
        <>
            <CountrySelect/>
            {countryGuessed && (
                <>
                    <h2>CONGRATULATIONS</h2>
                    <p>Now guess the country code</p>
                    <GuessCountryCode/>
                </>
            )}
        </>
    )
}