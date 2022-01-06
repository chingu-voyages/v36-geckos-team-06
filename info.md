## Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### What is husky ?

When you initialize Git on a project, it automatically comes with a feature called hooks. If you go to the root of this project and type:

```
ls .git/hooks
```

You'll see a list of sample hooks like `pre-push`, `pre-rebase`, `pre-commit`, and so on. These hooks provide us a way to run some scripts and execute some tasks before we perform a git action like before a commit for example. The scripts are run `pre` that is before the relevant action.

If we wanted to ensure that before someone creates a commit using the git commit command, that their code was properly linted and formatted, we could write a `pre-commit` Git hook. Writing this logic is long an complicated, husky helps us to do this more easily.

In this project i have set up husky to do **2 important things** before a commit `pre-commit`

### `Linting and Formatting`

The first thing husky runs npx `lint-staged`, this command ensures that the code you are committing is formatted with prettier and linted with eslint before you commit.

### `Commit Messages`

The second thing husky does is run `npx commitlint --edit`, this command checks that your commit messages follows the [conventional commit format](https://www.conventionalcommits.org/). Check the link to read more. But in summary you should structure your commit messages following the pattern below:

```
type(scope?): subject  #scope is optional; multiple scopes are supported (separate multiple scopes with: "/", "\" or ",")
```

Real world examples can look like this:

```
chore: run tests on travis ci
```

```
fix(server): send cors headers
```

```
feat(blog): add comment section
```

```
style(home): style footer
```

The most common types are:

- build
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

If you are struggling with commit messages conventions, run

```
npm run commit
```

This script will fire up a utility called `commitizen`, it provides a simple CLI that helps you write commit messages in the recommended format.

### Other Important Scripts

- `npm run dev` — Starts the application in development mode at `http://localhost:3000`.
- `npm run build` — Creates an optimized production build of your application.
- `npm start` — Starts the application in production mode.
- `npm lint` — Runs ESLint for all files in the `src` directory.
- `npm run format` — Runs Prettier for all files in the `src` directory.
- `npm run commit` — Run commitizen. Alternative to `git commit`.
