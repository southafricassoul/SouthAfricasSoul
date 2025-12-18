import {createClient} from '@sanity/client'

export default createClient({
  projectId: 'gjlyc26p',
  dataset: 'sssw-database',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-04-23', // use current date (YYYY-MM-DD) to target the latest API version
})
