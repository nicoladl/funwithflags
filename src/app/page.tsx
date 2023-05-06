'use client';

import {ApolloProvider} from '@apollo/client';
import client from "../../apollo-client";
import {Provider} from "react-redux";
import store from "@/store/store";
import {GameContainer} from "@/components/GameContainer";
import {RandomCountry} from "@/components/RandomCountry";

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <h1>FUN WITH FLAGS</h1>
                <p>guess the country</p>
                <RandomCountry/>
                <div>
                    <GameContainer/>
                </div>
            </Provider>
        </ApolloProvider>
    )
}
