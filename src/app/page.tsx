'use client';

import {ApolloProvider} from '@apollo/client';
import client from "../../apollo-client";
import {Provider} from "react-redux";
import store from "@/store/store";
import RootLayout from "@/app/layout";
import {Game} from "@/components/Game";

export default function Home() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <RootLayout>
                    <Game/>
                </RootLayout>
            </Provider>
        </ApolloProvider>
    )
}
