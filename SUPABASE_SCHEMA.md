# Supabase Schema — Mando Landing

## Tabla: `waitlist_signups`

Registra todos los envíos de formularios de la landing page.

```sql
-- ─────────────────────────────────────────────
--  Waitlist signups — Mando Landing
-- ─────────────────────────────────────────────

create table public.waitlist_signups (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null    default now(),

  email       text        not null,
  name        text,                   -- solo lo captura el modal
  plan        text        check (plan in ('plan_free', 'plan_pro', 'sin_plan')),
  source      text        not null    check (source in ('landing', 'modal')),

  constraint waitlist_signups_email_key unique (email)
);

-- Índice útil para filtrar por plan en el dashboard de Supabase
create index on public.waitlist_signups (plan, created_at desc);

-- ─────────────────────────────────────────────
--  Row Level Security
-- ─────────────────────────────────────────────

alter table public.waitlist_signups enable row level security;

-- El cliente solo puede insertar, nunca leer ni modificar
create policy "allow_insert"
  on public.waitlist_signups
  for insert
  with check (true);
```

## Campos por formulario

| Campo | `WaitlistForm` (sección pricing) | `WaitlistModal` |
|---|---|---|
| `email` | requerido | requerido |
| `name` | — | requerido |
| `plan` | `plan_free` / `plan_pro` / `sin_plan` | — |
| `source` | `'landing'` | `'modal'` |

## Notas

**Duplicados de email** — el `UNIQUE` en email rechaza un segundo intento del mismo correo. Si prefieres actualizar el plan en lugar de rechazar, usa esta variante en el insert:

```sql
ON CONFLICT (email) DO UPDATE
  SET plan   = EXCLUDED.plan,
      source = EXCLUDED.source;
```

**Migración desde Formspree** — reemplaza el `action` de los formularios por una Server Action (o route handler `/api/waitlist`) que haga el insert en Supabase.
