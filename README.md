# 00266745 – test waitUntil()

## Replication steps:

1. Clone the repo locally and install dependencies:

```bash
git clone https://github.com/vercel-support/00266745-waituntil.git
cd 00266745-waituntil
pnpm install
```

2. Run the development server and test the API route:

```bash
pnpm dev
```

```bash
curl http://localhost:3000/api/test-waitUntil
```

You should see this in runtime terminal:

```
❯ pnpm dev

> 00266745-waituntil@0.1.0 dev /Users/aldo/vercel/cases/00266745/00266745-waituntil
> next dev

  ▲ Next.js 14.2.7
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 1245ms
 ✓ Compiled /api/test-waitUntil in 80ms (58 modules)
entering waitUntil
 GET /api/test-waitUntil 200 in 129ms
Sent info e-mail.
```

3. Build and start the production server:

```bash
pnpm build
pnpm start
```

4. Test the API route again:

```bash
curl http://localhost:3000/api/test-waitUntil
```

You should might see this in runtime terminal:

```
❯ pnpm start

> 00266745-waituntil@0.1.0 start /Users/aldo/vercel/cases/00266745/00266745-waituntil
> next start

  ▲ Next.js 14.2.7
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 163ms
```

**There is no `GET` or `Sent info e-mail.` message in the output.**
