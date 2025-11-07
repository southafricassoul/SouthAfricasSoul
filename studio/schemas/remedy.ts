import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'remedy',
  title: 'Remedy',
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
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'reference', to: {type: 'herb'}}],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'reference', to: {type: 'benefit'}}],
    }),
    defineField({
      name: 'preparationMethods',
      title: 'Preparation Methods',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
