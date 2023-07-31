import 'tailwindcss/tailwind.css'
import Head from 'next/head'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}) {
    return (
        <html lang="en">
            <Head>
                <link
                    href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>{children}</body>
        </html>
    )
}

export const metadata = {
    manifest: '/manifest.json',
    themeColor: '#0070f3',
}
