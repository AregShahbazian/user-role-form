Products Grid
====

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Installation

- `npm install`

### Running the app

- `npm start

### Features

This is a showcase project for a form that can edit "user-roles" for example "projects". Each user can have exactly one 
role per project. The actual API calls are mocked.

### Stack

The app uses the ReactJS framework, and is written with JSX and ES6 syntax.

The React state is handled using Redux. Asynchronous processes are implemented in a saga-pattern using `redux-saga` and 
 `redux-saga-routines`. Handling API calls is done using the `axios` library, and to ensure state-immutability, the 
 `immutability-helper` library is used by the reducers to change the state.
