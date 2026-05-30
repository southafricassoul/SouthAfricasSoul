import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'herb',
  title: 'Herb',
  type: 'document',
  fields: [
    defineField({
      name: 'commonName',
      title: 'Common Name',
      type: 'string',
    }),
    defineField({
      name: 'scientificName',
      title: 'Scientific Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'array',
      of: [{type: 'reference', to: {type: 'region'}}],
    }),
    defineField({
      name: 'plantParts',
      title: 'Plant Parts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'plantPart'}}],
    }),
    defineField({
      name: 'essentialOils',
      title: 'Essential Oils',
      type: 'array',
      of: [{type: 'reference', to: {type: 'essentialOil'}}],
    }),
    defineField({
      name: 'carrierOils',
      title: 'Carrier Oils',
      type: 'array',
      of: [{type: 'reference', to: {type: 'carrierOil'}}],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'reference', to: {type: 'benefit'}}],
    }),
    defineField({
      name: 'remedies',
      title: 'Remedies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'remedy'}}],
    }),
    defineField({
      name: 'traditions',
      title: 'Traditions',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tradition'}}],
    }),
    defineField({
      name: 'cautions',
      title: 'Cautions',
      type: 'text',
    }),
    defineField({
      name: 'potency',
      title: 'Potency',
      type: 'string',
      options: {
        list: ['Low', 'Medium', 'High'],
      },
    }),
  ],
})