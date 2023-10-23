'use client'
import Button from '../../components/breeze-next/Button'
import Input from '@/app/components/breeze-next/Input'
import InputError from '@/app/components/breeze-next/InputError'
import Label from '@/app/components/breeze-next/Label'
import { useAuth } from '@/app/components/hooks/auth'
import { useState } from 'react'
import Navigation from '@/app/components/breeze-next/Navigation'
import fetchData from '@/app/components/hooks/fetchData'
import { useEffect } from 'react'
import Image from 'next/image'
import FormData from 'form-data'
import axios from '@/app/components/lib/axios'
import DeleteModal from './DeleteModal'

const ProfilePage = () => {
    // handle file change
    const handleFileInputChange = event => {
        const file = event.target.files[0]
        setUserImageFile(file)
        setUserImageUrl(URL.createObjectURL(event.target.files[0]))
    }

    const [userImageFile, setUserImageFile] = useState(null)

    // bruker
    const { user } = useAuth({ middleware: 'auth' })

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [birth, setBirth] = useState()
    const [zip, setZip] = useState()
    const [club_id, setClub_id] = useState()
    const [errors] = useState([])
    const [user_image, setUser_image] = useState()
    const [user_id, setUser_id] = useState()
    const [publicProfile, setPublicProfile] = useState()

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

    useEffect(() => {
        if (user) {
            setFirstname(user.firstname)
            setLastname(user.lastname)
            setPhone(user.phone)
            setEmail(user.email)
            setBirth(user.birth)
            setZip(user.zip)
            setClub_id(user.club_id)
            setUser_image(user.user_image)
            setUser_id(user.id)
            setPublicProfile(user.public)
        }
    }, [user])

    // submit form

    const submitForm = async event => {
        event.preventDefault()
        const formData = new FormData()

        formData.append('_method', 'put')
        formData.append('firstname', firstname)
        formData.append('lastname', lastname)
        formData.append('user_image', user_image)
        formData.append('userImageFile', userImageFile)
        formData.append('phone', phone)
        formData.append('email', email)
        formData.append('birth', birth)
        formData.append('zip', zip)
        formData.append('club_id', club_id)
        formData.append('public', publicProfile ? 1 : 0)

        const updateSuccess = await axios.post(
            process.env.NEXT_PUBLIC_BACKEND_URL + `/api/users/${user_id}`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            },
        )

        if (updateSuccess) {
            setProfileUpdated(true)
            setTimeout(() => {
                setProfileUpdated(false)
            }, 3000)
        } else {
            alert('Det skjedde en feil ved oppdatering')
        }
    }

    const [userImageUrl, setUserImageUrl] = useState('/profile_default.jpg')

    useEffect(() => {
        if (user_image) {
            setUserImageUrl(
                process.env.NEXT_PUBLIC_BACKEND_URL + '/storage/' + user_image,
            )
        }
    }, [user_image])

    // slett bruker
    const { deleteProfile } = useAuth()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleDelete = () => {
        deleteProfile(user_id)
    }

    return (
        <>
            <DeleteModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                deleteProfile={handleDelete}></DeleteModal>
            <Navigation user={user} />
            <h1 className="text-center text-3xl">Profil</h1>
            <Label htmlFor="picture">Bilde</Label>
            <div className="flex items-center justify-center">
                <Image
                    id="picture"
                    src={userImageUrl}
                    height={200}
                    width={200}
                    alt="profilbilde"
                    className="h-64 w-64"
                />
            </div>
            <form onSubmit={submitForm} encType="multipart/form-data">
                {/* Picture */}
                <div className="mt-4 flex flex-col items-center">
                    <Input
                        id="file"
                        type="file"
                        className="block mt-1 w-full"
                        onChange={handleFileInputChange}
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
                        maxLength="4"
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

                {/* Postkode */}
                <div className="mt-4 flex justify-center items-center flex-col">
                    <Label>
                        Kryss av dersom du vil at organisasjoner skal kunne søke
                        deg opp:
                    </Label>

                    <Input
                        id="public"
                        type="checkbox"
                        checked={publicProfile}
                        className="block mt-1 w-10 h-10"
                        onChange={() => {
                            setPublicProfile(!publicProfile)
                        }}
                        pattern="[0-9]{4}"
                        maxLength="4"
                        placeholder="####"
                        required
                    />

                    <InputError messages={errors.zip} className="mt-2" />
                </div>

                <div className="justify-end mt-4 flex flex-col items-center">
                    <Button>Lagre</Button>
                </div>
            </form>
            {profileUpdated && (
                <h1 className="text-center">Profilen din ble oppdatert!</h1>
            )}
            <br />
            <br />
            <div className="justify-end mt-4 flex flex-col items-center">
                <button
                    id="btnDelete"
                    className=" underline"
                    onClick={() => {
                        setIsModalOpen(true)
                    }}>
                    Slett profilen min
                </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default ProfilePage
