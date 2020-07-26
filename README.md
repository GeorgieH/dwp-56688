# Senior Software Engineer Test - 56688

API that lists users

# Description

Node application written in JavaScript using the Express framework.

# Running

To run the application, change directory to this folder, then:

- `npm install`
- `npm start`

Modifying source files and saving them after starting the application will trigger a hot reload.

Once running, the following API calls can be made:

## Get users by location

This API is used to get users who are listed as either living in the specified location, or whose coordinates are within a given radius relative to the centre of the location. The radius is expressed in metres. The example get users who are either listed as living in London or whose coordinates are within a radius of 50 miles relative to the centre of London.

- Route: `GET /location/:location/users`
- Example: `curl http://localhost:3000/location/London/users?radius=80467.2`

## Get users by city

This API is used to get users who are listed as living in the specified city. The example gets users who are listed as living in London.

- Route: `GET /city/:city/users`
- Example: `curl http://localhost:3000/city/London/users`

## Get users by coordinates

This API is used to get users who are listed as having coordinates within a given radius of the specified coordinates. The example gets users who are within 50 miles from the centre of London.

- Route: `POST /coordinates/users`
- Example: `curl --header "Content-Type: application/json" --request POST --data '{"latitude":51.507351,"longitude":-0.127758,"radius":80467.2}' http://localhost:3000/coordinates/users`

# Testing

To run the unit tests (which includes code coverage):

- `npm test`

# Containerization

A Dockerfile is included which clones the repository into the image on build. To get it working, change directory to this folder, then:

- `docker build -t george.howarth/users-api .`
- `docker run -p 3000:3000 -d george.howarth/users-api`
- (TEST) `curl http://localhost:3000/location/London/users?radius=80467.2`

# Development environment

Highlights:

- Hot reloading via nodemon
- Linting with ESLint
- Unit testing and coverage with Jest
- Containerized version of the app with Docker

# Possible improvements

- Better unit test coverage
- Acceptance tests
- Use an external API to get the coordinates of a given location
