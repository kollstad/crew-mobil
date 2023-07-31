import 'tailwindcss/tailwind.css'
import Navigation from '../components/breeze-next/Navigation'

export default function DashboardLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-100">
                <Navigation user={user} />

                {/* Page Heading */}
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>

                {/* Page Content */}
                <main>{children}</main>
            </body>
        </html>
    )
}

export const metadata = {
    manifest: '/manifest.json',
    themeColor: '#0070f3',
}
