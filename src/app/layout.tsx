'use client';
import { Analytics } from '@vercel/analytics/react';

import './globals.css'

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
