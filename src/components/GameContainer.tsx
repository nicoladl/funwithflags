import {CountrySelect} from "@/components/CountrySelect";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const GameContainer = () => {
    const [guessed, setGuessed] = useState(false);
    const randomCountryCode = useSelector(state => state.ui.randomCountryCode)
    const guessedCountryCode = useSelector(state => state.ui.guessedCountryCode)

    useEffect(() => {
        setGuessed(randomCountryCode === guessedCountryCode)
    }, [guessedCountryCode, randomCountryCode])

    return (
        <>
            <CountrySelect/>
            {guessed && <h2>BAZINGA</h2>}
        </>
    )
}