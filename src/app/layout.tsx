'use client';

import './globals.css'
import {Roboto} from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning={true}
                className={roboto.className}
            >
                {children}
            </body>
        </html>
    )
}
