import React from 'react'
import useSWR from 'swr';
import Link from "next/link";

export default function Fetch() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {
        data: comments,
        isLoading,
        isError: error,
    } = useSWR(url, fetcher,
        {revalidateOnFocus: false, revalidateOnReconnect: false});


    if (error) {
        return <p>Failed to fetch!</p>;
    }

    if (isLoading) {
        return <p>Loading comments....</p>;
    }

    const resultingComment = comments.slice(0, 10)
    return (



        <ul>

            {resultingComment.map((resultingComment, index) => (

                <li key={index}>

                    <p>Id: {resultingComment.id}</p>
                    <p>Name: {resultingComment.name}</p>
                    <p>E-Mail: {resultingComment.email}</p>
                    <p>Comment: {resultingComment.body}</p>
                </li>
            ))}
            <li><Link legacyBehavior={true} href="/"><a><button>To Homepage</button></a></Link>
            </li>
        </ul>
    );
}
