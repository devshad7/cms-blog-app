'use client'

import { createClient } from 'contentful';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT_ID || 'master'
});

export default function BlogList() {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    // Function to fetch posts
    async function getPosts() {
        try {
            const entries = await client.getEntries({ content_type: 'post' });
            setPosts(entries.items);
        } catch (error) {
            setError('Error fetching posts.');
            console.error("Error fetching entries:", error);
        }
    }

    // Use useEffect to load the posts on component mount
    useEffect(() => {
        getPosts();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <Link href={`/blog/${post.fields.slug}`} key={post.sys.id}>
                            <div className="hover:bg-slate-50/70 px-3 md:px-8 py-4 md:mt-6 rounded-2xl border-l border-sky-100 dark:border-[#222324] dark:hover:border-slate-800/50 hover:border-slate-50/70 hover:dark:bg-[#222324]">
                                <h1 className='text-base font-semibold tracking-tight text-slate-900 dark:text-gray-300'>{post.fields.title}</h1>
                                <div className="mt-2 mb-2 md:mb-4 md:pr-10">
                                    <p className='font-light text-sm md:text-base text-slate-900 dark:text-gray-400'>{post.fields.content.substring(0,250)}...</p>
                                </div>
                                <span className='text-sky-500 text-sm'>Read More {'>'}</span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className='dark:text-gray-300'>No blog posts found.</p>
                )}
            </>
        </>
    );
}

// Fetch posts from Contentful
async function getPosts() {
    try {
        const entries = await client.getEntries({ content_type: 'post' });
        
        return entries.items.map((item) => ({
            title: item.fields.title,
            slug: item.fields.slug,
            content: item.fields.content,
            publishDate: item.fields.publishDate,
        }));
    } catch (error) {
        console.error("Error fetching entries:", error);
    }
}
