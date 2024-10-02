import { options } from '@/utils/richTextTypes'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'
import React from 'react'

const Blog = ({ post }) => {
    return (
        <>
            <div className="py-8 md:py-10">
                <div className="px-6 md:max-w-2xl lg:max-w-4xl 2xl:max-w-7xl mx-auto">
                    <span className='text-sm text-gray-600 dark:text-gray-400'>{post.fields.createdAt}</span>
                    <h1 className='text-3xl font-extrabold dark:text-gray-300 mt-4'>{post.fields.title}</h1>
                    <div className="flex gap-2 mt-6">
                        <div className="h-9 w-9 flex justify-center items-center">
                            <img src='https://tailwindcss.com/_next/static/media/danhollick.ee205d2a.jpg' alt='author' className='dark:text-gray-300 size-9 rounded-full' />
                        </div>
                        <div className="flex flex-col text-sm justify-center items-center">
                            <span className='dark:text-gray-300'>{post.fields.author}</span>
                            <Link href={`https://instagram.com/${post.fields.authorUsername}`} target='_blank'>
                                <span className='text-sky-500 dark:text-sky-400'>@{post.fields.authorUsername}</span>
                            </Link>
                        </div>
                    </div>
                    <p className='text-gray-600 text-base dark:text-gray-400 mt-8'>{post.fields.content}</p>
                    <div className="mt-12 dark:border dark:border-gray-800 rounded-2xl">
                        <img src={`https:${post.fields.image.fields.file.url}`} alt="" className='rounded-2xl' />
                    </div>
                    <div className="prose dark:prose-dark mt-8 text-gray-600 dark:text-gray-400">
                        {documentToReactComponents(post.fields.description, options)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
