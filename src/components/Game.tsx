'use client';

import {useSelector} from "react-redux";
import {GameContainer} from "@/components/GameContainer";
import {RandomCountry} from "@/components/RandomCountry";
import {Tile} from "@/components/Tile";
import {AlignCenter} from "@/components/AlignCenter";
import {MapContainer} from "@/components/MapContainer";
import {CountryDetails} from "@/components/CountryDetails";

export const Game = () => {
    const winning = useSelector(state => state.ui.winning)

    return (
        <>
            <MapContainer/>

            <AlignCenter>
                <Tile>
                    <>
                        <h1>FUN WITH FLAGS</h1>
                        <p>Guess the country</p>
                        <RandomCountry/>
                    </>
                </Tile>
            </AlignCenter>
            <AlignCenter>
                <Tile>
                    <GameContainer/>
                </Tile>
            </AlignCenter>

            {winning && (<CountryDetails/>)}
        </>
    )
}
