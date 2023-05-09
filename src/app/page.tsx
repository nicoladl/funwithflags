'use client';

import {ApolloProvider} from '@apollo/client';
import client from "../../apollo-client";
import {Provider} from "react-redux";
import store from "@/store/store";
import {GameContainer} from "@/components/GameContainer";
import {RandomCountry} from "@/components/RandomCountry";
import {Tile} from "@/components/Tile";
import {AlignCenter} from "@/components/AlignCenter";
import {MapContainer} from "@/components/MapContainer";
import RootLayout from "@/app/layout";

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <RootLayout>
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
                </RootLayout>
            </Provider>
        </ApolloProvider>
    )
}
