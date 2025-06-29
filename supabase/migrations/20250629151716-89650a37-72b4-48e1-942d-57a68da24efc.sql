
-- Создание таблицы профилей пользователей
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  user_type TEXT NOT NULL CHECK (user_type IN ('individual', 'company', 'manufacturer')),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company_name TEXT,
  industry TEXT,
  co2_emissions DECIMAL,
  product_description TEXT,
  materials TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создание таблицы анкет
CREATE TABLE public.questionnaires (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles NOT NULL,
  answers JSONB NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создание таблицы карбоновых сертификатов
CREATE TABLE public.carbon_certificates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles NOT NULL,
  co2_amount DECIMAL NOT NULL,
  action_type TEXT NOT NULL,
  verification_data JSONB,
  polygon_address TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'sold')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создание таблицы товаров
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  seller_id UUID REFERENCES public.profiles NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL NOT NULL,
  category TEXT NOT NULL,
  organic_certified BOOLEAN DEFAULT false,
  image_url TEXT,
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создание таблицы заказов
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  buyer_id UUID REFERENCES public.profiles NOT NULL,
  product_id UUID REFERENCES public.products NOT NULL,
  quantity INTEGER NOT NULL,
  total_amount DECIMAL NOT NULL,
  payment_method TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создание таблицы токенов GREEN
CREATE TABLE public.green_tokens (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles NOT NULL,
  amount DECIMAL NOT NULL DEFAULT 0,
  staked_amount DECIMAL NOT NULL DEFAULT 0,
  staking_end_date TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создание таблицы маркетплейса сертификатов
CREATE TABLE public.certificate_marketplace (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  seller_id UUID REFERENCES public.profiles NOT NULL,
  certificate_id UUID REFERENCES public.carbon_certificates NOT NULL,
  price DECIMAL NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'sold', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Создание таблицы рейтингов
CREATE TABLE public.ratings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id UUID REFERENCES public.profiles NOT NULL,
  total_co2_saved DECIMAL NOT NULL DEFAULT 0,
  rank_position INTEGER,
  nft_reward TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Включение RLS для всех таблиц
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questionnaires ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carbon_certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.green_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificate_marketplace ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ratings ENABLE ROW LEVEL SECURITY;

-- Политики для profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Политики для questionnaires
CREATE POLICY "Users can view their questionnaires" ON public.questionnaires
  FOR SELECT USING (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = profile_id));
CREATE POLICY "Users can create questionnaires" ON public.questionnaires
  FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = profile_id));

-- Политики для carbon_certificates
CREATE POLICY "Users can view their certificates" ON public.carbon_certificates
  FOR SELECT USING (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = profile_id));
CREATE POLICY "Users can create certificates" ON public.carbon_certificates
  FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = profile_id));

-- Политики для products (публичный просмотр, создание только владельцем)
CREATE POLICY "Anyone can view products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Users can create their products" ON public.products
  FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = seller_id));
CREATE POLICY "Users can update their products" ON public.products
  FOR UPDATE USING (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = seller_id));

-- Политики для orders
CREATE POLICY "Users can view their orders" ON public.orders
  FOR SELECT USING (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = buyer_id));
CREATE POLICY "Users can create orders" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = buyer_id));

-- Политики для green_tokens
CREATE POLICY "Users can view their tokens" ON public.green_tokens
  FOR SELECT USING (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = profile_id));
CREATE POLICY "Users can update their tokens" ON public.green_tokens
  FOR UPDATE USING (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = profile_id));

-- Политики для certificate_marketplace (публичный просмотр)
CREATE POLICY "Anyone can view marketplace" ON public.certificate_marketplace FOR SELECT USING (true);
CREATE POLICY "Users can create marketplace listings" ON public.certificate_marketplace
  FOR INSERT WITH CHECK (auth.uid() = (SELECT user_id FROM public.profiles WHERE id = seller_id));

-- Политики для ratings (публичный просмотр)
CREATE POLICY "Anyone can view ratings" ON public.ratings FOR SELECT USING (true);
