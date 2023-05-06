import {CountrySelect} from "@/components/CountrySelect";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {MapContainer} from "@/components/MapContainer";

export const GameContainer = () => {
    const [guessed, setGuessed] = useState(false);
    const randomCountryCode = useSelector(state => state.ui.randomCountry.code)
    const guessedCountryCode = useSelector(state => state.ui.guessedCountryCode)

    useEffect(() => {
        setGuessed(randomCountryCode === guessedCountryCode)
    }, [guessedCountryCode, randomCountryCode])

    return (
        <>
            <CountrySelect/>
            {guessed && (
                <>
                    <h2>BAZINGA</h2>
                    <MapContainer/>
                </>
            )}
        </>
    )
}