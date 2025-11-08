import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'essentialOil',
  title: 'Essential Oil',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'scientificName',
      title: 'Scientific Name',
      type: 'string',
    }),
    defineField({
      name: 'sourcePlant',
      title: 'Source Plant',
      type: 'reference',
      to: {type: 'herb'},
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'reference', to: {type: 'benefit'}}],
    }),
    defineField({
      name: 'uses',
      title: 'Uses',
      type: 'text',
    }),
    defineField({
      name: 'aromaNote',
      title: 'Aroma Note',
      type: 'string',
      options: {
        list: ['Top', 'Middle', 'Base'],
      },
    }),
    defineField({
      name: 'cautions',
      title: 'Cautions',
      type: 'text',
    }),
  ],
})
