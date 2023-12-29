import React, { useState } from 'react';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json())

const Post = () => {
    const carbValue = 3;
    const {
        data: emissionData,
        isLoading,
        isError: error
    } = useSWR('/api/getAverage', fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    if (error) {
        return <p>Failed to fetch</p>
    }

    if (isLoading) {
        return <p>Loading Emissions....</p>
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newValue = {
            carbonValue: carbValue,
        }

        const response = await fetch('/api/updateDatabase', {
            method: 'POST',
            body: JSON.stringify(newValue)
        })

        const data = await response.json()
        console.log(JSON.stringify(data))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Post
