import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: "southafricassoul",
  title: "SouthAfrica's Soul CMS",

  projectId: 'gjlyc26p',
  dataset: 'sssw-database',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
