'use client'
import ApplicationLogo from '../../components/breeze-next/ApplicationLogo'
import AuthCard from '../../components/breeze-next/AuthCard'
import Button from '../../components/breeze-next/Button'
import Input from '@/app/components/breeze-next/Input'
import InputError from '@/app/components/breeze-next/InputError'
import Label from '@/app/components/breeze-next/Label'
import Link from 'next/link'
import { useAuth } from '@/app/components/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard/profile',
    })

    // const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    // const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            phone,
            password,
            setErrors,
        })
    }

    return (
        <AuthCard logo={<ApplicationLogo />}>
            <form onSubmit={submitForm}>
                {/* Name */}
                {/* <div className="flex flex-col items-center">
                    <Label htmlFor="name">Navn</Label>

                    <Input
                        id="name"
                        type="text"
                        value={name}
                        className="block mt-1 w-full"
                        onChange={event => setName(event.target.value)}
                        required
                        autoFocus
                    />

                    <InputError messages={errors.name} className="mt-2" />
                </div> */}

                {/* Phone Number */}
                <div className="mt-4 flex flex-col items-center">
                    <Label htmlFor="mobile">Telefonnummer</Label>

                    <Input
                        id="mobile"
                        type="tel"
                        value={phone}
                        className="block mt-1 w-full"
                        onChange={event => setPhone(event.target.value)}
                        required
                    />

                    <InputError messages={errors.phone} className="mt-2" />
                </div>

                {/* Email Address */}
                {/* <div className="mt-4 flex flex-col items-center">
                    <Label htmlFor="email">E-post</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="block mt-1 w-full"
                        onChange={event => setEmail(event.target.value)}
                        required
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div> */}

                {/* Password */}
                <div className="mt-4 flex flex-col items-center">
                    <Label htmlFor="password">Passord</Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="new-password"
                    />

                    <InputError messages={errors.password} className="mt-2" />
                </div>

                {/* Confirm Password */}
                {/* <div className="mt-4 flex flex-col items-center">
                    <Label htmlFor="passwordConfirmation">
                        Bekreft passord
                    </Label>

                    <Input
                        id="passwordConfirmation"
                        type="password"
                        value={passwordConfirmation}
                        className="block mt-1 w-full"
                        onChange={event =>
                            setPasswordConfirmation(event.target.value)
                        }
                        required
                    />

                    <InputError
                        messages={errors.password_confirmation}
                        className="mt-2"
                    />
                </div> */}

                <div className="flex items-center justify-end mt-4 flex flex-col items-center">
                    <Link
                        href="/login"
                        className="underline text-sm text-gray-600 hover:text-gray-900">
                        Allerede registrert?
                    </Link>

                    <Button className="ml-4">Registrer</Button>
                </div>
            </form>
        </AuthCard>
    )
}

export default Register
