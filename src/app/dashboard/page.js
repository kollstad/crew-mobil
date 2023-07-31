'use client'

import Navigation from '../components/breeze-next/Navigation'
import { useAuth } from '../components/hooks/auth'

export default function Dashboard() {
    const { user } = useAuth({ middleware: 'auth' })


    return (
        <div>
            <Navigation user={user} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
