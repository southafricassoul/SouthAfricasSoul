import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'plantPart',
  title: 'Plant Part',
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
  ],
})
