## Getting Started

See [main readme file](../README.md) first.

## Running locally

First, run the development server:

```bash
npm run start
```

You should wait to see a message saying `Connected to MongoDB` and  `Server is running on port 3002` on ypur terminal.

## File Structure

### Project Root
- `src`: contains the source code of the application. you can find a detailed explanation of its content [here](#source-folder)
- `.env`: contains the `ATLAS_URI` environment variable for connecting to the database(**You are meant to add the .env provided via email**)
- `tsconfig.json`: typescript configuration.

### Source Folder
The src directory contains the core components of the application, organized as follows.

- `src/routes/`: contains the route handlers for different parts of the application.

- `src/middleware/`: contains middleware functions used throughout the application:

- `src/models/`: contains Mongoose models that define database schema.

- `src/types/`: contains custom TypeScript type definitions and interfaces.

- `src/index.ts`: The main entry point of the application. It sets up and starts the Express server, configures middleware, and defines routes. It also connects to the database and listens for incoming requests.
