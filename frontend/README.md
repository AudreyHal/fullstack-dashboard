
## Getting Started
See [main readme file](../README.md) first.


## Running locally
First, run the development server:

```bash
npm run dev
```

To run tests:

```bash
npm run test
```
                                          

## File Structure

### Project Root
- `app`: contains all pages in the page.
- `src`: contains the source code of the application. you can find a detailed explanation of its content [here](#source-folder)
- `public`: everything that is available publicly in our application. e.g index.html, favicons.
- `.env`: contains the `NEXT_PUBLIC_BASE_URL` environment variables for local development(**You are meant to add the .env provided via email**)
- `tsconfig.json`: typescript configuration.

### Source Folder
This contains logic, components, utilities,etc used within the pages.

- `hooks`: custom react hooks.
- `utilities`: reusable utility functions.
- `testing-utils`: utilities used for testing.
- `providers`: context providers.
- `hocs`: higher-order components.

### Third Party Libraries
- [Material UI](https://mui.com/material-ui/): provides accessible and well tested components as a base.
- [react-hook-form](https://react-hook-form.com/): used to handle forms
- [axios](https://github.com/axios/axios): http client, mainly used in the `axiosApi` abstraction.
- [react-query](https://tanstack.com/query/v4): Caching and managing server-side state efficiently.
