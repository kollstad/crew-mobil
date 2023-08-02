import axios from 'axios'

export default async function fetchData(endpoint) {
    return axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + endpoint)
}
