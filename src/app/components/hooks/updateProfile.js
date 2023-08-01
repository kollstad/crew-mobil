const updateProfile = async (userId, userData) => {
    try {
        const response = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_URL + '/sanctum/csrf-cookie',
            {
                method: 'GET',
                credentials: 'include', // Include credentials (cookies) in the request
            },
        )

        if (!response.ok) {
            console.error('An error occurred while fetching CSRF token')
            return
        }

        // Now proceed with the PUT request
        const updateResponse = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_URL + `/api/users/${userId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    // Set any other necessary headers here, like authentication tokens or cookies
                },
                body: JSON.stringify(userData),
                credentials: 'include', // Include credentials (cookies) in the request
            },
        )

        if (!updateResponse.ok) {
            console.error('An error occurred while updating the user')
            return
        }

        // const updatedUser = await response.json()
        // console.log(updatedUser)
        // Gjør noe med den oppdaterte brukeren her (Do something with the updated user here)
    } catch (error) {
        console.error('An error occurred:', error)
    }
}

export default updateProfile
