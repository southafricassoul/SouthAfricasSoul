import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'modality',
  title: 'Modality',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Ayurveda', 'Homeopathy', 'Other'],
      },
    }),
    defineField({
      name: 'principles',
      title: 'Principles',
      type: 'text',
    }),
    defineField({
      name: 'herbsUsed',
      title: 'Herbs Used',
      type: 'array',
      of: [{type: 'reference', to: {type: 'herb'}}],
    }),
  ],
})
