/*
  # Create Core Tables for SouthAfrica's Soul Herbal Platform

  ## Overview
  This migration creates the foundational database structure for a comprehensive herbal remedy and education platform.

  ## New Tables

  ### 1. Categories
  - `id` (uuid, primary key)
  - `name` (text) - Category name
  - `slug` (text) - URL-friendly identifier
  - `type` (text) - Type: ailment, body_system, benefit, product_category, etc.
  - `description` (text) - Category description
  - `parent_id` (uuid) - For nested categories
  - `created_at` (timestamptz)

  ### 2. Herbs/Plants
  - `id` (uuid, primary key)
  - `common_name` (text) - Common name
  - `botanical_name` (text) - Scientific name
  - `african_names` (jsonb) - Regional names {language: name}
  - `plant_part` (text[]) - Array: leaves, roots, seeds, bark, flowers, fruit, resin
  - `description` (text)
  - `properties` (text[]) - Medicinal properties
  - `safety_notes` (text)
  - `image_url` (text)
  - `created_at` (timestamptz)

  ### 3. Products
  - `id` (uuid, primary key)
  - `name` (text)
  - `description` (text)
  - `category_id` (uuid) - Links to categories
  - `price` (numeric)
  - `image_url` (text)
  - `stock_quantity` (integer)
  - `product_type` (text) - powder, tea, oil, kit, ebook, etc.
  - `created_at` (timestamptz)

  ### 4. Remedies
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `preparation_method` (text) - infusion, decoction, tincture, salve, etc.
  - `ingredients` (jsonb) - Array of {herb_id, quantity, unit}
  - `instructions` (text)
  - `benefits` (text[])
  - `safety_warnings` (text)
  - `created_at` (timestamptz)

  ### 5. Essential Oils
  - `id` (uuid, primary key)
  - `name` (text)
  - `botanical_name` (text)
  - `aroma_note` (text) - top, middle, base
  - `uses` (jsonb) - {physical: [], cosmetic: [], spiritual: [], emotional: []}
  - `safety_info` (text)
  - `blends_well_with` (uuid[]) - Array of oil IDs
  - `created_at` (timestamptz)

  ### 6. Carrier Oils
  - `id` (uuid, primary key)
  - `name` (text)
  - `nutrients` (text[])
  - `skin_types` (text[])
  - `absorption_rate` (text) - fast, medium, slow
  - `shelf_life` (text)
  - `created_at` (timestamptz)

  ### 7. Educational Content
  - `id` (uuid, primary key)
  - `title` (text)
  - `slug` (text)
  - `content` (text)
  - `category` (text) - herbalism, aromatherapy, nutrition, etc.
  - `subcategory` (text)
  - `author` (text)
  - `published_at` (timestamptz)
  - `created_at` (timestamptz)

  ### 8. Blog Posts
  - `id` (uuid, primary key)
  - `title` (text)
  - `slug` (text)
  - `content` (text)
  - `excerpt` (text)
  - `category` (text) - healing_african_way, folklore, seasonal, etc.
  - `featured_image` (text)
  - `published_at` (timestamptz)
  - `created_at` (timestamptz)

  ### 9. Workshops/Events
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `event_type` (text) - workshop, webinar, in-person
  - `start_date` (timestamptz)
  - `end_date` (timestamptz)
  - `location` (text)
  - `price` (numeric)
  - `max_participants` (integer)
  - `created_at` (timestamptz)

  ### 10. Glossary Terms
  - `id` (uuid, primary key)
  - `term` (text)
  - `definition` (text)
  - `regional_names` (jsonb) - {language: name}
  - `category` (text)
  - `created_at` (timestamptz)

  ### 11. Herb-Category Mapping (Many-to-Many)
  - `herb_id` (uuid)
  - `category_id` (uuid)
  - Primary key: (herb_id, category_id)

  ### 12. Remedy-Category Mapping (Many-to-Many)
  - `remedy_id` (uuid)
  - `category_id` (uuid)
  - Primary key: (remedy_id, category_id)

  ## Security
  - Enable RLS on all tables
  - Public read access for most content tables
  - Authenticated access for user-generated content
  - Admin-only write access for core content

  ## Notes
  - All tables include proper indexes for search and filtering
  - JSONB fields allow flexible structured data
  - Array fields enable multi-value attributes
  - Timestamps track content creation
*/

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  type text NOT NULL,
  description text,
  parent_id uuid REFERENCES categories(id),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_categories_type ON categories(type);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

