CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users/Profiles (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Products
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  compare_at_price DECIMAL(10,2),
  sku TEXT UNIQUE,
  stock_quantity INTEGER DEFAULT 0,
  low_stock_threshold INTEGER DEFAULT 5,
  weight DECIMAL(8,2),
  dimensions JSONB,
  stripe_price_id TEXT,
  sanity_product_id TEXT,
  active BOOLEAN DEFAULT TRUE,
  featured BOOLEAN DEFAULT FALSE,
  category TEXT,
  tags TEXT[],
  images TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Product Variants (for size, color, etc.)
CREATE TABLE public.product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES public.products ON DELETE CASCADE,
  name TEXT NOT NULL,
  sku TEXT UNIQUE,
  price DECIMAL(10,2),
  stock_quantity INTEGER DEFAULT 0,
  options JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Shopping Carts
CREATE TABLE public.carts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  session_id TEXT,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Cart Items
CREATE TABLE public.cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cart_id UUID REFERENCES public.carts ON DELETE CASCADE,
  product_id UUID REFERENCES public.products ON DELETE CASCADE,
  variant_id UUID REFERENCES public.product_variants ON DELETE SET NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  price_at_add DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users,
  order_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending',
  subtotal DECIMAL(10,2) NOT NULL,
  tax DECIMAL(10,2) DEFAULT 0,
  shipping DECIMAL(10,2) DEFAULT 0,
  discount DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  stripe_payment_intent_id TEXT,
  stripe_payment_status TEXT,
  shipping_address JSONB,
  billing_address JSONB,
  tracking_number TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Order Items
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders ON DELETE CASCADE,
  product_id UUID REFERENCES public.products,
  variant_id UUID REFERENCES public.product_variants,
  product_name TEXT NOT NULL,
  variant_name TEXT,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Product Reviews
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES public.products ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  comment TEXT,
  verified_purchase BOOLEAN DEFAULT FALSE,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(product_id, user_id)
);

-- Wishlists
CREATE TABLE public.wishlists (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  product_id UUID REFERENCES public.products ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Subscriptions (optional for recurring orders)
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  stripe_subscription_id TEXT UNIQUE,
  status TEXT,
  product_id UUID REFERENCES public.products,
  quantity INTEGER DEFAULT 1,
  frequency TEXT,
  next_delivery_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Workshop/Event Bookings (optional)
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  sanity_event_id TEXT NOT NULL,
  event_title TEXT NOT NULL,
  event_date TIMESTAMP NOT NULL,
  attendees INTEGER DEFAULT 1,
  total_price DECIMAL(10,2),
  status TEXT DEFAULT 'confirmed',
  stripe_payment_intent_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);