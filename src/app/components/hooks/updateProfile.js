import axios from 'axios'

const updateProfile = async (userId, userData) => {
    try {
        await axios.get(
            process.env.NEXT_PUBLIC_BACKEND_URL + '/sanctum/csrf-cookie',
            {
                withCredentials: true,
            },
        )

        const updateResponse = await axios.put(
            process.env.NEXT_PUBLIC_BACKEND_URL + `/api/users/${userId}`,
            userData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            },
        )

        if (!updateResponse.data) {
            console.error('An error occurred while updating the user')
            return false
        }

        return true

        // Handle the response data if needed
    } catch (error) {
        console.error('An error occurred:', error)
    }
}

export default updateProfile
