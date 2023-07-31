'use client'

import useSWR from 'swr'

export default function ProjectPage() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        process.env.NEXT_PUBLIC_BACKEND_URL + '/api/projects',
        fetcher,
    )

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const projects = data?.projects // Access the 'projects' array from the API response

    return (
        <div>
            Her er prosjektene dine:
            <ul>
                {projects?.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    )
}
