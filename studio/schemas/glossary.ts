import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'glossary',
  title: 'Glossary',
  type: 'document',
  fields: [
    defineField({
      name: 'term',
      title: 'Term',
      type: 'string',
    }),
    defineField({
      name: 'definition',
      title: 'Definition',
      type: 'text',
    }),
  ],
})
