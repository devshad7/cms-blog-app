import { BLOCKS } from '@contentful/rich-text-types'

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
        // Add more blocks as needed
    },
}