import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tribe',
  title: 'Tribe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})