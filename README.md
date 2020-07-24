# dwp-56688

API that lists users

# Description

Node application written in JavaScript using the Express framework.

# Running

To run the application, change directory to this folder, then:

- npm install
- npm start

Modifying source files and saving them after starting the application will trigger a hot reload.

Once running, the following API calls can be made:

## Get users by city

Route: `/city/:city/users`
Example: `curl http://localhost:3000/city/London/users`

# Testing

To run the tests (which includes code coverage):

- npm test

# Development environment

Here are the non-functional highlights:

- Hot reloading via nodemon
- Linting with ESLint
- Unit testing and coverage with Jest
