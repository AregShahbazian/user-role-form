import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {Provider} from "react-redux";
import reducer from "./reducers/index";
import rootSaga from "./sagas/index";
import registerServiceWorker from './registerServiceWorker';
import 'react-widgets/dist/css/react-widgets.css';
import App from "./components/App";
import {AppContainer} from 'react-hot-loader';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const render = Component => {
    ReactDOM.render(
        // Wrap App inside AppContainer
        <AppContainer>
            <Provider store={store}>
                <App/>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

registerServiceWorker();

render(App);

/**
 * Workaround to enable MHR without ejecting from create-react-app
 * https://daveceddia.com/hot-reloading-create-react-app/
 * */
if (module.hot) {
    module.hot.accept("./components/App", () => {
        render(App);
    });
}