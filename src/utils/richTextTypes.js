import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Image from 'next/image';

export const options = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => (
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-300 mt-4">
                {children}
            </h1>
        ),
        // You can define custom rendering for other elements as well, like paragraphs, images, etc.
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="text-base text-gray-600 dark:text-gray-400">
                {children}
            </p>
        ),
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { file, title } = node.data.target.fields;
            const imageUrl = file.url;
            const imageAlt = title || 'Contentful Image';

            return (
                <Image
                    src={`https:${imageUrl}`}
                    alt={imageAlt}
                    width={800}
                    height={600}
                    className="rounded-[.5rem]"
                    priority={false}
                />
            );
        },
        // Add more blocks as needed
    },
}