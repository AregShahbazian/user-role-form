Products Grid
====

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Installation

- `npm install`

### Running the app

To use Hot Module Reloading without ejecting from `create-react-app`, the app is rewired using [this](https://daveceddia.com/hot-reloading-create-react-app/) guide.

To start the app, run:

- `npm start`

### Testing

#### Unit tests
- `npm run test`

#### E2E tests
[Testcafe](http://devexpress.github.io/testcafe/) 
is used for end-to-end tests. The command below will run the tests in Firefox and Chrome in headless mode.
- `npm run testcafe:all`

### Features

This is a showcase project for a form that can edit "user-roles" for example "projects". Each user can have 
maximum one role per project. The actual API calls are mocked.

All roles in the initial dataset can be edited and deleted. New roles can be created for the available users 
(per project). Because the API mock only accounts for existing data, newly created roles can't be updated/deleted.
 

### Stack

The app uses the ReactJS framework, and is written with JSX and ES6 syntax.

The React state is handled using Redux, and `redux-form` for form-states. Asynchronous processes are implemented in a saga-pattern using 
`redux-saga` and `redux-saga-routines`. Handling API calls is done using the `axios` library, and the API calls
are mocked with `axios-mock-adapter`. 

To ensure state-immutability, the `immutability-helper` library is used by the reducers to change the state.

For styling and user interface, the `react-widgets` and `styled-components` libraries are used. 














