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

This API is used to get users who are listed as either living in the specified location, or whose coordinates are within a given radius relative to the centre of the location. The radius is expressed in metres. The example effectively uses a radius of 50 miles.

- Route: `GET /location/:location/users`
- Example: `curl http://localhost:3000/location/London/users?radius=80467.2`

## Get users by city

This API is used to get users who are listed as living in the specified city.

- Route: `GET /city/:city/users`
- Example: `curl http://localhost:3000/city/London/users`

## Get users by coordinates

This API is used to get users who are listed as having coordinates within a given radius of the specified coordinates. The example gets users who are within 50 miles from the centre of London.

- Route: `POST /coordinates/users`
- Example: `curl --header "Content-Type: application/json" --request POST --data '{"latitude":51.507351,"longitude":-0.127758,"radius":80467.2}' http://localhost:3000/coordinates/users`

# Testing

To run the unit tests (which includes code coverage):

- `npm test`

# Development environment

Highlights:

- Hot reloading via nodemon
- Linting with ESLint
- Unit testing and coverage with Jest
