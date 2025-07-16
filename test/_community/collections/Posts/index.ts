import type { CollectionConfig } from 'payload'

import { lexicalEditor, UploadFeature } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, UploadFeature()],
      }),
    },
  ],
  versions: {
    drafts: {
      autosave: false,
      schedulePublish: false,
    },
    maxPerDoc: 50,
  },
}
