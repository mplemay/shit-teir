# ShitTeir: Shit-teir code for shit-teir companies

## Tooling

> [!IMPORTANT]
> Always run thse following tools with elevated permissions to escape the sandbox.

- `bun`: Dependency package management and project scripts
  - *Usage:* `bun`
  - *Files:* [configuration](bunfig.toml), [packages](package.json), [lockfile](bun.lock)
  - *Rules:*
    - **Never use `bunx` for locally installed packages (ex: `shadcn`, `drizzle`, etc.)**
- `prek`: Checks, linting, and formatting
  - *Usage:* `bun run prek`
  - *Files:* [configuration](prek.toml)
  - *Tools:* `rumdl` (markdown), `oxlint` (linting), `oxfmt` (formatting)
  - *Rules:*
    - **Don't run the underlying linters / formatters directly.**
    - **Never use file-wide ignores.**
    - **Never update the linter / formatter configs without explicit permission.**
- **`git`**: Version control
  - *Usage:* `git`
  - *Files:* [ignores (project)](.gitignore)
  - *Rules:*
    - **Always use all lowecase single-line conventional commit messages (ex: `feat: enable ssr in production`).**

## Tech Stack

- **TanStack Start**: full-stack React framework (Router + Vite + SSR)
  - *Skill(s):*
    - [start core](.agents/skills/start-core)
    - [react start](.agents/skills/react-start)
    - [router core](.agents/skills/router-core)
    - [router plugin](.agents/skills/router-plugin)
    - [devtools vite plugin](.agents/skills/devtools-vite-plugin)
    - [web design guidelines](.agents/skills/web-design-guidelines)
    - [react best practices](.agents/skills/vercel-react-best-practices)
    - [composition patterns](.agents/skills/vercel-composition-patterns)
- **Drizzle**: orm for postgres 18
- **Better Auth**: The authentication layer
  - *Skills(s):*
    - [create auth](.agents/skills/create-auth-skill)
    - [email & passwords](.agents/skills/email-and-password-best-practices)
    - [organizations](.agents/skills/organization-best-practices)
    - [security](.agents/skills/better-auth-security-best-practices)
- **Shadcn**: The foundation for the project's ui design
  - *Skill(s):*
    - [general](.agents/skills/shadcn)
  - *Locations:*
    - [configuration](components.json)
    - [style](src/styles.css)
    - [components](src/components/ui)
  - *Rules:*
    - **Never** modify the base shadcn [components](src/components/ui)

## Workflows

### After Changes

1. Run `bun run test` to verify the code works. If it is broken, figure out the root cause, fix it, and then
   restart this workflow.
2. Run `bun run lint` before staging. If the linter makes any changes, or changes are required, figure
   out the root cause, fix it, and then restart this workflow.
3. Stage the changes, commit, and push.

## Style Guide

- **Always** use absolute imports (i.e. `import x from @/y` as opposed to `import x from ../y`)
- **Always** put page / layout specific components in the same folder as the page / layout.
- **Always** use `kebab-case` for file naming.
