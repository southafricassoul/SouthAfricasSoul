import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tradition',
  title: 'Tradition',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'reference',
      to: {type: 'region'},
    }),
    defineField({
      name: 'herbsUsed',
      title: 'Herbs Used',
      type: 'array',
      of: [{type: 'reference', to: {type: 'herb'}}],
    }),
  ],
})
