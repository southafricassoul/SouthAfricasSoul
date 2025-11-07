import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tutorial',
  title: 'Tutorial',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Video', 'Text'],
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'relatedHerbs',
      title: 'Related Herbs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'herb'}}],
    }),
  ],
})
