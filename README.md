# SMV-CMS-Frontend

A content management system for Stamp My Visa

## Installation & Setup

You can setup the SMV-CMS-Frontend by running the following commands:

```
npm run setup
```

And then you can start the server by running the following command:

```
npm run start
```

Following are the help commands:

- Building:
  ```
  npm run build
  ```
- Linting:
  ```
  npm run lint
  ```
- Formatting:
  ```
  npm run format
  ```
- Testing:
  ```
  npm run test
  ```

## Branching & Versioning

- Production: `main`
- Development: `env/dev`
- Testing: `env/qa`
- Feature: `feat/<feature-desc>` e.g. `feat/1204-add-country-screen`
- Bugfix: `bug/<bug-desc>` e.g. `bug/1204-validation-error-on-country-screen`
- Documentation: `docs/<documentation-name>`
- Chore: `chore/<chore-desc>` e.g. `chore/eslint-setup`

### Notes:

- The base branch for feature & bugs branches must be `env/dev`.
- Direct commits to the `main`, `env/qa`, `env/dev` branch are not allowed.
- Raise PR against `env/dev` branch only.
- The `<feature-desc>` is feature short description with ticket number at starting.
- The `<bug-desc>` is bug short description with ticket number at starting.
- The `feat/` prefix is used to indicate a feature branch.
- The `bug/` prefix is used to indicate a bugfix branch.
- The `docs/` prefix is used to indicate a documentation branch.
