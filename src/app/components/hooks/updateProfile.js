const updateProfile = async (userId, userData) => {
    const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + `/api/users/${userId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Sette eventuelle andre nødvendige headers her,
                // som autentiserings tokens eller cookies
            },
            body: JSON.stringify(userData),
        },
    )

    if (!response.ok) {
        // Håndtere eventuelle feilrespons her
        console.error('An error occurred while updating the user')
        return
    }

    const updatedUser = await response.json()

    // Gjør noe med den oppdaterte brukeren her
    console.log(updatedUser)
}

export default updateProfile