import 'tailwindcss/tailwind.css'

export default function DashboardLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}) {
    
    return (
        <html lang="en">
            <body className="min-h-screen bg-gray-100">
                <main>{children}</main>
            </body>
        </html>
    )
}

export const metadata = {
    manifest: '/manifest.json',
    themeColor: '#0070f3',
}
