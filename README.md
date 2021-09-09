Interview Scheduler
=========

Interview Scheduler is a single page application built using React. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Jest tests are used through the development of the project.

This repository was created using a skeleton from Lighthouse Labs. I have cloned there starter repository and used it to practice React, HTML, CSS, Webpack, Babel, Axios, Storybook, Webpack Dev Server, Jest and Cypress.

## Author

Created by:

Amit Baid 
- amit.baid@hotmail.com 
- [Github](https://github.com/Abaid77)

## App Functions
 - Interviews can be booked between Monday and Friday.
 - A user can switch between weekdays.
 - A user can book an interview in an empty appointment slot.
 - Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
 - A user can cancel an existing interview.
 - A user can edit the details of an existing interview.
 - The list of days informs the user how many slots are available for each day.
 - The expected day updates the number of spots available when an interview is booked or canceled.
 - A user is presented with a confirmation when they attempt to cancel an interview.
 - A user is shown an error if an interview cannot be saved or deleted.
 - A user is shown a status indicator while asynchronous operations are in progress.
 - When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
 - The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
3. Install dependencies with: 
    ```sh
    npm install
    ```
4. Run Webpack Development Server with:
    ```sh
    npm start
    ```
5. You will need to clone a copy of the API for the server API and have that running. Link to repository: [scheduler-api](https://github.com/lighthouse-labs/scheduler-api)

6. Run the Jest Test Framework with:
  ```sh
  npm test
  ```
7. Run the Storybook Visual Testbed
  ```sh
  npm run storybook
  ```

## Screenshots

!["Screenshot of one days appointments"](https://github.com/Abaid77/scheduler/blob/master/docs/booked-appointments.png?raw=true)
###### Appointments for single day 

!["Screenshot of confirm delete"](https://github.com/Abaid77/scheduler/blob/master/docs/delete-confirm.png?raw=true)
###### Confirm delete view

!["Screenshot of open form"](https://github.com/Abaid77/scheduler/blob/master/docs/open-form.png?raw=true)
###### Open form view



## Dependencies
  - axios 0.21.1,
  - classnames 2.2.6,
  - normalize.css 8.0.1,
  - react 16.9.0,
  - react-dom 16.9.0,
  - react-hooks-testing-library 0.6.0,
  - react-scripts 3.0.0

## Dev Dependencies
  - @babel/core 7.4.3,
  - @storybook/addon-actions 5.0.10,
  - @storybook/addon-backgrounds 5.0.10,
  - @storybook/addon-links 5.0.10,
  - @storybook/addons 5.0.10,
  - @storybook/react 5.0.10,
  - @testing-library/jest-dom 4.0.0,
  - @testing-library/react 8.0.7,
  - babel-loader 8.0.5,
  - node-sass 4.14.0,
  - prop-types 15.7.2,
  - react-test-renderer 16.9.0





