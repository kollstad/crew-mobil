'use client'

import ApplicationLogo from '@/app/components/breeze-next/ApplicationLogo'
import AuthCard from '@/app/components/breeze-next/AuthCard'
import AuthSessionStatus from '@/app/components/breeze-next/AuthSessionStatus'
import Button from '@/app/components/breeze-next/Button'
import Input from '@/app/components/breeze-next/Input'
import InputError from '@/app/components/breeze-next/InputError'
import Label from '@/app/components/breeze-next/Label'
import Link from 'next/link'
import { useAuth } from '@/app/components/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    // useEffect(() => {
    //     if (router.query.reset?.length > 0 && errors.length === 0) {
    //         setStatus(atob(router.query.reset))
    //     } else {
    //         setStatus(null)
    //     }
    // })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    const newLocal =
        'block mt-4 flex justify-end mt-4 flex flex-col items-center'

    return (
        <AuthCard
            logo={
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            }>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />

            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div className={newLocal}>
                    <Label htmlFor="email">E-post</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                {/* Password */}
                <div className="justify-end mt-4 flex flex-col items-center">
                    <Label htmlFor="password">Passord</Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    <InputError messages={errors.password} className="mt-2" />
                </div>

                {/* Remember Me */}
                <div className={newLocal}>
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className={newLocal}>
                    <Link
                        href="/forgot-password"
                        className="underline text-sm text-gray-600 hover:text-gray-900">
                        Forgot your password?
                    </Link>
                </div>
                <div className={newLocal}>
                    <Button>Login</Button>
                </div>
            </form>
        </AuthCard>
    )
}

export default Login