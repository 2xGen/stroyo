-- Run this in the Supabase SQL editor for project ieaogqcdasyhxlkuzkyq.
-- The site inserts rows from the server with the secret key. Visitors cannot read or write this table.

create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  email text not null check (char_length(email) <= 254),
  locale text not null check (locale in ('cs', 'en')),
  intent text not null check (intent in ('need', 'have', 'rent', 'buy', 'rent-buy')),
  context text not null check (context in ('hero', 'search', 'category', 'demo', 'owner', 'bottom')),
  query text check (query is null or char_length(query) <= 120),
  category text check (category is null or char_length(category) <= 40),
  location text check (location is null or char_length(location) <= 80),
  timing text check (timing is null or timing in ('week', 'month', 'browse')),
  offer text check (offer is null or offer in ('rent', 'sell', 'both')),
  source text not null default 'stroyo.cz',
  created_at timestamptz not null default now()
);

comment on table public.signups is 'Early-access and equipment-owner signups from stroyo.cz.';
comment on column public.signups.query is 'Equipment they need, or the machine they want to list.';
comment on column public.signups.offer is 'Owner form: rent, sell, or both.';
comment on column public.signups.context is 'Which form on the page sent the row.';

create index if not exists signups_created_at_idx on public.signups (created_at desc);
create index if not exists signups_email_idx on public.signups (email);

alter table public.signups enable row level security;

revoke all on table public.signups from anon, authenticated;