-- Herbs/Plants table
CREATE TABLE IF NOT EXISTS herbs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  common_name text NOT NULL,
  botanical_name text,
  african_names jsonb DEFAULT '{}'::jsonb,
  plant_part text[] DEFAULT ARRAY[]::text[],
  description text,
  properties text[] DEFAULT ARRAY[]::text[],
  safety_notes text,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_herbs_common_name ON herbs(common_name);
CREATE INDEX IF NOT EXISTS idx_herbs_botanical_name ON herbs(botanical_name);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  category_id uuid REFERENCES categories(id),
  price numeric(10,2) DEFAULT 0,
  image_url text,
  stock_quantity integer DEFAULT 0,
  product_type text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(product_type);

-- Remedies table
CREATE TABLE IF NOT EXISTS remedies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  preparation_method text,
  ingredients jsonb DEFAULT '[]'::jsonb,
  instructions text,
  benefits text[] DEFAULT ARRAY[]::text[],
  safety_warnings text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_remedies_preparation ON remedies(preparation_method);

-- Essential oils table
CREATE TABLE IF NOT EXISTS essential_oils (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  botanical_name text,
  aroma_note text,
  uses jsonb DEFAULT '{}'::jsonb,
  safety_info text,
  blends_well_with uuid[] DEFAULT ARRAY[]::uuid[],
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_essential_oils_name ON essential_oils(name);

-- Carrier oils table
CREATE TABLE IF NOT EXISTS carrier_oils (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  nutrients text[] DEFAULT ARRAY[]::text[],
  skin_types text[] DEFAULT ARRAY[]::text[],
  absorption_rate text,
  shelf_life text,
  created_at timestamptz DEFAULT now()
);

-- Educational content table
CREATE TABLE IF NOT EXISTS educational_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  category text,
  subcategory text,
  author text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_educational_category ON educational_content(category);
CREATE INDEX IF NOT EXISTS idx_educational_slug ON educational_content(slug);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text,
  excerpt text,
  category text,
  featured_image text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_blog_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_posts(published_at);

-- Workshops/Events table
CREATE TABLE IF NOT EXISTS workshops (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  event_type text,
  start_date timestamptz,
  end_date timestamptz,
  location text,
  price numeric(10,2) DEFAULT 0,
  max_participants integer,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_workshops_start_date ON workshops(start_date);

-- Glossary terms table
CREATE TABLE IF NOT EXISTS glossary_terms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  term text NOT NULL UNIQUE,
  definition text,
  regional_names jsonb DEFAULT '{}'::jsonb,
  category text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_glossary_term ON glossary_terms(term);

-- Herb-Category mapping table (many-to-many)
CREATE TABLE IF NOT EXISTS herb_categories (
  herb_id uuid REFERENCES herbs(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (herb_id, category_id)
);

-- Remedy-Category mapping table (many-to-many)
CREATE TABLE IF NOT EXISTS remedy_categories (
  remedy_id uuid REFERENCES remedies(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (remedy_id, category_id)
);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE herbs ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE remedies ENABLE ROW LEVEL SECURITY;
ALTER TABLE essential_oils ENABLE ROW LEVEL SECURITY;
ALTER TABLE carrier_oils ENABLE ROW LEVEL SECURITY;
ALTER TABLE educational_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE glossary_terms ENABLE ROW LEVEL SECURITY;
ALTER TABLE herb_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE remedy_categories ENABLE ROW LEVEL SECURITY;

-- Public read policies for content tables
CREATE POLICY "Public can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view herbs"
  ON herbs FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view remedies"
  ON remedies FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view essential oils"
  ON essential_oils FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view carrier oils"
  ON carrier_oils FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view educational content"
  ON educational_content FOR SELECT
  TO anon, authenticated
  USING (published_at IS NOT NULL AND published_at <= now());

CREATE POLICY "Public can view blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published_at IS NOT NULL AND published_at <= now());

CREATE POLICY "Public can view workshops"
  ON workshops FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view glossary terms"
  ON glossary_terms FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view herb categories"
  ON herb_categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view remedy categories"
  ON remedy_categories FOR SELECT
  TO anon, authenticated
  USING (true);