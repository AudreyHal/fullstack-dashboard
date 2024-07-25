# Dashboard

This repo contains the frontend and backend code of this application.

## Getting started

- Clone the github repo.
- **Add `.env` files provided in the email to the respective folders in the project (THIS IS CRUCIAL)**
- When in the project directory run the following on your terminal:

 ```
 cd backend
npm run start

```
You should wait to see a message saying `Connected to MongoDB` and  `Server is running on port 3002` on ypur terminal.

Then on another terminal run:

```
cd frontend
npm run dev

```
- Open http://localhost:3000/ (or whatever port the frontend open on) on your browser and navigate to the sign up portion and create a new user, then proceed to log into the app.


## Folder structure
- Frontend: See frontend/README.md
- Backend: See backend/README.md


### Potential Improvements/ some unfinished features
-  Internationalization (i18n) support.
-  Improved visual design.
-  Comprehensive public API documentation for developers like swagger.
-  Comprehensive testings(E2E testing, api testing,performance testing ).
-  Improved Token Management (having access and refresh tokens).
-  Integrating tracking and analytics to gain insight on user behaviour.
-  Integrating performance monitoring tools to identify issues.e.g DataDog, Grafana, etc