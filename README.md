# papers

```bash
# Enables usage of the correct pnpm version for this project without having to explicitly install it. You only need to run this command once. See: https://nodejs.org/api/corepack.html#corepack
corepack enable

# Install dependencies
pnpm i

# Run the project
pnpm start
```

## Generating Supabase types

Start by [installing the Supabase CLi](https://supabase.com/docs/guides/cli) and then run the following commands:

```bash
# Login to Supabase. You only need to run this command once.
# You're going to need an access token that you can generate in the Supabase dashboard.
# See: https://supabase.com/dashboard/account/tokens
supabase login

pnpm generate-types
```

## Pulling project's environment variables

We use [dotenv](https://www.dotenv.org/) to manage our environment variables. To pull their latest version, run the following command:

```bash
pnpm pull:env
```
