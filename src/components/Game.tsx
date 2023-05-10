'use client';

import {GameContainer} from "@/components/GameContainer";
import {RandomCountry} from "@/components/RandomCountry";
import {Tile} from "@/components/Tile";
import {AlignCenter} from "@/components/AlignCenter";
import {MapContainer} from "@/components/MapContainer";
import {CountryDetails} from "@/components/CountryDetails";
import {useAppSelector} from "@/store/hooks";
import {UiState} from "@/store/UiSlice/UiSlice";

export const Game = () => {
    const isWinning: boolean = useAppSelector((state: { ui: UiState }) => state.ui.isWinning)

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

            {isWinning && (<CountryDetails/>)}
        </>
    )
}
