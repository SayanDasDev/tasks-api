# Project Setup

## Install eslint config

```bash
pnpm i -D  eslint @antfu/eslint-config

pnpm dlx @antfu/eslint-config@latest
```

Copy `eslint.config.js`

## Install zod-opnapi

```bash
pnpm i hono zod  @hono/zod-openapi
```

## Install Stoker (for some helper functions)

```bash
pnpm i stoker
```

## Install Pino Logger

```bash
pnpm i hono-pino pino pino-pretty
```

## Install dotenv for type-safe env

```bash
pnpm i dotenv dotenv-expand
```

## Install Scalar (for OpenAPI reference)

```bash
pnpm i @scalar/hono-api-reference
```

## Install Drizzle

```bash
pnpm add drizzle-orm pg

pnpm add -D drizzle-kit @types/pg
```

## Install zod-to-openapi (Optional - Only used when using jsonContentOneOf() of stoker)

```bash
pnpm i @asteasolutions/zod-to-openapi
```
