'use client'
import AuthCard from '../../components/breeze-next/AuthCard'
import Button from '../../components/breeze-next/Button'
import Input from '@/app/components/breeze-next/Input'
import InputError from '@/app/components/breeze-next/InputError'
import Label from '@/app/components/breeze-next/Label'
import { useAuth } from '@/app/components/hooks/auth'
import { useState } from 'react'
import updateProfile from '@/app/components/hooks/updateProfile'
import Navigation from '@/app/components/breeze-next/Navigation'

const ProfilePage = () => {
    // const handleFileInputChange = event => {
    //     const file = event.target.files[0]
    //     setUserImage(file)
    // }

    const { user } = useAuth({ middleware: 'auth' })
    // console.log(user)

    const [firstname, setFirstname] = useState(user?.firstname)
    const [lastname, setLastname] = useState(user?.lastname)
    const [phone, setPhone] = useState(user?.phone)
    const [email, setEmail] = useState(user?.email)
    // const [userImage, setUserImage] = useState(user?.user_image)
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        // console.log(firstname, lastname, phone, email)

        updateProfile(user?.id, {
            firstname,
            lastname,
            phone,
            email,
            setErrors,
        })
    }

    return (
        <>
            <Navigation user={user} />
            <AuthCard>
                <h1 className="text-center text-3xl">Profil</h1>
                <form onSubmit={submitForm} encType="multipart/form-data">
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

                    {/* Name */}
                    <div className="flex flex-col items-center">
                        <Label htmlFor="firstname">Fornavn</Label>

                        <Input
                            id="firstname"
                            type="text"
                            value={firstname}
                            className="block mt-1 w-full"
                            onChange={event => setFirstname(event.target.value)}
                            required
                        />

                        <InputError
                            messages={errors.firstName}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <Label htmlFor="surname">Etternavn</Label>

                        <Input
                            id="surname"
                            type="text"
                            value={lastname}
                            className="block mt-1 w-full"
                            onChange={event => setLastname(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.lastname}
                            className="mt-2"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4 flex flex-col items-center">
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
                    </div>

                    {/* Picture */}
                    {/* <div className="mt-4 flex flex-col items-center">
                    <img></img>

                    <Label htmlFor="picture">Bilde</Label>

                    <Input
                        id="picture"
                        type="file"
                        className="block mt-1 w-full"
                        onChange={handleFileInputChange}
                        required
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div> */}

                    <div className="justify-end mt-4 flex flex-col items-center">
                        <Button className="ml-4">Lagre</Button>
                    </div>
                </form>
            </AuthCard>
        </>
    )
}

export default ProfilePage
