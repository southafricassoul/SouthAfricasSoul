import { createClient } from '@sanity/client';

const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const sanityDataset = import.meta.env.VITE_SANITY_DATASET;

export const sanity = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  useCdn: true,
});
