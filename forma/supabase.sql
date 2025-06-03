create table if not exists prompt_queue (
  id uuid primary key default uuid_generate_v4(),
  prompt text,
  stl_url text,
  preview_url text,
  category text,
  is_public boolean default true,
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  model_id uuid references prompt_queue(id),
  email text,
  stripe_session text,
  created_at timestamptz default now()
);

create or replace function create_checkout_session(model_id uuid)
returns json as $$
declare
  session_id text := 'test_session';
begin
  insert into orders (model_id, stripe_session)
  values (model_id, session_id);
  return json_build_object('session_id', session_id);
end;
$$ language plpgsql security definer;

