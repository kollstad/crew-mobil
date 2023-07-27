import 'tailwindcss/tailwind.css'
import { useEffect } from 'react'

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker
                    .register('/sw.js')
                    .then(registration => {
                        console.log('Service Worker registered:', registration)
                    })
                    .catch(error => {
                        console.error(
                            'Service Worker registration failed:',
                            error,
                        )
                    })
            })
        }
    }, [])

    return <Component {...pageProps} />
}

export default App
