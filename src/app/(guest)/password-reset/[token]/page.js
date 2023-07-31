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
import { useState } from 'react'
// import { useRouter } from 'next/navigation'

const PasswordReset = () => {
    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    // useEffect(() => {
    //     setEmail(router.query.email || '')
    // }, [router.query.email])

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
                <div>
                    <Label htmlFor="email">Email</Label>

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
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="block mt-1 w-full"
                        onChange={event => setPassword(event.target.value)}
                        required
                    />

                    <InputError messages={errors.password} className="mt-2" />
                </div>

                {/* Confirm Password */}
                <div className="mt-4">
                    <Label htmlFor="passwordConfirmation">
                        Confirm Password
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
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button>Reset Password</Button>
                </div>
            </form>
        </AuthCard>
    )
}

export default PasswordReset
