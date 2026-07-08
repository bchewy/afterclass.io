# AGENTS.md

## Cursor Cloud specific instructions

AfterClass is a single Next.js 15 monolith (T3 stack). Local dev needs **PostgreSQL in Docker** plus the **Next.js dev server**. See `DEVELOPMENT.md` for the canonical setup flow.

### Prerequisites (one-time on a fresh VM)

- **Node.js** ≥ 20 (runtime)
- **Bun** ≥ 1.1 (`~/.bun/bin` on PATH — install via https://bun.sh if missing)
- **Docker** with `fuse-overlayfs` storage driver in nested VMs (see Docker setup notes below)

### Services

| Service | Command | Port |
|---------|---------|------|
| PostgreSQL | `sudo docker compose up -d` | 5432 |
| Next.js dev | `bun run dev` | 3000 |
| Storybook (optional) | `bun run storybook` | 6006 |

### Database setup

On first run (or after `docker compose down -v`):

```sh
bunx prisma migrate deploy
bunx prisma db seed
```

`bunx prisma migrate dev` also works interactively; prefer `migrate deploy` in automation.

### Docker in Cloud Agent VMs

Systemd may not start Docker automatically. If `docker info` fails:

```sh
sudo dockerd > /tmp/dockerd.log 2>&1 &
```

Docker Compose must be run with `sudo` unless your user is in the `docker` group.

### Environment

- Copy `.env.example` → `.env` if missing (defaults work for local Postgres).
- **Supabase** (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) points at a remote project; placeholders are fine for read-only browsing.
- **Edge Config** falls back to `src/server/ecfg/config.json` when `EDGE_CONFIG` is invalid.

### Lint / typecheck / tests

| Task | Command |
|------|---------|
| Lint | `bun run lint` |
| Typecheck | `bunx tsc --noEmit` |
| E2E (optional, needs Cypress secrets + prod build) | `bun run build && bun run start` then `bunx cypress run` |

There is no `test` script in `package.json`; CI uses Cypress workflows in `.github/workflows/`.

### Common gotchas

- `bun install` runs `prisma generate` via `postinstall`; run it after pulling schema changes.
- Auth flows (v2 login/signup) need real Supabase credentials; course search and review browsing work with only Postgres + seed data.
