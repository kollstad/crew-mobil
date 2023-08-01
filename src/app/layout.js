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
    viewport: {
        initialScale: 1,
        viewportFit: 'cover',
    },
    itunes: {
        appId: 'myAppStoreID',
        appArgument: 'myAppArgument',
    },
    appleWebApp: {
        title: 'Apple Web App',
        statusBarStyle: 'black-translucent',
        startupImage: [
            '/assets/startup/apple-touch-startup-image-768x1004.png',
            {
                url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
                media: '(device-width: 768px) and (device-height: 1024px)',
            },
        ],
    },
}
