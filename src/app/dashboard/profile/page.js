'use client'
import Button from '../../components/breeze-next/Button'
import Input from '@/app/components/breeze-next/Input'
import InputError from '@/app/components/breeze-next/InputError'
import Label from '@/app/components/breeze-next/Label'
import { useAuth } from '@/app/components/hooks/auth'
import { useState } from 'react'
import updateProfile from '@/app/components/hooks/updateProfile'
import Navigation from '@/app/components/breeze-next/Navigation'
import fetchData from '@/app/components/hooks/fetchData'
import { useEffect } from 'react'
import Image from 'next/image'

const ProfilePage = () => {
    // const handleFileInputChange = event => {
    //     const file = event.target.files[0]
    //     setUserImage(file)
    // }

    // bruker
    const { user } = useAuth({ middleware: 'auth' })

    const [firstname, setFirstname] = useState(user?.firstname)
    const [lastname, setLastname] = useState(user?.lastname)
    const [phone, setPhone] = useState(user?.phone)
    const [email, setEmail] = useState(user?.email)
    const [birth, setBirth] = useState(user?.birth)
    const [zip, setZip] = useState(user?.zip)
    const [club_id, setClub_id] = useState(user?.club_id)
    // const [userImage, setUserImage] = useState(user?.user_image)
    const [errors, setErrors] = useState([])

    const [profileUpdated, setProfileUpdated] = useState(false)

    // clubs
    const [clubs, setClubs] = useState()

    async function fetchClubs() {
        try {
            const response = await fetchData('/api/clubs')
            setClubs(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    useEffect(() => {
        fetchClubs()
    }, [])

    const submitForm = event => {
        event.preventDefault()

        const updateSuccess = updateProfile(user?.id, {
            firstname,
            lastname,
            phone,
            email,
            birth,
            zip,
            club_id,
            setErrors,
        })

        if (updateSuccess) {
            setProfileUpdated(true)
            setTimeout(() => {
                setProfileUpdated(false)
            }, 3000)
        } else {
            alert('Det skjedde en feil ved oppdatering')
        }
    }

    const defaultProfile = '/profile_default.jpg'

    return (
        <>
            <Navigation user={user} />
            <h1 className="text-center text-3xl">Profil</h1>
            <Label htmlFor="picture">Bilde</Label>
            <div className="flex items-center justify-center">
                <Image
                    id="picture"
                    src={defaultProfile}
                    width={200}
                    height={200}
                />
            </div>

            <form onSubmit={submitForm} encType="multipart/form-data">
                {/* Picture */}
                <div className="mt-4 flex flex-col items-center">
                    <Input
                        id="file"
                        type="file"
                        className="block mt-1 w-full"
                        onChange=""
                        required
                    />

                    <InputError messages={errors.email} className="mt-2" />
                </div>

                {/* Phone Number */}
                <div className="mt-4 flex flex-col items-center">
                    <Label htmlFor="phone">Telefonnummer</Label>

                    <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        className="block mt-1 w-full"
                        onChange={event => setPhone(event.target.value)}
                        required
                    />

                    <InputError messages={errors.phone} className="mt-2" />
                </div>

                {/* Fornavn */}
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

                    <InputError messages={errors.firstName} className="mt-2" />
                </div>

                {/* Etternavn */}
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

                    <InputError messages={errors.lastname} className="mt-2" />
                </div>

                {/* E-post */}
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

                {/* Fødselsdato */}
                <div className="mt-4 flex flex-col items-center">
                    <Label htmlFor="birth">Fødselsdato:</Label>

                    <Input
                        id="birth"
                        type="date"
                        value={birth}
                        className="block mt-1 w-full"
                        onChange={event => setBirth(event.target.value)}
                        required
                    />

                    <InputError messages={errors.birth} className="mt-2" />
                </div>

                {/* Postkode */}
                <div className="mt-4 flex flex-col items-center">
                    <Label htmlFor="zip">Postnummer:</Label>

                    <Input
                        id="zip"
                        type="number"
                        value={zip}
                        className="block mt-1 w-full"
                        onChange={event => setZip(event.target.value)}
                        pattern="[0-9]{4}"
                        maxlength="4"
                        placeholder="####"
                        required
                    />

                    <InputError messages={errors.zip} className="mt-2" />
                </div>

                {/* Klubbvalg */}
                <div className="mt-4 flex flex-col items-center">
                    <select
                        value={club_id}
                        id="club_id"
                        className=" w-60 h-10"
                        onChange={event => setClub_id(event.target.value)}>
                        {clubs?.map(club => (
                            <option value={String(club.id)} key={club.id}>
                                {club.club_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="justify-end mt-4 flex flex-col items-center">
                    <Button className="ml-4">Lagre</Button>
                </div>
            </form>

            {profileUpdated && (
                <h1 className="text-center">Profilen din ble oppdatert!</h1>
            )}
        </>
    )
}

export default ProfilePage
