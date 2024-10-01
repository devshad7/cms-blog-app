import ErrorPage from '@/app/not-found';
import Blog from '@/components/Blog';
import Navbar from '@/components/Navbar';
import { client } from '@/utils/contentful';
import React from 'react';

const BlogPost = async ({ params }) => {
    const { slug } = params;

    const entries = await client.getEntries({
        content_type: 'post',
        'fields.slug': slug,
    });

    const post = entries.items.length > 0 ? entries.items[0] : null;

    if (!post) {
        return <ErrorPage />;
    }

    return (
        <>
        <Navbar />
        <Blog post={post} />
        </>
    );
};

export async function generateStaticParams() {
    const entries = await client.getEntries({
        content_type: 'post',
    });

    const paths = entries.items.map((item) => ({
        slug: item.fields.slug,
    }));

    return paths.map((path) => ({
        params: path,
    }));
}

export default BlogPost;